# Jacquez Monroe — Portfolio

My personal portfolio site — a single-page introduction, a showcase of projects I've built, and a way to get in touch.

**Live:** https://my-website-murex-six-54.vercel.app
**GitHub:** https://github.com/8fn4wf8phr-ops/my-website

## Features

- Responsive single-page layout — Hero, About, Projects, Contact
- Projects section with live demo + GitHub links for each build
- Scroll-reveal animations as sections enter the viewport
- Sticky header with a mobile hamburger nav
- Back-to-top button
- Downloadable resume link
- Open Graph / Twitter Card meta tags with a custom preview image, so links shared on social media and messaging apps show a proper preview
- Auto-updating footer year

## Tech Stack

- HTML5
- CSS3 (custom properties for theming, no framework)
- Vanilla JavaScript — no build step, no dependencies
- Deployed on Vercel

## Getting Started

No build step required. Open `index.html` directly in a browser, or serve the folder locally:

```
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Project Structure

```
my-website/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── favicon.svg
├── og-image.png
└── resume/
    └── resume.pdf
```

## Related Projects

- [Tic-Tac-Toe (React)](https://github.com/8fn4wf8phr-ops/tic-tac-toe-react) — [live demo](https://tic-tac-toe-react-sand-ten.vercel.app/)
- [Calculator](https://github.com/8fn4wf8phr-ops/calculator-app) — [live demo](https://calculator-app-three-sand.vercel.app/)
