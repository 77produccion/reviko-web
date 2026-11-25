/* Copy de las secciones de conversión del home (calculadora, fundadores,
   preguntas frecuentes, WhatsApp). Español default, inglés en /en/.
   Basado en la estrategia de marketing de reviko (nov 2026). */
import type { Locale } from "./config";

export interface FaqItem {
  q: string;
  a: string;
}

const es = {
  calculator: {
    eyebrow: "Calculadora",
    title: ["¿Cuánto vale un", "cliente que vuelve?"],
    sub: "Mueve los valores con los números de tu negocio. La mayoría de los dueños se sorprende: con que unos pocos clientes vuelvan una vez más al mes, reviko ya se pagó.",
    customers: "Clientes distintos al mes",
    ticket: "Ticket promedio (USD)",
    returnRate: "Clientes que vuelven una vez más al mes",
    resultLabel: "Ventas extra al mes",
    resultYear: "al año",
    costLabel: "reviko Pro te cuesta",
    roiLabel: "Por cada dólar invertido recuperas",
    roiSuffix: "x",
    disclaimer:
      "Cálculo ilustrativo. El resultado real depende de tu negocio, tu recompensa y qué tan seguido tu equipo registra las visitas.",
    cta: "Quiero estos resultados",
    perMonth: "/mes",
  },
  industriesCta: {
    title: "¿Tu negocio no aparece aquí?",
    text: "Pet shops, panaderías, gimnasios, heladerías… Si tus clientes vuelven, reviko funciona.",
    cta: "Cuéntanos de tu negocio",
    whatsappMsg: "Hola, tengo un negocio y quiero saber si reviko me sirve.",
  },
  faq: {
    eyebrow: "Preguntas frecuentes",
    title: ["Lo que todos", "nos preguntan."],
    items: [
      {
        q: "¿Mis clientes tienen que descargar una app?",
        a: "No. Escanean el código QR o acercan el celular, y la tarjeta queda guardada en Apple Wallet o Google Wallet, que ya vienen en su teléfono. Un toque y listo.",
      },
      {
        q: "¿Funciona con iPhone y con Android?",
        a: "Sí. En iPhone la tarjeta va a Apple Wallet y en Android a Google Wallet. Se ve con el logo y los colores de tu negocio.",
      },
      {
        q: "¿Cuánto tarda en estar funcionando?",
        a: "Unos minutos. Creas tu programa, eliges la recompensa (por ejemplo, el 9.º corte gratis) y pones el código QR en tu mostrador. Si tienes dudas, te acompañamos por WhatsApp.",
      },
      {
        q: "¿Necesito comprar equipos o un sistema de caja?",
        a: "No. Tu equipo registra cada visita desde la app de reviko en el celular. No necesitas datáfono, POS ni computador.",
      },
      {
        q: "Ya tengo tarjeta de sellos en papel. ¿Para qué cambiar?",
        a: "Porque el papel se pierde, se olvida y no te dice nada. Con reviko sabes quiénes son tus clientes fieles, quién dejó de venir y puedes invitarlo a volver.",
      },
      {
        q: "¿Qué pasa cuando terminan los 14 días gratis?",
        a: "Registras tu tarjeta al empezar, pero no se cobra nada durante la prueba. Te avisamos antes de que termine. Si no cancelas, el día 15 empieza tu plan mensual.",
      },
      {
        q: "¿Puedo cancelar cuando quiera?",
        a: "Sí. No hay permanencia ni cláusulas. Cancelas desde tu cuenta y el plan sigue activo hasta el final del mes que ya pagaste.",
      },
      {
        q: "¿Cómo se paga?",
        a: "Con tarjeta débito o crédito, mes a mes. Los precios y el cobro son en dólares (USD).",
      },
    ] as FaqItem[],
    asideTitle: "¿Otra pregunta?",
    asideText: "Escríbenos. Te responde una persona, no un bot.",
    asideCta: "Escribir por WhatsApp",
    whatsappMsg: "Hola, tengo una pregunta sobre reviko.",
  },
  ownerApp: {
    eyebrow: "La app de tu negocio",
    title: ["Tu cliente no descarga nada.", "Tú sí tienes una app de verdad."],
    sub: "reviko está en App Store y Google Play. Tú y tu equipo registran visitas, entregan premios y ven quién vuelve desde el celular, sin abrir el computador ni el navegador.",
    points: [
      { title: "Sella en segundos", text: "Abres la app, escaneas la tarjeta del cliente y listo. Sin buscar contraseñas ni pestañas." },
      { title: "Tu negocio en el bolsillo", text: "Clientes, visitas y premios del día, donde estés." },
      { title: "Hecha para tu equipo", text: "Cada persona de tu equipo registra desde su propio celular." },
    ],
    appStore: { small: "Descárgala en", big: "App Store" },
    playStore: { small: "Disponible en", big: "Google Play" },
  },
  compare: {
    eyebrow: "Por qué reviko",
    title: ["Lo que el papel", "no puede hacer."],
    cols: ["Tarjeta de papel", "Apps para descargar", "reviko"],
    rows: [
      { label: "Tu cliente la tiene siempre a mano", v: ["no", "partial", "yes"] },
      { label: "No tiene que descargar nada", v: ["yes", "no", "yes"] },
      { label: "Sabes quién vuelve y quién se perdió", v: ["no", "yes", "yes"] },
      { label: "Le recuerdas que vuelva", v: ["no", "partial", "yes"] },
      { label: "No se pierde ni se moja", v: ["no", "yes", "yes"] },
      { label: "App para tu equipo en App Store y Google Play", v: ["no", "partial", "yes"] },
    ],
    legend: { yes: "Sí", no: "No", partial: "A veces" },
    foot: "Desde USD 12 al mes. Menos de USD 0,40 al día.",
    cta: "Prueba 14 días gratis",
  },
  whatsappFloat: {
    label: "Escríbenos por WhatsApp",
    bubble: "¿Hablamos?",
    message: "Hola, quiero conocer reviko para mi negocio.",
  },
};

export type GrowthDict = typeof es;

const en: GrowthDict = {
  calculator: {
    eyebrow: "Calculator",
    title: ["What is a returning", "customer worth?"],
    sub: "Plug in your own numbers. Most owners are surprised: if just a few customers come back one more time a month, reviko has already paid for itself.",
    customers: "Unique customers per month",
    ticket: "Average ticket (USD)",
    returnRate: "Customers who come back one more time a month",
    resultLabel: "Extra sales per month",
    resultYear: "per year",
    costLabel: "reviko Pro costs you",
    roiLabel: "For every dollar invested you get back",
    roiSuffix: "x",
    disclaimer:
      "Illustrative estimate. Real results depend on your business, your reward and how consistently your team logs visits.",
    cta: "I want these results",
    perMonth: "/mo",
  },
  industriesCta: {
    title: "Don't see your business?",
    text: "Pet shops, bakeries, gyms, ice-cream parlors… If your customers come back, reviko works.",
    cta: "Tell us about your business",
    whatsappMsg: "Hi, I run a business and want to know if reviko fits.",
  },
  faq: {
    eyebrow: "FAQ",
    title: ["What everyone", "asks us."],
    items: [
      {
        q: "Do my customers need to download an app?",
        a: "No. They scan the QR code or tap their phone, and the card is saved to Apple Wallet or Google Wallet, which already come with their phone. One tap and done.",
      },
      {
        q: "Does it work on iPhone and Android?",
        a: "Yes. On iPhone the card goes to Apple Wallet and on Android to Google Wallet, with your business logo and colors.",
      },
      {
        q: "How long does it take to get going?",
        a: "A few minutes. Create your program, choose the reward (say, the 9th haircut free) and put the QR code on your counter. Questions? We help you on WhatsApp.",
      },
      {
        q: "Do I need to buy hardware or a POS?",
        a: "No. Your team logs each visit from the reviko app on their phone. No card terminal, POS or computer needed.",
      },
      {
        q: "I already have a paper stamp card. Why switch?",
        a: "Paper gets lost, forgotten and tells you nothing. With reviko you know who your regulars are, who stopped coming, and you can invite them back.",
      },
      {
        q: "What happens when the 14-day trial ends?",
        a: "You add your card when you start, but nothing is charged during the trial. We remind you before it ends. If you don't cancel, your monthly plan starts on day 15.",
      },
      {
        q: "Can I cancel anytime?",
        a: "Yes. No commitment, no fine print. Cancel from your account and your plan stays active until the end of the month you already paid for.",
      },
      {
        q: "How do I pay?",
        a: "By debit or credit card, month to month. Prices and billing are in US dollars (USD).",
      },
    ] as FaqItem[],
    asideTitle: "Another question?",
    asideText: "Message us. A real person replies, not a bot.",
    asideCta: "Message us on WhatsApp",
    whatsappMsg: "Hi, I have a question about reviko.",
  },
  ownerApp: {
    eyebrow: "Your business app",
    title: ["Your customers download nothing.", "You get a real app."],
    sub: "reviko is on the App Store and Google Play. You and your team log visits, hand out rewards and see who comes back from your phone, no computer or browser needed.",
    points: [
      { title: "Stamp in seconds", text: "Open the app, scan the customer's card and you're done. No passwords or tabs." },
      { title: "Your business in your pocket", text: "Today's customers, visits and rewards, wherever you are." },
      { title: "Built for your team", text: "Everyone on your team logs visits from their own phone." },
    ],
    appStore: { small: "Download on the", big: "App Store" },
    playStore: { small: "Get it on", big: "Google Play" },
  },
  compare: {
    eyebrow: "Why reviko",
    title: ["What paper", "can't do."],
    cols: ["Paper card", "Apps to download", "reviko"],
    rows: [
      { label: "Customers always have it on them", v: ["no", "partial", "yes"] },
      { label: "Nothing to download", v: ["yes", "no", "yes"] },
      { label: "You know who comes back and who drifted away", v: ["no", "yes", "yes"] },
      { label: "You remind them to come back", v: ["no", "partial", "yes"] },
      { label: "Can't get lost or wet", v: ["no", "yes", "yes"] },
      { label: "Team app on the App Store and Google Play", v: ["no", "partial", "yes"] },
    ],
    legend: { yes: "Yes", no: "No", partial: "Sometimes" },
    foot: "From USD 12 a month. Less than USD 0.40 a day.",
    cta: "Try 14 days free",
  },
  whatsappFloat: {
    label: "Message us on WhatsApp",
    bubble: "Let's talk?",
    message: "Hi, I'd like to learn about reviko for my business.",
  },
};

export const growth: Record<Locale, GrowthDict> = { es, en };
