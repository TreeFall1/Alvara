"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Arrow, Nasdaq } from "./Brand";

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

  const stop = (event: React.MouseEvent) => event.preventDefault();

  return (
    <section className="hero" id="home" ref={section}>
      <div className="hero__media" aria-hidden="true">
        <video autoPlay muted loop playsInline preload="auto" poster="/media/hero-poster.avif">
          <source src="/media/hero.webm" type="video/webm"/>
        </video>
        <div className="hero__wash"/>
      </div>
      <div className="hero__content page-grid">
        <h1 data-hero-in>Ethereum<br/><span>with an Edge</span></h1>
        <div className="hero__actions" data-hero-in>
          <button className="button button--solid" onClick={stop}>Explore the Dashboard <Arrow/></button>
          <button className="button button--glass" onClick={stop}>See Investor Information <Arrow/></button>
        </div>
        <div className="hero__listed" data-hero-in><small>Proudly listed on</small><Nasdaq/></div>
        <p className="hero__copy" data-hero-in>Sharplink is the institutional-grade Ethereum treasury platform giving investors a smarter, more productive access vehicle to ETH.</p>
        <button className="hero__news" data-hero-in onClick={stop}>
          <span><small>Company news</small><time>Aug 10, 2026</time></span>
          <strong>Sharplink Reports Second Quarter 2026 Financial and Operating Results</strong>
          <Arrow diagonal/>
        </button>
      </div>
    </section>
  );
}
