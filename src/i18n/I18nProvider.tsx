"use client";

import { useEffect, useState } from "react";
import { I18nextProvider } from "react-i18next";
import { createI18n } from "./client";
import type { Locale } from "./config";

export function I18nProvider({ children, locale }: { children: React.ReactNode; locale: Locale }) {
  const [i18n] = useState(() => createI18n(locale));

  useEffect(() => {
    if (i18n.resolvedLanguage !== locale) void i18n.changeLanguage(locale);
    document.documentElement.lang = locale;
  }, [i18n, locale]);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
