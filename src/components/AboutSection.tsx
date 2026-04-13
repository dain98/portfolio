"use client";

import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

const skills = [
  { category: "Languages", items: ["Python", "TypeScript", "JavaScript"], icon: "{ }" },
  { category: "Frontend", items: ["React", "Next.js", "Vue", "Angular", "Tailwind"], icon: "<>" },
  { category: "Backend", items: ["Node.js", "Express", "NestJS"], icon: "//" },
  { category: "AI / ML", items: ["Google ADK", "Gemini", "Multi-Agent Systems"], icon: ">_" },
  { category: "Infrastructure", items: ["MongoDB", "Firebase", "Docker", "Railway"], icon: "##" },
];

export default function AboutSection() {
  return (
    <section className="relative py-32 px-6 bg-[var(--bg-warm)] overflow-hidden">

      <div className="room-content max-w-5xl mx-auto">
        <SectionHeading
          title="About Me"
          subtitle="A little bit about who I am and what I brew."
          id="about"
        />

        {/* Photo + Bio row */}
        <div className="grid md:grid-cols-5 gap-14 items-start mb-16">
          {/* Profile photo */}
          <ScrollReveal variant="left" className="md:col-span-2 flex justify-center">
            <div className="relative">
              <div className="w-52 h-52 rounded-lg overflow-hidden border-4 border-[var(--medium-roast)] shadow-lg hover:scale-[1.02] transition-transform duration-500">
                <img
                  src="/me.jpg"
                  alt="Dain Im"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Frame shadow */}
              <div className="absolute -inset-2 rounded-lg border border-[var(--border-soft)] opacity-40" />
            </div>
          </ScrollReveal>

          <ScrollReveal variant="right" className="md:col-span-3">
            <div className="space-y-6 text-[var(--text-body)] text-lg leading-relaxed">
              <p>
                I wrote my first line of code at{" "}
                <strong className="text-[var(--espresso)]">10 years old</strong>,
                and it&apos;s been a lifelong love affair with building things ever
                since. What started as scripts and small hacks has evolved into
                architecting AI-powered systems at scale.
              </p>
              <p>
                I graduated from{" "}
                <strong className="text-[var(--espresso)]">
                  Wentworth Institute of Technology
                </strong>{" "}
                with a B.S. in Computer Science and now work as an{" "}
                <span className="text-[var(--terracotta)] font-semibold">
                  AI Engineer at Aniline
                </span>
                , building agentic systems that help enterprises make smarter
                decisions.
              </p>
              <p>
                When I&apos;m not deep in code, you&apos;ll find me exploring new
                tools, contributing to side projects, or optimizing workflows —
                always looking for a better way to do things.
              </p>

              {/* Years counter */}
              <div className="flex items-center gap-6 pt-4">
                {[
                  { num: "15+", label: "Years coding" },
                  { num: "4+", label: "Companies" },
                  { num: "10+", label: "Projects shipped" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div
                      className="text-3xl text-[var(--terracotta)] font-bold"
                      style={{ fontFamily: "'DM Serif Display', serif" }}
                    >
                      {stat.num}
                    </div>
                    <div className="text-xs text-[var(--text-muted)] font-medium uppercase tracking-wider mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Skills Menu — full width */}
        <ScrollReveal variant="up">
          <div className="menu-board p-7 max-w-3xl mx-auto">
            <div className="text-center mb-6">
              <h3
                className="text-2xl text-[var(--foam)]"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                Today&apos;s Menu
              </h3>
              <div className="w-20 h-px bg-[var(--caramel)] mx-auto mt-2 opacity-50" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5">
              {skills.map((group, i) => (
                <ScrollReveal key={group.category} delay={i * 80}>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="text-[var(--caramel)] text-xs font-bold"
                        style={{ fontFamily: "'DM Serif Display', serif" }}
                      >
                        {group.icon}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-widest text-[var(--caramel)]">
                        {group.category}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 bg-[var(--menu-pill-bg)] text-[var(--menu-board-text)] rounded-full text-sm border border-[var(--menu-pill-border)] hover:border-[var(--caramel)] hover:text-[var(--caramel)] transition-all cursor-default"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-[var(--menu-divider)] text-center">
              <span
                className="text-xs text-[var(--menu-quote)] italic"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                &ldquo;Always learning, always building&rdquo;
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
