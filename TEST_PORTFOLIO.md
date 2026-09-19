# Test Portfolio: Stashh Fintech Landing Page

**Project:** Stashh (Neo-Brutalist Fictional Fintech Interface)  
**Software QA Engineer:** Kate Williams  
**Repository:** https://github.com/yellowyemisi/stashh-web.git

---

## Mission Statement

Explore the Stashh landing page to identify UI discrepancies, accessibility hurdles, and functional "dead-ends" within the high-contrast neo-brutalist design framework. The primary goal is to ensure that bold aesthetics do not compromise user navigation or conversion during critical "Sign-up" and "Product Discovery" user flows.

---

## Risk-Based Test Strategy

### 1. Visual Integrity (The "Neo-Brutalist" Audit)

- **Goal:** Ensure bold borders and high-contrast drop-shadows do not overlap or obscure critical content.
- **Target:** Spacing, padding, and layout audits across resolutions (from iPhone SE up to 4K Desktop).
- **Heuristic:** _"Does the design remain functional, or does it become visual 'noise'?"_

### 2. Navigation & Connectivity

- **Goal:** Verify that all Call-to-Action (CTA) elements lead to valid endpoints (`/login`, `/signup`, `/features`).
- **Target:** Global header, sticky navigation, footer links, and primary Hero section CTAs.
- **Heuristic:** _"Is there any state or path where the user gets lost or stuck in a dead-end?"_

### 3. Infrastructure & Cross-Browser Parity

- **Goal:** Maintain 100% engine coverage (Chromium, Firefox, WebKit) despite local hardware constraints.
- **Strategy:** Transition from local execution to a Cloud-First CI pipeline to bypass legacy OS limitations.

---

## Environment & Execution Strategy

Due to macOS 12 (Monterey) limitations where Playwright v1.50+ dropped native WebKit support, this project utilizes a **Shift-Left Infrastructure** model to preserve quality without hardware bottlenecks:

- **Local Development:** Used for Chromium and Firefox test debugging and script authoring.
- **CI Execution (GitHub Actions):** Serves as the primary source of truth for WebKit. Running on `ubuntu-latest` provides the modern Linux kernel required for Playwright’s latest WebKit binaries.
- **Observability:** Every CI execution captures Playwright Trace Viewer logs and video recordings, ensuring full visual and network debugging evidence for cloud-run builds.

---

## Exploratory Log & Regression Status

| ID         | Task / Area   | Findings                                                                            | Severity | Status            |
| :--------- | :------------ | :---------------------------------------------------------------------------------- | :------- | :---------------- |
| **TC-01**  | UI Feedback   | Verified 'Get Started' and 'Sign Up' buttons feature responsive hover/focus states. | Info     | Pass              |
| **TC-02**  | Mobile View   | Brand logo overlaps the hamburger menu navigation on iPhone 12 viewports.           | High     | Fixed             |
| **TC-03**  | Accessibility | Yellow/Black high-contrast elements meet WCAG AA standards.                         | Info     | Pass              |
| **TC-101** | Funnel Path   | "Get Started" primary CTA used a dead-end dummy `#` anchor.                         | Critical | Fixed & Automated |

---

## Defect Deep Dive

### Bug Report: TC-101 — "Get Started" CTA fails to navigate to Onboarding Flow

- **Priority:** High (Blocker)
- **Status:** ✅ RESOLVED (Verified via Playwright / GitHub Actions)

#### Description

During exploratory testing, the primary "Get Started" Hero CTA was found to be non-functional, utilizing a dummy anchor tag (`#`). This blocked users from entering the registration funnel, directly impacting conversion rates.

#### Steps to Reproduce

1. Navigate to the live landing page.
2. Click the **'Get Started'** button in the Hero section.
3. Observe that the URL appends `#` without redirecting the user to the onboarding flow.

#### Automated Resolution & Verification

- **Regression Test Script:** `tests/stashh.spec.js` ➔ _Critical Path: User should be able to navigate to Sign-up_
- **Fix:** Updated HTML `href` attribute to route to `signup.html`.
- **CI/CD Evidence:** Successfully verified in GitHub Actions across Chromium, Firefox, and WebKit engines.

---

## Test Evidence & CI/CD Traceability

To maintain high transparency, every automated workflow run generates auditable execution evidence.

### Latest Execution Status

- **Status:** Passing
- **Environment:** GitHub Actions (`ubuntu-latest`)
- **Engine Parity:** 100% (Chromium, Firefox, WebKit)
- **Schedule:** Daily Health Check automated at `09:00 UTC`

### Artifact Preservation

For every passing or failing run, the following artifacts are preserved for 30 days:

1. **Playwright Trace Viewer:** A millisecond-by-millisecond execution timeline including network payloads, console logs, and DOM snapshots.
2. **Video Recordings:** Full `.mp4` visual recordings of browser interactions.
3. **HTML Reports:** Comprehensive summary of all assertions and step execution times.

> **Reviewer Tip:** Navigate to the **GitHub Actions** tab in this repository and download the `playwright-report` artifact from the latest run to inspect live trace data.

---

## Lessons Learned

- Navigating local virtualization barriers (QEMU/Colima) proved that QA success relies on environment predictability. Shifting execution to cloud-based runners was the most efficient architectural choice.
- In headless environments, visual evidence is critical. Implementing systematic artifact management (Videos/Traces) turned raw build failures into actionable engineering insights.
- High-contrast, neo-brutalist aesthetics require explicit semantic HTML and `aria-label` attributes to ensure visually heavy designs remain accessible to screen readers and keyboard navigation.
