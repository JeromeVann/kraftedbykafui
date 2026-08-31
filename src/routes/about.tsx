import { createFileRoute, Link } from "@tanstack/react-router";
import storyImage from "@/assets/story-giftbox.jpg";
import receptionImage from "@/assets/gallery-reception.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — KraftedbyKafui | Bridal Atelier in Accra" },
      {
        name: "description",
        content:
          "KraftedbyKafui is an Accra bridal atelier hand-making beaded fans, florals and bridesmaid gifts for weddings across Ghana.",
      },
      { property: "og:title", content: "Our Story — KraftedbyKafui" },
      {
        property: "og:description",
        content: "An Accra bridal atelier hand-making fans, florals and bridesmaid gifts.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    title: "Made by Hand",
    body: "Every fan is beaded, strung and finished in our Accra studio — never mass produced.",
  },
  {
    title: "Matched to You",
    body: "We colour-match to your palette, from champagne and ivory to deep burgundy.",
  },
  {
    title: "Delivered on Time",
    body: "Nationwide delivery across Ghana, timed to arrive well before your first event.",
  },
];

function AboutPage() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-5 py-20 text-center">
        <p className="eyebrow">Our Story</p>
        <h1 className="gold-rule mt-4 text-5xl text-espresso md:text-6xl">
          Crafted for the moment
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-base leading-loose text-muted-foreground">
          KraftedbyKafui began with a single beaded fan made for a friend's traditional wedding in
          Accra. What started at a kitchen table is now a small atelier of makers creating fans,
          florals and gifts for brides across Ghana — each piece slow-made, personal and finished
          by hand.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
        <img
          src={storyImage}
          alt="Blush gift box tied with a satin ribbon"
          loading="lazy"
          width={1024}
          height={1024}
          className="aspect-square w-full object-cover"
        />
        <div>
          <p className="eyebrow">The Atelier</p>
          <h2 className="mt-4 text-4xl text-espresso">Small batches, endless detail</h2>
          <p className="mt-6 text-sm leading-loose text-muted-foreground">
            We take a limited number of weddings each month so nothing is rushed. From the first
            colour swatch to the ribbon on the box, we work with you directly — usually over
            WhatsApp, always with photos along the way.
          </p>
          <p className="mt-4 text-sm leading-loose text-muted-foreground">
            Most orders are ready in seven to ten days. Larger bridal parties and full floral
            styling are best booked four weeks ahead.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-10 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="border-t border-gold/50 pt-6">
              <h3 className="text-2xl text-espresso">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative">
        <img
          src={receptionImage}
          alt="Candlelit wedding reception table with blush florals"
          loading="lazy"
          width={1024}
          height={1024}
          className="h-[420px] w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-espresso/45 px-5 text-center">
          <h2 className="max-w-xl text-4xl text-background">Let's plan your pieces</h2>
          <Link
            to="/order"
            className="mt-8 rounded-full bg-background px-8 py-3 text-[0.7rem] uppercase tracking-[0.25em] text-espresso"
          >
            Place an Order
          </Link>
        </div>
      </section>
    </main>
  );
}
