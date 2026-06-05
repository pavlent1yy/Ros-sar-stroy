"use client";

export default function Contacts() {
  return (
    <section id="contacts" className="py-16 sm:py-20 bg-white relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-mono tracking-tight mb-3 sm:mb-4">
            <span className="gradient-text">Контакты</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 max-w-2xl">
            Свяжитесь с нами для расчёта стоимости и консультации по вашему и нашему проекту.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12">

          {/* Информация */}
          <div className="space-y-4 sm:space-y-6">

            <div className="border-l-4 border-blue-500 pl-4 sm:pl-6 hover:translate-x-1 sm:hover:translate-x-2 transition">
              <p className="font-bold text-gray-900 mb-1 text-sm sm:text-base">📞 Телефон</p>
              <a
                href="tel:+79066342664"
                className="text-blue-600 hover:text-blue-700 font-semibold text-sm sm:text-base"
              >
                +7 (906) 634-26-64 | +7 (960) 543-51-81
              </a>
            </div>

            <div className="border-l-4 border-cyan-500 pl-4 sm:pl-6">
              <p className="font-bold text-gray-900 mb-1 text-sm sm:text-base">
                💬 Мессенджеры
              </p>
              <p className="text-gray-600 text-sm sm:text-base">
                <span className="text-blue-600 font-semibold">WhatsApp</span>
                {" / "}
                <span className="text-blue-600 font-semibold">Telegram</span>
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4 sm:pl-6">
              <p className="font-bold text-gray-900 mb-1 text-sm sm:text-base">🕐 График работы</p>
              <p className="text-gray-600 text-sm sm:text-base">Пн–Вс: 08:00–23:00</p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4 sm:pl-6">
              <p className="font-bold text-gray-900 mb-1 text-sm sm:text-base">📧 E-mail</p>
              <p className="text-gray-600 text-sm sm:text-base break-all">
                artembrigadier1@gmail.com
              </p>
            </div>

            <div className="border-l-4 border-cyan-500 pl-4 sm:pl-6">
              <p className="font-bold text-gray-900 mb-1 text-sm sm:text-base">📍 География</p>
              <p className="text-gray-600 text-sm sm:text-base">
                Ярославль, Москва, Санкт-Петербург и регионы РФ
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}