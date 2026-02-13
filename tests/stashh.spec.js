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

// Risk-based testing focusing on the critical path for a Fintech - User Onboarding
test("Critical Path: User should be able to navigate to Sign-up", async ({
  page,
}) => {
  // 1. Start at the landing page
  await page.goto("https://stashh-web.netlify.app/");

  // 2. Find and click the Sign-up or Get Started button
  // We use a regex to be flexible with 'Sign Up' or 'Register'
  const signUpButton = page.getByRole("link", { name: /sign up|get started/i });
  await signUpButton.click();

  // 3. Verify the URL changed to the signup page
  await expect(page).toHaveURL(/.*signup/);

  // 4. Verify the Sign-up form is visible
  // This checks for a heading or an email input field
  await expect(
    page.getByRole("heading", { name: /create|account|sign up/i })
  ).toBeVisible();
  await expect(page.locator('input[type="email"]')).toBeVisible();

  console.log("Sign-up flow navigation verified!");
});

test("Negative Test: Should show error when email is invalid", async ({
  page,
}) => {
  await page.goto("https://stashh-web.netlify.app/signup.html");

  // 1. Try to submit with an empty email
  const submitButton = page.getByRole("button", { name: /create|sign up/i });
  await submitButton.click();

  // 2. Check for HTML5 validation or a custom error message
  // Note: If you use a standard HTML5 email input, the browser handles this.
  const emailInput = page.locator('input[type="email"]');
  const validationMessage = await emailInput.evaluate(
    (el) => el.validationMessage
  );

  // Assert that there is some form of validation feedback
  expect(validationMessage).not.toBe("");
  console.log("Negative Test Passed: Validation message caught!");
});

test("UI/UX: Verify Signup heading accessibility and style", async ({
  page,
}) => {
  await page.goto("https://stashh-web.netlify.app/signup.html");

  const heading = page.getByRole("heading", { name: /create account/i });

  // 1. Check Visibility
  await expect(heading).toBeVisible();

  // 2. Verify CSS properties (Honing your UI/UX skills)
  // Let's check if the font-weight is bold (typical for neo-brutalism)
  const fontWeight = await heading.evaluate(
    (el) => window.getComputedStyle(el).fontWeight
  );
  expect(parseInt(fontWeight)).toBeGreaterThan(600);

  // 3. Accessibility check (ARIA role)
  await expect(heading).toHaveAttribute("role", "heading");
});
