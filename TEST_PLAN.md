# Testing Portfolio: Stashh Fintech Landing Page

**Project:** Stashh (Neo-Brutalist Fictional Fintech Interface)  
**Tester:** Kate Williams  
**Repository:** https://github.com/yellowyemisi/stashh-web.git

---

## Mission Statement

Explore the Stashh landing page to identify UI discrepancies, accessibility hurdles, and functional "dead-ends" within the neo-brutalist design framework. The objective is to ensure that high-contrast aesthetics do not compromise user navigation during critical "Sign-up" and "Product Discovery" paths.

---

## Risk-Based Test Strategy

### 1. Visual Integrity (The "Neo-Brutalist" Audit)

- **Goal:** Ensure bold borders and high-contrast shadows do not overlap or obscure content.
- **Target:** Spacing audits on iPhone SE vs. 4K Desktop resolutions.
- **Heuristic:** "Does the design remain functional, or does it become 'noise'?"

### 2. Navigation & Connectivity

- **Goal:** Verify all Call-to-Action (CTA) buttons lead to valid endpoints (Login, Signup, Features).
- **Target:** Global header/footer and primary "Hero" buttons.
- **Heuristic:** "Is there a way for the user to get 'lost' or stuck?"

### 3. Infrastructure & Cross-Browser Parity

- **Goal:** Ensure 100% engine coverage (Chromium, Firefox, WebKit) despite local hardware constraints.
- **Strategy:** Transition from local execution to a **Cloud-First CI pipeline** to bypass legacy OS limitations.

---

=======

## Environment & Execution Strategy

Due to **macOS 12 (Monterey)** limitations where Playwright v1.50+ dropped native WebKit support, this project utilizes a **Shift-Left Infrastructure** model to ensure quality is not compromised by local hardware.

- **Local Development:** Utilized for Chromium/Firefox debugging and script authoring.
- **CI Execution (GitHub Actions):** Serves as the primary "Source of Truth" for WebKit. Running on `ubuntu-latest` provides the modern Linux kernel required for Playwright’s latest WebKit binaries.
- **Observability:** Every CI failure triggers a **Trace Viewer** capture and **Video Recording**. This ensures that even though tests run in the cloud, full debugging evidence is preserved as artifacts.

---

## Exploratory Log & Regression Status

| ID         | Task/Area     | Findings                                                               | Severity     | Status                   |
| :--------- | :------------ | :--------------------------------------------------------------------- | :----------- | :----------------------- |
| **TC-01**  | UI Feedback   | Verified 'Get Started' and 'Sign Up' buttons have active hover states. | Info         | 🌟 Pass                  |
| **TC-02**  | Mobile View   | Logo overlaps hamburger menu on iPhone 12.                             | High         | ✅ Fixed                 |
| **TC-03**  | Accessibility | Yellow/Black contrast ratio meets WCAG AA standards.                   | Info         | 🌟 Pass                  |
| **TC-101** | **Funnel**    | **"Get Started" CTA used dummy '#' anchor (Blocker).**                 | **Critical** | **✅ Fixed & Automated** |

---

## Detailed Bug Report: TC-101

**Title:** "Get Started" CTA fails to navigate to Onboarding Flow  
**Priority:** High (Blocker)  
**Status:** ✅ RESOLVED (Verified via Playwright/GitHub Actions)

### **Description**

During exploratory testing, the primary "Get Started" button was found to be non-functional, using a dummy anchor tag (`#`). This prevented users from entering the registration funnel, directly impacting conversion rates.

### **Steps to Reproduce**

1. Navigate to the live site.
2. Click the **'Get Started'** button in the Hero section.
3. Observe that the URL appends `#` and the page does not redirect.

### **Automated Verification**

- **Regression Test:** `tests/stashh.spec.js` -> _Critical Path: User should be able to navigate to Sign-up_
- **Resolution:** Updated HTML `href` to `signup.html`.
- **CI/CD Evidence:** Successfully verified in **GitHub Actions** across Chromium, Firefox, and WebKit engines.

---

## Lessons Learned & Technical Resilience

> > > > > > > 8467927 (chore: implement cloud-first QA architecture and cross-browser CI)

- **Infrastructure as Code:** Facing local virtualization failures (QEMU/Colima) highlighted that QA success is dependent on environment reliability. Shifting to a cloud-based runner was the most efficient architectural pivot.
- **Traceability over Logs:** In a headless environment, visual evidence is key. Implementing systematic artifact management (Videos/Traces) turned "failing builds" into "actionable data."
- **Design vs. Function:** Neo-brutalist designs are visually heavy; testing proved that high-contrast elements must be backed by robust aria-labels and semantic HTML to remain accessible to all users.
