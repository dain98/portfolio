"use client";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  id: string;
}

function BeanIcon() {
  return (
    <svg width="20" height="24" viewBox="0 0 20 24" fill="none" className="inline-block">
      <ellipse cx="10" cy="12" rx="7" ry="10" fill="var(--caramel)" opacity="0.3" />
      <path d="M10 3C9 7 9 17 10 21" stroke="var(--medium-roast)" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

export default function SectionHeading({ title, subtitle, id }: SectionHeadingProps) {
  return (
    <div id={id} className="mb-16 scroll-mt-28 text-center">
      <div className="flex items-center justify-center gap-3 mb-4">
        <BeanIcon />
        <BeanIcon />
        <BeanIcon />
      </div>
      <h2
        className="text-4xl md:text-5xl text-[var(--espresso)] mb-3 hand-drawn-underline inline-block"
        style={{ fontFamily: "'DM Serif Display', serif" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-[var(--text-muted)] text-lg mt-4 italic">{subtitle}</p>
      )}
    </div>
  );
}
