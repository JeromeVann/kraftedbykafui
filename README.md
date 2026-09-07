# KraftedbyKafui

A Vite and React storefront for hand-crafted bridal fans, wedding florals, and bridesmaid gifts.

## Local development

Install Node.js 20 or newer, then run:

```sh
npm install
cp .env.example .env
npm run dev
```

Set `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` in `.env` before submitting the order form. Apply the migrations in `supabase/migrations/` to your Supabase project.

## Commands

- `npm run dev` starts the local Vite server.
- `npm run build` produces the static site in `dist/`.
- `npm run preview` serves the production build locally.
- `npm run typecheck` checks TypeScript without emitting files.
- `npm run lint` runs ESLint and Prettier checks.

This is a client-rendered single-page application. Configure production hosting to serve `index.html` as the fallback for `/about`, `/shop`, and `/order`.
