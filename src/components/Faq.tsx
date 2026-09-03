"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { homeContent } from "@/data/home";
import { Arrow } from "./Brand";

function FaqRow({ index, question, answer }: { index: number; question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  const body = useRef<HTMLDivElement>(null);
  const toggle = () => {
    const next = !open;
    setOpen(next);
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.to(body.current, { height: next ? "auto" : 0, duration: 0.4, ease: "power2.inOut" });
    gsap.fromTo(body.current?.firstElementChild ?? null, { opacity: next ? 0 : 1, y: next ? 38 : 0 }, { opacity: next ? 1 : 0, y: next ? 0 : -12, duration: 0.35 });
  };
  return (
    <article className={`faq-row ${open ? "is-open" : ""}`}>
      <button onClick={toggle} aria-expanded={open}><span>0{index + 1}</span><strong>{question}</strong><i aria-hidden="true"/></button>
      <div className="faq-row__body" ref={body} style={{ height: open ? "auto" : 0 }}><p>{answer}</p></div>
    </article>
  );
}

export function Faq() {
  return (
    <section className="faq page-grid" id="faq">
      <div className="faq__aside"><h2>FAQ</h2><p>Everything you need to know</p><a className="button button--dark" href={homeContent.telegramUrl} target="_blank" rel="noreferrer">Start Free <Arrow/></a></div>
      <div className="faq__list">{homeContent.faq.map((item, index) => <FaqRow key={item.question} index={index} {...item}/>)}</div>
    </section>
  );
}
