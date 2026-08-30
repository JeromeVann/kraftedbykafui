import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Phone, Mail } from "lucide-react";
import { whatsappLink } from "@/data/products";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-champagne/50">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl tracking-wide text-espresso">
            Krafted<span className="text-gold">by</span>Kafui
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Hand-crafted bridal fans, florals and bridesmaid gifts, made to order in Accra and
            delivered across Ghana.
          </p>
        </div>

        <div>
          <p className="eyebrow">Explore</p>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li><Link to="/shop" className="hover:text-gold">Catalog</Link></li>
            <li><Link to="/about" className="hover:text-gold">Our Story</Link></li>
            <li><Link to="/order" className="hover:text-gold">Place an Order</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow">Reach Us</p>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-3">
              <MapPin className="size-4 text-gold" /> East Legon, Accra
            </li>
            <li className="flex items-center gap-3">
              <Phone className="size-4 text-gold" />
              <a href={whatsappLink("Hello Kafui!")} className="hover:text-gold">
                +233 20 123 4567
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="size-4 text-gold" />
              <a href="mailto:hello@kraftedbykafui.com" className="hover:text-gold">
                hello@kraftedbykafui.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Instagram className="size-4 text-gold" /> @kraftedbykafui
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/70 py-6 text-center text-xs tracking-[0.2em] text-muted-foreground uppercase">
        © {new Date().getFullYear()} KraftedbyKafui
      </div>
    </footer>
  );
}
