"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { isLocale, locales, type Locale } from "@/i18n/config";

const shortNames: Record<Locale, string> = { en: "EN", ru: "RU", uk: "UA" };
const languageNames: Record<Locale, string> = { en: "English", ru: "Русский", uk: "Українська" };

function persistLocale(locale: Locale) {
  document.cookie = `alvara-locale=${locale}; Path=/; Max-Age=31536000; SameSite=Lax`;
}

export function LanguageSwitcher({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const { i18n, t } = useTranslation();
  const currentLocale = isLocale(i18n.resolvedLanguage ?? "") ? i18n.resolvedLanguage as Locale : "en";

  const localizedPath = (locale: Locale) => {
    const segments = pathname.split("/");
    if (isLocale(segments[1] ?? "")) segments[1] = locale;
    else segments.splice(1, 0, locale);
    return segments.join("/") || `/${locale}`;
  };

  const selectLanguage = (locale: Locale) => {
    persistLocale(locale);
    void i18n.changeLanguage(locale);
    onNavigate?.();
  };

  return (
    <nav className="language-switcher" aria-label={t("header.language")}>
      {locales.map((locale) => (
        <Link
          key={locale}
          href={localizedPath(locale)}
          hrefLang={locale}
          lang={locale}
          aria-current={locale === currentLocale ? "page" : undefined}
          aria-label={languageNames[locale]}
          onClick={() => selectLanguage(locale)}
        >
          {shortNames[locale]}
        </Link>
      ))}
    </nav>
  );
}
