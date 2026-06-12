import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast, Toaster } from "sonner";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";
import { brand, whatsappUrl } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto | BodySculpture — Santa Lucía de Tirajana" },
      {
        name: "description",
        content:
          "Reserva tu valoración en BodySculpture. WhatsApp, teléfono, correo y formulario. Estamos en Vecindario, Santa Lucía de Tirajana, Las Palmas.",
      },
      { property: "og:title", content: "Contacto — BodySculpture" },
      { property: "og:description", content: "Agenda tu valoración personalizada hoy mismo." },
    ],
    links: [{ rel: "canonical", href: "/contacto" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Indícanos tu nombre").max(80),
  email: z.string().trim().email("Introduce un email válido").max(255),
  phone: z.string().trim().max(20).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Cuéntanos un poco más").max(1000),
});

function ContactPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    const result = schema.safeParse(data);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        fieldErrors[issue.path[0] as string] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSending(true);
    setTimeout(() => {
      setSending(false);
      form.reset();
      toast.success("¡Gracias! Te contactaremos muy pronto.");
    }, 700);
  };

  return (
    <>
      <Toaster theme="dark" position="top-center" richColors />
      <section className="pb-12 pt-36">
        <div className="container-prose">
          <Reveal>
            <nav aria-label="Migas de pan" className="text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground">Inicio</Link>
              <span className="mx-2 text-gold">/</span>
              <span className="text-foreground">Contacto</span>
            </nav>
            <p className="eyebrow mt-6">Hablemos</p>
            <h1 className="display-1 mt-3 max-w-3xl text-5xl md:text-6xl">
              Tu mejor versión empieza con una <span className="text-gradient-gold">conversación</span>
            </h1>
            <p className="lead mt-7 max-w-2xl">
              Escríbenos por el canal que prefieras. Te responderemos para agendar tu valoración en el
              momento que mejor te venga.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border py-16">
        <div className="container-prose grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          {/* Info + map */}
          <Reveal>
            <div className="space-y-5">
              <ContactRow icon={MessageCircle} label="WhatsApp" value="Respuesta rápida" href={whatsappUrl()} />
              <ContactRow icon={Phone} label="Teléfono" value={brand.phoneDisplay} href={`tel:${brand.phone}`} />
              <ContactRow icon={Mail} label="Correo" value={brand.email} href={`mailto:${brand.email}`} />
              <ContactRow
                icon={MapPin}
                label="Dirección"
                value={`${brand.address.street}, ${brand.address.city}, ${brand.address.region}`}
              />
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-card p-6">
              <p className="flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-gold">
                <Clock className="h-4 w-4" /> Horario
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                {brand.hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-4">
                    <span className="text-muted-foreground">{h.day}</span>
                    <span className="text-foreground">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Ubicación de BodySculpture en Santa Lucía de Tirajana"
                src="https://www.google.com/maps?q=Vecindario,+Santa+Luc%C3%ADa+de+Tirajana,+Las+Palmas&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-72 w-full grayscale"
              />
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <form
              onSubmit={onSubmit}
              noValidate
              className="rounded-3xl border border-border bg-card p-8"
            >
              <h2 className="display-3 text-2xl">Solicita tu valoración</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Sin compromiso. Respondemos en menos de 24 h.
              </p>

              <div className="mt-7 space-y-5">
                <Field id="name" label="Nombre" error={errors.name}>
                  <input id="name" name="name" type="text" autoComplete="name" className={inputCls} />
                </Field>
                <Field id="email" label="Email" error={errors.email}>
                  <input id="email" name="email" type="email" autoComplete="email" className={inputCls} />
                </Field>
                <Field id="phone" label="Teléfono (opcional)" error={errors.phone}>
                  <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputCls} />
                </Field>
                <Field id="message" label="¿Qué te gustaría mejorar?" error={errors.message}>
                  <textarea id="message" name="message" rows={4} className={inputCls} />
                </Field>
              </div>

              <button
                type="submit"
                disabled={sending}
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-medium text-primary-foreground shadow-gold transition-all hover:bg-primary-hover disabled:opacity-60"
              >
                <Send className="h-4 w-4" />
                {sending ? "Enviando…" : "Enviar solicitud"}
              </button>
              <p className="mt-4 text-center text-xs text-muted-foreground">
                ¿Prefieres escribirnos directamente?{" "}
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="text-gold">
                  Abrir WhatsApp
                </a>
              </p>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

const inputCls =
  "w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground transition-colors focus:border-gold focus:outline-none";

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm text-foreground">
        {label}
      </label>
      {children}
      {error && <p className="mt-1.5 text-sm text-destructive">{error}</p>}
    </div>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-gold/40">
      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</p>
        <p className="mt-0.5 text-foreground">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    content
  );
}
