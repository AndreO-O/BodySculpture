import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, MessageCircle } from "lucide-react";
import { brand, whatsappUrl } from "@/data/site";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/servicios", label: "Servicios" },
  { to: "/sobre-mi", label: "Sobre mí" },
  { to: "/precios", label: "Precios" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="container-prose flex items-center justify-between" aria-label="Principal">
        <Link to="/" className="flex items-center" aria-label={`${brand.name} inicio`}>
          <img
            src={logo}
            alt="BodySculpture · Cristina Curquejo"
            width={160}
            height={160}
            className={`w-auto transition-all duration-500 ${scrolled ? "h-12" : "h-16"}`}
          />
        </Link>

        <div className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-gold transition-all hover:bg-primary-hover hover:-translate-y-0.5"
          >
            <MessageCircle className="h-4 w-4" />
            Agenda por WhatsApp
          </a>
        </div>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
          onClick={() => setOpen(true)}
          aria-label="Abrir menú"
        >
          <Menu className="h-5 w-5" />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-background/70 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col bg-card p-6 shadow-elegant transition-transform duration-400 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-label="Menú de navegación"
        >
          <div className="mb-10 flex items-center justify-between">
            <img src={logo} alt="BodySculpture" width={120} height={120} className="h-12 w-auto" />
            <button
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground"
              onClick={() => setOpen(false)}
              aria-label="Cerrar menú"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="border-b border-border py-4 font-display text-2xl text-foreground"
                activeProps={{ className: "text-gradient-gold" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-4 text-base font-medium text-primary-foreground"
          >
            <MessageCircle className="h-5 w-5" />
            Agenda por WhatsApp
          </a>
        </aside>
      </div>
    </header>
  );
}
