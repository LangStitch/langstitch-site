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

| Secret | Purpose |
|--------|---------|
| `FTP_SERVER` | FTP IP from hPanel → Plan Details |
| `FTP_USERNAME` | FTP account username |
| `FTP_PASSWORD` | FTP account password |

| Variable | Default |
|----------|---------|
| `FTP_SERVER_DIR` | `domains/langstitch.com/public_html/` |
| `SDK_SERVER_DIR` | `domains/sdk.langstitch.com/public_html/` |

Use the same FTP credentials across all LangStitch site repos on this Hostinger account.

## Local preview

```bash
python -m http.server 8000
# open http://localhost:8000
```
