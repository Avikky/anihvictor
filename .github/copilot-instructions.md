# Copilot Instructions – anihvictor Portfolio

## Project Overview
A static personal portfolio website for **Anih Victor**. It has no build framework beyond a Sass compiler. All authored code lives in `scss/` and `dist/` (HTML + vanilla JS). The compiled CSS (`dist/css/main.css`) is the **output** of the Sass pipeline – never edit it directly.

## Repository Structure
```
scss/          ← source styles (edit here)
  _config.scss   variables, mixins, media-query helpers
  _menu.scss     overlay nav component
  _progressBar.scss  animated skill bars (about page)
  _mobile.scss   responsive overrides
  buttons.scss   reusable button styles
  main.scss      entry point – imports all partials
dist/          ← deployable site (HTML, compiled CSS, JS, assets)
  index.html / about.html / work.html / contact.html
  css/main.css   ← compiled output, do NOT edit manually
  js/
    appCoreFunctions.js  menu toggle + TypeWriter class
    main.js              page-specific init (typewriter, ProgressBar instances)
  img/           dist-level images (referenced from HTML)
img/             source images (portrait.jpg, mobile.jpg referenced by Sass)
```

## Developer Workflows

### Watch & compile Sass
```bash
npm run sass        # node-sass -w scss/ -o dist/css/ --recursive
```
Run this during development; it watches `scss/` and writes `dist/css/main.css`.

### Deploy to GitHub Pages
```bash
npm run deploy      # gh-pages -d dist
```
Publishes the `dist/` folder to `gh-pages` branch → https://avikky.github.io/anihvictor

## Styling Conventions

- **All design tokens live in `scss/_config.scss`**: `$primary-color`, `$secondary-color`, `$background-opacity`, image variables.
- **Text color is derived**: always use `set-text-color($primary-color)` instead of hard-coding `#fff` or `#000`.
- **Transitions**: use the `@include easeOut` mixin (0.5s ease-out) for all hover/state transitions.
- **Responsive breakpoints** are mixins in `_config.scss`: `@include mediaSm` (≤500px), `@include mediaMd` (≤768px), `@include mediaLg` (769–1170px), `@include mediaXL` (≥1171px).
- The full-page background overlay is handled by the `@mixin background()` conditional in `_config.scss` – toggled via `$show-home-image: true`.

## JavaScript Architecture

Both JS files are plain vanilla ES6, loaded at the bottom of every page via `<script>` tags (no bundler).

- `appCoreFunctions.js` – loaded on **all pages**:  
  - Menu toggle: queries `.menu-btn`, `.menu`, `.menu-nav`, `.menu-branding`, `.nav-item` and adds/removes the `show` / `close` CSS classes.  
  - `TypeWriter` class: reads `data-words` (JSON array) and `data-wait` attributes from `.txt-type` span and animates character-by-character typing.

- `main.js` – page-specific init:  
  - Calls `new TypeWriter(...)` (index page).  
  - Instantiates `new ProgressBar(element, percentage)` for each skill bar (about page). `ProgressBar` is defined in `appCoreFunctions.js`.

## HTML Patterns

- Each page shares an identical `<header>` block (hamburger menu + nav). Mark the current page with `class="nav-item current"` on the relevant `<li>`.
- The home page `<body>` carries `id="bg-img"` – this is the anchor for the Sass `@mixin background()` selector.
- Live chat is injected via a Tawk.to script snippet (index.html only).
- FontAwesome is self-hosted: `dist/fonts/fontawesome-all.css` + `dist/webfonts/`.

## External Integrations
- **Tawk.to** live chat (index.html) – embed ID `5dc432551936a27a715fc6b0`.
- **FontAwesome 5** (self-hosted in `dist/fonts/` and `dist/webfonts/`).
- **gh-pages** npm package handles deployment.
