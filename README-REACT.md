# Innovators Hub — React (Vite)

The site is now built with **React + Vite**. Same black + orange design, scroll-driven gallery, and full-viewport sections.

## First-time setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Static assets**  
   Vite serves files from `public/`. If `public/Images` and `public/Gallery Images` don’t exist yet, copy them from the repo root:
   ```bash
   cp -r Images public/
   cp -r "Gallery Images" public/
   ```
   (On Windows: copy the `Images` and `Gallery Images` folders into the `public` folder.)

3. **Run the dev server**
   ```bash
   npm run dev
   ```
   Open the URL shown (e.g. http://localhost:5173).

## Build & deploy

```bash
npm run build
```

Output is in `dist/`. Deploy the contents of `dist/` to your host (e.g. GitHub Pages).

- **GitHub Pages**: Push the contents of `dist/` to your `gh-pages` branch, or use a GitHub Action that runs `npm run build` and deploys `dist/`.
- **Custom domain**: Keep `CNAME` in `public/` (it’s already there); it will be copied into `dist/` when you build.

## Routes

- `/` — Home (hero, quote, gallery, partners, CTA)
- `/about` — About (placeholder)
- `/events` — Events (placeholder)
- `/launchpads` — Launchpad (placeholder)
- `/innovators` — Innovators (placeholder)
- `/contacts` — Contact (placeholder)

You can move content from the old HTML pages (`about.html`, `events.html`, etc.) into the corresponding React pages when you’re ready.

## Vanilla backup

The previous single-file site is saved as **`index-vanilla-backup.html`**. To revert to it, rename that file back to `index.html` and remove or bypass the React app (e.g. stop using the Vite entry point).
