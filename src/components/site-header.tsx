import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AppLink } from "@/components/app-link";
import { useLocation } from "@/lib/navigation";

const nav = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Catalog" },
  { to: "/about", label: "Our Story" },
  { to: "/order", label: "Order" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useLocation().split("?")[0];

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5">
        <AppLink to="/" className="leading-none">
          <span className="font-display text-2xl tracking-wide text-espresso">
            Krafted<span className="text-gold">by</span>Kafui
          </span>
          <span className="mt-1 block text-[0.6rem] uppercase tracking-[0.35em] text-muted-foreground">
            Accra · Ghana
          </span>
        </AppLink>

        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((item) => (
            <AppLink
              key={item.to}
              to={item.to}
              className={`text-xs uppercase tracking-[0.22em] transition-colors hover:text-gold ${
                pathname === item.to ? "text-gold" : "text-muted-foreground"
              }`}
            >
              {item.label}
            </AppLink>
          ))}
        </nav>

        <AppLink
          to="/order"
          className="hidden rounded-full bg-primary px-6 py-2.5 text-xs uppercase tracking-[0.22em] text-primary-foreground transition-opacity hover:opacity-90 md:inline-block"
        >
          Place an Order
        </AppLink>

        <button
          className="md:hidden text-espresso"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-4">
            {nav.map((item) => (
              <AppLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-3 text-xs uppercase tracking-[0.22em] text-muted-foreground"
              >
                {item.label}
              </AppLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
