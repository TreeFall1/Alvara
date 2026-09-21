"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { useTranslation } from "react-i18next";
import { useHomeContent } from "@/i18n/useHomeContent";
import { Arrow } from "./Brand";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

function GuideIcon({ index }: { index: number }) {
  if (index === 0) {
    return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M5 15.5 27 6l-7.7 20-4.1-7.2L5 15.5Z"/><path d="m15.2 18.8 5.4-5.7"/></svg>;
  }
  if (index === 1) {
    return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M6 25V12m7 13V7m7 18V15m7 10V10"/><path d="M3 25h26"/><path d="m5 10 7-5 8 7 7-5"/></svg>;
  }
  return <svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="11"/><path d="m10.5 16 3.6 3.7 7.8-8"/><path d="M16 2v3m0 22v3M2 16h3m22 0h3"/></svg>;
}

export function Opportunity() {
  const { t } = useTranslation();
  const homeContent = useHomeContent();
  const section = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const split = new SplitText(".opportunity__statement", { type: "lines,chars", linesClass: "split-line" });
    gsap.set(split.chars, { opacity: 0.12 });
    gsap.to(gsap.utils.shuffle([...split.chars]), {
      opacity: 1,
      stagger: { each: 0.008 },
      scrollTrigger: { trigger: ".opportunity__statement", start: "top 80%", end: "top 22%", scrub: true },
    });
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1025px)", () => {
      ScrollTrigger.create({ trigger: ".opportunity__cards", start: "top 28%", end: "bottom 70%", pin: ".opportunity__intro", pinSpacing: false });
    });
    gsap.from(".opportunity__video", {
      autoAlpha: 0,
      y: 36,
      scale: 0.96,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: { trigger: ".opportunity__flow", start: "top 78%", once: true },
    });
    gsap.fromTo(".opportunity__video video", { scale: 1.1 }, {
      scale: 1.02,
      yPercent: -2,
      ease: "none",
      scrollTrigger: { trigger: ".opportunity__cards", start: "top 90%", end: "bottom 20%", scrub: 0.8 },
    });
    gsap.to(".opportunity__intro", {
      opacity: 0,
      y: -140,
      pointerEvents: "none",
      scrollTrigger: { trigger: ".opportunity__cards", start: "top 72%", end: "top 38%", scrub: true },
    });
    gsap.utils.toArray<HTMLElement>(".opportunity-card").forEach((card) => {
      gsap.from(card, { opacity: 0, y: 70, scrollTrigger: { trigger: card, start: "top 78%", end: "top 45%", scrub: 0.6 } });
      gsap.from(card.querySelector("h3"), { yPercent: 100, scrollTrigger: { trigger: card, start: "top 78%", end: "top 52%", scrub: true } });
      gsap.from(card.querySelector(".opportunity-card__icon"), { scale: 0.72, rotate: -10, opacity: 0, duration: 0.55, ease: "back.out(1.6)", scrollTrigger: { trigger: card, start: "top 76%" } });
    });
    return () => { split.revert(); mm.revert(); };
  }, { scope: section });

  return (
    <section className="opportunity" id="how-it-works" ref={section}>
      <div className="opportunity__intro page-grid">
        <p className="opportunity__statement">{t("opportunity.statement")}</p>
        <a className="button button--outline" href={homeContent.telegramUrl} target="_blank" rel="noreferrer">{t("opportunity.startTrading")} <Arrow/></a>
      </div>
      <div className="opportunity__flow page-grid">
        <div className="opportunity__video" aria-hidden="true">
          <video autoPlay muted loop playsInline preload="metadata" poster="/media/opportunity-1.webp">
            <source src="/media/opportunity.webm" type="video/webm"/>
            <source src="/media/opportunity.mp4" type="video/mp4"/>
          </video>
          <div className="opportunity__video-wash"/>
          <div className="opportunity__video-status"><i/><span>{t("products.signalStatus")}</span></div>
          <div className="opportunity__video-rail"><i/><i/><i/></div>
        </div>
        <div className="opportunity__cards">
          {homeContent.steps.map((item, index) => (
            <article className="opportunity-card" key={item.title}>
              <div className="opportunity-card__icon"><GuideIcon index={index}/></div>
              <small>0{index + 1}</small>
              <div className="opportunity-card__title"><h3>{item.title}</h3></div>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
