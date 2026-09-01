"use client";

import { useEffect, useRef } from "react";
import type { AnimationItem } from "lottie-web";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { homeContent } from "@/data/home";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function Stack() {
  const section = useRef<HTMLElement>(null);
  const canvasHost = useRef<HTMLDivElement>(null);
  const animation = useRef<AnimationItem | null>(null);

  useEffect(() => {
    const host = canvasHost.current;
    if (!host) return;
    let disposed = false;
    const observer = new IntersectionObserver(async ([entry]) => {
      if (!entry.isIntersecting || animation.current || disposed) return;
      const lottie = (await import("lottie-web")).default;
      if (disposed) return;
      animation.current = lottie.loadAnimation({ container: host, renderer: "canvas", loop: false, autoplay: false, path: "/media/stack.json" });
      animation.current.addEventListener("DOMLoaded", () => ScrollTrigger.refresh());
      observer.disconnect();
    }, { rootMargin: "700px" });
    observer.observe(host);
    return () => { disposed = true; observer.disconnect(); animation.current?.destroy(); animation.current = null; };
  }, []);

  useGSAP(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const progressTrigger = ScrollTrigger.create({
      trigger: ".stack__list",
      start: "top 65%",
      end: "bottom 35%",
      scrub: true,
      onUpdate: ({ progress }) => {
        const item = animation.current;
        if (item) item.goToAndStop(progress * Math.max(item.totalFrames - 1, 0), true);
      },
    });
    const mm = gsap.matchMedia();
    mm.add("(min-width: 801px)", () => {
      ScrollTrigger.create({ trigger: ".stack__body", start: "top top", endTrigger: ".generation", end: "top top", pin: ".stack__visual", pinSpacing: false });
    });
    gsap.utils.toArray<HTMLElement>(".stack-item").forEach((item) => {
      gsap.fromTo(item, { opacity: 0.36 }, { opacity: 1, scrollTrigger: { trigger: item, start: "top 65%", end: "bottom 48%", scrub: true, toggleActions: "play reverse play reverse" } });
    });
    gsap.fromTo(".generation__outline", { clipPath: "inset(100% 0 0 0)" }, { clipPath: "inset(0% 0 0 0)", ease: "none", scrollTrigger: { trigger: ".generation", start: "top 85%", end: "center 45%", scrub: true } });
    gsap.from(".generation__title span", { yPercent: 110, stagger: 0.06, scrollTrigger: { trigger: ".generation", start: "top 75%", end: "center 45%", scrub: 0.8 } });
    return () => { progressTrigger.kill(); mm.revert(); };
  }, { scope: section });

  return (
    <section className="stack" id="stack" ref={section}>
      <div className="stack__heading page-grid">
        <p>Propositions</p><h2>The Stack for<br/>Stacking Ethereum</h2>
      </div>
      <div className="stack__body page-grid">
        <div className="stack__visual" aria-hidden="true">
          <Image src="/media/stack-outline.avif" alt="" className="stack__outline" width={1024} height={1920}/>
          <div ref={canvasHost} className="stack__lottie"/>
        </div>
        <div className="stack__list">
          {homeContent.propositions.map((item) => (
            <article className="stack-item" key={item.label}>
              <small>{item.label}</small><h3>{item.title}</h3><p>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="generation">
        <Image src="/media/stack-outline.avif" className="generation__outline" alt="" width={1024} height={1920}/>
        <h2 className="generation__title"><span>The</span> <span>Opportunity</span><br/><span>of a Generation</span></h2>
      </div>
    </section>
  );
}
