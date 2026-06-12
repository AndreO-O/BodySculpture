import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { whatsappUrl } from "@/data/site";
import preciosImg from "@/assets/precios-woman.jpg";

export const Route = createFileRoute("/precios")({
  head: () => ({
    meta: [
      { title: "Lista de precios | BodySculpture · Cristina Curquejo" },
      {
        name: "description",
        content:
          "Lista de precios de tratamientos corporales y faciales en BodySculpture, centro de estética en Vecindario: maderoterapia, drenaje, radiofrecuencia, criolipolisis, HidraLips y más.",
      },
      { property: "og:title", content: "Lista de precios | BodySculpture" },
      {
        property: "og:description",
        content:
          "Tratamientos corporales y faciales con precios de sesión suelta, packs y bonos.",
      },
    ],
    links: [{ rel: "canonical", href: "/precios" }],
  }),
  component: Precios,
});

type Item = { name: string; price: string };
type Group = { title: string; note?: string; items: Item[] };

const corporales: Group[] = [
  {
    title: "Metaloterapia + Maderoterapia Fit",
    note: "Duración aprox. 50 min. Trabajo de todo el cuerpo. Opción de bandas con ejercicios.",
    items: [
      { name: "Sesión suelta", price: "60 €" },
      { name: "Pack 6 sesiones + 2 exfoliantes", price: "290 €" },
      { name: "Pack 12 sesiones + 6 exfoliantes", price: "540 €" },
    ],
  },
  {
    title: "Masajes postoperatorios",
    items: [
      { name: "Sesión", price: "62 €" },
      { name: "Pack 10 sesiones", price: "550 €" },
    ],
  },
  {
    title: "Drenaje linfático moldeador brasileño",
    note: "Duración 50 min. Todo el cuerpo menos brazos.",
    items: [
      { name: "Sesión", price: "50 €" },
      { name: "Bono 10 sesiones", price: "450 €" },
    ],
  },
  {
    title: "Masaje relajante + Exfoliante natural",
    note: "Duración 50 min.",
    items: [{ name: "Sesión", price: "40 €" }],
  },
  {
    title: "Presoterapia corporal",
    note: "Duración 30 min.",
    items: [
      { name: "Sesión", price: "20 €" },
      { name: "Bono 6 sesiones", price: "95 €" },
      { name: "Bono 10 sesiones", price: "150 €" },
    ],
  },
  {
    title: "Radiofrecuencia corporal",
    items: [
      { name: "Sesión", price: "35 €" },
      { name: "Bono 6 sesiones", price: "180 €" },
      { name: "Bono 10 sesiones", price: "310 €" },
    ],
  },
  {
    title: "Criolipólisis",
    note: "50 min.",
    items: [
      { name: "Sesión", price: "95 €" },
      { name: "Bono 3 sesiones", price: "225 €" },
      { name: "Bono 10 sesiones", price: "450 €" },
    ],
  },
];

const faciales: Group[] = [
  {
    title: "HidraLips + Dermapen",
    note: "Sesión.",
    items: [{ name: "Sesión", price: "38 €" }],
  },
  {
    title: "Drenaje linfático facial",
    note: "Duración 30 min.",
    items: [
      { name: "Sesión", price: "40 €" },
      { name: "Bono 6 sesiones", price: "210 €" },
      { name: "Bono 10 sesiones", price: "350 €" },
    ],
  },
  {
    title: "Limpieza facial profunda con Hidrofacial",
    note: "Duración 1 hora.",
    items: [{ name: "Sesión", price: "65 €" }],
  },
  {
    title: "Radiofrecuencia facial",
    items: [
      { name: "HidraLips + Dermapen — Sesión", price: "38 €" },
      { name: "Bono 6 sesiones", price: "310 €" },
    ],
  },
];

function PriceGroup({ group }: { group: Group }) {
  return (
    <div className="border-b border-border pb-7 last:border-0">
      <h3 className="font-display text-xl text-foreground">{group.title}</h3>
      {group.note && (
        <p className="mt-1 text-sm text-muted-foreground">{group.note}</p>
      )}
      <ul className="mt-4 space-y-2.5">
        {group.items.map((it) => (
          <li
            key={it.name}
            className="flex items-baseline justify-between gap-3 text-sm"
          >
            <span className="text-muted-foreground">{it.name}</span>
            <span className="flex-1 border-b border-dotted border-border/60" />
            <span className="font-medium text-gold">{it.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Precios() {
  return (
    <>
      <section className="pb-12 pt-36">
        <div className="container-prose">
          <Reveal>
            <nav aria-label="Migas de pan" className="text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground">Inicio</Link>
              <span className="mx-2 text-gold">/</span>
              <span className="text-foreground">Lista de precios</span>
            </nav>
            <p className="eyebrow mt-6">Tarifas</p>
            <h1 className="display-1 mt-3 max-w-3xl">
              Lista de <span className="text-gradient-gold">precios</span>
            </h1>
            <p className="lead mt-7 max-w-2xl">
              Tratamientos corporales y faciales con aparatología avanzada. Consulta nuestras
              sesiones sueltas, packs y bonos.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative mt-12 overflow-hidden rounded-3xl border border-border">
              <img
                src={preciosImg}
                alt="Tratamientos corporales y faciales en BodySculpture, centro de estética en Vecindario"
                width={1024}
                height={1640}
                loading="lazy"
                className="h-72 w-full object-cover object-top sm:h-96"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>


      <section className="border-t border-border py-16">
        <div className="container-prose grid gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <Sparkles className="h-5 w-5 text-gold" />
              <h2 className="display-3 text-2xl">Tratamientos corporales</h2>
            </div>
            <div className="space-y-7">
              {corporales.map((g) => (
                <PriceGroup key={g.title} group={g} />
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mb-8 flex items-center gap-3">
              <Sparkles className="h-5 w-5 text-gold" />
              <h2 className="display-3 text-2xl">Tratamientos faciales</h2>
            </div>
            <div className="space-y-7">
              {faciales.map((g) => (
                <PriceGroup key={g.title} group={g} />
              ))}
            </div>

            <div className="mt-10">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-medium text-primary-foreground shadow-gold transition-all hover:bg-primary-hover hover:-translate-y-0.5"
              >
                <MessageCircle className="h-5 w-5" />
                Reserva tu cita
              </a>
            </div>
          </Reveal>
        </div>
        <div className="container-prose mt-12">
          <p className="text-xs text-muted-foreground">
            * Los precios pueden estar sujetos a cambios. Consúltanos para tratamientos
            personalizados y promociones vigentes.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
