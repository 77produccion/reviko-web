/* Demo en vivo para reuniones de venta (/demo). No se indexa en buscadores.
   Para cambiar el programa de demostración, edita DEMO_PROGRAM y reemplaza
   public/demo/qr-demo.svg por el QR nuevo que genera la app. */
import type { Locale } from "./config";

export const DEMO_PROGRAM = {
  /** Enlace de inscripción que genera la app de reviko (el mismo del QR). */
  joinUrl:
    "https://app.reviko.io/j/v1.db01c822-6bcb-4f7e-80dd-c7c4a22141df.YpbgiB2I8xLxds6ORqygGdrj9tB7UZApCprfMjLbSf4",
  qrImage: "/demo/qr-demo.svg",
  shop: "Empresa Prueba",
  /** Visitas necesarias para el premio (debe coincidir con el programa real). */
  visits: 10,
};

const es = {
  metaTitle: "reviko — Demo en vivo",
  metaDescription: "Vive reviko como lo vivirán tus clientes: escanea, guarda tu tarjeta y gana tu premio.",
  exit: "Salir del demo",
  prev: "Anterior",
  next: "Siguiente",
  restart: "Reiniciar demo",
  keysHint: "Usa ← → para avanzar",
  steps: ["Escanea", "Guarda", "Acumula", "Tu negocio"],
  reward: "1 café gratis",
  s1: {
    eyebrow: "Paso 1 · Pruébalo tú mismo",
    title: ["Saca tu celular.", "Escanea."],
    sub: "Así se une un cliente a tu programa. Sin descargar ninguna app.",
    qrCaption: "Apunta la cámara de tu celular",
    mobileCta: "Abrir mi tarjeta en este celular",
    timer: "Toma menos de 30 segundos",
  },
  s2: {
    eyebrow: "Paso 2 · Un toque",
    title: ["Guárdala en", "tu Wallet."],
    sub: "Completa tus datos y agrega la tarjeta a Apple Wallet o Google Wallet. Queda junto a tus tarjetas del banco: nunca se pierde ni se olvida en casa.",
    points: [
      "Tu cliente no descarga nada",
      "La tarjeta lleva tu logo y tus colores",
      "Tú recibes su nombre y su contacto",
    ],
    passLabel: "Tarjeta de fidelización",
    passMember: "Cliente frecuente",
    walletBtn: "Agregar a Wallet",
    added: "Agregada",
  },
  s3: {
    eyebrow: "Paso 3 · Cada visita cuenta",
    title: ["Una visita,", "un sello."],
    sub: "El negocio escanea el código de tu tarjeta desde la app de reviko y el sello aparece en tu celular. Mira tu Wallet.",
    stampBtn: "Sumar sello",
    stampHint: "o presiona la barra espaciadora",
    progress: "visitas",
    left: "Te faltan",
    leftSuffix: "para tu premio",
    unlockedTitle: "¡Premio desbloqueado!",
    unlockedSub: "Así se siente un cliente que vuelve.",
    mirrorNote: "Esta pantalla ilustra tu tarjeta. La real está en tu Wallet.",
  },
  s4: {
    eyebrow: "Paso 4 · Ahora imagina tu negocio",
    title: ["Eso mismo,", "con tu marca."],
    sub: "Lo que acabas de vivir es lo que sentirán tus clientes. Y mientras ellos acumulan sellos, tú ves esto:",
    cards: [
      { value: "Quién vuelve", text: "Tus clientes fieles, con nombre y contacto." },
      { value: "Quién se perdió", text: "Los que dejaron de venir, para invitarlos de regreso." },
      { value: "Cuánto regresan", text: "Visitas, frecuencia y premios entregados." },
    ],
    ctaPrimary: "Empezar mis 14 días gratis",
    ctaWhatsapp: "Hablar por WhatsApp",
    whatsappMsg: "Hola, acabo de ver el demo de reviko y quiero empezar.",
    calcLink: "Calcular cuánto ganaría mi negocio",
    plansLink: "Ver planes",
    micro: "Desde $12 USD/mes · Cancelas cuando quieras",
  },
};

export type DemoDict = typeof es;

const en: DemoDict = {
  metaTitle: "reviko — Live demo",
  metaDescription: "Experience reviko the way your customers will: scan, save your card and earn your reward.",
  exit: "Exit demo",
  prev: "Back",
  next: "Next",
  restart: "Restart demo",
  keysHint: "Use ← → to navigate",
  steps: ["Scan", "Save", "Collect", "Your business"],
  reward: "1 free coffee",
  s1: {
    eyebrow: "Step 1 · Try it yourself",
    title: ["Grab your phone.", "Scan."],
    sub: "This is how a customer joins your program. No app to download.",
    qrCaption: "Point your phone camera here",
    mobileCta: "Open my card on this phone",
    timer: "Takes less than 30 seconds",
  },
  s2: {
    eyebrow: "Step 2 · One tap",
    title: ["Save it to", "your Wallet."],
    sub: "Fill in your details and add the card to Apple Wallet or Google Wallet. It sits next to your bank cards: never lost, never left at home.",
    points: [
      "Your customer downloads nothing",
      "The card carries your logo and colors",
      "You get their name and contact",
    ],
    passLabel: "Loyalty card",
    passMember: "Regular customer",
    walletBtn: "Add to Wallet",
    added: "Added",
  },
  s3: {
    eyebrow: "Step 3 · Every visit counts",
    title: ["One visit,", "one stamp."],
    sub: "The business scans your card's code from the reviko app and the stamp shows up on your phone. Check your Wallet.",
    stampBtn: "Add stamp",
    stampHint: "or press the space bar",
    progress: "visits",
    left: "Only",
    leftSuffix: "to go for your reward",
    unlockedTitle: "Reward unlocked!",
    unlockedSub: "This is how a returning customer feels.",
    mirrorNote: "This screen illustrates your card. The real one is in your Wallet.",
  },
  s4: {
    eyebrow: "Step 4 · Now picture your business",
    title: ["The same thing,", "with your brand."],
    sub: "What you just experienced is what your customers will feel. And while they collect stamps, you see this:",
    cards: [
      { value: "Who comes back", text: "Your regulars, with name and contact." },
      { value: "Who drifted away", text: "The ones who stopped coming, so you can invite them back." },
      { value: "How often", text: "Visits, frequency and rewards delivered." },
    ],
    ctaPrimary: "Start my 14-day free trial",
    ctaWhatsapp: "Chat on WhatsApp",
    whatsappMsg: "Hi, I just saw the reviko demo and I'd like to get started.",
    calcLink: "Calculate what my business would earn",
    plansLink: "See plans",
    micro: "From $12 USD/mo · Cancel anytime",
  },
};

export const demo: Record<Locale, DemoDict> = { es, en };
