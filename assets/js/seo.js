(function () {
  var SITE_ORIGIN = "https://langstitch.com";
  var SITE_PATH = "";
  var SITE_URL = SITE_ORIGIN + SITE_PATH;
  var SITE_NAME = "LangStitch";
  var TWITTER = "@LangStitch";
  var AUTHOR = "LangStitch";
  var EMAIL = "connect@langstitch.com";
  var DEFAULT_IMAGE = SITE_ORIGIN + "/assets/og-card.svg";
  var LANGTAILOR_URL = "https://langtailor.langstitch.com/";
  var OPENVSX_URL = "https://open-vsx.org/extension/langstitch/langtailor-canvas";

  var PAGES = {
    "index.html": {
      title: "LangStitch — Visual LangGraph Platform · Multi-language Export",
      description:
        "The agent engineering platform — visual LangGraph canvas, multi-language SDK (Python, Spring AI, Go, Rust), Component Designer, marketplace, and LangTailor IDE. Design once, export to your stack.",
      keywords:
        "LangStitch, LangGraph platform, agent engineering, visual canvas, multi-language export, Spring AI agents, Go agents, Rust agents, Python export, SDK, marketplace, LangTailor, RAG, guardrails, Component Designer",
      type: "website",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: SITE_NAME,
          url: SITE_URL + "/",
          description:
            "Visual LangGraph platform — canvas, multi-language SDK, marketplace, and LangTailor IDE. Export Python, Spring AI, Go, and Rust.",
          inLanguage: "en-US",
          publisher: {
            "@type": "Organization",
            name: SITE_NAME,
            url: SITE_URL + "/",
            email: EMAIL,
            contactPoint: [
              {
                "@type": "ContactPoint",
                email: EMAIL,
                contactType: "sales",
                description: "Business inquiries and partnerships"
              },
              {
                "@type": "ContactPoint",
                email: EMAIL,
                contactType: "customer support",
                description: "Training, workshops, and team enablement"
              }
            ]
          },
          potentialAction: {
            "@type": "SearchAction",
            target: SITE_URL + "/docs/",
            "query-input": "required name=search_term_string"
          }
        },
        {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: SITE_NAME,
          applicationCategory: "DeveloperApplication",
          operatingSystem: "Windows, macOS, Linux",
          description:
            "Agent engineering platform — visual canvas, Component Designer, multi-language SDK, marketplace, and LangTailor IDE. Export Python, Spring AI, Go, and Rust.",
          featureList: [
            "Visual LangGraph canvas",
            "Multi-language export",
            "Python SDK on PyPI",
            "Spring AI export",
            "Go and Rust export",
            "Component Designer",
            "Marketplace"
          ],
          url: SITE_URL + "/",
          downloadUrl: LANGTAILOR_URL,
          softwareVersion: "0.1.0",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          author: { "@type": "Organization", name: AUTHOR, email: EMAIL },
          license: "https://opensource.org/licenses/MIT"
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What languages can LangStitch export to?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "LangStitch and LangTailor export production projects for Python (available now on PyPI), Spring AI (Java), Go, and Rust from the same visual canvas and project format."
              }
            },
            {
              "@type": "Question",
              name: "Is LangStitch only a Python tool?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "No. LangStitch is a multi-language agent engineering platform. The Python SDK ships today; Spring AI, Go, and Rust runtimes share the same graphs/, skills/, guardrails/, and deploy/ layout exported from LangTailor."
              }
            }
          ]
        }
      ]
    },
    "try.html": {
      title: "Download LangStitch — VSX extension & LangTailor",
      description:
        "Download the LangStitch canvas VSX extension or LangTailor desktop IDE. No hosted browser IDE.",
      keywords: "LangStitch download, VSX, Open VSX, LangTailor, LangGraph IDE",
      type: "website"
    }
  };

  function fileName() {
    var segs = location.pathname.split("/").filter(Boolean);
    var last = segs[segs.length - 1] || "";
    if (!last || !/\.html$/i.test(last)) return "index.html";
    return last;
  }

  function upsertMeta(name, content, property) {
    if (!content) return;
    var sel = property ? 'meta[property="' + name + '"]' : 'meta[name="' + name + '"]';
    var node = document.head.querySelector(sel);
    if (!node) {
      node = document.createElement("meta");
      if (property) node.setAttribute("property", name);
      else node.setAttribute("name", name);
      document.head.appendChild(node);
    }
    node.setAttribute("content", content);
  }

  function upsertLink(rel, href, attrs) {
    if (!href) return;
    var node = document.head.querySelector('link[rel="' + rel + '"]');
    if (!node) {
      node = document.createElement("link");
      node.setAttribute("rel", rel);
      document.head.appendChild(node);
    }
    node.setAttribute("href", href);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        node.setAttribute(k, attrs[k]);
      });
    }
  }

  function injectJsonLd(blocks) {
    if (!blocks || !blocks.length) return;
    var existing = document.getElementById("langstitch-jsonld");
    if (existing) existing.remove();
    var script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "langstitch-jsonld";
    script.textContent = JSON.stringify(blocks.length === 1 ? blocks[0] : blocks);
    document.head.appendChild(script);
  }

  var fn = fileName();
  var page = PAGES[fn];
  if (!page) return;

  var canonical =
    fn === "index.html" ? SITE_URL + "/" : fn === "try.html" ? LANGTAILOR_URL : SITE_URL + "/" + fn;

  document.title = page.title;
  upsertMeta("description", page.description);
  upsertMeta("keywords", page.keywords);
  upsertMeta("author", AUTHOR);
  upsertMeta("robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
  upsertMeta("googlebot", "index, follow, max-image-preview:large");
  upsertMeta("bingbot", "index, follow");
  upsertMeta("theme-color", "#6366f1");
  upsertLink("canonical", canonical);
  upsertLink("sitemap", SITE_URL + "/sitemap.xml", {
    type: "application/xml",
    title: "Sitemap"
  });
  upsertMeta("og:site_name", SITE_NAME, true);
  upsertMeta("og:type", page.type || "website", true);
  upsertMeta("og:url", canonical, true);
  upsertMeta("og:title", page.title, true);
  upsertMeta("og:description", page.description, true);
  upsertMeta("og:image", DEFAULT_IMAGE, true);
  upsertMeta("og:locale", "en_US", true);
  upsertMeta("twitter:card", "summary_large_image");
  upsertMeta("twitter:site", TWITTER);
  upsertMeta("twitter:title", page.title);
  upsertMeta("twitter:description", page.description);
  upsertMeta("twitter:image", DEFAULT_IMAGE);
  if (page.jsonLd) injectJsonLd(page.jsonLd);
})();
