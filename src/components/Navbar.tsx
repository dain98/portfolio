"use client";

import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[var(--bg-cream)]/95 backdrop-blur-lg shadow-[0_1px_0_var(--border-soft)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-2 group"
        >
          {/* Tiny cup icon */}
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-[var(--terracotta)] group-hover:scale-110 transition-transform">
            <path d="M2 5h10v2c0 4-2 6-5 6S2 11 2 7V5z" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1.2" />
            <path d="M12 7h2c1.5 0 2.5 1 2.5 2s-1 2-2.5 2h-2" stroke="currentColor" strokeWidth="1.2" />
          </svg>
          <span
            className="text-xl text-[var(--espresso)] group-hover:text-[var(--terracotta)] transition-colors"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            dain.cafe
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-sm font-medium text-[var(--light-roast)] hover:text-[var(--terracotta)] transition-colors py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[var(--terracotta)] after:transition-all hover:after:w-full after:rounded-full"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="https://github.com/dain98"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold px-5 py-2.5 rounded-full bg-[var(--espresso)] text-[var(--bg-cream)] hover:bg-[var(--terracotta)] hover:text-[var(--foam)] transition-all hover:shadow-md"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}
