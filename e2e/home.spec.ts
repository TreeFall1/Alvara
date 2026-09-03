import { expect, test } from "@playwright/test";

test("renders the complete Alvara Trade homepage", async ({ page }) => {
  const runtimeErrors: string[] = [];
  page.on("console", (message) => { if (message.type() === "error") runtimeErrors.push(message.text()); });
  page.on("pageerror", (error) => runtimeErrors.push(error.message));
  await page.goto("/", { waitUntil: "domcontentloaded" });
  await page.waitForFunction(() => document.documentElement.dataset.hydrated === "true");
  await expect(page).toHaveTitle(/Alvara/);
  await expect(page.locator("body")).not.toContainText(/sharplink/i);
  await expect(page.getByRole("heading", { name: /Trade Like the Top 1% of Traders with Alvara AI/i })).toBeVisible();
  await expect(page.getByRole("heading", { name: /Proof in the Numbers/i })).toBeAttached();
  await expect(page.getByRole("heading", { name: /Everything You Need to Trade Smarter/i })).toBeAttached();
  await expect(page.getByRole("link", { name: /Launch Alvara Trade in Telegram/i })).toHaveAttribute("href", /^https:\/\/t\.me\//);
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
  const faq = page.getByRole("button", { name: /Do I need to pay to use Alvara Trade/i });
  await faq.scrollIntoViewIfNeeded();
  await faq.click();
  await expect(faq).toHaveAttribute("aria-expanded", "true");
});
