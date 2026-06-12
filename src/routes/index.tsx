import { createFileRoute, Link } from "@tanstack/react-router";
import {
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  HeartHandshake,
  Gem,
  Sparkles,
  Quote,
  Plus,
} from "lucide-react";
import { useState } from "react";
import { brand, services, faqs, testimonials, whatsappUrl } from "@/data/site";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { ServiceIcon } from "@/components/ServiceIcon";
import { CtaBand } from "@/components/CtaBand";
import { HeroVideo } from "@/components/HeroVideo";
import heroImg from "@/assets/hero.jpg";
import heroPoster from "@/assets/hero-poster.jpg";
import tratamientosImg from "@/assets/tratamientos.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BodySculpture | Estética corporal y facial en Santa Lucía de Tirajana" },
      {
        name: "description",
        content:
          "Vuelve a sentirte tú. Tratamientos corporales y faciales personalizados con aparatología avanzada en Santa Lucía de Tirajana. Agenda tu valoración sin compromiso.",
      },
      { property: "og:title", content: "BodySculpture | Estética corporal y facial premium" },
      {
        property: "og:description",
        content: "Resultados visibles, trato cercano y una experiencia diseñada para ti.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const benefits = [
  {
    icon: HeartHandshake,
    title: "Trato cercano y humano",
    text: "Te escuchamos antes de tratarte. Cada plan nace de tus objetivos reales, no de un catálogo.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad y profesionalidad",
    text: "Protocolos supervisados con criterio profesional y tecnología certificada en cada sesión.",
  },
  {
    icon: Gem,
    title: "Resultados visibles",
    text: "Trabajamos para que veas y sientas la diferencia, con cambios progresivos y duraderos.",
  },
];

const results = [
  { value: "+10", label: "años de experiencia" },
  { value: "+2.500", label: "tratamientos realizados" },
  { value: "98%", label: "clientes que repiten" },
  { value: "100%", label: "protocolos personalizados" },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[100svh] flex-col overflow-hidden pt-32 pb-20 [justify-content:safe_center]">
        <HeroVideo
          poster={heroPoster}
          fallback={heroImg}
          fallbackAlt="Mujer de piel luminosa y rostro sereno iluminada con luz dorada sobre fondo negro, símbolo del cuidado estético premium en BodySculpture"
          className="absolute inset-0 h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />

        <div className="container-prose relative">
          <Reveal>
            <p className="eyebrow">Estética corporal y facial · Santa Lucía de Tirajana</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="display-1 mt-6 max-w-3xl">
              Descubre tratamientos exclusivos para tu{" "}
              <span className="text-gradient-gold">cuerpo y rostro.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="lead mt-7 max-w-xl">
              Tratamientos personalizados que realzan tu belleza natural y te devuelven la confianza.
              Aquí no buscamos otra versión de ti: buscamos la mejor.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
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
                Descubre los tratamientos
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.45}>
            <ul className="mt-14 flex flex-wrap gap-x-10 gap-y-4 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-gold" /> Valoración sin compromiso</li>
              <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-gold" /> Aparatología avanzada</li>
              <li className="flex items-center gap-2"><HeartHandshake className="h-4 w-4 text-gold" /> Trato personalizado</li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24">
        <div className="container-prose">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Por qué elegirnos</p>
            <h2 className="display-2 mt-4">Un cuidado pensado para ti, de principio a fin</h2>
          </Reveal>
          <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
            {benefits.map((b) => (
              <StaggerItem
                key={b.title}
                className="group rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-gold/40"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 text-gold">
                  <b.icon className="h-5 w-5" />
                </span>
                <h3 className="display-3 mt-6 text-2xl">{b.title}</h3>
                <p className="mt-3 leading-relaxed">{b.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-t border-border py-24">
        <div className="container-prose">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal className="max-w-2xl">
              <p className="eyebrow">Tratamientos destacados</p>
              <h2 className="display-2 mt-4">Esculpimos cuerpo y rostro con precisión</h2>
            </Reveal>
            <Reveal>
              <Link
                to="/servicios"
                className="inline-flex items-center gap-2 text-sm text-gold hover:text-primary-hover"
              >
                Ver todos los servicios <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <StaggerItem key={s.slug}>
                <Link
                  to="/servicios/$slug"
                  params={{ slug: s.slug }}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-gold/40"
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 text-gold">
                      <ServiceIcon name={s.icon} className="h-5 w-5" />
                    </span>
                    <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {s.category}
                    </span>
                  </div>
                  <h3 className="display-3 mt-6 text-2xl">{s.name}</h3>
                  <p className="mt-3 flex-1 leading-relaxed">{s.excerpt}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm text-gold transition-transform group-hover:translate-x-1">
                    Conocer tratamiento <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="border-t border-border py-24">
        <div className="container-prose grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border">
              <img
                src={tratamientosImg}
                alt="Especialista de BodySculpture aplicando un tratamiento facial con aparatología avanzada"
                width={1200}
                height={1000}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="eyebrow">Tratamientos</p>
            <h2 className="display-2 mt-4">Sobre nuestros tratamientos</h2>
            <p className="lead mt-6">
              En Bodysculpture C.C.M ofrecemos una cuidada selección de tratamientos corporales y
              faciales diseñados para realzar la belleza natural de cada persona de forma
              personalizada y efectiva. Nuestro trabajo se basa en la combinación de técnicas
              avanzadas, productos de alta calidad y una atención experta que prioriza siempre el
              bienestar y la confianza.
            </p>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Los tratamientos corporales están enfocados en el modelado de la silueta, la mejora de
              la firmeza y la redefinición de zonas específicas del cuerpo. Cada protocolo se adapta
              a las necesidades individuales, buscando resultados visibles y armoniosos sin perder de
              vista el cuidado y el respeto por el cuerpo.
            </p>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              En nuestros tratamientos faciales, trabajamos la salud y la estética de la piel para
              potenciar su luminosidad, firmeza y equilibrio. A través de métodos personalizados,
              ayudamos a revitalizar el rostro, mejorando su aspecto y manteniendo siempre una
              expresión natural y cuidada.
            </p>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              En Bodysculpture C.C.M entendemos la estética como una experiencia integral. Cada
              tratamiento es un espacio de dedicación exclusiva, donde la profesionalidad, el detalle
              y el trato cercano se unen para que te sientas acompañada, segura y satisfecha con cada
              resultado.
            </p>
          </Reveal>

        </div>
      </section>



      <section className="border-y border-border bg-card py-20">
        <div className="container-prose">
          <Stagger className="grid grid-cols-2 gap-10 lg:grid-cols-4">
            {results.map((r) => (
              <StaggerItem key={r.label} className="text-center">
                <p className="font-display text-5xl text-gradient-gold">{r.value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-muted-foreground">
                  {r.label}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24">
        <div className="container-prose">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Lo que dicen quienes ya confían</p>
            <h2 className="display-2 mt-4">Historias de confianza recuperada</h2>
          </Reveal>
          <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <StaggerItem
                key={t.name}
                className="flex h-full flex-col rounded-2xl border border-border bg-card p-8"
              >
                <Quote className="h-7 w-7 text-gold" />
                <p className="mt-5 flex-1 font-display text-xl leading-relaxed text-foreground">
                  “{t.quote}”
                </p>
                <div className="mt-6">
                  <p className="font-medium text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.treatment}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CtaBand />

      {/* FAQ */}
      <section className="py-24">
        <div className="container-prose grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="eyebrow">Preguntas frecuentes</p>
            <h2 className="display-2 mt-4">Resolvemos tus dudas</h2>
            <p className="lead mt-6">
              ¿Tienes otra pregunta? Escríbenos por WhatsApp y te respondemos personalmente.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <FaqList />
          </Reveal>
        </div>
      </section>
    </>
  );
}

function FaqList() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-border border-y border-border">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q}>
            <button
              className="flex w-full items-center justify-between gap-4 py-6 text-left"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="font-display text-xl text-foreground">{f.q}</span>
              <Plus
                className={`h-5 w-5 shrink-0 text-gold transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ${
                isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <p className="overflow-hidden leading-relaxed">{f.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
