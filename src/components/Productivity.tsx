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
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".productivity__dashboard",
        start: "top 82%",
        once: true,
      },
    });
    timeline
      .from(".productivity__dashboard", { y: 36, autoAlpha: 0, duration: 0.75, ease: "power3.out" })
      .from(".dashboard__title", { y: 20, autoAlpha: 0, duration: 0.55, ease: "power2.out" }, "-=0.4")
      .from(".dashboard__signal", { scale: 0.94, autoAlpha: 0, duration: 0.7, ease: "power2.out" }, "-=0.5")
      .from(".dashboard__metric", { y: 18, autoAlpha: 0, duration: 0.45, stagger: 0.08, ease: "power2.out" }, "-=0.42");
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
            <div className="dashboard__signal" aria-hidden="true">
              <i/><i/><i/>
              <span/>
            </div>
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
