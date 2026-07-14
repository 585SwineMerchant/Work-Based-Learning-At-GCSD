# GCSD Culinary Pathway Project

This public repository is the durable project workspace for the proposed Greece Central School District Culinary Pathway and its associated CTE 566 coursework. It contains the current planning architecture, controlled program documents, a public course-project website, a separate staged pathway-site redesign, and historical coursework artifacts.

> **Planning status:** This repository does not establish district policy, course approval, staffing, partnerships, placements, credentials, or implementation authority. Current status is controlled by GOV-10 and the execution controls under `pathway-documents/`.

## Authority hierarchy

When sources conflict, use this order:

1. Current task direction.
2. GOV-01, the current Culinary Pathway Canon.
3. GOV-07 through GOV-13, the Master Execution Matrix, and the Production Control Log.
4. Current controlled program documents.
5. Official district, course, state, credential, and program source material.
6. `PROJECT-STATE.md` as a working handoff.
7. Archives, historical coursework, and prior drafts.

`AGENTS.md` contains the permanent repository working rules. Read it and `PROJECT-STATE.md` before changing controlled documents.

## Repository map

| Location | Purpose | Website deployment |
| --- | --- | --- |
| `index.html`, `pages/`, `assets/` | Currently authorized public course-project site | Yes |
| `pathway-documents/work-package-1-governance/` | Canon, Operating Principles, Books 1–4, governance, status, and execution controls | No |
| `pathway-documents/work-package-2-website/` | Website control documents and staged pathway-site pages | No |
| `pathway-documents/work-package-3-curriculum-passport-gateways/` | Curriculum, Gateway, Passport, credential, and assessment planning material | No |
| `pathway-documents/work-package-4-cottage-kitchen-management/` | The Cottage, school-based enterprise, and proposed Kitchen Management materials | No |
| `pathway-documents/work-package-6-employer-mentor-wbl/` | Conditional employer, mentor, placement, and WBL planning system | No |
| `pathway-documents/_archive/` | Superseded controlled versions and retired production records | No |
| `module-2-table-package/` | Frozen historical CTE 566 prototype | No |
| `source materials/` | Ignored course, district, vendor, assessment, and reference sources | No |

## Live and staged websites

The GitHub Pages workflow deploys only `index.html`, `pages/`, and `assets/`. It must never deploy the repository root.

The current staged pathway redesign is under:

`pathway-documents/work-package-2-website/staging-pages/`

Its home page presents two paths: **Explore the Culinary Pathway** and **Program Resources / I’m Participating**. The staged site is for review only and must not replace the live source without explicit approval.

## Controlled documents and records

Follow GOV-09 before editing any controlled file: locate the current version, archive it before replacement, advance the version correctly, update affected controls, and complete structural and visual QA.

Blank templates may be tracked when their actual contents are public-safe. Completed student, staff, employer, client, placement, incident, financial, or operational records must never be committed. Store live records only in a district-approved restricted system.

## Historical coursework

`module-2-table-package/` is preserved as a frozen CTE 566 deliverable. Its forms and public-document prototypes are not current Culinary Pathway authority and must not be linked as active program resources. Current planning authority resides in the controlled CMP, CUR, SBE, KM, EMP, OPS, WEB, and governance documents.

## Local preview

The repository uses plain HTML, CSS, and JavaScript. From the repository root, run a local static server and open the desired site:

```powershell
python -m http.server 8000
```

- Live site: `http://localhost:8000/`
- Staged review: `http://localhost:8000/pathway-documents/work-package-2-website/staging-pages/GCSD_CulinaryPathway_WEB-02_Home-Page_v2.0_2026-07-14.html`

Do not use the staged preview as evidence that the architecture or any conditional component has been approved.
