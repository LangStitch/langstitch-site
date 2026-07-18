# LangStitch — Product Website

Marketing site for the **LangStitch** agent engineering platform — visual LangGraph canvas, multi-language project generation (Python on PyPI and Spring AI on Maven Central today; Go and Rust expanding), marketplace, and **LangTailor** IDE.

- **Live:** https://langstitch.com
- **Docs redirect:** https://langstitch.com/docs/ → https://sdk.langstitch.com
- **LangTailor (desktop IDE):** https://langtailor.langstitch.com
- **SDK docs:** https://sdk.langstitch.com (repo: `langstitch-sdk-site`)

## Structure

```
index.html      Landing page
try.html        Redirect to the LangTailor download
styles.css      Site styles
assets/         JS (SEO/structured data) and media
docs/           Redirect to sdk.langstitch.com
CNAME           Custom domain (langstitch.com)
sitemap.xml     Sitemap
robots.txt      Crawler directives
```

## Deploy

Static site, published on every push to `main`:

| Target | Workflow | Live URL |
|--------|----------|----------|
| GitHub Pages | `.github/workflows/pages.yml` | https://langstitch.github.io/langstitch-site/ |
| Hostinger FTPS | `.github/workflows/deploy-hostinger.yml` | https://langstitch.com |

No build step — files are served as-is.

### Hostinger secrets (this repo)

| Secret | Value |
|--------|--------|
| `FTP_SERVER` | Hostinger FTP host (IP only, no `ftp://` prefix) |
| `FTP_USERNAME` | FTP username for the langstitch.com account |
| `FTP_PASSWORD` | FTP password for that account |

Deploy targets `./` (the FTP account root). Hostinger serves the parent web folder at `/`; `hostinger-webroot.htaccess` rewrites requests into the FTP folder.

**LangTailor site content** lives only in `langtailor-site` (https://langtailor.langstitch.com). Do not copy langtailor pages or assets into this repo — the Hostinger deploy excludes `langtailor/**` and `sdk/**` so sibling subdomains are never overwritten.

## Local preview

```bash
python -m http.server 8000
# open http://localhost:8000
```
