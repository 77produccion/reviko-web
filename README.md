# reviko-landing

Landing editorial de reviko. Astro + TypeScript + GSAP + CSS moderno.
Carpeta independiente: no depende del monorepo `reviko`.

## Comandos

```powershell
npm install
npm run dev     # http://localhost:4321
npm run build
npm run check
```

## Fotos

Tú las aportas. Ver `public/images/README.md` para slots y proporciones.
Los placeholders actuales mantienen proporción y se sustituyen 1:1.

## Estructura

- `src/layouts/BaseLayout.astro` — home: head, SEO, fuentes Manrope, carga motion
- `src/layouts/LegalLayout.astro` — sistema legal (variantes `long`/`compact`/`action`)
- `src/components/legal/` — LegalHeader, LegalToc, LegalFooter
- `src/scripts/legal.ts` — TOC auto desde H2, scrollspy (IntersectionObserver), numeración editorial, wrap de tablas. Sin GSAP.
- `src/styles/legal.css` — tipografía editorial, tablas, contact rows, print styles
- `src/data/content.ts` — industrias, pasos, nav (data-driven)
- `src/components/` — Header, Eyebrow, ArrowButton, CircleCta, RewardProgress
- `src/sections/` — Hero, Problem, HowItWorks, ProductShowcase, Industries, RewardWays, FinalCta
- `src/scripts/motion.ts` — GSAP + ScrollTrigger del home, respeta prefers-reduced-motion
- `src/styles/` — tokens, base, utilities

## Secciones de conversión (nov 2026)

Alineadas con la estrategia de marketing de reviko:

- `src/sections/Calculator.astro` — calculadora "¿cuánto vale un cliente que vuelve?" (JS vanilla, sin dependencias)
- `src/sections/Faq.astro` — preguntas frecuentes (también se publican como datos estructurados FAQPage)
- `src/components/WhatsAppFloat.astro` + `WhatsAppButton.astro` — CTAs a WhatsApp
- Copy de estas secciones: `src/i18n/growth.ts` (ES/EN)
- Número de WhatsApp y helpers: `src/i18n/config.ts` (`WHATSAPP_NUMBER`). Todos los precios en USD.
- Planes Starter, Pro y Ultimate: los `id` (`start`, `pro`, `ultimate`) coinciden con los lookup keys de Stripe y viajan al registro como `?plan=`
- Imagen para compartir en redes/WhatsApp: `public/og-reviko.jpg` (1200×630)

## Demo en vivo para ventas (`/demo`, `/en/demo`)

Presentación de 4 pasos para reuniones: escanear el QR real, guardar en Wallet, sumar sellos y cierre con CTA.
No se indexa (`noindex`). Flechas ← → para avanzar, barra espaciadora para sumar un sello en pantalla.

- Programa de demostración: `DEMO_PROGRAM` en `src/i18n/demo.ts` (enlace de inscripción, nombre del negocio, n.º de visitas)
- QR: `public/demo/qr-demo.svg` (reemplazar por el que genera la app si cambia el programa)
- La tarjeta del paso 3 es ilustrativa; la tarjeta real se actualiza en el Wallet del prospecto al escanearla desde la app

## Rutas legales

ES (default, raíz): `/terms` · `/privacy` · `/merchant-terms` · `/loyalty-terms` ·
`/billing` · `/support` · `/privacy-request` · `/delete-account`

EN: mismas rutas bajo `/en/`.

Slugs españoles antiguos (`/terminos`, `/privacidad`, …) redirigen a las
rutas actuales. Contenido transcrito íntegro de `docs/` (no modificar
wording jurídico); español = traducción fiel.

## i18n

Español raíz, inglés en `/en/`, sin redirección automática. `src/i18n/`:
`config.ts` (rutas, registry, IDs de sección estables), `ui.ts` (diccionario
home + chrome). Switcher ES|EN preserva ruta + hash + query y persiste
`reviko-locale`. SEO: `hreflang` es/en/x-default, canonical y `og:locale`
por página.

## Medición para la pauta (Meta Pixel)

- Píxel: **Reviko Web (reviko.io)** · ID `3640697042764387` (portafolio Reviko Loyalty).
  Está en `src/i18n/config.ts` (`META_PIXEL_ID`); se puede cambiar con `PUBLIC_META_PIXEL_ID`.
- `src/scripts/tracking.ts` envía: `PageView`, `ViewContent` (planes, /demo, landings de nicho),
  `Contact` (clic en WhatsApp), `Lead` (clic en Prueba gratis / registro, con el plan) y
  `CalculadoraUsada` (personalizado).
- Todos los enlaces a `app.reviko.io` salen con los `utm_*`, el `fbclid` y `ref_page`
  de la visita (se guardan 30 días). Las landings de nicho agregan `nicho=<nicho>`.

### Pendiente en app.reviko.io (equipo de desarrollo)

1. Instalar el mismo píxel (`3640697042764387`) en el registro.
2. Disparar `StartTrial` cuando el negocio activa la prueba (checkout completado) y
   `Subscribe` en el primer cobro real (`invoice.paid` con monto > 0), con `value` y
   `currency: "USD"`. Idealmente también por API de conversiones desde el webhook de Stripe,
   usando el `fbclid` recibido para armar `fbc`.
3. Guardar `utm_*`, `fbclid`, `ref_page` y `nicho` en el negocio al registrarse, para saber
   qué anuncio y qué landing trajo cada cliente.

## Landings por nicho

`/para/barberias`, `/para/unas-y-estetica`, `/para/restaurantes`, `/para/cafeterias`.
Textos en `src/i18n/niches.ts`. Cada anuncio de Meta debe apuntar a la de su nicho.

## Enlaces de App Store y Google Play

`APP_STORE_URL` y `PLAY_STORE_URL` en `src/i18n/config.ts` (o `PUBLIC_APP_STORE_URL` /
`PUBLIC_PLAY_STORE_URL`). Si se dejan vacíos, los botones se muestran sin enlace.
