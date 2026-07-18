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
  var SDK_URL = "https://sdk.langstitch.com/";
  var MARKETPLACE_URL = "https://marketplace.langstitch.com/";
  var PYPI_URL = "https://pypi.org/project/langstitch-sdk/";
  var MAVEN_SPRING_AI_URL = "https://central.sonatype.com/artifact/com.langstitch/langstitch-spring-ai/0.1.0";
  var GITHUB_SPRING_AI = "https://github.com/LangStitch/langstitch-spring-ai";
  var OPEN_VSX_URL = "https://open-vsx.org/extension/langstitch/langtailor-canvas";
  var GITHUB_ORG = "https://github.com/LangStitch";

  var PAGES = {
    "index.html": {
      title: "LangStitch — Visual LangGraph Platform · IR v2 Compiler · Multi-language Export",
      description:
        "Agent engineering platform — visual LangGraph canvas, IR v2 compiler, langstitch compile CLI, dev RunEvents, multi-language export (Python on PyPI and Spring AI on Maven Central; Go and Rust expanding), Component Designer, marketplace, and LangTailor IDE.",
      keywords:
        "LangStitch, LangGraph platform, agent engineering, IR v2, langstitch compile, RunEvents, visual canvas, multi-language export, Python LangGraph, Spring AI, Go, Rust, langstitch-sdk, PyPI, marketplace, LangTailor, RAG, guardrails, Component Designer, Open VSX",
      type: "website",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: SITE_NAME,
          url: SITE_URL + "/",
          description:
            "Visual LangGraph platform — IR v2 canvas, langstitch-sdk compiler, marketplace, and LangTailor IDE. Python on PyPI and Spring AI on Maven Central; Go and Rust expanding.",
          inLanguage: "en-US",
          publisher: {
            "@type": "Organization",
            name: SITE_NAME,
            url: SITE_URL + "/",
            email: EMAIL,
            sameAs: [GITHUB_ORG, PYPI_URL, MAVEN_SPRING_AI_URL, GITHUB_SPRING_AI, OPEN_VSX_URL, LANGTAILOR_URL, SDK_URL, MARKETPLACE_URL],
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
            "Agent engineering platform — visual canvas, IR v2 compiler, dev RunEvents, Component Designer, multi-language SDK, marketplace, and LangTailor IDE. Python on PyPI and Spring AI on Maven Central; Go and Rust expanding.",
          featureList: [
            "Visual LangGraph canvas with IR v2",
            "langstitch compile CLI and SDK compiler",
            "Dev RunEvents for local debugging",
            "Multi-language project generation",
            "Python SDK on PyPI (langstitch-sdk)",
            "Spring AI IR compiler on Maven Central (langstitch-spring-ai 0.1.0)",
            "Go / Rust expanding",
            "Component Designer and marketplace",
            "LangTailor desktop IDE and VSX extension"
          ],
          url: SITE_URL + "/",
          downloadUrl: LANGTAILOR_URL,
          installUrl: PYPI_URL,
          softwareVersion: "0.3.1",
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
                  "Python (LangGraph) project generation ships today on PyPI and from LangTailor. Spring AI IR compiler is available on Maven Central as com.langstitch:langstitch-spring-ai:0.1.0. Go and Rust are expanding targets that share the same canvas and project conventions."
              }
            },
            {
              "@type": "Question",
              name: "Is LangStitch only a Python tool?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "No. LangStitch is a multi-language agent engineering platform. Python on PyPI and Spring AI on Maven Central ship today; Go and Rust runtimes are expanding toward the same graphs/, skills/, guardrails/, and deploy/ layout."
              }
            },
            {
              "@type": "Question",
              name: "What is LangStitch IR v2?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "IR v2 is the LangStitch intermediate representation for agent graphs — a portable document format shared by LangTailor canvas, langstitch-spec, and the langstitch-sdk compiler. Design on canvas, compile with langstitch compile, and run Python LangGraph projects with the same structure."
              }
            },
            {
              "@type": "Question",
              name: "How do I install the LangStitch Python SDK?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Run pip install langstitch-sdk on PyPI. The package includes decorators, typed YAML config, the langstitch CLI (init, compile, run), IR v2 compiler, and dev-gated RunEvents for local agent debugging."
              }
            },
            {
              "@type": "Question",
              name: "Where can I download LangTailor?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Download LangTailor v0.3.1 for Windows and macOS at langtailor.langstitch.com, or install the LangTailor Canvas VSX extension from Open VSX. Both are MIT licensed and work with the same IR v2 canvas format."
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
      type: "website",
      canonical: LANGTAILOR_URL + "#download",
      robots: "noindex, follow"
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
    var canonical = page.canonical || SITE_URL + "/";
    document.title = page.title;
    upsertMeta("name", "description", page.description);
    upsertMeta("name", "keywords", page.keywords);
    upsertMeta("name", "author", AUTHOR);
    upsertMeta("name", "theme-color", "#000000");
    if (page.robots) upsertMeta("name", "robots", page.robots);
    upsertMeta("property", "og:title", page.title);
    upsertMeta("property", "og:description", page.description);
    upsertMeta("property", "og:url", canonical);
    upsertMeta("property", "og:image", DEFAULT_IMAGE);
    upsertMeta("property", "og:image:type", "image/svg+xml");
    upsertMeta("property", "og:image:width", "1200");
    upsertMeta("property", "og:image:height", "630");
    upsertMeta("property", "og:image:alt", "LangStitch agent engineering platform");
    upsertMeta("property", "og:locale", "en_US");
    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:type", page.type || "website");
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:site", TWITTER);
    upsertMeta("name", "twitter:title", page.title);
    upsertMeta("name", "twitter:description", page.description);
    upsertMeta("name", "twitter:image", DEFAULT_IMAGE);
    upsertLink("canonical", canonical);
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
