# LangStitch — Product Website

Marketing site and documentation for [LangStitch](https://langstitch.com), the
visual LangGraph IDE.

- **Live:** https://langstitch.com
- **Docs:** https://langstitch.com/docs/
- **LangTailor (desktop IDE):** https://langtailor.langstitch.com
- **SDK:** https://github.com/LangStitch/langstitch-sdk

## Structure

```
index.html      Landing page
try.html        Lightweight "try" redirect page
styles.css      Site styles
assets/         JS (SEO/structured data) and media
docs/           Documentation + SDK user guide
CNAME           Custom domain (langstitch.com)
sitemap.xml     Sitemap
robots.txt      Crawler directives
```

## Deploy

Static site, published to GitHub Pages on every push to `main` via
`.github/workflows/pages.yml`. No build step — files are served as-is.

## Local preview

```bash
python -m http.server 8000
# open http://localhost:8000
```
