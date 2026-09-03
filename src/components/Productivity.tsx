"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { homeContent } from "@/data/home";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function Productivity() {
  const section = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const mm = gsap.matchMedia();
    mm.add("(min-width: 801px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: ".productivity__stage", start: "top top", end: "+=150%", pin: true, scrub: 1 },
      });
      tl.fromTo(".productivity__dashboard", { clipPath: "inset(34% 27% 29% 27% round 36px)" }, { clipPath: "inset(0% 0% 0% 0% round 0px)", ease: "none" })
        .from(".dashboard__grid", { opacity: 0 }, 0.18)
        .from(".dashboard__title", { y: 190, opacity: 0 }, 0.2)
        .from(".dashboard__metric", { y: 70, opacity: 0, stagger: 0.1 }, 0.28);
    });
    mm.add("(max-width: 800px)", () => {
      gsap.from(".dashboard__metric", {
        y: 50, opacity: 0, stagger: 0.1, duration: 0.7,
        scrollTrigger: { trigger: ".productivity__dashboard", start: "top 75%" },
      });
    });
    return () => mm.revert();
  }, { scope: section });

  return (
    <section className="productivity" id="performance" ref={section}>
      <div className="productivity__intro page-grid">
        <h2>Proof in<br/>the Numbers</h2>
        <p>Real-time analysis, multi-strategy confirmation, and direct API execution turn complex market data into one clear action.</p>
      </div>
      <div className="productivity__stage">
        <div className="productivity__dashboard">
          <div className="dashboard__grid" aria-hidden="true"/>
          <div className="dashboard__top page-grid">
            <h3 className="dashboard__title">Alvara AI<br/>at a Glance</h3>
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
    </section>
  );
}
