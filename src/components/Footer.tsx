"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { homeContent } from "@/data/home";
import { Arrow, Brand } from "./Brand";
import { WebGLWordmark } from "./WebGLWordmark";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function Footer() {
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
        <h2>Start Trading with Data,<br/>Not Emotion</h2>
        <div className="footer__cta-copy">
          <p>Join the Alvara ecosystem now and receive 100 $ALVARA points on your first login.</p>
          <a className="button button--solid" href={homeContent.telegramUrl} target="_blank" rel="noreferrer">Open Alvara Trade in Telegram <Arrow/></a>
        </div>
      </div>
      <div className="footer__links page-grid">
        <div className="footer__listed"><Brand light/><p>AI-powered trading in Telegram. One ecosystem for signals, execution, and $ALVARA rewards.</p></div>
        <nav className="footer__nav" aria-label="Footer navigation"><small>Navigation</small>{homeContent.navigation.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}</nav>
        <div className="footer__nav"><small>Supported Exchanges</small>{["Binance", "Bybit", "MEXC"].map((item) => <span key={item}>{item}</span>)}</div>
        <button className="footer__top" onClick={top}>Back to top <Arrow/></button>
      </div>
      <div className="footer__wordmark"><WebGLWordmark/></div>
      <div className="footer__legal page-grid"><span>© 2026 Alvara Trade. All rights reserved</span><div><button type="button">Privacy Policy</button><button type="button">Terms of Use</button></div></div>
    </footer>
  );
}
