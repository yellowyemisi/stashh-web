// @ts-check
import { defineConfig, devices } from "@playwright/test";

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: "./tests",
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if test.only is left in source code */
  forbidOnly: !!process.env.CI,
  /* Retry twice on CI to handle potential network flakiness */
  retries: process.env.CI ? 2 : 0,
  /* Parallel workers for execution speed */
  workers: process.env.CI ? 2 : undefined,
  /* Reporters: HTML report for artifact download, List for real-time CI logs */
  reporter: [["html", { open: "never" }], ["list"]],

  /* Shared settings across all projects */
  use: {
    /* Base URL for your deployed staging/production or local server */
    // baseURL: "https://your-stashh-url.netlify.app",

    /* Record traces on failure for cloud debugging */
    trace: "retain-on-failure",

    /* Record video for visual verification */
    video: "on",

    /* Default viewport size */
    viewport: { width: 1280, height: 720 },

    /* Take screenshot on failure */
    screenshot: "only-on-failure",
  },

  /* Configure projects for multi-engine browser parity */
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },

    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },

    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },

    /* Mobile viewports mentioned in your portfolio exploratory log */
    {
      name: "Mobile Safari",
      use: { ...devices["iPhone 12"] },
    },
  ],
});
