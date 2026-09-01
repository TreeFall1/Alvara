import { expect, test } from "@playwright/test";

test("captures the principal animation checkpoints", async ({ page }, testInfo) => {
  test.skip(!["desktop-1440", "mobile-small"].includes(testInfo.project.name), "visual checkpoints");
  await page.goto("/", { waitUntil: "domcontentloaded" });
  await page.waitForFunction(() => document.documentElement.dataset.hydrated === "true");

  const checkpoints = [
    ["hero", "#home", 0],
    ["dashboard", ".productivity__stage", testInfo.project.name === "desktop-1440" ? 0.9 : 0],
    ["stack", ".stack__body", testInfo.project.name === "desktop-1440" ? 1.45 : 1.2],
    ["opportunity", "#opportunity", 0.18],
    ["footer", "footer", 0],
  ] as const;

  for (const [name, selector, viewportOffset] of checkpoints) {
    const element = page.locator(selector);
    const top = await element.evaluate((node) => (node as HTMLElement).getBoundingClientRect().top + window.scrollY);
    await page.evaluate((y) => window.scrollTo(0, y), top + viewportOffset * page.viewportSize()!.height);
    await page.waitForTimeout(650);
    await expect(element).toBeAttached();
    await page.screenshot({ path: testInfo.outputPath(`${name}.png`), animations: "disabled" });
  }
});
