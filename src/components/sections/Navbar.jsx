"use client";

import { Button } from "@/components/ui/button";
import { HOSPITAL_INFO, NAV_LINKS } from "@/lib/constants";

export function Navbar() {
  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-xl shadow-sm"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-10 py-4 sm:py-5">
        {/* Logo */}
        <a href="#home" className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2">
          <h1 className="text-xl sm:text-2xl font-bold text-blue-900 tracking-wide hover:text-blue-800 transition">
            {HOSPITAL_INFO.name}
          </h1>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-8 items-center">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-gray-600 hover:text-blue-900 transition font-medium text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"
            >
              {link.label}
            </button>
          ))}
          <Button
            onClick={() => handleNavClick("#book")}
            className="rounded-full px-6 py-2 bg-blue-900 hover:bg-blue-800 text-white shadow-lg transition"
          >
            Book Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            onClick={() => handleNavClick("#book")}
            className="rounded-full px-4 py-2 text-sm bg-blue-900 hover:bg-blue-800 text-white shadow-lg transition"
          >
            Book
          </Button>
        </div>
      </div>
    </nav>
  );
}
