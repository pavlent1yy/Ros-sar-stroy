"use client";

import { useEffect, useState } from "react";

type Project = {
  title: string;
  location?: string;
  image: string;
  description: string;
};

const projects: Project[] = [
  {
    title: "Строительство двухэтажного коттеджа из газобетона с облицовкой кирпичом",
    location: "Ярославская область, КП «Земля у леса»",
    image: "/images/house1.webp",
    description: "Капитальный загородный дом...",
  },
  {
    title: "Возведение фронтонов и комбинированная облицовка фасада кирпичом",
    location: "Ивановская область, пос. Загородный",
    image: "/images/building.webp",
    description: "Процесс строительства...",
  },
  {
    title: "Гостевой комплекс из бруса",
    location: "г. Ярославль, эко-парк",
    image: "/images/house4.webp",
    description: "Масштабный проект...",
  },
  {
    title: "Энергоэффективный дом",
    location: "Московская область, д. Подушкино",
    image: "/images/house7.webp",
    description: "Современный дом...",
  },
  {
    title: "Кухня-гостиная лофт",
    location: "г. Кострома, ул. Лесная",
    image: "/images/kitchens.webp",
    description: "Внутренние отделочные работы...",
  },
];

export default function Portfolio() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [visible, setVisible] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(
            (entry.target as HTMLElement).dataset.index
          );

          if (entry.isIntersecting) {
            setVisible((prev) => new Set(prev).add(index));
          }
        });
      },
      {
        rootMargin: "200px",
        threshold: 0.1,
      }
    );

    const elements = document.querySelectorAll("[data-index]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" className="py-16 sm:py-20 bg-white relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-mono tracking-tight mb-3 sm:mb-4">
            <span className="gradient-text">Портфолио работ</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 max-w-2xl">
            Реальные объекты строительства и ремонта, выполненные нашей бригадой.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((item, i) => (
            <div
              key={`${item.image}-${i}`}
              data-index={i}
              onClick={() => setSelected(item)}
              className="group relative cursor-pointer overflow-hidden rounded-xl border-2 border-blue-500"
            >
              {visible.has(i) && (
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="h-48 sm:h-72 w-full object-cover transition duration-700 group-hover:scale-110"
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-4 sm:p-6 text-white">
                <h3 className="text-lg sm:text-2xl font-bold leading-tight">
                  {item.title}
                </h3>

                {item.location && (
                  <p className="text-xs sm:text-sm text-gray-300 mt-1">
                    {item.location}
                  </p>
                )}
              </div>

              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-400 to-cyan-400 transform -translate-x-1 group-hover:translate-x-0 transition" />
            </div>
          ))}
        </div>

        <h4 className="text-base sm:text-lg text-gray-600 max-w-2xl mt-6">
          Стоимость разработки проекта от 1000 до 10000 рублей в зависимости от
          сложности. Свяжитесь с нами для консультации.
        </h4>

        {/* MODAL */}
        {selected && (
          <div
            onClick={() => setSelected(null)}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white max-w-3xl w-full rounded-xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <img
                src={selected.image}
                alt={selected.title}
                decoding="async"
                loading="eager"
                className="w-full h-80 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  {selected.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                  {selected.description}
                </p>

                <button
                  onClick={() => setSelected(null)}
                  className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Закрыть
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}