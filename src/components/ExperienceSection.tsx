"use client";

import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

const experiences = [
  {
    role: "AI Engineer",
    company: "Aniline",
    period: "2026 — Present",
    description:
      "Building agentic AI systems powering SalesAssistIQ — a platform analyzing financial filings, market trends, and employee sentiment for enterprise sales intelligence.",
    tech: ["Python", "Google ADK", "Gemini", "Agentic AI"],
    icon: "🤖",
  },
  {
    role: "Member of Technical Staff",
    company: "Macrometa",
    period: "2024 — 2025",
    description:
      "Worked across the stack on a geo-distributed edge computing platform serving 175+ global points of presence.",
    tech: ["TypeScript", "Angular", "NestJS", "Docker"],
    icon: "🌐",
  },
  {
    role: "Software Engineer Intern",
    company: "Macrometa",
    period: "2022 — 2023",
    description:
      "Two internship stints building developer tooling and features for the edge computing platform before converting to full-time.",
    tech: ["TypeScript", "Node.js", "NX Monorepo"],
    icon: "⚡",
  },
  {
    role: "Distributed Analytics Intern",
    company: "Samsung SDS America",
    period: "2021",
    description:
      "Developed analytics tooling for distributed systems at Samsung's enterprise IT services division.",
    tech: ["Python", "Distributed Systems"],
    icon: "📊",
  },
  {
    role: "Software Engineer Intern",
    company: "Samsung SDS Korea",
    period: "2019",
    description:
      "Early career internship at Samsung SDS headquarters, contributing to internal engineering tools.",
    tech: ["Software Engineering"],
    icon: "🛠",
  },
];

export default function ExperienceSection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">

      <div className="room-content max-w-5xl mx-auto">
        <SectionHeading
          title="Experience"
          subtitle="Places I've brewed up some good work."
          id="experience"
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Clothesline */}
          <div className="line-sway">
            <svg className="w-full h-4" viewBox="0 0 600 16" preserveAspectRatio="none" fill="none">
              <path
                d="M0 8 Q 150 14, 300 8 Q 450 2, 600 8"
                stroke="var(--border-warm)"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>

          <div className="space-y-8 mt-4">
            {experiences.map((exp, i) => (
              <ScrollReveal key={i} variant="left" delay={i * 100}>
                <div className="relative pl-16 md:pl-20 group">
                  {/* Clothespin */}
                  <div className="absolute left-5 md:left-7 top-3">
                    <svg width="16" height="28" viewBox="0 0 16 28" fill="none">
                      <path d="M4 0v10L2 14v10c0 2 12 2 12 0V14l-2-4V0" fill="var(--medium-roast)" opacity="0.5" />
                      <path d="M4 0h8v3H4z" fill="var(--terracotta)" opacity="0.3" />
                    </svg>
                  </div>

                  <div className="cafe-card p-6 group-hover:border-[var(--terracotta-soft)]">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-3">
                      <div>
                        <h3
                          className="text-xl text-[var(--espresso)] group-hover:text-[var(--terracotta)] transition-colors"
                          style={{ fontFamily: "'DM Serif Display', serif" }}
                        >
                          {exp.role}
                        </h3>
                        <span className="text-[var(--terracotta)] font-semibold text-sm">
                          {exp.company}
                        </span>
                      </div>
                      <span className="text-xs font-medium text-[var(--text-muted)] bg-[var(--bg-warm)] px-3 py-1.5 rounded-full shrink-0 border border-[var(--border-soft)]">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-[var(--text-body)] leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-semibold px-3 py-1 rounded-full bg-[var(--bg-warm)] text-[var(--medium-roast)] border border-[var(--border-soft)] hover:border-[var(--caramel)] transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
