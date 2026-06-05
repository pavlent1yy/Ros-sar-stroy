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
    title:
      "Строительство двухэтажного коттеджа из газобетона с облицовкой кирпичом",
    location: "Ярославская область, КП «Земля у леса»",
    image: "/images/house1.webp",
    description:
      "Капитальный загородный дом для постоянного проживания. Стены возведены из теплого газобетона и облицованы светлым керамическим кирпичом...",
  },
  {
    title: "Возведение фронтонов и комбинированная облицовка фасада кирпичом",
    location: "Ивановская область, пос. Загородный",
    image: "/images/building.webp",
    description:
      "Процесс строительства коробки дома из поризованных блоков...",
  },
  {
    title:
      "Строительство загородного гостевого комплекса из профилированного бруса",
    location: "г. Ярославль, эко-парк",
    image: "/images/house4.webp",
    description:
      "Масштабный проект коммерческой недвижимости в традиционном русском стиле...",
  },
  {
    title:
      "Строительство энергоэффективного одноэтажного дома (Баварская кладка)",
    location: "Московская область, д. Подушкино",
    image: "/images/house7.webp",
    description:
      "Современный одноэтажный дом из блоков с премиальной облицовкой...",
  },
  {
    title:
      "Комплексный ремонт и чистовая отделка кухни-гостиной в стиле лофт-минимализм",
    location: "г. Кострома, ул. Лесная",
    image: "/images/kitchens.webp",
    description:
      "Внутренние отделочные работы под ключ...",
  },
];

export default function Portfolio() {
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // preload image only when opening modal
  useEffect(() => {
    if (!selected) return;
    const img = new Image();
    img.src = selected.image;
  }, [selected]);

  return (
    <section id="portfolio" className="py-16 sm:py-20 bg-white relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-mono tracking-tight mb-3 sm:mb-4">
            <span className="gradient-text">Портфолио работ</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 max-w-2xl">
            Реальные объекты строительства и ремонта, выполненные нашей
            бригадой.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((item, i) => (
            <div
              key={`${item.image}-${i}`}
              onClick={() => setSelected(item)}
              className="group relative cursor-pointer overflow-hidden rounded-lg sm:rounded-xl border-2 border-blue-500 shadow-sm hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="h-48 sm:h-72 w-full object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-3 sm:p-6 text-white">
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

        <h4 className="text-base sm:text-lg text-gray-600 max-w-2xl">
          Стоимость разработки проекта от 1000 до 10000 рублей в зависимости от
          сложности. Свяжитесь с нами для консультации и расчёта стоимости
          вашего проекта.
        </h4>

        {/* POPUP */}
        {selected && (
          <div
            onClick={() => setSelected(null)}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white max-w-3xl w-full rounded-lg sm:rounded-xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <img
                src={selected.image}
                alt={selected.title}
                decoding="async"
                loading="eager"
                className="w-full h-48 sm:h-80 object-cover"
              />

              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">
                  {selected.title}
                </h3>

                <p className="text-gray-600 text-sm sm:text-base mb-4">
                  {selected.description}
                </p>

                <div className="text-xs sm:text-sm text-gray-500 border-t pt-4 space-y-1">
                  <p>✔ Полный цикл работ</p>
                  <p>✔ Гарантия качества</p>
                  <p>✔ Работа по договору</p>
                </div>

                <button
                  onClick={() => setSelected(null)}
                  className="mt-4 sm:mt-6 bg-blue-600 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg hover:bg-blue-700 transition w-full sm:w-auto text-sm sm:text-base"
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