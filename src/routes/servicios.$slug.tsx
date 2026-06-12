import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Clock, MessageCircle, Check } from "lucide-react";
import { services, whatsappUrl } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { ServiceIcon } from "@/components/ServiceIcon";
import { CtaBand } from "@/components/CtaBand";
import facialImg from "@/assets/facial.jpg";
import bodyImg from "@/assets/body.jpg";

export const Route = createFileRoute("/servicios/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    const title = s ? `${s.name} | BodySculpture` : "Servicio | BodySculpture";
    const description = s?.excerpt ?? "Tratamiento estético personalizado en BodySculpture.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
      ],
      links: s ? [{ rel: "canonical", href: `/servicios/${s.slug}` }] : [],
    };
  },
  notFoundComponent: () => (
    <div className="container-prose flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h1 className="display-2">Tratamiento no encontrado</h1>
      <p className="lead mt-4">Es posible que el enlace haya cambiado.</p>
      <Link to="/servicios" className="mt-8 inline-flex items-center gap-2 text-gold">
        <ArrowLeft className="h-4 w-4" /> Ver todos los servicios
      </Link>
    </div>
  ),
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const img = service.category === "Facial" ? facialImg : bodyImg;
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <article>
        <section className="relative overflow-hidden pb-16 pt-36">
          <div className="container-prose relative grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <nav aria-label="Migas de pan" className="text-sm text-muted-foreground">
                <Link to="/" className="hover:text-foreground">Inicio</Link>
                <span className="mx-2 text-gold">/</span>
                <Link to="/servicios" className="hover:text-foreground">Servicios</Link>
                <span className="mx-2 text-gold">/</span>
                <span className="text-foreground">{service.name}</span>
              </nav>
              <span className="mt-6 inline-flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 text-gold">
                <ServiceIcon name={service.icon} className="h-6 w-6" />
              </span>
              <p className="eyebrow mt-6">{service.category}</p>
              <h1 className="display-1 mt-3 text-5xl md:text-6xl">{service.name}</h1>
              <p className="lead mt-6">{service.description}</p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={whatsappUrl(`Hola, me interesa el tratamiento de ${service.name}. ¿Podemos agendar una valoración?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-medium text-primary-foreground shadow-gold transition-all hover:bg-primary-hover hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-5 w-5" /> Reservar este tratamiento
                </a>
                <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 text-gold" /> {service.duration}
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="overflow-hidden rounded-3xl border border-border">
                <img
                  src={img}
                  alt={`Sesión del tratamiento ${service.name} en BodySculpture, ambiente elegante en negro y dorado`}
                  width={1000}
                  height={1200}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-t border-border py-20">
          <div className="container-prose grid gap-14 lg:grid-cols-2">
            <Reveal>
              <h2 className="display-2 text-3xl">Beneficios</h2>
              <div className="gold-rule mt-5" />
              <ul className="mt-8 space-y-4">
                {service.benefits.map((b: string) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="display-2 text-3xl">El procedimiento</h2>
              <div className="gold-rule mt-5" />
              <p className="mt-8 leading-relaxed">{service.procedure}</p>
              <div className="mt-8 rounded-2xl border border-border bg-card p-6">
                <p className="text-sm uppercase tracking-[0.18em] text-gold">Duración estimada</p>
                <p className="mt-2 font-display text-2xl text-foreground">{service.duration}</p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-t border-border py-20">
          <div className="container-prose">
            <Reveal>
              <h2 className="display-2 text-3xl">Otros tratamientos</h2>
            </Reveal>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {related.map((s) => (
                <Link
                  key={s.slug}
                  to="/servicios/$slug"
                  params={{ slug: s.slug }}
                  className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-gold/40"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-gold">
                    <ServiceIcon name={s.icon} className="h-4 w-4" />
                  </span>
                  <h3 className="mt-4 font-display text-xl text-foreground">{s.name}</h3>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm text-gold transition-transform group-hover:translate-x-1">
                    Ver <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </article>

      <CtaBand />
    </>
  );
}
