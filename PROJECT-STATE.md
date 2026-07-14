# CTE 566 Culinary Pathway Project State

**Status date:** 2026-07-14  
**Purpose:** Desktop Work/Codex continuity handoff  
**Authority:** Working status summary only; controlled repository documents prevail

## Read This First

This file bridges prior Claude and ChatGPT work into the local GitHub-backed repository. It is not a substitute for the Culinary Pathway Canon, status/authorization register, document-control procedure, master execution matrix, or current controlled documents.

The first desktop task must reconcile this summary against the repository. Do not edit controlled deliverables until that reconciliation identifies the authoritative version of each file.

## Cross-Application Continuity

Initial project development occurred across Claude and the ChatGPT Project. The local GitHub-backed repository is now connected to ChatGPT desktop Work/Codex. Claude will remain available for appropriate tasks.

The ChatGPT Project chat is the continuity coordinator and recommends which environment should handle substantial work. Desktop Work/Codex does not automatically receive Claude or web-project conversation history. The ChatGPT Project chat does not automatically see desktop or Claude activity. Continuity therefore depends on repository updates and explicit handoff reports.

## Current Work Handoff

**Last updated:** 2026-07-14  
**Last working environment:** Desktop Work/Codex  
**Last completed action:** Repository audit, privacy/publication boundary correction, Pages isolation, project-guidance creation, and first infrastructure commit.  
**Files changed:** `.github/workflows/deploy.yml`, `.gitignore`, `AGENTS.md`, `PROJECT-STATE.md`.  
**Git status / commit:** Local `main` is one commit ahead of `origin/main`; nothing pushed. Infrastructure commit: `6a2ea1b7974bdac4e95c6ab330368aade14ec7ff`.  
**Decisions made:** The repository is public; GitHub Pages must deploy only `index.html`, `pages/`, and `assets/`; `source materials/`, completed/live record locations, agent files, Office lock files, temporary files, and ordinary backups remain ignored; `pathway-documents/` remains visible to Git for selective tracking.  
**Unresolved issues:** Stale Production Control Log v6.0 archive statement; stale GOV-12 v1.0 reference in Master Execution Matrix v6.0; stale WEB-08/WEB-10 structure references and navigation links; final disposition of `GAP-ANALYSIS.md`.  
**Current authoritative versions affected:** GOV-12 v1.1; Master Execution Matrix v6.0; Production Control Log v6.0; WEB-08 v1.0; WEB-10 v1.0.  
**Recommended next environment:** Desktop Work/Codex  
**Recommended next task:** Perform the approved document-control-compliant corrections, then prepare the controlled-document commit.  

## Verified Repository Facts

Verified on 2026-07-14 during the first Codex privacy and continuity audit:

- Repository root: `C:\Antigravity local\Grad School Project\CTE 566`
- Current branch: `main`, tracking `origin/main`.
- GitHub repository: `585SwineMerchant/Work-Based-Learning-At-GCSD`.
- Repository visibility: public.
- The GitHub Pages workflow previously uploaded the repository root (`path: "."`), which meant any tracked root content could enter the Pages artifact.
- The current public website source is the tracked static site at `index.html`, `pages/`, and `assets/`.
- The full pathway production system exists locally under `pathway-documents/` and is currently untracked. It is part of the project system and must be reviewed selectively; do not ignore or add the entire directory without a document-level decision.
- `source materials/` exists locally and is currently untracked/ignored as course, district, and source-reference material.
- `GAP-ANALYSIS.md` is tracked but deleted in the working tree; an identical copy exists at `source materials/GAP-ANALYSIS.md`. Preserve the deletion until Kevin decides how to handle it.

Verified current controlled/source versions located during the audit:

- Canon: `source materials/GCSD_Culinary_Pathway_Canon_v3.0.docx`.
- Operating Principles: `source materials/GCSD_Culinary_Pathway_Operating_Principles_v1.0.docx`.
- Book 1: `source materials/GCSD_Culinary_Pathway_Book_1_Program_Blueprint_V4.0_Refined.docx`.
- Book 2: `source materials/GCSD_Culinary_Pathway_Book_2_Assessment_Evaluation_Continuous_Improvement_V4.1_Refined.docx`.
- Book 3: `source materials/GCSD_Culinary_Pathway_Book_3_Operations_Manual_V4.0_Refined.docx`.
- Book 4: `source materials/GCSD_Culinary_Pathway_Book_4_Board_Proposal_Implementation_Plan_V4.0_Refined.docx`.
- GOV-08: `pathway-documents/work-package-1-governance/GCSD_CulinaryPathway_GOV-08_Canonical-Glossary_v1.0_2026-07-12.docx`.
- GOV-09: `pathway-documents/work-package-1-governance/GCSD_CulinaryPathway_GOV-09_Document-Control-Versioning-Procedure_v1.0_2026-07-12.docx`.
- GOV-10: `pathway-documents/work-package-1-governance/GCSD_CulinaryPathway_GOV-10_Program-Status-Authorization-Register_v4.0_2026-07-12.xlsx`.
- GOV-11: `pathway-documents/work-package-1-governance/GCSD_CulinaryPathway_GOV-11_Annual-Document-Review-Calendar_v1.0_2026-07-12.xlsx`.
- GOV-12: `pathway-documents/work-package-1-governance/GCSD_CulinaryPathway_GOV-12_Companion-Document-Map_v1.1_2026-07-12.docx`.
- Master Execution Matrix: `pathway-documents/work-package-1-governance/GCSD_CulinaryPathway_Master-Execution-Matrix_v6.0_2026-07-12.xlsx`.
- Production Control Log: `pathway-documents/GCSD_CulinaryPathway_Production-Control-Log_v6.0_2026-07-12.xlsx`.

Verified work-package status from the Master Execution Matrix v6.0:

- Work Package 1: production complete; awaiting Kevin McCann owner visual QA review.
- Work Package 2A and 2B Phase 1/2A: production complete; staged, not deployed; awaiting owner visual QA review.
- Website navigation unification: production complete; awaiting owner visual QA review.
- Work Package 3: production complete; awaiting owner visual QA review.
- Work Package 4: production complete; awaiting owner visual QA review.
- Work Package 5: on hold; do not begin.
- Work Package 6: production complete; awaiting owner visual QA review.
- Work Package 7: not started.
- Work Package 8: not started.

## Project Objective

Develop a coherent, district-appropriate Culinary Arts Career Pathway system for Greece Central School District while satisfying relevant CTE 566 requirements. The system should make an existing and developing program legible, repeatable, assessable, supportable, and presentable without overstating its current authorization or implementation.

The intended result is not merely a set of polished documents. It is a controlled program framework connecting:

- program purpose and progression;
- curriculum and scope and sequence;
- student evaluation and evidence;
- employability and professional behaviors;
- CDOS, YouScience, ProStart, SkillsUSA, and other applicable standards or credentials;
- work-based learning and school-based enterprise;
- daily program operations;
- governance, implementation, and annual review;
- board and public communication.

## People and Operating Context

- **Kevin McCann:** project author/user; industry-to-education professional and culinary teacher.
- **Jason Carlson:** established Culinary program lead; the project should support and codify the program without displacing his leadership.
- **Greece Central School District:** intended institutional setting.
- **SUNY Oswego CTE 566:** academic context and source of assignment requirements.

Kevin expects to teach three Introduction to Culinary sections and two Advanced Culinary sections. This reported schedule and any role assignments must be checked against current district evidence before being treated as official.

## Established Direction

The following direction has been consistently reported in prior project work:

- The current Culinary Pathway Canon governs the document system.
- Routine book revisions are editorial, not architectural.
- The writing should be concise, practical, audience-specific, and continuous across the series.
- The program must provide **Clear Direction** while preserving authentic student responsibility and progression.
- “Inspect what you expect” is an established operating maxim.
- Status language must distinguish existing practice, authorized implementation, proposed work, and unresolved decisions.
- Companion documents should carry detailed operational material so the four books remain readable and nonredundant.
- Student evaluation must stay grounded in actual course evidence and applicable assessment systems, including YouScience, CDOS-related evidence, ProStart, and other verified credential or standards requirements.
- School-based enterprise is a meaningful applied-learning structure, not an ornamental add-on.
- Book 4 and the four-book system should support a much more concise board presentation and spoken case.

Exact wording of the complete Operating Principles must be verified against the current Canon rather than reconstructed from conversation memory.

## Four-Book System

| Book | Current purpose | Reported state requiring repository verification |
| --- | --- | --- |
| Book 1 | Program framework, progression, and operating principles | Received extensive editorial revision; reported as strong and near final |
| Book 2 | Student learning, evaluation, assessment, evidence, and progression | Revised for voice and later strengthened to restore YouScience, CDOS, ProStart, certification, and gateway evidence |
| Book 3 | Concise operations manual | Revised to match the established voice and reduce redundancy |
| Book 4 | Board proposal, implementation case, and support for presentation materials | Revised as a decision-ready board document and presentation foundation |

Do not infer current version numbers or approval status from this table. Determine both from filenames, document properties, registers, and Git history.

## Governance and Control System

Prior work reports the existence of at least these governance artifacts:

- `GOV-08` — Canonical Glossary
- `GOV-09` — Document Control and Versioning Procedure
- `GOV-10` — Program Status and Authorization Register
- `GOV-11` — Annual Document Review Calendar
- `GOV-12` — Companion Document Map
- Culinary Pathway Master Execution Matrix
- Culinary Pathway Canon, reported in prior work as Version 3.0

These artifacts were reviewed and edited during earlier work, but their current repository filenames, versions, and approval status are not verified in this handoff workspace. Treat the repository copies and control registers as authoritative.

## Known Prior Editorial Concerns

Earlier reviews identified or addressed issues in these areas:

- preserving the Operating Principles and Kevin's recognizable language;
- restoring **Clear Direction** as an explicit concept;
- grounding Book 2 in actual evaluation and credential evidence;
- clarifying the distinct purposes of Books 2 and 3;
- reducing repetition across all four books;
- keeping Book 3 operational and concise;
- keeping Book 4 board-facing and decision-ready;
- correcting stale website or gateway statements;
- aligning status labels with the authorization register;
- avoiding claims that uncreated or proposed documents already existed;
- distinguishing approved, implemented, proposed, and unresolved elements.

Do not assume every concern is resolved merely because an edit was reported. Verify against current files.

## Source Materials Available in the Web Handoff Workspace

The following eleven sources were attached to the web project during migration:

1. `566 course complete course info.pdf`
2. `CTE 566 Module 1.pdf`
3. `CTE 566 Module 2_.pdf`
4. `CTE 566 Module 3.pdf`
5. `CTE 566 Module 4_.pdf`
6. `CTE 566 Module 5_.pdf`
7. `Culinary_Pathway_Skills_Map.xlsx`
8. `Employability Profile- Culinary Pathway-Template.docx`
9. `Advanced Culinary - Scope and Sequence 2023-2024 .docx`
10. `CA 1 & 2 outline 8_8_25.docx`
11. `Introduction to School to Career Pathway Programming 25-26.pptx`

Their presence in the local repository has not been verified by this handoff. Do not duplicate them if equivalent controlled copies already exist.

## Items That Remain Unverified

The repository audit must establish:

- current branch and working-tree status;
- repository root and existing instruction files;
- exact current Canon version and location;
- authoritative filenames, versions, and status for Books 1–4;
- authoritative versions of GOV-08 through GOV-12;
- current Master Execution Matrix version;
- whether previously reported edits were committed and pushed;
- current website state and the location of website source files;
- status of board presentation, script, and appendices;
- status of curriculum, SBE, work-based learning, credential, and assessment companion documents;
- unresolved decisions assigned to Kevin, Jason, district leadership, or other owners;
- whether the eleven attached source files already exist in the repository under different names.

## Known Implementation Questions

Prior conversations identified these matters as unknown or requiring confirmation at some stage. The repository may now resolve some of them:

- certification targets and authorization;
- any required industry-hour total;
- assessment weighting;
- equipment inventory;
- catering/SBE calendar and approval workflow;
- vendor relationships;
- food-safety certification target, including whether ServSafe is authorized;
- ownership and approval of implementation dates;
- final board authorization pathway and requested decision.

Do not answer these from inference. Resolve them from controlled evidence or assign them as decisions.

## Migration Status

- The full Claude conversation history has not been imported into desktop Work.
- This ChatGPT Project's cloud Work conversations do not currently appear in desktop Work.
- The existing local repository and its connected GitHub repository are the intended durable workspace.
- `AGENTS.md` and this file were created as the initial context bridge on 2026-07-14.
- Conversation summaries remain supporting background, not governing authority.

## Required First Desktop Task

Run a read-only continuity audit before making changes:

1. Read `AGENTS.md` and this file.
2. Inspect repository structure, Git status, current branch, and recent relevant history.
3. Locate the Canon, GOV-08 through GOV-12, Master Execution Matrix, Books 1–4, website, presentation materials, and archives.
4. Determine the authoritative version and stated status of each controlled document.
5. Compare repository evidence with this handoff.
6. Produce a discrepancy report with three categories:
   - confirmed and current;
   - present but status/version unclear;
   - missing or contradicted.
7. Propose corrections to `PROJECT-STATE.md`; do not modify controlled deliverables until the user approves the resulting direction.

Suggested first prompt:

> Perform a read-only continuity audit of this repository. Read AGENTS.md and PROJECT-STATE.md, then verify every material status claim against the Canon, governance registers, controlled documents, Git status, and recent history. Report confirmed items, discrepancies, missing evidence, and the safest next task. Do not edit files, commit, push, or reorganize the repository.

## Updating This File

Update this file when a material status, authority, blocker, or next action changes. Keep it concise enough to read at the beginning of a task. Record historical detail in the appropriate log, register, or archive rather than allowing this file to become a transcript.

For every update:

- use an exact date;
- distinguish verified evidence from reported history;
- link or name the controlling repository document;
- remove stale next steps;
- preserve unresolved decisions until an authorized owner resolves them.
