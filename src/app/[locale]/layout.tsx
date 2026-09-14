import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { I18nProvider } from "@/i18n/I18nProvider";
import { isLocale, locales } from "@/i18n/config";
import { translations } from "@/i18n/resources";
import "../globals.scss";
import "../design-system.css";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return {
    title: translations[locale].meta.title,
    description: translations[locale].meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: { en: "/en", ru: "/ru", uk: "/uk" },
    },
    icons: { icon: "/favicon.svg" },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html lang={locale}>
      <body><I18nProvider locale={locale}>{children}</I18nProvider></body>
    </html>
  );
}
