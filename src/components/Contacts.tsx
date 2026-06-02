"use client";

import { useState } from "react";

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacts" className="py-20 bg-white relative z-10">
      <div className="max-w-6xl mx-auto px-4">

        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-mono tracking-tight mb-4">
            <span className="gradient-text">Контакты</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl">
            Свяжитесь с нами для расчёта стоимости и консультации по вашему проекту.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Информация */}
          <div className="space-y-6">
            
            <div className="border-l-4 border-blue-500 pl-6 hover:translate-x-2 transition">
              <p className="font-bold text-gray-900 mb-1">📞 Телефон</p>
              <a href="tel:+79066342664" className="text-blue-600 hover:text-blue-700 font-semibold">
                +7 (906) 634-26-64
              </a>
            </div>

            <div className="border-l-4 border-cyan-500 pl-6 hover:translate-x-2 transition">
              <p className="font-bold text-gray-900 mb-1">💬 Мессенджеры</p>
              <p className="text-gray-600">
                <a href="https://wa.me/79991234567" className="text-blue-600 hover:text-blue-700 font-semibold">
                  WhatsApp
                </a>
                {" / "}
                <a href="https://t.me/stroigroup" className="text-blue-600 hover:text-blue-700 font-semibold">
                  Telegram
                </a>
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6 hover:translate-x-2 transition">
              <p className="font-bold text-gray-900 mb-1">🕐 График работы</p>
              <p className="text-gray-600">Пн–Вс: 08:00–23:00</p>
            </div>

            <div className="border-l-4 border-cyan-500 pl-6 hover:translate-x-2 transition">
              <p className="font-bold text-gray-900 mb-1">📍 География</p>
              <p className="text-gray-600">
                Ярославль, Москва, Санкт-Петербург и регионы РФ
              </p>
            </div>

          </div>


        </div>

      </div>
    </section>
  );
}
