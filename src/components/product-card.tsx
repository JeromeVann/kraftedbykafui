import { Link } from "@tanstack/react-router";
import { currency, type Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group">
      <div className="overflow-hidden bg-champagne">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={1024}
          height={1024}
          className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="pt-5 text-center">
        <h3 className="font-display text-xl text-espresso">{product.name}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{currency(product.price)}</p>
        <Link
          to="/order"
          search={{ item: product.slug }}
          className="mt-4 inline-block border-b border-gold pb-1 text-[0.7rem] uppercase tracking-[0.25em] text-gold"
        >
          Order this
        </Link>
      </div>
    </article>
  );
}
