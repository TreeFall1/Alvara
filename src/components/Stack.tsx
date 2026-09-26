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

    gsap.from(".stack__compass", {
      opacity: 0,
      scale: 0.86,
      y: 45,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: { trigger: ".stack__body", start: "top 78%" },
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
        <div className="stack__visual">
          <video className="stack__compass" autoPlay muted loop playsInline preload="metadata" poster="/media/compass-poster.jpg" aria-label={t("products.signalTitle")}>
            <source src="/media/compass.webm" type="video/webm"/>
            <source src="/media/compass.mp4" type="video/mp4"/>
          </video>
          <div className="stack__video-copy">
            <div className="stack__video-meta"><span><i/>{t("products.signalStatus")}</span><span>ALVARA / AI</span></div>
            <small>{t("products.signalCount")}</small>
            <h3>{t("products.signalTitle")}</h3>
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
