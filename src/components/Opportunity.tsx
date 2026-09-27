"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useTranslation } from "react-i18next";
import { useHomeContent } from "@/i18n/useHomeContent";
import Image from "next/image";
import { Arrow } from "./Brand";

gsap.registerPlugin(ScrollTrigger, useGSAP);

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
    gsap.from(".opportunity-card", {
      autoAlpha: 0,
      y: 30,
      duration: 0.65,
      stagger: 0.12,
      ease: "power2.out",
      scrollTrigger: { trigger: ".opportunity__cards", start: "top 85%", once: true },
    });
  }, { scope: section });

  return (
    <section className="opportunity" id="how-it-works" ref={section}>
      <div className="opportunity__intro page-grid">
        <h2 className="opportunity__heading">{t("products.stepsFirst")} {t("products.stepsSecond")}</h2>
        <p className="opportunity__statement">{t("opportunity.statement")}</p>
        <figure className="opportunity__artwork" aria-hidden="true">
          <Image src="/media/fight.PNG" alt="" width={1535} height={1024} sizes="(max-width: 700px) 100vw, (max-width: 1024px) 700px, 50vw"/>
        </figure>
        <a className="button button--outline" href={homeContent.telegramUrl} target="_blank" rel="noreferrer">{t("opportunity.startTrading")} <Arrow/></a>
      </div>
      <div className="opportunity__flow page-grid">
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
