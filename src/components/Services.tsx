"use client";

import { useMemo, useState, useEffect } from "react";

const SERVICES = [
  {
    title: "Строительство домов под ключ",
    desc: "Каркасные, газобетонные, кирпичные, брусовые и монолитные дома.",
    fullDesc:
      "Полный цикл строительства: от подготовки участка и фундамента до коробки, кровли, инженерных систем и внутренней отделки. Работаем по проекту или помогаем с его разработкой. Поэтапное выполнение работ с прозрачной сметой и договором.",
    icon: "🏗️",
  },
  {
    title: "Фундаменты",
    desc: "Ленточные, плитные, свайные и монолитные основания.",
    fullDesc:
      "Устройство фундаментов под разные типы домов с учётом грунта и нагрузки. Подготовка основания, армирование, заливка бетона, гидроизоляция и утепление. Работаем по проекту или с предварительным расчётом.",
    icon: "🧱",
  },
  {
    title: "Кровельные работы",
    desc: "Монтаж и ремонт кровли из разных материалов.",
    fullDesc:
      "Стропильные системы, утепление, паро- и гидроизоляция, монтаж металлочерепицы, мягкой кровли и профнастила. Полный цикл кровельных работ, включая ремонт и замену старых конструкций.",
    icon: "🏠",
  },
  {
    title: "Фасадные работы",
    desc: "Утепление и внешняя отделка домов.",
    fullDesc:
      "Штукатурные фасады, облицовочный кирпич, сайдинг и фасадные панели. Утепление фасадов, монтаж вентилируемых систем и декоративная отделка с защитой от внешних воздействий.",
    icon: "🎨",
  },
  {
    title: "Инженерные системы",
    desc: "Электрика, водоснабжение, отопление и вентиляция.",
    fullDesc:
      "Проектирование и монтаж инженерных систем: электроснабжение, водопровод, канализация, отопление, тёплые полы и вентиляция. Работаем с соблюдением строительных норм и стандартов.",
    icon: "⚙️",
  },
  {
    title: "Ремонт и отделка",
    desc: "Черновая, чистовая отделка и евроремонт.",
    fullDesc:
      "Выполняем ремонт квартир и домов под ключ: штукатурка, стяжка, плитка, покраска, монтаж потолков и чистовая отделка. Работаем как с новостройками, так и со вторичным жильём.",
    icon: "✨",
  },
];

export default function Services() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const services = useMemo(() => SERVICES, []);

  const selected = selectedIndex !== null ? services[selectedIndex] : null;

  // preload heavy modal content (future-proofing)
  useEffect(() => {
    if (!selected) return;
    // сюда можно добавить preload изображений если появятся
  }, [selected]);

  return (
    <section
      id="services"
      className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-cyan-50 border-y-4 border-blue-500"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-mono tracking-tight mb-3 sm:mb-4">
            <span className="gradient-text">Основные услуги</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 max-w-2xl">
            Выполняем полный цикл строительных и отделочных работ — от
            фундамента до сдачи объекта под ключ.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
          {services.map((item, i) => (
            <div
              key={item.title}
              onClick={() => setSelectedIndex(i)}
              className="bg-white border-3 border-blue-500 rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-lg hover:translate-y-[-8px] transition cursor-pointer relative overflow-hidden group will-change-transform"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition -z-10" />

              <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">
                {item.icon}
              </div>

              <h3 className="text-base sm:text-lg font-bold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>

              <div className="mt-3 sm:mt-4 h-1 w-8 sm:w-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full group-hover:w-full transition" />
            </div>
          ))}
        </div>

        {/* POPUP */}
        {selected && (
          <div
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white max-w-xl w-full rounded-lg sm:rounded-xl shadow-2xl p-4 sm:p-6 max-h-[90vh] overflow-y-auto"
            >
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">
                {selected.icon}
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-2">
                {selected.title}
              </h3>

              <p className="text-gray-500 text-sm sm:text-base mb-4">
                {selected.desc}
              </p>

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {selected.fullDesc}
              </p>

              <button
                onClick={() => setSelectedIndex(null)}
                className="mt-4 sm:mt-6 bg-blue-600 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg hover:bg-blue-700 transition text-sm sm:text-base w-full sm:w-auto"
              >
                Закрыть
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}