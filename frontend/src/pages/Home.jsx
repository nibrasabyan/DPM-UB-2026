import { useState } from "react";
import { motion } from "framer-motion";
import {
  Scale,
  Eye,
  Wallet,
  Megaphone,
  Handshake,
  ArrowUpRight,
  Building2,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Users,
  Send,
  Activity,
} from "lucide-react";
import AspirasiModal from "@/components/AspirasiModal";

const REKTORAT_URL =
  "https://customer-assets.emergentagent.com/job_b2fc0a22-8731-4a19-80e8-90b4a3abe1f1/artifacts/q7n3rxgd_4595177066_9b844906f4_b-removebg-preview.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Home() {
  const [aspirasiOpen, setAspirasiOpen] = useState(false);

  return (
    <>
      <Hero onAspirasi={() => setAspirasiOpen(true)} />
      <AboutShort />
      <Pilar />
      <FeaturePreview onAspirasi={() => setAspirasiOpen(true)} />
      <FinalCTA onAspirasi={() => setAspirasiOpen(true)} />
      <AspirasiModal open={aspirasiOpen} onOpenChange={setAspirasiOpen} />
    </>
  );
}

/* ---------------- HERO ---------------- */
function Hero({ onAspirasi }) {
  return (
    <section
      className="relative overflow-hidden pt-28 pb-24 lg:pt-32 lg:pb-32"
      data-testid="hero-section"
    >
      {/* Decorative flowing curve line — bottom left */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 hidden h-[520px] w-[700px] opacity-40 lg:block"
        viewBox="0 0 700 520"
        fill="none"
      >
        <path
          d="M -20 480 Q 200 480 300 380 T 580 120 Q 640 60 700 40"
          stroke="url(#curveGrad)"
          strokeWidth="1.2"
          fill="none"
        />
        <defs>
          <linearGradient id="curveGrad" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(229,184,105,0)" />
            <stop offset="40%" stopColor="rgba(229,184,105,0.6)" />
            <stop offset="100%" stopColor="rgba(198,140,72,0)" />
          </linearGradient>
        </defs>
      </svg>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 sm:px-8 lg:grid-cols-12 lg:gap-6">
        {/* Left - typography */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
          className="lg:col-span-6"
        >
          {/* Welcome pill (BEM FEB UI inspired) */}
          <motion.div
            variants={fadeUp}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-gradient-to-r from-amber-500/15 to-amber-700/5 px-5 py-2 backdrop-blur-md shadow-[0_8px_30px_-12px_rgba(229,184,105,0.4)]"
          >
            <ShieldCheck className="h-3.5 w-3.5 text-amber-300" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-amber-200">
              Selamat Datang Di
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-display text-6xl font-bold leading-[0.92] tracking-tighter text-white sm:text-7xl lg:text-[88px]"
          >
            DPM UB{" "}
            <span
              style={{
                background:
                  "linear-gradient(120deg, #FBE2A0 0%, #E5B869 45%, #C68C48 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              2026
            </span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="mt-6 flex items-center gap-4"
          >
            <div className="h-px w-12 bg-gradient-to-r from-amber-500 to-transparent" />
            <p className="font-display text-xl italic text-amber-300 sm:text-2xl">
              Parlemen Pilar Karsa
            </p>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-xl text-base leading-relaxed text-slate-300"
          >
            DPM UB adalah lembaga perwakilan mahasiswa Universitas Brawijaya
            yang menjalankan fungsi legislasi, pengawasan, dan advokasi.
            Kami berdiri untuk memastikan setiap suara mahasiswa terdengar
            dan menjadi pondasi kebijakan kampus.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <button
              type="button"
              onClick={onAspirasi}
              data-testid="hero-cta-aspirasi"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-amber-400 to-amber-700 px-7 py-3.5 text-sm font-semibold text-black shadow-[0_15px_50px_-10px_rgba(229,184,105,0.65)] transition-all hover:scale-[1.04]"
            >
              <Sparkles className="h-4 w-4" />
              Suarakan Aspirasimu
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <a
              href="#pilar"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-white transition-all hover:border-amber-400/40 hover:bg-white/[0.06]"
              data-testid="hero-cta-pilar"
            >
              Pelajari 5 Pilar
            </a>
          </motion.div>
        </motion.div>

        {/* Right - dominant Rektorat with elliptical halo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative lg:col-span-6"
          data-testid="hero-rektorat"
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[600px]">
            {/* Elliptical gold halo behind building (BEM FEB UI inspired) */}
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2"
              style={{
                width: "82%",
                height: "92%",
              }}
            >
              <div
                className="h-full w-full rounded-[50%]"
                style={{
                  background:
                    "radial-gradient(ellipse at center, #E5B869 0%, #C68C48 40%, #6A3F18 78%, transparent 100%)",
                  filter: "blur(0.5px)",
                  opacity: 0.55,
                }}
              />
            </div>

            {/* Outer soft halo (extends past ellipse) */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 -z-20 h-[110%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/20 blur-[100px]" />

            {/* Faint pillar curves behind ellipse */}
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 opacity-[0.08]"
              viewBox="0 0 200 200"
              fill="none"
            >
              <path
                d="M100 20 L100 180 M55 55 Q100 100 55 180 M145 55 Q100 100 145 180"
                stroke="#FBE2A0"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>

            {/* Building (no float, dominant) */}
            <motion.img
              src={REKTORAT_URL}
              alt="Gedung Rektorat Universitas Brawijaya"
              animate={{ y: [-4, 6, -4] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="relative h-full w-full object-contain"
              style={{
                filter:
                  "brightness(1.15) contrast(1.05) saturate(1.1) drop-shadow(0 30px 60px rgba(198,140,72,0.45)) drop-shadow(0 0 30px rgba(229,184,105,0.3))",
              }}
            />

            {/* Reflection at the bottom (BEM FEB UI inspired) */}
            <div
              className="pointer-events-none absolute -bottom-1 left-0 right-0 h-[28%] overflow-hidden"
              style={{
                transform: "scaleY(-1)",
                opacity: 0.18,
                maskImage:
                  "linear-gradient(to bottom, black 0%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 0%, transparent 100%)",
              }}
            >
              <img
                src={REKTORAT_URL}
                alt=""
                className="h-full w-full object-contain object-top"
                style={{ filter: "brightness(1.1) blur(1px)" }}
              />
            </div>

            {/* Light beam from top */}
            <div
              className="pointer-events-none absolute -top-8 left-1/2 h-44 w-1.5 -translate-x-1/2"
              style={{
                background:
                  "linear-gradient(180deg, transparent 0%, rgba(251,226,160,0.7) 50%, transparent 100%)",
                filter: "blur(1.5px)",
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Stats strip — full width below hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mx-auto mt-20 grid max-w-5xl grid-cols-2 gap-3 px-6 sm:grid-cols-4 sm:px-8"
        data-testid="hero-stats"
      >
        {[
          { v: "16", l: "Fakultas" },
          { v: "60+", l: "Anggota" },
          { v: "5", l: "Pilar Fungsi" },
          { v: "2026", l: "Periode" },
        ].map((s, i) => (
          <div
            key={i}
            className="rounded-2xl border border-white/[0.06] bg-white/[0.02] px-5 py-4 backdrop-blur-md transition-all hover:border-amber-400/30 hover:bg-white/[0.04]"
          >
            <div className="font-display text-3xl text-white sm:text-4xl">
              {s.v}
            </div>
            <div className="mt-1 text-[10px] uppercase tracking-[0.22em] text-slate-400">
              {s.l}
            </div>
          </div>
        ))}
      </motion.div>

      <div className="gold-divider mx-auto mt-24 max-w-7xl" />
    </section>
  );
}

/* ---------------- ABOUT SHORT ---------------- */
function AboutShort() {
  const items = [
    {
      Icon: Building2,
      title: "Lembaga Tinggi",
      desc: "Kekuasaan legislatif tertinggi mahasiswa di Universitas Brawijaya.",
    },
    {
      Icon: ShieldCheck,
      title: "Pengawasan",
      desc: "Mengawasi setiap kebijakan dan program kerja Eksekutif Mahasiswa.",
    },
    {
      Icon: Users,
      title: "Representasi",
      desc: "Membawa aspirasi mahasiswa dari 16 fakultas ke meja kebijakan.",
    },
  ];

  return (
    <section
      className="relative px-6 py-20 sm:px-8 lg:py-28"
      data-testid="about-section"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid gap-10 lg:grid-cols-12"
        >
          <motion.div variants={fadeUp} className="lg:col-span-5">
            <div className="text-[11px] uppercase tracking-[0.25em] text-amber-400/80">
              Tentang DPM UB
            </div>
            <h2 className="mt-3 font-display text-4xl tracking-tight text-white sm:text-5xl">
              Pondasi suara, <br />
              pilar <span className="italic gold-text">karsa</span>.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-slate-400">
              DPM UB adalah lembaga perwakilan mahasiswa yang menjalankan fungsi
              legislasi, pengawasan, dan advokasi — memastikan kebijakan kampus
              tetap berpihak pada mahasiswa.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-3 lg:col-span-7">
            {items.map(({ Icon, title, desc }, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group glass relative overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1"
              >
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-amber-500/10 blur-2xl transition-opacity group-hover:opacity-100 opacity-50" />
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-amber-400/30 bg-amber-500/10 text-amber-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- 5 PILAR ---------------- */
const PILAR = [
  {
    Icon: Scale,
    title: "Legislasi",
    pasal: "Bab 2 Pasal 4 Ayat 1",
    desc: "Perwujudan DPM UB selaku pemegang kewenangan untuk membentuk produk hukum pada tingkat LKM UB.",
  },
  {
    Icon: Eye,
    title: "Pengawasan",
    pasal: "Bab 2 Pasal 4 Ayat 2",
    desc: "Mengawasi pelaksanaan program kerja dan kebijakan EM UB baik dalam lingkup eksternal dan/atau internal.",
  },
  {
    Icon: Wallet,
    title: "Anggaran",
    pasal: "Bab 2 Pasal 4 Ayat 3",
    desc: "Membahas dan mengawasi anggaran yang disusun dan diajukan oleh EM UB.",
  },
  {
    Icon: Megaphone,
    title: "Advokasi",
    pasal: "Bab 2 Pasal 4 Ayat 4",
    desc: "Menyalurkan aspirasi mahasiswa kepada pihak yang bersangkutan.",
  },
  {
    Icon: Handshake,
    title: "Hubungan Masyarakat",
    pasal: "Bab 2 Pasal 4 Ayat 5",
    desc: "Pembinaan dan peningkatan kerja sama antara DPM UB dengan lembaga institusi lainnya.",
  },
];

function Pilar() {
  return (
    <section
      id="pilar"
      className="relative px-6 py-24 sm:px-8 lg:py-32"
      data-testid="pilar-section"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <div className="text-[11px] uppercase tracking-[0.25em] text-amber-400/80">
            Fungsi Utama
          </div>
          <h2 className="mt-4 font-display text-4xl tracking-tight text-white sm:text-5xl">
            5 Pilar <span className="italic gold-text">Parlemen</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-slate-400">
            Lima fungsi konstitusional yang menjadi tulang punggung DPM UB
            dalam menjalankan amanat mahasiswa.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PILAR.map(({ Icon, title, pasal, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className={`group relative overflow-hidden rounded-3xl border border-white/[0.06] bg-gradient-to-b from-white/[0.025] to-transparent p-7 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-amber-400/30 ${
                i === 4 ? "lg:col-span-1 sm:col-span-2 lg:col-start-2" : ""
              }`}
              data-testid={`pilar-card-${i}`}
            >
              {/* corner glow */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-amber-500/0 blur-3xl transition-all duration-500 group-hover:bg-amber-500/15" />

              {/* number */}
              <div className="absolute right-6 top-6 font-display text-5xl text-white/[0.04] transition-colors group-hover:text-amber-400/20">
                0{i + 1}
              </div>

              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-amber-400/30 bg-gradient-to-b from-amber-500/15 to-amber-700/5 text-amber-300 shadow-[0_8px_24px_-8px_rgba(229,184,105,0.4)]">
                <Icon className="h-5 w-5" />
              </div>

              <div className="text-[10px] uppercase tracking-[0.22em] text-amber-400/70">
                {pasal}
              </div>
              <h3 className="mt-2 font-display text-2xl text-white">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {desc}
              </p>

              <div className="mt-6 flex items-center gap-2 text-xs text-amber-300/80 transition-all group-hover:text-amber-300">
                <span>Selengkapnya</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FEATURE PREVIEW ---------------- */
function FeaturePreview({ onAspirasi }) {
  return (
    <section
      className="relative px-6 py-24 sm:px-8 lg:py-32"
      data-testid="feature-section"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-end"
        >
          <div>
            <div className="text-[11px] uppercase tracking-[0.25em] text-amber-400/80">
              Sorotan Fitur
            </div>
            <h2 className="mt-4 font-display text-4xl tracking-tight text-white sm:text-5xl">
              Pengawasan & <span className="italic gold-text">Aspirasi</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-slate-400">
            Dua kanal utama — pengawasan kebijakan yang transparan dan portal
            aspirasi mahasiswa yang langsung menuju meja parlemen.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-12">
          {/* Pengawasan Dashboard Mock */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 rounded-3xl border border-white/[0.06] bg-gradient-to-br from-[#0A101D] to-[#04080F] p-7 shadow-[0_20px_70px_-20px_rgba(0,0,0,0.7)]"
            data-testid="pengawasan-preview"
          >
            <div className="mb-6 flex items-start justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-amber-300">
                  <Activity className="h-3 w-3" /> Live Dashboard
                </div>
                <h3 className="mt-3 font-display text-2xl text-white">
                  Pengawasan Kebijakan
                </h3>
                <p className="mt-1 text-sm text-slate-400">
                  Real-time monitoring program kerja EM UB.
                </p>
              </div>
              <div className="hidden sm:flex flex-col items-end">
                <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                  Periode
                </div>
                <div className="font-display text-lg text-amber-300">
                  Q1 · 2026
                </div>
              </div>
            </div>

            {/* Stat cards */}
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { l: "Program Aktif", v: "47", Icon: TrendingUp, c: "amber" },
                { l: "Telah Direview", v: "32", Icon: CheckCircle2, c: "emerald" },
                { l: "Dalam Pengawasan", v: "15", Icon: Eye, c: "sky" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                      {s.l}
                    </span>
                    <s.Icon className={`h-3.5 w-3.5 text-${s.c}-400`} />
                  </div>
                  <div className="mt-2 font-display text-3xl text-white">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>

            {/* Progress rows */}
            <div className="mt-6 space-y-3.5">
              {[
                { label: "Audit Anggaran", pct: 78 },
                { label: "Review Kebijakan Akademik", pct: 64 },
                { label: "Tindak Lanjut Aspirasi", pct: 91 },
              ].map((p, i) => (
                <div key={i}>
                  <div className="mb-1.5 flex items-center justify-between">
                    <span className="text-xs text-slate-300">{p.label}</span>
                    <span className="text-xs font-medium text-amber-300">
                      {p.pct}%
                    </span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.04]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${p.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: i * 0.15 }}
                      className="h-full rounded-full bg-gradient-to-r from-amber-300 to-amber-600 shadow-[0_0_12px_rgba(229,184,105,0.5)]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Aspirasi mock form */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 relative overflow-hidden rounded-3xl border border-white/[0.06] bg-gradient-to-br from-[#0A101D] to-[#04080F] p-7"
            data-testid="aspirasi-preview"
          >
            <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-amber-500/15 blur-3xl" />
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-amber-300">
              <Send className="h-3 w-3" /> Portal Aspirasi
            </div>
            <h3 className="mt-3 font-display text-2xl text-white">
              Sampaikan Suaramu
            </h3>
            <p className="mt-1 text-sm text-slate-400">
              Form aspirasi langsung ke parlemen.
            </p>

            <div className="mt-6 space-y-3">
              <FakeField label="Nama" value="Andi Pratama" />
              <FakeField label="Kategori" value="Fasilitas" />
              <FakeField
                label="Aspirasi"
                value="Penambahan stop kontak di perpustakaan..."
                rows
              />
            </div>

            <button
              type="button"
              onClick={onAspirasi}
              data-testid="feature-cta-aspirasi"
              className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-b from-amber-400 to-amber-700 px-6 py-3 text-sm font-semibold text-black shadow-[0_15px_40px_-12px_rgba(229,184,105,0.7)] transition-all hover:scale-[1.02]"
            >
              <Sparkles className="h-4 w-4" />
              Buka Form Lengkap
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FakeField({ label, value, rows }) {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3">
      <div className="text-[10px] uppercase tracking-[0.2em] text-amber-400/70">
        {label}
      </div>
      <div
        className={`mt-1 text-sm text-white ${
          rows ? "leading-relaxed line-clamp-2" : ""
        }`}
      >
        {value}
      </div>
    </div>
  );
}

/* ---------------- FINAL CTA ---------------- */
function FinalCTA({ onAspirasi }) {
  return (
    <section className="relative px-6 py-24 sm:px-8" data-testid="cta-section">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-amber-400/20 bg-gradient-to-br from-[#1A1108] via-[#0B0A12] to-[#02040A] p-10 sm:p-16">
          {/* big gold blob */}
          <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-[700px] -translate-x-1/2 rounded-full bg-amber-500/25 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-40 -right-20 h-80 w-80 rounded-full bg-amber-700/30 blur-[120px]" />

          {/* faint pillar */}
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute right-8 top-1/2 -translate-y-1/2 h-72 w-72 opacity-10"
            viewBox="0 0 200 200"
            fill="none"
          >
            <path
              d="M100 20 L100 180 M60 60 Q100 100 60 180 M140 60 Q100 100 140 180"
              stroke="#E5B869"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          <div className="relative max-w-2xl">
            <div className="text-[11px] uppercase tracking-[0.25em] text-amber-400">
              Bersuara Hari Ini
            </div>
            <h2 className="mt-4 font-display text-5xl leading-[1.05] tracking-tight text-white sm:text-6xl">
              Setiap suara adalah <br />
              <span className="italic gold-text">pondasi parlemen.</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300">
              Sampaikan keresahan, harapan, dan ide perubahanmu. DPM UB hadir
              untuk mengubah suara mahasiswa menjadi kebijakan yang nyata.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onAspirasi}
                data-testid="final-cta-aspirasi"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-amber-300 to-amber-600 px-7 py-3.5 text-sm font-semibold text-black shadow-[0_20px_60px_-15px_rgba(229,184,105,0.7)] transition-all hover:scale-[1.04]"
              >
                <Sparkles className="h-4 w-4" />
                Suarakan Aspirasimu
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <a
                href="#pilar"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm font-medium text-white transition-all hover:border-amber-400/40 hover:bg-white/[0.08]"
              >
                Pelajari DPM UB
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
