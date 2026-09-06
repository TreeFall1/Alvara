import type { ReactElement } from "react";
import { I18nextProvider } from "react-i18next";
import { render as testingLibraryRender, type RenderOptions } from "@testing-library/react";
import { createI18n } from "@/i18n/client";
import type { Locale } from "@/i18n/config";

export function renderWithI18n(
  ui: ReactElement,
  { locale = "en", ...options }: RenderOptions & { locale?: Locale } = {},
) {
  return testingLibraryRender(
    <I18nextProvider i18n={createI18n(locale)}>{ui}</I18nextProvider>,
    options,
  );
}
