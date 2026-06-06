"use client";

import Link from "next/link";
import { useState, useMemo, useCallback } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = useMemo(
    () => [
      { href: "/#construction", label: "Строительство и ремонт" },
      { href: "/#services", label: "Услуги" },
      { href: "/#portfolio", label: "Портфолио" },
      { href: "/#contacts", label: "Контакты" },
      { href: "/videos", label: "Видео с объектов" },
      { href: "/real-estate", label: "Готовые объекты" },
    ],
    []
  );

  const toggleMenu = useCallback(() => {
    setMobileMenuOpen((v) => !v);
  }, []);

  const closeMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-blue-500/30 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-0 h-auto sm:h-16 flex items-center justify-between">
        {/* LOGO */}
        <Link
          href="/"
          className="font-bold text-lg sm:text-xl text-blue-700 font-mono tracking-wide whitespace-nowrap"
        >
          RosSarStroy
        </Link>

        {/* NAV */}
        <nav className="hidden md:flex gap-6 sm:gap-8 text-sm font-medium text-gray-700">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-blue-600 transition"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contacts"
          className="hidden sm:inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition"
        >
          Связаться
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col gap-1 w-6 h-6"
          aria-label="menu"
        >
          <span
            className={`h-0.5 w-full bg-gray-700 transition transform ${
              mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`h-0.5 w-full bg-gray-700 transition ${
              mobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-full bg-gray-700 transition transform ${
              mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="block text-sm font-medium text-gray-700 hover:text-blue-600 transition py-2"
            >
              {item.label}
            </a>
          ))}

          <a
            href="#contacts"
            onClick={closeMenu}
            className="block w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-semibold px-4 py-2.5 rounded-lg text-center shadow-md hover:shadow-lg transition mt-4"
          >
            Связаться
          </a>
        </div>
      )}
    </header>
  );
}