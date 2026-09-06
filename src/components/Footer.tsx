"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";
import { useHomeContent } from "@/i18n/useHomeContent";
import { Arrow, Brand } from "./Brand";
import { WebGLWordmark } from "./WebGLWordmark";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function Footer() {
  const { t } = useTranslation();
  const homeContent = useHomeContent();
  const footer = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.from(".footer__wordmark", { y: 190, scrollTrigger: { trigger: footer.current, start: "top bottom", end: "bottom bottom", scrub: 0.8 } });
    gsap.fromTo(".footer__glow", { yPercent: 25 }, { yPercent: -10, scrollTrigger: { trigger: footer.current, start: "top bottom", end: "bottom bottom", scrub: true } });
  }, { scope: footer });

  const top = () => window.scrollTo({ top: 0, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });

  return (
    <footer className="footer" id="final-cta" ref={footer}>
      <div className="footer__glow" aria-hidden="true"/>
      <div className="footer__newsletter page-grid">
        <h2>{t("footer.titleFirst")}<br/>{t("footer.titleSecond")}</h2>
        <div className="footer__cta-copy">
          <p>{t("footer.copy")}</p>
          <a className="button button--solid" href={homeContent.telegramUrl} target="_blank" rel="noreferrer">{t("footer.openTelegram")} <Arrow/></a>
        </div>
      </div>
      <div className="footer__links page-grid">
        <div className="footer__listed"><Brand light/><p>{t("footer.description")}</p></div>
        <nav className="footer__nav" aria-label={t("footer.navigation")}><small>{t("footer.navigation")}</small>{homeContent.navigation.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}</nav>
        <div className="footer__nav"><small>{t("footer.exchanges")}</small>{["Binance", "Bybit", "MEXC"].map((item) => <span key={item}>{item}</span>)}</div>
        <button className="footer__top" onClick={top}>{t("footer.backToTop")} <Arrow/></button>
      </div>
      <div className="footer__wordmark"><WebGLWordmark/></div>
      <div className="footer__legal page-grid"><span>{t("footer.copyright")}</span><div><button type="button">{t("footer.privacy")}</button><button type="button">{t("footer.terms")}</button></div></div>
    </footer>
  );
}
