# Repository Guidelines

## Project Structure & Module Organization

Application code lives in `src/`. `main.tsx` mounts the app, `app.tsx` selects the current page, and `routes/` contains the home, catalog, story, and order pages. Shared layout and product components live in `components/`; reusable primitives are under `components/ui/`. Product data is in `data/`, global styling is in `styles.css`, and image assets are in `assets/`. Supabase clients and generated database types live in `integrations/supabase/`; schema changes belong in `supabase/migrations/`. Static files go in `public/`.

## Build, Test, and Development Commands

- `npm install` installs dependencies.
- `npm run dev` starts Vite with hot module replacement.
- `npm run build` creates the production bundle in `dist/`.
- `npm run preview` serves the built bundle locally.
- `npm run typecheck` runs strict TypeScript checks.
- `npm run lint` checks TypeScript, React hooks, and Prettier formatting.
- `npm run format` formats supported files.

Copy `.env.example` to `.env` and provide the two public Supabase variables before testing form submission.

## Coding Style & Naming Conventions

Use TypeScript, two-space indentation, semicolons, and double quotes. Prefer named exports and the `@/` alias for imports from `src/`. Name React components in PascalCase, hooks with a `use` prefix, and source files in kebab-case. Keep page-specific state in its route component and extract behavior only when reused.

## Testing Guidelines

No automated test runner is configured yet. Before opening a pull request, run `npm run typecheck`, `npm run lint`, and `npm run build`, then manually check all four routes and submit an order against a test Supabase project. Add colocated `*.test.tsx` files when introducing a test framework.

## Commit & Pull Request Guidelines

Use short, imperative commit subjects such as `Simplify order form validation`. Keep commits focused. Pull requests should explain the user-visible result, note validation performed, link relevant issues, and include screenshots for layout changes. Call out environment-variable or migration changes explicitly.
