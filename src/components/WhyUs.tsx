const items = [
  {
    title: "Опыт более 10 лет",
    desc: "Реализуем проекты разной сложности — от частных домов до комплексного строительства.",
  },
  {
    title: "Работа по договору",
    desc: "Фиксируем условия, сроки и стоимость до начала работ.",
  },
  {
    title: "Поэтапная оплата",
    desc: "Оплата происходит по мере выполнения этапов строительства.",
  },
  {
    title: "Прозрачная смета",
    desc: "Без скрытых доплат и неожиданных расходов в процессе работы.",
  },
  {
    title: "Собственная бригада",
    desc: "Команда 5–20 специалистов без посредников.",
  },
  {
    title: "Сопровождение объекта",
    desc: "Постоянная связь и контроль всех этапов строительства.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-3xl md:text-4xl font-semibold">
          Почему выбирают нас
        </h2>

        <p className="mt-4 text-zinc-600 max-w-2xl">
          Подход, основанный на прозрачности, опыте и ответственности за результат.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="border border-zinc-200 rounded-xl p-6 hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="mt-2 text-sm text-zinc-600">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}