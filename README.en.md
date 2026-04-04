# Chaoxing (XueXiTong) Student Portal

[中文](./README.md)

A lightweight static portal that brings together common Chaoxing (XueXiTong) student links in one place. It has no backend, no build step, and no runtime dependencies, so it can be deployed directly to GitHub Pages or opened locally in a browser.

## Overview

This project is intended to:

- bring common Chaoxing entry points together for easier access
- help already signed-in users reach the right destination faster
- stay simple to host, maintain, and customize

It is a navigation portal, not a proxy, not an automation tool, and not a replacement for Chaoxing itself.

## Features

- 10 built-in Chaoxing links commonly used by students
- Material Design 3 inspired interface
- Light / dark mode
- Chinese / English language switch
- Automatic initial theme and language detection
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

Open `index.html` directly in a browser.

If you want a setup closer to production, run:

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

## What You Can Customize

To adapt the portal for your own use, these are the main files to edit:

- `index.html`: link cards, static copy, page structure
- `script.js`: i18n strings, theme switching, PWA install behavior
- `styles.css`: visual design
- `app.webmanifest` / `app.en.webmanifest`: localized app names, descriptions, and theme color
- `icons/icon.svg`: app icon

## Project Structure

```text
.
├── index.html
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
- Uses `localStorage` for theme and language preferences
- Uses a Service Worker to cache the static shell
- Opens external Chaoxing pages in new tabs

## Notes

- If Chaoxing changes its URLs or page structure, some links may need manual updates.
- Some browsers expose PWA installation differently. If the install button does not appear, use the browser menu option such as "Install App" or "Add to Home Screen".
- This project only aggregates entry points and does not guarantee the availability of third-party services.

## License

MIT
