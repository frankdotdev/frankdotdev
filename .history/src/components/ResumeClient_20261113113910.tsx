"use client";
import { useState } from "react";
import Link from "next/link";
import {
  DownloadSimple,
  ArrowUpRight,
  FilePdf,
  Envelope,
  Phone,
  MapPin,
  LinkedinLogo,
  GithubLogo,
  Globe,
  ArrowLeft,
  Eye,
  CheckCircle,
} from "@phosphor-icons/react";
import Reveal from "./Reveal";

const CV_PDF_PATH = "/documents/Frank_Kelechi_Oge_Software_Dev_CV.pdf";

const SKILL_GROUPS = [
  {
    title: "Programming",
    skills: ["Python", "TypeScript", "JavaScript", "SQL", "HTML5", "CSS3", "Solidity"],
  },
  {
    title: "Backend & APIs",
    skills: [
      "FastAPI",
      "Django",
      "Django REST Framework",
      "Flask",
      "Node.js",
      "NestJS",
      "REST API design",
      "Authentication",
      "Webhooks",
    ],
  },
  {
    title: "Frontend & Mobile",
    skills: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "React Native",
      "Expo",
      "Responsive UI",
      "Framer Motion",
    ],
  },
  {
    title: "Databases & Data",
    skills: [
      "PostgreSQL",
      "MySQL",
      "SQLite",
      "Supabase",
      "Redis",
      "Schema Design",
      "Multi-tenant Data Modelling",
    ],
  },
  {
    title: "AI & Integrations",
    skills: [
      "LLM API Integration",
      "OpenAI API",
      "Google Gemini",
      "Groq",
      "RAG (Retrieval-Augmented Generation)",
      "Prompt Engineering",
      "AI-Assisted Workflows",
    ],
  },
  {
    title: "Infrastructure & Tools",
    skills: ["Git", "GitHub", "Docker", "Linux", "Nginx", "CI/CD", "Celery", "AsyncIO"],
  },
  {
    title: "Payments & Platforms",
    skills: [
      "Paystack",
      "Flutterwave",
      "Telegram Bot API",
      "WebRTC",
      "WebSockets",
      "Google Places API",
      "OpenStreetMap",
      "Solana Wallet Adapter",
    ],
  },
];

const EXPERIENCE = [
  {
    role: "Founder & Software Engineer",
    company: "Hackverse Software Solutions",
    period: "2025–Present",
    points: [
      "Founded and led a software development business delivering web applications, backend systems, AI-enabled products, automation, and client solutions.",
      "Own end-to-end delivery across discovery, requirements analysis, technical architecture, database design, implementation, deployment, and client communication.",
      "Build and maintain software across multiple domains, integrating payment gateways, external APIs, messaging services, and role-based workflows.",
      "Develop reusable engineering capabilities through open-source projects and independently shipped products.",
    ],
  },
  {
    role: "Freelance Software Engineer",
    company: "Independent / Contract Projects",
    period: "2023–Present",
    points: [
      "Design and develop custom web applications, APIs, business platforms, and automation tools using Python, Django, FastAPI, React, and Next.js.",
      "Implement application features including authentication, administrative dashboards, data management, third-party integrations, and payment workflows.",
      "Work directly with clients to translate business requirements into deployable software and iterate based on feedback.",
    ],
  },
];

const SELECTED_PROJECTS = [
  {
    title: "LeadRadar",
    type: "Open source",
    stack: "Python, FastAPI, SQLite, AsyncIO, Groq, Telegram",
    desc: "Built an asynchronous buyer-intent monitoring system that polls multiple communities, forums, and job platforms; filters and scores opportunities using heuristics or LLM reasoning; deduplicates findings; and sends actionable Telegram alerts with triage workflows.",
    link: "https://github.com/frankdotdev/LeadRadar",
  },
  {
    title: "LeadFinder",
    type: "Open source",
    stack: "Python, AsyncIO, OpenStreetMap, Google Places",
    desc: "Developed a local-business prospecting tool that searches map data, classifies businesses by website presence and condition, discovers contact details through targeted page crawling, and exports leads for outreach.",
    link: "https://github.com/frankdotdev/Leadfinder",
  },
  {
    title: "UGC Deal Engine",
    type: "Open source",
    stack: "Python, Flask, SQLite, Gemini, Hunter.io, Apify",
    desc: "Built an intent discovery and outreach workflow for UGC creators and agencies, combining brand discovery, lead qualification, contact enrichment, personalized message drafting, and reply- or opt-out-aware outreach sequencing.",
    link: "https://github.com/frankdotdev/ugc-deal-engine",
  },
  {
    title: "OMPH Chaplaincy Platform",
    type: "Diocesan Web Platform",
    stack: "Next.js, TypeScript, PostgreSQL, Supabase, PWA",
    desc: "Developed a digital platform for a diocesan healthcare chaplaincy, including liturgical calendar and readings synchronization, Mass timetable and intention booking, multilingual content, administrative tools, and offline-capable PWA features.",
    link: "https://omphchapaefutha.vercel.app/",
  },
  {
    title: "Inkognito",
    type: "Product",
    stack: "Next.js, TypeScript, WebRTC, WebSockets, Encryption",
    desc: "Designed and built an anonymous social platform focused on privacy-preserving participation, contextual pseudonyms, ephemeral posts, real-time text and video conversations, encrypted direct messages, and an AI companion with safety-oriented triage.",
    link: "https://inkognito-web.vercel.app",
  },
  {
    title: "Stella AI",
    type: "Product",
    stack: "React, Next.js, FastAPI, Django REST, PostgreSQL, Redis",
    desc: "Building an AI-powered learning platform that transforms lectures, PDFs, and other learning materials into structured notes, summaries, flashcards, assessments, study plans, and knowledge-based learning experiences.",
    link: "https://stellaai.pro",
  },
  {
    title: "SkoolPlan",
    type: "In development",
    stack: "Web platform and mobile application",
    desc: "Developing a school management platform intended to bring academic and administrative operations into one system, including student and parent experiences, attendance, finance, school services, and role-based workflows.",
  },
  {
    title: "ShopFlow",
    type: "Android application",
    stack: "React Native, Expo, SQLite, Zustand, TypeScript",
    desc: "Built an offline-first mobile commerce application with a locally persisted product catalogue, multi-facet filtering, product variants, checkout flow, order tracking, and store-management functionality.",
    link: "https://github.com/frankdotdev/shopflow",
  },
  {
    title: "Fiorio",
    type: "Android application",
    stack: "React Native, Expo, SQLite, Zustand, TypeScript",
    desc: "Built an offline-first travel discovery and booking application spanning hotels, flights, car rentals, experiences, and dining, with local listing data, multi-currency support, and customer, admin, and partner roles.",
    link: "https://github.com/frankdotdev/fiorio",
  },
  {
    title: "Ikegwuru / Kwechiri",
    type: "Web application",
    stack: "Next.js, TypeScript, Tailwind CSS",
    desc: "Built a brand and commerce experience for a clothing label, combining editorial storytelling, brand identity, and responsive e-commerce presentation.",
    link: "https://ikegwuru.vercel.app/",
  },
];

export default function ResumeClient() {
  const [viewMode, setViewMode] = useState<"interactive" | "pdf">("interactive");

  return (
    <>
      <section className="pt-28 pb-12 px-6 md:px-10 max-w-5xl mx-auto">
        <Reveal>
          {/* Top navigation row */}
          <div className="flex items-center justify-between gap-4 mb-8 flex-wrap">
            <Link
              href="/"
              className="font-mono text-xs flex items-center gap-2 hover-line"
              style={{ color: "var(--text-muted)" }}
            >
              <ArrowLeft size={14} /> Back to Portfolio
            </Link>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode("interactive")}
                className="font-mono text-xs px-3 py-1.5 border transition-all"
                style={{
                  borderColor: viewMode === "interactive" ? "var(--text-primary)" : "var(--border)",
                  backgroundColor: viewMode === "interactive" ? "var(--text-primary)" : "transparent",
                  color: viewMode === "interactive" ? "var(--bg)" : "var(--text-muted)",
                }}
              >
                Web Layout
              </button>
              <button
                onClick={() => setViewMode("pdf")}
                className="font-mono text-xs px-3 py-1.5 border transition-all"
                style={{
                  borderColor: viewMode === "pdf" ? "var(--text-primary)" : "var(--border)",
                  backgroundColor: viewMode === "pdf" ? "var(--text-primary)" : "transparent",
                  color: viewMode === "pdf" ? "var(--bg)" : "var(--text-muted)",
                }}
              >
                Original PDF
              </button>
            </div>
          </div>

          {/* Action Callout Bar */}
          <div
            className="p-6 border mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            style={{
              borderColor: "var(--border)",
              backgroundColor: "var(--bg-secondary)",
            }}
          >
            <div>
              <div className="flex items-center gap-2 mb-1">
                <FilePdf size={18} weight="fill" style={{ color: "#ef4444" }} />
                <h1 className="font-mono text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                  Frank_Kelechi_Oge_Software_Engineer_CV.pdf
                </h1>
              </div>
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                Official 2-page curriculum vitae · Updated 2026 · Ready for download &amp; ATS indexing
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href={CV_PDF_PATH}
                download="Frank_Kelechi_Oge_Software_Dev_CV.pdf"
                className="cta-btn text-xs"
              >
                <DownloadSimple size={14} weight="bold" />
                Download PDF
              </a>
              <a
                href={CV_PDF_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn-ghost text-xs"
              >
                Full Tab <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </Reveal>

        {/* View Mode Switching */}
        {viewMode === "pdf" ? (
          <Reveal>
            <div
              className="border overflow-hidden rounded-sm"
              style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-secondary)" }}
            >
              <div
                className="p-3 border-b flex items-center justify-between text-xs font-mono"
                style={{ borderColor: "var(--border-subtle)" }}
              >
                <span style={{ color: "var(--text-muted)" }}>PDF Viewer Embed</span>
                <a
                  href={CV_PDF_PATH}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-line flex items-center gap-1"
                  style={{ color: "var(--text-primary)" }}
                >
                  Open in New Tab <ArrowUpRight size={12} />
                </a>
              </div>
              <iframe
                src={CV_PDF_PATH}
                className="w-full h-[900px] border-0"
                title="Frank Kelechi Oge CV"
              />
            </div>
          </Reveal>
        ) : (
          /* Interactive Web Version matching the PDF exactly */
          <Reveal>
            <article
              className="p-8 md:p-14 border shadow-sm"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--bg)",
              }}
            >
              {/* CV Header */}
              <header className="border-b pb-8 mb-8" style={{ borderColor: "var(--border-subtle)" }}>
                <h2 className="font-mono text-3xl md:text-4xl font-light mb-2 tracking-tight" style={{ color: "var(--text-primary)" }}>
                  FRANK KELECHI OGE
                </h2>
                <p className="font-mono text-xs md:text-sm tracking-wider uppercase mb-5 font-medium" style={{ color: "var(--text-muted)" }}>
                  Software Engineer | Full-Stack &amp; Backend Systems | AI Product Development
                </p>

                {/* Contact metadata */}
                <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-mono" style={{ color: "var(--text-secondary)" }}>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={14} style={{ color: "var(--text-muted)" }} />
                    <span>Enugu, Nigeria</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Phone size={14} style={{ color: "var(--text-muted)" }} />
                    <a href="tel:+2347061026144" className="hover-line">+234 706 102 6144</a>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Envelope size={14} style={{ color: "var(--text-muted)" }} />
                    <a href="mailto:ogekcfrankie@gmail.com" className="hover-line">ogekcfrankie@gmail.com</a>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-mono mt-3" style={{ color: "var(--text-secondary)" }}>
                  <div className="flex items-center gap-1.5">
                    <LinkedinLogo size={14} style={{ color: "var(--text-muted)" }} />
                    <a href="https://linkedin.com/in/frank-kelechi-oge" target="_blank" rel="noopener noreferrer" className="hover-line">
                      linkedin.com/in/frank-kelechi-oge
                    </a>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <GithubLogo size={14} style={{ color: "var(--text-muted)" }} />
                    <a href="https://github.com/frankdotdev" target="_blank" rel="noopener noreferrer" className="hover-line">
                      github.com/frankdotdev
                    </a>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Globe size={14} style={{ color: "var(--text-muted)" }} />
                    <a href="https://frankoge.com" target="_blank" rel="noopener noreferrer" className="hover-line">
                      frankoge.com
                    </a>
                  </div>
                </div>
              </header>

              {/* Professional Summary */}
              <section className="mb-10">
                <h3 className="font-mono text-xs tracking-widest uppercase mb-3 font-semibold pb-1 border-b" style={{ borderColor: "var(--border-subtle)", color: "var(--text-primary)" }}>
                  Professional Summary
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  Software engineer and founder experienced in designing, building, and shipping full-stack applications, backend services, AI-enabled products, automation systems, and offline-first mobile applications. Works across the software lifecycle, from requirements and data modelling to API design, implementation, testing, deployment, and iteration. Core engineering experience includes Python, FastAPI, Django REST Framework, TypeScript, React, Next.js, PostgreSQL, Redis, and SQLite, with practical integrations involving LLMs, payment providers, messaging platforms, and third-party APIs. Builds independently, contributes to open-source software, and translates operational problems into maintainable software.
                </p>
              </section>

              {/* Technical Skills */}
              <section className="mb-10">
                <h3 className="font-mono text-xs tracking-widest uppercase mb-4 font-semibold pb-1 border-b" style={{ borderColor: "var(--border-subtle)", color: "var(--text-primary)" }}>
                  Technical Skills
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {SKILL_GROUPS.map(({ title, skills }) => (
                    <div
                      key={title}
                      className="p-4 border"
                      style={{
                        borderColor: "var(--border-subtle)",
                        backgroundColor: "var(--bg-secondary)",
                      }}
                    >
                      <h4 className="font-mono text-xs font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                        {title}
                      </h4>
                      <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                        {skills.join(", ")}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Professional Experience */}
              <section className="mb-10">
                <h3 className="font-mono text-xs tracking-widest uppercase mb-4 font-semibold pb-1 border-b" style={{ borderColor: "var(--border-subtle)", color: "var(--text-primary)" }}>
                  Professional Experience
                </h3>
                <div className="flex flex-col gap-6">
                  {EXPERIENCE.map(({ role, company, period, points }) => (
                    <div key={company} className="flex flex-col gap-2">
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                        <h4 className="font-mono text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                          {role} <span style={{ color: "var(--text-muted)" }}>| {company}</span>
                        </h4>
                        <span className="font-mono text-xs" style={{ color: "var(--text-faint)" }}>
                          {period}
                        </span>
                      </div>
                      <ul className="flex flex-col gap-1.5 mt-1 list-disc list-inside text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                        {points.map((p, i) => (
                          <li key={i} className="pl-1">
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* Selected Engineering Projects */}
              <section className="mb-10">
                <h3 className="font-mono text-xs tracking-widest uppercase mb-4 font-semibold pb-1 border-b" style={{ borderColor: "var(--border-subtle)", color: "var(--text-primary)" }}>
                  Selected Engineering Projects
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {SELECTED_PROJECTS.map((proj) => (
                    <div
                      key={proj.title}
                      className="p-4 border flex flex-col justify-between"
                      style={{
                        borderColor: "var(--border-subtle)",
                        backgroundColor: "var(--bg-secondary)",
                      }}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <h4 className="font-mono text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                            {proj.title}
                          </h4>
                          <span className="tag text-[10px]">{proj.type}</span>
                        </div>
                        <p className="font-mono text-[11px] mb-2" style={{ color: "var(--text-muted)" }}>
                          {proj.stack}
                        </p>
                        <p className="text-xs leading-relaxed mb-3" style={{ color: "var(--text-secondary)" }}>
                          {proj.desc}
                        </p>
                      </div>

                      {proj.link && (
                        <div className="pt-2 border-t" style={{ borderColor: "var(--border-subtle)" }}>
                          <a
                            href={proj.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-[11px] flex items-center gap-1 hover-line"
                            style={{ color: "var(--text-primary)" }}
                          >
                            View Project <ArrowUpRight size={11} />
                          </a>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* Education */}
              <section>
                <h3 className="font-mono text-xs tracking-widest uppercase mb-4 font-semibold pb-1 border-b" style={{ borderColor: "var(--border-subtle)", color: "var(--text-primary)" }}>
                  Education
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <h4 className="font-mono text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                      B.Sc. Computer Science, Second Class Upper
                    </h4>
                    <p className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>
                      Caritas University, Enugu, Nigeria
                    </p>
                  </div>
                  <span className="font-mono text-xs" style={{ color: "var(--text-faint)" }}>
                    2026
                  </span>
                </div>
              </section>
            </article>
          </Reveal>
        )}

        {/* Floating Download Bar for mobile */}
        <div
          className="fixed bottom-6 left-6 right-6 z-40 sm:hidden p-3 border shadow-xl flex items-center justify-between"
          style={{
            backgroundColor: "var(--bg)",
            borderColor: "var(--border)",
          }}
        >
          <div className="flex items-center gap-2">
            <FilePdf size={18} weight="fill" style={{ color: "#ef4444" }} />
            <span className="font-mono text-xs" style={{ color: "var(--text-primary)" }}>
              Frank_Oge_CV.pdf
            </span>
          </div>
          <a
            href={CV_PDF_PATH}
            download="Frank_Kelechi_Oge_Software_Dev_CV.pdf"
            className="cta-btn text-xs px-3 py-1.5"
          >
            <DownloadSimple size={13} weight="bold" />
            Download
          </a>
        </div>
      </section>
    </>
  );
}
