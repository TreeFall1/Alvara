"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";
import { useHomeContent } from "@/i18n/useHomeContent";
import { Arrow, Brand } from "./Brand";
import { WebGLWordmark } from "./WebGLWordmark";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const CONTRACT = "EQBq2pgBWUvJ6RjCoByA84y8J4w1TLexKjmJRCC-fyQOolv_";
const socialPaths = {
  x: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-7.227-8.26 8.502-11.24z",
  instagram: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163ZM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z",
  youtube: "M23.5 6.507a2.994 2.994 0 0 0-2.107-2.12C19.53 3.883 12 3.883 12 3.883s-7.53 0-9.393.504A2.994 2.994 0 0 0 .5 6.507C0 8.38 0 12 .5 17.493a2.994 2.994 0 0 0 2.107 2.12C4.47 20.117 12 20.117 12 20.117s7.53 0 9.393-.504a2.994 2.994 0 0 0 2.107-2.12C24 15.62 24 12 24 12s0-3.62-.5-5.493ZM9.6 15.568V8.432L15.818 12 9.6 15.568Z",
} as const;

export function Footer() {
  const { t, i18n } = useTranslation();
  const homeContent = useHomeContent();
  const footer = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);

  useGSAP(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.from(".footer__wordmark", { y: 190, scrollTrigger: { trigger: footer.current, start: "top bottom", end: "bottom bottom", scrub: 0.8 } });
    gsap.fromTo(".footer__glow", { yPercent: 25 }, { yPercent: -10, scrollTrigger: { trigger: footer.current, start: "top bottom", end: "bottom bottom", scrub: true } });
  }, { scope: footer });

  const top = () => window.scrollTo({ top: 0, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  const copyContract = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch (error) {
      console.error("Could not copy contract address", error);
    }
  };

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
        <div className="footer__socials" aria-label={t("footer.socialMedia")}>
          {(Object.keys(socialPaths) as (keyof typeof socialPaths)[]).map((name) => <a href={homeContent.telegramUrl} aria-label={name === "x" ? "X" : name === "instagram" ? "Instagram" : "YouTube"} target="_blank" rel="noreferrer" key={name}><svg viewBox="0 0 24 24" aria-hidden="true"><path d={socialPaths[name]}/></svg></a>)}
        </div>
        <div className="footer__contract">
          <small>{t("footer.tokenContract")}</small>
          <button type="button" className={copied ? "is-copied" : ""} onClick={copyContract} aria-live="polite">
            <span className="footer__contract-address">{CONTRACT}</span>
            {copied ? <svg className="footer__copy-icon footer__copy-icon--check" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg> : <svg className="footer__copy-icon" viewBox="0 0 24 24" aria-hidden="true"><rect width="14" height="14" x="8" y="8" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>}
            <span>{copied ? t("footer.copied") : t("footer.copyContract")}</span>
          </button>
        </div>
        <button className="footer__top" onClick={top}>{t("footer.backToTop")} <Arrow/></button>
      </div>
      <div className="footer__wordmark"><WebGLWordmark/></div>
      <div className="footer__legal page-grid"><span>{t("footer.copyright")}</span><div><button type="button">{t("footer.privacy")}</button><button type="button">{t("footer.terms")}</button></div></div>
    </footer>
  );
}
