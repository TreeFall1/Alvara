import { expect, test } from "@playwright/test";

test("uses Montserrat and Open Sans across localized pages", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop-1440", "one browser covers the typography matrix");
  await page.emulateMedia({ reducedMotion: "reduce" });

  for (const locale of ["en", "ru"]) {
    for (const width of [320, 390]) {
      await page.setViewportSize({ width, height: 844 });
      await page.goto(`/${locale}`, { waitUntil: "networkidle" });
      await page.evaluate(() => document.fonts.ready);

      const typography = await page.evaluate(() => ({
        body: getComputedStyle(document.body).fontFamily,
        heading: getComputedStyle(document.querySelector(".hero h1")!).fontFamily,
        headingWeight: getComputedStyle(document.querySelector(".hero h1")!).fontWeight,
        sectionWeight: getComputedStyle(document.querySelector(".productivity__intro h2")!).fontWeight,
        cardWeight: getComputedStyle(document.querySelector(".opportunity-card h3")!).fontWeight,
        bodyWeight: getComputedStyle(document.querySelector(".hero__subtitle")!).fontWeight,
        taglineBottom: document.querySelector(".hero__tagline")!.getBoundingClientRect().bottom,
        coinTop: document.querySelector(".hero__coin")!.getBoundingClientRect().top,
      }));

      expect(typography.body).toContain("Open Sans");
      expect(typography.heading).toContain("Montserrat");
      expect([typography.headingWeight, typography.sectionWeight, typography.cardWeight, typography.bodyWeight]).toEqual(["700", "600", "500", "400"]);
      expect(typography.taglineBottom, `${locale} at ${width}px`).toBeLessThan(typography.coinTop);
    }

    await page.goto(`/${locale}/coin`, { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    const coinHeading = await page.locator(".reference-site h2").first().evaluate((element) => ({
      family: getComputedStyle(element).fontFamily,
      weight: getComputedStyle(element).fontWeight,
    }));
    expect(coinHeading.family).toContain("Montserrat");
    expect(coinHeading.weight).toBe("600");
    expect(await page.locator("body").evaluate((element) => getComputedStyle(element).fontFamily)).toContain("Open Sans");
  }
});

test("localized text fits narrow and intermediate layouts", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop-1440", "one browser covers the locale and width matrix");

  for (const locale of ["en", "ru"]) {
    await page.goto(`/${locale}`, { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);

    for (const width of [320, 1100]) {
      await page.setViewportSize({ width, height: 900 });
      await page.evaluate(() => new Promise<void>((resolve) => requestAnimationFrame(() => requestAnimationFrame(() => resolve()))));

      const issues = await page.evaluate(() => {
        const clipped = [...document.querySelectorAll<HTMLElement>("h1, h2, h3, h4, .footer__cta-copy .button")]
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
          heroRight: document.querySelector(".hero")!.getBoundingClientRect().right,
          heroHeight: document.querySelector(".hero")!.getBoundingClientRect().height,
          contentScrollHeight: document.querySelector(".hero__content")!.scrollHeight,
          background: getComputedStyle(document.querySelector(".hero__media")!).backgroundImage,
        }));

        expect(bounds.headingTop, `${locale} at ${width}×${height}px`).toBeGreaterThanOrEqual(bounds.headerBottom + 24);
        expect(bounds.headingRight, `${locale} at ${width}×${height}px`).toBeLessThan(bounds.heroRight);
        expect(bounds.contentScrollHeight, `${locale} at ${width}×${height}px`).toBeLessThanOrEqual(bounds.heroHeight + 2);
        expect(bounds.background).toContain("coinbg.jpg");
      }
    }
  }
});
