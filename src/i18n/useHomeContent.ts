"use client";

import { useTranslation } from "react-i18next";
import type { HomePageContent } from "@/types/content";

export function useHomeContent() {
  const { t } = useTranslation();
  return t("content", { returnObjects: true }) as HomePageContent;
}
