"use client";

import { useEffect, useState } from "react";

const images = [
  "/images/house1.webp",
  "/images/house2.webp",
  "/images/house4.webp",
  "/images/house5.webp",
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState([images[0]]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const preloadTimer = window.setTimeout(() => {
      images.slice(1).forEach((src) => {
        const img = new Image();
        img.src = src;
      });

      setLoadedImages(images);
    }, 2000);

    return () => clearTimeout(preloadTimer);
  }, []);

  return (
    <section
      className="relative min-h-[90vh] md:h-[90vh] flex items-center pt-20 md:pt-16 pb-10 md:pb-0 overflow-hidden"
      id="construction"
    >
      {/* BACKGROUND SLIDER */}
      <div className="absolute inset-0">
        {loadedImages.map((img, i) => (
          <img
            key={`${img}-${i}`}
            src={img}
            alt="construction"
            decoding="async"
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "low"}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 will-change-opacity ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* overlays */}
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/10" />
      </div>

      {/* CONTENT */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-white z-10 w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-mono tracking-tight max-w-3xl">
          Строительство домов и ремонт под ключ
        </h1>

        <p className="mt-4 md:mb-8 sm:mt-6 text-gray-200 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed font-light">
          Более 10 лет опыта и 8000 проектов. Строим частные дома, коттеджи,
          коммерческие и промышленные объекты в Ярославле, Москве,
          Санкт-Петербурге и регионах России.
        </p>

        <a
          href="#contacts"
          className="inline-flex items-center gap-4 bg-gradient-to-r from-cyan-500/25 via-blue-500/25 to-cyan-500/25 border-2 border-cyan-300 backdrop-blur-xl px-5 sm:px-8 py-4 sm:py-5 rounded-2xl shadow-2xl shadow-cyan-500/30 hover:scale-[1.02] hover:border-cyan-200 hover:shadow-cyan-400/40 transition-all duration-300 cursor-pointer"
        >
          <div className="text-3xl sm:text-5xl">🏦</div>

          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-wider text-cyan-200">
              Специальная программа
            </span>

            <span className="font-semibold">
              Ипотека на строительство дома от
              <span className="ml-2 text-cyan-300 text-xl font-bold">3%</span>
            </span>

            <span className="text-sm text-white/80">
              Нажмите для консультации
            </span>
          </div>
        </a>

        <div className="mt-8 sm:mt-10 flex gap-3 sm:gap-4 flex-col sm:flex-row w-full sm:w-auto">
          <a
            href="#portfolio"
            className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg shadow-lg hover:translate-y-[-4px] transition text-center text-sm sm:text-base"
          >
            Посмотреть проекты
          </a>

          <a
            href="#services"
            className="border border-white/60 text-white font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg hover:bg-white/10 transition text-center text-sm sm:text-base"
          >
            Наши услуги
          </a>
        </div>

        <div className="mt-10 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 text-xs sm:text-sm text-gray-200 font-medium">
          {[
            "10+ лет опыта",
            "Договор",
            "Поэтапная оплата",
            "Без скрытых доплат",
          ].map((text) => (
            <div key={text} className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-cyan-400 text-base sm:text-lg">✓</span>
              <span className="leading-tight">{text}</span>
            </div>
          ))}
        </div>

        <div className="mt-4 sm:mt-6 text-xs text-gray-300 max-w-2xl leading-relaxed">
          Строим частные дома, коттеджи, коммерческие и промышленные здания.
          Работа по этапам без авансов — оплата по факту выполненных работ.
          Разработка проекта осуществляется в том числе индивидуально по вашему
          техническому заданию. Свяжитесь с нами для консультации и расчёта
          стоимости вашего проекта.
        </div>
      </div>
    </section>
  );
}