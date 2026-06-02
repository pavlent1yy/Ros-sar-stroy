export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center">
      
      {/* фон */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1501183638710-841dd1904471"
          alt="construction"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* контент */}
      <div className="relative max-w-6xl mx-auto px-4 text-white">
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
          Строительство домов и ремонт под ключ
        </h1>

        <p className="mt-6 text-zinc-200 max-w-xl text-base md:text-lg">
          Более 10 лет опыта. Строим дома, коттеджи и выполняем ремонт под ключ
          в Ярославле, Москве, Санкт-Петербурге и регионах России.
        </p>

        <div className="mt-8 flex gap-4 flex-wrap">
          <a
            href="/contacts"
            className="bg-amber-600 hover:bg-amber-700 transition px-6 py-3 rounded-md"
          >
            Получить консультацию
          </a>

          <a
            href="/portfolio"
            className="border border-white/40 hover:border-white px-6 py-3 rounded-md transition"
          >
            Посмотреть работы
          </a>
        </div>

        {/* доверие */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-zinc-300">
          <div>10+ лет опыта</div>
          <div>Договор</div>
          <div>Поэтапная оплата</div>
          <div>Без скрытых доплат</div>
        </div>
      </div>
    </section>
  );
}