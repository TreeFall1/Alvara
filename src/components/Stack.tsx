"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useTranslation } from "react-i18next";
import { useHomeContent } from "@/i18n/useHomeContent";
import { CoinScene, type CoinSceneHandle } from "./CoinScene";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function Stack() {
  const { t } = useTranslation();
  const homeContent = useHomeContent();
  const section = useRef<HTMLElement>(null);
  const coin = useRef<CoinSceneHandle>(null);

  useGSAP(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1025px)", () => {
      const rotationTrigger = ScrollTrigger.create({
        trigger: ".stack__list",
        start: "top 65%",
        end: "bottom 35%",
        scrub: true,
        onUpdate: ({ progress }) => coin.current?.setProgress(progress),
      });
      const pinTrigger = ScrollTrigger.create({ trigger: ".stack__body", start: "top top", endTrigger: ".generation", end: "top top", pin: ".stack__visual", pinSpacing: false });
      return () => { rotationTrigger.kill(); pinTrigger.kill(); };
    });
    mm.add("(max-width: 1024px)", () => {
      const rotationTrigger = ScrollTrigger.create({
        trigger: ".stack__visual",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        onUpdate: ({ progress }) => coin.current?.setProgress(progress),
      });
      const visualEntrance = gsap.from(".stack__visual", {
        opacity: 0,
        scale: 0.94,
        y: 36,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: { trigger: ".stack__visual", start: "top 88%", toggleActions: "play none none reverse" },
      });
      return () => { rotationTrigger.kill(); visualEntrance.kill(); };
    });
    gsap.utils.toArray<HTMLElement>(".stack-item").forEach((item) => {
      gsap.fromTo(item, { opacity: 0.36 }, { opacity: 1, scrollTrigger: { trigger: item, start: "top 65%", end: "bottom 48%", scrub: true, toggleActions: "play reverse play reverse" } });
    });
    gsap.from(".generation__title span", { yPercent: 110, stagger: 0.06, scrollTrigger: { trigger: ".generation", start: "top 75%", end: "center 45%", scrub: 0.8 } });
    return () => mm.revert();
  }, { scope: section });

  return (
    <section className="stack" id="products" ref={section}>
      <div className="stack__heading page-grid">
        <p>{t("products.eyebrow")}</p><h2>{t("products.titleFirst")}<br/>{t("products.titleSecond")}</h2>
      </div>
      <div className="stack__body page-grid">
        <div className="stack__visual" aria-hidden="true">
          <div className="stack__coin-orbit"/>
          <CoinScene ref={coin}/>
        </div>
        <div className="stack__list">
          {homeContent.features.map((item) => (
            <article className="stack-item" key={item.label}>
              <small>{item.label}</small><h3>{item.title}</h3><p>{item.body}</p>
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
