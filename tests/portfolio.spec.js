const { test, expect } = require("@playwright/test");

test("Verify WebKit works in the Cloud", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await expect(page).toHaveTitle(/Playwright/);

  // Take a screenshot so you can see it worked!
  await page.screenshot({ path: "screenshot.png" });
});
