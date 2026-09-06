"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { useTranslation } from "react-i18next";
import { useHomeContent } from "@/i18n/useHomeContent";
import { Arrow } from "./Brand";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

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
    mm.add("(min-width: 801px)", () => {
      ScrollTrigger.create({ trigger: ".opportunity__cards", start: "top 28%", end: "bottom 70%", pin: ".opportunity__intro", pinSpacing: false });
    });
    gsap.fromTo(".opportunity__video", { opacity: 0 }, { opacity: 0.72, scrollTrigger: { trigger: ".opportunity__cards", start: "top 80%", end: "top 35%", scrub: true } });
    gsap.to(".opportunity__intro", {
      opacity: 0,
      y: -140,
      pointerEvents: "none",
      scrollTrigger: { trigger: ".opportunity__cards", start: "top 72%", end: "top 38%", scrub: true },
    });
    gsap.utils.toArray<HTMLElement>(".opportunity-card").forEach((card) => {
      gsap.from(card, { opacity: 0, y: 70, scrollTrigger: { trigger: card, start: "top 78%", end: "top 45%", scrub: 0.6 } });
      gsap.from(card.querySelector("h3"), { yPercent: 100, scrollTrigger: { trigger: card, start: "top 78%", end: "top 52%", scrub: true } });
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
          <video autoPlay muted loop playsInline preload="none">
            <source src="/media/opportunity.webm" type="video/webm"/>
            <source src="/media/opportunity.mp4" type="video/mp4"/>
          </video>
        </div>
        <div className="opportunity__cards">
          {homeContent.steps.map((item, index) => (
            <article className="opportunity-card" key={item.title}>
              <div className="opportunity-card__icon"><Image src={item.icon} alt="" fill sizes="64px"/></div>
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
