# Stashh — Landing Page (Fictional Fintech)

![Playwright Tests](https://github.com/yellowyemisi/stashh-web/actions/workflows/playwright.yml/badge.svg)

A responsive landing page for **Stashh**, a fictional fintech startup designed with inspiration from the **neo-brutalist** design style.

This project highlights my ability to create modern, responsive user interfaces using semantic HTML, CSS, and JavaScript, backed by a professional-grade Playwright E2E and API testing suite.

---

## Quality Assurance & Testing

This project follows a rigorous QA lifecycle to ensure the bold "Neo-Brutalist" design does not compromise user experience or conversion paths across both desktop and mobile viewports.

- **[View Formal Test Portfolio](./TEST_PORTFOLIO.md)**: A detailed exploratory test charter covering UI/UX integrity, mobile viewport parity, and functional stability.
- **[View Bug Report Template](./.github/ISSUE_TEMPLATE/bug_report.md)**: Standardized SOP for defect reporting and tracking.
- **E2E & API Regression:** Automated via Playwright to protect critical user paths (Sign-up/Onboarding) and validate API payloads.

### 💡 Lessons Learned

- **Viewport & Element Actionability:** Discovered that top-to-bottom DOM locators (`.first()`) can hit hidden responsive navigation elements on mobile screens (`display: none`). Architected resilient locators targeting visible viewport elements (`a.btn-primary`) to maintain 100% test parity on Mobile Safari.
- **Infrastructure Resilience:** Realized that "it works on my machine" is a risk; shifting execution to GitHub Actions ensured environment parity across desktop and mobile browsers.
- **Observability:** Learned to treat Trace Viewer data, screenshots, and execution videos as essential evidence for rapid root-cause analysis.

---

## Features

- Fully responsive across Desktop, Tablet, and Mobile viewports (tested on Chromium, Firefox, WebKit, and Mobile Safari / iPhone 12).
- Modern layouts built with **Flexbox** & **CSS Grid**.
- Mobile-friendly navigation menu toggle and responsive CTAs.
- Interactive carousel with dot navigation.
- Accessible and semantic HTML structure.
- Includes additional mockup pages: **Signup, Login, Dashboard**.

---

## Automation Highlights

- **CI/CD Integration:** Automated cross-browser regression suites triggered on every push via GitHub Actions.
- **Cross-Engine Parity:** Execution matrix validating Chromium, Firefox, WebKit (Desktop Safari), and Mobile Safari.
- **Scheduled Testing:** Daily health checks at 09:00 UTC (`0 9 * * *`) to ensure continuous site availability.
- **Multi-Layer Strategy:** Navigation funnel verification (Positive), form constraint validation (Negative), UI/UX CSS hover/weight specs (Visual), and payload contract verification (API).
- **Observability:** Automated storage of Trace Viewer zips, video recordings, and failure screenshots for deep-dive debugging.

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

The "Aha!" moment was realizing that the most scalable solution wasn't fixing local hardware limitations—it was **Shifting Left.** I architected a **CI/CD pipeline using GitHub Actions** to bypass local OS constraints entirely. By moving execution to the cloud (`ubuntu-latest`), I ensured:

- **Native WebKit & Mobile Safari Parity:** Full execution capability within a modern Linux container.
- **Consistency:** Eliminating "it works on my machine" syndrome across all viewports.
- **Visibility:** Automated daily scheduled runs and push triggers ensure 24/7 visibility into site health.

### How to View Test Results

Due to the local environment constraints mentioned above, WebKit and Mobile Safari tests are best viewed via the automated pipeline:

1. Navigate to the **Actions** tab in this repository.
2. Select the latest **Playwright Tests** workflow run.
3. Under **Artifacts**, download `playwright-report` or `test-results` to view full Traces, Videos, and Screenshots.

---

_“A great QA Engineer doesn’t just find bugs; they build systems that thrive despite limitations.”_

---

## Tech Stack & Tools

### **Core Development**

- **HTML5 & CSS3:** Semantic structures with a **Neo-Brutalist** design system (utilizing Flexbox and CSS Grid).
- **JavaScript (ES6+):** Functional interactivity and DOM manipulation.

---

### **Quality Assurance & Automation**

- **Playwright:** E2E and API testing framework configured with `baseURL` and cross-browser projects (**Chromium, Firefox, WebKit, Mobile Safari**).
- **Postman & API Testing:** Schema validation, contract checks, and state sequence testing (OTP / KYC / Registration).
- **Trace Viewer & Screenshots:** Artifact capture on failure for root-cause debugging.

---

### **DevOps & CI/CD**

- **GitHub Actions:** CI pipelines executing multi-browser matrix regression suites and daily CRON health checks.
- **Artifact Management:** Retention of HTML reports, videos, and trace logs.
- **Netlify:** Continuous Deployment (CD) host for the production web application.

---

## Live Demo

[View on Netlify](https://stashh-web.netlify.app/)
