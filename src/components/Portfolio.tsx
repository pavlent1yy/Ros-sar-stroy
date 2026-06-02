const projects = [
  {
    title: "Дом из газобетона",
    location: "Ярославль",
    image:
      "/images/GasBetonHouse.jpg",
  },
  {
    title: "Каркасный дом",
    location: "Московская область",
    image:
      "/images/house1.jpg",
  },
  {
    title: "Евроремонт квартиры",
    location: "Санкт-Петербург",
    image:
      "/images/house2.jpg",
  },
  {
    title: "Терраса и веранда",
    location: "Москва",
    image:
      "/images/house3.jpg",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-white relative z-10">
      <div className="max-w-6xl mx-auto px-4">

        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-mono tracking-tight mb-4">
            <span className="gradient-text">Портфолио работ</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl">
            Реальные объекты строительства и ремонта, выполненные нашей бригадой.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((item, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl border-3 border-blue-500 shadow-blue-sm hover:shadow-blue-lg transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-72 w-full object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="text-sm text-gray-300 mt-1">{item.location}</p>
              </div>

              {/* Overlay accent */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-400 to-cyan-400 transform -translate-x-1 group-hover:translate-x-0 transition" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
