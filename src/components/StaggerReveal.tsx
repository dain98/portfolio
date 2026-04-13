"use client";

import { ReactNode } from "react";

interface StaggerRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function StaggerReveal({
  children,
  className = "",
  delay = 0,
}: StaggerRevealProps) {
  return (
    <div
      className={`animate-fade-up ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
