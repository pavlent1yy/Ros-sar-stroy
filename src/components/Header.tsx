"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: "#construction", label: "Строительство и ремонт" },
	{ href: "#services", label: "Услуги"},
    { href: "#portfolio", label: "Портфолио" },
    { href: "#contacts", label: "Контакты" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-blue-500/30 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* LOGO */}
        <Link
          href="/"
          className="font-bold text-xl text-blue-700 font-mono tracking-wide"
        >
          RosSarStroy
        </Link>

        {/* NAV */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative transition ${
                  active ? "text-blue-600" : "hover:text-blue-600"
                }`}
              >
                {item.label}

                {/* underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-blue-500 transition-all ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <a
          href="#contacts"
          className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm px-5 py-2.5 rounded-lg font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition"
        >
          Связаться
        </a>
      </div>
    </header>
  );
}