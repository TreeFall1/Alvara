"use client";

import { createInstance } from "i18next";
import { initReactI18next } from "react-i18next";
import { defaultLocale, type Locale } from "./config";
import { resources } from "./resources";

export function createI18n(locale: Locale = defaultLocale) {
  const instance = createInstance();
  void instance.use(initReactI18next).init({
    resources,
    lng: locale,
    fallbackLng: defaultLocale,
    supportedLngs: Object.keys(resources),
    interpolation: { escapeValue: false },
    initAsync: false,
  });
  return instance;
}
