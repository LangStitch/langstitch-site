# LangStitch — Product Website

Product site for **LangStitch**: visual workflows, Python SDK 0.3.2, Java compiler 0.2.2, native Go export in LangTailor 0.4.0, and shared spec 2.2.0. Advanced target limits are documented explicitly; Rust remains planned.

- **Live:** https://langstitch.com
- **Docs redirect:** https://langstitch.com/docs/ → https://sdk.langstitch.com/docs/
- **LangTailor (desktop IDE):** https://langtailor.langstitch.com
- **SDK docs:** https://sdk.langstitch.com (repo: `langstitch-sdk-site`)

## Structure

```
index.html      Landing page
try.html        Redirect to the LangTailor download
styles.css      Site styles
assets/         UI scripts and social preview media
docs/           Redirect to sdk.langstitch.com/docs/
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

Search metadata, canonical URL, social cards and JSON-LD are present in the original HTML. FAQ structured data matches the visible questions and answers. The sitemap includes only canonical indexable pages; legacy docs and download redirects are excluded. The 1200 × 630 PNG social card is rendered from the UTF-8 SVG source. Search indexing and ranking remain controlled by search engines.

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
