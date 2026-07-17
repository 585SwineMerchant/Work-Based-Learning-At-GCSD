# GCSD Culinary Pathway Staged Website Revision Handoff

Date: 2026-07-14
Branch: codex-staged-website-first-pass
Checkpoint commit: 995c6de Revise staged Culinary Pathway website

## Reader-Facing Changes Completed

- Reframed the staged site around the existing GCSD Culinary Arts program instead of implying the whole program has not launched.
- Rebuilt the Explore sequence in the requested order: overview, courses, Gateways/Passport, The Cottage, leadership/Kitchen Management, credentials/college credit/graduation, senior external WBL, employers/community partners, and accountability.
- Added Previous, Next, and Explore Overview controls to every Explore page.
- Rebuilt Program Resources as a task-oriented hub with role paths and resource availability states.
- Replaced student, family, and employer resource pages with audience-specific guidance and explicit public/restricted boundaries.
- Removed WEB-18 from public navigation and replaced the page itself with a public boundary notice; the file remains in the repository.
- Simplified Contact, Accessibility, Privacy, and FAQ pages for public use.
- Removed public metadata blocks, internal document-control commentary, repeated status disclaimers, and inaccurate Cottage/Kitchen Management claims.

## Exact Files Changed

- pathway-documents/work-package-2-website/staging-pages/GCSD_CulinaryPathway_WEB-02_Home-Page_v2.0_2026-07-14.html
- pathway-documents/work-package-2-website/staging-pages/GCSD_CulinaryPathway_WEB-03_Pathway-at-a-Glance_v2.0_2026-07-14.html
- pathway-documents/work-package-2-website/staging-pages/GCSD_CulinaryPathway_WEB-04_Six-Gateways-Culinary-Passport_v2.0_2026-07-14.html
- pathway-documents/work-package-2-website/staging-pages/GCSD_CulinaryPathway_WEB-05_Courses-Learning-Environments_v2.0_2026-07-14.html
- pathway-documents/work-package-2-website/staging-pages/GCSD_CulinaryPathway_WEB-06_The-Cottage_v2.0_2026-07-14.html
- pathway-documents/work-package-2-website/staging-pages/GCSD_CulinaryPathway_WEB-07_Leadership-Kitchen-Management_v2.0_2026-07-14.html
- pathway-documents/work-package-2-website/staging-pages/GCSD_CulinaryPathway_WEB-08_External-Work-Based-Learning_v2.0_2026-07-14.html
- pathway-documents/work-package-2-website/staging-pages/GCSD_CulinaryPathway_WEB-09_Students-Families_v2.0_2026-07-14.html
- pathway-documents/work-package-2-website/staging-pages/GCSD_CulinaryPathway_WEB-10_Employer-Community-Partners_v2.0_2026-07-14.html
- pathway-documents/work-package-2-website/staging-pages/GCSD_CulinaryPathway_WEB-11_Credentials-Recognition_v2.0_2026-07-14.html
- pathway-documents/work-package-2-website/staging-pages/GCSD_CulinaryPathway_WEB-12_Results-Accountability_v2.0_2026-07-14.html
- pathway-documents/work-package-2-website/staging-pages/GCSD_CulinaryPathway_WEB-13_Contact-Help-Concerns_v2.0_2026-07-14.html
- pathway-documents/work-package-2-website/staging-pages/GCSD_CulinaryPathway_WEB-14_Program-Resources_v1.0_2026-07-14.html
- pathway-documents/work-package-2-website/staging-pages/GCSD_CulinaryPathway_WEB-15_Student-Resources_v1.0_2026-07-14.html
- pathway-documents/work-package-2-website/staging-pages/GCSD_CulinaryPathway_WEB-16_Family-Resources_v1.0_2026-07-14.html
- pathway-documents/work-package-2-website/staging-pages/GCSD_CulinaryPathway_WEB-17_Employer-Mentor-Resources_v1.0_2026-07-14.html
- pathway-documents/work-package-2-website/staging-pages/GCSD_CulinaryPathway_WEB-18_Teacher-Staff-Resources_v1.0_2026-07-14.html
- pathway-documents/work-package-2-website/staging-pages/GCSD_CulinaryPathway_WEB-20_Accessibility-Statement_v2.0_2026-07-14.html
- pathway-documents/work-package-2-website/staging-pages/GCSD_CulinaryPathway_WEB-21_Privacy-Records-Notice_v2.0_2026-07-14.html
- pathway-documents/work-package-2-website/staging-pages/GCSD_CulinaryPathway_WEB-23_FAQ-Partial_v2.0_2026-07-14.html

## Validation Performed

- Static validation of all 20 staged pages: passed.
- Local link validation: passed; no broken local links or dead `href="#"` controls.
- Heading/landmark validation: passed; each page has one H1 and required header/main/footer landmarks.
- Duplicate ID check: passed.
- Explore sequence validation: passed for Previous, Next, and Explore Overview controls.
- Public-language scan: passed for visible remnants of Work Package, GOV-, CUR-, PA-, About This Page, read before citing, proposed name, not launched, not currently offered, not currently active, not active or authorized, and proposed course.
- WEB-18 public navigation check: passed; only WEB-18 references itself.
- Rendered browser validation from repository-root preview with shared stylesheet loaded: 40 checks passed across desktop 1366x900 and mobile 390x844.
- Mobile menu behavior: passed; menu opens, Escape closes it, and focus returns to the menu button.
- Representative screenshots inspected: home desktop, resources desktop, senior WBL mobile, FAQ mobile.
- `git diff --check`: passed; Git reported only line-ending normalization warnings.

## Intentionally Conservative Statements

- Kitchen Management is described as a leadership bridge that continues culinary work, but exact title, credit, schedule, grade placement, and implementation details remain for Jason/Corey confirmation.
- The Cottage is described as the existing student-based enterprise, but districtwide versus Arcadia/Olympia-specific naming and scope remain for confirmation.
- MCC dual-enrollment equivalencies are not published.
- Portrait of a Graduate language is not mapped or invented.
- Senior external WBL uses the 300-hour/10-hour-per-week planning benchmark only as a draft model; calendar, staffing, transportation, legal/insurance, and records workflow remain unresolved.
- Resource pages avoid live forms, downloads, or collection routes when ownership, review, approval, or privacy workflow is not confirmed.

## Kevin / Jason / Corey Decision List

- Confirm official 2026-27 course titles, credits, grade levels, prerequisites, building availability, and sequence.
- Confirm Kitchen Management title, credit, schedule, grade placement, first implementation year, instructional role, and capstone responsibility.
- Confirm The Cottage's current scope, public approval language, districtwide versus building-specific naming, and Olympia parallel language if needed.
- Confirm exact MCC dual-enrollment mappings and current articulation agreement language.
- Supply official Portrait of a Graduate wording and decide whether/how Culinary Pathway evidence maps to it.
- Confirm SkillsUSA status and permissible public language.
- Decide senior external WBL authorization path, calendar, 300-hour weekly equivalent, staffing/coordinator authority, legal/insurance, transportation, compensation/pay boundaries, employer screening, and records workflow.
- Assign monitored owners for public contact, Cottage inquiry, employer interest, accessibility help, and resource routes.

## Controlled-Document Impact List

- GOV-10: reconcile PA-01, PA-05, PA-08, and related public-facing language with current district evidence and Jason/Corey decisions.
- GOV-13: remove the public metadata-block requirement while retaining metadata internally.
- WEB-01: update the migration/content model to match the linear Explore sequence and task-centered Program Resources area.
- WEB-19: retain honest status distinctions while reducing repetitive labels and disclaimers.
- WEB-22: map public resources, participant resources, senior-WBL-only resources, and restricted records by audience, approval status, delivery channel, and privacy class.
- WEB-24: assign real owners, review cadence, and monitored routes for public content and resources.
- Canon/books: clarify that successful course completion and demonstrated competency are connected rather than competing systems.

## Cross-Application Handoff Entry

Desktop Work/Codex completed a first-pass staged HTML rewrite of the GCSD Culinary Pathway website on branch `codex-staged-website-first-pass`. The rewrite is committed locally as `995c6de Revise staged Culinary Pathway website` and affects only the 20 staged HTML pages in `pathway-documents/work-package-2-website/staging-pages/`. No controlled documents, PROJECT-STATE.md, live site files, source materials, deployment settings, forms, or private record areas were changed. Validation passed for static HTML, local links, heading/landmark structure, duplicate IDs, Explore sequence navigation, public-language remnants, WEB-18 public navigation exclusion, desktop/mobile rendered layout, and mobile menu behavior. Remaining work is Kevin/Jason/Corey factual reconciliation and later GOV-09-compliant controlled-document updates before any deployment.

## Publication Boundary

Nothing was pushed, merged, deployed, published, connected to forms, or changed in the controlled-document layer.
