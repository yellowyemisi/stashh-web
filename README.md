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
