"use client";

import { useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export function RouteScrollReset() {
  const pathname = usePathname();
  const frame = useRef<number | null>(null);

  useLayoutEffect(() => {
    const reset = () => window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    // Next.js preserves scroll when the new page is already visible at the
    // current Y position. Long, pinned pages such as /coin therefore need an
    // explicit reset after the new route has been committed.
    reset();
    frame.current = window.requestAnimationFrame(reset);

    return () => {
      if (frame.current !== null) window.cancelAnimationFrame(frame.current);
    };
  }, [pathname]);

  return null;
}
