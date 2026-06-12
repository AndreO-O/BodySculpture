import { Link } from "@tanstack/react-router";
import { MessageCircle, ArrowRight } from "lucide-react";
import { whatsappUrl } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function CtaBand({
  eyebrow = "Tu transformación empieza hoy",
  title = "Reserva tu valoración personalizada",
  text = "Cuéntanos qué te gustaría mejorar. Diseñaremos un plan a tu medida, sin compromiso, para que vuelvas a sentirte tú.",
}: {
  eyebrow?: string;
  title?: string;
  text?: string;
}) {
  return (
    <section className="relative overflow-hidden border-y border-border bg-card py-24">
      <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="container-prose text-center">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="display-2 mx-auto mt-5 max-w-3xl">{title}</h2>
          <p className="lead mx-auto mt-6 max-w-2xl">{text}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-medium text-primary-foreground shadow-gold transition-all hover:bg-primary-hover hover:-translate-y-0.5"
            >
              <MessageCircle className="h-5 w-5" />
              Agenda por WhatsApp
            </a>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 font-medium text-foreground transition-colors hover:border-gold"
            >
              Ver formas de contacto
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
