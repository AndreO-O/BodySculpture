import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import { brand, whatsappUrl } from "@/data/site";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container-prose py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <img src={logo} alt="BodySculpture · Cristina Curquejo" width={160} height={160} className="h-20 w-auto" />
            <p className="lead mt-4 max-w-sm text-base">
              Estética corporal y facial personalizada en Santa Lucía de Tirajana. Resultados
              visibles, trato cercano y una experiencia pensada para ti.
            </p>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
            >
              Agenda tu valoración
            </a>
          </div>

          <nav aria-label="Navegación del pie">
            <h3 className="text-sm uppercase tracking-[0.2em] text-gold">Navegación</h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li><Link to="/" className="hover:text-foreground">Inicio</Link></li>
              <li><Link to="/servicios" className="hover:text-foreground">Servicios</Link></li>
              <li><Link to="/sobre-mi" className="hover:text-foreground">Sobre mí</Link></li>
              <li><Link to="/precios" className="hover:text-foreground">Precios</Link></li>
              <li><Link to="/contacto" className="hover:text-foreground">Contacto</Link></li>
            </ul>
          </nav>

          <div>
            <h3 className="text-sm uppercase tracking-[0.2em] text-gold">Contacto</h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-gold" />
                <span>{brand.address.street}, {brand.address.city}, {brand.address.region}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 shrink-0 text-gold" />
                <a href={`tel:${brand.phone}`} className="hover:text-foreground">{brand.phoneDisplay}</a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 shrink-0 text-gold" />
                <a href={`mailto:${brand.email}`} className="hover:text-foreground">{brand.email}</a>
              </li>
              <li className="flex gap-3">
                <Clock className="h-4 w-4 shrink-0 text-gold" />
                <span>L–V 09:00–20:00 · S 10:00–14:00</span>
              </li>
              <li className="flex gap-3">
                <Instagram className="h-4 w-4 shrink-0 text-gold" />
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">@bodysculpture</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="gold-line my-10" />
        <div className="flex flex-col items-center justify-between gap-3 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} {brand.name}. Todos los derechos reservados.</p>
          <p>Dirigido por {brand.director}</p>
        </div>
      </div>
    </footer>
  );
}
