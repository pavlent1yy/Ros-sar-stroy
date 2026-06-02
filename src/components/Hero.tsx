"use client";

import { useEffect, useState } from "react";

const images = [
  "/images/house1.jpg",
  "/images/house2.jpg",
  "/images/house4.jpg",
  "/images/house5.jpg",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] md:h-[90vh] flex items-center pt-20 md:pt-16 pb-10 md:pb-0 overflow-hidden">

      {/* BACKGROUND SLIDER */}
      <div className="absolute inset-0">
        {images.map((img, i) => (
          <img
            key={img}
            src={img}
            alt="construction"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
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

        {/* badge */}
        <div className="mb-6 sm:mb-8 inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20 border border-cyan-400/60 backdrop-blur-xl px-3 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-semibold text-cyan-100 shadow-lg shadow-cyan-500/20 flex-wrap">
          <span className="text-lg sm:text-2xl">🏦</span>
          <span className="leading-tight">
            Ипотека под <b className="text-cyan-300">4%</b> на строительство домов
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-mono tracking-tight max-w-3xl">
          Строительство домов и ремонт под ключ
        </h1>

        <p className="mt-4 sm:mt-6 text-gray-200 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed font-light">
          Более 10 лет опыта. Строим частные дома, коттеджи, коммерческие и промышленные объекты в Ярославле, Москве, Санкт-Петербурге и регионах России.
        </p>

        {/* CTA */}
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

        {/* TRUST */}
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

        {/* small note */}
        <div className="mt-4 sm:mt-6 text-xs text-gray-300 max-w-2xl leading-relaxed">
          Строим частные дома, коттеджи, коммерческие и промышленные здания.
          Работа по этапам без авансов — оплата по факту выполненных работ.
        </div>
      </div>
    </section>
  );
}
