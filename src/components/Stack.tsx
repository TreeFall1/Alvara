"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useTranslation } from "react-i18next";
import { useHomeContent } from "@/i18n/useHomeContent";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function Stack() {
  const { t } = useTranslation();
  const homeContent = useHomeContent();
  const section = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.from(".strategy-console", {
      opacity: 0,
      scale: 0.86,
      y: 45,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: { trigger: ".stack__body", start: "top 78%" },
    });
    gsap.from(".strategy-console__ring", {
      scale: 0.55,
      opacity: 0,
      stagger: 0.12,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: { trigger: ".strategy-console", start: "top 74%" },
    });
    gsap.from(".stack-item", {
      y: 42,
      opacity: 0,
      stagger: 0.1,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: { trigger: ".stack__list", start: "top 78%" },
    });
    gsap.from(".generation__title span", {
      yPercent: 110,
      stagger: 0.06,
      scrollTrigger: { trigger: ".generation", start: "top 75%", end: "center 45%", scrub: 0.8 },
    });
  }, { scope: section });

  return (
    <section className="stack" id="products" ref={section}>
      <div className="stack__heading page-grid">
        <p>{t("products.eyebrow")}</p>
        <h2>{t("products.titleFirst")}<br/>{t("products.titleSecond")}</h2>
      </div>
      <div className="stack__body page-grid">
        <div className="stack__visual" aria-hidden="true">
          <div className="strategy-console">
            <header><span><i/>{t("products.signalStatus")}</span><strong>ALVARA / AI</strong></header>
            <div className="strategy-console__radar">
              <i className="strategy-console__ring"/><i className="strategy-console__ring"/><i className="strategy-console__ring"/>
              <b>26+</b>
            </div>
            <div className="strategy-console__readout"><small>{t("products.signalCount")}</small><strong>{t("products.signalTitle")}</strong></div>
            <p>{t("products.signalCopy")}</p>
          </div>
        </div>
        <div className="stack__list">
          {homeContent.features.map((item, index) => (
            <article className="stack-item" tabIndex={0} key={item.label}>
              <small>{String(index + 1).padStart(2, "0")} · {item.label}</small>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="generation">
        <h2 className="generation__title"><span>{t("products.stepsFirst")}</span><br/><span>{t("products.stepsSecond")}</span></h2>
      </div>
    </section>
  );
}
