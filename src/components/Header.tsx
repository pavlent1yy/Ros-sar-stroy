"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        
        <Link href="/" className="font-semibold text-lg">
          StroiGroup
        </Link>

        <nav className="hidden md:flex gap-6 text-sm text-zinc-700">
          <Link href="/construction">Строительство</Link>
          <Link href="/renovation">Ремонт</Link>
          <Link href="/portfolio">Портфолио</Link>
          <Link href="/contacts">Контакты</Link>
        </nav>

        <a
          href="#contacts"
          className="bg-amber-600 text-white text-sm px-4 py-2 rounded-md hover:bg-amber-700 transition"
        >
          Оставить заявку
        </a>
      </div>
    </header>
  );
}