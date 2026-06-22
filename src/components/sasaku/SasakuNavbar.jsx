import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3, HiX, HiArrowLeft } from "react-icons/hi";
import sasakuLogo from "../../assets/sasakuHorizontal.png";
import sasakuLogoColoured from "../../assets/sasaku-coloured.png";

const sasakuLinks = [
  { label: "About", hash: "#about" },
  { label: "Leadership", hash: "#leadership" },
  { label: "Programs", hash: "#programs" },
  { label: "Events", hash: "#events" },
  { label: "Gallery", hash: "#gallery" },
  { label: "Join Us", hash: "#join" },
  { label: "Contact", hash: "#contact" },
];

export default function SasakuNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (hash) => {
    setMenuOpen(false);
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      {/* Top bar — back to church */}
      <div
        className={`w-full bg-primary py-1 text-center transition-all duration-300 ${scrolled ? "hidden" : "block"}`}
      >
        <Link
          to="/"
          className="text-xs text-gray-300 hover:text-gold transition-colors duration-200 inline-flex items-center gap-1 uppercase tracking-widest font-medium"
        >
          <HiArrowLeft className="text-sm" />
          Back to Kyambogo SDA Church Main Site
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* SASAKU Logo */}
        <Link to="/sasaku" className="flex items-center gap-3 group">
          <div className="w-32 flex items-center justify-center shrink-0">
            <img
              src={scrolled ? sasakuLogoColoured : sasakuLogo}
              alt="SASAKU Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </Link>

        {/* Desktop links */}
        <nav className="hidden lg:flex items-center gap-6">
          {sasakuLinks.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.hash)}
              className={`text-xs font-semibold tracking-[0.12em] uppercase transition-colors duration-200 ${
                scrolled
                  ? "text-primary hover:text-sky-700"
                  : "text-white hover:text-sky-300"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Join CTA */}
        <button
          onClick={() => scrollTo("#join")}
          className="hidden lg:inline-flex items-center bg-sky-500 text-white text-xs font-bold tracking-widest uppercase px-5 py-2.5 border-2 border-sky-700 hover:bg-transparent hover:text-sky-700 transition-all duration-300"
        >
          Join SASAKU
        </button>

        {/* Mobile toggle */}
        <button
          id="sasaku-mobile-menu-toggle"
          className={`lg:hidden text-2xl transition-colors duration-200 ${scrolled ? "text-primary" : "text-white"}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="flex flex-col py-4 px-6 gap-1">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="py-2 text-xs text-gray-400 hover:text-teal-700 flex items-center gap-1 border-b border-gray-100 mb-1"
            >
              <HiArrowLeft /> Back to Church Website
            </Link>
            {sasakuLinks.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.hash)}
                className="py-3 px-2 text-sm font-semibold tracking-widest uppercase border-b border-gray-50 text-primary hover:text-sky-700 transition-colors text-left"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#join")}
              className="mt-3 bg-sky-500 text-white text-center text-xs font-bold tracking-widest uppercase px-5 py-3 hover:bg-primary transition-colors duration-300"
            >
              Join SASAKU
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
