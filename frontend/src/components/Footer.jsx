import { Link } from "react-router-dom";

const LOGO_URL =
  "https://customer-assets.emergentagent.com/job_b2fc0a22-8731-4a19-80e8-90b4a3abe1f1/artifacts/o9onvhnk___FILOSOFI_LOGO_PARLEMEN_PILAR_KARSA__Halo__Brawijayans____Parlemen_Pilar_Karsa_merupakan_sim-removebg-preview.png";

const TAUTAN = [
  ["Beranda", "/"],
  ["Tentang", "/about"],
  ["Legislasi", "/legislasi"],
  ["Aspirasi", "/aspirasi"],
];

const SOSMED = [
  ["Instagram", "https://instagram.com"],
  ["LinkedIn", "https://linkedin.com"],
  ["Youtube", "https://youtube.com"],
  ["Twitter", "https://twitter.com"],
  ["Tiktok", "https://tiktok.com"],
];

export default function Footer() {
  return (
    <footer
      className="relative z-10 mt-32 overflow-hidden border-t border-white/[0.06] bg-gradient-to-b from-[#040810] via-[#02040A] to-[#02040A]"
      data-testid="site-footer"
    >
      {/* gold top divider */}
      <div className="gold-divider absolute left-0 right-0 top-0" />

      {/* ambient glows */}
      <div className="pointer-events-none absolute -top-32 left-1/4 h-72 w-[500px] rounded-full bg-amber-500/15 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-amber-700/10 blur-[120px]" />

      {/* Faint pillar curves */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 right-10 h-72 w-72 opacity-[0.06]"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path
          d="M100 20 L100 180 M55 55 Q100 100 55 180 M145 55 Q100 100 145 180"
          stroke="#E5B869"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Brand column (col-span-4) */}
          <div className="md:col-span-4 flex flex-col">
            <div>
              <p className="font-display text-[15px] leading-snug text-slate-200 sm:text-base">
                Dewan Perwakilan Mahasiswa
                <br />
                Universitas Brawijaya 2026
              </p>
            </div>

            {/* Logo center */}
            <div className="my-10 flex items-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-amber-500/25 blur-3xl" />
                <img
                  src={LOGO_URL}
                  alt="DPM UB"
                  className="relative h-32 w-32 sm:h-40 sm:w-40 object-contain"
                />
              </div>
            </div>

            {/* Big tagline at bottom */}
            <div className="mt-auto">
              <div className="text-[11px] uppercase tracking-[0.3em] text-amber-400/80">
                Parlemen
              </div>
              <h3
                className="font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl"
                style={{
                  background:
                    "linear-gradient(120deg, #FBE2A0 0%, #E5B869 50%, #C68C48 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Pilar Karsa
              </h3>
            </div>
          </div>

          {/* Tautan (col-span-2) */}
          <div className="md:col-span-2">
            <h4 className="font-display text-2xl font-bold text-white">
              Tautan
            </h4>
            <ul className="mt-6 space-y-4">
              {TAUTAN.map(([label, to]) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-slate-300 transition-colors hover:text-amber-300"
                    data-testid={`footer-link-${label.toLowerCase()}`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sosial Media (col-span-2) */}
          <div className="md:col-span-2">
            <h4 className="font-display text-2xl font-bold text-white">
              Sosial Media
            </h4>
            <ul className="mt-6 space-y-4">
              {SOSMED.map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-300 transition-colors hover:text-amber-300"
                    data-testid={`footer-social-${label.toLowerCase()}`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Alamat + Kontak (col-span-4) */}
          <div className="md:col-span-4">
            <h4 className="font-display text-2xl font-bold text-white">
              Alamat
            </h4>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-slate-300">
              Gedung EM-DPM UB Lantai 2, Universitas Brawijaya
              <br />
              Jl. Veteran No. 06C, Malang 65145
            </p>

            <h4 className="mt-10 font-display text-2xl font-bold text-white">
              Kontak Kami
            </h4>
            <p className="mt-5 text-sm text-slate-300">
              E-mail :{" "}
              <a
                href="mailto:dpm@ub.ac.id"
                className="text-amber-300 transition-colors hover:text-amber-200"
                data-testid="footer-email"
              >
                dpm@ub.ac.id
              </a>
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-white/[0.05] pt-6">
          <div className="flex flex-col items-start justify-between gap-3 text-xs text-slate-500 sm:flex-row sm:items-center">
            <p>© {new Date().getFullYear()} DPM UB. Parlemen Pilar Karsa.</p>
            <p className="font-display italic text-slate-400">
              “Karsa yang lahir dari rakyat, bekerja untuk rakyat.”
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
