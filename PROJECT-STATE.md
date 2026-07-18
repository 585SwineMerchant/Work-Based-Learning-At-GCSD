# CTE 566 Culinary Pathway Project State

**Status date:** 2026-07-18
**Purpose:** Cross-application continuity handoff
**Authority:** Working summary only. The Canon and current controlled documents prevail.

## Read First

Read `AGENTS.md`, the current Canon, GOV-09, GOV-10, GOV-07, GOV-12, the Master Execution Matrix, and the Production Control Log before changing controlled material. Repository evidence outranks this summary if a conflict appears.

The repository is public. GitHub Pages deploys `index.html`, `pages/`, `assets/`, and the authorized staged website preview at `pathway-documents/work-package-2-website/staging-pages/`. Other controlled pathway documents are intentionally tracked in the public repository but excluded from the Pages artifact. Restricted sources, completed records, live operational data, and agent state remain ignored.

## Current Work Handoff

**Last working environment:** Desktop Work/Codex
**Last completed action:** Completed the third-pass staged website polish, produced the full public resource set, integrated the role hubs, and updated the implementation handoff.

### Staged Website Implementation Handoff

Desktop Work/Codex completed the staged website work on branch `codex-staged-website-first-pass`. Commit `995c6de Revise staged Culinary Pathway website` contains the first-pass revision of the 20 staged HTML pages. Commit `2bf4174 Implement owner review website second pass` contains the owner-review second pass. Third-pass checkpoints are `bf2266f` (Explore polish and resource hierarchy), `ca8dc84` (student resources), `311d51b` (family resources), `17810d0` (Cottage/employer resources), `ef5577e` (proposed senior WBL resources), and `3967eff` (completed role-hub integration). The current handoff commit records the final report and this state update. Owner visual/content review of the integrated site and resources is pending. Jason/Corey decisions and controlled-document alignment remain pending, including course sequence, Kitchen Management, The Cottage scope, MCC mappings, Profile of a Graduate language, SkillsUSA language, senior WBL authorization/workflow, and monitored contact/resource owners. Those previous local website commits were not pushed, merged, deployed, or published before Kevin's 2026-07-18 public-review authorization.

On 2026-07-18, Kevin authorized committing and pushing the staged website for public review ahead of the Corey/Jason meeting and accepted public repository/site visibility for this review use. The Pages workflow now packages the exact staged preview folder at `pathway-documents/work-package-2-website/staging-pages/` into the public Pages artifact while continuing to exclude the rest of `pathway-documents/`.

Previous completed action: prepared the proposed Culinary Pathway architecture and document system for Kevin McCann's July 21, 2026 review with Jason Carlson and Corey Skinner. Implementation commit: `1989fc9 Prepare Culinary Pathway architecture review`.

### Meeting Material

- Working packet: `pathway-documents/GCSD_CulinaryPathway_Working-Architecture-Review-Packet_2026-07-21.docx`.
- The four-page packet distinguishes existing practice, proposed structure, conditional work, and unresolved decisions.
- The decision register asks Jason and Corey to confirm, revise, request more information, or omit each architecture element.
- Meeting decisions are recorded as UD-11 through UD-19 in the Production Control Log. Earlier UD-08 through UD-10 retain their original identities.
- Jason Carlson remains the established program lead; Corey Skinner's coordination role and Kevin McCann's author/teacher role remain proposals subject to confirmation where the controls say so.

### Current Authoritative Controls

- GOV-01 Canon v3.0: `pathway-documents/work-package-1-governance/GCSD_Culinary_Pathway_Canon_v3.0.docx`.
- GOV-02 Operating Principles v1.0: `pathway-documents/work-package-1-governance/GCSD_Culinary_Pathway_Operating_Principles_v1.0.docx`.
- GOV-03 Book One v4.0; GOV-04 Book Two v4.1; GOV-05 Book Three v4.0; GOV-06 Book Four v4.0.
- GOV-07 Master Document Register v2.0: `pathway-documents/work-package-1-governance/GCSD_CulinaryPathway_GOV-07_Master-Document-Register_v2.0_2026-07-14.docx`.
- GOV-08 Canonical Glossary v1.0.
- GOV-09 Document Control and Versioning Procedure v1.1.
- GOV-10 Program Status and Authorization Register v4.0.
- GOV-11 Annual Document Review Calendar v2.0: `pathway-documents/work-package-1-governance/GCSD_CulinaryPathway_GOV-11_Annual-Document-Review-Calendar_v2.0_2026-07-14.xlsx`.
- GOV-12 Companion Document Map v1.2: `pathway-documents/work-package-1-governance/GCSD_CulinaryPathway_GOV-12_Companion-Document-Map_v1.2_2026-07-14.docx`.
- GOV-13 Website Page Template and Content Standards v2.0: `pathway-documents/work-package-1-governance/GCSD_CulinaryPathway_GOV-13_Website-Page-Template-Content-Standards_v2.0_2026-07-14.docx`.
- Master Execution Matrix v7.0: `pathway-documents/work-package-1-governance/GCSD_CulinaryPathway_Master-Execution-Matrix_v7.0_2026-07-14.xlsx`.
- Production Control Log v7.0: `pathway-documents/GCSD_CulinaryPathway_Production-Control-Log_v7.0_2026-07-14.xlsx`.

GOV-07 now provides the evidence-based disposition for every Register item and major repository support area. It distinguishes produced, proposed, conditional, deferred, superseded, archived, and not-started work; identifies combined files; and names the current location of produced items.

### Website State

- Live Pages source remains unchanged from baseline commit `510aea98c17b7ca09865ed026dbee047ff9c9f00`.
- The live Forms & Resources page still exposes 37 links to intentionally nondeployed Module 2 files. This remains a known live-site defect until Kevin authorizes deployment of a replacement.
- The staged Culinary Pathway preview contains 20 pages with four primary navigation choices: Home, Explore the Culinary Pathway, Program Resources, and Contact.
- WEB-14 through WEB-17 provide the public role-based resource paths. The staged resource directory contains 33 linked HTML resources, 32 PDFs, 21 DOCX files, and one formula-enabled XLSX costing template. Proposed senior WBL resources are marked not yet active and do not provide submission behavior.
- WEB-18 remains on disk but is absent from public navigation and public resource links pending an approved authenticated staff destination.
- The staged preview is authorized for public review publication and is included in the Pages artifact by `.github/workflows/deploy.yml`; the rest of `pathway-documents/` remains outside the Pages artifact.
- Preview entry file: `pathway-documents/work-package-2-website/staging-pages/GCSD_CulinaryPathway_WEB-02_Home-Page_v2.0_2026-07-14.html`.

### Disposition and Archive Actions

- GOV-07 v1.0, GOV-11 v1.0, GOV-12 v1.1, GOV-13 v1.0, Matrix v6.2, PCL v6.2, WEB-01 v1.0, WEB-19 v1.0, WEB-22 v1.0, WEB-24 v1.0, and the fifteen prior staged HTML pages are in `pathway-documents/_archive/`.
- The inherited GOV-07 v1.0 filename did not contain a controlled date; its archived filename preserves that limitation rather than inventing a date.
- The WP2A/WP3 Reconciliation Memo, CUR-01/02 Course Alignment Memo, and WP3 File Manifest are archived after their useful evidence was absorbed into current controls.
- `module-2-table-package/` remains a frozen historical CTE 566 deliverable. Its earlier forms and public documents are not current Culinary Pathway authority.
- CMP-02, CUR-01, CUR-02, CUR-03, and the specified KM documents were retained unchanged for Jason/Corey review.

### Verification Completed

- Current DOCX/XLSX packages open successfully and contain no tracked changes, active comments, macros, embedded files, or external workbook links in the changed set.
- Workbook formulas, worksheet names, and validation inventories remain intact. Matrix and Production Control Log renders were visually inspected after final edits.
- The meeting packet rendered to four pages and every page was visually inspected.
- The controlled Word documents were rendered and visually inspected during production. After the final one-sentence GOV-13 correction and orphan-comment cleanup, package validation passed; a fresh automated Word PDF refresh was blocked by the local Word automation session. Owner visual review of the exact final GOV-13 file remains required.
- Full staged-site QA passed for 53 HTML files and 550 local links: 20 staged pages plus 33 individual resources. No missing links, placeholder links, duplicate IDs, active collection controls, WEB-18 public links, or role-return errors were found.
- All 32 resource PDFs are nonblank Letter-size files. All 21 generated DOCX files passed heading/table geometry audits, zero high-severity accessibility findings, and rendered page inspection. The XLSX costing template retains 44 formulas.
- Local desktop and mobile checks passed for the four resource hubs and representative long-form resources: no page-level horizontal overflow, clipped cards, or hidden actions; keyboard focus is visible; the mobile menu works; wide tables remain in intentional scroll containers.
- No `source materials/`, `.claude/`, `.agent-research/`, `completed-records/`, or `live-operational-data/` file entered the implementation commit.

## Open Decisions

GOV-10, Matrix v7.0, and PCL v7.0 remain the live control layer. The July 21 review must address:

- official course names, grades, sequence, credits, and scheduling;
- Kitchen Management status and purpose;
- the six Gateways, Culinary Passport, and verification authority;
- The Cottage name/current practice and Olympia's corresponding client-centered model;
- credentials, technical assessments, and SkillsUSA status actually in use;
- pathway-wide capstone direction;
- the conditional senior external-WBL model and proposed 300-hour expectation;
- staffing/coordinator authority, transportation, access, and supervision realities;
- implementation timing and the actual Board/curriculum approval path;
- public versus participant information and any architecture Jason/Corey believe should be revised, deferred, or omitted.

No Board, curriculum, external-WBL, employer-partnership, PA-06, or PA-14 authorization changed during this work.

## Recommended Next Environment and Task

**Environment:** Local browser owner review of the revised staged website and generated resources, then Microsoft Word desktop for Kevin's final packet/GOV-13 visual review, followed by the in-person July 21 meeting with Jason Carlson and Corey Skinner. Use the ChatGPT Project chat afterward for cross-application continuity and task selection.

**Next task:** Complete Kevin's owner visual/content review of the integrated staged site and resources. Then conduct the July 21 architecture review using the working packet, record decisions and evidence in PCL UD-11 through UD-19, and make only the GOV-09-compliant control and document revisions those decisions require. Do not advance Board materials or deploy the staged website before those reviews are reconciled.

## Repository Facts

- Root: `C:\Antigravity local\Grad School Project\CTE 566`.
- Current handoff branch: `codex-staged-website-first-pass`.
- Default branch: `main`, tracking `origin/main`.
- GitHub repository: `585SwineMerchant/Work-Based-Learning-At-GCSD` (public).
- Live site source: `index.html`, `pages/`, and `assets/` only.
- Controlled system: `pathway-documents/`, excluded from Pages.
- Ignored private/source areas: `source materials/`, `completed-records/`, `live-operational-data/`, `.claude/`, and `.agent-research/`.
- Root `GAP-ANALYSIS.md` remains retired as superseded working material; its historical Git version remains available.

## Updating This File

Update this handoff when a material status, authority, blocker, or next action changes. Use an exact date, name the controlling evidence, remove stale next steps, and preserve unresolved decisions until an authorized owner resolves them.
