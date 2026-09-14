"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";
import { useHomeContent } from "@/i18n/useHomeContent";
import {
  TOKENOMICS_COLORS,
  TOKENOMICS_DISTRIBUTION,
  TOKEN_SUPPLY,
  TokenomicsChart,
} from "./TokenomicsChart";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function Productivity() {
  const { t, i18n } = useTranslation();
  const homeContent = useHomeContent();
  const section = useRef<HTMLElement>(null);
  const tokenomicsLabels = t("performance.tokenomics.items", { returnObjects: true }) as unknown as string[];
  const numberFormatter = new Intl.NumberFormat(i18n.resolvedLanguage ?? "en");

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
      gsap.from(".tokenomics__chart", {
        y: 70,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        clearProps: "transform",
        scrollTrigger: { trigger: ".tokenomics__chart", start: "top 82%" },
      });
      gsap.from(".tokenomics__item", {
        y: 28,
        opacity: 0,
        stagger: 0.07,
        duration: 0.55,
        clearProps: "transform",
        scrollTrigger: { trigger: ".tokenomics__list", start: "top 84%" },
      });
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
      <div className="tokenomics page-grid">
        <header className="tokenomics__header">
          <p>{t("performance.tokenomics.eyebrow")}</p>
          <h3>{t("performance.tokenomics.title")}</h3>
          <div className="tokenomics__supply">
            <span>{t("performance.tokenomics.totalSupply")}</span>
            <strong>{numberFormatter.format(TOKEN_SUPPLY)} <small>$ALVARA</small></strong>
          </div>
        </header>
        <div className="tokenomics__chart">
          <TokenomicsChart labels={tokenomicsLabels} chartLabel={t("performance.tokenomics.chartLabel")}/>
          <div className="tokenomics__chart-center" aria-hidden="true">
            <strong>1B</strong>
            <span>$ALVARA</span>
          </div>
        </div>
        <div className="tokenomics__breakdown">
          <div className="tokenomics__columns" aria-hidden="true">
            <span>{t("performance.tokenomics.category")}</span>
            <span>{t("performance.tokenomics.allocation")}</span>
            <span>{t("performance.tokenomics.tokens")}</span>
          </div>
          <ol className="tokenomics__list">
            {TOKENOMICS_DISTRIBUTION.map((percentage, index) => (
              <li className="tokenomics__item" key={tokenomicsLabels[index]}>
                <span className="tokenomics__swatch" style={{ backgroundColor: TOKENOMICS_COLORS[index] }}/>
                <strong>{tokenomicsLabels[index]}</strong>
                <span>{percentage}%</span>
                <span>{numberFormatter.format(TOKEN_SUPPLY * percentage / 100)}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
