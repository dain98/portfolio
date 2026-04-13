"use client";

import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

const links = [
  {
    label: "GitHub",
    href: "https://github.com/dain98",
    display: "github.com/dain98",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/dainim",
    display: "linkedin.com/in/dainim",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://twitter.com/imd_js",
    display: "@imd_js",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "email",
    href: "mailto:business@dain.cafe",
    display: "business@dain.cafe",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M3 8l9 6 9-6" />
        <rect x="2" y="5" width="20" height="14" rx="2" />
      </svg>
    ),
  },
];

export default function ContactSection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">

      <div className="room-content max-w-5xl mx-auto">
        <SectionHeading
          title="Get in Touch"
          subtitle="Always happy to chat over a cup of coffee."
          id="contact"
        />

        <ScrollReveal variant="scale">
          <div className="max-w-xl mx-auto">
            <div className="menu-board p-8">
              <div className="text-center mb-6">
                <p
                  className="text-[var(--foam)] text-lg italic"
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                >
                  &ldquo;Let&apos;s connect&rdquo;
                </p>
                <div className="w-16 h-px bg-[var(--caramel)] mx-auto mt-3 opacity-40" />
              </div>

              <div className="space-y-2">
                {links.map((link, i) => (
                  <ScrollReveal key={link.label} delay={i * 100}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-[var(--menu-pill-bg)] transition-all group"
                    >
                      <div className="w-10 h-10 rounded-full bg-[var(--menu-pill-bg)] flex items-center justify-center text-[var(--caramel)] group-hover:bg-[var(--terracotta)] group-hover:text-white transition-all group-hover:scale-110 shrink-0">
                        {link.icon}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-[var(--menu-board-text)] text-sm group-hover:text-[var(--caramel)] transition-colors">
                          {link.label}
                        </div>
                        <div className="text-[var(--menu-quote)] text-sm">
                          {link.display}
                        </div>
                      </div>
                      <svg
                        className="w-4 h-4 text-[var(--menu-quote)] group-hover:text-[var(--caramel)] transition-all group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            <ScrollReveal delay={400}>
              <p className="mt-10 text-center text-[var(--text-muted)] text-lg italic" style={{ fontFamily: "'DM Serif Display', serif" }}>
                Whether it&apos;s AI, distributed systems, or just good coffee &mdash;
                <br />
                I&apos;m always down to chat.
              </p>
            </ScrollReveal>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
