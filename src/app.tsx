import { Component, useEffect, type ErrorInfo, type ReactNode } from "react";

import { AppLink } from "@/components/app-link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Toaster } from "@/components/ui/sonner";
import { useLocation } from "@/lib/navigation";
import { AboutPage } from "@/routes/about";
import { HomePage } from "@/routes/index";
import { OrderPage } from "@/routes/order";
import { ShopPage } from "@/routes/shop";

type PageDetails = {
  component: () => ReactNode;
  title: string;
  description: string;
};

const pages: Record<string, PageDetails> = {
  "/": {
    component: HomePage,
    title: "KraftedbyKafui — Bridal Fans, Flowers & Bridesmaid Gifts in Accra",
    description:
      "Hand-beaded bridal fans, wedding florals and bridesmaid gift boxes, made to order in Accra and delivered across Ghana.",
  },
  "/about": {
    component: AboutPage,
    title: "Our Story — KraftedbyKafui | Bridal Atelier in Accra",
    description:
      "Meet the Accra bridal atelier hand-making beaded fans, florals and bridesmaid gifts for weddings across Ghana.",
  },
  "/shop": {
    component: ShopPage,
    title: "Catalog — Bridal Fans, Flowers & Gifts | KraftedbyKafui",
    description:
      "Browse hand-beaded bridal fans, wedding florals and bridesmaid gift boxes made to order in Accra.",
  },
  "/order": {
    component: OrderPage,
    title: "Place an Order — KraftedbyKafui Bridal Atelier",
    description:
      "Share your wedding date, colours and chosen pieces to receive a quote and timeline.",
  },
};

function updateDescription(description: string) {
  let element = document.querySelector<HTMLMetaElement>('meta[name="description"]');
  if (!element) {
    element = document.createElement("meta");
    element.name = "description";
    document.head.append(element);
  }
  element.content = description;
}

function NotFoundPage() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center px-5">
      <div className="max-w-md text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 text-5xl text-espresso">Page not found</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          The page you are looking for does not exist or has moved.
        </p>
        <AppLink
          to="/"
          className="mt-8 inline-block rounded-full bg-primary px-8 py-3 text-xs uppercase tracking-[0.22em] text-primary-foreground"
        >
          Go home
        </AppLink>
      </div>
    </main>
  );
}

class ErrorBoundary extends Component<{ children: ReactNode }, { error: Error | null }> {
  override state = { error: null } as { error: Error | null };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  override componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(error, info);
  }

  override render() {
    if (!this.state.error) return this.props.children;

    return (
      <main className="flex min-h-screen items-center justify-center px-5">
        <div className="max-w-md text-center">
          <h1 className="text-4xl text-espresso">This page did not load</h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Please refresh the page or return home and try again.
          </p>
          <a
            href="/"
            className="mt-8 inline-block rounded-full bg-primary px-8 py-3 text-xs uppercase tracking-[0.22em] text-primary-foreground"
          >
            Go home
          </a>
        </div>
      </main>
    );
  }
}

export function App() {
  const location = useLocation();
  const pathname = location.split("?")[0]?.replace(/\/$/, "") || "/";
  const page = pages[pathname];
  const Page = page?.component;

  useEffect(() => {
    document.title = page?.title ?? "Page not found — KraftedbyKafui";
    updateDescription(page?.description ?? "The requested KraftedbyKafui page could not be found.");
  }, [page]);

  return (
    <ErrorBoundary key={location}>
      <div className="flex min-h-screen flex-col bg-background">
        <SiteHeader />
        <div className="flex-1">{Page ? <Page /> : <NotFoundPage />}</div>
        <SiteFooter />
      </div>
      <Toaster position="top-center" />
    </ErrorBoundary>
  );
}
