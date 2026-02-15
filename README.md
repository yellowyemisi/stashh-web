# Stashh — Landing Page (Fictional Fintech)

![Playwright Tests](https://github.com/yellowyemisi/stashh-web/actions/workflows/playwright.yml/badge.svg)

A responsive landing page for **Stashh**, a fictional fintech startup designed with inspiration from the **neo-brutalist** design style.

This project highlights my ability to create modern, responsive user interfaces using semantic HTML, CSS, and JavaScript, backed by a professional-grade Playwright E2E testing suite.

---

## Quality Assurance & Testing

This project follows a rigorous QA lifecycle to ensure the bold "Neo-Brutalist" design does not compromise user experience.

- **[View Formal Test Plan](./TEST_PLAN.md)**: A detailed exploratory test charter covering UI/UX integrity and functional stability.
- **[View Bug Report Template](./.github/ISSUE_TEMPLATE/bug_report.md)**: Standardized SOP for defect reporting and tracking.
- **E2E Regression:** Automated via Playwright to protect critical user paths (Sign-up/Onboarding).

### 💡 Lessons Learned

- **Infrastructure Resilience:** Realized that "it works on my machine" is a risk; shifting to GitHub Actions ensured environment parity.
- **Observability:** Learned to treat Trace Viewer data as essential evidence, not just an optional tool.

---

## Features

- Fully responsive (desktop, tablet, and mobile — tested on iPhone 14 Pro)
- Modern layouts with **Flexbox** & **CSS Grid**
- Mobile-friendly navigation menu toggle
- Interactive carousel with dot navigation
- Accessible and semantic HTML structure
- Includes additional mockup pages: **Signup, Login, Dashboard**

---

## Automation Highlights

- **CI/CD Integration:** Automated regression suites triggered on every push via GitHub Actions.
- **Scheduled Testing:** Daily health checks at 09:00 UTC to ensure 24/7 uptime.
- **Multi-Layer Testing:** Navigation (Positive), form validation (Negative), and UI/UX Accessibility (Visual).
- **Observability:** Trace Viewer and Video recordings for deep-dive debugging.

---

## Environment & Troubleshooting: The WebKit Compatibility Challenge

A significant portion of this project involved overcoming architectural hurdles to maintain **100% browser engine parity** (Chromium, Firefox, and WebKit) while developing on a legacy **macOS 12 (Monterey)** environment.

### The Problem

Modern Playwright releases (v1.50+) dropped support for WebKit binaries on macOS 12. Running `npx playwright install webkit` locally resulted in a broken driver, making local cross-browser validation impossible for WebKit.

### Explored Architectures & Hurdles

Before "shifting left," I explored several local workarounds to bridge the compatibility gap. Each attempt provided deep insights into virtualization and dependency management:

| Approach                 | Technology         | Result    | Technical Blocker                                                                                                          |
| :----------------------- | :----------------- | :-------- | :------------------------------------------------------------------------------------------------------------------------- |
| **Downgrade**            | Playwright v1.45   | ❌ Failed | Incompatibility with modern test features and latest Playwright APIs.                                                      |
| **Containerization**     | Docker + Colima    | ❌ Failed | macOS 12’s `virtualization.framework` is too old for modern Linux-based WebKit images.                                     |
| **Emulation**            | QEMU               | ❌ Failed | **Dependency Loop:** QEMU required modern Python versions; compiling from source failed due to missing legacy C libraries. |
| **Alternative Runtimes** | OrbStack / Rancher | ❌ Failed | Kernel-level limitations on macOS 12 prevented the virtualization engines from starting.                                   |

### The Solution: Cloud-First Strategy

The "Aha!" moment was realizing that the most scalable solution wasn't fixing the local hardware—it was **Shifting Left.** I architected a **CI/CD pipeline using GitHub Actions** to bypass local hardware limitations entirely. By moving execution to the cloud (Ubuntu-latest), I ensured:

- **Native WebKit Support:** Full compatibility within a modern Linux environment.
- **Consistency:** Eliminating "it works on my machine" syndrome.
- **Visibility:** Automated daily runs and push-triggers ensure 24/7 visibility into site health.

### How to View Test Results

Due to the local environment constraints mentioned above, WebKit tests are best viewed via the automated pipeline:

1. Navigate to the **Actions** tab in this repository.
2. Select the latest **Playwright Tests** workflow run.
3. Under **Artifacts**, download the `playwright-report` to view full Traces and Videos of the execution.

---

_“A great QA Engineer doesn’t just find bugs; they build systems that thrive despite limitations.”_

---

## Tech Stack & Tools

### **Core Development**

- **HTML5 & CSS3:** Semantic structures with a **Neo-Brutalist** design system (utilizing Flexbox and CSS Grid).
- **JavaScript (ES6+):** Functional interactivity and DOM manipulation.

---

### **Quality Assurance & Automation**

- **Playwright:** End-to-End (E2E) testing framework for cross-browser verification across **Chromium, Firefox, and WebKit**.
- **Trace Viewer:** For deep-dive debugging of asynchronous test failures.

---

### **DevOps & CI/CD**

- **GitHub Actions:** Automated CI pipelines for regression testing suites and daily scheduled health checks.
- **Artifact Management:** Systematic storage and retention of critical test evidence, including HTML reports, videos, and trace logs.
- **Netlify:** Continuous Deployment (CD) for the live production environment.

---

## Live Demo

[View on Netlify](https://stashh-web.netlify.app/)

---

## Getting Started & Running Tests

To explore the codebase and execute the automated test suite locally, follow these steps:

### **1. Prerequisites**

Ensure you have [Node.js](https://nodejs.org/) installed (v16 or higher recommended).

### **2. Installation**

Clone the repository and install the necessary dependencies:

```bash
git clone https://github.com/yellowyemisi/stashh-web.git
cd stashh-web
npm install
npx playwright install

```

### **3. Executing Tests**

You can run the full suite or specific browser engines using the following commands:

- **Run all tests (Headless):** `npx playwright test`
- **Run tests with UI Mode:** `npx playwright test --ui`
- **Run tests on a specific browser:** `npx playwright test --project=webkit`

> [!IMPORTANT]  
> **macOS 12 (Monterey) Users:** Due to binary deprecation, WebKit tests may fail locally. It is recommended to rely on the **GitHub Actions CI pipeline** for WebKit validation (see the "Environment & Troubleshooting" section above).

### **4. Generating Reports**

After the tests complete, you can view the detailed HTML report: npx playwright show-report
