"use client";

import { useEffect, useState } from "react";

const images = [
  "/images/house1.jpg",
  "/images/house2.jpg",
  "/images/house3.jpg",
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
    <section className="relative h-[90vh] flex items-center pt-16 overflow-hidden">

      {/* ФОН-КАРУСЕЛЬ */}
      <div className="absolute inset-0">
        {images.map((img, i) => (
          <img
            key={img}
            src={img}
            alt="hero background"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* КОНТЕНТ */}
      <div className="relative max-w-6xl mx-auto px-4 text-white z-10">
        
        {/* Спецпредложение */}
        <div className="mb-8 inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20 border-2 border-cyan-400 backdrop-blur-xl px-6 py-4 rounded-2xl text-sm font-semibold text-cyan-100 shadow-lg shadow-cyan-500/30">
          <span className="text-2xl">🏦</span>
          <span>
            Ипотека под <b className="text-cyan-300">4%</b> на строительство домов, коттеджей и участков
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight font-mono tracking-tight max-w-3xl">
          Строительство домов и ремонт под ключ
        </h1>

        <p className="mt-6 text-gray-100 max-w-2xl text-base md:text-lg leading-relaxed font-light">
          Более 10 лет опыта. Строим дома, коттеджи и выполняем ремонт под ключ
          в Ярославле, Москве, Санкт-Петербурге и регионах России.
        </p>

        <div className="mt-10 flex gap-4 flex-wrap">
          <a
            href="#contacts"
            className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold px-8 py-3.5 rounded-lg shadow-lg hover:translate-y-[-4px] transition"
          >
            Посмотреть работы
          </a>
        </div>

        {/* Доверие */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-gray-200 font-medium">
          {[
            "10+ лет опыта",
            "Договор",
            "Поэтапная оплата",
            "Без скрытых доплат",
          ].map((text) => (
            <div key={text} className="flex items-center gap-2">
              <span className="text-cyan-400">✓</span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}