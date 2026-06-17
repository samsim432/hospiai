import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSmall, setIsSmall] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Pricing", path: "/pricing" },
    { name: "Demo", path: "/demo" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsSmall(currentScrollY > 40);

      if (currentScrollY > lastScrollY && currentScrollY > 120) {
        setShowNavbar(false);
        setIsOpen(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto max-w-7xl px-3 pt-3 sm:px-6 lg:px-8">
        <div
          className={`relative flex items-center justify-between overflow-hidden border border-white/60 bg-white/55 shadow-2xl shadow-blue-100/40 backdrop-blur-2xl transition-all duration-500 ${
            isSmall
              ? "rounded-2xl px-4 py-2"
              : "rounded-[1.7rem] px-4 py-4 sm:px-5"
          }`}
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/70 via-sky-100/30 to-blue-100/40" />
          <div className="pointer-events-none absolute -left-20 -top-20 h-40 w-40 rounded-full bg-blue-300/30 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 top-0 h-40 w-40 rounded-full bg-cyan-200/40 blur-3xl" />

          <Link to="/" className="relative flex items-center gap-3">
            <div
              className={`flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 font-black text-white shadow-lg shadow-blue-300/50 transition-all duration-500 ${
                isSmall ? "h-9 w-9 text-base" : "h-11 w-11 text-lg"
              }`}
            >
              H
            </div>

            <div>
              <p className="text-lg font-black tracking-tight text-slate-950">
                HospiAI
              </p>
              <p
                className={`text-xs font-medium text-slate-500 transition-all duration-300 ${
                  isSmall ? "hidden" : "hidden sm:block"
                }`}
              >
                AI Receptionist for Hotels
              </p>
            </div>
          </Link>

          <nav className="relative hidden items-center gap-2 rounded-full border border-white/70 bg-white/45 p-1 backdrop-blur-xl md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-bold transition-all duration-300 ${
                    isActive
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                      : "text-slate-600 hover:bg-white hover:text-blue-600"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="relative hidden items-center gap-3 md:flex">
            <Link
              to="/login"
              className="rounded-full px-5 py-2 text-sm font-bold text-slate-700 transition hover:bg-white/70 hover:text-blue-600"
            >
              Login
            </Link>

            <Link
              to="/contact"
              className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2 text-sm font-black text-white shadow-xl shadow-blue-300/40 transition hover:-translate-y-0.5 hover:shadow-blue-300/70"
            >
              Book Demo
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative rounded-2xl border border-white/70 bg-white/70 px-4 py-2 text-lg font-black text-slate-800 shadow-sm backdrop-blur-xl md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {isOpen && (
          <div className="mt-3 overflow-hidden rounded-[1.5rem] border border-white/70 bg-white/70 p-3 shadow-2xl shadow-blue-100/50 backdrop-blur-2xl md:hidden">
            <div className="grid gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `rounded-2xl px-4 py-3 text-sm font-bold transition ${
                      isActive
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                        : "text-slate-700 hover:bg-white"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <div className="grid grid-cols-2 gap-2 pt-2">
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="rounded-2xl bg-white/80 px-4 py-3 text-center text-sm font-black text-slate-700"
                >
                  Login
                </Link>

                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="rounded-2xl bg-blue-600 px-4 py-3 text-center text-sm font-black text-white"
                >
                  Book Demo
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}