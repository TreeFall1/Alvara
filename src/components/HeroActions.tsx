"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useHomeContent } from "@/i18n/useHomeContent";
import { defaultLocale, isLocale } from "@/i18n/config";
import { Arrow } from "./Brand";

export function HeroActions() {
  const { t, i18n } = useTranslation();
  const homeContent = useHomeContent();
  const locale = isLocale(i18n.resolvedLanguage ?? "") ? i18n.resolvedLanguage : defaultLocale;

  return (
    <div className="hero-actions">
      <a className="button button--dark" href={homeContent.telegramUrl} target="_blank" rel="noreferrer">
        {t("opportunity.startTrading")} <Arrow/>
      </a>
      <Link className="button button--glass" href={`/${locale}/coin`}>
        {t("coinPromo.cta")} <Arrow/>
      </Link>
    </div>
  );
}
