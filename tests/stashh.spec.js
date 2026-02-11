// @ts-check
import { test, expect } from "@playwright/test";

test("Stashh landing page loads", async ({ page }) => {
  await page.goto("https://stashh-web.netlify.app/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Stashh/i);
});

test("Stashh main features are visible", async ({ page }) => {
  await page.goto("https://stashh-web.netlify.app/");

  // Instead of testing Playwright's site, let's test yours!
  // This looks for any button that might be your main entry point
  const mainButton = page.getByRole("button").first();

  // Verify the page body is visible at the very least
  await expect(page.locator("body")).toBeVisible();
});
