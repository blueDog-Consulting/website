export const capabilities = [
  {
    id: "apps",
    icon: "code",
    title: "Custom App Building",
    description:
      "Web, desktop, and mobile apps built end to end in modern JavaScript, deployed on edge platforms like Cloudflare so they stay fast and cheap to run.",
    points: ["Product prototyping to production", "APIs, bots, and integrations", "Open-source friendly"],
    href: "/contact",
    cta: "Discuss your app",
  },
  {
    id: "design",
    icon: "layout",
    title: "Custom Web Design",
    description:
      "Fast, accessible, standards-based websites that look great and are built to WCAG 2.2, so every visitor can use them.",
    points: ["Design and build in one team", "WCAG 2.2 accessibility", "Performance-first"],
    href: "/contact",
    cta: "Plan your site",
  },
  {
    id: "devrel",
    icon: "megaphone",
    title: "Developer Relations Consulting",
    description:
      "Strategy and hands-on help to build a DevRel and community program that earns trust with developers and shows value to the business.",
    points: ["Program strategy and metrics", "Community audits", "Content and events"],
    href: "/services/devrel-community-strategy/",
    cta: "Explore DevRel",
  },
  {
    id: "devex",
    icon: "search",
    title: "Developer Experience Consulting",
    description:
      "We walk your docs, SDKs, and onboarding the way a new developer would, then give you a prioritized plan to remove friction.",
    points: ["Developer experience audits", "Docs and onboarding review", "Time-to-first-success"],
    href: "/services/developer-experience-audit/",
    cta: "Explore DevEx",
  },
] as const;

export const projects = [
  {
    name: "KindlingControl",
    kind: "Web & desktop app",
    description:
      "An open controller for Positive Grid Spark amps. One JavaScript UI runs in the browser over Web Bluetooth, on desktop, and on Android or iPad. No account, no tracking.",
    tags: ["JavaScript", "Web Bluetooth", "Electron"],
    repo: "https://github.com/blueDog-Consulting/kindling-control-spark-amps",
    live: "https://kindlingcontrol.app",
    liveLabel: "kindlingcontrol.app",
  },
  {
    name: "Bluesky Skeetgen",
    kind: "Web tool",
    description:
      "A free, open-source tool for creating realistic Bluesky post mockups and generating images from existing posts. Built with vanilla JavaScript and Tailwind CSS.",
    tags: ["JavaScript", "Tailwind CSS", "Cloudflare"],
    repo: "https://github.com/blueDog-Consulting/bluesky-skeetgen",
    live: "https://skeetgen.bluedog.dev",
    liveLabel: "skeetgen.bluedog.dev",
  },
  {
    name: "Bluesky Grunge Bot",
    kind: "Bot",
    description:
      "A Bluesky bot on Cloudflare that replies to mentions with a fitting 1990s grunge lyric, found with Workers AI and Vectorize semantic search.",
    tags: ["Cloudflare Workers", "Workers AI", "Vectorize"],
    repo: "https://github.com/blueDog-Consulting/bluesky-grunge-bot",
  },
  {
    name: "Bluesky Pop Punk Bot",
    kind: "Bot",
    description:
      "The pop punk sibling to the grunge bot: a Bluesky bot that brings a little three-chord attitude to your timeline.",
    tags: ["Bluesky", "Cloudflare", "Bot"],
    repo: "https://github.com/blueDog-Consulting/pop-punk-bluesky",
  },
] as const;
