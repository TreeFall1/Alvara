import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CoinPage } from "@/components/CoinPage";
import { isLocale } from "@/i18n/config";

const coinMeta = {
  en: {
    title: "$ALVARA Token — Utility, Tokenomics and Roadmap",
    description: "Explore the $ALVARA token, its role in the Alvara ecosystem, tokenomics, access points and preliminary roadmap.",
  },
  ru: {
    title: "Токен $ALVARA — возможности, токеномика и роадмап",
    description: "Узнайте, как токен $ALVARA работает в экосистеме Alvara: токеномика, способы покупки и примерный роадмап развития.",
  },
} as const;

export async function generateMetadata({ params }: PageProps<"/[locale]/coin">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return {
    ...coinMeta[locale],
    alternates: {
      canonical: `/${locale}/coin`,
      languages: { en: "/en/coin", ru: "/ru/coin" },
    },
  };
}

export default function Page() {
  return <CoinPage/>;
}
