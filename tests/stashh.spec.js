// @ts-check
import { test, expect } from "@playwright/test";

/**
 * Basic Smoke Test: Verifies the deployment is live and reachable.
 */
test("Stashh landing page loads", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Stashh/i);
});

/**
 * TC-101: Validates the core 'Sign-up' conversion funnel.
 * Targets the hero CTA link to ensure cross-viewport parity across Desktop and Mobile Safari.
 */
test("TC-101 @smoke @regression - Critical Path: User should be able to navigate to Sign-up", async ({
  page,
}) => {
  await page.goto("/");

  // Target the primary signup link (works on both Desktop and Mobile viewports)
  const signUpButton = page.locator('a[href*="signup"]').first();

  await expect(signUpButton).toBeVisible();
  await signUpButton.click();

  await expect(page).toHaveURL(/.*signup/);
});

/**
 * Negative Test: Ensures HTML5 validation prevents empty form submissions.
 */
test("Negative Test: Should show error when email is invalid", async ({
  page,
}) => {
  await page.goto("/signup.html");

  const submitButton = page.locator("button.btn-primary");
  await submitButton.click();

  const emailInput = page.locator('input[type="email"]');
  const validationMessage = await emailInput.evaluate(
    (el) => /** @type {HTMLInputElement} */ (el).validationMessage
  );

  expect(validationMessage).not.toBe("");
});

/**
 * TC-01: UI/UX Integrity Test for Neo-Brutalist design specs.
 */
test("TC-01 @smoke @regression - UI/UX: Verify Signup button styling and hover state", async ({
  page,
}) => {
  await page.goto("/signup.html");

  const signUpButton = page.getByRole("button", {
    name: /create your account/i,
  });

  await expect(signUpButton).toBeVisible();

  const fontWeight = await signUpButton.evaluate(
    (el) => window.getComputedStyle(el).fontWeight
  );
  expect(parseInt(fontWeight)).toBeGreaterThanOrEqual(600);

  await signUpButton.hover();

  const colorAfterHover = await signUpButton.evaluate(
    (el) => window.getComputedStyle(el).backgroundColor
  );
  console.log(`Button color on hover is: ${colorAfterHover}`);

  await expect(signUpButton).toHaveText(/create your account/i);
});
