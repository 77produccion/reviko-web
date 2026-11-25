/* Landings por nicho para la pauta (/para/<nicho>).
 * Cada anuncio de Meta apunta a la landing de su nicho: el dueño ve su
 * propio negocio desde la primera línea, con un ejemplo de premio y una
 * calculadora con números de su oficio. Solo en español (pauta Colombia). */

export interface Niche {
  slug: string;
  /** Nombre corto para eventos del píxel y mensajes de WhatsApp */
  key: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: [string, string];
  sub: string;
  reward: {
    label: string;
    total: number;
    filled: number;
    icon: "coffee" | "cut" | "car" | "flower" | "fork" | "gift";
    caption: string;
  };
  image: string;
  imageAlt: string;
  pains: { title: string; text: string }[];
  ideasTitle: string;
  ideas: string[];
  calc: { customers: number; ticket: number; rate: number };
  whatsappMsg: string;
}

export const NICHES: Niche[] = [
  {
    slug: "barberias",
    key: "barberias",
    metaTitle: "Tarjeta de fidelización digital para barberías · reviko",
    metaDescription:
      "Haz que tus clientes vuelvan a tu silla. 8 cortes y el 9.º gratis, en el celular de tu cliente sin descargar nada. 14 días gratis.",
    eyebrow: "reviko para barberías",
    title: ["Haz que vuelvan", "a tu silla."],
    sub: "Tu cliente guarda su tarjeta de cortes en el celular, sin descargar nada. Tú sabes quién viene cada 15 días, quién se perdió y lo invitas a volver antes de que se vaya con otro barbero.",
    reward: { label: "Cortes", total: 8, filled: 7, icon: "cut", caption: "8 cortes. El 9.º es gratis." },
    image: "/images/img-3.webp",
    imageAlt: "Silla de barbería clásica en local premium",
    pains: [
      { title: "El cliente se va con otro barbero", text: "Sin una razón para volver, el corte de la próxima vez lo hace quien esté libre." },
      { title: "Las tarjetas de papel se pierden", text: "Se mojan, se quedan en la otra billetera y el cliente pierde sus sellos." },
      { title: "No sabes quién dejó de venir", text: "Con reviko ves quién lleva más de un mes sin pasar por la silla." },
    ],
    ideasTitle: "Premios que funcionan en barberías",
    ideas: ["8 cortes, el 9.º gratis", "Arreglo de barba gratis al 5.º corte", "Cumpleaños: corte con 50 % de descuento", "Trae a un amigo y ambos ganan un sello"],
    calc: { customers: 250, ticket: 7, rate: 15 },
    whatsappMsg: "Hola, tengo una barbería y quiero ver cómo funciona reviko.",
  },
  {
    slug: "unas-y-estetica",
    key: "unas_estetica",
    metaTitle: "Fidelización digital para salones de uñas y centros de estética · reviko",
    metaDescription:
      "Convierte cada cita en la razón de la siguiente. Tarjeta de fidelización en Apple y Google Wallet para salones de uñas, spas y centros de estética.",
    eyebrow: "reviko para uñas y estética",
    title: ["Clientas que", "regresan."],
    sub: "Tu clienta junta sellos en su celular con cada cita y vuelve por su premio. Tú ves quién no ha regresado y la invitas antes de que reserve en otro lugar.",
    reward: { label: "Citas", total: 6, filled: 5, icon: "flower", caption: "4 citas y 20 % en la siguiente." },
    image: "/images/img-6.webp",
    imageAlt: "Manos con manicura elegante en tonos neutros",
    pains: [
      { title: "Clientas que no vuelven a reservar", text: "Vino una vez, le encantó… y no supiste más de ella." },
      { title: "Promociones que nadie ve", text: "Las historias se pierden en 24 horas. La tarjeta vive en su celular." },
      { title: "Sin datos de tus clientas fieles", text: "Sabes quién viene cada 3 semanas y a quién premiar." },
    ],
    ideasTitle: "Premios que funcionan en uñas y estética",
    ideas: ["4 citas y 20 % de descuento en la siguiente", "Diseño de uñas gratis a la 6.ª cita", "Mes de cumpleaños: tratamiento facial de regalo", "Tarjeta VIP para tus clientas más fieles"],
    calc: { customers: 180, ticket: 15, rate: 15 },
    whatsappMsg: "Hola, tengo un salón de uñas / centro de estética y quiero ver cómo funciona reviko.",
  },
  {
    slug: "restaurantes",
    key: "restaurantes",
    metaTitle: "Programa de fidelización digital para restaurantes · reviko",
    metaDescription:
      "Haz que tus comensales vuelvan. 5 visitas y un postre gratis, con la tarjeta en el celular de tu cliente. Sin apps, sin papel. 14 días gratis.",
    eyebrow: "reviko para restaurantes",
    title: ["Que tu mesa tenga", "una próxima vez."],
    sub: "Tus comensales guardan la tarjeta de tu restaurante en el celular, sin descargar nada. Acumulan visitas, vuelven por su premio y tú sabes quiénes son tus clientes de siempre.",
    reward: { label: "Visitas", total: 5, filled: 4, icon: "fork", caption: "5 visitas y el postre va por la casa." },
    image: "/images/img-2.webp",
    imageAlt: "Plato de pasta servido en mesa de madera de restaurante",
    pains: [
      { title: "Comensales que vienen una sola vez", text: "Pagaste para que llegaran. Ahora dales una razón para volver." },
      { title: "Dependes de las apps de domicilios", text: "Construye tu propia base de clientes, sin comisiones." },
      { title: "No sabes quién es cliente fiel", text: "Ve frecuencia, última visita y premia a los que más vienen." },
    ],
    ideasTitle: "Premios que funcionan en restaurantes",
    ideas: ["5 visitas y un postre gratis", "Bebida gratis a la 3.ª visita del mes", "Cumpleaños: entrada de regalo", "Doble sello de lunes a miércoles"],
    calc: { customers: 600, ticket: 12, rate: 10 },
    whatsappMsg: "Hola, tengo un restaurante y quiero ver cómo funciona reviko.",
  },
  {
    slug: "cafeterias",
    key: "cafeterias",
    metaTitle: "Tarjeta de sellos digital para cafeterías · reviko",
    metaDescription:
      "6 cafés y el 7.º va por la casa. Tu tarjeta de sellos en el celular de tus clientes, sin descargar nada. Desde USD 12 al mes, 14 días gratis.",
    eyebrow: "reviko para cafeterías",
    title: ["El café de mañana", "empieza hoy."],
    sub: "Tu tarjeta de sellos, ahora en el celular de tus clientes. Escanean una vez, la guardan en su Wallet y cada café los acerca al que va por la casa.",
    reward: { label: "Cafés", total: 7, filled: 6, icon: "coffee", caption: "6 cafés. El 7.º va por la casa." },
    image: "/images/img-4.webp",
    imageAlt: "Taza de café con arte latte sobre barra de madera",
    pains: [
      { title: "El cartón se queda en la otra chaqueta", text: "Y el cliente empieza de cero, o no vuelve a pedirlo." },
      { title: "Hay una cafetería en cada esquina", text: "La que tiene su tarjeta en el celular del cliente gana." },
      { title: "No sabes quién viene a diario", text: "Ve a tus clientes de todos los días y prémialos." },
    ],
    ideasTitle: "Premios que funcionan en cafeterías",
    ideas: ["6 cafés, el 7.º gratis", "Pastel de regalo a la 10.ª visita", "Cumpleaños: bebida de la casa", "Doble sello antes de las 9 a. m."],
    calc: { customers: 400, ticket: 4, rate: 20 },
    whatsappMsg: "Hola, tengo una cafetería y quiero ver cómo funciona reviko.",
  },
];
