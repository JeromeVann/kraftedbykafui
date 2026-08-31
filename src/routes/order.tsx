import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { toast } from "sonner";
import { submitInquiry } from "@/lib/inquiries.functions";
import { products, whatsappLink, currency } from "@/data/products";

export const Route = createFileRoute("/order")({
  validateSearch: (search: Record<string, unknown>) => ({
    item: typeof search['item'] === "string" ? (search['item'] as string) : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Place an Order — KraftedbyKafui Bridal Atelier" },
      {
        name: "description",
        content:
          "Tell us about your wedding and we'll craft your fans, florals and bridesmaid gifts. Send your details or order straight over WhatsApp.",
      },
      { property: "og:title", content: "Place an Order — KraftedbyKafui" },
      {
        property: "og:description",
        content: "Share your date, colours and pieces — we'll reply with a quote and timeline.",
      },
    ],
  }),
  component: OrderPage,
});

function OrderPage() {
  const { item } = Route.useSearch();
  const send = useServerFn(submitInquiry);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    eventDate: "",
    item: item ?? "",
    quantity: 1,
    colours: "",
    message: "",
  });
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);

  const selected = products.find((p) => p.slug === form.item);

  const set = (key: keyof typeof form, value: string | number) =>
    setForm((f) => ({ ...f, [key]: value }));

  const summary = () =>
    [
      `Hello KraftedbyKafui! I'd like to order:`,
      selected ? `Item: ${selected.name} (${currency(selected.price)})` : form.item ? `Item: ${form.item}` : null,
      `Quantity: ${form.quantity}`,
      form.eventDate ? `Event date: ${form.eventDate}` : null,
      form.colours ? `Colours: ${form.colours}` : null,
      form.message ? `Notes: ${form.message}` : null,
      form.fullName ? `Name: ${form.fullName}` : null,
    ]
      .filter(Boolean)
      .join("\n");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    try {
      await send({ data: form });
      setDone(true);
      toast.success("Your request is in — we'll be in touch shortly.");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setBusy(false);
    }
  };

  const field =
    "mt-2 w-full border border-border bg-card px-4 py-3 text-sm text-espresso outline-none focus:border-gold";
  const label = "text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground";

  return (
    <main className="mx-auto max-w-3xl px-5 py-20">
      <header className="text-center">
        <p className="eyebrow">Made to Order</p>
        <h1 className="gold-rule mt-4 text-5xl text-espresso md:text-6xl">Place an Order</h1>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Share your date, colours and the pieces you love. We reply within 24 hours with a quote
          and a timeline — or send it straight to our WhatsApp.
        </p>
      </header>

      {done ? (
        <div className="mt-14 border border-gold/40 bg-champagne/40 p-12 text-center">
          <h2 className="text-3xl text-espresso">Thank you, {form.fullName.split(" ")[0]}</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Your request has reached the atelier. We'll be in touch on {form.phone} very soon.
          </p>
          <a
            href={whatsappLink(summary())}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block rounded-full bg-primary px-8 py-3 text-[0.7rem] uppercase tracking-[0.25em] text-primary-foreground"
          >
            Also send on WhatsApp
          </a>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="mt-14 space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className={label} htmlFor="fullName">Full name</label>
              <input
                id="fullName"
                required
                className={field}
                value={form.fullName}
                onChange={(e) => set("fullName", e.target.value)}
              />
            </div>
            <div>
              <label className={label} htmlFor="phone">Phone / WhatsApp</label>
              <input
                id="phone"
                required
                className={field}
                value={form.phone}
                onChange={(e) => set("phone", e.target.value)}
              />
            </div>
            <div>
              <label className={label} htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                required
                className={field}
                value={form.email}
                onChange={(e) => set("email", e.target.value)}
              />
            </div>
            <div>
              <label className={label} htmlFor="eventDate">Event date</label>
              <input
                id="eventDate"
                type="date"
                className={field}
                value={form.eventDate}
                onChange={(e) => set("eventDate", e.target.value)}
              />
            </div>
            <div>
              <label className={label} htmlFor="item">Piece</label>
              <select
                id="item"
                className={field}
                value={form.item}
                onChange={(e) => set("item", e.target.value)}
              >
                <option value="">Not sure yet</option>
                {products.map((p) => (
                  <option key={p.slug} value={p.slug}>
                    {p.name} — {currency(p.price)}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className={label} htmlFor="quantity">Quantity</label>
              <input
                id="quantity"
                type="number"
                min={1}
                max={500}
                className={field}
                value={form.quantity}
                onChange={(e) => set("quantity", Number(e.target.value) || 1)}
              />
            </div>
          </div>

          <div>
            <label className={label} htmlFor="colours">Colour palette</label>
            <input
              id="colours"
              placeholder="Ivory, champagne, dusty rose…"
              className={field}
              value={form.colours}
              onChange={(e) => set("colours", e.target.value)}
            />
          </div>

          <div>
            <label className={label} htmlFor="message">Anything else?</label>
            <textarea
              id="message"
              rows={5}
              className={field}
              value={form.message}
              onChange={(e) => set("message", e.target.value)}
            />
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              type="submit"
              disabled={busy}
              className="rounded-full bg-primary px-9 py-3.5 text-[0.7rem] uppercase tracking-[0.25em] text-primary-foreground disabled:opacity-60"
            >
              {busy ? "Sending…" : "Send Request"}
            </button>
            <a
              href={whatsappLink(summary())}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-gold px-9 py-3.5 text-[0.7rem] uppercase tracking-[0.25em] text-gold"
            >
              Order on WhatsApp
            </a>
          </div>
        </form>
      )}
    </main>
  );
}
