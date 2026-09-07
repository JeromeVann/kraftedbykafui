import type { ComponentProps, MouseEvent } from "react";

import { navigate } from "@/lib/navigation";

type AppLinkProps = Omit<ComponentProps<"a">, "href"> & {
  to: string;
  search?: Record<string, string | number | boolean | undefined>;
};

export function AppLink({ to, search, onClick, target, ...props }: AppLinkProps) {
  const params = new URLSearchParams();
  Object.entries(search ?? {}).forEach(([key, value]) => {
    if (value !== undefined) params.set(key, String(value));
  });
  const query = params.toString();
  const href = query ? `${to}?${query}` : to;

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      target === "_blank"
    ) {
      return;
    }

    event.preventDefault();
    navigate(href);
  };

  return <a href={href} target={target} onClick={handleClick} {...props} />;
}
