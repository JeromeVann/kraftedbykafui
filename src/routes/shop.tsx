import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ProductCard } from "@/components/product-card";
import { categories, products, type Category } from "@/data/products";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Catalog — Bridal Fans, Flowers & Gifts | KraftedbyKafui" },
      {
        name: "description",
        content:
          "Browse hand-beaded bridal fans, wedding florals and bridesmaid gift boxes, made to order in Accra and delivered across Ghana.",
      },
      { property: "og:title", content: "Catalog — KraftedbyKafui" },
      {
        property: "og:description",
        content: "Hand-beaded bridal fans, florals and bridesmaid gifts, made to order in Accra.",
      },
    ],
  }),
  component: ShopPage,
});

function ShopPage() {
  const [filter, setFilter] = useState<Category | "all">("all");
  const list = filter === "all" ? products : products.filter((p) => p.category === filter);

  return (
    <main className="mx-auto max-w-6xl px-5 py-20">
      <header className="text-center">
        <p className="eyebrow">The Collection</p>
        <h1 className="gold-rule mt-4 text-5xl text-espresso md:text-6xl">Our Catalog</h1>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Every piece is made to order. Choose a design, tell us your colours and dates, and we will
          craft it for your day.
        </p>
      </header>

      <div className="mt-12 flex flex-wrap justify-center gap-3">
        {[{ id: "all" as const, label: "All" }, ...categories].map((c) => (
          <button
            key={c.id}
            onClick={() => setFilter(c.id as Category | "all")}
            className={`rounded-full border px-6 py-2.5 text-[0.7rem] uppercase tracking-[0.22em] transition-colors ${
              filter === c.id
                ? "border-gold bg-primary text-primary-foreground"
                : "border-border text-muted-foreground hover:border-gold hover:text-gold"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </main>
  );
}
