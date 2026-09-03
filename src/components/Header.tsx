"use client";

import { useEffect, useState } from "react";
import { homeContent } from "@/data/home";
import { Arrow, Brand } from "./Brand";

export function Header() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 64;
      const darkSections = [document.querySelector("#products"), document.querySelector("#how-it-works")];
      setDark(darkSections.some((node) => node && y >= (node as HTMLElement).offsetTop && y < (node as HTMLElement).offsetTop + (node as HTMLElement).offsetHeight));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={`header ${dark || open ? "header--dark" : ""}`}>
      <a className="header__brand" href="#home" aria-label="Alvara Trade home"><Brand light={dark || open}/></a>
      <nav className="header__nav" aria-label="Primary navigation">
        {homeContent.navigation.slice(1, 5).map((item) => <a key={item.label} href={item.href} className="roll-link"><span>{item.label}</span><span aria-hidden="true">{item.label}</span></a>)}
      </nav>
      <a className="header__dashboard roll-link" href={homeContent.telegramUrl} target="_blank" rel="noreferrer"><span>Launch App <Arrow/></span><span aria-hidden="true">Launch App <Arrow/></span></a>
      <button className="menu-toggle" aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
        <span/><span/>
      </button>
      <div className={`mobile-menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <div className="mobile-menu__links">
          {homeContent.navigation.map((item, index) => (
            <a style={{ "--i": index } as React.CSSProperties} key={item.label} href={item.href} onClick={() => setOpen(false)}><span>{item.label}</span><Arrow diagonal/></a>
          ))}
        </div>
        <div className="mobile-menu__bottom">
          <strong>$0 TO START</strong><p>AI-powered trading in Telegram across 26 strategies.</p>
        </div>
      </div>
    </header>
  );
}
