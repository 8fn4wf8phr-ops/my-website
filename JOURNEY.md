# Build Journey: Portfolio Site

A look at how this portfolio site came together, step by step.

## 1. Starting point

The site started simple: a single HTML page with a Hero, About, and Contact section, styled with plain CSS using custom properties for an easy-to-tweak color palette, and a small amount of vanilla JavaScript for a mobile nav toggle, an auto-updating footer year, and scroll-reveal animations powered by `IntersectionObserver`. No frameworks, no build step — just HTML, CSS, and JS.

## 2. Adding a Projects section

Once the Tic-Tac-Toe (React) game and the Calculator app were both built and deployed, the next step was giving them a home on the portfolio. A new `#projects` section was added between About and Contact, with a card for each project — description, tech tags, and buttons linking out to the live demo and the GitHub repo. The cards use a CSS grid (`auto-fit, minmax(260px, 1fr)`) so they reflow naturally from a single column on mobile up to a multi-column row on wider screens, and they picked up the same `reveal` scroll-in animation the rest of the page already used, for free.

## 3. Deploying it live

The site was pushed to GitHub and connected to Vercel using the "Other" framework preset — a static site with no build step, so there was nothing to configure beyond the root directory. It's now live at a permanent Vercel URL, so the portfolio (and the projects it links to) can be shared with anyone.

## 4. Open Graph tags and a preview image

To make links to the site look good when shared — in Slack, iMessage, Twitter/X, wherever — Open Graph and Twitter Card meta tags were added to the `<head>`, along with a custom 1200×630 preview image generated to match the site's own branding (the same "JM" mark as the favicon, the tagline, and a small preview of the tech stack). Verified by loading the image directly and checking the rendered meta tag values on the live site.

## 5. Documentation and GitHub

With the Projects section, live deployment, and social preview all in place, the last step was writing this README and journey file, matching the documentation style used for the Tic-Tac-Toe (React) and Calculator projects — so anyone (including future me) can see what the site does and how it was built.

## What's next

A few ideas for later:

- Swap in a real `resume.pdf` (currently a placeholder)
- A dark mode toggle, matching the one built for the Tic-Tac-Toe game
- A short "how I built this" write-up linking to each project's own JOURNEY.md
- Maybe a blog or notes section, if I start writing more about what I'm learning
