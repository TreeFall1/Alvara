"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";
import { useHomeContent } from "@/i18n/useHomeContent";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const layerIcons = ["custody", "encryption", "permissions"] as const;

type SecurityIconName = (typeof layerIcons)[number] | "exchange" | "shield";

function SecurityIcon({ name }: { name: SecurityIconName }) {
  if (name === "exchange") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9h16M6 9V5h12v4M6 19h12M7 9v10m5-10v10m5-10v10"/></svg>;
  }

  if (name === "encryption") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3m-4 4v2"/></svg>;
  }

  if (name === "permissions") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/><circle cx="5" cy="12" r="2"/></svg>;
  }

  if (name === "custody") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 8.5 12 4l8 4.5v7L12 20l-8-4.5zM4 8.5l8 4.5 8-4.5M12 13v7"/></svg>;
  }

  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 19 6v5c0 4.8-2.8 8.1-7 10-4.2-1.9-7-5.2-7-10V6z"/><path d="m9 12 2 2 4-5"/></svg>;
}

export function News() {
  const { t } = useTranslation();
  const homeContent = useHomeContent();
  const section = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const visual = section.current?.querySelector<HTMLElement>(".security-visual");
    const system = section.current?.querySelector<HTMLElement>(".security-system");
    const layers = section.current?.querySelector<HTMLElement>(".security-layers");
    const media = gsap.matchMedia();

    if (visual && system && layers) {
      media.add("(min-width: 1025px)", () => {
        const distance = () => Math.max(1, layers.offsetHeight - visual.offsetHeight);
        ScrollTrigger.create({
          trigger: system,
          start: "top 96px",
          end: () => `+=${distance()}`,
          pin: visual,
          pinSpacing: false,
          invalidateOnRefresh: true,
        });
      });
    }

    gsap.from(".security-layer", {
      y: 54,
      autoAlpha: 0,
      duration: 0.85,
      stagger: 0.14,
      ease: "power3.out",
      scrollTrigger: { trigger: ".security-layers", start: "top 78%" },
    });

    gsap.from(".security-flow__route-line span", {
      scaleX: 0,
      duration: 1.1,
      ease: "power2.inOut",
      transformOrigin: "left center",
      scrollTrigger: { trigger: ".security-visual", start: "top 74%" },
    });

    return () => media.revert();
  }, { scope: section });

  return (
    <section className="home-security page-grid" id="security" ref={section}>
      <div className="security-heading">
        <p>{t("security.eyebrow")}</p>
        <h2>
          {t("security.titleFirst")}<br/>
          {t("security.titleSecond")} <span className="security-heading__mark" aria-hidden="true"><SecurityIcon name="shield"/></span>
        </h2>
      </div>
      <div className="security__badge"><span aria-hidden="true">✓</span> {t("security.badge")}</div>

      <div className="security-system">
        <div className="security-visual-shell">
          <div className="security-visual">
            <div className="security-visual__status">
              <span><i/>{t("security.systemStatus")}</span>
              <strong>{t("security.verified")}</strong>
            </div>

            <div className="security-flow">
              <div className="security-flow__node">
                <span className="security-flow__icon"><SecurityIcon name="exchange"/></span>
                <small>{t("security.exchange")}</small>
                <strong>{t("security.exchangeCopy")}</strong>
              </div>
              <div className="security-flow__route">
                <span className="security-flow__lock"><SecurityIcon name="encryption"/></span>
                <span className="security-flow__route-line"><span/></span>
                <small>{t("security.encryptedChannel")}</small>
                <b>{t("security.encryptedCopy")}</b>
              </div>
              <div className="security-flow__node security-flow__node--alvara">
                <span className="security-flow__icon"><SecurityIcon name="shield"/></span>
                <small>{t("security.alvara")}</small>
                <strong>{t("security.alvaraCopy")}</strong>
              </div>
            </div>

            <div className="security-permissions">
              <div><small>{t("security.withdrawalAccess")}</small><strong data-state="off">{t("security.disabled")}</strong></div>
              <div><small>{t("security.tradingAccess")}</small><strong data-state="on">{t("security.enabled")}</strong></div>
            </div>

            <div className="security-marquee" aria-hidden="true">
              <div className="security-marquee__track">
                {[0, 1].map((group) => <span key={group}>{homeContent.security.map((item) => <b key={`${group}-${item.badge}`}><i/> {item.badge}</b>)}</span>)}
              </div>
            </div>
          </div>
        </div>

        <div className="security-layers">
          {homeContent.security.map((item, index) => (
            <article className="security-layer" key={item.title}>
              <div className="security-layer__top">
                <span className="security-layer__icon"><SecurityIcon name={layerIcons[index]}/></span>
                <small>{item.badge}</small>
              </div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
