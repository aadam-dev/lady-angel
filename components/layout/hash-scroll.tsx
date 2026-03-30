"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Ensures in-app navigation to `/#section-id` scrolls to the target on the home page.
 * (Native hash scrolling can be unreliable with Next.js client-side navigation.)
 */
export function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;
    const hash = window.location.hash;
    if (!hash || hash.length < 2) return;
    const id = decodeURIComponent(hash.slice(1));
    if (!id) return;

    const scroll = () => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

    requestAnimationFrame(() => {
      scroll();
      setTimeout(scroll, 100);
    });
  }, [pathname]);

  return null;
}
