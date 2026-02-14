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

### 3. Form Accessibility (The "Conversion" Path)

- **Goal:** Validate input field states and error handling.
- **Target:** Sign-up form validation and keyboard focus.
- **Heuristic:** "Does the system guide the user to fix errors, or does it simply fail?"

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
**Status:** ✅ RESOLVED (Verified via Playwright)

### **Description**

During exploratory testing, the primary "Get Started" button was found to be non-functional, using a dummy anchor tag (`#`). This prevented users from entering the registration funnel, directly impacting conversion rates.

### **Steps to Reproduce**

1. Navigate to `https://stashh-web.netlify.app/`
2. Click the **'Get Started'** button in the Hero section.
3. Observe that the URL appends `#` and remains on the landing page.

### **Expected Result**

The user should be redirected to `signup.html`.

### **Automated Verification**

- **Regression Test:** `tests/stashh.spec.js` -> _Critical Path: User should be able to navigate to Sign-up_
- **Resolution:** Updated HTML `href` to `signup.html`.
- **CI/CD Evidence:** Successfully verified in GitHub Actions (WebKit engine).

---

## Tooling & Infrastructure

- **Manual Testing:** Chrome DevTools for responsive emulation and DOM inspection.
- **Automation:** **Playwright (JavaScript)** for E2E regression and UI audit.
- **CI/CD:** **GitHub Actions** with daily scheduled runs (09:00 UTC).
- **Reporting:** Playwright Trace Viewer and Video Artifacts for root-cause analysis.
