import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { TrendingUp, Wallet, Users, Zap } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export const Route = createFileRoute("/partenaire")({
  head: () => ({
    meta: [
      { title: "Devenir partenaire — DJALAN" },
      { name: "description", content: "Rejoignez le réseau DJALAN. Plus de clients, paiements rapides, digitalisation de vos ventes pour les compagnies de transport." },
      { property: "og:title", content: "Devenir partenaire DJALAN" },
      { property: "og:description", content: "Digitalisez votre compagnie de transport et touchez plus de voyageurs." },
    ],
  }),
  component: PartnerPage,
});

const ARGS = [
  { icon: TrendingUp, t: "+30% de réservations", d: "Touchez de nouveaux voyageurs digitaux." },
  { icon: Wallet, t: "Paiements rapides", d: "Reversements automatiques chaque semaine." },
  { icon: Users, t: "Clients fidélisés", d: "Notes, avis, programme de fidélité intégré." },
  { icon: Zap, t: "Mise en route en 48h", d: "Onboarding simple, formation incluse." },
];

const FAQ = [
  { q: "Combien coûte le partenariat ?", a: "Aucun frais d'inscription. Une commission compétitive est prélevée uniquement sur les ventes effectuées via DJALAN." },
  { q: "Comment recevons-nous les paiements ?", a: "Reversements hebdomadaires sur votre compte mobile money ou bancaire." },
  { q: "Quels documents sont requis ?", a: "RCCM, attestation fiscale, agrément transport et coordonnées bancaires." },
];

function PartnerPage() {
  const [loading, setLoading] = useState(false);
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Demande envoyée ! Notre équipe vous contactera sous 48h.");
      (e.target as HTMLFormElement).reset();
    }, 800);
  }

  return (
    <SiteLayout>
      <section className="bg-muted/40">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
          <span className="reveal-up text-sm font-semibold uppercase tracking-wider text-secondary">Pour les transporteurs</span>
          <h1 className="reveal-up mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl" style={{ animationDelay: "120ms" }}>Boostez votre compagnie avec DJALAN</h1>
          <p className="reveal-up mt-5 text-lg text-muted-foreground" style={{ animationDelay: "220ms" }}>Plus de clients, plus de revenus, zéro complication. Rejoignez les compagnies leaders qui digitalisent leurs ventes.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ARGS.map((a, i) => (
            <div key={a.t} className="reveal-up hover-lift rounded-2xl bg-card p-6 shadow-[var(--shadow-card)] ring-1 ring-border/60" style={{ animationDelay: `${80 + i * 80}ms` }}>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary-soft text-secondary"><a.icon className="h-6 w-6" /></div>
              <h3 className="mt-4 text-lg font-bold">{a.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{a.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Inscrivez votre compagnie</h2>
          <p className="mt-3 text-muted-foreground">Remplissez ce formulaire, notre équipe vous contacte sous 48h pour démarrer.</p>
          <form onSubmit={onSubmit} className="reveal-up mt-8 space-y-4 rounded-3xl bg-card p-6 shadow-[var(--shadow-card)] ring-1 ring-border/60 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <Input required placeholder="Nom du responsable *" maxLength={100} />
              <Input required placeholder="Nom de la compagnie *" maxLength={100} />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Input required placeholder="N° RCCM *" maxLength={50} />
              <Input required type="tel" placeholder="Téléphone *" maxLength={20} />
            </div>
            <Input required type="email" placeholder="Email *" maxLength={255} />
            <Textarea placeholder="Axes desservis (Abidjan–Bouaké, etc.)" rows={4} maxLength={500} />
            <Button type="submit" disabled={loading} className="hover-lift hover-spark h-12 w-full rounded-full text-base">
              {loading ? "Envoi..." : "Envoyer ma demande"}
            </Button>
          </form>
        </div>
        <div>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">FAQ partenaires</h2>
          <div className="mt-8 space-y-4">
            {FAQ.map((f, i) => (
              <details key={f.q} className="reveal-up hover-lift group rounded-2xl bg-card p-6 shadow-[var(--shadow-card)] ring-1 ring-border/60" style={{ animationDelay: `${80 + i * 80}ms` }}>
                <summary className="hover-slide-x cursor-pointer list-none font-semibold marker:hidden">{f.q}</summary>
                <p className="mt-3 text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
