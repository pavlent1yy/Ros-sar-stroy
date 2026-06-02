"use client";

import { useEffect, useState } from "react";

const reviews = [
  {
    name: "Мари",
    date: "5 мая 2025",
    text:
      "Дом хороший, продавец отличный, все условия прозрачны. Место очень красивое, рядом инфраструктура. Отличный вариант для большой семьи!",
  },
  {
    name: "Наталья",
    date: "17 сентября 2023",
    text: "Грамотный, пунктуальный продавец своей недвижимости.",
  },
  {
    name: "Варвара",
    date: "5 марта 2023",
    text:
      "Приезжали смотреть коттедж и остались приятно удивлены. Рядом вся инфраструктура, дом от собственника, коммуникации центральные.",
  },
  {
    name: "Вайс Девайс",
    date: "4 марта 2023",
    text: "Порядочный и ответственный человек. Однозначно стоит иметь дело.",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-yellow-400 text-sm">
      {"★★★★★"}
    </div>
  );
}

export default function Reviews() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(t);
  }, []);

  const prev = () =>
    setIndex((i) => (i - 1 + reviews.length) % reviews.length);

  const next = () =>
    setIndex((i) => (i + 1) % reviews.length);

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 font-mono">
          Отзывы клиентов
        </h2>

        {/* КАРУСЕЛЬ */}
        <div className="relative bg-zinc-50 border border-zinc-200 rounded-lg sm:rounded-2xl p-4 sm:p-8 shadow-sm overflow-hidden">

          {reviews.map((r, i) => (
            <div
              key={r.name}
              className={`transition-all duration-700 min-h-[200px] ${
                i === index
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 absolute inset-0 translate-x-10"
              }`}
            >
              <div className="flex flex-col gap-3 sm:gap-4">

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4">
                  <div>
                    <div className="font-semibold text-base sm:text-lg">{r.name}</div>
                    <div className="text-xs sm:text-sm text-zinc-500">{r.date}</div>
                  </div>

                  <Stars />
                </div>

                <p className="text-zinc-700 leading-relaxed text-sm sm:text-base">
                  {r.text}
                </p>
              </div>
            </div>
          ))}

          {/* КНОПКИ */}
          <button
            onClick={prev}
            className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 bg-white border border-zinc-300 rounded-full w-8 h-8 sm:w-10 sm:h-10 shadow hover:bg-zinc-100 text-sm sm:text-base flex items-center justify-center"
          >
            ←
          </button>

          <button
            onClick={next}
            className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 bg-white border border-zinc-300 rounded-full w-8 h-8 sm:w-10 sm:h-10 shadow hover:bg-zinc-100 text-sm sm:text-base flex items-center justify-center"
          >
            →
          </button>
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-6">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition ${
                i === index ? "bg-blue-600" : "bg-zinc-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
