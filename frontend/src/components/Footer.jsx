import { Link } from "react-router-dom";
import { Instagram, Mail, MapPin, Twitter, Youtube } from "lucide-react";

const LOGO_URL =
  "https://customer-assets.emergentagent.com/job_b2fc0a22-8731-4a19-80e8-90b4a3abe1f1/artifacts/o9onvhnk___FILOSOFI_LOGO_PARLEMEN_PILAR_KARSA__Halo__Brawijayans____Parlemen_Pilar_Karsa_merupakan_sim-removebg-preview.png";

export default function Footer() {
  return (
    <footer
      className="relative z-10 mt-32 border-t border-white/[0.06] bg-[#02040A]/80 backdrop-blur-xl"
      data-testid="site-footer"
    >
      <div className="gold-divider absolute left-0 right-0 top-0" />

      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <img src={LOGO_URL} alt="DPM UB" className="h-12 w-12" />
              <div>
                <div className="font-display text-2xl text-white">DPM UB</div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-amber-400/80">
                  Parlemen Pilar Karsa
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
              Dewan Perwakilan Mahasiswa Universitas Brawijaya 2026 — pilar
              representasi, pengawasan, dan suara mahasiswa.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[
                { Icon: Instagram, href: "#", label: "Instagram" },
                { Icon: Twitter, href: "#", label: "Twitter" },
                { Icon: Youtube, href: "#", label: "YouTube" },
              ].map(({ Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  aria-label={label}
                  className="rounded-full border border-white/10 bg-white/[0.03] p-2.5 text-slate-300 transition-all hover:border-amber-500/40 hover:text-amber-300"
                  data-testid={`footer-social-${label.toLowerCase()}`}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigasi */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-amber-400/80">
              Navigasi
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Legislasi", "/legislasi"],
                ["Aspirasi", "/aspirasi"],
              ].map(([label, to]) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="transition-colors hover:text-amber-300"
                    data-testid={`footer-link-${label.toLowerCase()}`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-amber-400/80">
              Kontak
            </h4>
            <ul className="mt-5 space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-amber-400/80" />
                <span>
                  Gedung PKM Lantai 2, Universitas Brawijaya
                  <br />
                  Jl. Veteran, Malang 65145
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-amber-400/80" />
                <a href="mailto:dpm@ub.ac.id" className="hover:text-amber-300">
                  dpm@ub.ac.id
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/[0.05] pt-6 text-xs text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} DPM UB. Parlemen Pilar Karsa.</p>
          <p className="font-display text-sm tracking-wide text-slate-400">
            “Karsa yang lahir dari rakyat, bekerja untuk rakyat.”
          </p>
        </div>
      </div>
    </footer>
  );
}
