import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import AspirasiModal from "@/components/AspirasiModal";

const LOGO_URL =
  "https://customer-assets.emergentagent.com/job_b2fc0a22-8731-4a19-80e8-90b4a3abe1f1/artifacts/o9onvhnk___FILOSOFI_LOGO_PARLEMEN_PILAR_KARSA__Halo__Brawijayans____Parlemen_Pilar_Karsa_merupakan_sim-removebg-preview.png";

const navItems = [
  { label: "Home", to: "/", testid: "nav-home" },
  { label: "About", to: "/about", testid: "nav-about" },
  { label: "Legislasi", to: "/legislasi", testid: "nav-legislasi" },
  { label: "Aspirasi", to: "/aspirasi", testid: "nav-aspirasi" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [aspirasiOpen, setAspirasiOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#02040A]/85 backdrop-blur-xl border-b border-white/[0.06]"
            : "bg-transparent border-b border-transparent"
        }`}
        data-testid="site-header"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
          {/* Logo / brand — fades on scroll */}
          <AnimatePresence initial={false}>
            {!scrolled && (
              <motion.div
                key="brand"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="flex shrink-0"
              >
                <Link
                  to="/"
                  className="group flex items-center gap-3.5"
                  data-testid="brand-link"
                >
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-amber-500/30 blur-2xl opacity-60 transition-opacity group-hover:opacity-100" />
                    <img
                      src={LOGO_URL}
                      alt="DPM UB"
                      className="relative h-16 w-16 object-contain"
                    />
                  </div>
                  <div className="leading-tight">
                    <div className="font-display text-2xl font-bold tracking-tight text-white">
                      DPM UB
                    </div>
                    <div className="font-body text-[11px] uppercase tracking-[0.25em] text-amber-400/90">
                      Parlemen Pilar Karsa
                    </div>
                  </div>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Pill nav (desktop) — grows on scroll */}
          <motion.nav
            layout
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className={`hidden lg:flex items-center gap-1 rounded-full border backdrop-blur-md transition-all duration-500 ${
              scrolled
                ? "mx-auto border-amber-400/25 bg-[#070C16]/80 px-3 py-2 shadow-[0_10px_40px_-10px_rgba(229,184,105,0.35)]"
                : "border-white/10 bg-white/[0.03] px-2 py-1.5"
            }`}
            aria-label="Primary"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                data-testid={item.testid}
                className={({ isActive }) =>
                  `relative rounded-full font-medium transition-all ${
                    scrolled ? "px-6 py-2.5 text-[15px]" : "px-5 py-2 text-sm"
                  } ${
                    isActive
                      ? "bg-gradient-to-b from-amber-500/25 to-amber-700/10 text-white shadow-[inset_0_0_0_1px_rgba(229,184,105,0.4)]"
                      : "text-slate-300 hover:text-white hover:bg-white/[0.05]"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </motion.nav>

          {/* CTA — fades on scroll */}
          <div className="flex items-center gap-2">
            <AnimatePresence initial={false}>
              {!scrolled && (
                <motion.button
                  key="cta"
                  type="button"
                  onClick={() => setAspirasiOpen(true)}
                  data-testid="header-cta-aspirasi"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-amber-400 to-amber-700 px-5 py-2.5 text-sm font-semibold text-black shadow-[0_8px_30px_-10px_rgba(229,184,105,0.6)] transition-shadow hover:shadow-[0_8px_40px_-5px_rgba(229,184,105,0.8)]"
                >
                  <Sparkles className="h-4 w-4" />
                  Suarakan Aspirasimu
                </motion.button>
              )}
            </AnimatePresence>

            {/* mobile toggle */}
            <button
              type="button"
              className="lg:hidden rounded-full border border-white/10 bg-white/[0.04] p-2.5 text-white"
              onClick={() => setOpen((s) => !s)}
              data-testid="mobile-menu-toggle"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div
            className="lg:hidden border-t border-white/5 bg-[#02040A]/95 backdrop-blur-xl"
            data-testid="mobile-menu"
          >
            <div className="mx-auto max-w-7xl px-5 py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  data-testid={`mobile-${item.testid}`}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                      isActive
                        ? "bg-amber-500/10 text-white border border-amber-400/30"
                        : "text-slate-300 hover:bg-white/5"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <button
                type="button"
                onClick={() => {
                  setAspirasiOpen(true);
                  setOpen(false);
                }}
                data-testid="mobile-cta-aspirasi"
                className="mt-2 rounded-full bg-gradient-to-b from-amber-400 to-amber-700 px-5 py-3 text-sm font-semibold text-black"
              >
                Suarakan Aspirasimu
              </button>
            </div>
          </div>
        )}
      </header>

      <AspirasiModal open={aspirasiOpen} onOpenChange={setAspirasiOpen} />
    </>
  );
}
