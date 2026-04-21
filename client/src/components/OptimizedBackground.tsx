/**
 * OptimizedBackground — Reusable, performant gradient background
 * Uses CSS instead of SVG filters for better GPU acceleration and caching
 */

interface OptimizedBackgroundProps {
  grainOpacity?: number;
}

export default function OptimizedBackground({
  grainOpacity = 0.06,
}: OptimizedBackgroundProps) {
  return (
    <>
      {/* White background */}
      <div className="absolute inset-0 z-0 bg-white" />

      {/* Soft pastel gradient using CSS (much faster than SVG filters) */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at -10% -10%, rgba(150,230,235,0.55) 0%, transparent 40%),
            radial-gradient(circle at 110% 50%, rgba(200,170,235,0.5) 0%, transparent 40%),
            radial-gradient(circle at 50% 110%, rgba(120,210,255,0.45) 0%, transparent 40%)
          `,
        }}
      />

      {/* Subtle grain texture using SVG but without expensive filters */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E")`,
          opacity: grainOpacity,
          backgroundSize: "512px 512px",
        }}
      />
    </>
  );
}
