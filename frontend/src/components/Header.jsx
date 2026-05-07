import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
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

// Material Design "standard" easing
const SMOOTH = "cubic-bezier(0.4, 0, 0.2, 1)";
const TRANSITION = `all 0.4s ${SMOOTH}`;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [aspirasiOpen, setAspirasiOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 50);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  const handleHomeClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 ${
          scrolled
            ? "bg-[#02040A]/85 backdrop-blur-xl border-b border-white/[0.06]"
            : "bg-transparent border-b border-transparent"
        }`}
        style={{ transition: TRANSITION }}
        data-testid="site-header"
      >
        <div
          className="relative mx-auto flex max-w-7xl items-center px-5 sm:px-8"
          style={{
            height: scrolled ? "76px" : "92px",
            transition: TRANSITION,
          }}
        >
          {/* Logo / brand — absolute left */}
          <div
            className="absolute left-5 sm:left-8"
            style={{
              transition: TRANSITION,
              willChange: "transform, opacity",
              opacity: scrolled ? 0 : 1,
              transform: scrolled
                ? "translateX(-30px)"
                : "translateX(0)",
              visibility: scrolled ? "hidden" : "visible",
              pointerEvents: scrolled ? "none" : "auto",
            }}
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
          </div>

          {/* Pill nav (desktop) — absolute centered, always */}
          <nav
            aria-label="Primary"
            className="absolute left-1/2 hidden lg:flex items-center gap-1 rounded-full border backdrop-blur-md -translate-x-1/2"
            style={{
              transition: TRANSITION,
              willChange: "transform, padding, background-color",
              padding: scrolled ? "10px 14px" : "6px 10px",
              borderColor: scrolled
                ? "rgba(229,184,105,0.3)"
                : "rgba(255,255,255,0.1)",
              background: scrolled
                ? "rgba(7,12,22,0.85)"
                : "rgba(255,255,255,0.03)",
              boxShadow: scrolled
                ? "0 14px 50px -12px rgba(229,184,105,0.4)"
                : "0 0 0 rgba(0,0,0,0)",
              transform: `translateX(-50%) scale(${scrolled ? 1.05 : 1})`,
            }}
          >
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                data-testid={item.testid}
                onClick={item.to === "/" ? handleHomeClick : undefined}
                className={({ isActive }) =>
                  `relative rounded-full font-medium ${
                    isActive
                      ? "bg-gradient-to-b from-amber-500/25 to-amber-700/10 text-white shadow-[inset_0_0_0_1px_rgba(229,184,105,0.4)]"
                      : "text-slate-300 hover:text-white hover:bg-white/[0.05]"
                  }`
                }
                style={{
                  transition: TRANSITION,
                  padding: scrolled ? "10px 26px" : "8px 20px",
                  fontSize: scrolled ? "15px" : "14px",
                }}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA — absolute right */}
          <div
            className="absolute right-5 sm:right-8 flex items-center gap-2"
            style={{ transition: TRANSITION }}
          >
            <button
              type="button"
              onClick={() => setAspirasiOpen(true)}
              data-testid="header-cta-aspirasi"
              className="group hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-amber-400 to-amber-700 px-5 py-2.5 text-sm font-semibold text-black shadow-[0_8px_30px_-10px_rgba(229,184,105,0.6)] hover:shadow-[0_8px_40px_-5px_rgba(229,184,105,0.8)]"
              style={{
                transition: TRANSITION,
                willChange: "transform, opacity",
                opacity: scrolled ? 0 : 1,
                transform: scrolled ? "translateX(30px)" : "translateX(0)",
                visibility: scrolled ? "hidden" : "visible",
                pointerEvents: scrolled ? "none" : "auto",
              }}
            >
              <Sparkles className="h-4 w-4" />
              Suarakan Aspirasimu
            </button>

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
                  onClick={item.to === "/" ? handleHomeClick : undefined}
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
