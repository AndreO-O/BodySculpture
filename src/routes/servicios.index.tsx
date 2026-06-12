import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";
import { services, whatsappUrl } from "@/data/site";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { ServiceIcon } from "@/components/ServiceIcon";
import { CtaBand } from "@/components/CtaBand";
import facialImg from "@/assets/facial.jpg";
import serviciosVideo from "@/assets/servicios.mp4.asset.json";

// Lovable-hosted video CDN base, so the video also resolves when the app is
// deployed off-platform (e.g. Vercel) where the relative /__l5e path won't exist.
const ASSET_BASE = "https://project--838b7c83-8760-49fb-966a-b5133a6aedc6.lovable.app";

export const Route = createFileRoute("/servicios/")({
  head: () => ({
    meta: [
      { title: "Servicios | Tratamientos corporales y faciales — BodySculpture" },
      {
        name: "description",
        content:
          "Remodelación corporal, drenaje linfático, masaje moldeador, rejuvenecimiento y tratamientos faciales personalizados con aparatología avanzada en Santa Lucía de Tirajana.",
      },
      { property: "og:title", content: "Servicios — BodySculpture" },
      {
        property: "og:description",
        content: "Tratamientos corporales y faciales personalizados con resultados visibles.",
      },
    ],
    links: [{ rel: "canonical", href: "/servicios" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const corporal = services.filter((s) => s.category === "Corporal");
  const facial = services.filter((s) => s.category === "Facial");

  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-36">
        <video
          src={`${ASSET_BASE}${serviciosVideo.url}`}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/50" />
        <div className="container-prose relative">
          <Reveal>
            <nav aria-label="Migas de pan" className="text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground">Inicio</Link>
              <span className="mx-2 text-gold">/</span>
              <span className="text-foreground">Servicios</span>
            </nav>
            <h1 className="display-1 mt-6 max-w-3xl text-5xl md:text-6xl">
              Tratamientos a tu <span className="text-gradient-gold">medida</span>
            </h1>
            <p className="lead mt-6 max-w-2xl">
              Cada cuerpo y cada rostro son únicos. Por eso ningún tratamiento es estándar: diseñamos
              tu plan tras una valoración personalizada para lograr resultados reales y armónicos.
            </p>
          </Reveal>
        </div>
      </section>

      <ServiceGroup title="Tratamientos corporales" items={corporal} />
      <ServiceGroup title="Tratamientos faciales" items={facial} image={facialImg} />

      <CtaBand
        eyebrow="¿No sabes por dónde empezar?"
        title="Te ayudamos a elegir tu tratamiento ideal"
        text="En tu valoración analizamos tus objetivos y te recomendamos el plan perfecto para ti, sin compromiso."
      />
    </>
  );
}

function ServiceGroup({
  title,
  items,
  image,
}: {
  title: string;
  items: typeof services;
  image?: string;
}) {
  return (
    <section className="border-t border-border py-20">
      <div className="container-prose">
        <Reveal>
          <h2 className="display-2">{title}</h2>
          <div className="gold-rule mt-5" />
        </Reveal>
        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((s) => (
            <StaggerItem key={s.slug}>
              <Link
                to="/servicios/$slug"
                params={{ slug: s.slug }}
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-gold/40"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 text-gold">
                  <ServiceIcon name={s.icon} className="h-5 w-5" />
                </span>
                <h3 className="display-3 mt-6 text-2xl">{s.name}</h3>
                <p className="mt-3 flex-1 leading-relaxed">{s.excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm text-gold transition-transform group-hover:translate-x-1">
                  Ver detalles <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
        {image && (
          <Reveal className="mt-10">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gold hover:text-primary-hover"
            >
              <MessageCircle className="h-4 w-4" /> Consulta tu tratamiento facial
            </a>
          </Reveal>
        )}
      </div>
    </section>
  );
}
