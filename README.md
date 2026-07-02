# LangStitch — Product Website

Marketing site for the **LangStitch** agent engineering platform — visual LangGraph canvas, multi-language SDK (Python, Spring AI, Go, Rust), marketplace, and **LangTailor** IDE.

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
| GitHub Pages | `.github/workflows/pages.yml` | https://langstitch.com (after DNS → GitHub Pages) |
| Hostinger FTPS | `.github/workflows/deploy-hostinger.yml` | Mirror at `/public_html/` on Hostinger |

**DNS:** `langstitch.com` must point to **GitHub Pages** for the primary site to update. In Hostinger hPanel → DNS, set apex `A` records to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` (or `CNAME` `www` → `langstitch.github.io`). The scoped FTP account cannot write the live docroot for the apex domain.

No build step — files are served as-is.

### Hostinger secrets (this repo)

| Secret | Value |
|--------|--------|
| `FTP_SERVER` | `217.21.84.75` (Hostinger FTP IP — use the IP only, no `ftp://` prefix) |
| `FTP_USERNAME` | `u743467360.langstitchdeveloper` |
| `FTP_PASSWORD` | FTP password for that account |

Deploy targets `./` (account root).

## Local preview

```bash
python -m http.server 8000
# open http://localhost:8000
```
