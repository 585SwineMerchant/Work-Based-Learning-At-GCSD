# Greece Culinary Work-Based Learning — Website

**From Classroom Kitchen to Career**

This is the public-facing website scaffold for a proposed Greece Central School
District Culinary Pathway Work-Based Learning program, developed as part of a
graduate coursework project (SUNY Oswego, CTE 566: Implementing and Evaluating
Work-Based Learning Programs).

> **This is a course project, not an official district website.** Content uses
> careful language ("proposed," "may include," "designed to support") and final
> program details and procedures would be determined by Greece Central School
> District.

## Tech stack

Plain, dependency-free static HTML/CSS/JS. No build step, no framework, no
external paid services. This keeps the site easy to host anywhere (GitHub
Pages, any static file host, or straight from disk).

## Project structure

```
index.html                    Home page
pages/
  what-is-wbl.html
  student-pathway.html
  family-information.html
  employer-partners.html
  school-based-enterprise.html
  forms-resources.html
  media-gallery.html
  evaluation-impact.html
  contact.html
assets/
  css/styles.css              All site styling (design tokens at the top)
  js/main.js                  Mobile nav toggle + contact form placeholder
  img/                        (empty — for future images/logo)
TODO.md                       Future content/assets checklist
```

## Running locally

No build tools are required. Two options:

1. **Open directly**: double-click `index.html` (or open it via your browser's
   File > Open). Simple, but form/relative-path behavior is most accurately
   tested with a local server (see below).
2. **Local static server** (recommended): from the project root, run one of:

   ```bash
   # Python 3
   python -m http.server 8000

   # Node (if installed)
   npx serve .
   ```

   Then visit `http://localhost:8000`.

## Deploying to GitHub Pages

This repo includes a GitHub Actions workflow (`.github/workflows/deploy.yml`)
that publishes the site automatically on every push to `main`.

1. Create a new, empty GitHub repository (don't initialize it with a README).
2. Push this project to it:

   ```bash
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```

3. In the repository on GitHub, go to **Settings > Pages**.
4. Under **Build and deployment**, set **Source** to **"GitHub Actions"**.
5. Push to `main` (or re-run the workflow from the **Actions** tab) to trigger
   a deploy. GitHub will publish the site at
   `https://<your-username>.github.io/<repo-name>/`.

**Alternative (no Actions):** you can instead set **Source** to "Deploy from a
branch," choose `main` and `/ (root)`, and delete the workflow file — the site
needs no build step either way.

Because the site uses relative links throughout (`pages/...`, `../index.html`,
`../assets/...`), it will work correctly whether it's served from a domain
root or from a GitHub Pages project subpath — no path rewriting needed.

## Editing content

- Every interior page has a `<div class="notice-banner">` explaining what's
  still placeholder/draft content — update or remove these as real content is
  finalized.
- Look for HTML comments starting with `FUTURE CONTENT:` — these mark exactly
  where forms, PDFs, QR-code destinations, slideshows, photos, video, and
  audio should be embedded later.
- Shared header/footer/nav markup is duplicated at the top and bottom of each
  page (no templating engine is used). When adding a new page, copy the
  header/nav/footer block from an existing page and update the
  `aria-current="page"` attribute to match.
- All design tokens (colors, spacing, radii) live at the top of
  `assets/css/styles.css` under `:root` — adjust there to restyle site-wide.

## Accessibility features already in place

- Skip-to-content link on every page
- Semantic landmarks (`header`, `nav`, `main`, `footer`)
- Visible focus states for keyboard navigation
- Mobile nav toggle with `aria-expanded`/`aria-controls` and Escape-to-close
- Color palette chosen for contrast (verify with a contrast checker if you
  change brand colors)
- `prefers-reduced-motion` respected for animated transitions

## Placeholder branding

The header uses a text-based placeholder mark ("GC") and program name instead
of a real district logo. Replace `assets/img/` and the `.brand-mark` markup
once official, approved branding assets are available.
