# System design archive

A rebuilt archive of a full course in system analysis and design. Each lecture is
rewritten from scratch as a standalone lesson; the diagrams are screenshots of
the original slides, cited by slide number. Two closing chapters carry the whole
method through one worked example and then into AI-assisted practice.

## Contents

| # | Lecture | Source |
|---|---|---|
| 01 | Introduction to systems and the analyst | Lecture 1 |
| 02 | Modeling organizational systems | Lecture 2 |
| 03 | Project management | Lecture 3 |
| 04 | Information gathering: interactive methods | Lecture 4 |
| 05 | Information gathering: unobtrusive methods | Lecture 5 |
| 06 | Agile modeling and prototyping | Lecture 6 |
| 07 | Object-oriented analysis with UML | Lecture 7 |
| 08 | Data flow diagrams | Lecture 8 |
| 09 | Process specifications and structured decisions | Lecture 9 |
| 10 | Designing effective output | Lecture 10 |
| 11 | Designing effective input | Lecture 11 |
| 12 | The semester project, end to end | Project task list |
| 13 | A worked project, from goal statement to class diagram | archive-original |
| 14 | System design in the age of AI | archive-original |

Lectures 13 and 14 have no source deck, so they carry no slide figures — the
models in them are written out in prose and tables.

## Develop

```
npm install
npm run dev      # http://localhost:4321/system-design/
npm run build    # -> dist/
npm run preview
```

Node 22 (`.nvmrc`).

## Structure

| Path | What |
|---|---|
| `src/content/lectures/*.mdx` | one file per lecture; `draft: true` hides a page from the production build |
| `src/content.config.ts` | the lecture collection schema (number, title, summary, topics, source …) |
| `src/layouts/`, `src/components/` | the shell, lecture layout, figure / note / pager / rail |
| `src/styles/tokens/` | the SMH Portfolio Design System tokens, copied verbatim |
| `src/styles/global.css` | token imports plus the documentation-site extensions |
| `public/diagrams/lecNN/` | cropped slide screenshots |

## Diagrams

No diagram is drawn by hand. Every figure is a crop of the original lecture slide
it came from, cited by slide number. To add one, render the slide and crop it:

```
pdftoppm -png -r 150 -f <page> -l <page> Lecture_N.pdf out
magick out-<page>.png -crop WxH+X+Y +repage -fuzz 12% -trim +repage \
  -bordercolor white -border 18 public/diagrams/lecNN/<name>.png
```

Then place it with `<Figure src="lecNN/<name>.png" alt="…" caption="…" source="Lecture N, slide <page>" />`.

## Deploy

`.github/workflows/static.yml` runs on push to `main`: it builds the site with
Node 22 and publishes `dist/` to GitHub Pages. `astro.config.mjs` sets
`base: '/system-design'`, so the site lives at
`https://syedmehedihussain.github.io/system-design/`.

## Credits

Compiled and rewritten by [Syed Mehedi Hussain](https://syedmehedihussain.codes),
from the System Analysis and Design course at the Department of Computer Science
and Engineering, Independent University, Bangladesh
([Dr. Razib Hayat Khan](https://iub.ac.bd/academics/departments/cse/faculty-and-staff/rkhan)).
The lecture slides are the source of every diagram and of the course's structure;
the explanatory text is new.
