/* Copy de las secciones de conversión del home (calculadora, fundadores,
   preguntas frecuentes, WhatsApp). Español default, inglés en /en/.
   Basado en la estrategia de marketing de reviko (nov 2026). */
import type { Locale } from "./config";

export interface FaqItem {
  q: string;
  a: string;
}

export interface FounderPerk {
  icon: "setup" | "kit" | "content" | "chat";
  title: string;
  text: string;
}

const es = {
  calculator: {
    eyebrow: "Calculadora",
    title: ["¿Cuánto vale un", "cliente que vuelve?"],
    sub: "Mueve los valores con los números de tu negocio. La mayoría de los dueños se sorprende: con que unos pocos clientes vuelvan una vez más al mes, reviko ya se pagó.",
    customers: "Clientes distintos al mes",
    ticket: "Ticket promedio (COP)",
    returnRate: "Clientes que vuelven una vez más al mes",
    resultLabel: "Ventas extra al mes",
    resultYear: "al año",
    costLabel: "reviko Pro te cuesta",
    roiLabel: "Por cada peso invertido recuperas",
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
  founders: {
    eyebrow: "Negocios fundadores",
    title: ["Te lo dejamos", "funcionando."],
    sub: "Para los primeros 50 negocios en Colombia, el arranque corre por nuestra cuenta. Sin costo adicional a tu plan.",
    perks: [
      {
        icon: "setup",
        title: "Montaje hecho por nosotros",
        text: "Creamos tu programa, diseñamos tu tarjeta con tu marca y capacitamos a tu equipo en 15 minutos.",
      },
      {
        icon: "kit",
        title: "Kit de mostrador",
        text: "Display con tu código QR y sticker NFC para que tus clientes se unan con un toque.",
      },
      {
        icon: "content",
        title: "Piezas para tus redes",
        text: "Te entregamos publicaciones listas para anunciar tu programa a tus propios clientes.",
      },
      {
        icon: "chat",
        title: "Acompañamiento por WhatsApp",
        text: "Durante el primer mes revisamos contigo cómo va y ajustamos la recompensa si hace falta.",
      },
    ] as FounderPerk[],
    cta: "Quiero ser negocio fundador",
    whatsappMsg: "Hola, quiero ser negocio fundador de reviko.",
    standTitle: "Escanea y acumula",
    standSub: "Tu próxima visita cuenta",
    standShop: "Barbería La 14",
    standNfc: "Acerca tu celular",
    counterLabel: "cupos de fundador",
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
        a: "Unos minutos. Creas tu programa, eliges la recompensa (por ejemplo, el 9.º corte gratis) y pones el código QR en tu mostrador. Si quieres, te lo dejamos montado nosotros.",
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
        a: "Con tarjeta débito o crédito, mes a mes. El cobro se hace en dólares (USD) y tu banco lo convierte a pesos.",
      },
    ] as FaqItem[],
    asideTitle: "¿Otra pregunta?",
    asideText: "Escríbenos. Te responde una persona, no un bot.",
    asideCta: "Escribir por WhatsApp",
    whatsappMsg: "Hola, tengo una pregunta sobre reviko.",
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
    ticket: "Average ticket (COP)",
    returnRate: "Customers who come back one more time a month",
    resultLabel: "Extra sales per month",
    resultYear: "per year",
    costLabel: "reviko Pro costs you",
    roiLabel: "For every peso invested you get back",
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
  founders: {
    eyebrow: "Founding businesses",
    title: ["We set it up", "for you."],
    sub: "For the first 50 businesses in Colombia, onboarding is on us. No extra cost on top of your plan.",
    perks: [
      {
        icon: "setup",
        title: "Done-for-you setup",
        text: "We create your program, design your branded card and train your team in 15 minutes.",
      },
      {
        icon: "kit",
        title: "Counter kit",
        text: "A display with your QR code and an NFC sticker so customers join with one tap.",
      },
      {
        icon: "content",
        title: "Social media assets",
        text: "Ready-to-post pieces to announce your program to your own customers.",
      },
      {
        icon: "chat",
        title: "WhatsApp support",
        text: "During the first month we check in with you and tweak your reward if needed.",
      },
    ] as FounderPerk[],
    cta: "I want to be a founding business",
    whatsappMsg: "Hi, I'd like to be a reviko founding business.",
    standTitle: "Scan and collect",
    standSub: "Your next visit counts",
    standShop: "Barbería La 14",
    standNfc: "Tap your phone",
    counterLabel: "founder spots",
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
        a: "A few minutes. Create your program, choose the reward (say, the 9th haircut free) and put the QR code on your counter. Or let us set it up for you.",
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
        a: "By debit or credit card, month to month. You're billed in US dollars (USD) and your bank converts it to your currency.",
      },
    ] as FaqItem[],
    asideTitle: "Another question?",
    asideText: "Message us. A real person replies, not a bot.",
    asideCta: "Message us on WhatsApp",
    whatsappMsg: "Hi, I have a question about reviko.",
  },
  whatsappFloat: {
    label: "Message us on WhatsApp",
    bubble: "Let's talk?",
    message: "Hi, I'd like to learn about reviko for my business.",
  },
};

export const growth: Record<Locale, GrowthDict> = { es, en };
