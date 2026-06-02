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
    <div className="flex gap-1 text-yellow-400 text-sm">
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
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-3xl md:text-4xl font-bold mb-10 font-mono">
          Отзывы клиентов
        </h2>

        {/* КАРУСЕЛЬ */}
        <div className="relative bg-zinc-50 border border-zinc-200 rounded-2xl p-8 shadow-sm overflow-hidden">

          {reviews.map((r, i) => (
            <div
              key={r.name}
              className={`transition-all duration-700 ${
                i === index
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 absolute inset-0 translate-x-10"
              }`}
            >
              <div className="flex flex-col gap-4">

                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold text-lg">{r.name}</div>
                    <div className="text-sm text-zinc-500">{r.date}</div>
                  </div>

                  <Stars />
                </div>

                <p className="text-zinc-700 leading-relaxed text-base">
                  {r.text}
                </p>
              </div>
            </div>
          ))}

          {/* КНОПКИ */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white border border-zinc-300 rounded-full w-10 h-10 shadow hover:bg-zinc-100"
          >
            ←
          </button>

          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white border border-zinc-300 rounded-full w-10 h-10 shadow hover:bg-zinc-100"
          >
            →
          </button>
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-2 mt-6">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition ${
                i === index ? "bg-blue-600" : "bg-zinc-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}