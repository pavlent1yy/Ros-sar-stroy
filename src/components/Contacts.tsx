export default function Contacts() {
  return (
    <section id="contacts" className="py-20 bg-zinc-50">
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-3xl md:text-4xl font-semibold">
          Контакты
        </h2>

        <p className="mt-4 text-zinc-600 max-w-2xl">
          Свяжитесь с нами для расчёта стоимости и консультации по вашему проекту.
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-10">

          {/* контакты */}
          <div className="space-y-4 text-zinc-700">
            <div>
              <p className="font-semibold">Телефон</p>
              <p>+7 (999) 123-45-67</p>
            </div>

            <div>
              <p className="font-semibold">Мессенджеры</p>
              <p>WhatsApp / Telegram</p>
            </div>

            <div>
              <p className="font-semibold">График работы</p>
              <p>Пн–Вс: 05:00–23:00</p>
            </div>

            <div>
              <p className="font-semibold">География</p>
              <p>Ярославль, Москва, Санкт-Петербург и регионы РФ</p>
            </div>
          </div>

          {/* форма */}
          <form
            className="bg-white border border-zinc-200 rounded-xl p-6 space-y-4"
            action="https://formsubmit.co/your-email@example.com"
            method="POST"
          >
            <input
              type="text"
              name="name"
              placeholder="Ваше имя"
              className="w-full border border-zinc-200 p-3 rounded-md"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Телефон"
              className="w-full border border-zinc-200 p-3 rounded-md"
              required
            />

            <textarea
              name="message"
              placeholder="Что нужно построить или отремонтировать"
              className="w-full border border-zinc-200 p-3 rounded-md"
              rows={4}
            />

            <button
              type="submit"
              className="w-full bg-amber-600 text-white py-3 rounded-md hover:bg-amber-700 transition"
            >
              Отправить заявку
            </button>

            <p className="text-xs text-zinc-500">
              Нажимая кнопку, вы соглашаетесь на обработку данных.
            </p>
          </form>

        </div>

        {/* карта
        <div className="mt-10">
          <iframe
            className="w-full h-64 rounded-xl border"
            loading="lazy"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Aexample"
          />
        </div> */}

      </div>
    </section>
  );
}