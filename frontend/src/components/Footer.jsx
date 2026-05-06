import { Link } from "react-router-dom";
import { MapPin, Mail, Instagram, Linkedin } from "lucide-react";

const LOGO_URL =
  "https://customer-assets.emergentagent.com/job_b2fc0a22-8731-4a19-80e8-90b4a3abe1f1/artifacts/o9onvhnk___FILOSOFI_LOGO_PARLEMEN_PILAR_KARSA__Halo__Brawijayans____Parlemen_Pilar_Karsa_merupakan_sim-removebg-preview.png";

const TAUTAN = [
  ["Beranda", "/"],
  ["Tentang", "/about"],
  ["Legislasi", "/legislasi"],
  ["Aspirasi", "/aspirasi"],
];

const KONTAK = [
  {
    Icon: MapPin,
    primary:
      "Gedung EM-DPM UB Lantai 2, Universitas Brawijaya, Jl. Veteran No. 06C, Malang 65145",
    href: "https://maps.google.com/?q=Universitas+Brawijaya+Malang",
    testid: "footer-address",
  },
  {
    Icon: Mail,
    primary: "dpm@ub.ac.id",
    href: "mailto:dpm@ub.ac.id",
    testid: "footer-email",
  },
  {
    Icon: Instagram,
    primary: "@dpmub6",
    href: "https://instagram.com/dpmub6",
    testid: "footer-instagram",
  },
  {
    Icon: Linkedin,
    primary: "DPM UB",
    href: "https://linkedin.com",
    testid: "footer-linkedin",
  },
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

      {/* faint pillar curves */}
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

      <div className="relative mx-auto max-w-[1400px] px-4 py-20 sm:px-6 lg:px-10 lg:py-24">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-10">
          {/* Brand column (col-span-5) */}
          <div className="md:col-span-5 flex flex-col items-start">
            <p className="max-w-sm text-sm leading-relaxed text-slate-200 sm:text-base">
              Dewan Perwakilan Mahasiswa
              <br />
              Universitas Brawijaya
            </p>

            {/* Big logo */}
            <div className="my-8 relative">
              <div className="absolute inset-0 rounded-full bg-amber-500/25 blur-[80px]" />
              <img
                src={LOGO_URL}
                alt="DPM UB"
                className="relative h-56 w-56 object-contain sm:h-64 sm:w-64 lg:h-72 lg:w-72"
              />
            </div>

            <h3
              className="font-display text-4xl font-bold leading-[1] tracking-tight sm:text-5xl"
              style={{
                background:
                  "linear-gradient(120deg, #FBE2A0 0%, #E5B869 50%, #C68C48 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Parlemen Pilar Karsa
            </h3>
          </div>

          {/* Tautan (col-span-3) */}
          <div className="md:col-span-3">
            <h4 className="font-display text-2xl font-bold text-white">
              Tautan
            </h4>
            <div className="mt-5 mb-7 h-px w-12 bg-gradient-to-r from-amber-500 to-transparent" />
            <ul className="space-y-4">
              {TAUTAN.map(([label, to]) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="group inline-flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-amber-300"
                    data-testid={`footer-link-${label.toLowerCase()}`}
                  >
                    <span className="h-px w-3 bg-amber-400/60 transition-all group-hover:w-5 group-hover:bg-amber-300" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hubungi Kami (col-span-4) */}
          <div className="md:col-span-4">
            <h4 className="font-display text-2xl font-bold text-white">
              Hubungi Kami
            </h4>
            <div className="mt-5 mb-7 h-px w-12 bg-gradient-to-r from-amber-500 to-transparent" />
            <ul className="space-y-5">
              {KONTAK.map(({ Icon, primary, href, testid }, i) => (
                <li key={i}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http") ? "noopener noreferrer" : undefined
                    }
                    data-testid={testid}
                    className="group flex items-start gap-3 text-sm text-slate-300 transition-colors hover:text-amber-300"
                  >
                    <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-amber-400/30 bg-amber-500/10 text-amber-300 transition-all group-hover:border-amber-400/60 group-hover:bg-amber-500/15">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="leading-relaxed">{primary}</span>
                  </a>
                </li>
              ))}
            </ul>
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
