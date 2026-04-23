import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Clock, Bus } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/trajets")({
  head: () => ({
    meta: [
      { title: "Trajets populaires en Côte d'Ivoire — DJALAN" },
      { name: "description", content: "Abidjan, Bouaké, Yamoussoukro, San Pedro, Korhogo… Découvrez les trajets disponibles sur DJALAN et leurs prix indicatifs." },
      { property: "og:title", content: "Trajets populaires — DJALAN" },
      { property: "og:description", content: "Tous les trajets interurbains en Côte d'Ivoire en un clic." },
    ],
  }),
  component: TripsPage,
});

const TRIPS = [
  { from: "Abidjan", to: "Bouaké", price: 7000, dur: "5h", freq: "12 départs/jour" },
  { from: "Abidjan", to: "Yamoussoukro", price: 5000, dur: "3h30", freq: "20 départs/jour" },
  { from: "Abidjan", to: "San Pedro", price: 8000, dur: "6h", freq: "8 départs/jour" },
  { from: "Abidjan", to: "Korhogo", price: 12000, dur: "9h", freq: "6 départs/jour" },
  { from: "Abidjan", to: "Daloa", price: 7500, dur: "5h30", freq: "10 départs/jour" },
  { from: "Abidjan", to: "Man", price: 11000, dur: "8h", freq: "5 départs/jour" },
  { from: "Bouaké", to: "Korhogo", price: 7000, dur: "5h", freq: "7 départs/jour" },
  { from: "Yamoussoukro", to: "Bouaké", price: 3500, dur: "2h", freq: "15 départs/jour" },
];

function TripsPage() {
  return (
    <SiteLayout>
      <section className="bg-muted/40">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Trajets</span>
          <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">Trajets populaires</h1>
          <p className="mt-5 text-lg text-muted-foreground">Découvrez les principales liaisons disponibles. Prix indicatifs, susceptibles de varier selon la compagnie.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TRIPS.map((t) => (
            <article key={`${t.from}-${t.to}`} className="group rounded-2xl bg-card p-6 shadow-[var(--shadow-card)] ring-1 ring-border/60 transition hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase text-muted-foreground">
                <Bus className="h-4 w-4 text-primary" /> {t.freq}
              </div>
              <div className="mt-3 flex items-center gap-3 font-display text-xl font-bold">
                <span>{t.from}</span>
                <ArrowRight className="h-5 w-5 text-primary" />
                <span>{t.to}</span>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-1 text-sm text-muted-foreground"><Clock className="h-4 w-4" />{t.dur}</div>
                <div className="font-display text-2xl font-extrabold text-secondary">{t.price.toLocaleString("fr-FR")} <span className="text-xs font-medium text-muted-foreground">FCFA</span></div>
              </div>
              <Button className="mt-5 h-11 w-full rounded-xl">Réserver sur l'app</Button>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
