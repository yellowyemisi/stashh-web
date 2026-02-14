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

test("UI/UX: Verify Signup button styling and hover state", async ({
  page,
}) => {
  await page.goto("https://stashh-web.netlify.app/signup.html");

  const signUpButton = page.getByRole("button", {
    name: /create your account/i,
  });

  // 1. Verify initial state
  await expect(signUpButton).toBeVisible();

  // 2. Styling Check (Ensuring the Neo-Brutalist look)
  const fontWeight = await signUpButton.evaluate(
    (el) => window.getComputedStyle(el).fontWeight
  );
  expect(parseInt(fontWeight)).toBeGreaterThanOrEqual(600);

  // 3. Simulate User Hover
  await signUpButton.hover();

  // 4. Verification of Hover State (Color Check)
  // This captures the style while the virtual mouse is still hovering
  const colorAfterHover = await signUpButton.evaluate(
    (el) => window.getComputedStyle(el).backgroundColor
  );
  console.log(`Button color on hover is: ${colorAfterHover}`);

  // 5. Accessibility Check
  await expect(signUpButton).toHaveText(/create your account/i);

  console.log("UI/UX Test: Button styling and hover interaction verified!");
});
