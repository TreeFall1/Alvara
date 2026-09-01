"use client";

import { useEffect, useState } from "react";
import { homeContent } from "@/data/home";
import { Arrow, Brand, Nasdaq } from "./Brand";

export function Header() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 64;
      const darkSections = [document.querySelector("#stack"), document.querySelector("#opportunity")];
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

  const stop = (event: React.MouseEvent) => event.preventDefault();

  return (
    <header className={`header ${dark || open ? "header--dark" : ""}`}>
      <button className="header__brand" onClick={stop} aria-label="SharpLink home"><Brand light={dark || open}/></button>
      <nav className="header__nav" aria-label="Primary navigation">
        {homeContent.navigation.slice(1, 5).map((item) => <button key={item.label} onClick={stop} className="roll-link"><span>{item.label}</span><span aria-hidden="true">{item.label}</span></button>)}
      </nav>
      <button className="header__dashboard roll-link" onClick={stop}><span>ETH Dashboard <Arrow/></span><span aria-hidden="true">ETH Dashboard <Arrow/></span></button>
      <button className="menu-toggle" aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
        <span/><span/>
      </button>
      <div className={`mobile-menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <div className="mobile-menu__links">
          {homeContent.navigation.map((item, index) => (
            <button style={{ "--i": index } as React.CSSProperties} key={item.label} onClick={stop}><span>{item.label}</span><Arrow diagonal/></button>
          ))}
        </div>
        <div className="mobile-menu__bottom">
          <Nasdaq/><p>SharpLink is proudly listed on NASDAQ under the trading symbol SBET</p>
        </div>
      </div>
    </header>
  );
}
