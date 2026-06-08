"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Contacts from "@/components/Contacts";
import { PROJECTS } from "@/data/portfolio";
import { Project } from "@/types/portfolio";

export default function PortfolioPage() {
  const projects = useMemo(() => PROJECTS, []);

  const [selected, setSelected] = useState<Project | null>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const closeModal = () => {
    setSelected(null);
    setActiveImage(null);
  };

  useEffect(() => {
    if (selected || activeImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selected, activeImage]);

  return (
    <main className="relative min-h-screen bg-white">
      <div className="blueprint-grid" />

      <section className="relative z-10 pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* HEADER */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold font-mono">
              <span className="gradient-text">Портфолио работ</span>
            </h1>

            <p className="mt-4 text-gray-600 max-w-2xl">
              Реальные строительные и отделочные проекты, выполненные нашей бригадой.
            </p>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <div
                key={p.id}
                onClick={() => setSelected(p)}
                className="cursor-pointer rounded-xl overflow-hidden border-2 border-blue-500 bg-white hover:shadow-lg transition"
              >
                <img
                  src={p.preview}
                  loading="lazy"
                  decoding="async"
                  className="h-64 w-full object-cover"
                />

                <div className="p-5">
                  <span className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold">
                    {p.category}
                  </span>

                  <h2 className="mt-3 font-bold text-lg">{p.title}</h2>

                  {p.location && (
                    <p className="text-xs text-gray-500 mt-1">
                      📍 {p.location}
                    </p>
                  )}

                  <p className="mt-3 text-sm text-gray-600 line-clamp-2">
                    {p.shortDescription}
                  </p>

                  <p className="mt-3 text-blue-600 font-semibold text-sm">
                    Открыть →
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12">
            <Link
              href="#contacts"
              className="inline-flex bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:-translate-y-1 transition"
            >
              Обсудить проект
            </Link>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {selected && (
        <div
          onClick={closeModal}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white w-full max-w-5xl rounded-xl shadow-2xl max-h-[90vh] overflow-y-auto"
          >
            {/* CLOSE */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-10 h-10 bg-white shadow rounded-full z-20"
            >
              ✕
            </button>

            {/* IMAGES */}
            <div className="grid md:grid-cols-2 gap-2 p-4">
              {selected.images.map((img) => (
                <img
                  key={img}
                  src={img}
                  loading="lazy"
                  decoding="async"
                  onClick={() => setActiveImage(img)}
                  className="h-64 w-full object-cover rounded-lg cursor-pointer hover:scale-[1.02] transition"
                />
              ))}
            </div>

            {/* CONTENT */}
            <div className="p-6">
              <span className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold">
                {selected.category}
              </span>

              <h2 className="text-2xl font-bold mt-3">
                {selected.title}
              </h2>

              {selected.location && (
                <p className="text-sm text-gray-500 mt-2">
                  📍 {selected.location}
                </p>
              )}

              <p className="mt-4 text-gray-700 leading-relaxed">
                {selected.fullDescription}
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={closeModal}
                  className="bg-gray-100 px-5 py-2 rounded-lg hover:bg-gray-200 transition"
                >
                  Закрыть
                </button>

                <a
                  href="#contacts"
                  onClick={closeModal}
                  className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition text-center"
                >
                  Обсудить этот проект
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FULL IMAGE VIEW */}
      {activeImage && (
        <div
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 bg-black/80 z-[60] flex items-center justify-center p-4"
        >
          <img
            src={activeImage}
            className="max-w-6xl max-h-[90vh] rounded-xl"
          />
        </div>
      )}

	<Contacts />
    </main>
  );
}