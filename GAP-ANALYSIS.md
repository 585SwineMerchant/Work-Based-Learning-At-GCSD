# Gap Analysis — Greece Culinary Work-Based Learning Site

A ground-truth inventory of what's still a placeholder across the site and
the Module 2 table package, organized by **what you need to provide or
decide** rather than just "what's missing." Pulled directly from the current
files (not from memory), so it should be accurate as of this pass.

> Companion to [TODO.md](TODO.md), which is the flat task list. This document
> groups the same gaps by *who has the missing information* so you know who
> to go talk to.

---

## How to read this

Each gap is tagged with who most likely needs to supply the missing piece:

- 🧑‍🍳 **You / course authoring** — you can just write/build it, no one else needed
- 👥 **Corey / Jason / advisory board** — needs real program information only they have
- 🏫 **District** — needs formal district decision or approval (may not be resolvable until this becomes a real proposal)
- 📸 **Consent-gated** — needs signed photo/media releases before it can exist at all

---

## 1. The single biggest lever: a named contact

**Where:** [pages/contact.html](pages/contact.html) — "Placeholder: Program contact information"

Right now there is no real name, email, phone, or department attached to this
program anywhere on the site. Almost every other gap below (forms, FAQs,
advisory board specifics) becomes easier to finish once there's one person
whose name can go on the coordinator line. 👥

**What's needed:** Who is the WBL coordinator / point of contact for this
proposal right now — you, a culinary teacher, a CTE department contact? Even
a placeholder-but-real school email is enough to unblock several other pages.

---

## 2. Website page-by-page content gaps

| Page | What's still placeholder | What you need |
|---|---|---|
| [what-is-wbl.html](pages/what-is-wbl.html) | WBL phase infographic (currently a text-only placeholder block); "What Is WBL?" overview PDF | 🧑‍🍳 A simple graphic (even a slide export) of the 5-phase model; a one-page PDF export (you already have the HTML version — see §4) |
| [student-pathway.html](pages/student-pathway.html) | Student pathway infographic; Student Readiness Checklist PDF; student reflection log template; Student WBL Interest Form | 🧑‍🍳 Same infographic treatment; 👥 confirmed course sequence/eligibility criteria (page currently says sequencing is "illustrative") |
| [family-information.html](pages/family-information.html) | 5 of 11 FAQ answers explicitly defer to unresolved policy: student selection criteria, paid/unpaid status, transportation, permission forms, safety/supervision specifics | 🏫 These genuinely can't be finalized without a district decision — that's expected at this stage, not a bug. Flagging so you know these FAQ answers will need a rewrite once real policy exists |
| [employer-partners.html](pages/employer-partners.html) | Site Visit Checklist, Training Station Profile, Employer Evaluation Form, Employer FAQ, Employer Interest Form all "coming soon" | 👥 Confirm the advisory board catering-job detail is OK to keep referencing publicly (no business name is used, but worth a gut-check); 🧑‍🍳 draft the actual checklist/form content when ready — I can help write these |
| [school-based-enterprise.html](pages/school-based-enterprise.html) | SBE Planning Checklist, Event Reflection Form, Customer Feedback Form, approved photo/media gallery link | 📸 real events + consent before photos; 🧑‍🍳 the checklist/form content |
| [evaluation-impact.html](pages/evaluation-impact.html) | Entire page is framework-only — no real instruments, no data, evaluation dashboard is conceptual | 🧑‍🍳 This is explicitly meant to mature alongside your Module 5 Evaluation and Assessment Plan assignment — not urgent for Module 2 |
| [media-gallery.html](pages/media-gallery.html) | Every tile is a placeholder — zero real photos, video, or audio anywhere on the site | 📸 See §5 below, this is the largest content gap on the site |
| [contact.html](pages/contact.html) | Coordinator contact info; form doesn't actually submit anywhere | 👥🏫 See §1; a real submission target requires a district-approved form/email eventually |
| [index.html](index.html) | None structurally — home page is consistent and complete | — |

---

## 3. Forms & Resources — the real scope of remaining work

[pages/forms-resources.html](pages/forms-resources.html) lists **53 resource
cards** across 7 categories. **7 are now real** (linked to the new
`module-2-table-package/public-documents/` files). **46 are still
"Coming Soon" or "Draft Placeholder."** This is the biggest raw volume of
remaining work on the site, but most of it is 🧑‍🍳 you writing content, not
waiting on anyone else. Breakdown:

| Category | Still placeholder | Notes |
|---|---|---|
| Student Resources | 8 / 8 | Interest form, readiness checklist, reflection log, hours log, resume guide, mock interview checklist, expectations agreement, goal reflection sheet |
| Family Resources | 7 / 7 | Info sheet, FAQ, permission form, safety overview, transportation info, support checklist, contact guide |
| Employer Resources | 8 / 8 | Interest form, partnership flyer, training station profile, site visit checklist, evaluation form, FAQ, skill overview, advisory feedback form |
| School-Based Enterprise Resources | 8 / 8 | Event/catering request forms, production schedule, planning checklist, customer feedback, role assignment, event reflection, costing template |
| Planning & Needs Assessment | 6 / 6 | ⚠️ See §6 — these specifically should be **public-facing summaries**, not your actual Module 1 assignment files |
| Evaluation & Impact Tools | 8 / 8 | Growth tracker, feedback survey, hours summary, compliance/equity reviews, outcome tracker, improvement log |
| Media & Presentation Materials | 1 / 8 | Only "Board Presentation Companion Materials" remains — everything else here is now real (flyers, QR handout, slideshow, Media Gallery link) |

**What you need to do:** Nothing external is blocking most of these — they're
draft tools/forms you (or you + Corey/Jason for content accuracy) write when
you have time. I can draft any of these as the same print-friendly HTML
format used for the existing flyers whenever you're ready — just say which
ones.

---

## 4. Module 2 table package — what's real vs. what's left

| Item | Status |
|---|---|
| QR code | ✅ Real, self-verified, working (`qr-code.png`) |
| Student/Family flyer, Employer flyer, What Is WBL one-pager, Family FAQ one-pager | ✅ Real HTML, print-CSS tested in-browser — **not yet physically print-tested** |
| Slideshow | ✅ Fully working HTML (auto-advance, controls, keyboard nav) — **you can likely run this directly in a browser on the table's tablet/laptop; no export needed** unless you specifically want a video file |
| Display board text, table covering concept | ✅ Copy/concept written (markdown) — **physical mockup deliberately out of scope per your earlier instruction**, you're handling that separately |
| Board Presentation Companion Materials | ❌ Not started — tied to Module 5, not urgent now |

**Action items only you can do:**
- 🧑‍🍳 Print each flyer at actual size and confirm it looks right on paper (I verified the CSS but haven't seen physical output)
- 🧑‍🍳 Scan-test `qr-code.png` with 2+ phones before the event (see `qr-code-instructions.md`)
- 🧑‍🍳 Decide: run the slideshow live from a browser, or export it as a video — either works, browser is less work

---

## 5. Media Gallery — the largest content gap

Every photo/video/audio slot on the site is currently a placeholder tile.
This is the one category where **nothing I write can substitute** — it
requires:

- 📸 Actual photos/video from labs, catering events, or the presentation
  table itself
- 📸 Signed consent/image-release forms for any student who appears,
  before anything gets published (noted in TODO.md — this should happen
  *before* photos are taken, not after)
- 🧑‍🍳 A short audio welcome message, if you want one — this is just a
  recording, no one else needed

**What you need to decide:** Is there an upcoming event (a catering job, a
lab day) you could photograph now, with releases signed in advance, to have
real media ready before Module 2?

---

## 6. The Module 1 summary gap (source-handling reminder)

The Planning & Needs Assessment section explicitly should **not** link your
actual Module 1 assignment documents (community plan, student/community
surveys) — those stay private course files. But right now there's also
**no public-facing summary** replacing them, so that section is fully
placeholder.

**What you need to do:** 🧑‍🍳 Pull 3–5 headline findings out of your own
Module 1 work (e.g., "X% of surveyed students expressed interest in
foodservice careers") and turn them into a short public summary. This is
squarely something I can help draft *if you paste me the findings* — I
should not open or summarize the source PDF/docx directly (per the
source-handling rule), but I can absolutely help you turn numbers you give
me into public-facing copy.

---

## 7. Branding & legal

| Gap | Needed from |
|---|---|
| No real district logo — site uses a text "GC" monogram | 🏫 District, only if/when this becomes official |
| Program name/tagline not officially confirmed | 🏫 or course instructor sign-off |
| All draft-language disclaimers still say "course project" | Intentional — do not remove until there's real district approval to point to |

---

## 8. Suggested priority order

If the near-term goal is the Module 2 table event, roughly in this order:

1. **Get a real (even provisional) coordinator contact** (§1) — unblocks Contact page and several forms
2. **Print-test and scan-test the physical materials** (§4) — lowest effort, highest event-day risk if skipped
3. **Photograph one real event with signed releases** (§5) — even 3–5 photos changes Media Gallery from "empty" to "real"
4. **Draft 2–3 highest-value Forms & Resources items** (§3) — the Student WBL Interest Form and Employer Partner Interest Form are probably the most visitor-facing at a table
5. Everything else (§2 FAQ policy language, §6 Module 1 summary, §7 branding, full evaluation instruments) can reasonably wait for Module 5 or later

---

*Generated from a direct pass over the current repo files — regenerate this
by asking me to re-run the gap analysis after future content additions.*
