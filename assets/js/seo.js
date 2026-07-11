(function () {
  var SITE_ORIGIN = "https://langstitch.com";
  var SITE_PATH = "";
  var SITE_URL = SITE_ORIGIN + SITE_PATH;
  var SITE_NAME = "LangStitch";
  var TWITTER = "@LangStitch";
  var AUTHOR = "LangStitch";
  var EMAIL = "connect@langstitch.com";
  var DEFAULT_IMAGE = SITE_ORIGIN + "/assets/og-card.png";
  var LANGTAILOR_URL = "https://langtailor.langstitch.com/";
  var OPENVSX_URL = "https://open-vsx.org/extension/langstitch/langtailor-canvas";

  var PAGES = {
    "index.html": {
      title: "LangStitch — Visual LangGraph Platform · Multi-language Export",
      description:
        "The agent engineering platform — visual LangGraph canvas, multi-language project generation (Python ships today; Spring AI, Go, Rust expanding), Component Designer, marketplace, and LangTailor IDE.",
      keywords:
        "LangStitch, LangGraph platform, agent engineering, visual canvas, multi-language export, Python export, Spring AI, Go, Rust, SDK, marketplace, LangTailor, RAG, guardrails, Component Designer",
      type: "website",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: SITE_NAME,
          url: SITE_URL + "/",
          description:
            "Visual LangGraph platform — canvas, multi-language SDK, marketplace, and LangTailor IDE. Python project generation ships today; Spring AI, Go, and Rust expanding.",
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
          }
        },
        {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: SITE_NAME,
          applicationCategory: "DeveloperApplication",
          operatingSystem: "Windows, macOS",
          description:
            "Agent engineering platform — visual canvas, Component Designer, multi-language SDK, marketplace, and LangTailor IDE. Python ships today; Spring AI, Go, and Rust expanding.",
          featureList: [
            "Visual LangGraph canvas",
            "Multi-language project generation",
            "Python SDK on PyPI",
            "Spring AI / Go / Rust expanding",
            "Component Designer",
            "Marketplace"
          ],
          url: SITE_URL + "/",
          downloadUrl: LANGTAILOR_URL,
          softwareVersion: "0.2.9",
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
                  "Python (LangGraph) project generation ships today on PyPI and from LangTailor. Spring AI (Java), Go, and Rust are expanding targets that share the same canvas and project conventions."
              }
            },
            {
              "@type": "Question",
              name: "Is LangStitch only a Python tool?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "No. LangStitch is a multi-language agent engineering platform. The Python SDK and project export ship today; Spring AI, Go, and Rust runtimes are expanding toward the same graphs/, skills/, guardrails/, and deploy/ layout."
              }
            }
          ]
        }
      ]
    },
    "try.html": {
      title: "Download LangTailor — Windows, macOS & VSX",
      description:
        "Download the LangTailor desktop IDE (Windows & macOS) or the LangStitch canvas VSX extension. No hosted browser IDE.",
      keywords: "LangStitch download, VSX, Open VSX, LangTailor, LangGraph IDE, macOS, Windows",
      type: "website"
    }
  };

  function fileName() {
    var segs = location.pathname.split("/").filter(Boolean);
    var last = segs[segs.length - 1] || "";
    if (!last || !/\.html$/i.test(last)) return "index.html";
    return last;
  }

  function upsertMeta(attr, key, content) {
    if (!content) return;
    var el = document.head.querySelector("meta[" + attr + '="' + key + '"]');
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute(attr, key);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href, type) {
    var el = document.head.querySelector('link[rel="' + rel + '"]');
    if (!el) {
      el = document.createElement("link");
      el.setAttribute("rel", rel);
      document.head.appendChild(el);
    }
    el.setAttribute("href", href);
    if (type) el.setAttribute("type", type);
  }

  function apply() {
    var page = PAGES[fileName()] || PAGES["index.html"];
    document.title = page.title;
    upsertMeta("name", "description", page.description);
    upsertMeta("name", "keywords", page.keywords);
    upsertMeta("name", "author", AUTHOR);
    upsertMeta("name", "theme-color", "#000000");
    upsertMeta("property", "og:title", page.title);
    upsertMeta("property", "og:description", page.description);
    upsertMeta("property", "og:url", SITE_URL + "/");
    upsertMeta("property", "og:image", DEFAULT_IMAGE);
    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:type", page.type || "website");
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:site", TWITTER);
    upsertMeta("name", "twitter:title", page.title);
    upsertMeta("name", "twitter:description", page.description);
    upsertMeta("name", "twitter:image", DEFAULT_IMAGE);
    upsertLink("canonical", SITE_URL + "/");
    upsertLink("sitemap", SITE_URL + "/sitemap.xml", "application/xml");

    document.querySelectorAll('script[type="application/ld+json"][data-seo]').forEach(function (n) {
      n.remove();
    });
    (page.jsonLd || []).forEach(function (obj) {
      var s = document.createElement("script");
      s.type = "application/ld+json";
      s.setAttribute("data-seo", "1");
      s.textContent = JSON.stringify(obj);
      document.head.appendChild(s);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", apply);
  } else {
    apply();
  }
})();
