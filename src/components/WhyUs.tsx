const reasons = [
  {
    title: "Профессионализм",
    desc: "Команда опытных строителей и дизайнеров. Качество работ гарантировано договором.",
    icon: "👷"
  },
  {
    title: "Прозрачность",
    desc: "Смета согласована заранее. Без скрытых доплат и неожиданных расходов.",
    icon: "📋"
  },
  {
    title: "Сроки",
    desc: "Работаем по четкому графику. Штраф за просрочку прописан в договоре.",
    icon: "⏱️"
  },
  {
    title: "Материалы",
    desc: "Используем только сертифицированные материалы от надежных поставщиков.",
    icon: "✅"
  },
  {
    title: "Гарантия",
    desc: "2 года гарантии на все работы. Готовы отвечать за качество.",
    icon: "🛡️"
  },
  {
    title: "Поддержка",
    desc: "Работаем 24/7. Можете позвонить в любое время с вопросом или проблемой.",
    icon: "📞"
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative z-10 border-y-4 border-blue-500">
      <div className="max-w-6xl mx-auto px-4">

        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-mono tracking-tight mb-4">
            <span className="gradient-text">Почему мы?</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Надежный партнер, с которым вы можете быть спокойны
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reasons.map((item, i) => (
            <div
              key={i}
              className="bg-white border-l-4 border-b-4 border-blue-500 rounded-xl p-6 shadow-blue-sm hover:shadow-blue-md transition group hover:translate-y-[-4px]"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition transform">{item.icon}</div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              
              {/* Accent line */}
              <div className="mt-4 h-1 w-0 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-12 transition rounded-full" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
