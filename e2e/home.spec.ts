import { expect, test } from "@playwright/test";

test("renders the complete homepage and keeps CTAs local", async ({ page }) => {
  const runtimeErrors: string[] = [];
  page.on("console", (message) => { if (message.type() === "error") runtimeErrors.push(message.text()); });
  page.on("pageerror", (error) => runtimeErrors.push(error.message));
  await page.goto("/", { waitUntil: "domcontentloaded" });
  await page.waitForFunction(() => document.documentElement.dataset.hydrated === "true");
  await expect(page.getByRole("heading", { name: /Ethereum with an Edge/i })).toBeVisible();
  await expect(page.getByRole("heading", { name: /Pioneering Productivity/i })).toBeAttached();
  await expect(page.getByRole("heading", { name: /The Stack for Stacking Ethereum/i })).toBeAttached();
  const url = page.url();
  await page.getByRole("button", { name: /Explore the Dashboard/i }).click();
  expect(page.url()).toBe(url);
  await expect(page.locator("footer")).toBeAttached();
  expect(runtimeErrors).toEqual([]);
});

test("mobile navigation and FAQ remain interactive", async ({ page, isMobile }) => {
  test.skip(!isMobile, "mobile behavior");
  await page.goto("/", { waitUntil: "domcontentloaded" });
  await page.waitForFunction(() => document.documentElement.dataset.hydrated === "true");
  await page.getByRole("button", { name: "Open menu" }).click();
  await expect(page.getByRole("button", { name: "Close menu" })).toBeVisible();
  await page.getByRole("button", { name: "Close menu" }).click();
  const faq = page.getByRole("button", { name: /Where is Sharplink listed/i });
  await faq.scrollIntoViewIfNeeded();
  await faq.click();
  await expect(faq).toHaveAttribute("aria-expanded", "true");
});
