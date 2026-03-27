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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-surface/80 backdrop-blur-md border-b border-surface-border py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-display font-bold tracking-tighter flex items-center gap-2">
          <span className="w-8 h-8 bg-brand rounded-full flex items-center justify-center text-white text-xs">JK</span>
          <span className="hidden sm:inline">JAYAKUMAR</span>
        </Link>

        {/* Desktop Nav */}
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

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          "fixed inset-0 bg-surface z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            onClick={() => setIsOpen(false)}
            className={cn(
              "text-3xl font-display font-bold",
              location.pathname === link.path ? "text-brand" : "text-white"
            )}
          >
            {link.name}
          </Link>
        ))}
        <a
          href="mailto:jayakumarm.0801@gmail.com"
          className="bg-brand text-white px-8 py-3 rounded-full text-lg font-bold"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
