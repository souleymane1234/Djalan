import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoRemovebgPreview from "@/assets/logo-removebg-preview.png";
import { Button } from "@/components/ui/button";

const NAV = [
  { to: "/", label: "Accueil" },
  { to: "/a-propos", label: "À propos" },
  { to: "/comment-ca-marche", label: "Comment ça marche" },
  { to: "/trajets", label: "Trajets" },
  { to: "/partenaire", label: "Devenir partenaire" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 transition-transform duration-300 hover:scale-[1.03]">
          <img src={logoRemovebgPreview} alt="DJALAN" width={240} height={80} className="float-soft h-25 w-auto" />
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="relative text-sm font-medium text-foreground/80 transition-colors hover:text-primary after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100"
              activeProps={{ className: "text-primary font-semibold" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button asChild className="hover-lift hover-spark rounded-full px-5 shadow-[var(--shadow-elevated)]">
            <a href="#download">Télécharger l'app</a>
          </Button>
        </div>
        <button
          aria-label="Menu"
          className="hover-lift inline-flex h-10 w-10 items-center justify-center rounded-full bg-muted lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="flex flex-col gap-1 p-4">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="hover-slide-x rounded-lg px-3 py-3 text-base font-medium text-foreground hover:bg-muted"
                activeProps={{ className: "bg-secondary-soft text-secondary" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <Button asChild className="mt-3 h-12 rounded-full text-base">
              <a href="#download">Télécharger l'app</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
