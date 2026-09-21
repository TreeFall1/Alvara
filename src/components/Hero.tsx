"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useTranslation } from "react-i18next";
import { useHomeContent } from "@/i18n/useHomeContent";
import { Arrow } from "./Brand";

gsap.registerPlugin(useGSAP);

export function Hero() {
  const { t } = useTranslation();
  const homeContent = useHomeContent();
  const section = useRef<HTMLElement>(null);

  useGSAP(() => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    gsap.from("[data-hero-in]", { autoAlpha: 0, y: 24, duration: 0.8, stagger: 0.16, delay: 0.25, ease: "power3.out" });
  }, { scope: section });

  return (
    <section className="hero" id="home" ref={section}>
      <div className="hero__media" aria-hidden="true">
        <video autoPlay muted loop playsInline preload="auto">
          <source src="/media/opportunity.webm" type="video/webm"/>
          <source src="/media/opportunity.mp4" type="video/mp4"/>
        </video>
        <div className="hero__wash"/>
      </div>
      <div className="hero__content page-grid">
        <h1 data-hero-in>{t("hero.titleStart")}<br/><span>{t("hero.titleEnd")}&nbsp;<b className="hero__ai">AI</b></span></h1>
        <div className="hero__actions" data-hero-in>
          <a className="button button--solid" href={homeContent.telegramUrl} target="_blank" rel="noreferrer">{t("hero.launch")} <Arrow/></a>
          <a className="button button--glass" href="#products">{t("hero.learnMore")} <Arrow/></a>
        </div>
        <p className="hero__copy" data-hero-in>{t("hero.copy")}</p>
        <div className="hero__trust" data-hero-in>
          <span><b aria-hidden="true">✓</b>{t("hero.trustFunds")}</span>
          <span><b aria-hidden="true">✓</b>{t("hero.trustExchanges")}</span>
        </div>
      </div>
    </section>
  );
}
