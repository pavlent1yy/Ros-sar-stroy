"use client";

const reasons = [
  {
    title: "Без предоплаты",
    desc: "Строительство начинается без авансовых платежей. Оплата только по факту выполненных и принятых этапов работ.",
    icon: "💳"
  },
  {
    title: "Прозрачные условия",
    desc: "Фиксированная смета согласуется до начала работ. Никаких скрытых платежей и неожиданных расходов.",
    icon: "📋"
  },
  {
    title: "Профессиональная команда",
    desc: "Опытные строители и инженеры, работающие по стандартам качества и договору.",
    icon: "👷"
  },
  {
    title: "Сроки под контролем",
    desc: "Четкий график выполнения работ с фиксацией этапов и ответственности за задержки.",
    icon: "⏱️"
  },
  {
    title: "Материалы",
    desc: "Используем только сертифицированные и проверенные строительные материалы от надежных поставщиков.",
    icon: "🏗️"
  },
  {
    title: "Гарантия и поддержка",
    desc: "Гарантия на выполненные работы и сопровождение после сдачи объекта.",
    icon: "🛡️"
  },
];

export default function WhyUs() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative z-10 border-y-4 border-blue-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="mb-10 sm:mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-mono tracking-tight mb-3 sm:mb-4">
            <span className="gradient-text">Почему выбирают нас</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            Строим коттеджи, частные дома и коммерческие объекты под ключ с полной прозрачностью и контролем качества
          </p>
        </div>

        {/* ключевое УТП */}
        <div className="mb-8 sm:mb-10 max-w-3xl mx-auto text-center bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10 border-2 border-cyan-400 rounded-lg sm:rounded-2xl p-4 sm:p-6 shadow-sm">
          <p className="text-gray-800 font-semibold text-xs sm:text-sm md:text-base leading-relaxed">
            Строительство коттеджей, частных домов, коммерческих и промышленных объектов под ключ.  
            <span className="text-blue-600 font-bold"> Без предоплаты и авансов</span> — оплата только за выполненные и принятые этапы работ.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
          {reasons.map((item, i) => (
            <div
              key={i}
              className="bg-white border-l-4 border-b-4 border-blue-500 rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition group hover:translate-y-[-4px]"
            >
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-4 group-hover:scale-110 transition inline-block">
                {item.icon}
              </div>

              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>

              <div className="mt-3 sm:mt-4 h-1 w-0 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-8 sm:group-hover:w-12 transition rounded-full" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
