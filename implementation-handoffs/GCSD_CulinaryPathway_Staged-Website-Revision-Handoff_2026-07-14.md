# GCSD Culinary Pathway Website Revision Handoff

Date: 2026-07-17
Branch: codex-staged-website-first-pass
Base implementation commit: 995c6de Revise staged Culinary Pathway website
First handoff commit: 428690d Add staged website handoff
Second-pass commit: this commit records the owner-review second pass

## Reader-Facing Changes Completed

- Removed public-facing language that described the site as a staging or editorial review artifact.
- Rewrote affected headings and copy from the viewpoint of students, families, teachers, administrators, community members, and employers.
- Standardized the Explore navigation banner with a stable three-control layout across Explore pages.
- Rebuilt Pathway at a Glance with a three-by-three desktop Explore grid and stronger graduation/readiness continuity language.
- Expanded Courses and Learning Environments with specific Culinary Arts and Nutrition I/II and Advanced Culinary content from current course sources.
- Rebuilt the Gateway/Passport page around the four-stage relationship: instruction and practice, assessed evidence, Gateway completion, Passport record and next step.
- Rewrote The Cottage page for readers without inside knowledge, including client-centered production, student-centered operation, rotating roles, and teacher responsibility.
- Strengthened Kitchen Management with continued culinary practice, leadership, support boundaries, and the Mercantile pop-up/capstone concept.
- Made Credentials, College Credit, and Graduation more specific while leaving exact MCC equivalencies and GCSD Profile of a Graduate attributes unresolved.
- Clarified that senior external WBL is a developed proposal with drafted planning materials, not an active placement program.
- Expanded employer/community participation routes, including the Mercantile capstone route.
- Rebuilt Results and Accountability around student learning, learning-environment quality, and program quality without promising an annual report.
- Rebuilt Program Resources and role pages so students, families, and employers can open actual local resources.

## Exact Files Changed or Added

- Revised the 20 staged HTML pages in pathway-documents/work-package-2-website/staging-pages/.
- Revised staged shared assets: assets/site.css, assets/site.js, assets/staged-site.css, assets/staged-site.js, assets/status-labels.css, and assets/resource-docs.css.
- Added 21 curated public/review resource pages under pathway-documents/work-package-2-website/staging-pages/resources/.
- Updated this handoff report.

## Actual Resources Now Available by Audience

Student resources:
- Student Skill Overview
- Resume Preparation Guide
- Career Goal Reflection
- Student Reflection Log
- Event Planning Checklist
- Event Reflection Form
- Costing and Menu Planning Template
- Production Schedule Template
- Student Role Assignment Template
- Proposed Student WBL Interest Form, review copy only
- Proposed Readiness Checklist, review copy only
- Proposed Hours Log, review copy only

Family resources:
- Family Information Sheet
- Family FAQ
- Student Support Checklist
- Safety and Supervision Overview
- Student Skill Overview
- Resume Preparation Guide
- Career Goal Reflection

Employer/community resources:
- Employer and Community Overview
- Employer FAQ
- Cottage Request Information
- Safety and Supervision Overview
- Proposed Employer Interest Form, review copy only
- Proposed Training Station Profile, review copy only
- Proposed Hours Log, review copy only

## Resources Excluded

- Completed student records, Passport records, employability profiles, reflections, grades, portfolios, and completed hours logs: restricted educational records.
- Completed employer evaluations, site reviews, partner agreements, incident reports, corrective-action records, and placement records: restricted partner/student/program records.
- Legal/risk, insurance, transportation, accommodation, and administrative workflow documents: internal district operations and approval material.
- Teacher operating calendars, document-control tools, ownership schedules, and staff-only procedures: restricted staff operations.
- Module 2 public documents were not linked directly because many contain old course-project disclaimers, stale live-site links, old QR copy, or WBL-first framing that no longer matches the owner review. Curated local review copies were created instead.

## Validation Performed

- Static validation passed for 20 staged pages and 21 curated resource pages.
- Local link validation passed for staged pages, shared assets, and resource links.
- Heading, landmark, duplicate-ID, placeholder-link, and WEB-18 public-reference checks passed.
- Sitewide copy sweep passed for staging/editorial language and internal planning remnants.
- Explore Previous, Next, and Overview sequence validation passed.
- Rendered validation passed in Chrome at desktop, tablet, and mobile widths for all 41 pages/resources.
- Explore navigation banner dimensions passed after shared CSS correction.
- Pathway at a Glance nine-tile layout passed at desktop, tablet, and mobile widths.
- Mobile menu open/Escape-close behavior passed.
- All 21 resource pages were opened through rendered screenshots and inspected in a contact sheet.
- `git diff --check` passed with line-ending warnings only.

## Remaining Kevin / Jason / Corey Decisions

- Official 2026-27 course titles, credits, grade levels, prerequisites, building availability, and sequence.
- Kitchen Management title, credit, schedule, grade placement, first implementation year, instructional role, and capstone responsibility.
- The Cottage's current scope, public approval language, districtwide versus building-specific naming, and Olympia parallel language if needed.
- Exact MCC dual-enrollment mappings and current articulation agreement language.
- Official GCSD Profile of a Graduate attributes and any Culinary Pathway mapping.
- SkillsUSA status and permissible public language.
- Senior external WBL authorization path, calendar, 300-hour weekly equivalent, staffing/coordinator authority, legal/insurance, transportation, compensation/pay boundaries, employer screening, and records workflow.
- Monitored owners for public contact, Cottage inquiry, employer interest, accessibility help, and resource routes.

## MCC Equivalency Information Still Needed

Kevin confirmed current college-credit opportunity for Culinary Arts and Nutrition I, Culinary Arts and Nutrition II, and Advanced Culinary Arts. Exact MCC course numbers, titles, credits, eligibility rules, registration steps, transcript process, and current articulation language still need confirmation before publication.

## NYSED / GCSD Graduation Terminology

Verified NYSED terminology used: Career and Technical Education pathway, Career Development and Occupational Studies pathway, CDOS Commencement Credential, 4+1 pathway option, NYSED-approved CTE program of study, and three-part technical assessment. GCSD public district materials reference a Profile of a Graduate, but the exact profile attributes were not available in searchable public page text during this pass. No GCSD profile mapping was invented.

## Deployment Mapping Needed Later

The curated resources currently live under staging-pages/resources/ and use relative links that work locally from the staged pages. Before deployment, the Pages artifact must include the revised staged pages, staged assets, and resources directory, or these files must be mapped into the live pages/assets structure. The deployment workflow was not changed in this pass.

## Publication Boundary

Nothing was pushed, merged, deployed, published, connected to forms, or changed in the controlled-document layer.
