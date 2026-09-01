"use client";

import { FormEvent, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { homeContent } from "@/data/home";
import { Arrow, Brand, Nasdaq } from "./Brand";
import { WebGLWordmark } from "./WebGLWordmark";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function Footer() {
  const footer = useRef<HTMLElement>(null);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useGSAP(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.from(".footer__wordmark", { y: 190, scrollTrigger: { trigger: footer.current, start: "top bottom", end: "bottom bottom", scrub: 0.8 } });
    gsap.fromTo(".footer__glow", { yPercent: 25 }, { yPercent: -10, scrollTrigger: { trigger: footer.current, start: "top bottom", end: "bottom bottom", scrub: true } });
  }, { scope: footer });

  const submit = (event: FormEvent) => {
    event.preventDefault();
    setMessage(/^\S+@\S+\.\S+$/.test(email) ? "Thank you. You're on the list." : "Please enter a valid email address.");
  };
  const stop = (event: React.MouseEvent) => event.preventDefault();
  const top = () => window.scrollTo({ top: 0, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });

  return (
    <footer className="footer" id="investors" ref={footer}>
      <div className="footer__glow" aria-hidden="true"/>
      <div className="footer__newsletter page-grid">
        <h2>Sign up to<br/>stay sharp:</h2>
        <form onSubmit={submit} noValidate>
          <label htmlFor="email">Enter your email</label>
          <input id="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter your email" aria-describedby="form-message"/>
          <button type="submit">Sign up <Arrow/></button>
          <p id="form-message" role="status">{message}</p>
        </form>
      </div>
      <div className="footer__links page-grid">
        <div className="footer__listed"><Brand light/><Nasdaq/><p>SharpLink is proudly listed on NASDAQ under the trading symbol SBET</p></div>
        <div className="footer__nav"><small>Navigation</small>{homeContent.navigation.map((item) => <button key={item.label} onClick={stop}>{item.label}</button>)}</div>
        <div className="footer__nav"><small>Social</small>{["Facebook", "Twitter", "LinkedIn"].map((item) => <button key={item} onClick={stop}>{item}</button>)}</div>
        <button className="footer__top" onClick={top}>Back to top <Arrow/></button>
      </div>
      <div className="footer__wordmark"><WebGLWordmark/></div>
      <div className="footer__legal page-grid"><span>© 2026 Sharplink Inc. All rights reserved</span><div><button onClick={stop}>Privacy policy</button><button onClick={stop}>Terms of use</button></div></div>
    </footer>
  );
}
