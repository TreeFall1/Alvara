"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { homeContent } from "@/data/home";
import { Arrow } from "./Brand";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function Hero() {
  const section = useRef<HTMLElement>(null);

  useGSAP(() => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    gsap.from("[data-hero-in]", { autoAlpha: 0, y: 24, duration: 0.8, stagger: 0.16, delay: 0.25, ease: "power3.out" });
    const mm = gsap.matchMedia();
    mm.add("(max-width: 800px)", () => gsap.to(".hero__media", {
      opacity: 0,
      scrollTrigger: { trigger: section.current, start: "top top", end: "bottom center", scrub: true },
    }));
    return () => mm.revert();
  }, { scope: section });

  return (
    <section className="hero" id="home" ref={section}>
      <div className="hero__media" aria-hidden="true">
        <video autoPlay muted loop playsInline preload="auto" poster="/media/hero-poster.avif">
          <source src="/media/herovid.webm" type="video/webm"/>
        </video>
        <div className="hero__wash"/>
      </div>
      <div className="hero__content page-grid">
        <h1 data-hero-in>Trade Like the Top 1% of Traders<br/><span>with Alvara&nbsp;<b className="hero__ai">AI</b></span></h1>
        <div className="hero__actions" data-hero-in>
          <a className="button button--solid" href={homeContent.telegramUrl} target="_blank" rel="noreferrer">Launch Alvara Trade in Telegram <Arrow/></a>
          <a className="button button--glass" href="#products">Learn More <Arrow/></a>
        </div>
        <p className="hero__copy" data-hero-in>A smart trading ecosystem in Telegram: AI analysis across 26 strategies, one-click trade copying to exchanges, and $ALVARA token farming.</p>
        <div className="hero__trust" data-hero-in>
          <span><b aria-hidden="true">✓</b>Your funds never leave your exchange — API keys protected with AES-256 encryption</span>
          <span><b aria-hidden="true">✓</b>Supports Binance, Bybit, and MEXC</span>
        </div>
      </div>
    </section>
  );
}
