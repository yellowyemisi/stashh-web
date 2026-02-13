// @ts-check
import { test, expect } from "@playwright/test";

// 1. Basic Load Test
test("Stashh landing page loads", async ({ page }) => {
  await page.goto("https://stashh-web.netlify.app/");
  await expect(page).toHaveTitle(/Stashh/i);
});

// 2. Navigation Test
test("Critical Path: User should be able to navigate to Sign-up", async ({
  page,
}) => {
  await page.goto("https://stashh-web.netlify.app/");
  const signUpButton = page.getByRole("link", { name: /sign up|get started/i });
  await signUpButton.click();
  await expect(page).toHaveURL(/.*signup/);
});

// 3. Negative Test
test("Negative Test: Should show error when email is invalid", async ({
  page,
}) => {
  await page.goto("https://stashh-web.netlify.app/signup.html");
  const submitButton = page.locator("button.btn-primary");
  await submitButton.click();
  const emailInput = page.locator('input[type="email"]');
  const validationMessage = await emailInput.evaluate(
    (el) => el.validationMessage
  );
  expect(validationMessage).not.toBe("");
});

// 4.
test("UI/UX: Verify Signup heading accessibility and style", async ({
  page,
}) => {
  await page.goto("https://stashh-web.netlify.app/signup.html");
  const heading = page.getByRole("heading").first();
  await expect(heading).toBeVisible();
  const fontWeight = await heading.evaluate(
    (el) => window.getComputedStyle(el).fontWeight
  );
  expect(parseInt(fontWeight)).toBeGreaterThanOrEqual(600);
});
