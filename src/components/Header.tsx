"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useHomeContent } from "@/i18n/useHomeContent";
import { defaultLocale, isLocale } from "@/i18n/config";
import { Arrow, Brand } from "./Brand";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header() {
  const { t, i18n } = useTranslation();
  const homeContent = useHomeContent();
  const locale = isLocale(i18n.resolvedLanguage ?? "") ? i18n.resolvedLanguage : defaultLocale;
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

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header className={`header ${dark || open ? "header--dark" : ""}`}>
      <a className="header__brand" href="#home" aria-label={t("header.home")} onClick={() => setOpen(false)}><Brand light={dark || open}/></a>
      <nav className="header__nav" aria-label={t("header.primaryNavigation")}>
        {homeContent.navigation.slice(1, 5).map((item) => <a key={item.label} href={item.href} className="roll-link"><span>{item.label}</span><span aria-hidden="true">{item.label}</span></a>)}
        <Link href={`/${locale}/coin`} className="roll-link"><span>$ALVARA</span><span aria-hidden="true">$ALVARA</span></Link>
      </nav>
      <div className="header__actions">
        <LanguageSwitcher onNavigate={() => setOpen(false)}/>
        <a className="header__dashboard roll-link" href={homeContent.telegramUrl} target="_blank" rel="noreferrer"><span>{t("header.launchApp")} <Arrow/></span><span aria-hidden="true">{t("header.launchApp")} <Arrow/></span></a>
        <button className="menu-toggle" type="button" aria-controls="mobile-navigation" aria-expanded={open} aria-label={open ? t("header.closeMenu") : t("header.openMenu")} onClick={() => setOpen(!open)}>
          <span/><span/>
        </button>
      </div>
      <div id="mobile-navigation" className={`mobile-menu ${open ? "is-open" : ""}`} aria-hidden={!open} inert={!open}>
        <div className="mobile-menu__links">
          {homeContent.navigation.map((item, index) => (
            <a style={{ "--i": index } as React.CSSProperties} key={item.label} href={item.href} onClick={() => setOpen(false)}><span>{item.label}</span><Arrow diagonal/></a>
          ))}
          <Link style={{ "--i": homeContent.navigation.length } as React.CSSProperties} href={`/${locale}/coin`} onClick={() => setOpen(false)}><span>$ALVARA</span><Arrow diagonal/></Link>
        </div>
        <div className="mobile-menu__bottom">
          <strong>{t("header.mobileStat")}</strong><p>{t("header.mobileDescription")}</p>
        </div>
      </div>
    </header>
  );
}
