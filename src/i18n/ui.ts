/* Diccionario UI del home + chrome compartido. Español default. */
import type { Locale } from "./config";

export interface IndustryCopy {
  id: string;
  eyebrow: string;
  headline: string;
  sub: string;
  image: string;
  imageAlt: string;
  ratio: string;
  stamps: { total: number; filled: number; label: string };
  dark?: boolean;
}

export interface HowStep {
  n: string;
  title: string;
  text: string;
}

export interface WayCard {
  title: string;
  text: string;
  metric: string;
}

export interface PricingPlan {
  /** id estable que coincide con el lookup key de Stripe (reviko_<id>_monthly) */
  id: "start" | "pro" | "ultimate";
  name: string;
  kicker: string;
  price: number;
  blurb: string;
  features: string[];
  cta: string;
  featured?: boolean;
  badge?: string;
}

const es = {
  meta: {
    title: "reviko — Haz que vuelvan | Fidelización para negocios en Colombia",
    description:
      "Tarjetas de fidelización en Apple Wallet y Google Wallet para barberías, cafeterías, restaurantes y negocios locales. Tus clientes no descargan nada. Prueba 14 días gratis.",
    ogLocale: "es_ES",
  },
  switcherLabel: "Cambiar idioma",
  navLabel: "Navegación principal",
  nav: [
    { label: "Cómo funciona", href: "#how-it-works" },
    { label: "Calculadora", href: "#calculadora" },
    { label: "Para negocios", href: "#businesses" },
    { label: "Planes", href: "#pricing" },
    { label: "Preguntas", href: "#faq" },
  ],
  login: "Iniciar sesión",
  ctaStart: "Prueba 14 días gratis",
  ctaStartShort: "Prueba gratis",
  brandHome: "reviko — inicio",
  menuOpen: "Abrir menú",
  menuClose: "Cerrar menú",
  hero: {
    eyebrow: "reviko · fidelización simple",
    title: ["Haz que", "vuelvan."],
    titleLabel: "Haz que vuelvan.",
    lede: "Fidelización simple para negocios reales.",
    sub: "Tu tarjeta de sellos, ahora en el celular de tus clientes. Sabes quién vuelve, quién se perdió y le das una razón para regresar.",
    ctaSecondary: "Hablemos por WhatsApp",
    whatsappMsg: "Hola, quiero conocer reviko para mi negocio.",
    videoLabel: "Video: un cliente escanea el código, guarda su tarjeta en Wallet, acumula sellos y gana su premio",
    micro: "Clientes de hoy. Más visitas mañana.",
    trust: ["14 días gratis", "Tus clientes no descargan nada", "Listo en minutos"],
    imgAlt:
      "Barista entregando un café con arte latte a una clienta en una cafetería cálida",
    chipA: "1 visita para tu premio",
    chipB: "QR · Wallet · Sellos",
    phoneLabel:
      "Tarjeta de fidelización reviko en smartphone con QR y botón de Wallet",
    phoneShop: "Café Central · Cliente frecuente",
    phoneQrText: "Tu próxima visita te acerca al premio.",
    phoneWallet: "Agregar a Apple Wallet",
  },
  problem: {
    eyebrow: "Una realidad",
    title: ["¿Cuántos compraron", "una vez", "y no volvieron?"],
    foot: "Convierte clientes ocasionales en clientes de siempre.",
    ctaLabel: "Ver cómo funciona",
    sideNote: "Tus clientes ya vinieron. Dales una razón para regresar.",
  },
  how: {
    eyebrow: "Así de simple",
    title: ["Tres pasos.", "Cero fricción."],
    steps: [
      {
        n: "01",
        title: "Escanean",
        text: "Tu cliente escanea el código QR o acerca su celular.",
      },
      {
        n: "02",
        title: "Guardan",
        text: "La agregan a Apple o Google Wallet. Sin otra app.",
      },
      {
        n: "03",
        title: "Acumulan",
        text: "Visitan, acumulan y reciben recompensas.",
      },
    ] as [HowStep, HowStep, HowStep],
    footStart: "No descargan otra app. La guardan en ",
    footStrong: ["Wallet.", "Rápido.", "Simple."],
    footEnd: " Siempre a mano.",
  },
  product: {
    eyebrow: "Producto",
    title: [
      "Entiende quién vuelve.",
      "Y dales una razón",
      "para hacerlo otra vez.",
    ],
    sub: "Cada visita cuenta. Mira recurrencia, visitas promedio y crecimiento de tu comunidad en una UI limpia.",
    kpis: ["Clientes totales", "Clientes recurrentes", "Visitas promedio"] as [
      string,
      string,
      string,
    ],
    cardTitle: "Clientes que regresan",
    cardPill: "Tu negocio",
    cardSmall: "de tus clientes vuelven",
    cardFoot: ["totales", "recurrentes", "promedio"] as [
      string,
      string,
      string,
    ],
    cardLabel:
      "Panel de clientes que regresan: 78 por ciento, más 24 por ciento, gráfico de barras",
  },
  pricing: {
    eyebrow: "Planes",
    title: ["Un plan por cada", "etapa de tu negocio."],
    sub: "Todos los planes incluyen 14 días gratis. Cancelas cuando quieras, sin permanencia.",
    currencyNote: "Precios en dólares (USD). Pago mensual con tarjeta.",
    per: "/mes",
    trialBadge: "14 días gratis",
    plans: [
      {
        id: "start",
        name: "Starter",
        kicker: "Para empezar",
        price: 12,
        blurb:
          "Tu primer programa de fidelización, funcionando hoy. Ideal para un negocio que está empezando a medir quién vuelve.",
        features: [
          "Hasta 100 clientes",
          "1 programa de fidelización",
          "Pases de Apple Wallet y Google Wallet",
          "Interacciones QR y NFC ilimitadas",
          "Métricas esenciales",
        ],
        cta: "Probar Starter",
      },
      {
        id: "pro",
        name: "Pro",
        kicker: "Para fidelizar",
        price: 20,
        blurb:
          "Para negocios con clientela fija que quieren traer de vuelta a quien se perdió.",
        features: [
          "Hasta 500 clientes",
          "Programas de fidelización ilimitados",
          "Notificaciones en la tarjeta del cliente",
          "Segmentación y campañas de regreso",
          "Métricas avanzadas",
        ],
        cta: "Probar Pro",
        featured: true,
        badge: "Más elegido",
      },
      {
        id: "ultimate",
        name: "Ultimate",
        kicker: "Para escalar",
        price: 35,
        blurb:
          "Para negocios con varias sedes o que quieren automatizar el regreso de sus clientes por WhatsApp.",
        features: [
          "Clientes ilimitados",
          "Automatizaciones por WhatsApp: cumpleaños, inactivos, VIP",
          "Solicitud automática de reseñas en Google",
          "Varias sedes",
          "Acceso por API",
          "Todas las métricas y campañas",
          "Soporte prioritario",
        ],
        cta: "Probar Ultimate",
      },
    ] as PricingPlan[],
  },
  notFound: {
    eyebrow: "Error 404",
    title: ["Esta página", "se perdió", "sin avisar."],
    sub: "El enlace está roto o la página ya no existe. Pero tu programa de fidelización sigue intacto.",
    codeLabel: "Error 404: página no encontrada",
    passShop: "Café Central · Cliente frecuente",
    passTitle: "Tarjeta de fidelización reviko",
    stampsLabel:
      "Programa de ejemplo: 5 sellos de 6 visitas, falta uno para desbloquear el premio",
    passNote: "Te falta un sello. Así se ve un cliente a punto de volver.",
    passProgress: "5 de 6 visitas · 1 sello para el premio",
    ctaPrimary: "Volver al inicio",
    ctaSecondary: "Ver planes",
    chipA: "+0 clientes perdidos",
    chipB: "0 sellos desperdiciados",
    micro: "Clientes de hoy. Más visitas mañana.",
    quickTitle: "O ve directo a",
    quick: [
      { label: "Producto", anchor: "product" },
      { label: "Cómo funciona", anchor: "how-it-works" },
      { label: "Planes", anchor: "pricing" },
      { label: "Beneficios", anchor: "benefits" },
    ],
    langLabel: "Leer en inglés",
  },
  industries: {
    eyebrow: "Para negocios reales",
    title: ["Un lenguaje.", "Cada oficio."],
    list: [
      {
        id: "restaurante",
        eyebrow: "Restaurante",
        headline: "Premia cada visita.",
        sub: "La buena comida sabe mejor cuando hay una próxima.",
        image: "/images/img-2.webp",
        imageAlt: "Plato de pasta servido en mesa de madera de restaurante",
        ratio: "4 / 5",
        stamps: { total: 6, filled: 3, label: "Visitas" },
      },
      {
        id: "barberia",
        eyebrow: "Barbería",
        headline: "8 cortes. El 9.º es gratis.",
        sub: "Clientes que vuelven siempre lucen mejor.",
        image: "/images/img-3.webp",
        imageAlt: "Silla de barbería clásica en local premium",
        ratio: "4 / 5",
        stamps: { total: 8, filled: 8, label: "Cortes" },
        dark: true,
      },
      {
        id: "cafeteria",
        eyebrow: "Cafetería",
        headline: "6 cafés. El 7.º va por la casa.",
        sub: "Pequeños momentos que hacen grandes clientes.",
        image: "/images/img-4.webp",
        imageAlt: "Taza de café con arte latte sobre barra de madera",
        ratio: "4 / 5",
        stamps: { total: 7, filled: 6, label: "Cafés" },
      },
      {
        id: "autolavado",
        eyebrow: "Autolavado",
        headline: "5 lavadas. La 6.ª va por la casa.",
        sub: "Tu auto siempre como nuevo, y tú siempre ganas.",
        image: "/images/img-5.webp",
        imageAlt: "Vehículo mojado durante lavado premium",
        ratio: "16 / 10",
        stamps: { total: 6, filled: 5, label: "Lavadas" },
      },
      {
        id: "unas",
        eyebrow: "Estética / Uñas",
        headline: "Convierte cada cita en una razón para volver.",
        sub: "Lealtad también se ve bonita.",
        image: "/images/img-6.webp",
        imageAlt: "Manos con manicura elegante en tonos neutros",
        ratio: "4 / 5",
        stamps: { total: 6, filled: 4, label: "Citas" },
      },
    ] as IndustryCopy[],
  },
  ways: {
    eyebrow: "Distintas formas de premiar",
    title: ["Tú eliges.", "Nosotros lo hacemos posible."],
    cards: [
      {
        title: "Puntos",
        text: "Suma puntos en cada compra.",
        metric: "150 pts",
      },
      {
        title: "Tarjeta regalo",
        text: "Regala saldo para disfrutar.",
        metric: "Saldo",
      },
      {
        title: "Visitas",
        text: "Acumula visitas y gana premios.",
        metric: "6 / 7",
      },
    ] as [WayCard, WayCard, WayCard],
    bandAlt:
      "Interior de cafetería llena de clientes habituales en un ambiente cálido",
    bandCaption: "Clientes de hoy. Más visitas mañana.",
    communityTitle: "Tu comunidad sigue creciendo.",
    communitySub: "Más visitas. Más ventas. Clientes más felices.",
    communityImgAlt:
      "Barista entregando un café para llevar a una clienta sonriente",
  },
  final: {
    eyebrow: "Empieza ahora",
    title: ["Dales una razón", "para volver."],
    sub: "Crea tu programa hoy y empieza a ver quién vuelve. ¿Tienes dudas? Escríbenos y te mostramos cómo funciona.",
    stampsLabel: "Programa completado: recompensa desbloqueada",
    cta: "Prueba 14 días gratis",
    ctaWhatsapp: "Prefiero hablar por WhatsApp",
    whatsappMsg: "Hola, quiero ver cómo funciona reviko en mi negocio.",
    micro: "14 días gratis · Sin app extra · Cancelas cuando quieras",
  },
  legalChrome: {
    sectionLabel: "Legal / Políticas",
    back: "Volver a reviko",
    skip: "Saltar al contenido",
    relatedTitle: "Documentos legales",
    exploreTitle: "Explorar",
    explore: [
      { label: "Producto", anchor: "product" },
      { label: "Cómo funciona", anchor: "how-it-works" },
      { label: "Para negocios", anchor: "businesses" },
      { label: "Planes", anchor: "pricing" },
      { label: "Beneficios", anchor: "benefits" },
    ],
    legalTitle: "Legal",
    docs: [
      { href: "/terms", label: "Términos" },
      { href: "/merchant-terms", label: "Negocios" },
      { href: "/loyalty-terms", label: "Programa" },
      { href: "/privacy", label: "Privacidad" },
      { href: "/billing", label: "Facturación" },
      { href: "/support", label: "Soporte" },
      { href: "/privacy-request", label: "Solicitud de privacidad" },
      { href: "/delete-account", label: "Eliminar cuenta" },
    ],
    metaEffective: "Fecha de vigencia",
    metaVersion: "Versión",
    tocLabel: "En esta página",
    org: "77 Studio LLC",
    backHome: "← Volver a reviko",
    rights: "© 2026 77 Studio LLC",
  },
};

export type UIDict = typeof es;

const en: UIDict = {
  meta: {
    title: "reviko — Make them come back | Loyalty for local businesses",
    description:
      "Apple Wallet and Google Wallet loyalty cards for barbershops, cafés, restaurants and local businesses. No app for your customers. 14-day free trial.",
    ogLocale: "en_US",
  },
  switcherLabel: "Change language",
  navLabel: "Main navigation",
  nav: [
    { label: "How it works", href: "#how-it-works" },
    { label: "Calculator", href: "#calculadora" },
    { label: "For businesses", href: "#businesses" },
    { label: "Plans", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  login: "Log in",
  ctaStart: "Start 14-day free trial",
  ctaStartShort: "Free trial",
  brandHome: "reviko — home",
  menuOpen: "Open menu",
  menuClose: "Close menu",
  hero: {
    eyebrow: "reviko · simple loyalty",
    title: ["Make them", "come back."],
    titleLabel: "Make them come back.",
    lede: "Simple loyalty for real businesses.",
    sub: "Your stamp card, now on your customers' phones. Know who comes back, who drifted away, and give them a reason to return.",
    ctaSecondary: "Chat on WhatsApp",
    whatsappMsg: "Hi, I'd like to learn about reviko for my business.",
    videoLabel: "Video: a customer scans the code, saves the card to Wallet, collects stamps and earns the reward",
    micro: "Today's customers. More visits tomorrow.",
    trust: ["14 days free", "No app for your customers", "Ready in minutes"],
    imgAlt:
      "Barista handing a latte with latte art to a customer in a warm café",
    chipA: "1 visit to your reward",
    chipB: "QR · Wallet · Stamps",
    phoneLabel: "reviko loyalty card on a smartphone with QR and Wallet button",
    phoneShop: "Café Central · Regular customer",
    phoneQrText: "Your next visit brings you closer to the reward.",
    phoneWallet: "Add to Apple Wallet",
  },
  problem: {
    eyebrow: "A reality",
    title: ["How many bought", "once and never", "came back?"],
    foot: "Turn occasional customers into regulars.",
    ctaLabel: "See how it works",
    sideNote: "Your customers already came. Give them a reason to return.",
  },
  how: {
    eyebrow: "This simple",
    title: ["Three steps.", "Zero friction."],
    steps: [
      {
        n: "01",
        title: "Scan",
        text: "Your customer scans the QR code or taps their phone.",
      },
      {
        n: "02",
        title: "Save",
        text: "They add it to Apple or Google Wallet. No extra app.",
      },
      {
        n: "03",
        title: "Earn",
        text: "They visit, collect and receive rewards.",
      },
    ] as [HowStep, HowStep, HowStep],
    footStart: "They don't download another app. They keep it in their ",
    footStrong: ["Wallet.", "Fast.", "Simple."],
    footEnd: " Always at hand.",
  },
  product: {
    eyebrow: "Product",
    title: [
      "Know who comes back.",
      "And give them a reason",
      "to do it again.",
    ],
    sub: "Every visit counts. See repeat business, average visits and your community growth in a clean UI.",
    kpis: ["Total customers", "Returning customers", "Average visits"] as [
      string,
      string,
      string,
    ],
    cardTitle: "Returning customers",
    cardPill: "Your business",
    cardSmall: "of your customers come back",
    cardFoot: ["total", "returning", "average"] as [string, string, string],
    cardLabel:
      "Returning customers panel: 78 percent, plus 24 percent, bar chart",
  },
  pricing: {
    eyebrow: "Plans",
    title: ["A plan for every", "stage of your business."],
    sub: "Every plan includes a 14-day free trial. Cancel anytime, no commitment.",
    currencyNote: "Prices in US dollars (USD). Billed monthly by card.",
    per: "/mo",
    trialBadge: "14 days free",
    plans: [
      {
        id: "start",
        name: "Starter",
        kicker: "To get started",
        price: 12,
        blurb:
          "Your first loyalty program, live today. Ideal for a business starting to track who comes back.",
        features: [
          "Up to 100 customers",
          "1 loyalty program",
          "Apple Wallet and Google Wallet passes",
          "Unlimited QR and NFC interactions",
          "Essential metrics",
        ],
        cta: "Try Starter",
      },
      {
        id: "pro",
        name: "Pro",
        kicker: "To build loyalty",
        price: 20,
        blurb:
          "For businesses with regulars who want to win back the ones who drifted away.",
        features: [
          "Up to 500 customers",
          "Unlimited loyalty programs",
          "Notifications on the customer's card",
          "Segmentation and win-back campaigns",
          "Advanced metrics",
        ],
        cta: "Try Pro",
        featured: true,
        badge: "Most popular",
      },
      {
        id: "ultimate",
        name: "Ultimate",
        kicker: "To scale",
        price: 35,
        blurb:
          "For multi-location businesses or anyone who wants WhatsApp to bring customers back automatically.",
        features: [
          "Unlimited customers",
          "WhatsApp automations: birthdays, inactive, VIP",
          "Automatic Google review requests",
          "Multiple locations",
          "API access",
          "All metrics and campaigns",
          "Priority support",
        ],
        cta: "Try Ultimate",
      },
    ] as PricingPlan[],
  },
  notFound: {
    eyebrow: "Error 404",
    title: ["This page", "got lost", "without a word."],
    sub: "The link is broken or the page no longer exists. Your loyalty program is still up and running.",
    codeLabel: "Error 404: page not found",
    passShop: "Café Central · Regular customer",
    passTitle: "reviko loyalty card",
    stampsLabel:
      "Sample program: 5 out of 6 stamps collected, one left to unlock the reward",
    passNote: "One stamp left. This is what a customer about to come back looks like.",
    passProgress: "5 of 6 visits · 1 stamp to the reward",
    ctaPrimary: "Back to home",
    ctaSecondary: "See plans",
    chipA: "+0 customers lost",
    chipB: "0 wasted stamps",
    micro: "Today's customers. More visits tomorrow.",
    quickTitle: "Or jump straight to",
    quick: [
      { label: "Product", anchor: "product" },
      { label: "How it works", anchor: "how-it-works" },
      { label: "Plans", anchor: "pricing" },
      { label: "Benefits", anchor: "benefits" },
    ],
    langLabel: "Read in English",
  },
  industries: {
    eyebrow: "For real businesses",
    title: ["One language.", "Every trade."],
    list: [
      {
        id: "restaurante",
        eyebrow: "Restaurant",
        headline: "Reward every visit.",
        sub: "Good food tastes better when there's a next time.",
        image: "/images/img-2.webp",
        imageAlt: "Pasta dish served on a wooden restaurant table",
        ratio: "4 / 5",
        stamps: { total: 6, filled: 3, label: "Visits" },
      },
      {
        id: "barberia",
        eyebrow: "Barbershop",
        headline: "8 haircuts. The 9th is free.",
        sub: "Returning customers always look sharper.",
        image: "/images/img-3.webp",
        imageAlt: "Classic barbershop chair in a premium shop",
        ratio: "4 / 5",
        stamps: { total: 8, filled: 8, label: "Haircuts" },
        dark: true,
      },
      {
        id: "cafeteria",
        eyebrow: "Café",
        headline: "6 coffees. The 7th is on the house.",
        sub: "Small moments that make great customers.",
        image: "/images/img-4.webp",
        imageAlt: "Cup of coffee with latte art on a wooden bar",
        ratio: "4 / 5",
        stamps: { total: 7, filled: 6, label: "Coffees" },
      },
      {
        id: "autolavado",
        eyebrow: "Car wash",
        headline: "5 washes. The 6th is on the house.",
        sub: "Your car always like new, and you always win.",
        image: "/images/img-5.webp",
        imageAlt: "Wet vehicle during a premium wash",
        ratio: "16 / 10",
        stamps: { total: 6, filled: 5, label: "Washes" },
      },
      {
        id: "unas",
        eyebrow: "Beauty / Nails",
        headline: "Turn every appointment into a reason to return.",
        sub: "Loyalty also looks beautiful.",
        image: "/images/img-6.webp",
        imageAlt: "Hands with elegant manicure in neutral tones",
        ratio: "4 / 5",
        stamps: { total: 6, filled: 4, label: "Visits" },
      },
    ] as IndustryCopy[],
  },
  ways: {
    eyebrow: "Different ways to reward",
    title: ["You choose.", "We make it possible."],
    cards: [
      {
        title: "Points",
        text: "Earn points with every purchase.",
        metric: "150 pts",
      },
      { title: "Gift card", text: "Gift balance to enjoy.", metric: "Balance" },
      {
        title: "Visits",
        text: "Collect visits and earn rewards.",
        metric: "6 / 7",
      },
    ] as [WayCard, WayCard, WayCard],
    bandAlt:
      "Busy café interior full of regular customers in a warm atmosphere",
    bandCaption: "Today's customers. More visits tomorrow.",
    communityTitle: "Your community keeps growing.",
    communitySub: "More visits. More sales. Happier customers.",
    communityImgAlt: "Barista handing a takeaway coffee to a smiling customer",
  },
  final: {
    eyebrow: "Get started",
    title: ["Give them a reason", "to come back."],
    sub: "Create your program today and start seeing who comes back. Questions? Message us and we'll show you how it works.",
    stampsLabel: "Completed program: reward unlocked",
    cta: "Start 14-day free trial",
    ctaWhatsapp: "I'd rather chat on WhatsApp",
    whatsappMsg: "Hi, I'd like to see how reviko works for my business.",
    micro: "14 days free · No extra app · Cancel anytime",
  },
  legalChrome: {
    sectionLabel: "Legal / Policies",
    back: "Back to reviko",
    skip: "Skip to content",
    relatedTitle: "Legal documents",
    exploreTitle: "Explore",
    explore: [
      { label: "Product", anchor: "product" },
      { label: "How it works", anchor: "how-it-works" },
      { label: "For businesses", anchor: "businesses" },
      { label: "Plans", anchor: "pricing" },
      { label: "Benefits", anchor: "benefits" },
    ],
    legalTitle: "Legal",
    docs: [
      { href: "/en/terms", label: "Terms" },
      { href: "/en/merchant-terms", label: "Merchant Terms" },
      { href: "/en/loyalty-terms", label: "Program Terms" },
      { href: "/en/privacy", label: "Privacy" },
      { href: "/en/billing", label: "Billing" },
      { href: "/en/support", label: "Support" },
      { href: "/en/privacy-request", label: "Privacy request" },
      { href: "/en/delete-account", label: "Delete account" },
    ],
    metaEffective: "Effective date",
    metaVersion: "Version",
    tocLabel: "On this page",
    org: "77 Studio LLC",
    backHome: "← Back to reviko",
    rights: "© 2026 77 Studio LLC",
  },
};

export const ui: Record<Locale, UIDict> = { es, en };
