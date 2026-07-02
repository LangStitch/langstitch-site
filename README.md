# LangStitch — Product Website

Marketing site and documentation for the LangStitch ecosystem: the **LangStitch SDK**
(code-first LangGraph) and the **LangTailor** desktop IDE.

- **Live:** https://langstitch.com
- **Docs:** https://langstitch.com/docs/
- **LangTailor (desktop IDE):** https://langtailor.langstitch.com
- **SDK:** https://pypi.org/project/langstitch/ · docs at https://sdk.langstitch.com/

## Structure

```
index.html      Landing page
try.html        Redirect to the LangTailor download
styles.css      Site styles
assets/         JS (SEO/structured data) and media
docs/           Documentation + SDK user guide
CNAME           Custom domain (langstitch.com)
sitemap.xml     Sitemap
robots.txt      Crawler directives
```

## Deploy

Static site, published on every push to `main`:

| Target | Workflow | Live URL |
|--------|----------|----------|
| GitHub Pages | `.github/workflows/pages.yml` | https://langstitch.com (CNAME) |
| Hostinger FTPS | `.github/workflows/deploy-hostinger.yml` | https://langstitch.com + https://sdk.langstitch.com |

No build step — files are served as-is.

### Hostinger secrets (this repo)

| Secret | Value |
|--------|--------|
| `FTP_SERVER` | `217.21.84.75` (Hostinger FTP IP — use the IP only, no `ftp://` prefix) |
| `FTP_USERNAME` | `u743467360.langstitchdeveloper` |
| `FTP_PASSWORD` | FTP password for that account |
| `SDK_FTP_USERNAME` | `u743467360.sdkdeveloper` |
| `SDK_FTP_PASSWORD` | FTP password for SDK account |

Each subdomain has its own scoped FTP user in hPanel. Deploy targets `./` (account root).

## Local preview

```bash
python -m http.server 8000
# open http://localhost:8000
```
