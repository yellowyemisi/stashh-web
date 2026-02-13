Exploratory Test Charter: Stashh Fintech Landing Page
Project: Stashh (Neo-Brutalist Fintech Interface)

Tester: [Your Name]

Focus: UI/UX Integrity, Functional Stability, and Cross-Platform Responsiveness.

Mission Statement
Explore the Stashh landing page to identify UI discrepancies, accessibility hurdles, and functional "dead-ends" within the neo-brutalist design framework. Ensure that the high-contrast aesthetic does not compromise the user's ability to navigate the critical "Sign-up" and "Product Discovery" paths.

Risk-Based Test Areas

1. Visual Integrity (The "Neo-Brutalist" Audit)
   The Goal: Ensure the bold borders and high-contrast shadows don't overlap or hide content.

Target: Check element spacing on small screens (iPhone SE) vs. large screens (Desktop).

Heuristic: "Does the design remain functional, or does it become 'noise'?"

2. Navigation & Connectivity
   The Goal: Verify all Call-to-Action (CTA) buttons lead to the correct sub-pages (Login, Signup, Features).

Target: All header and footer links.

Heuristic: "Is there a way for the user to get 'lost' or stuck on a page without a back button?"

3. Form Accessibility (The "Conversion" Path)
   The Goal: Test the initial inputs on the Signup flow.

Target: Input field focus states and error messaging.

Heuristic: "If I enter garbage data, does the system help me fix it, or does it just fail?"

Exploratory Log (Example Entries)
IDTask/AreaFindingsSeverityStatus
TC-01Desktop NavigationSignup button in header is missing a hover state; user lacks feedback.Low📝 Logged
TC-02Mobile ViewportOn iPhone 12, the 'Stashh' logo overlaps the hamburger menu icon.High✅ Fixed
TC-03Color ContrastHigh-contrast yellow/black text on 'Learn More' meets AA accessibility standards.Info🌟 Pass

Tools Used
Manual: Chrome DevTools (Device Emulation).

Automation: Playwright (for regression of found issues).

Documentation: Markdown & Git.
