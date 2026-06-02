const projects = [
  {
    title: "Дом из газобетона",
    location: "Ярославль",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    title: "Каркасный дом",
    location: "Московская область",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
  },
  {
    title: "Евроремонт квартиры",
    location: "Санкт-Петербург",
    image:
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6",
  },
  {
    title: "Терраса и веранда",
    location: "Москва",
    image:
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c",
  },
];

export default function Portfolio() {
  return (
    <section className="py-20 bg-zinc-50">
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-3xl md:text-4xl font-semibold">
          Портфолио работ
        </h2>

        <p className="mt-4 text-zinc-600 max-w-2xl">
          Реальные объекты строительства и ремонта, выполненные нашей бригадой.
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {projects.map((item, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-72 w-full object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm text-zinc-200">{item.location}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}