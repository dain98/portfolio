"use client";

import StaggerReveal from "./StaggerReveal";

function SteamWisp({ delay, duration, path, width, height, offsetX }: {
  delay: string; duration: string; path: string; width: number; height: number; offsetX?: number;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className="steam-curl"
      style={{ animationDelay: delay, animationDuration: duration, marginLeft: offsetX ?? 0 }}
    >
      <path
        d={path}
        stroke="var(--border-warm)"
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SteamAnimation() {
  const wisps = [
    { delay: "0s", duration: "3.2s", path: "M14 70 C4 58, 24 50, 12 38 C0 26, 22 18, 12 6 C8 2, 16 -2, 12 -8", width: 28, height: 78, offsetX: 0 },
    { delay: "0.8s", duration: "2.8s", path: "M14 70 C24 56, 2 46, 14 34 C26 22, 4 12, 14 0 C16 -4, 10 -8, 14 -12", width: 28, height: 82, offsetX: 4 },
    { delay: "1.5s", duration: "3.6s", path: "M12 70 C2 60, 22 52, 10 40 C-2 28, 20 20, 10 8 C6 2, 16 -2, 10 -6", width: 24, height: 76, offsetX: -2 },
    { delay: "2.2s", duration: "3s", path: "M10 64 C18 54, 0 44, 12 32 C24 20, 4 10, 12 0", width: 24, height: 64, offsetX: 6 },
  ];

  return (
    <div className="flex justify-center items-end" style={{ height: "80px", marginBottom: "-8px" }}>
      {wisps.map((w, i) => (
        <SteamWisp key={i} {...w} />
      ))}
    </div>
  );
}

function LatteArt() {
  return (
    <div className="relative animate-fade-up">
      <SteamAnimation />
      {/* Cup */}
      <svg width="180" height="150" viewBox="0 0 180 150" fill="none" className="mx-auto">
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
            tinkering with code since I was ten.
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
