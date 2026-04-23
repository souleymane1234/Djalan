import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Heart, Users } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — DJALAN, mobilité africaine nouvelle génération" },
      { name: "description", content: "Découvrez l'histoire, la mission et l'équipe derrière DJALAN, la super-app de mobilité en Afrique." },
      { property: "og:title", content: "À propos de DJALAN" },
      { property: "og:description", content: "Notre mission : rendre la mobilité accessible à tous les Africains." },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  { icon: Target, t: "Mission", d: "Démocratiser l'accès à un transport fiable, sécurisé et abordable pour tous les Africains." },
  { icon: Eye, t: "Vision", d: "Devenir la super-app de référence du voyage en Afrique : transport, hôtels, activités, paiements." },
  { icon: Heart, t: "Valeurs", d: "Confiance, simplicité, innovation, panafricanisme. Nous bâtissons pour le continent." },
];

const TIMELINE = [
  { y: "2024", t: "Naissance du projet", d: "Idée née d'une frustration : voyager en CI reste compliqué." },
  { y: "2025 Q1", t: "MVP & premières compagnies", d: "Signature de 5 compagnies pilotes à Abidjan." },
  { y: "2025 Q3", t: "Lancement public", d: "Ouverture nationale en Côte d'Ivoire." },
  { y: "2026", t: "Expansion régionale", d: "Sénégal, Bénin, Togo, Burkina Faso." },
];

function AboutPage() {
  return (
    <SiteLayout>
      <section className="bg-muted/40">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-24">
          <span className="reveal-up text-sm font-semibold uppercase tracking-wider text-primary">À propos</span>
          <h1 className="reveal-up mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl" style={{ animationDelay: "120ms" }}>
            Bâtir la mobilité <span className="text-secondary">de l'Afrique de demain.</span>
          </h1>
          <p className="reveal-up mt-6 text-lg text-muted-foreground" style={{ animationDelay: "220ms" }}>
            DJALAN est née d'une conviction : chaque Africain mérite une solution de transport simple, fiable et accessible. Nous combinons technologie, mobile money et partenariats locaux pour réinventer le voyage interurbain.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {VALUES.map((v, i) => (
            <div key={v.t} className="reveal-up hover-lift rounded-2xl bg-card p-8 shadow-[var(--shadow-card)] ring-1 ring-border/60" style={{ animationDelay: `${80 + i * 80}ms` }}>
              <div className="hover-lift flex h-12 w-12 items-center justify-center rounded-xl bg-secondary-soft">
                <v.icon className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="mt-5 text-xl font-bold">{v.t}</h3>
              <p className="mt-2 text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Notre parcours</h2>
        <div className="mt-10 space-y-6">
          {TIMELINE.map((e, i) => (
            <div key={e.y} className="reveal-up hover-lift flex gap-5 rounded-2xl bg-card p-6 shadow-[var(--shadow-card)] ring-1 ring-border/60" style={{ animationDelay: `${100 + i * 90}ms` }}>
              <div className="flex h-14 w-20 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-primary-foreground" style={{ background: "var(--gradient-hero)" }}>
                {e.y}
              </div>
              <div>
                <h3 className="text-lg font-bold">{e.t}</h3>
                <p className="mt-1 text-muted-foreground">{e.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="reveal-up shimmer-shell rounded-3xl p-10 text-center sm:p-16" style={{ background: "var(--gradient-trust)" }}>
          <Users className="float-soft mx-auto h-12 w-12 text-secondary-foreground" />
          <h2 className="mt-4 font-display text-3xl font-bold text-secondary-foreground sm:text-4xl">Une équipe panafricaine</h2>
          <p className="mx-auto mt-4 max-w-2xl text-secondary-foreground/90">
            Des entrepreneurs, ingénieurs et opérateurs passionnés, basés à Abidjan, Dakar et Paris, unis par une même vision : faire bouger l'Afrique.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
