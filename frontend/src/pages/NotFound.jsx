import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkles } from "lucide-react";
import AspirasiModal from "@/components/AspirasiModal";

export default function NotFound({
  title = "Halaman belum tersedia",
  message = "Halaman ini sedang dalam pengembangan atau tidak ditemukan. Silakan kembali ke beranda atau jelajahi fitur lainnya.",
}) {
  const navigate = useNavigate();
  const [aspirasiOpen, setAspirasiOpen] = useState(false);

  return (
    <section
      className="relative flex min-h-screen items-center justify-center px-6 pt-32 pb-24"
      data-testid="not-found-page"
    >
      {/* Floating pillar curves */}
      <FloatingPillars />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative inline-block"
        >
          <div className="absolute inset-0 -z-10 rounded-full bg-amber-500/25 blur-3xl" />
          <h1
            className="font-display text-[140px] sm:text-[200px] leading-none tracking-tighter"
            style={{
              background:
                "linear-gradient(180deg, #FBE2A0 0%, #E5B869 35%, #C68C48 65%, #6A3F18 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            404
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-amber-300">
            <Sparkles className="h-3 w-3" />
            Under Development
          </div>
          <h2 className="font-display text-3xl sm:text-4xl text-white">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-400">
            {message}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <button
            type="button"
            onClick={() => navigate("/")}
            data-testid="404-back-home"
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-medium text-white transition-all hover:border-amber-400/40 hover:bg-white/[0.07]"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Kembali ke Beranda
          </button>

          <button
            type="button"
            onClick={() => setAspirasiOpen(true)}
            data-testid="404-cta-aspirasi"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-amber-400 to-amber-700 px-6 py-3 text-sm font-semibold text-black shadow-[0_10px_40px_-10px_rgba(229,184,105,0.7)] transition-all hover:scale-[1.03]"
          >
            <Sparkles className="h-4 w-4" />
            Suarakan Aspirasi
          </button>
        </motion.div>
      </div>

      <AspirasiModal open={aspirasiOpen} onOpenChange={setAspirasiOpen} />
    </section>
  );
}

function FloatingPillars() {
  const items = [
    { x: "8%", y: "20%", size: 80, delay: 0 },
    { x: "85%", y: "18%", size: 110, delay: 1.2 },
    { x: "12%", y: "75%", size: 96, delay: 0.6 },
    { x: "82%", y: "70%", size: 70, delay: 1.8 },
    { x: "50%", y: "85%", size: 60, delay: 2.4 },
  ];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {items.map((it, i) => (
        <motion.svg
          key={i}
          className="absolute opacity-30"
          style={{ left: it.x, top: it.y, width: it.size, height: it.size }}
          viewBox="0 0 200 200"
          fill="none"
          animate={{ y: [-8, 10, -8], rotate: [0, 6, 0] }}
          transition={{
            duration: 7 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: it.delay,
          }}
        >
          <path
            d="M100 20 L100 180 M60 60 Q100 100 60 180 M140 60 Q100 100 140 180"
            stroke="url(#g)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0" stopColor="#E5B869" />
              <stop offset="1" stopColor="#8A5A28" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </motion.svg>
      ))}
    </div>
  );
}
