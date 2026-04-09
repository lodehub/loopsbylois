# Loops by Lois — Site Guide

A warm creative portfolio built with Jekyll, hosted on GitHub Pages.

---

## Adding a new piece of work

1. Open the right folder in your repo:
   - `_crochet/` — crochet projects, tutorials, tips
   - `_procreate/` — iPad drawings
   - `_sketches/` — pencil, pen, paper sketches
   - `_writing/` — poems, essays, reflections, stories

2. **Duplicate the template file** inside that folder (the one starting with `_TEMPLATE`).

3. **Rename your copy** — use lowercase and hyphens, no spaces. E.g. `cosy-winter-hat.md`

4. **Fill in the header** (the block between the `---` lines at the top):
   ```
   title: "Your title here"
   date: 2026-04-09        ← today's date
   type: tutorial          ← tutorial | tip | thought | project
   thumbnail: /assets/images/your-image.jpg   ← optional
   description: "One sentence for the card."
   ```

5. **Write your content** below the header. Plain text works — or use Markdown:
   - `## Heading` for a section heading
   - `*italic*` for italic, `**bold**` for bold
   - `- item` for a bullet list
   - `> quote` for a pull quote

6. **Add images**: Put your photo/scan in `assets/images/`, then reference it in your file:
   ```
   ![Description](/assets/images/your-image.jpg)
   ```

7. **Commit in GitHub Desktop** and push — the site updates automatically.

---

## Updating the homepage

- Open `index.md` to change the hero text, quote strip, or about teaser
- The 6 most recent pieces across all categories appear automatically

## Updating the About page

- Open `_pages/about.md` and replace the placeholder text

## Placeholders to fill in

Search for `<!-- PLACEHOLDER` across the repo to find everything still waiting for Lois's words.

---

## Site structure

```
_crochet/          ← crochet pieces (one .md file each)
_procreate/        ← Procreate pieces
_sketches/         ← sketch pieces
_writing/          ← writing pieces
_pages/            ← About, Contact, Projects pages
_layouts/          ← page templates (don't edit unless you know Jekyll)
assets/
  css/main.css     ← all the styles
  images/          ← all your photos go here
_config.yml        ← site settings (title, URL, etc.)
index.md           ← homepage
```
