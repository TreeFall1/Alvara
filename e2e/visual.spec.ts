import { expect, test } from "@playwright/test";

test("captures the principal animation checkpoints", async ({ page }, testInfo) => {
  test.skip(!["desktop-1440", "mobile-small"].includes(testInfo.project.name), "visual checkpoints");
  const runtimeErrors: string[] = [];
  page.on("console", (message) => { if (message.type() === "error") runtimeErrors.push(message.text()); });
  page.on("pageerror", (error) => runtimeErrors.push(error.message));
  await page.goto("/", { waitUntil: "domcontentloaded" });
  await page.waitForFunction(() => document.documentElement.dataset.hydrated === "true");

  const checkpoints = [
    ["hero", "#home", 0],
    ["dashboard", ".productivity__stage", testInfo.project.name === "desktop-1440" ? 0.9 : 0],
    ["stack", ".stack__body", testInfo.project.name === "desktop-1440" ? 1.45 : 1.2],
    ["opportunity", "#how-it-works", 0.18],
    ["security", "#security", 0],
    ["footer", "footer", 0],
  ] as const;

  for (const [name, selector, viewportOffset] of checkpoints) {
    const element = page.locator(selector);
    const top = await element.evaluate((node) => (node as HTMLElement).getBoundingClientRect().top + window.scrollY);
    await page.evaluate((y) => window.scrollTo(0, y), top + viewportOffset * page.viewportSize()!.height);
    if (name === "stack") await expect(page.locator(".stack__compass")).toHaveJSProperty("readyState", 4, { timeout: 20_000 });
    await page.waitForTimeout(650);
    await expect(element).toBeAttached();
    await page.screenshot({ path: testInfo.outputPath(`${name}.png`), animations: "disabled" });
    if (name === "stack") {
      const video = page.locator(".stack__compass");
      await video.scrollIntoViewIfNeeded();
      await video.evaluate((node) => (node as HTMLVideoElement).play());
      const before = await video.evaluate((node) => (node as HTMLVideoElement).currentTime);
      await page.waitForTimeout(800);
      const after = await video.evaluate((node) => (node as HTMLVideoElement).currentTime);
      expect(after, "The compass video must play").toBeGreaterThan(before);
    }
  }
  expect(runtimeErrors).toEqual([]);
});
