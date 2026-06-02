const services = [
  {
    title: "Строительство домов",
    desc: "Каркасные, газобетон, кирпич, брус и монолитные дома под ключ.",
    icon: "🏗️"
  },
  {
    title: "Фундаменты",
    desc: "Ленточные, плитные, свайные и монолитные основания.",
    icon: "🔨"
  },
  {
    title: "Кровельные работы",
    desc: "Металлочерепица, мягкая кровля, профнастил.",
    icon: "🏠"
  },
  {
    title: "Фасады",
    desc: "Штукатурка, кирпич, сайдинг и фасадные панели.",
    icon: "🎨"
  },
  {
    title: "Инженерные системы",
    desc: "Электрика, сантехника, отопление, тёплые полы.",
    icon: "⚙️"
  },
  {
    title: "Ремонт и отделка",
    desc: "Черновая и чистовая отделка, евроремонт под ключ.",
    icon: "✨"
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50 border-y-4 border-blue-500">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-mono tracking-tight mb-4">
            <span className="gradient-text">Основные услуги</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl">
            Выполняем полный цикл работ — от фундамента до чистовой отделки.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((item, i) => (
            <div
              key={i}
              className="bg-white border-3 border-blue-500 rounded-xl p-6 shadow-blue-sm hover:shadow-blue-md hover:translate-y-[-8px] transition group cursor-pointer relative overflow-hidden"
            >
              {/* Hover background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition -z-10" />
              
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              
              {/* Гирлянда */}
              <div className="mt-4 inline-block">
                <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full group-hover:w-full transition" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
