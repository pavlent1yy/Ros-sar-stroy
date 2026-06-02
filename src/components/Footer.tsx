import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t-4 border-blue-500 relative z-10">
      <div className="max-w-6xl mx-auto px-4 py-14">

        <div className="grid md:grid-cols-3 gap-10">

          {/* ЛОГО + ОПИСАНИЕ */}
          <div>
            <h3 className="text-2xl font-bold font-mono text-blue-700">
              StroiGroup
            </h3>

            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              Строительство коттеджей, частных домов и коммерческих объектов под ключ.  
              Работаем без предоплаты — оплата только по факту выполненных этапов.
            </p>

            <div className="mt-6 text-sm text-gray-500">
              © {new Date().getFullYear()} Все права защищены
            </div>
          </div>

          {/* НАВИГАЦИЯ */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-4">
              Разделы
            </h4>

            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link href="#services" className="hover:text-blue-600 transition">
                  Услуги
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="hover:text-blue-600 transition">
                  Портфолио
                </Link>
              </li>
              <li>
                <Link href="#contacts" className="hover:text-blue-600 transition">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* КОНТАКТЫ */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-4">
              Контакты
            </h4>

            <div className="text-sm text-gray-600 space-y-2">
              <p>📍 Работаем: Москва и регионы РФ</p>
              <p>📞 Телефон: +7 (999) 123-45-67</p>
              <p>✉️ Email: info@stroigroup.ru</p>
            </div>

            <a
              href="#contacts"
              className="inline-block mt-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-semibold px-5 py-3 rounded-lg hover:translate-y-[-2px] transition shadow-md"
            >
              Оставить заявку
            </a>
          </div>

        </div>

        {/* НИЖНЯЯ ЛИНИЯ */}
        <div className="mt-12 pt-6 border-t border-gray-200 text-center text-xs text-gray-500">
          Сделано с упором на качество и прозрачность строительных работ
        </div>

      </div>
    </footer>
  );
}