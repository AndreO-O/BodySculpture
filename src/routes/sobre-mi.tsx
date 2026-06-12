import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Gem, MessageCircle, Heart, Sparkles, ShieldCheck, Leaf } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { brand, whatsappUrl } from "@/data/site";
import cristinaImg from "@/assets/cristina.jpg";
import heroImg from "@/assets/sobre-mi-hero.jpg";

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: brand.name,
  description:
    "Centro de estética corporal y facial en Vecindario (Santa Lucía de Tirajana), dirigido por Cristina Curquejo Martel. Tratamientos personalizados con aparatología estética avanzada.",
  image: cristinaImg,
  founder: { "@type": "Person", name: brand.director },
  telephone: brand.phone,
  email: brand.email,
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: brand.address.street,
    addressLocality: brand.address.city,
    addressRegion: brand.address.region,
    addressCountry: brand.address.country,
  },
  areaServed: `${brand.address.street}, ${brand.address.city}`,
  knowsAbout: [
    "Tratamientos corporales",
    "Tratamientos faciales",
    "Aparatología estética",
    "Masajes moldeadores",
    "Drenaje linfático",
  ],
};

export const Route = createFileRoute("/sobre-mi")({
  head: () => ({
    meta: [
      {
        title:
          "Sobre mí | Centro de Estética en Vecindario · Cristina Curquejo",
      },
      {
        name: "description",
        content:
          "Conoce BodySculpture, centro de estética corporal y facial en Vecindario (Santa Lucía de Tirajana). Cristina Curquejo Martel: tratamientos personalizados y aparatología avanzada.",
      },
      { property: "og:title", content: "Sobre mí | BodySculpture · Centro de estética en Vecindario" },
      {
        property: "og:description",
        content:
          "Estética avanzada y tratamientos personalizados para resultados visibles en el cuerpo y el rostro, en Vecindario.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/sobre-mi" },
      { property: "og:image", content: cristinaImg },
    ],
    links: [{ rel: "canonical", href: "/sobre-mi" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(aboutSchema),
      },
    ],
  }),
  component: SobreMi,
});

const highlights = [
  "Tratamientos personalizados",
  "Aparatología estética avanzada",
  "Masajes moldeadores y drenaje",
  "Atención cercana y profesional",
];

const values = [
  { icon: Heart, title: "Cercanía", text: "Te tratamos como nos gustaría que nos trataran: con atención real y honestidad." },
  { icon: ShieldCheck, title: "Profesionalidad", text: "Formación constante y criterio clínico en cada decisión." },
  { icon: Sparkles, title: "Excelencia", text: "Buscamos resultados visibles que respeten tu belleza natural." },
  { icon: Leaf, title: "Bienestar", text: "Una experiencia que cuida tu cuerpo y también tu mente." },
];

function SobreMi() {
  return (
    <>
      <section className="relative overflow-hidden pb-12 pt-36">
        <img
          src={heroImg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/50" />
        <div className="container-prose relative">
          <Reveal>
            <nav aria-label="Migas de pan" className="text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground">Inicio</Link>
              <span className="mx-2 text-gold">/</span>
              <span className="text-foreground">Sobre mí</span>
            </nav>
            <p className="eyebrow mt-6">Sobre mí</p>
            <h1 className="display-1 mt-3 max-w-3xl">
              Estética avanzada y tratamientos{" "}
              <span className="text-gradient-gold">personalizados</span>
            </h1>
            <p className="lead mt-7 max-w-2xl">
              BodySculpture es un centro de estética corporal y facial en Vecindario, dirigido por
              Cristina Curquejo Martel, especializado en la mejora del cuerpo y el rostro.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border py-16">
        <div className="container-prose grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border">
              <img
                src={cristinaImg}
                alt="Cristina Curquejo Martel, directora de BodySculpture, en su centro de estética corporal y facial en Vecindario"
                width={1024}
                height={1640}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <h2 className="display-2">Centro de estética corporal y facial en Vecindario</h2>
            <h3 className="mt-3 font-display text-xl text-gold">Cristina Curquejo Martel · Directora</h3>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Ofrecemos una amplia variedad de tratamientos corporales y faciales con aparatología
              estética avanzada, combinados con masajes moldeadores, drenaje linfático corporal y
              tratamientos faciales especializados, adaptados a las necesidades de cada clienta.
            </p>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              En nuestro centro de estética en Vecindario trabajamos con un enfoque profesional y
              cercano, priorizando la calidad, la seguridad y los resultados visibles. Cada tratamiento
              se diseña de forma individual, con el objetivo de mejorar la silueta, la calidad de la
              piel y el bienestar general.
            </p>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Si buscas un centro especializado en tratamientos corporales y faciales en Vecindario, en
              BodySculpture encontrarás experiencia, tecnología y atención personalizada para ayudarte a
              sentirte mejor y potenciar tu belleza natural.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {highlights.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <Gem className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-medium text-primary-foreground shadow-gold transition-all hover:bg-primary-hover hover:-translate-y-0.5"
              >
                <MessageCircle className="h-5 w-5" />
                Agenda tu valoración
              </a>
              <Link
                to="/servicios"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-7 py-3.5 font-medium text-foreground transition-colors hover:border-gold"
              >
                Ver tratamientos
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Filosofía */}
      <section className="border-t border-border py-20">
        <div className="container-prose grid gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Filosofía</p>
            <h2 className="display-2 mt-4">Belleza con sentido, resultados con alma</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lead">
              No creemos en tratamientos genéricos ni en promesas vacías. Creemos en escuchar, en
              entender lo que cada persona necesita y en acompañarla con honestidad. Nuestro objetivo
              no es cambiarte, sino ayudarte a reencontrarte con tu mejor versión.
            </p>
            <p className="mt-5 leading-relaxed">
              Cada detalle del centro está pensado para que tu visita sea un momento de cuidado: un
              espacio sereno, protocolos seguros y la tranquilidad de estar en buenas manos.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Valores */}
      <section className="border-t border-border py-20">
        <div className="container-prose">
          <Reveal>
            <p className="eyebrow">Nuestros valores</p>
            <h2 className="display-2 mt-4">Lo que nos define</h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <StaggerItem
                key={v.title}
                className="rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-gold/40"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 text-gold">
                  <v.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-xl text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed">{v.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
