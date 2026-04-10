<p align="center">
  <img src="./icons/icon-192.png" alt="Chaoxing Student Portal icon" width="96" height="96">
</p>

# Chaoxing (XueXiTong) Student Portal

[中文](./README.md)

[![Open in Cloudflare Pages](https://img.shields.io/badge/Open-Cloudflare%20Pages-F38020?logo=cloudflare&logoColor=white)](https://dash.cloudflare.com/?to=/:account/workers-and-pages/create)
[![Deploy with EdgeOne Pages](https://cdnstatic.tencentcs.com/edgeone/pages/deploy.svg)](https://edgeone.ai/pages/new?repository-url=https%3A%2F%2Fgithub.com%2Fhelloene%2Fchaoxing-xuexitong-student-portal&project-name=chaoxingportal&output-directory=.)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fhelloene%2Fchaoxing-xuexitong-student-portal)

A lightweight static portal that brings together common Chaoxing (XueXiTong) student links in one place. It has no backend, no build step, and no runtime dependencies, so it can be deployed directly to GitHub Pages, Cloudflare Pages, EdgeOne Pages, Vercel, or opened locally in a browser.

## Overview

This project is intended to:

- bring common Chaoxing entry points together for easier access
- help already signed-in users reach the right destination faster
- stay simple to host, maintain, and customize

It is a navigation portal, not a proxy, not an automation tool, and not a replacement for Chaoxing itself.

## Live Demos

- [Cloudflare Pages](https://chaoxing.gorowan.dev) ([pages.dev](https://chaoxingportal.pages.dev/))
- [EdgeOne Pages](https://xuexitong.gorowan.dev)
- [Vercel](https://chaoxingportal.vercel.app/)
- [GitHub Pages](https://helloene.github.io/chaoxing-xuexitong-student-portal/)

## Features

- 10 built-in Chaoxing links commonly used by students
- Material Design 3 inspired interface
- Light / dark mode
- Chinese / English language switch
- The root URL auto-selects a language from the device/browser and remembers manual switches
- Separate Chinese and English entry pages so Safari share/install metadata matches the current page language
- Installable as a PWA
- Fully static, zero-dependency, no build pipeline

## Good Fit For

- a personal browser start page for Chaoxing
- a mobile or desktop PWA shortcut to student services
- a simple student portal hosted without any backend

## Usage Notes And Privacy

- This project does **not** bypass Chaoxing login.
- This project does **not** crack restrictions or collect, store, or upload cookies.
- Users can only access their own pages after signing in with their own browser session.
- The PWA caches only this portal's static assets, not personal Chaoxing content.
- If the required login session is missing, the target service will redirect to its login page as usual.

## Built-in Links

| Entry | URL |
|-------|-----|
| Homework | `https://mooc1-api.chaoxing.com/mooc-ans/mooc2/work/all-task` |
| Exams | `https://mooc1-2.chaoxing.com/exam-ans/exam/test/examcode/examlist` |
| Inbox | `https://notice.chaoxing.com/pc/notice/myNotice` |
| Courses | `https://mooc1.chaoxing.com/visit/interaction` |
| Notebooks | `https://noteyd.chaoxing.com/pc/note_notebook/myNotebooksLatest` |
| Cloud Drive | `https://pan-yz.chaoxing.com/pcuserpan/index` |
| Schedule | `https://kb.chaoxing.com/res/pc/curriculum/schedule.html` |
| Micro Reading | `https://rec2.chaoxing.com/h5/new/dist/index.html#/` |
| Video Knowledge | `https://homepage.chaoxing.com/knowData` |
| Paper Similarity Check | `https://dsa.dayainfo.com/smas/show/upload` |

## Quick Start

### Option 1: Open Locally

Open `index.html` (Chinese) or `en.html` (English) directly in a browser.

This is best for a quick check of the page layout, copy, and destination links. When opened through `file://`, install prompts, Service Worker caching, and the offline shell usually do not behave like a real deployment.

If you want to test language routing, install behavior, and offline support in an environment closer to production, run:

```bash
python3 -m http.server
```

Then visit `http://localhost:8000`.

### Option 2: Deploy To GitHub Pages

1. Create a GitHub repository
2. Upload all project files
3. Enable GitHub Pages in repository settings
4. Deploy from the root of the default branch
5. Open the generated site URL

If you want installable PWA behavior, serve the site over HTTPS. GitHub Pages already provides that.

### Option 3: Deploy To Cloudflare Pages

[![Open in Cloudflare Pages](https://img.shields.io/badge/Open-Cloudflare%20Pages-F38020?logo=cloudflare&logoColor=white)](https://dash.cloudflare.com/?to=/:account/workers-and-pages/create)

1. Click the button above to open `Workers & Pages -> Create application` in Cloudflare
2. Select `Pages`
3. Choose `Import an existing Git repository`
4. Select this repository, or your own fork
5. Use the following deployment settings:

| Setting | Value |
|-------|-------|
| Production branch | `main` |
| Build command | `exit 0` |
| Build output directory | `.` |
| Root directory (advanced) | leave blank |

6. Click `Save and Deploy`
7. After deployment finishes, open the generated `*.pages.dev` URL

This project keeps its static files in the repository root and already includes a top-level `index.html`, so it can be deployed to Pages with the configuration above.

### Option 4: Deploy To EdgeOne Pages

[![Deploy with EdgeOne Pages](https://cdnstatic.tencentcs.com/edgeone/pages/deploy.svg)](https://edgeone.ai/pages/new?repository-url=https%3A%2F%2Fgithub.com%2Fhelloene%2Fchaoxing-xuexitong-student-portal&project-name=chaoxingportal&output-directory=.)

1. Click the button above and sign in to EdgeOne Pages
2. Authorize GitHub and select this repository, or your own fork
3. If the console does not fully prefill the settings, confirm the following values:

| Setting | Value |
|-------|-------|
| Production branch | `main` |
| Build command | leave blank |
| Output directory | `.` |
| Root directory | leave blank |

4. Click `Create now` or the deploy action in the console
5. After deployment finishes, open the EdgeOne Pages domain assigned to the project

This project is fully static and already ships a ready-to-serve `index.html` in the repository root, so no extra build step is normally required. The button above also pre-fills the repository URL and output directory for a faster setup.

### Option 5: Deploy To Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fhelloene%2Fchaoxing-xuexitong-student-portal)

1. Click the button above and sign in to Vercel
2. Choose your Git provider account and target repository name
3. If Vercel asks you to confirm build settings manually, use:

| Setting | Value |
|-------|-------|
| Framework Preset | `Other` |
| Build Command | leave blank |
| Output Directory | `.` |
| Root Directory | leave blank |

4. Click `Deploy`
5. After deployment finishes, open the generated Vercel domain

This is a fully static project, and the repository root already contains a ready-to-serve `index.html`, so no extra build step is normally required.

## What You Can Customize

To adapt the portal for your own use, these are the main files to edit:

- `index.html` / `en.html`: localized entry pages, static copy, share metadata
- `faq.html` / `faq.en.html`: FAQ pages, supporting guidance, and direct-link lists
- `script.js`: i18n strings, theme switching, PWA install behavior
- `styles.css`: visual design
- `app.webmanifest` / `app.en.webmanifest`: localized app names, descriptions, and theme color
- `icons/icon.svg`: app icon

## Project Structure

```text
.
├── index.html
├── en.html
├── faq.html
├── faq.en.html
├── styles.css
├── script.js
├── sw.js
├── app.webmanifest
├── app.en.webmanifest
├── icons/
│   └── icon.svg
├── README.md
├── README.en.md
├── LICENSE
└── .gitignore
```

## Technical Notes

- No framework, bundler, or third-party dependencies
- Uses `localStorage` for theme preferences
- Uses a Service Worker to cache the static shell
- Uses separate localized entry pages so Safari share cards and install names stay aligned with the current page language
- Shows Safari-specific install guidance for “Add to Home Screen” and “Add to Dock”
- Opens external Chaoxing pages in new tabs

## Notes

- If Chaoxing changes its URLs or page structure, some links may need manual updates.
- Safari does not expose a page-triggered install prompt like Chromium browsers. On iPhone/iPad, install via “Add to Home Screen”; on Mac, install via “Add to Dock”.
- Some browsers expose PWA installation differently. If the install button does not appear, use the browser menu option such as "Install App" or "Add to Home Screen".
- This project only aggregates entry points and does not guarantee the availability of third-party services.

## License

MIT
