"use client";

import { useEffect, useState } from "react";
import Contacts from "@/components/Contacts";

type ObjectItem = {
  id: number;
  status: "В продаже" | "Продан";
  title: string;
  shortDescription: string;
  fullDescription: string;
  images: string[];
};

const objects: ObjectItem[] = [
  {
    id: 1,
    status: "В продаже",
    title: "Коттедж из кирпича, 180 м²",
    shortDescription:
      "Современный двухэтажный кирпичный коттедж общей площадью 180 м².",
    fullDescription:
      "Современный коттедж 180 м². Построен в 2022 году. Участок 4 сотки с возможностью расширения. Свободная планировка позволяет адаптировать пространство под себя. Подключены все центральные коммуникации.",
    images: [
      "/images/sale/cottage-1/cottage1.webp",
      "/images/sale/cottage-1/cottage2.webp",
      "/images/sale/cottage-1/cottage3.webp",
    ],
  },
];

export default function RealEstatePage() {
  const [selected, setSelected] = useState<ObjectItem | null>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const closeModal = () => {
    setSelected(null);
    setActiveImage(null);
  };

  // Блокировка скролла фона
  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <>
      <main className="relative min-h-screen overflow-hidden">
        <div className="blueprint-grid" />

        <section className="relative z-10 pt-28 pb-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">

            {/* HEADER */}
            <div className="mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold font-mono">
                <span className="gradient-text">
                  Готовые объекты
                </span>
              </h1>

              <p className="mt-4 text-gray-600 max-w-2xl">
                Объекты от собственника. Без посредников.
              </p>
            </div>

            {/* CARDS */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {objects.map((obj) => (
                <div
                  key={obj.id}
                  onClick={() => setSelected(obj)}
                  className="cursor-pointer bg-white rounded-xl border-2 border-blue-500 overflow-hidden hover:shadow-lg transition"
                >
                  {/* ONLY PREVIEW IMAGE */}
                  <img
                    src={obj.images[0]}
                    alt={obj.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-64 object-cover"
                  />

                  <div className="p-5">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        obj.status === "Продан"
                          ? "bg-red-100 text-red-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {obj.status}
                    </span>

                    <h2 className="mt-3 font-bold text-lg line-clamp-2">
                      {obj.title}
                    </h2>

                    <p className="mt-2 text-gray-600 text-sm line-clamp-2">
                      {obj.shortDescription}
                    </p>

                    <p className="mt-3 text-blue-600 font-semibold text-sm">
                      Открыть →
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MODAL */}
        {selected && (
          <div
            onClick={closeModal}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full max-w-5xl rounded-2xl max-h-[90vh] overflow-hidden flex flex-col"
            >
              {/* CLOSE */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white shadow rounded-full w-10 h-10 z-20"
              >
                ✕
              </button>

              {/* SCROLL AREA */}
              <div className="overflow-y-auto">

                {/* IMAGES GRID (adaptive) */}
                <div
                  className={`grid gap-2 p-4 ${
                    selected.images.length === 1
                      ? "grid-cols-1"
                      : selected.images.length === 2
                      ? "grid-cols-2"
                      : selected.images.length === 3
                      ? "grid-cols-3"
                      : "grid-cols-2 md:grid-cols-3"
                  }`}
                >
                  {selected.images.map((img) => (
                    <img
                      key={img}
                      src={img}
                      loading="lazy"
                      decoding="async"
                      onClick={() => setActiveImage(img)}
                      className="w-full h-48 object-cover rounded-lg cursor-pointer hover:scale-[1.02] transition"
                    />
                  ))}
                </div>

                {/* CONTENT (compact) */}
                <div className="p-6 sm:p-8 space-y-4">

                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">
                      {selected.title}
                    </h2>

                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        selected.status === "Продан"
                          ? "bg-red-100 text-red-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {selected.status}
                    </span>
                  </div>

                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    {selected.fullDescription}
                  </p>

                  <button
                    onClick={closeModal}
                    className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                  >
                    Закрыть
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* FULL IMAGE VIEW */}
        {activeImage && (
          <div
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          >
            <img
              src={activeImage}
              className="max-w-6xl max-h-[90vh] rounded-xl"
            />
          </div>
        )}
      </main>

      <Contacts />
    </>
  );
}