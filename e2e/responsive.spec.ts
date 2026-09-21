import { expect, test } from "@playwright/test";

test("localized text fits narrow and intermediate layouts", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop-1440", "one browser covers the locale and width matrix");

  for (const locale of ["en", "ru"]) {
    await page.goto(`/${locale}`, { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);

    for (const width of [320, 1100]) {
      await page.setViewportSize({ width, height: 900 });
      await page.evaluate(() => new Promise<void>((resolve) => requestAnimationFrame(() => requestAnimationFrame(() => resolve()))));

      const issues = await page.evaluate(() => {
        const clipped = [...document.querySelectorAll<HTMLElement>("h1, h2, h3, h4, .hero__actions .button, .footer__cta-copy .button")]
          .filter((element) => element.scrollWidth > element.clientWidth + 2)
          .map((element) => element.textContent?.trim().slice(0, 48) ?? element.tagName);
        if (document.documentElement.scrollWidth > window.innerWidth + 1) clipped.push("page overflows viewport");
        if (window.innerWidth === 1100) {
          const navLink = document.querySelector<HTMLElement>(".header__nav .roll-link");
          if (navLink && parseFloat(getComputedStyle(navLink).fontSize) < 13) clipped.push("desktop navigation is too small");
        }
        return clipped;
      });

      expect(issues, `${locale} at ${width}px`).toEqual([]);
    }
  }
});

test("wide localized hero stays below the fixed header", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop-1440", "one browser covers the locale and viewport matrix");
  await page.emulateMedia({ reducedMotion: "reduce" });

  for (const locale of ["en", "ru"]) {
    await page.goto(`/${locale}`, { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);

    for (const width of [1440, 1920]) {
      for (const height of [500, 700, 900]) {
        await page.setViewportSize({ width, height });
        await page.evaluate(() => new Promise<void>((resolve) => requestAnimationFrame(() => requestAnimationFrame(() => resolve()))));

        const bounds = await page.evaluate(() => ({
          headingTop: document.querySelector(".hero h1")!.getBoundingClientRect().top,
          headingRight: document.querySelector(".hero h1")!.getBoundingClientRect().right,
          headerBottom: document.querySelector(".header")!.getBoundingClientRect().bottom,
          mediaLeft: document.querySelector(".hero__media")!.getBoundingClientRect().left,
          heroHeight: document.querySelector(".hero")!.getBoundingClientRect().height,
          contentScrollHeight: document.querySelector(".hero__content")!.scrollHeight,
        }));

        expect(bounds.headingTop, `${locale} at ${width}×${height}px`).toBeGreaterThanOrEqual(bounds.headerBottom + 24);
        expect(bounds.headingRight + 24, `${locale} at ${width}×${height}px`).toBeLessThanOrEqual(bounds.mediaLeft);
        expect(bounds.contentScrollHeight, `${locale} at ${width}×${height}px`).toBeLessThanOrEqual(bounds.heroHeight + 2);
      }
    }
  }
});
