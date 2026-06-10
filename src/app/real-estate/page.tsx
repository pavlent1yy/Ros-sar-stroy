"use client";

import { useEffect, useState } from "react";

import Contacts from "@/components/Contacts";

import { REAL_ESTATE_OBJECTS } from "@/data/realEstate";
import type { RealEstateObject } from "@/types/realEstate";

export default function RealEstatePage() {
  const [selected, setSelected] =
    useState<RealEstateObject | null>(null);

  const [activeImage, setActiveImage] =
    useState<string | null>(null);

  const closeModal = () => {
    setSelected(null);
    setActiveImage(null);
  };

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <>
      <main className="relative min-h-screen overflow-hidden">
        <section className="relative pt-28 pb-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">

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

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {REAL_ESTATE_OBJECTS.map((obj) => (
                <div
                  key={obj.id}
                  onClick={() => setSelected(obj)}
                  className="cursor-pointer bg-white rounded-xl border-2 border-blue-500 overflow-hidden hover:shadow-xl transition"
                >
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

                    <div className="mt-4 text-2xl font-bold text-blue-600">
                      {obj.price}
                    </div>

                    <p className="mt-3 text-blue-600 font-semibold text-sm">
                      Открыть →
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {selected && (
          <div
            onClick={closeModal}
            className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-4"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white w-full max-w-5xl rounded-2xl max-h-[90vh] overflow-hidden"
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white shadow-lg rounded-full w-10 h-10 z-20"
              >
                ✕
              </button>

              <div className="overflow-y-auto max-h-[90vh]">

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

                <div className="p-6 sm:p-8 space-y-6">

                  <div className="flex justify-between items-center gap-4">
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

                  <div className="grid sm:grid-cols-2 gap-4">

                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl p-5">
                      <div className="text-sm uppercase opacity-80">
                        Стоимость объекта
                      </div>

                      <div className="text-3xl sm:text-4xl font-bold mt-1">
                        {selected.price}
                      </div>
                    </div>

                    {selected.mortgage?.enabled && (
                      <div className="bg-green-50 border-2 border-green-500 rounded-xl p-5">
                        <div className="text-sm uppercase text-green-700">
                          Доступна ипотека
                        </div>

                        <div className="text-3xl sm:text-4xl font-bold text-green-700 mt-1">
                          {selected.mortgage.rate}
                        </div>
                      </div>
                    )}
                  </div>

                  {selected.characteristics && (
                    <div className="grid sm:grid-cols-4 gap-3">

                      {selected.characteristics.area && (
                        <div className="bg-gray-50 rounded-xl p-4">
                          <div className="text-xs text-gray-500">
                            Площадь
                          </div>
                          <div className="font-bold">
                            {selected.characteristics.area}
                          </div>
                        </div>
                      )}

                      {selected.characteristics.plot && (
                        <div className="bg-gray-50 rounded-xl p-4">
                          <div className="text-xs text-gray-500">
                            Участок
                          </div>
                          <div className="font-bold">
                            {selected.characteristics.plot}
                          </div>
                        </div>
                      )}

                      {selected.characteristics.floors && (
                        <div className="bg-gray-50 rounded-xl p-4">
                          <div className="text-xs text-gray-500">
                            Этажей
                          </div>
                          <div className="font-bold">
                            {selected.characteristics.floors}
                          </div>
                        </div>
                      )}

                      {selected.characteristics.yearBuilt && (
                        <div className="bg-gray-50 rounded-xl p-4">
                          <div className="text-xs text-gray-500">
                            Год
                          </div>
                          <div className="font-bold">
                            {selected.characteristics.yearBuilt}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  <p className="text-gray-700 leading-relaxed">
                    {selected.fullDescription}
                  </p>

                  {selected.investment && (
                    <div className="bg-amber-50 border-2 border-amber-400 rounded-xl p-5">
                      <h3 className="text-xl font-bold mb-3">
                        💰 Инвестиционный потенциал
                      </h3>

                      <div className="space-y-3 text-gray-700">
                        {selected.investment.resalePrice && (
                          <p>
                            Перепродажа:
                            <strong>
                              {" "}
                              {selected.investment.resalePrice}
                            </strong>
                          </p>
                        )}

                        {selected.investment.rentIncome && (
                          <p>
                            Доход от аренды:
                            <strong>
                              {" "}
                              {selected.investment.rentIncome}
                            </strong>
                          </p>
                        )}

                        {selected.investment.description && (
                          <p>
                            {selected.investment.description}
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-3">

                    <a
                      href="#contacts"
                      onClick={closeModal}
                      className="flex-1 text-center bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:translate-y-[-2px] transition"
                    >
                      {selected.contactButtonText ??
                        "📞 Связаться"}
                    </a>

                    <button
                      onClick={closeModal}
                      className="px-8 py-4 rounded-xl border border-gray-300 hover:bg-gray-50 transition"
                    >
                      Закрыть
                    </button>

                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeImage && (
          <div
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 bg-black/80 z-[110] flex items-center justify-center p-4"
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