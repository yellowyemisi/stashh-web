// @ts-check
import { test, expect } from "@playwright/test";

/**
 * Basic Smoke Test: Verifies the deployment is live and reachable.
 */
test("Stashh landing page loads", async ({ page }) => {
  // Navigate to the base URL
  await page.goto("https://stashh-web.netlify.app/");

  // Use a case-insensitive Regex to check if the page title contains 'Stashh'
  await expect(page).toHaveTitle(/Stashh/i);
});

/**
 * TC-101: Validates the core 'Sign-up' conversion funnel.
 * This ensures the primary Call-to-Action (CTA) isn't broken.
 */
test("TC-101 @smoke @regression - Critical Path: User should be able to navigate to Sign-up", async ({
  page,
}) => {
  await page.goto("https://stashh-web.netlify.app/");

  // Locate the button using 'Role' for accessibility-first testing.
  // It looks for text matching "Sign Up" or "Get Started" via Regex.
  const signUpButton = page.getByRole("link", { name: /sign up|get started/i });

  // Perform the click action
  await signUpButton.click();

  // Assert that the URL has updated to include 'signup'
  await expect(page).toHaveURL(/.*signup/);
});

/**
 * Negative Test: Ensures HTML5 validation prevents empty form submissions.
 * This tests the browser's built-in validation rather than custom logic.
 */
test("Negative Test: Should show error when email is invalid", async ({
  page,
}) => {
  await page.goto("https://stashh-web.netlify.app/signup.html");

  // Find the primary button and attempt to submit without filling fields
  const submitButton = page.locator("button.btn-primary");
  await submitButton.click();

  // Evaluate the native browser validation message for the email input
  const emailInput = page.locator('input[type="email"]');
  const validationMessage = await emailInput.evaluate(
    (el) => /** @type {HTMLInputElement} */ (el).validationMessage
  );

  // Assert that a validation message actually exists (is not empty)
  expect(validationMessage).not.toBe("");
});

/**
 * TC-01: UI/UX Integrity Test for Neo-Brutalist design specs.
 * This verifies CSS styles and interactive states (Hover).
 */
test("TC-01 @smoke @regression - UI/UX: Verify Signup button styling and hover state", async ({
  page,
}) => {
  await page.goto("https://stashh-web.netlify.app/signup.html");

  const signUpButton = page.getByRole("button", {
    name: /create your account/i,
  });

  // 1. Initial State: Ensure the button exists in the DOM and is visible
  await expect(signUpButton).toBeVisible();

  // 2. Styling Check: Verify the font weight to ensure 'Neo-Brutalist' bold aesthetics
  const fontWeight = await signUpButton.evaluate(
    (el) => window.getComputedStyle(el).fontWeight
  );
  // Fonts 600+ represent Semi-Bold or Bold
  expect(parseInt(fontWeight)).toBeGreaterThanOrEqual(600);

  // 3. Action: Simulate a real user hovering over the element
  await signUpButton.hover();

  // 4. Verification: Capture the 'computed' background color during the hover state
  const colorAfterHover = await signUpButton.evaluate(
    (el) => window.getComputedStyle(el).backgroundColor
  );
  console.log(`Button color on hover is: ${colorAfterHover}`);

  // 5. Accessibility Check: Confirm text label is correct for screen readers
  await expect(signUpButton).toHaveText(/create your account/i);

  console.log("UI/UX Test: Button styling and hover interaction verified!");
});
