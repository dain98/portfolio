"use client";

import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    name: "osu! Multi Lobbies Parser",
    description:
      "Advanced tournament match parser with detailed team performance breakdowns per map and batch processing support.",
    tech: ["JavaScript", "osu! API"],
    link: "https://ompc.petrichor.one",
    status: "live",
  },
  {
    name: "SAIQ Agents",
    description:
      "Multi-agent AI system using Google ADK and Gemini to compose personalized outreach with behavioral profile inference.",
    tech: ["Python", "Google ADK", "Gemini"],
    status: "private",
  },
  {
    name: "LoL Decay Tracker",
    description:
      "Full-stack app tracking League of Legends ranked decay across multiple accounts. React frontend, Node.js backend, Riot Games API integration.",
    tech: ["React", "Node.js", "MongoDB", "Riot API"],
    link: "https://loldecay.dain.cafe",
    status: "archived",
  },
  {
    name: "osu! BWS Calculator",
    description:
      "Badge Weighted Seeding calculator for tournament eligibility — a community tool used by tournament organizers.",
    tech: ["JavaScript", "osu! API"],
    status: "archived",
  },
  {
    name: "osu! Match Costs",
    description:
      "Evaluates individual player performance during tournament matches with batch processing across multiplayer lobbies.",
    tech: ["JavaScript", "osu! API"],
    status: "archived",
  },
  {
    name: "Chinchou & Minccino",
    description:
      "Discord bots for community management and server features, built under the Kogomi-Space organization.",
    tech: ["Python", "Discord.py"],
    link: "https://github.com/dain98",
    status: "archived",
  },
];

const statusConfig: Record<string, { text: string; stampColor: string }> = {
  live: { text: "Fresh Brew", stampColor: "text-[var(--sage)] border-[var(--sage)]" },
  archived: { text: "Vintage", stampColor: "text-[var(--text-muted)] border-[var(--text-muted)]" },
  private: { text: "Secret Recipe", stampColor: "text-[var(--caramel)] border-[var(--caramel)]" },
};

function ExternalLinkIcon() {
  return (
    <svg
      className="w-3.5 h-3.5 ml-1 inline-block opacity-50 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M7 17l9.2-9.2M17 17V7.8H7.8" />
    </svg>
  );
}

export default function ProjectsSection() {
  return (
    <section className="relative py-32 px-6 bg-[var(--bg-warm)] overflow-hidden">
      <div className="room-content max-w-5xl mx-auto">
        <SectionHeading
          title="Projects"
          subtitle="Things I've cooked up — some still simmering, some off the menu."
          id="projects"
        />

        <div className="grid md:grid-cols-2 gap-7">
          {projects.map((project, i) => (
            <ScrollReveal key={i} variant="scale" delay={i * 80}>
              <div className="cafe-card p-6 flex flex-col h-full relative overflow-hidden group" style={{ transform: "rotate(0.5deg)" }}>
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-[var(--terracotta)] opacity-[0.03] group-hover:opacity-[0.06] transition-opacity" />
                </div>

                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3
                    className="text-xl text-[var(--espresso)] group-hover:text-[var(--terracotta)] transition-colors"
                    style={{ fontFamily: "'DM Serif Display', serif" }}
                  >
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-warm inline-flex items-center"
                      >
                        {project.name}
                        <ExternalLinkIcon />
                      </a>
                    ) : (
                      project.name
                    )}
                  </h3>
                  <span
                    className={`stamp shrink-0 ${statusConfig[project.status].stampColor}`}
                  >
                    {statusConfig[project.status].text}
                  </span>
                </div>
                <p className="text-[var(--text-body)] text-sm leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-[var(--bg-cream)] text-[var(--light-roast)] border border-[var(--border-soft)] hover:bg-[var(--bg-latte)] transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
