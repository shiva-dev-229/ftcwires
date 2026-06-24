import { PageHero } from "../_lib/ui";

export const metadata = {
  title: "PartsPool — FTC Wires",
  description:
    "A parts lending and pooling platform for FTC teams in Wisconsin — coming soon.",
};

export default function PartsPoolPage() {
  return (
    <>
      <style>{`
        @keyframes gear-spin {
          to { transform: rotate(360deg); }
        }
        .gear-rotate {
          animation: gear-spin 8s linear infinite;
          transform-origin: 48px 48px;
        }
        @keyframes seg-pulse {
          0%, 100% { opacity: 0.25; }
          50% { opacity: 1; }
        }
      `}</style>

      <PageHero
        showStatus
        statusLabel="Under Construction"
        title="PartsPool"
        desc="A parts lending and pooling platform for FTC teams — connecting teams with the hardware they need. Check back soon."
      />

      <section className="flex flex-col items-center gap-10 pb-40">
        {/* Rotating gear */}
        <svg
          width="96"
          height="96"
          viewBox="0 0 96 96"
          fill="none"
          aria-hidden="true"
          style={{ color: "var(--muted)" }}
        >
          <g className="gear-rotate">
            {/* Outer ring — stroke-dasharray creates the teeth */}
            <circle
              cx="48"
              cy="48"
              r="34"
              stroke="currentColor"
              strokeWidth="14"
              strokeDasharray="13.4 13.4"
            />
            {/* Inner solid disk */}
            <circle cx="48" cy="48" r="22" fill="currentColor" />
            {/* Hub hole */}
            <circle cx="48" cy="48" r="9" style={{ fill: "var(--background)" }} />
          </g>
        </svg>

        {/* Segmented progress bar — staggered pulse animation */}
        <div className="flex items-center gap-1.5" role="status" aria-label="Loading">
          {[0, 0.2, 0.4, 0.6, 0.8].map((delay, i) => (
            <div
              key={i}
              className="h-1.5 w-8 rounded-full"
              style={{
                background: "var(--muted)",
                animation: "seg-pulse 1.6s ease-in-out infinite",
                animationDelay: `${delay}s`,
              }}
            />
          ))}
        </div>

        <p
          className="font-mono text-sm uppercase tracking-widest"
          style={{ color: "var(--muted)" }}
        >
          Initializing
        </p>
      </section>
    </>
  );
}
