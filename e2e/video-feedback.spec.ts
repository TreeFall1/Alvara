import { expect, test } from "@playwright/test";

test("homepage sections follow the compact layout shown in the review", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop-1920", "desktop and mobile layout check");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/ru", { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);

  const desktop = await page.evaluate(() => {
    const rect = (selector: string) => document.querySelector(selector)!.getBoundingClientRect();
    const cards = [...document.querySelectorAll(".opportunity-card")].map((card) => card.getBoundingClientRect());
    const legal = [...document.querySelectorAll(".footer__legal button")].map((button) => button.getBoundingClientRect());
    return {
      heroBottom: rect(".hero").bottom,
      actionBottom: rect(".hero-actions").bottom,
      posterTop: rect(".trade-poster").top,
      stackHeight: rect(".stack").height,
      stepsHeight: rect(".opportunity").height,
      cardTops: cards.map((card) => card.top),
      legalTops: legal.map((button) => button.top),
      overflow: document.documentElement.scrollWidth - innerWidth,
    };
  });

  expect(desktop.actionBottom).toBeLessThan(desktop.heroBottom);
  expect(desktop.posterTop - desktop.heroBottom).toBeLessThan(120);
  expect(desktop.stackHeight).toBeLessThan(1080);
  expect(desktop.stepsHeight).toBeLessThan(1080);
  expect(Math.max(...desktop.cardTops) - Math.min(...desktop.cardTops)).toBeLessThan(2);
  expect(Math.max(...desktop.legalTops) - Math.min(...desktop.legalTops)).toBeLessThan(2);
  expect(desktop.overflow).toBeLessThanOrEqual(1);

  await page.setViewportSize({ width: 390, height: 844 });
  const mobile = await page.evaluate(() => {
    const hero = document.querySelector(".hero")!.getBoundingClientRect();
    const action = document.querySelector(".hero-actions")!.getBoundingClientRect();
    const cards = [...document.querySelectorAll(".opportunity-card")].map((card) => card.getBoundingClientRect());
    return {
      heroBottom: hero.bottom,
      actionBottom: action.bottom,
      cardTops: cards.map((card) => card.top),
      overflow: document.documentElement.scrollWidth - innerWidth,
    };
  });

  expect(mobile.actionBottom).toBeLessThan(mobile.heroBottom);
  expect(mobile.cardTops[0]).toBeLessThan(mobile.cardTops[1]);
  expect(mobile.cardTops[1]).toBeLessThan(mobile.cardTops[2]);
  expect(mobile.overflow).toBeLessThanOrEqual(1);
});
