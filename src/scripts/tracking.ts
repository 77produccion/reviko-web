/* Medición de la web para la pauta (Meta Pixel).
 *
 * Qué hace:
 *  1. Guarda los UTM y el fbclid con que llega el visitante (30 días).
 *  2. Se los pasa a todos los enlaces hacia app.reviko.io, para que el
 *     registro en la app sepa de qué anuncio vino.
 *  3. Envía eventos al píxel:
 *     - PageView          → cada página vista
 *     - ViewContent       → llegó a Planes, abrió /demo o una landing de nicho
 *     - Contact           → clic en cualquier botón de WhatsApp
 *     - Lead              → clic en "Prueba gratis" / registro (con el plan)
 *     - CalculadoraUsada  → movió la calculadora (evento personalizado)
 *
 * El evento de conversión real (StartTrial / Subscribe) lo debe disparar
 * app.reviko.io cuando el negocio termina el registro. Ver README.
 */
import { APP_URL, META_PIXEL_ID } from "../i18n/config";

type Fbq = ((...args: unknown[]) => void) & { callMethod?: unknown };
declare global {
  interface Window {
    fbq?: Fbq;
  }
}

const STORE_KEY = "reviko-attr";
const TTL_MS = 30 * 24 * 60 * 60 * 1000;
const PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "fbclid",
] as const;

type Attribution = Partial<Record<(typeof PARAMS)[number], string>> & {
  landing?: string;
  ts?: number;
};

function readAttribution(): Attribution {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (!raw) return {};
    const data = JSON.parse(raw) as Attribution;
    if (!data.ts || Date.now() - data.ts > TTL_MS) return {};
    return data;
  } catch {
    return {};
  }
}

/** Guarda los parámetros de campaña de la URL actual (último clic gana). */
function captureAttribution(): Attribution {
  const url = new URL(window.location.href);
  const fresh: Attribution = {};
  for (const key of PARAMS) {
    const value = url.searchParams.get(key);
    if (value) fresh[key] = value.slice(0, 200);
  }
  if (Object.keys(fresh).length === 0) return readAttribution();
  const data: Attribution = { ...fresh, landing: url.pathname, ts: Date.now() };
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(data));
  } catch {
    /* modo privado: seguimos sin guardar */
  }
  return data;
}

/** Añade UTM/fbclid (y la página de origen) a los enlaces hacia la app. */
function decorateAppLinks(attr: Attribution): void {
  const appOrigin = new URL(APP_URL).origin;
  document.querySelectorAll<HTMLAnchorElement>("a[href]").forEach((a) => {
    let url: URL;
    try {
      url = new URL(a.href);
    } catch {
      return;
    }
    if (url.origin !== appOrigin) return;
    for (const key of PARAMS) {
      const value = attr[key];
      if (value && !url.searchParams.has(key)) url.searchParams.set(key, value);
    }
    if (!url.searchParams.has("ref_page")) {
      url.searchParams.set("ref_page", window.location.pathname);
    }
    a.href = url.toString();
  });
}

function track(event: string, params?: Record<string, unknown>, custom = false): void {
  if (!window.fbq) return;
  window.fbq(custom ? "trackCustom" : "track", event, params ?? {});
}

/** Lugar de la página donde está el botón (hero, planes, faq…). */
function placement(el: Element): string {
  const section = el.closest<HTMLElement>("section[id], header, footer, [data-section]");
  return section?.id || section?.dataset.section || section?.tagName.toLowerCase() || "page";
}

let clicksBound = false;
function bindClicks(): void {
  if (clicksBound) return;
  clicksBound = true;
  const appOrigin = new URL(APP_URL).origin;

  document.addEventListener(
    "click",
    (e) => {
      const a = (e.target as Element | null)?.closest?.<HTMLAnchorElement>("a[href]");
      if (!a) return;
      const where = placement(a);
      const page = window.location.pathname;

      if (a.dataset.track === "whatsapp" || a.href.includes("wa.me/")) {
        track("Contact", { content_name: "whatsapp", placement: where, page });
        return;
      }

      let url: URL;
      try {
        url = new URL(a.href);
      } catch {
        return;
      }
      if (url.origin === appOrigin && url.pathname.startsWith("/registro")) {
        const plan = url.searchParams.get("plan") ?? "sin_plan";
        track("Lead", {
          content_name: "registro",
          content_category: plan,
          placement: where,
          page,
        });
      }
    },
    { capture: true },
  );
}

const firedOnce = new Set<string>();
function once(key: string, fn: () => void): void {
  if (firedOnce.has(key)) return;
  firedOnce.add(key);
  fn();
}

function observePricing(): void {
  const pricing = document.getElementById("pricing");
  if (!pricing || !("IntersectionObserver" in window)) return;
  const io = new IntersectionObserver((entries) => {
    if (entries.some((en) => en.isIntersecting)) {
      once(`pricing:${location.pathname}`, () =>
        track("ViewContent", { content_name: "planes", page: location.pathname }),
      );
      io.disconnect();
    }
  }, { threshold: 0.35 });
  io.observe(pricing);
}

function bindCalculator(): void {
  document.querySelectorAll<HTMLElement>("[data-calc]").forEach((card) => {
    if (card.dataset.tracked) return;
    card.dataset.tracked = "1";
    card.addEventListener(
      "change",
      () =>
        once(`calc:${location.pathname}`, () =>
          track("CalculadoraUsada", { page: location.pathname }, true),
        ),
      { passive: true },
    );
  });
}

function onPage(): void {
  const attr = captureAttribution();
  decorateAppLinks(attr);
  track("PageView");

  const body = document.body;
  if (body.dataset.view) {
    once(`view:${location.pathname}`, () =>
      track("ViewContent", { content_name: body.dataset.view, page: location.pathname }),
    );
  }
  observePricing();
  bindCalculator();
}

export function initTracking(): void {
  if (!META_PIXEL_ID) return;
  bindClicks();
  /* astro:page-load corre en la primera carga y en cada navegación interna */
  document.addEventListener("astro:page-load", onPage);
}
