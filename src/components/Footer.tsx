export default function Footer() {
  return (
    <footer className="relative py-12 px-6 bg-[var(--bg-dark)] overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--caramel)] to-transparent opacity-30" />

      <div className="max-w-5xl mx-auto flex flex-col items-center gap-6">
        <div className="flex items-center gap-3">
          {/* Small coffee cup */}
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-[var(--text-muted)]" opacity="0.4">
            <path d="M3 6h10v2c0 4-2 6-5 6S3 12 3 8V6z" stroke="currentColor" strokeWidth="1" />
            <path d="M13 8h2c1.5 0 2.5 1 2.5 2s-1 2-2.5 2h-2" stroke="currentColor" strokeWidth="1" />
          </svg>
          <span
            className="text-lg text-[var(--text-muted)]"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            dain.cafe
          </span>
        </div>
        <div className="w-12 h-px bg-[var(--caramel)] opacity-20" />
        <span className="text-sm text-[var(--text-muted)] opacity-60">
          &copy;&nbsp;{new Date().getFullYear()}&ensp;&middot;&ensp;Dain Im&ensp;&middot;&ensp;Brewed with Next.js &amp; Tailwind
        </span>
      </div>
    </footer>
  );
}
