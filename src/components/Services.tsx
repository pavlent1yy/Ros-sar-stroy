const services = [
  {
    title: "Строительство домов",
    desc: "Каркасные, газобетон, кирпич, брус и монолитные дома под ключ.",
  },
  {
    title: "Фундаменты",
    desc: "Ленточные, плитные, свайные и монолитные основания.",
  },
  {
    title: "Кровельные работы",
    desc: "Металлочерепица, мягкая кровля, профнастил.",
  },
  {
    title: "Фасады",
    desc: "Штукатурка, кирпич, сайдинг и фасадные панели.",
  },
  {
    title: "Инженерные системы",
    desc: "Электрика, сантехника, отопление, тёплые полы.",
  },
  {
    title: "Ремонт и отделка",
    desc: "Черновая и чистовая отделка, евроремонт под ключ.",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        
        <h2 className="text-3xl md:text-4xl font-semibold">
          Основные услуги
        </h2>

        <p className="mt-4 text-zinc-600 max-w-2xl">
          Выполняем полный цикл работ — от фундамента до чистовой отделки.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {services.map((item, i) => (
            <div
              key={i}
              className="border border-zinc-200 rounded-xl p-6 hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-zinc-600">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}