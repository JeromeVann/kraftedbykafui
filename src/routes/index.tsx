import { createFileRoute, Link } from "@tanstack/react-router";
import { ProductCard } from "@/components/product-card";
import { categories, products } from "@/data/products";
import heroImage from "@/assets/hero-bride.jpg";
import storyImage from "@/assets/story-giftbox.jpg";
import receptionImage from "@/assets/gallery-reception.jpg";
import fansImage from "@/assets/product-fans.jpg";
import bouquetImage from "@/assets/product-bouquet.jpg";
import proposalImage from "@/assets/product-proposalbox.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KraftedbyKafui — Bridal Fans, Flowers & Bridesmaid Gifts in Accra" },
      {
        name: "description",
        content:
          "Hand-beaded bridal fans, wedding florals and bridesmaid gift boxes, made to order in Accra and delivered across Ghana. Order by form or WhatsApp.",
      },
      { property: "og:title", content: "KraftedbyKafui — Bridal Fans, Flowers & Gifts" },
      {
        property: "og:description",
        content:
          "Hand-beaded bridal fans, florals and bridesmaid gifts, made to order in Accra, Ghana.",
      },
    ],
  }),
  component: HomePage,
});

const categoryImages = {
  fans: fansImage,
  flowers: bouquetImage,
  gifts: proposalImage,
} as const;

const services = [
  { title: "Bridal Party Sets", body: "Coordinated fans and gifts for the whole party, colour matched to your palette." },
  { title: "Full Floral Styling", body: "Bouquets, posies and reception centrepieces designed around your venue." },
  { title: "Personalisation", body: "Monograms, engraving and calligraphed tags on every keepsake." },
  { title: "Nationwide Delivery", body: "Careful packaging and timed delivery to Accra, Kumasi and beyond." },
];

function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative">
        <img
          src={heroImage}
          alt="Bride holding an ornate gold beaded hand fan"
          width={1024}
          height={1024}
          className="h-[78vh] min-h-[520px] w-full object-cover object-center"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-espresso/35 px-5 text-center">
          <p className="text-[0.65rem] uppercase tracking-[0.35em] text-background/85">
            Accra · Ghana
          </p>
          <h1 className="mt-6 max-w-3xl text-5xl leading-tight text-background md:text-7xl">
            Bridal fans, flowers &amp; gifts, made by hand
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-background/85">
            Beaded fans, wedding florals and bridesmaid boxes crafted to order for your day —
            delivered across Ghana.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/shop"
              className="rounded-full bg-background px-8 py-3.5 text-[0.7rem] uppercase tracking-[0.25em] text-espresso"
            >
              View Catalog
            </Link>
            <Link
              to="/order"
              search={{}}
              className="rounded-full border border-background/70 px-8 py-3.5 text-[0.7rem] uppercase tracking-[0.25em] text-background"
            >
              Place an Order
            </Link>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-24 md:grid-cols-2">
        <div>
          <p className="eyebrow">Our Story</p>
          <h2 className="mt-4 text-4xl text-espresso md:text-5xl">
            Slow-made pieces for the biggest day
          </h2>
          <p className="mt-6 text-sm leading-loose text-muted-foreground">
            Every fan is beaded by hand in our Accra studio, every posy tied to your palette, every
            gift box packed as if it were for a friend. We take a handful of weddings each month so
            each order gets the attention it deserves.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-block border-b border-gold pb-1 text-[0.7rem] uppercase tracking-[0.25em] text-gold"
          >
            Read our story
          </Link>
        </div>
        <img
          src={storyImage}
          alt="Blush gift box tied with a satin ribbon"
          loading="lazy"
          width={1024}
          height={1024}
          className="aspect-square w-full object-cover"
        />
      </section>

      {/* Categories */}
      <section className="bg-champagne/40 py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center">
            <p className="eyebrow">What We Make</p>
            <h2 className="gold-rule mt-4 text-4xl text-espresso md:text-5xl">Three collections</h2>
          </div>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {categories.map((c) => (
              <Link key={c.id} to="/shop" className="group block text-center">
                <div className="overflow-hidden">
                  <img
                    src={categoryImages[c.id]}
                    alt={c.label}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-6 text-2xl text-espresso">{c.label}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.blurb}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="text-center">
          <p className="eyebrow">Featured</p>
          <h2 className="gold-rule mt-4 text-4xl text-espresso md:text-5xl">Loved by our brides</h2>
        </div>
        <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 6).map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link
            to="/shop"
            className="rounded-full border border-gold px-9 py-3.5 text-[0.7rem] uppercase tracking-[0.25em] text-gold"
          >
            See the full catalog
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="bg-champagne/40 py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center">
            <p className="eyebrow">Services</p>
            <h2 className="gold-rule mt-4 text-4xl text-espresso md:text-5xl">How we help</h2>
          </div>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.title} className="border-t border-gold/50 pt-6">
                <h3 className="text-xl text-espresso">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative">
        <img
          src={receptionImage}
          alt="Candlelit wedding reception table with blush florals"
          loading="lazy"
          width={1024}
          height={1024}
          className="h-[440px] w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-espresso/50 px-5 text-center">
          <p className="text-[0.65rem] uppercase tracking-[0.35em] text-background/85">
            Ready when you are
          </p>
          <h2 className="mt-5 max-w-2xl text-4xl text-background md:text-5xl">
            Tell us about your wedding
          </h2>
          <Link
            to="/order"
            search={{}}
            className="mt-9 rounded-full bg-background px-9 py-3.5 text-[0.7rem] uppercase tracking-[0.25em] text-espresso"
          >
            Place an Order
          </Link>
        </div>
      </section>
    </main>
  );
}
