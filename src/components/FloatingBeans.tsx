"use client";

function CoffeeBean({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      width="32"
      height="40"
      viewBox="0 0 32 40"
      fill="none"
      className={className}
      style={style}
    >
      <ellipse
        cx="16"
        cy="20"
        rx="12"
        ry="16"
        fill="var(--medium-roast)"
      />
      <path
        d="M16 6C14 12 14 28 16 34"
        stroke="var(--dark-roast)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <ellipse
        cx="16"
        cy="20"
        rx="12"
        ry="16"
        fill="none"
        stroke="var(--dark-roast)"
        strokeWidth="0.5"
        opacity="0.3"
      />
    </svg>
  );
}

export default function FloatingBeans() {
  const beans = [
    { top: "12%", left: "6%", rotate: "25deg", size: 0.7, duration: "14s", delay: "0s" },
    { top: "25%", right: "10%", rotate: "-15deg", size: 0.5, duration: "16s", delay: "2s" },
    { top: "55%", left: "3%", rotate: "45deg", size: 0.6, duration: "13s", delay: "1s" },
    { top: "70%", right: "5%", rotate: "-30deg", size: 0.45, duration: "15s", delay: "3s" },
    { top: "40%", left: "92%", rotate: "10deg", size: 0.55, duration: "17s", delay: "0.5s" },
    { top: "85%", left: "15%", rotate: "-40deg", size: 0.5, duration: "14s", delay: "2.5s" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {beans.map((bean, i) => (
        <div
          key={i}
          className="deco-bean animate-drift"
          style={{
            top: bean.top,
            left: bean.left,
            right: bean.right,
            ["--start-rotate" as string]: bean.rotate,
            animationDuration: bean.duration,
            animationDelay: bean.delay,
          }}
        >
          <CoffeeBean
            style={{ transform: `scale(${bean.size})` }}
          />
        </div>
      ))}
    </div>
  );
}
