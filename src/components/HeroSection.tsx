"use client";

import StaggerReveal from "./StaggerReveal";

function SteamPuff({ delay, x, size }: { delay: string; x: number; size: number }) {
  return (
    <div
      className="steam-puff"
      style={{
        animationDelay: delay,
        left: x,
        width: size,
        height: size,
      }}
    />
  );
}

function SteamAnimation() {
  const puffs = [
    { delay: "0s", x: 5, size: 26 },
    { delay: "0.4s", x: 75, size: 24 },
    { delay: "0.8s", x: 28, size: 28 },
    { delay: "1.2s", x: 90, size: 22 },
    { delay: "1.6s", x: 15, size: 24 },
    { delay: "2s", x: 55, size: 26 },
    { delay: "2.4s", x: 42, size: 24 },
    { delay: "2.8s", x: 68, size: 22 },
  ];

  return (
    <div className="absolute" style={{ width: "115px", bottom: "110px", left: "50%", transform: "translateX(calc(-50% - 8px))" }}>
      {puffs.map((p, i) => (
        <SteamPuff key={i} {...p} />
      ))}
    </div>
  );
}

function LatteArt() {
  return (
    <div className="relative animate-fade-up">
      {/* Cup */}
      <div className="relative mx-auto" style={{ width: "180px", height: "150px" }}>
        <SteamAnimation />
        <svg width="180" height="150" viewBox="0 0 180 150" fill="none" className="relative z-10">
        {/* Saucer shadow */}
        <ellipse cx="82" cy="142" rx="72" ry="8" fill="var(--border-warm)" opacity="0.15" />

        {/* Saucer */}
        <ellipse cx="82" cy="138" rx="70" ry="10" fill="var(--bg-card)" stroke="var(--border-warm)" strokeWidth="1" />
        <ellipse cx="82" cy="137" rx="58" ry="6" fill="none" stroke="var(--border-soft)" strokeWidth="0.5" opacity="0.5" />

        {/* Cup body */}
        <path
          d="M25 40 C25 42, 24 44, 24 46 C24 78, 44 105, 82 105 C120 105, 140 78, 140 46 C140 44, 139 42, 139 40 Z"
          fill="var(--bg-card)"
          stroke="var(--border-warm)"
          strokeWidth="1.2"
        />

        {/* Cup rim */}
        <ellipse cx="82" cy="40" rx="57" ry="10" fill="var(--bg-card)" stroke="var(--border-warm)" strokeWidth="1.2" />
        <ellipse cx="82" cy="40" rx="57" ry="10" fill="none" stroke="var(--border-soft)" strokeWidth="0.5" opacity="0.4" />

        {/* Coffee surface */}
        <ellipse cx="82" cy="42" rx="50" ry="7" fill="var(--caramel)" />

        {/* Latte art — heart */}
        <g opacity="0.75">
          <path
            d="M82 36 C78 32, 70 32, 70 37 C70 42, 82 48, 82 48 C82 48, 94 42, 94 37 C94 32, 86 32, 82 36Z"
            fill="var(--foam)"
          />
          <line x1="82" y1="46" x2="82" y2="50" stroke="var(--foam)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        </g>

        {/* Cup handle */}
        <path
          d="M140 52 C140 52, 152 52, 156 60 C160 68, 158 82, 150 86 C146 88, 140 86, 140 86"
          stroke="var(--border-warm)"
          strokeWidth="1.2"
          fill="none"
        />

        {/* Rim highlight */}
        <ellipse cx="82" cy="38" rx="48" ry="5" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3" />
      </svg>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-latte)] via-[var(--bg-warm)] to-[var(--bg-cream)]" />


      <div className="room-content relative max-w-2xl text-center">
        <LatteArt />

        <StaggerReveal delay={200}>
          <h1
            className="text-5xl md:text-7xl text-[var(--espresso)] mt-10 mb-6"
            style={{ fontFamily: "'DM Serif Display', serif", lineHeight: 1.1 }}
          >
            Hi, I&apos;m{" "}
            <span className="text-[var(--terracotta)] relative">
              Dain
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="8"
                viewBox="0 0 100 8"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 10 1, 25 5 T 50 5 T 75 5 T 100 5"
                  stroke="var(--terracotta-soft)"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.6"
                />
              </svg>
            </span>
          </h1>
        </StaggerReveal>

        <StaggerReveal delay={350}>
          <p className="text-xl md:text-2xl text-[var(--text-body)] leading-relaxed mb-4">
            AI Engineer crafting intelligent systems by day,
            <br className="hidden md:block" />
            building things that just work.
          </p>
        </StaggerReveal>

        <StaggerReveal delay={500}>
          <p className="text-[var(--text-muted)] text-lg mb-10">
            Currently brewing ideas at{" "}
            <span className="text-[var(--terracotta)] font-semibold">Aniline</span>
            {" "}&mdash;{" "}
            <span
              className="text-[var(--caramel)] italic"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              welcome to my cafe
            </span>
          </p>
        </StaggerReveal>

        <StaggerReveal delay={650}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#about"
              className="group px-8 py-3.5 rounded-full bg-[var(--espresso)] text-[var(--bg-cream)] font-semibold hover:bg-[var(--terracotta)] hover:text-[var(--foam)] transition-all hover:shadow-lg text-sm inline-flex items-center gap-2"
            >
              Pull up a chair
              <svg className="w-4 h-4 transition-transform group-hover:translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </a>
            <a
              href="#projects"
              className="px-8 py-3.5 rounded-full border-2 border-[var(--border-warm)] text-[var(--medium-roast)] font-semibold hover:border-[var(--terracotta)] hover:text-[var(--terracotta)] transition-all text-sm"
            >
              Browse the menu
            </a>
          </div>
        </StaggerReveal>
      </div>
    </section>
  );
}
