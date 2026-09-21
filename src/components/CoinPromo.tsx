"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useTranslation } from "react-i18next";
import { defaultLocale, isLocale } from "@/i18n/config";
import { Arrow } from "./Brand";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function CoinPromo() {
  const { t, i18n } = useTranslation();
  const section = useRef<HTMLElement>(null);
  const locale = isLocale(i18n.resolvedLanguage ?? "") ? i18n.resolvedLanguage : defaultLocale;

  useGSAP(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.from(".coin-promo__copy > *", {
      y: 38,
      opacity: 0,
      stagger: 0.1,
      duration: 0.75,
      ease: "power3.out",
      scrollTrigger: { trigger: section.current, start: "top 76%" },
    });
    gsap.from(".coin-promo__visual", {
      scale: 0.82,
      opacity: 0,
      rotate: 3,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: { trigger: section.current, start: "top 72%" },
    });
  }, { scope: section });

  return (
    <section className="coin-promo page-grid" id="coin" ref={section}>
      <div className="coin-promo__copy">
        <h2>{t("coinPromo.title")} <span className="coin-promo__inline-image" aria-hidden="true"/></h2>
        <p>{t("coinPromo.copy")}</p>
        <Link className="button button--dark" href={`/${locale}/coin`}>{t("coinPromo.cta")} <Arrow/></Link>
      </div>
      <div className="coin-promo__visual" aria-hidden="true">
        <span>{t("coinPromo.visualLabel")}</span>
        <strong>$ALVARA</strong>
        <i/>
      </div>
    </section>
  );
}
