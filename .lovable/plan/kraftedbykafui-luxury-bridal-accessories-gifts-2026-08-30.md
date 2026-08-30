# KraftedbyKafui — Luxury Bridal Accessories & Gifts

Build the site to match the attached reference video: an elegant, editorial, ivory-and-gold bridal storefront for Accra, Ghana, with WhatsApp-first ordering.

## Brand and visual direction (from the reference)

- **Wordmark:** `KRAFTED` + `BY` (gold) + `KAFUI`, wide-tracked, all caps serif.
- **Palette:** ivory / warm cream background (`#FAF7F2`), soft champagne panels (`#F0E6D8`), antique gold (`#B8944F`) for accents and buttons, deep espresso brown for headings, muted taupe for body text.
- **Type:** elegant high-contrast serif for headings (display), clean humanist sans for body; small caps with wide letter-spacing for eyebrow labels ("OUR STORY", "WHAT WE DO", "CATALOG").
- **Components:** fully-rounded pill buttons with a gold gradient fill, thin gold outline secondary buttons, white product cards with a soft cream border, generous whitespace, image-first cards.
- **Layout:** mobile-first single-column that expands to multi-column on desktop; sticky header with wordmark left and a circular hamburger button right.

## Pages

```text
/            Home (hero, story, collection preview, services, gallery, CTA)
/shop        The Collection — full catalog with category filter pills
/services    What we do
/gallery     Photo gallery
/order       Place an order form
/contact     Contact details + map/info
```

The header hamburger opens a full-screen overlay menu with these links plus WhatsApp.

## Home page sections (in reference order)

1. **Hero** — full-bleed bridal photo, overlay eyebrow `ACCRA · GHANA · NATIONWIDE DELIVERY`, serif title `KraftedbyKafui`, italic subtitle "Luxury Bridal Accessories & Elegant Gifts For Every Occasion", gold `ORDER NOW` pill + outlined `WHATSAPP US` pill with chat icon.
2. **Our Story** — square gift-box image, eyebrow `OUR STORY`, headline "Details that make the day", copy, link.
3. **The Collection** — eyebrow `CATALOG`, headline, note that prices are guide prices and customization/quantity/delivery are quoted on request, then filter pills: All · Bridal Accessories · Bridesmaid Fans · Bridal Gift Boxes · Wedding Accessories · Customized Gifts. Below, a grid of product cards: image, gold category label, serif name, description, `FROM GH₵ ###`, gold `ORDER` button.
4. **Services** — eyebrow `WHAT WE DO`, headline "Services", bordered cards each with a gold outline icon, serif title, short gold rule, description.
5. **Gallery** — grid of styled photos.
6. **CTA panel** — champagne panel with gold border: "Planning something special?", copy, `START AN ORDER` + `CONTACT US` buttons.
7. **Footer** — brand blurb, `EXPLORE` link column, `GET IN TOUCH` with location, phone, WhatsApp and Instagram, each with a gold outline icon.

## Catalog data

Static catalog in `src/data/products.ts` with: id, name, slug, category, priceFrom (GH₵), priceNote (e.g. "each"), description, image. Seeded with the items shown in the reference (bridesmaid fans, bridal hair comb sets, bridesmaid proposal boxes, guest favour parcels, personalised trinket boxes, etc.). Each product's `ORDER` button deep-links to the order form pre-filled with that product.

## Ordering flow

No card checkout. Every `ORDER` button leads to the order form:
- Name, phone/WhatsApp, email, event date, product(s) of interest, quantity, colour/customization notes, message.
- Submitting saves the enquiry and sends a confirmation; a secondary "Send on WhatsApp" button opens `wa.me` with a pre-composed message.
- **Lovable Cloud** is enabled to store enquiries in an `orders` table so nothing is lost.

## Contact details (from the reference)

- JW82+W6J, G Street Teshie-Nungua, Accra, Ghana
- 059 714 4909 · WhatsApp · @kraftedbykafui

These will be used as placeholders and are easy to change.

## Imagery

Generate bridal-themed photography to match the reference mood: beaded hand fans, satin flat-lays in blush and champagne, pearl-and-gold hair combs, pink and velvet gift boxes with gold plaques, candlelit reception tables. Stored as CDN assets, not committed binaries.

## Technical notes

- TanStack Router file routes, one file per page, each with its own `head()` metadata (title, description, og tags).
- Design tokens (ivory, champagne, gold, espresso, taupe) added to `src/styles.css` as semantic oklch variables; no hardcoded colour utilities.
- Google Fonts loaded via a `<link>` in `src/routes/__root.tsx`.
- Header/footer/menu overlay live in `__root.tsx` around `<Outlet />`.
- Order submission uses a `createServerFn` writing to Cloud.
- Favicon derived from the KBK monogram.

## Not included

- Online card payment / checkout. Ordering is enquiry + WhatsApp, matching the reference. Shopify can be added later if real checkout is wanted.
