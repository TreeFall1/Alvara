"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(useGSAP);

function QualityIcon({ index }: { index: number }) {
  switch (index) {
    case 0:
      return <svg viewBox="0 0 40 40" aria-hidden="true"><path d="M20 3 34 9v10c0 9-5.5 15-14 18C11.5 34 6 28 6 19V9L20 3Z"/><path d="m13 20 5 5 10-11"/></svg>;
    case 1:
      return <svg viewBox="0 0 40 40" aria-hidden="true"><path d="M22 2 8 22h11l-2 16 15-22H21l1-14Z"/></svg>;
    case 2:
      return <svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="16"/><path d="M4 20h32M20 4c5 5 7 10 7 16s-2 11-7 16M20 4c-5 5-7 10-7 16s2 11 7 16M7 12h26M7 28h26"/></svg>;
    default:
      return <svg viewBox="0 0 40 40" aria-hidden="true"><path d="M5 34h30M8 30v-8h5v8m6 0V18h5v12m6 0V12h5v18M7 17l9-7 7 4L34 5"/><path d="M27 5h7v7"/></svg>;
  }
}

export function Hero() {
  const { t } = useTranslation();
  const section = useRef<HTMLElement>(null);
  const qualities = t("hero.qualities", { returnObjects: true }) as { title: string; description: string }[];

  useGSAP(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.from("[data-hero-in]", { autoAlpha: 0, y: 22, duration: 0.8, stagger: 0.11, delay: 0.15, ease: "power3.out" });
  }, { scope: section });

  return (
    <section className="hero" id="home" ref={section}>
      <div className="hero__media" aria-hidden="true">
      </div>
      <div className="hero__content">
        <div className="hero__message">
          <h1 data-hero-in>{t("hero.title")}</h1>
          <p className="hero__subtitle" data-hero-in>{t("hero.subtitle")}</p>
          <span className="hero__rule" aria-hidden="true" data-hero-in/>
          <p className="hero__tagline" data-hero-in>{t("hero.tagline")}</p>
        </div>
        <div className="hero__qualities" data-hero-in>
          {qualities.map((quality, index) => (
            <div className="hero__quality" key={quality.title}>
              <QualityIcon index={index}/>
              <span><strong>{quality.title}</strong><small>{quality.description}</small></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
