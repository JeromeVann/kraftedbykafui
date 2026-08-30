# Bridal Fans, Flowers & Bridesmaid Gifts Website

## Goal
Build a polished, mobile-first e-commerce-style website where clients can browse and order bridal fans, flowers, and bridesmaid gifts.

## Scope for this plan
- Replace the placeholder homepage with a bridal shop landing page.
- Create separate routes for each major section (SEO-friendly, SSR-ready).
- Build a browsable product catalog with sample products for the three categories.
- Add product detail pages and a working cart (local state).
- Add an order inquiry / contact form so clients can place orders without Shopify being enabled yet.
- Style with an elegant, romantic bridal aesthetic using the existing design-token system.
- Set unique `head()` metadata on every route.

## Pages / routes
```text
/              Home / landing
/shop          Catalog grid (all products)
/shop/fans     Bridal fans collection
/shop/flowers  Flowers collection
/shop/gifts    Bridesmaid gifts collection
/about         About the brand
/contact       Order inquiry / contact form
```

## Data model (in-code for now)
A static product catalog stored in `src/data/products.ts` with fields:
- id, name, slug, category (fans | flowers | gifts)
- price, currency, description, image URL, in-stock flag, optional variants

## Key features
1. **Shared layout** in `__root.tsx`: header with navigation, cart drawer trigger, footer.
2. **Homepage**: hero section, featured collections, best-sellers, trust/quality section.
3. **Catalog pages**: filterable grid by category, product cards with add-to-cart.
4. **Product detail**: larger image, description, price, variant selector, add-to-cart.
5. **Cart drawer**: list items, adjust quantities, remove, show subtotal, "Request order" button.
6. **Contact / order inquiry**: form pre-filled from cart (name, email, event date, message) submitted to a public server function that stores the inquiry.
7. **Lovable Cloud**: enable so inquiries can be persisted in a database and an admin can view them.

## Design direction
- Romantic, elegant, minimal bridal aesthetic.
- Soft neutral palette (ivory, blush, sage, champagne) added as semantic tokens in `src/styles.css`.
- Serif headings for elegance, sans-serif body for readability.
- Generous whitespace, rounded cards, subtle shadows.

## Technical notes
- Use TanStack Router file-based routes; no hash anchors.
- Use `createServerFn` for the contact/inquiry form submission.
- Cart state via React context + `useState` (no backend dependency).
- All product images generated with the image tool to match the bridal theme.
- Keep components in `src/components/` and data in `src/data/`.

## Out of scope for now
- Real payment checkout (Stripe/Paddle are not suited for physical products; Shopify can be enabled later when the user is ready).
- Admin dashboard for managing inquiries (can be added after Cloud is enabled).

## Next step after approval
Enable Lovable Cloud, then build the routes, components, data, and inquiry form.
