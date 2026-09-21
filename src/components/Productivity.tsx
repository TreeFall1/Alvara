"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";
import { useHomeContent } from "@/i18n/useHomeContent";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function Productivity() {
  const { t } = useTranslation();
  const homeContent = useHomeContent();
  const section = useRef<HTMLElement>(null);
  const strategies = t("performance.strategies", { returnObjects: true }) as unknown as string[];

  useGSAP(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1025px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: ".productivity__stage", start: "top top", end: "+=150%", pin: true, scrub: 1 },
      });
      tl.fromTo(".productivity__dashboard", { clipPath: "inset(34% 27% 29% 27% round 36px)" }, { clipPath: "inset(0% 0% 0% 0% round 0px)", ease: "none" })
        .from(".dashboard__grid", { opacity: 0 }, 0.18)
        .from(".dashboard__title", { y: 190, opacity: 0 }, 0.2)
        .from(".dashboard__metric", { y: 70, opacity: 0, stagger: 0.1 }, 0.28);
    });
    return () => mm.revert();
  }, { scope: section });

  return (
    <section className="productivity" id="performance" ref={section}>
      <div className="productivity__intro page-grid">
        <h2>{t("performance.titleFirst")}<br/>{t("performance.titleSecond")}</h2>
        <p>{t("performance.copy")}</p>
      </div>
      <div className="productivity__stage">
        <div className="productivity__dashboard">
          <div className="dashboard__grid" aria-hidden="true"/>
          <div className="dashboard__top page-grid">
            <h3 className="dashboard__title">{t("performance.dashboardFirst")}<br/>{t("performance.dashboardSecond")}</h3>
            <div className="dashboard__metrics">
              {homeContent.proofMetrics.map((metric) => (
                <article className="dashboard__metric" key={metric.value}>
                  <strong>{metric.value}</strong>
                  <small>{metric.label}</small>
                  {metric.detail && <p>{metric.detail}</p>}
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="strategy-marquee" role="img" aria-label={strategies.join(", ")}>
        <div className="strategy-marquee__track" aria-hidden="true">
          {[...strategies, ...strategies].map((strategy, index) => <span key={`${strategy}-${index}`}>{strategy}</span>)}
        </div>
      </div>
    </section>
  );
}
