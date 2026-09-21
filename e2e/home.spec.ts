import { expect, test } from "@playwright/test";

test("renders the complete Alvara Trade homepage", async ({ page }) => {
  const runtimeErrors: string[] = [];
  page.on("console", (message) => { if (message.type() === "error") runtimeErrors.push(message.text()); });
  page.on("pageerror", (error) => runtimeErrors.push(error.message));
  await page.goto("/", { waitUntil: "domcontentloaded" });
  await page.waitForFunction(() => document.documentElement.dataset.hydrated === "true");
  await expect(page).toHaveTitle(/Alvara/);
  await expect(page.locator("body")).not.toContainText(/sharplink/i);
  await expect(page.getByRole("heading", { name: "Value Beyond Limits" })).toBeVisible();
  await expect(page.locator(".hero__quality")).toHaveCount(4);
  await expect(page.locator(".hero video")).toHaveCount(0);
  await expect(page.getByRole("heading", { name: /Built for Real Decisions/i })).toBeAttached();
  await expect(page.locator(".dashboard__metric")).toHaveCount(3);
  await expect(page.locator(".productivity__dashboard")).not.toContainText("Take-profit targets");
  await expect(page.locator(".productivity .pin-spacer")).toHaveCount(0);
  await expect(page.getByRole("heading", { name: /Analysis You Can Actually Use/i })).toBeAttached();
  await expect(page.locator(".strategy-console__sweep")).toHaveCount(1);
  await expect(page.locator(".opportunity-card__icon svg")).toHaveCount(3);
  await expect(page.locator(".coin-promo .coin-scene")).toHaveCount(1);
  await expect(page.locator(".coin-promo__visual")).not.toContainText("$ALVARA");
  await expect(page.getByRole("heading", { name: /Built to trade\. Never to take custody\./i })).toBeAttached();
  await expect(page.locator(".security-layer")).toHaveCount(3);
  await expect(page.locator(".news-card")).toHaveCount(0);
  await expect(page.getByRole("heading", { name: "Meet $ALVARA", exact: true })).toBeAttached();
  await expect(page.locator(".tokenomics")).toHaveCount(0);
  await expect(page.locator(".roadmap")).toHaveCount(0);
  await expect(page.getByRole("link", { name: /Explore the Token/i })).toHaveAttribute("href", "/en/coin");
  await expect(page.locator(".header__dashboard")).toHaveAttribute("href", /^https:\/\/t\.me\//);
  await expect(page.locator("footer")).toBeAttached();
  expect(runtimeErrors).toEqual([]);
});

test("mobile navigation and FAQ remain interactive", async ({ page, isMobile }) => {
  test.skip(!isMobile, "mobile behavior");
  await page.goto("/", { waitUntil: "domcontentloaded" });
  await page.waitForFunction(() => document.documentElement.dataset.hydrated === "true");
  await page.getByRole("button", { name: "Open menu" }).click();
  await expect(page.getByRole("button", { name: "Close menu" })).toBeVisible();
  await expect(page.locator(".mobile-menu")).toHaveCSS("background-color", "rgb(245, 245, 245)");
  await expect(page.locator("#mobile-navigation").getByRole("link", { name: "Security", exact: true })).toBeAttached();
  await page.getByRole("button", { name: "Close menu" }).click();
  const faq = page.getByRole("button", { name: /Do I need to pay to use Alvara Trade/i });
  await faq.scrollIntoViewIfNeeded();
  await faq.click();
  await expect(faq).toHaveAttribute("aria-expanded", "true");
});

test("serves and switches localized routes", async ({ page }) => {
  await page.goto("/ru", { waitUntil: "domcontentloaded" });
  await expect(page.locator("html")).toHaveAttribute("lang", "ru");
  await expect(page.getByRole("heading", { name: "Ценность без границ" })).toBeVisible();

  await page.getByRole("link", { name: "English" }).click();
  await expect(page).toHaveURL(/\/en(?:#.*)?$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(page.getByRole("heading", { name: "Value Beyond Limits" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Русский" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Українська" })).toHaveCount(0);
});

test("connects the homepage with the localized coin page", async ({ page, isMobile }) => {
  await page.goto("/en", { waitUntil: "domcontentloaded" });
  if (isMobile) {
    await page.getByRole("button", { name: "Open menu" }).click();
    await page.locator("#mobile-navigation").getByRole("link", { name: "$ALVARA", exact: true }).click();
  } else {
    await page.locator(".header__nav").getByRole("link", { name: "$ALVARA", exact: true }).click();
  }
  await expect(page).toHaveURL(/\/en\/coin$/);
  await expect(page.getByRole("heading", { name: /\$ALVARA — The token behind Alvara/i })).toBeAttached();
  await expect(page.getByRole("heading", { name: "How Alvara moves forward", exact: true })).toBeAttached();
  await expect(page.locator(".roadmap-card")).toHaveCount(9);

  await page.getByRole("link", { name: "Alvara home" }).click();
  await expect(page).toHaveURL(/\/en$/);

  await page.context().clearCookies();
  await page.goto("/coin", { waitUntil: "domcontentloaded" });
  await expect(page).toHaveURL(/\/en\/coin$/);

  await page.goto("/ru/coin", { waitUntil: "domcontentloaded" });
  await expect(page.locator("html")).toHaveAttribute("lang", "ru");
  await expect(page.getByRole("heading", { name: /\$ALVARA — токен экосистемы Alvara/i })).toBeAttached();
  await page.getByRole("link", { name: "English" }).click();
  await expect(page).toHaveURL(/\/en\/coin$/);
});

test("opens the coin page at the top after navigating from deep in the homepage", async ({ page }) => {
  await page.goto("/en", { waitUntil: "domcontentloaded" });
  await page.waitForFunction(() => document.documentElement.dataset.hydrated === "true");

  const coinLink = page.getByRole("link", { name: /Explore the Token/i });
  await coinLink.scrollIntoViewIfNeeded();
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBeGreaterThan(0);
  await coinLink.click();

  await expect(page).toHaveURL(/\/en\/coin$/);
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0);
  await expect(page.locator(".ref-hero")).toBeInViewport();
});
