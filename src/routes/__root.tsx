import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "BodySculpture | Estética corporal y facial en Santa Lucía de Tirajana" },
      {
        name: "description",
        content:
          "Centro de estética corporal y facial en Santa Lucía de Tirajana. Tratamientos personalizados con aparatología avanzada y técnica profesional. Agenda tu valoración.",
      },
      { name: "author", content: "BodySculpture" },
      { name: "theme-color", content: "#0B0B0B" },
      { property: "og:title", content: "BodySculpture | Estética corporal y facial en Santa Lucía de Tirajana" },
      {
        property: "og:description",
        content:
          "Resultados visibles y trato cercano. Remodelación corporal, drenaje linfático y rejuvenecimiento facial personalizados.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "BodySculpture" },
      { property: "og:locale", content: "es_ES" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "BodySculpture | Estética corporal y facial en Santa Lucía de Tirajana" },
      { name: "description", content: "Elegance Studio is a premium digital agency specializing in UX/UI design, branding, and modern front-end development." },
      { property: "og:description", content: "Elegance Studio is a premium digital agency specializing in UX/UI design, branding, and modern front-end development." },
      { name: "twitter:description", content: "Elegance Studio is a premium digital agency specializing in UX/UI design, branding, and modern front-end development." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/92ea83ce-0058-4c0c-b2f7-caa3cb4516d5/id-preview-2d05d093--838b7c83-8760-49fb-966a-b5133a6aedc6.lovable.app-1781241506255.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/92ea83ce-0058-4c0c-b2f7-caa3cb4516d5/id-preview-2d05d093--838b7c83-8760-49fb-966a-b5133a6aedc6.lovable.app-1781241506255.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Jost:wght@300;400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HealthAndBeautyBusiness",
          name: "BodySculpture",
          description:
            "Centro de estética corporal y facial con tratamientos personalizados.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Santa Lucía de Tirajana",
            addressRegion: "Las Palmas",
            addressCountry: "ES",
          },
          areaServed: "Las Palmas",
          founder: { "@type": "Person", name: "Cristina Curquejo Martel" },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main>
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </QueryClientProvider>
  );
}
