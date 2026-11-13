"use client";
import { useState } from "react";
import { ArrowUpRight, GithubLogo, DownloadSimple } from "@phosphor-icons/react";
import Reveal from "./Reveal";

const CATEGORIES = ["All", "Open Source", "Mobile", "AI/ML", "Web App", "Automation", "Web3", "Bot"];

interface Project {
  title: string;
  subtitle: string;
  desc: string;
  category: string;
  featured: boolean;
  isOpenSource?: boolean;
  status: "Live" | "Private" | "In Progress";
  live: string | null;
  repo: string | null;
  download?: string | null;
  downloadLabel?: string;
  stack: string[];
}

const PROJECTS: Project[] = [
  // --- Open Source Autonomous Engines & Lead Intelligence ---
  {
    title: "LeadRadar",
    subtitle: "Autonomous Buyer-Intent Radar & Opportunity Listener",
    desc: "An autonomous, low-overhead listening pipeline that continuously monitors social networks, discussion forums, job boards, and communities for high-intent buyer posts. Concurrently polls 7+ platforms (Hacker News, Reddit, Bluesky, Mastodon, Freelancer.com, Lemmy, Nairaland, Telegram channels, RSS/Atom, X API v2, Apify), runs microsecond regex filtering, scores intent (0–100) via built-in heuristics or parallel Groq LLM reasoning (llama-3.3-70b-versatile), computes cryptographic deduplication text fingerprints, and delivers instant actionable Telegram alerts with single-click workflow triage buttons alongside a zero-framework high-performance web dashboard with AI outreach reply drafting.",
    category: "Automation",
    featured: true,
    isOpenSource: true,
    status: "Live",
    live: null,
    repo: "https://github.com/frankdotdev/LeadRadar",
    stack: ["Python 3.10+", "FastAPI", "SQLite WAL", "Groq LLM", "Llama 3.3", "Telegram Bot API", "AsyncIO", "Apify"],
  },
  {
    title: "UGC Deal Engine",
    subtitle: "Autonomous Intent & Compliant Outreach Deal Engine",
    desc: "An open-source, autonomous deal engine for User Generated Content (UGC) creators, creative strategists, and performance ad agencies. Discovers brands actively seeking creator talent or spending heavily on ads via Google X-Ray (Serper.dev) and TikTok & Meta Ad Library scrapers (Apify), qualifies buyer intent (1-100) and drafts bespoke 3-second hook scripts using Google Gemini 2.5 Flash, enriches decision-maker emails via Hunter.io, and executes a compliant, threaded 3-step outreach sequence via SMTP/IMAP that automatically terminates the instant a prospect replies, opts out, or bounces.",
    category: "Automation",
    featured: true,
    isOpenSource: true,
    status: "Live",
    live: null,
    repo: "https://github.com/frankdotdev/ugc-deal-engine",
    stack: ["Python 3.10+", "Flask", "SQLite WAL", "APScheduler", "Google Gemini 2.5", "Hunter.io", "Serper.dev", "Apify", "SMTP/IMAP"],
  },
  {
    title: "LeadFinder",
    subtitle: "High-Accuracy Local Business Lead Generator",
    desc: "100% free, open-source local lead generation engine for web designers, SEOs, and digital agencies. Queries dual map providers (unmetered OpenStreetMap Overpass API and Google Places API), categorizes businesses into high-converting outreach buckets (No Website, Social Only, Broken Website, Working Website), extracts contact emails with Cloudflare de-obfuscation and subpage deep crawling (/contact, /about), formats phone numbers with one-click WhatsApp chat links, and eliminates false positives with HTTPS-first checks, SSL warning tolerance, and DNS apex/www fallback. Features a clean responsive dashboard and CSV export.",
    category: "Automation",
    featured: true,
    isOpenSource: true,
    status: "Live",
    live: null,
    repo: "https://github.com/frankdotdev/Leadfinder",
    stack: ["Python", "AsyncIO", "OpenStreetMap", "Google Places API", "Web Scraping", "Lucide SVG", "HTML5/CSS3"],
  },

  // --- Featured Platforms & Web Apps ---
  {
    title: "Inkognito",
    subtitle: "Speak Freely. Live Anonymously — Radical Privacy Social Platform",
    desc: "A next-generation anonymous social platform engineered from the ground up around radical privacy, clean design, and psychological freedom. Zero accounts, zero tracking, thread-shifting contextual pseudonyms (unique alias per discussion), ephemeral fading confessions and 24-hour whispers, random instant text & peer-to-peer WebRTC encrypted audio/video chat with encrypted TURN, private AES-256 encrypted DMs, a 6-mode streaming AI Companion with automated crisis safety triage, QR multi-device pairing with 25-character cryptographic recovery codes, and an installable OLED-optimized PWA.",
    category: "Web App",
    featured: true,
    isOpenSource: false,
    status: "Live",
    live: "https://inkognito-web.vercel.app",
    repo: null,
    stack: ["Next.js", "TypeScript", "WebRTC", "WebSockets", "AES-256", "Paystack", "PWA", "Tailwind CSS"],
  },
  {
    title: "Our Mother of Perpetual Help Catholic Chaplaincy, AE-FUTHA",
    subtitle: "Official Diocesan Healthcare Chaplaincy Web Platform & Liturgical OS",
    desc: "Official web platform for Our Mother of Perpetual Help Catholic Chaplaincy, Alex Ekwueme Federal University Teaching Hospital, Abakaliki (AE-FUTHA), Catholic Diocese of Abakaliki, Ebonyi State, Nigeria. Built as a TypeScript monorepo with Next.js 15 (App Router) and PostgreSQL / Supabase. Features automatic liturgical calendar & daily readings sync (romcal, Universalis feed, Evangelizo, USCCB), Mass timetable with exceptions, online Mass intention booking with automatic stipend calculation & WhatsApp receipt verification, Vatican News video widget & papal updates, 10-category Catholic doctrine library with 'Ask a Padre' AI safety triage, role-based admin CMS, multilingual UI (English, Igbo, Hausa, Yoruba, Latin), and offline PWA.",
    category: "Web App",
    featured: true,
    isOpenSource: true,
    status: "Live",
    live: "https://omphchapaefutha.vercel.app/",
    repo: "https://github.com/frankdotdev",
    stack: ["Next.js 15", "TypeScript", "PostgreSQL", "Supabase", "romcal", "PWA", "Tailwind CSS", "Vatican News"],
  },
  {
    title: "Stella AI",
    subtitle: "The AI Learning Operating System",
    desc: "AI-powered learning operating system built first for Nigeria, designed for the world. Transforms lectures, textbooks, and notes into intelligent study systems — auto-generated notes, summaries, flashcards, exams, podcast dialogues, and conversations with 20+ historical thinkers in 8 learning modes with knowledge cards and multi-format conversions.",
    category: "AI/ML",
    featured: true,
    status: "Live",
    live: "https://stellaai.pro",
    repo: null,
    stack: ["React", "Next.js", "FastAPI", "Django REST", "PostgreSQL", "Celery", "Redis"],
  },

  // --- Mobile Apps (Downloadable APKs) ---
  {
    title: "ShopFlow",
    subtitle: "Offline-First Mobile E-Commerce Marketplace",
    desc: "A 100% offline-first, zero-latency mobile marketplace running on-device with React Native, Expo, and SQLite. Features 112 products across 13 categories, instant multi-facet filtering, variant selection, a 5-step checkout wizard with promo discounts, live order tracking, and an integrated Store Manager admin dashboard with write-through persistence.",
    category: "Mobile",
    featured: true,
    status: "Live",
    live: null,
    download: "https://expo.dev/accounts/frankdotdev/projects/shopflow/builds/20bee6c6-9fc1-4840-8728-90f558ab4705",
    downloadLabel: "Download APK",
    repo: "https://github.com/frankdotdev/shopflow",
    stack: ["React Native", "Expo SDK 51", "Expo Router", "expo-sqlite", "Zustand", "TypeScript"],
  },
  {
    title: "Fiorio",
    subtitle: "Luxury Travel Discovery & Unified Booking App",
    desc: "An offline-first, all-in-one luxury travel booking platform built with React Native and Expo SDK 52. Consolidates hotels, flights, car rentals, curated experiences, and dining into a single polymorphic booking engine. Pre-seeded with 56 global cities and ~950 listings in local SQLite, featuring dynamic flight routing, multi-currency conversion, and role switching (Customer, Admin, Partner).",
    category: "Mobile",
    featured: true,
    status: "Live",
    live: null,
    download: "/apps/fiorio.apk",
    downloadLabel: "Download APK (81MB)",
    repo: "https://github.com/frankdotdev/fiorio",
    stack: ["React Native", "Expo SDK 52", "Expo Router", "expo-sqlite", "Zustand", "TypeScript", "CI/CD"],
  },
  {
    title: "Hacker's Medicare",
    subtitle: "Offline-First Healthcare & Telehealth App",
    desc: "A self-contained healthcare mobile application with an embedded relational database (expo-sqlite). Features 26 pre-seeded doctors across 12 specialties, frictionless multi-step appointment booking with dependent support, interactive telehealth video consultation room with live call timer, clinical lab results tracking, and dual-persona support (Patient + Provider dashboard).",
    category: "Mobile",
    featured: true,
    status: "Live",
    live: null,
    download: "https://expo.dev/accounts/frankdotdev/projects/hackers-medicare/builds/3bc1fe00-6383-4c5c-8644-dea8c78b0e41",
    downloadLabel: "Download APK",
    repo: "https://github.com/frankdotdev/HACKERS-MEDICARE",
    stack: ["React Native", "Expo SDK 57", "Expo Router 4", "expo-sqlite", "Zustand", "TypeScript"],
  },

  // --- Other Flagship Platforms ---
  {
    title: "Fluo",
    subtitle: "Mobile-First Business Operating System",
    desc: "A multi-tenant, mobile-first business operating system providing businesses with a unified link (fluo.africa/slug) and dynamic QR code serving as digital storefront, booking/ordering engine, automated cashier, AI receptionist (Claude 3.5 tool-calling), Paystack/Flutterwave split payments, and atomic PDF receipts.",
    category: "Web App",
    featured: true,
    status: "Live",
    live: "https://bizfluo.vercel.app",
    repo: null,
    stack: ["Next.js", "TypeScript", "Claude 3.5 AI", "Paystack", "Flutterwave", "PostgreSQL", "Tailwind CSS"],
  },
  {
    title: "Ikegwuru",
    subtitle: "Kwechiri — Brand Identity & Editorial Commerce",
    desc: "Clothing built for those who endure. Rooted in the Kwechiri philosophy — remaining unbroken when circumstances conspire to fracture your spirit. A digital expression of resilience, authentic craftsmanship, and self-mastery with editorial storytelling and responsive commerce.",
    category: "Web App",
    featured: true,
    status: "Live",
    live: "https://ikegwuru.vercel.app/",
    repo: null,
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },

  // --- Client Demo Builds ---
  {
    title: "Rhaina Cosmetics",
    subtitle: "Beauty Store, Skincare & Training",
    desc: "Rhaina Cosmetics — beauty store, skincare, cosmetics, fragrance, beauty spa and training. Enhance your beauty, elevate your confidence with product catalogs and service appointments.",
    category: "Web App",
    featured: false,
    status: "Live",
    live: "https://rhainacosmetics.netlify.app/",
    repo: null,
    stack: ["React", "Tailwind CSS", "Netlify"],
  },
  {
    title: "Kitchen Royale",
    subtitle: "Restaurant & Bakery, Abakaliki",
    desc: "Kitchen Royale is a restaurant and bakery in Abakaliki serving Nigerian favourites, continental meals, fresh bakes and drinks. Features online food ordering for pickup/delivery and table reservations.",
    category: "Web App",
    featured: false,
    status: "Live",
    live: "https://kitchenroyale.netlify.app",
    repo: null,
    stack: ["React", "Tailwind CSS", "Netlify"],
  },
  {
    title: "Itus Global Construction",
    subtitle: "Building With Precision & Integrity",
    desc: "Corporate portal for Itus Global Construction Nig Ltd delivering building construction, civil engineering, structural works and interior finishing solutions in Abakaliki, Ebonyi State, Nigeria.",
    category: "Web App",
    featured: false,
    status: "Live",
    live: "https://itus-global-construction-nig-ltd.netlify.app",
    repo: null,
    stack: ["React", "Tailwind CSS", "Netlify"],
  },
  {
    title: "Eaglefresh Properties",
    subtitle: "Real Estate Sales, Rent & Property Management",
    desc: "Eaglefresh Properties Limited offers verified property sales, acquisitions, rent/lease listings, and full property management services with online inquiry handling.",
    category: "Web App",
    featured: false,
    status: "Live",
    live: "https://eaglefreshproperties.netlify.app/",
    repo: null,
    stack: ["React", "Tailwind CSS", "Netlify"],
  },
  {
    title: "Naya's Kitchen",
    subtitle: "Good Food. Happy People.",
    desc: "Naya's Kitchen prepares delicious Nigerian soups, stews, rice dishes, breakfast and drinks in Emene. Order online for pickup or delivery, or book catering for your next event.",
    category: "Web App",
    featured: false,
    status: "Live",
    live: "https://nayaskitchen.netlify.app",
    repo: null,
    stack: ["React", "Tailwind CSS", "Netlify"],
  },
  {
    title: "Winny Bakes & Creams",
    subtitle: "Custom Cakes, Ice Cream, Pizza & Small Chops",
    desc: "Winny Bakes & Creams — custom celebration cakes, ice cream, pizza, popcorn and small chops on Afikpo Road. Order online for pickup or doorstep delivery.",
    category: "Web App",
    featured: false,
    status: "Live",
    live: "https://winnybakery.netlify.app/",
    repo: null,
    stack: ["React", "Tailwind CSS", "Netlify"],
  },
  {
    title: "NLM Autos",
    subtitle: "Drive the Lifestyle You Desire",
    desc: "Premium automobile dealership and auto-services platform. Browse verified vehicles, schedule test drives, and experience luxury automotive solutions.",
    category: "Web App",
    featured: false,
    status: "Live",
    live: "https://nlmautos.netlify.app/",
    repo: null,
    stack: ["React", "Tailwind CSS", "Netlify"],
  },

  // --- Web3, Bot & Automation Projects ---
  {
    title: "Portal Web3 Game Site",
    subtitle: "Play-to-earn game platform",
    desc: "A Web3 game site where users can get rewarded for playing and the top users are displayed on a real-time leaderboard. Worked on the backend architecture and API with Solana wallet adapter integration.",
    category: "Web3",
    featured: false,
    status: "Live",
    live: "#",
    repo: "#",
    stack: ["React", "Node.js", "Solidity", "Solana Wallet Adapter"],
  },
  {
    title: "HackerAutoTradeBot",
    subtitle: "Crypto Trading Automation",
    desc: "An automated Telegram bot for executing crypto trading strategies on the Bybit exchange. Uses technical indicators like RSI and EMA to make trades autonomously.",
    category: "Bot",
    featured: false,
    status: "Private",
    live: null,
    repo: "#",
    stack: ["Python", "CCXT", "Web3.py", "Telegram Bot API"],
  },
  {
    title: "Caritas Catholic Chaplaincy",
    subtitle: "Church Website with Special Features",
    desc: "Church website with booking mass through the website, daily readings and saints of the day, push notifications for prayers at designated times, and community features.",
    category: "Web App",
    featured: false,
    status: "Live",
    live: "#",
    repo: "#",
    stack: ["Next.js", "Supabase", "Tailwind CSS"],
  },
  {
    title: "ZK Compression Cost Visualizer",
    subtitle: "Blockchain Cost Analytics",
    desc: "A Django web application to visualize the cost savings achieved through ZK compression on blockchain data storage. Provides detailed insights into rent reductions and on-chain storage benefits.",
    category: "Web3",
    featured: false,
    status: "Live",
    live: "#",
    repo: "#",
    stack: ["Django", "Python", "MySQL", "Chart.js", "Tailwind CSS", "Railway"],
  },
  {
    title: "Vybe Whale Alert Bot",
    subtitle: "Crypto Whale Tracker",
    desc: "Tracks whale wallets and sends real-time alerts through Telegram notifications for cryptocurrency market movements. Monitors token purchases and wallet interactions.",
    category: "Bot",
    featured: false,
    status: "Live",
    live: null,
    repo: "#",
    stack: ["Python", "CCXT", "Telegram Bot API", "Web3.py"],
  },
  {
    title: "Token Launch Scanner",
    subtitle: "Agentic Sales Bot",
    desc: "An agentic bot that scans for new tokens launched on DexScreener, extracts their contact details (X, Telegram), and automatically sends personalized pitch messages offering dev services.",
    category: "Automation",
    featured: false,
    status: "Private",
    live: null,
    repo: null,
    stack: ["Python", "Telegram Bot API", "Web3.py", "FastAPI"],
  },
  {
    title: "Game Prediction Bot",
    subtitle: "AI Sports Prediction",
    desc: "A web app with full frontend interface and FastAPI backend. Claude AI processes live sports data and generates match outcome predictions with confidence scores.",
    category: "AI/ML",
    featured: false,
    status: "Private",
    live: null,
    repo: null,
    stack: ["React", "FastAPI", "Claude API", "Python"],
  },
  {
    title: "Signet",
    subtitle: "Web Platform",
    desc: "Professional web platform built for Signet, handling their online presence and core web functionality.",
    category: "Web App",
    featured: false,
    status: "Live",
    live: "https://signet.xyz",
    repo: null,
    stack: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Zugis Cake Ordering",
    subtitle: "E-Commerce Platform",
    desc: "A comprehensive cake ordering platform for a local business. Features product catalog, image gallery, order placement, order tracking, customer accounts, and admin dashboard.",
    category: "Web App",
    featured: false,
    status: "Live",
    live: "#",
    repo: "#",
    stack: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
  },
  {
    title: "Retail Store Database System",
    subtitle: "Inventory & Sales Management",
    desc: "A robust inventory and sales management system engineered to minimize data entry errors and deliver comprehensive sales analytics for retail operations.",
    category: "Web App",
    featured: false,
    status: "Live",
    live: "#",
    repo: "#",
    stack: ["Python", "MySQL"],
  },
];

const STATUS_COLORS: Record<string, string> = {
  Live: "#4ade80",
  Private: "#f59e0b",
  "In Progress": "#60a5fa",
};

export default function BuildsClient() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? PROJECTS
      : activeFilter === "Open Source"
      ? PROJECTS.filter((p) => p.isOpenSource)
      : PROJECTS.filter((p) => p.category === activeFilter);

  const featured = filtered.filter((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 px-6 md:px-10 max-w-7xl mx-auto">
        <Reveal>
          <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: "var(--text-faint)" }}>
            My Work
          </p>
          <h1
            className="font-mono text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            Builds
          </h1>
          <p className="text-base leading-relaxed max-w-2xl mb-4" style={{ color: "var(--text-secondary)" }}>
            A curated collection of open-source autonomous engines, production systems, offline-first mobile apps, AI platforms, and client solutions. Real software engineered for real humans — with direct APK downloads and open GitHub code.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 mt-8">
            {[
              { v: "35+", l: "Projects Built" },
              { v: "80+", l: "GitHub Repos" },
              { v: "4+", l: "Open Source Engines" },
              { v: "10K+", l: "Dev Hours" },
              { v: "100%", l: "Client Satisfaction" },
            ].map(({ v, l }) => (
              <div key={l}>
                <span className="font-mono text-xl font-medium" style={{ color: "var(--text-primary)" }}>
                  {v}
                </span>
                <span className="font-mono text-xs ml-2" style={{ color: "var(--text-faint)" }}>
                  {l}
                </span>
              </div>
            ))}
          </div>

          {/* Highlights Banner */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {/* Open Source Banner */}
            <div
              className="p-4 border flex items-center justify-between flex-wrap gap-3 font-mono text-xs"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--bg-secondary)",
              }}
            >
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#60a5fa" }} />
                <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>
                  Open Source Suite:
                </span>
                <span style={{ color: "var(--text-muted)" }}>
                  LeadRadar, UGC Deal Engine, LeadFinder, and OMPH Chaplaincy.
                </span>
              </div>
              <button
                onClick={() => setActiveFilter("Open Source")}
                className="hover-line text-xs font-medium cursor-pointer"
                style={{ color: "var(--text-primary)" }}
              >
                Filter Open Source →
              </button>
            </div>

            {/* Mobile Apps Highlight Banner */}
            <div
              className="p-4 border flex items-center justify-between flex-wrap gap-3 font-mono text-xs"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--bg-secondary)",
              }}
            >
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#4ade80" }} />
                <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>
                  Offline-First Mobile:
                </span>
                <span style={{ color: "var(--text-muted)" }}>
                  ShopFlow, Fiorio, and Hacker&apos;s Medicare standalone APKs.
                </span>
              </div>
              <button
                onClick={() => setActiveFilter("Mobile")}
                className="hover-line text-xs font-medium cursor-pointer"
                style={{ color: "var(--text-primary)" }}
              >
                Filter Mobile Apps →
              </button>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Filter tabs */}
      <section className="px-6 md:px-10 max-w-7xl mx-auto mb-12">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className="font-mono text-xs px-4 py-2 border transition-all duration-200"
              style={{
                borderColor: activeFilter === cat ? "var(--text-primary)" : "var(--border)",
                backgroundColor: activeFilter === cat ? "var(--text-primary)" : "transparent",
                color: activeFilter === cat ? "var(--bg)" : "var(--text-muted)",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Featured projects */}
      {featured.length > 0 && (
        <section className="px-6 md:px-10 max-w-7xl mx-auto mb-12">
          <p className="font-mono text-xs tracking-widest uppercase mb-6" style={{ color: "var(--text-faint)" }}>
            {activeFilter === "All" ? "Featured Builds" : `${activeFilter} Builds`}
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px" style={{ backgroundColor: "var(--border-subtle)" }}>
            {featured.map((p, i) => (
              <Reveal key={p.title} delay={i * 60}>
                <div
                  className="p-8 flex flex-col justify-between min-h-64 group h-full"
                  style={{ backgroundColor: "var(--bg)" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--bg-secondary)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--bg)")
                  }
                >
                  <div>
                    <div className="flex items-start justify-between mb-3 gap-2">
                      <div>
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <h2 className="font-mono text-lg font-medium" style={{ color: "var(--text-primary)" }}>
                            {p.title}
                          </h2>
                          {p.isOpenSource && (
                            <span
                              className="font-mono text-[10px] px-1.5 py-0.5 border"
                              style={{
                                borderColor: "#60a5fa",
                                color: "#60a5fa",
                                backgroundColor: "rgba(96, 165, 250, 0.08)",
                              }}
                            >
                              Open Source
                            </span>
                          )}
                          {p.category === "Mobile" && (
                            <span
                              className="font-mono text-[10px] px-1.5 py-0.5 border"
                              style={{
                                borderColor: "#4ade80",
                                color: "#4ade80",
                                backgroundColor: "rgba(74, 222, 128, 0.08)",
                              }}
                            >
                              Android APK
                            </span>
                          )}
                        </div>
                        <p className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>
                          {p.subtitle}
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5 shrink-0">
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: STATUS_COLORS[p.status] || "#888" }}
                        />
                        <span className="font-mono text-xs" style={{ color: "var(--text-faint)" }}>
                          {p.status}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>
                      {p.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {p.stack.map((s) => (
                        <span key={s} className="tag">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center flex-wrap gap-4 pt-2">
                    {p.download && (
                      <a
                        href={p.download}
                        target={p.download.startsWith("http") ? "_blank" : undefined}
                        rel={p.download.startsWith("http") ? "noopener noreferrer" : undefined}
                        download={p.download.endsWith(".apk") ? true : undefined}
                        className="font-mono text-xs flex items-center gap-1.5 px-3 py-1.5 border transition-all duration-200"
                        style={{
                          borderColor: "var(--text-primary)",
                          backgroundColor: "var(--text-primary)",
                          color: "var(--bg)",
                        }}
                      >
                        <DownloadSimple size={13} weight="bold" />
                        <span>{p.downloadLabel || "Download APK"}</span>
                      </a>
                    )}
                    {p.live && p.live !== "#" && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs flex items-center gap-1 hover-line"
                        style={{ color: "var(--text-muted)" }}
                      >
                        Live Demo <ArrowUpRight size={12} />
                      </a>
                    )}
                    {p.repo && p.repo !== "#" && (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs flex items-center gap-1 hover-line"
                        style={{ color: "var(--text-muted)" }}
                      >
                        <GithubLogo size={13} /> {p.isOpenSource ? "GitHub Repo" : "Source"}
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* All other projects */}
      {rest.length > 0 && (
        <section className="px-6 md:px-10 max-w-7xl mx-auto pb-24">
          <p className="font-mono text-xs tracking-widest uppercase mb-6" style={{ color: "var(--text-faint)" }}>
            {activeFilter === "All" ? "All Other Builds" : `More ${activeFilter} Builds`}
          </p>
          <div className="flex flex-col gap-px" style={{ backgroundColor: "var(--border-subtle)" }}>
            {rest.map((p, i) => (
              <Reveal key={p.title} delay={i * 40}>
                <div
                  className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 group"
                  style={{ backgroundColor: "var(--bg)" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--bg-secondary)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--bg)")
                  }
                >
                  <div className="md:col-span-1">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h3 className="font-mono text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                        {p.title}
                      </h3>
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: STATUS_COLORS[p.status] || "#888" }}
                      />
                      {p.isOpenSource && (
                        <span
                          className="font-mono text-[10px] px-1.5 py-0.5 border"
                          style={{
                            borderColor: "#60a5fa",
                            color: "#60a5fa",
                            backgroundColor: "rgba(96, 165, 250, 0.08)",
                          }}
                        >
                          Open Source
                        </span>
                      )}
                    </div>
                    <p className="font-mono text-xs mb-3" style={{ color: "var(--text-muted)" }}>
                      {p.subtitle}
                    </p>
                    <span className="tag">{p.category}</span>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
                      {p.desc}
                    </p>
                    <div className="flex items-center justify-between flex-wrap gap-3">
                      <div className="flex flex-wrap gap-1.5">
                        {p.stack.map((s) => (
                          <span key={s} className="tag">{s}</span>
                        ))}
                      </div>
                      <div className="flex items-center flex-wrap gap-4">
                        {p.download && (
                          <a
                            href={p.download}
                            target={p.download.startsWith("http") ? "_blank" : undefined}
                            rel={p.download.startsWith("http") ? "noopener noreferrer" : undefined}
                            download={p.download.endsWith(".apk") ? true : undefined}
                            className="font-mono text-xs flex items-center gap-1.5 px-3 py-1.5 border transition-all duration-200"
                            style={{
                              borderColor: "var(--text-primary)",
                              backgroundColor: "var(--text-primary)",
                              color: "var(--bg)",
                            }}
                          >
                            <DownloadSimple size={13} weight="bold" />
                            <span>{p.downloadLabel || "Download APK"}</span>
                          </a>
                        )}
                        {p.live && p.live !== "#" && (
                          <a
                            href={p.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-xs flex items-center gap-1 hover-line"
                            style={{ color: "var(--text-muted)" }}
                          >
                            Live <ArrowUpRight size={11} />
                          </a>
                        )}
                        {p.repo && p.repo !== "#" && (
                          <a
                            href={p.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-xs flex items-center gap-1 hover-line"
                            style={{ color: "var(--text-muted)" }}
                          >
                            <GithubLogo size={12} /> {p.isOpenSource ? "GitHub Repo" : "Code"}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
