import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "./utils";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Case Studies", path: "/case-studies" },
  { name: "Skills", path: "/skills" },
  { name: "Story", path: "/story" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock/unlock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Navbar scroll shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ── Navbar bar ── */}
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
          scrolled ? "bg-surface/90 backdrop-blur-md border-b border-surface-border py-3" : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-xl font-display font-bold tracking-tighter flex items-center gap-2 relative z-50">
            <span className="w-8 h-8 bg-brand rounded-full flex items-center justify-center text-white text-xs">JK</span>
            <span className="hidden sm:inline">JAYAKUMAR</span>
          </Link>

          {/* Desktop Nav - hidden on mobile */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-brand",
                  location.pathname === link.path ? "text-brand" : "text-white/70"
                )}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="mailto:jayakumarm.0801@gmail.com"
              className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-brand hover:text-white transition-all"
            >
              Contact
            </a>
          </div>

          {/* Hamburger toggle - z-50 so it floats above the mobile overlay */}
          <button
            className="md:hidden relative z-50 text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* ── Dark backdrop ── */}
      <div
        className={cn(
          "fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* ── Slide-in drawer from right ── */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-4/5 max-w-xs bg-surface shadow-2xl z-40 md:hidden",
          "flex flex-col pt-24 pb-10 px-8",
          "transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Nav links list */}
        <div className="flex flex-col flex-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-2xl font-display font-bold py-5 px-3 rounded-xl transition-all",
                "border-b border-surface-border last:border-b-0",
                location.pathname === link.path
                  ? "text-brand"
                  : "text-white hover:text-brand hover:bg-white/5"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Contact CTA pinned at the bottom */}
        <a
          href="mailto:jayakumarm.0801@gmail.com"
          onClick={() => setIsOpen(false)}
          className="mt-8 w-full bg-brand text-white py-4 rounded-2xl text-lg font-bold text-center hover:bg-brand/80 transition-all"
        >
          Contact Me
        </a>
      </div>
    </>
  );
}
