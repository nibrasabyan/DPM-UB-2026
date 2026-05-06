import { motion } from "framer-motion";

/**
 * Layered ambient canvas:
 *  1. Solid base color
 *  2. Vertical & radial gradient
 *  3. Animated blurred blobs (navy + gold)
 *  4. Subtle conic light beams
 *  5. Noise overlay
 *  6. Faint pillar curve SVGs (logo-inspired)
 */
export default function Background() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      data-testid="ambient-background"
    >
      {/* base */}
      <div className="absolute inset-0 bg-[#02040A]" />

      {/* vertical gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #050B14 0%, #02040A 55%, #02040A 100%)",
        }}
      />

      {/* radial gold halo top */}
      <div
        className="absolute -top-40 left-1/2 h-[700px] w-[1100px] -translate-x-1/2 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(198,140,72,0.18) 0%, rgba(198,140,72,0.05) 35%, transparent 70%)",
        }}
      />

      {/* blob 1 — navy */}
      <motion.div
        className="absolute -left-40 top-40 h-[520px] w-[520px] rounded-full blur-[140px]"
        style={{ background: "rgba(28, 56, 110, 0.45)" }}
        animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* blob 2 — copper */}
      <motion.div
        className="absolute right-[-120px] top-[40%] h-[460px] w-[460px] rounded-full blur-[140px]"
        style={{ background: "rgba(198, 140, 72, 0.22)" }}
        animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* blob 3 — deep navy bottom */}
      <motion.div
        className="absolute bottom-[-180px] left-1/3 h-[600px] w-[600px] rounded-full blur-[160px]"
        style={{ background: "rgba(11, 22, 40, 0.85)" }}
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* conic beam top-right */}
      <div
        className="absolute right-0 top-0 h-[800px] w-[800px] opacity-30"
        style={{
          background:
            "conic-gradient(from 200deg at 70% 10%, transparent 0deg, rgba(229,184,105,0.15) 40deg, transparent 80deg)",
        }}
      />

      {/* faint pillar SVG decoration */}
      <svg
        className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 opacity-[0.04]"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path
          d="M100 20 L100 180 M60 60 Q100 100 60 180 M140 60 Q100 100 140 180"
          stroke="#C68C48"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>

      {/* noise */}
      <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-[0.35]" />

      {/* vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.55) 100%)",
        }}
      />
    </div>
  );
}
