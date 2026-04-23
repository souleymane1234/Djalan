import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — DJALAN" },
      { name: "description", content: "Contactez l'équipe DJALAN par email, téléphone ou WhatsApp. Nous sommes basés à Abidjan, Côte d'Ivoire." },
      { property: "og:title", content: "Contactez DJALAN" },
      { property: "og:description", content: "Une question ? Notre équipe vous répond rapidement." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [loading, setLoading] = useState(false);
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Message envoyé ! Nous vous répondrons rapidement.");
      (e.target as HTMLFormElement).reset();
    }, 800);
  }

  return (
    <SiteLayout>
      <section className="bg-muted/40">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
          <span className="reveal-up text-sm font-semibold uppercase tracking-wider text-primary">Contact</span>
          <h1 className="reveal-up mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl" style={{ animationDelay: "120ms" }}>Parlons-nous</h1>
          <p className="reveal-up mt-5 text-lg text-muted-foreground" style={{ animationDelay: "220ms" }}>Une question, un partenariat, une suggestion ? Notre équipe est à votre écoute.</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:px-8">
        <form onSubmit={onSubmit} className="reveal-up space-y-4 rounded-3xl bg-card p-6 shadow-[var(--shadow-card)] ring-1 ring-border/60 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <Input required placeholder="Nom complet *" maxLength={100} />
            <Input required type="email" placeholder="Email *" maxLength={255} />
          </div>
          <Input type="tel" placeholder="Téléphone" maxLength={20} />
          <Input required placeholder="Sujet *" maxLength={150} />
          <Textarea required rows={6} placeholder="Votre message *" maxLength={1000} />
          <Button type="submit" disabled={loading} className="hover-lift hover-spark h-12 w-full rounded-full text-base">
            {loading ? "Envoi..." : "Envoyer le message"}
          </Button>
        </form>

        <div className="space-y-4">
          {[
            { icon: MapPin, t: "Adresse", d: "Cocody, Riviera Golf, Abidjan" },
            { icon: Phone, t: "Téléphone", d: "+225 07 00 00 00 00" },
            { icon: Mail, t: "Email", d: "hello@djalan.app" },
            { icon: MessageCircle, t: "WhatsApp", d: "+225 07 00 00 00 00" },
          ].map((c, i) => (
            <div key={c.t} className="reveal-up hover-lift flex gap-4 rounded-2xl bg-card p-5 shadow-[var(--shadow-card)] ring-1 ring-border/60" style={{ animationDelay: `${80 + i * 70}ms` }}>
              <div className="hover-lift flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary-soft text-secondary"><c.icon className="h-5 w-5" /></div>
              <div>
                <div className="font-semibold">{c.t}</div>
                <div className="text-sm text-muted-foreground">{c.d}</div>
              </div>
            </div>
          ))}
          <div className="reveal-up hover-lift overflow-hidden rounded-2xl shadow-[var(--shadow-card)] ring-1 ring-border/60" style={{ animationDelay: "380ms" }}>
            <iframe
              title="DJALAN Abidjan"
              src="https://www.google.com/maps?q=Cocody%20Riviera%20Abidjan&output=embed"
              className="h-64 w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
