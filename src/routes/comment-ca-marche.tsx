import { Link, createFileRoute } from "@tanstack/react-router";
import { Search, GitCompareArrows, CreditCard, Bus, Zap, ShieldCheck, Wallet, Check, X } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/comment-ca-marche")({
  head: () => ({
    meta: [
      { title: "Comment ça marche — DJALAN" },
      { name: "description", content: "Réservez vos trajets en 4 étapes simples : recherchez, comparez, payez, voyagez. DJALAN, la mobilité simplifiée." },
      { property: "og:title", content: "Comment ça marche — DJALAN" },
      { property: "og:description", content: "4 étapes pour voyager partout en Côte d'Ivoire." },
    ],
  }),
  component: HowItWorks,
});

const STEPS = [
  { icon: Search, t: "Recherchez votre trajet", d: "Indiquez votre ville de départ, destination et date. DJALAN affiche tous les trajets disponibles." },
  { icon: GitCompareArrows, t: "Comparez les offres", d: "Filtrez par horaire, prix, compagnie ou note des voyageurs. Choisissez ce qui vous convient." },
  { icon: CreditCard, t: "Payez en 1 clic", d: "Wave, Orange Money, MTN MoMo, carte bancaire — paiements 100% sécurisés." },
  { icon: Bus, t: "Voyagez serein", d: "Recevez votre billet électronique. Présentez-le à l'embarquement et bon voyage !" },
];

const ADV = [
  { icon: Zap, t: "Rapidité", d: "Réservez en moins de 60 secondes." },
  { icon: ShieldCheck, t: "Sécurité", d: "Paiements cryptés, billets vérifiés." },
  { icon: Wallet, t: "Meilleur prix", d: "Comparez et économisez sur chaque trajet." },
];

function HowItWorks() {
  return (
    <SiteLayout>
      <section className="bg-muted/40">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-24">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Comment ça marche</span>
          <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">Voyagez en 4 étapes</h1>
          <p className="mt-6 text-lg text-muted-foreground">De la recherche au voyage, tout se passe sur votre téléphone.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-6 lg:space-y-10">
          {STEPS.map((s, i) => (
            <div key={s.t} className={`grid items-center gap-8 rounded-3xl bg-card p-8 shadow-[var(--shadow-card)] ring-1 ring-border/60 lg:grid-cols-2 lg:p-12 ${i % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}>
              <div>
                <div className="text-sm font-bold text-primary">ÉTAPE 0{i + 1}</div>
                <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">{s.t}</h2>
                <p className="mt-3 text-muted-foreground">{s.d}</p>
              </div>
              <div className="flex aspect-video items-center justify-center rounded-2xl" style={{ background: i % 2 ? "var(--gradient-trust)" : "var(--gradient-hero)" }}>
                <s.icon className="h-24 w-24 text-white/90" strokeWidth={1.5} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-3xl font-bold sm:text-4xl">Pourquoi DJALAN ?</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {ADV.map((a) => (
            <div key={a.t} className="rounded-2xl bg-card p-6 shadow-[var(--shadow-card)] ring-1 ring-border/60">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary"><a.icon className="h-6 w-6" /></div>
              <h3 className="mt-4 text-lg font-bold">{a.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{a.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-3xl font-bold sm:text-4xl">Avant vs Avec DJALAN</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border-2 border-dashed border-border p-8">
            <div className="text-sm font-bold uppercase text-muted-foreground">Avant</div>
            <ul className="mt-4 space-y-3 text-foreground/80">
              {["Aller à la gare, faire la queue", "Pas de visibilité sur les horaires", "Paiement en cash uniquement", "Aucune garantie de place"].map((x) => (
                <li key={x} className="flex gap-2"><X className="h-5 w-5 shrink-0 text-destructive" />{x}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl p-8 text-secondary-foreground" style={{ background: "var(--gradient-trust)" }}>
            <div className="text-sm font-bold uppercase">Avec DJALAN</div>
            <ul className="mt-4 space-y-3">
              {["Réservation en 60 secondes depuis chez vous", "Tous les horaires en temps réel", "Mobile money, carte, Wave", "Place garantie + billet électronique"].map((x) => (
                <li key={x} className="flex gap-2"><Check className="h-5 w-5 shrink-0" />{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16 text-center sm:px-6 lg:px-8">
        <Button asChild size="lg" className="h-14 rounded-full px-8 text-base shadow-[var(--shadow-elevated)]">
          <Link to="/trajets">Voir les trajets disponibles</Link>
        </Button>
      </section>
    </SiteLayout>
  );
}
