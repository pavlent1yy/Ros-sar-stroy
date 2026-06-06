import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t-4 border-blue-500 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-14">

        <div className="grid sm:grid-cols-3 gap-6 sm:gap-10">

          {/* ЛОГО + ОПИСАНИЕ */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold font-mono text-blue-700">
              RosSarStroy
            </h3>

            <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-600 leading-relaxed">
              Строительство коттеджей, частных домов и коммерческих объектов под ключ.  
              Работаем без предоплаты — оплата только по факту выполненных этапов.
            </p>

            <div className="mt-4 sm:mt-6 text-xs text-gray-500">
              © {new Date().getFullYear()} Все права защищены
            </div>
          </div>

          {/* НАВИГАЦИЯ */}
          <div>
            <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">
              Разделы
            </h4>

            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-600">
              <li>
                <a href="/#services" className="hover:text-blue-600 transition">
                  Услуги
                </a>
              </li>
              <li>
                <a href="/#portfolio" className="hover:text-blue-600 transition">
                  Портфолио
                </a>
              </li>
              <li>
                <a href="/#contacts" className="hover:text-blue-600 transition">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* КОНТАКТЫ */}
          <div>
            <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">
              Контакты
            </h4>

            <div className="text-xs sm:text-sm text-gray-600 space-y-1.5 sm:space-y-2">
              <p>📍 Работаем: Москва и регионы РФ</p>
              <p>📞 Телефон: +7 (906) 634-26-64</p>
              <p>✉️ Email: info@stroigroup.ru</p>
            </div>
          </div>

        </div>

        {/* НИЖНЯЯ ЛИНИЯ */}
        <div className="mt-8 sm:mt-12 pt-4 sm:pt-6 border-t border-gray-200 text-center text-xs text-gray-500">
          Сделано с упором на качество и прозрачность строительных работ
        </div>

      </div>
    </footer>
  );
}
