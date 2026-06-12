// Centralized brand + content data so the site is easy to maintain and extend.

export const brand = {
  name: "BodySculpture",
  tagline: "Centro de estética corporal y facial",
  director: "Cristina Curquejo Martel",
  phoneDisplay: "+34 600 000 000",
  phone: "+34600000000",
  whatsapp: "34600000000",
  email: "hola@bodysculpture.es",
  address: {
    street: "Vecindario",
    city: "Santa Lucía de Tirajana",
    region: "Las Palmas",
    country: "España",
  },
  hours: [
    { day: "Lunes – Viernes", time: "09:00 – 20:00" },
    { day: "Sábado", time: "10:00 – 14:00" },
    { day: "Domingo", time: "Cerrado" },
  ],
} as const;

export const whatsappUrl = (msg = "Hola, me gustaría agendar una valoración en BodySculpture.") =>
  `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(msg)}`;

export type Service = {
  slug: string;
  name: string;
  category: "Corporal" | "Facial";
  excerpt: string;
  description: string;
  benefits: string[];
  procedure: string;
  duration: string;
  icon: string;
};

export const services: Service[] = [
  {
    slug: "metaloterapia-maderoterapia-fit",
    name: "Metaloterapia + Maderoterapia Fit",
    category: "Corporal",
    excerpt: "Trabajo completo del cuerpo para esculpir y reafirmar tu silueta.",
    description:
      "Una combinación de metaloterapia y maderoterapia que actúa sobre todo el cuerpo para moldear, reafirmar y activar la circulación. Con opción de bandas con ejercicios para potenciar los resultados.",
    benefits: [
      "Esculpe y reafirma todo el cuerpo",
      "Activa la circulación",
      "Reduce la celulitis",
      "Resultados progresivos",
    ],
    procedure:
      "Trabajo corporal completo de aproximadamente 50 minutos que combina maniobras con instrumentos de madera y metal, con opción de incorporar bandas con ejercicios.",
    duration: "Aprox. 50 min",
    icon: "Activity",
  },
  {
    slug: "masajes-postoperatorios",
    name: "Masajes postoperatorios",
    category: "Corporal",
    excerpt: "Recuperación cuidada y resultados óptimos tras tu cirugía.",
    description:
      "Masajes específicos para la recuperación postoperatoria que favorecen el drenaje, reducen la inflamación y ayudan a moldear los tejidos para un mejor resultado final.",
    benefits: [
      "Reduce la inflamación",
      "Favorece el drenaje",
      "Mejora la cicatrización",
      "Optimiza el resultado quirúrgico",
    ],
    procedure:
      "Maniobras suaves y específicas adaptadas a tu fase de recuperación, siempre con técnica delicada y profesional.",
    duration: "Según protocolo",
    icon: "Hand",
  },
  {
    slug: "drenaje-linfatico-moldeador-brasileno",
    name: "Drenaje linfático moldeador brasileño",
    category: "Corporal",
    excerpt: "Ligereza inmediata y una silueta más definida.",
    description:
      "Técnica de drenaje moldeador brasileño que trabaja todo el cuerpo (menos brazos), activa la circulación linfática, reduce la retención de líquidos y ayuda a definir la figura.",
    benefits: [
      "Menos retención de líquidos",
      "Sensación de ligereza",
      "Mejora la circulación",
      "Define la silueta",
    ],
    procedure:
      "Maniobras rítmicas de drenaje moldeador siguiendo el recorrido del sistema linfático durante aproximadamente 50 minutos.",
    duration: "50 min",
    icon: "Waves",
  },
  {
    slug: "masaje-relajante-exfoliante",
    name: "Masaje relajante + Exfoliante natural",
    category: "Corporal",
    excerpt: "Relájate y renueva tu piel con exfoliantes naturales.",
    description:
      "Un masaje relajante combinado con un exfoliante natural que renueva la piel, mejora su textura y te regala un momento de bienestar y desconexión.",
    benefits: [
      "Renueva y suaviza la piel",
      "Relajación profunda",
      "Mejora la textura",
      "Bienestar inmediato",
    ],
    procedure:
      "Sesión de aproximadamente 50 minutos que combina exfoliación natural y maniobras relajantes.",
    duration: "50 min",
    icon: "Flower2",
  },
  {
    slug: "presoterapia-corporal",
    name: "Presoterapia corporal",
    category: "Corporal",
    excerpt: "Mejora la circulación y reduce la pesadez de piernas.",
    description:
      "La presoterapia aplica presión controlada para activar la circulación, favorecer el drenaje de líquidos y aliviar la sensación de pesadez, dejando el cuerpo descongestionado.",
    benefits: [
      "Activa la circulación",
      "Reduce la retención de líquidos",
      "Alivia la pesadez de piernas",
      "Efecto desinflamante",
    ],
    procedure:
      "Sesión de aproximadamente 30 minutos con equipo de presoterapia que aplica presión progresiva en las zonas a tratar.",
    duration: "30 min",
    icon: "Waves",
  },
  {
    slug: "radiofrecuencia-corporal",
    name: "Radiofrecuencia corporal",
    category: "Corporal",
    excerpt: "Reafirma la piel y combate la flacidez corporal.",
    description:
      "La radiofrecuencia corporal estimula la producción de colágeno mediante calor controlado, reafirmando la piel, mejorando su elasticidad y trabajando la flacidez.",
    benefits: [
      "Reafirma la piel",
      "Estimula el colágeno",
      "Combate la flacidez",
      "Mejora la elasticidad",
    ],
    procedure:
      "Aplicación de radiofrecuencia con calor controlado sobre las zonas a tratar dentro de tu plan personalizado.",
    duration: "Según protocolo",
    icon: "Zap",
  },
  {
    slug: "criolipolisis",
    name: "Criolipólisis",
    category: "Corporal",
    excerpt: "Reduce la grasa localizada con frío controlado.",
    description:
      "La criolipólisis utiliza frío controlado para eliminar la grasa localizada de forma segura y no invasiva, reduciendo el volumen en las zonas más rebeldes.",
    benefits: [
      "Reduce grasa localizada",
      "Tratamiento no invasivo",
      "Resultados visibles",
      "Sin tiempo de recuperación",
    ],
    procedure:
      "Sesión de aproximadamente 50 minutos en la que se aplica frío controlado sobre la zona seleccionada.",
    duration: "50 min",
    icon: "Activity",
  },
  {
    slug: "hidralips-dermapen",
    name: "HidraLips + Dermapen",
    category: "Facial",
    excerpt: "Hidratación profunda y revitalización de la piel.",
    description:
      "Tratamiento que combina HidraLips y Dermapen para hidratar en profundidad, estimular la regeneración celular y mejorar la luminosidad y firmeza de la piel.",
    benefits: [
      "Hidratación profunda",
      "Estimula la regeneración",
      "Piel más luminosa",
      "Mejora la firmeza",
    ],
    procedure:
      "Sesión que combina la técnica HidraLips con microneedling Dermapen, adaptada a las necesidades de tu piel.",
    duration: "Según protocolo",
    icon: "Sparkles",
  },
  {
    slug: "drenaje-linfatico-facial",
    name: "Drenaje linfático facial",
    category: "Facial",
    excerpt: "Rostro descongestionado, luminoso y desinflamado.",
    description:
      "Drenaje linfático facial con maniobras suaves que activan la circulación, reducen la inflamación y aportan luminosidad y descanso al rostro.",
    benefits: [
      "Descongestiona el rostro",
      "Reduce la inflamación",
      "Aporta luminosidad",
      "Efecto relajante",
    ],
    procedure:
      "Maniobras suaves de drenaje facial de aproximadamente 30 minutos siguiendo el recorrido linfático.",
    duration: "30 min",
    icon: "Waves",
  },
  {
    slug: "limpieza-facial-hidrofacial",
    name: "Limpieza facial profunda con Hidrofacial",
    category: "Facial",
    excerpt: "Limpieza profunda para una piel renovada y luminosa.",
    description:
      "Limpieza facial profunda con tecnología Hidrofacial que elimina impurezas, exfolia e hidrata la piel en una misma sesión, dejándola fresca y luminosa.",
    benefits: [
      "Elimina impurezas",
      "Exfolia e hidrata",
      "Piel luminosa",
      "Resultados inmediatos",
    ],
    procedure:
      "Sesión de aproximadamente 1 hora que combina limpieza, exfoliación e hidratación con tecnología Hidrofacial.",
    duration: "1 hora",
    icon: "Flower2",
  },
  {
    slug: "radiofrecuencia-facial",
    name: "Radiofrecuencia facial",
    category: "Facial",
    excerpt: "Efecto lifting natural y piel más firme.",
    description:
      "La radiofrecuencia facial estimula el colágeno mediante calor controlado para reafirmar la piel, atenuar líneas de expresión y conseguir un efecto lifting natural.",
    benefits: [
      "Reafirma la piel",
      "Atenúa líneas de expresión",
      "Estimula el colágeno",
      "Efecto lifting natural",
    ],
    procedure:
      "Aplicación de radiofrecuencia facial con calor controlado, a menudo combinada con HidraLips + Dermapen.",
    duration: "Según protocolo",
    icon: "Sparkles",
  },
];

export const faqs = [
  {
    q: "¿Qué tratamientos ofrecen?",
    a: "Ofrecemos tratamientos corporales, faciales y aparatología avanzada para el bienestar y la belleza.",
  },
  {
    q: "¿Son seguros los tratamientos?",
    a: "Sí, todos nuestros tratamientos son realizados por profesionales capacitados y con tecnología de vanguardia para garantizar la seguridad.",
  },
  {
    q: "¿Cómo agendar una cita?",
    a: "Puedes agendar una cita fácilmente a través de nuestro sitio web o llamando a nuestro centro de estética.",
  },
  {
    q: "¿Tienen promociones disponibles?",
    a: "Sí, ofrecemos promociones periódicas en tratamientos.",
  },
  {
    q: "¿Cuánto duran los tratamientos?",
    a: "La duración varía según el tratamiento, pero generalmente oscilan entre 30 minutos y 2 horas.",
  },
];


export const testimonials = [
  {
    name: "Laura M.",
    treatment: "Remodelación corporal",
    quote:
      "Por primera vez en años me miro al espejo y me gusto. El trato de Cristina es exquisito y los resultados, reales.",
  },
  {
    name: "Nuria P.",
    treatment: "Rejuvenecimiento facial",
    quote:
      "Mi piel luce descansada y luminosa. Sentí que entendían exactamente lo que necesitaba desde la primera cita.",
  },
  {
    name: "Eva R.",
    treatment: "Drenaje linfático",
    quote:
      "Salgo de cada sesión ligera y renovada. Es mi momento de cuidarme y se nota en cómo me siento.",
  },
];
