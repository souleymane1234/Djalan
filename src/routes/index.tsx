import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Search, Smartphone, ShieldCheck, Zap, MapPin, Calendar, Star, Quote } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DJALAN — Réservez vos trajets en Côte d'Ivoire en 1 clic" },
      { name: "description", content: "DJALAN, la super-app de mobilité en Afrique. Réservez vos voyages interurbains en Côte d'Ivoire, payez en mobile money et voyagez sereinement." },
      { property: "og:title", content: "DJALAN — La super-app de mobilité en Afrique" },
      { property: "og:description", content: "Réservez vos trajets interurbains en Côte d'Ivoire en quelques secondes." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: HomePage,
});

const STATS = [
  { v: "50K+", l: "Voyageurs" },
  { v: "200+", l: "Trajets quotidiens" },
  { v: "30+", l: "Compagnies partenaires" },
  { v: "4.8★", l: "Note moyenne" },
];

const STEPS = [
  { icon: Search, t: "Recherchez", d: "Indiquez votre départ, destination et date." },
  { icon: Star, t: "Comparez", d: "Choisissez la compagnie, l'horaire et le prix." },
  { icon: Smartphone, t: "Payez", d: "Mobile money, carte ou Wave en 1 clic." },
  { icon: MapPin, t: "Voyagez", d: "Présentez votre billet et bon voyage !" },
];

const TESTIMONIALS = [
  { name: "Aïcha K.", role: "Étudiante, Bouaké", text: "Plus besoin de faire la queue à la gare. Je réserve mon trajet Abidjan–Bouaké en 30 secondes !" },
  { name: "Moussa D.", role: "Commerçant", text: "Le paiement Wave est super rapide. Je voyage chaque semaine grâce à DJALAN." },
  { name: "Fatou T.", role: "Cadre", text: "L'app est claire, rapide. Enfin une vraie solution moderne pour voyager en Côte d'Ivoire." },
];

const PARTNERS = ["UTB", "STC", "DIAMOND", "CITRANSCO", "MTT", "BANI"];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-soft)" }} />
        <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-12 pt-10 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pb-24 lg:pt-20">
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-secondary-soft px-4 py-1.5 text-xs font-semibold text-secondary">
              🚀 Nouveau · Disponible en Côte d'Ivoire
            </span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Voyagez en Côte d'Ivoire,{" "}
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">en toute simplicité.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              Réservez vos trajets interurbains, comparez les compagnies et payez en mobile money — depuis votre téléphone, partout, à toute heure.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-14 rounded-full px-7 text-base shadow-[var(--shadow-elevated)]">
                <a href="#download"><Smartphone className="mr-2 h-5 w-5" />Télécharger l'app</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 rounded-full border-2 px-7 text-base">
                <Link to="/trajets">Voir les trajets <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>

            {/* Search bar */}
            <div className="mt-8 rounded-2xl bg-card p-3 shadow-[var(--shadow-soft)] ring-1 ring-border/60">
              <div className="grid gap-2 sm:grid-cols-[1fr_1fr_1fr_auto]">
                <div className="flex items-center gap-2 rounded-xl bg-muted px-3">
                  <MapPin className="h-4 w-4 text-primary" />
                  <Input placeholder="Départ" className="border-0 bg-transparent shadow-none focus-visible:ring-0" />
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-muted px-3">
                  <MapPin className="h-4 w-4 text-secondary" />
                  <Input placeholder="Arrivée" className="border-0 bg-transparent shadow-none focus-visible:ring-0" />
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-muted px-3">
                  <Calendar className="h-4 w-4 text-foreground/60" />
                  <Input type="date" className="border-0 bg-transparent shadow-none focus-visible:ring-0" />
                </div>
                <Button className="h-12 rounded-xl px-5"><Search className="h-4 w-4" /></Button>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem]" style={{ background: "var(--gradient-hero)", opacity: 0.15, filter: "blur(40px)" }} />
            <img src={heroImg} alt="Voyageuse utilisant l'app DJALAN" width={1280} height={1280} className="aspect-square w-full rounded-3xl object-cover shadow-[var(--shadow-elevated)]" />
            <div className="absolute -bottom-5 -left-5 rounded-2xl bg-card p-4 shadow-[var(--shadow-card)] ring-1 ring-border">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-soft text-secondary"><ShieldCheck className="h-5 w-5" /></div>
                <div>
                  <div className="text-sm font-semibold">Paiement sécurisé</div>
                  <div className="text-xs text-muted-foreground">Wave · Orange · MTN</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border/60 bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 md:grid-cols-4 lg:px-8">
          {STATS.map((s) => (
            <div key={s.l} className="text-center">
              <div className="font-display text-3xl font-extrabold text-foreground sm:text-4xl">{s.v}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Comment ça marche</span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">Voyagez en 4 étapes simples</h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <div key={s.t} className="group relative rounded-2xl bg-card p-6 shadow-[var(--shadow-card)] ring-1 ring-border/60 transition hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: "var(--gradient-hero)" }}>
                <s.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="mt-4 text-xs font-bold text-primary">ÉTAPE {i + 1}</div>
              <h3 className="mt-1 text-lg font-bold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PARTNERS */}
      <section className="bg-muted/40 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">Ils nous font confiance</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {PARTNERS.map((p) => (
              <div key={p} className="font-display text-xl font-bold tracking-wider text-foreground/40">{p}</div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-secondary">Témoignages</span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">Ils voyagent déjà avec DJALAN</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="rounded-2xl bg-card p-6 shadow-[var(--shadow-card)] ring-1 ring-border/60">
              <Quote className="h-7 w-7 text-primary/40" />
              <p className="mt-3 text-foreground/90">{t.text}</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-soft font-bold text-secondary">{t.name[0]}</div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA PARTNER + DOWNLOAD */}
      <section id="download" className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl p-8 sm:p-12" style={{ background: "var(--gradient-hero)" }}>
            <Zap className="h-10 w-10 text-primary-foreground" />
            <h3 className="mt-4 font-display text-2xl font-bold text-primary-foreground sm:text-3xl">Téléchargez l'app DJALAN</h3>
            <p className="mt-3 text-primary-foreground/90">Disponible bientôt sur iOS et Android. Soyez les premiers informés.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button size="lg" variant="secondary" className="h-12 rounded-full bg-foreground text-background hover:bg-foreground/90">App Store</Button>
              <Button size="lg" variant="secondary" className="h-12 rounded-full bg-foreground text-background hover:bg-foreground/90">Google Play</Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl p-8 sm:p-12" style={{ background: "var(--gradient-trust)" }}>
            <ShieldCheck className="h-10 w-10 text-secondary-foreground" />
            <h3 className="mt-4 font-display text-2xl font-bold text-secondary-foreground sm:text-3xl">Vous êtes une compagnie de transport ?</h3>
            <p className="mt-3 text-secondary-foreground/90">Rejoignez le réseau DJALAN, gagnez plus de clients et digitalisez vos ventes.</p>
            <Button asChild size="lg" className="mt-6 h-12 rounded-full bg-background text-foreground hover:bg-background/90">
              <Link to="/partenaire">Devenir partenaire <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
