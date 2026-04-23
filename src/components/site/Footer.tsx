import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import logoRemovebgPreview from "@/assets/logo-removebg-preview.png";

export function Footer() {
  return (
    <footer className="mt-24 bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src={logoRemovebgPreview} alt="DJALAN" width={160} height={40} className="float-soft h-10 w-auto brightness-0 invert" />
            <p className="mt-4 text-sm leading-relaxed text-background/70">
              La super-app de mobilité en Afrique. Réservez vos trajets interurbains en quelques secondes.
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="hover-lift flex h-9 w-9 items-center justify-center rounded-full bg-background/10 transition hover:bg-primary">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide">Navigation</h4>
            <ul className="mt-4 space-y-3 text-sm text-background/70">
              <li><Link to="/a-propos" className="hover-slide-x inline-block hover:text-primary">À propos</Link></li>
              <li><Link to="/comment-ca-marche" className="hover-slide-x inline-block hover:text-primary">Comment ça marche</Link></li>
              <li><Link to="/trajets" className="hover-slide-x inline-block hover:text-primary">Trajets</Link></li>
              <li><Link to="/partenaire" className="hover-slide-x inline-block hover:text-primary">Devenir partenaire</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide">Entreprise</h4>
            <ul className="mt-4 space-y-3 text-sm text-background/70">
              <li><a href="#" className="hover-slide-x inline-block hover:text-primary">Mentions légales</a></li>
              <li><a href="#" className="hover-slide-x inline-block hover:text-primary">Politique de confidentialité</a></li>
              <li><a href="#" className="hover-slide-x inline-block hover:text-primary">CGU</a></li>
              <li><Link to="/contact" className="hover-slide-x inline-block hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-background/70">
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-primary" /> Cocody, Abidjan, Côte d'Ivoire</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +225 07 00 00 00 00</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> hello@djalan.app</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-background/10 pt-6 text-center text-xs text-background/60">
          © {new Date().getFullYear()} DJALAN. Tous droits réservés. Made with ❤️ in Abidjan.
        </div>
      </div>
    </footer>
  );
}
