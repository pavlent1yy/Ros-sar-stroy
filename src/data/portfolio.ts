import { Project } from "@/types/portfolio";

export const PROJECTS: Project[] = [
{
    id: 1,
    category: "Строительство домов",
    title:
      "Строительство двухэтажного коттеджа из газобетона с облицовкой кирпичом",
    location: "Ярославская область, КП «Земля у леса»",
    preview: "/images/house1.webp",
    images: ["/images/house1.webp", "/images/house1.1.webp"],
    shortDescription: "Капитальный загородный дом с полным циклом работ.",
    fullDescription:
      "Выполнено строительство двухэтажного дома из газобетона с облицовкой кирпичом. Реализованы фундамент, коробка, кровля, инженерные сети и подготовка под отделку.",
  },

  {
    id: 2,
    category: "Фасадные работы",
    title: "Комбинированная облицовка фасада кирпичом",
    location: "Ивановская область, пос. Загородный",
    preview: "/images/house2.webp",
    images: ["/images/building.webp", "/images/house2.webp"],
    shortDescription: "Фасадные работы с комбинированной отделкой.",
    fullDescription:
      "Выполнена облицовка фасада кирпичом с утеплением и декоративной кладкой.",
  },

  {
    id: 3,
    category: "Деревянные дома",
    title: "Гостевой комплекс из бруса",
    location: "г. Ярославль, эко-парк",
    preview: "/images/house4.webp",
    images: ["/images/house4.webp", "/images/house4.1.webp"],
    shortDescription: "Комплекс из бруса для отдыха и аренды.",
    fullDescription:
      "Построен гостевой комплекс из профилированного бруса с базовой инженерией.",
  },

  /**
   * =========================
   * КАРТИНЫ / ФРЕСКИ
   * partf1.webp → partf165.webp (с пропусками)
   * =========================
   */

  {
    id: 10,
    category: "Картины/фрески",
    title: "Картины и фрески — серия 1",
    location: "Различные объекты",
    preview: "/images/portfolio/pictures-frescoes/partf1.webp",
    images: [
      "/images/portfolio/pictures-frescoes/partf1.webp",
      "/images/portfolio/pictures-frescoes/partf5.webp",
      "/images/portfolio/pictures-frescoes/partf6.webp",
      "/images/portfolio/pictures-frescoes/partf9.webp",
      "/images/portfolio/pictures-frescoes/partf14.webp",
      "/images/portfolio/pictures-frescoes/partf17.webp",
    ],
    shortDescription: "Художественные и декоративные фрески.",
    fullDescription:
      "Выполнены декоративные художественные работы: роспись стен, интерьерные фрески и дизайнерские решения под ключ.",
  },

  {
    id: 11,
    category: "Картины/фрески",
    title: "Картины и фрески — серия 2",
    location: "Различные объекты",
    preview: "/images/portfolio/pictures-frescoes/partf18.webp",
    images: [
      "/images/portfolio/pictures-frescoes/partf18.webp",
      "/images/portfolio/pictures-frescoes/partf19.webp",
      "/images/portfolio/pictures-frescoes/partf20.webp",
      "/images/portfolio/pictures-frescoes/partf21.webp",
      "/images/portfolio/pictures-frescoes/partf22.webp",
      "/images/portfolio/pictures-frescoes/partf24.webp",
    ],
    shortDescription: "Фрески и декоративная живопись.",
    fullDescription:
      "Реализованы интерьерные художественные проекты с акцентом на детализацию и стилизацию помещений.",
  },

  {
    id: 12,
    category: "Картины/фрески",
    title: "Картины и фрески — серия 3",
    location: "Различные объекты",
    preview: "/images/portfolio/pictures-frescoes/partf25.webp",
    images: [
      "/images/portfolio/pictures-frescoes/partf25.webp",
      "/images/portfolio/pictures-frescoes/partf26.webp",
      "/images/portfolio/pictures-frescoes/partf30.webp",
      "/images/portfolio/pictures-frescoes/partf31.webp",
      "/images/portfolio/pictures-frescoes/partf32.webp",
    ],
    shortDescription: "Художественные интерьерные решения.",
    fullDescription:
      "Декоративная отделка стен с использованием художественных техник и фресочной живописи.",
  },

    {
    id: 13,
    category: "Картины/фрески",
    title: "Картины и фрески — серия 4",
    location: "Различные объекты",
    preview: "/images/portfolio/pictures-frescoes/partf33.webp",
    images: [
      "/images/portfolio/pictures-frescoes/partf33.webp",
      "/images/portfolio/pictures-frescoes/partf34.webp",
      "/images/portfolio/pictures-frescoes/partf35.webp",
      "/images/portfolio/pictures-frescoes/partf39.webp",
      "/images/portfolio/pictures-frescoes/partf47.webp",
      "/images/portfolio/pictures-frescoes/partf48.webp",
    ],
    shortDescription: "Декоративные художественные работы.",
    fullDescription:
      "Фрески и художественные элементы для интерьеров с индивидуальной проработкой дизайна.",
  },

  {
    id: 14,
    category: "Картины/фрески",
    title: "Картины и фрески — серия 5",
    location: "Различные объекты",
    preview: "/images/portfolio/pictures-frescoes/partf49.webp",
    images: [
      "/images/portfolio/pictures-frescoes/partf49.webp",
      "/images/portfolio/pictures-frescoes/partf50.webp",
      "/images/portfolio/pictures-frescoes/partf51.webp",
      "/images/portfolio/pictures-frescoes/partf53.webp",
      "/images/portfolio/pictures-frescoes/partf54.webp",
      "/images/portfolio/pictures-frescoes/partf55.webp",
    ],
    shortDescription: "Фрески и интерьерная живопись.",
    fullDescription:
      "Художественная отделка стен с акцентом на интерьерные композиции.",
  },

  {
    id: 15,
    category: "Ремонтные решения",
    title: "Ремонтные решения — серия 3",
    location: "Различные объекты",
    preview: "/images/portfolio/rep-solutions/partf28.webp",
    images: [
      "/images/portfolio/rep-solutions/partf28.webp",
      "/images/portfolio/rep-solutions/partf29.webp",
      "/images/portfolio/rep-solutions/partf36.webp",
      "/images/portfolio/rep-solutions/partf37.webp",
      "/images/portfolio/rep-solutions/partf38.webp",
      "/images/portfolio/rep-solutions/partf40.webp",
    ],
    shortDescription: "Комплексные ремонтные работы.",
    fullDescription:
      "Реализация ремонтных проектов под ключ с полной внутренней отделкой.",
  },

  {
    id: 16,
    category: "Ремонтные решения",
    title: "Ремонтные решения — серия 4",
    location: "Различные объекты",
    preview: "/images/portfolio/rep-solutions/partf41.webp",
    images: [
      "/images/portfolio/rep-solutions/partf41.webp",
      "/images/portfolio/rep-solutions/partf42.webp",
      "/images/portfolio/rep-solutions/partf43.webp",
      "/images/portfolio/rep-solutions/partf44.webp",
      "/images/portfolio/rep-solutions/partf45.webp",
      "/images/portfolio/rep-solutions/partf46.webp",
    ],
    shortDescription: "Отделка и ремонт помещений.",
    fullDescription:
      "Выполнены работы по отделке интерьеров с акцентом на качество и долговечность материалов.",
  },

  {
    id: 17,
    category: "Картины/фрески",
    title: "Картины и фрески — серия 6",
    location: "Различные объекты",
    preview: "/images/portfolio/pictures-frescoes/partf56.webp",
    images: [
      "/images/portfolio/pictures-frescoes/partf56.webp",
      "/images/portfolio/pictures-frescoes/partf61.webp",
      "/images/portfolio/pictures-frescoes/partf65.webp",
      "/images/portfolio/pictures-frescoes/partf66.webp",
      "/images/portfolio/pictures-frescoes/partf68.webp",
      "/images/portfolio/pictures-frescoes/partf69.webp",
    ],
    shortDescription: "Интерьерные фрески и декоративная живопись.",
    fullDescription:
      "Художественные работы в интерьерах с акцентом на декоративные панно и роспись стен.",
  },

  {
    id: 18,
    category: "Картины/фрески",
    title: "Картины и фрески — серия 7",
    location: "Различные объекты",
    preview: "/images/portfolio/pictures-frescoes/partf72.webp",
    images: [
      "/images/portfolio/pictures-frescoes/partf72.webp",
      "/images/portfolio/pictures-frescoes/partf74.webp",
      "/images/portfolio/pictures-frescoes/partf77.webp",
      "/images/portfolio/pictures-frescoes/partf86.webp",
      "/images/portfolio/pictures-frescoes/partf88.webp",
      "/images/portfolio/pictures-frescoes/partf89.webp",
    ],
    shortDescription: "Фрески под интерьерные решения.",
    fullDescription:
      "Разработка и реализация художественных композиций для жилых и коммерческих помещений.",
  },

  {
    id: 19,
    category: "Картины/фрески",
    title: "Картины и фрески — серия 8",
    location: "Различные объекты",
    preview: "/images/portfolio/pictures-frescoes/partf92.webp",
    images: [
      "/images/portfolio/pictures-frescoes/partf92.webp",
      "/images/portfolio/pictures-frescoes/partf95.webp",
      "/images/portfolio/pictures-frescoes/partf96.webp",
      "/images/portfolio/pictures-frescoes/partf97.webp",
      "/images/portfolio/pictures-frescoes/partf98.webp",
      "/images/portfolio/pictures-frescoes/partf99.webp",
    ],
    shortDescription: "Декоративная художественная отделка.",
    fullDescription:
      "Фрески и интерьерные рисунки с индивидуальной стилистикой под заказчика.",
  },

  {
    id: 20,
    category: "Ремонтные решения",
    title: "Ремонтные решения — серия 5",
    location: "Различные объекты",
    preview: "/images/portfolio/rep-solutions/partf52.webp",
    images: [
      "/images/portfolio/rep-solutions/partf52.webp",
      "/images/portfolio/rep-solutions/partf57.webp",
      "/images/portfolio/rep-solutions/partf58.webp",
      "/images/portfolio/rep-solutions/partf59.webp",
      "/images/portfolio/rep-solutions/partf60.webp",
      "/images/portfolio/rep-solutions/partf62.webp",
    ],
    shortDescription: "Комплексный ремонт помещений.",
    fullDescription:
      "Ремонтные работы с полным циклом отделки и инженерных решений.",
  },

  {
    id: 21,
    category: "Ремонтные решения",
    title: "Ремонтные решения — серия 6",
    location: "Различные объекты",
    preview: "/images/portfolio/rep-solutions/partf63.webp",
    images: [
      "/images/portfolio/rep-solutions/partf63.webp",
      "/images/portfolio/rep-solutions/partf64.webp",
      "/images/portfolio/rep-solutions/partf67.webp",
      "/images/portfolio/rep-solutions/partf70.webp",
      "/images/portfolio/rep-solutions/partf71.webp",
      "/images/portfolio/rep-solutions/partf73.webp",
    ],
    shortDescription: "Ремонт и отделка под ключ.",
    fullDescription:
      "Выполнены ремонтные проекты различного уровня сложности с фокусом на качество исполнения.",
  },


  {
    id: 23,
    category: "Картины/фрески",
    title: "Картины и фрески — серия 10",
    location: "Различные объекты",
    preview: "/images/portfolio/pictures-frescoes/partf106.webp",
    images: [
      "/images/portfolio/pictures-frescoes/partf106.webp",
      "/images/portfolio/pictures-frescoes/partf107.webp",
      "/images/portfolio/pictures-frescoes/partf108.webp",
      "/images/portfolio/pictures-frescoes/partf109.webp",
      "/images/portfolio/pictures-frescoes/partf110.webp",
    ],
    shortDescription: "Декоративные интерьерные работы.",
    fullDescription:
      "Роспись стен и художественные элементы для жилых и коммерческих интерьеров.",
  },

  {
    id: 24,
    category: "Картины/фрески",
    title: "Картины и фрески — серия 11",
    location: "Различные объекты",
    preview: "/images/portfolio/pictures-frescoes/partf115.webp",
    images: [
      "/images/portfolio/pictures-frescoes/partf115.webp",
      "/images/portfolio/pictures-frescoes/partf120.webp",
      "/images/portfolio/pictures-frescoes/partf127.webp",
      "/images/portfolio/pictures-frescoes/partf141.webp",
      "/images/portfolio/pictures-frescoes/partf144.webp",
    ],
    shortDescription: "Фрески и художественная отделка.",
    fullDescription:
      "Интерьерные художественные проекты с индивидуальной стилистикой под заказ.",
  },

  {
    id: 25,
    category: "Ремонтные решения",
    title: "Ремонтные решения — серия 7",
    location: "Различные объекты",
    preview: "/images/portfolio/rep-solutions/partf75.webp",
    images: [
      "/images/portfolio/rep-solutions/partf75.webp",
      "/images/portfolio/rep-solutions/partf76.webp",
      "/images/portfolio/rep-solutions/partf78.webp",
      "/images/portfolio/rep-solutions/partf79.webp",
      "/images/portfolio/rep-solutions/partf80.webp",
    ],
    shortDescription: "Комплексная отделка помещений.",
    fullDescription:
      "Ремонт и отделка интерьеров с применением современных материалов и технологий.",
  },

  {
    id: 26,
    category: "Ремонтные решения",
    title: "Ремонтные решения — серия 8",
    location: "Различные объекты",
    preview: "/images/portfolio/rep-solutions/partf81.webp",
    images: [
      "/images/portfolio/rep-solutions/partf81.webp",
      "/images/portfolio/rep-solutions/partf82.webp",
      "/images/portfolio/rep-solutions/partf83.webp",
      "/images/portfolio/rep-solutions/partf84.webp",
      "/images/portfolio/rep-solutions/partf85.webp",
    ],
    shortDescription: "Ремонт под ключ.",
    fullDescription:
      "Полный цикл ремонтных работ: от черновой отделки до финального дизайна интерьера.",
  },

    {
    id: 30,
    category: "Ремонтные решения",
    title: "Ремонтные решения — серия 9",
    location: "Различные объекты",
    preview: "/images/portfolio/rep-solutions/partf2.webp",
    images: [
      "/images/portfolio/rep-solutions/partf2.webp",
      "/images/portfolio/rep-solutions/partf3.webp",
      "/images/portfolio/rep-solutions/partf7.webp",
      "/images/portfolio/rep-solutions/partf8.webp",
      "/images/portfolio/rep-solutions/partf10.webp",
      "/images/portfolio/rep-solutions/partf11.webp",
    ],
    shortDescription: "Комплексные ремонтные решения.",
    fullDescription:
      "Выполнены отделочные и ремонтные работы различного уровня сложности.",
  },

  {
    id: 31,
    category: "Ремонтные решения",
    title: "Ремонтные решения — серия 10",
    location: "Различные объекты",
    preview: "/images/portfolio/rep-solutions/partf12.webp",
    images: [
      "/images/portfolio/rep-solutions/partf12.webp",
      "/images/portfolio/rep-solutions/partf13.webp",
      "/images/portfolio/rep-solutions/partf15.webp",
      "/images/portfolio/rep-solutions/partf16.webp",
      "/images/portfolio/rep-solutions/partf23.webp",
      "/images/portfolio/rep-solutions/partf27.webp",
    ],
    shortDescription: "Ремонт и отделка помещений.",
    fullDescription:
      "Реализация комплексных ремонтных проектов под ключ.",
  },

  {
    id: 32,
    category: "Ремонтные решения",
    title: "Ремонтные решения — серия 11",
    location: "Различные объекты",
    preview: "/images/portfolio/rep-solutions/partf28.webp",
    images: [
      "/images/portfolio/rep-solutions/partf28.webp",
      "/images/portfolio/rep-solutions/partf29.webp",
      "/images/portfolio/rep-solutions/partf36.webp",
      "/images/portfolio/rep-solutions/partf37.webp",
      "/images/portfolio/rep-solutions/partf38.webp",
      "/images/portfolio/rep-solutions/partf40.webp",
    ],
    shortDescription: "Ремонтные работы.",
    fullDescription:
      "Отделка интерьеров и инженерные решения под ключ.",
  },

  {
    id: 33,
    category: "Ремонтные решения",
    title: "Ремонтные решения — серия 12",
    location: "Различные объекты",
    preview: "/images/portfolio/rep-solutions/partf41.webp",
    images: [
      "/images/portfolio/rep-solutions/partf41.webp",
      "/images/portfolio/rep-solutions/partf42.webp",
      "/images/portfolio/rep-solutions/partf43.webp",
      "/images/portfolio/rep-solutions/partf44.webp",
      "/images/portfolio/rep-solutions/partf45.webp",
      "/images/portfolio/rep-solutions/partf46.webp",
    ],
    shortDescription: "Отделка и ремонт.",
    fullDescription:
      "Финишные и черновые ремонтные работы.",
  },

    {
    id: 40,
    category: "Картины/фрески",
    title: "Картины и фрески — серия 12",
    location: "Различные объекты",
    preview: "/images/portfolio/pictures-frescoes/partf1.webp",
    images: [
      "/images/portfolio/pictures-frescoes/partf1.webp",
      "/images/portfolio/pictures-frescoes/partf4.webp",
      "/images/portfolio/pictures-frescoes/partf5.webp",
      "/images/portfolio/pictures-frescoes/partf6.webp",
      "/images/portfolio/pictures-frescoes/partf9.webp",
      "/images/portfolio/pictures-frescoes/partf14.webp",
    ],
    shortDescription: "Фрески и декоративные работы.",
    fullDescription:
      "Художественная отделка интерьеров и декоративные композиции.",
  },

  {
    id: 41,
    category: "Картины/фрески",
    title: "Картины и фрески — серия 13",
    location: "Различные объекты",
    preview: "/images/portfolio/pictures-frescoes/partf17.webp",
    images: [
      "/images/portfolio/pictures-frescoes/partf17.webp",
      "/images/portfolio/pictures-frescoes/partf18.webp",
      "/images/portfolio/pictures-frescoes/partf19.webp",
      "/images/portfolio/pictures-frescoes/partf20.webp",
      "/images/portfolio/pictures-frescoes/partf21.webp",
      "/images/portfolio/pictures-frescoes/partf22.webp",
    ],
    shortDescription: "Интерьерные фрески.",
    fullDescription:
      "Роспись стен и художественные интерьерные решения.",
  },

  {
    id: 42,
    category: "Картины/фрески",
    title: "Картины и фрески — серия 14",
    location: "Различные объекты",
    preview: "/images/portfolio/pictures-frescoes/partf24.webp",
    images: [
      "/images/portfolio/pictures-frescoes/partf24.webp",
      "/images/portfolio/pictures-frescoes/partf25.webp",
      "/images/portfolio/pictures-frescoes/partf26.webp",
      "/images/portfolio/pictures-frescoes/partf30.webp",
      "/images/portfolio/pictures-frescoes/partf31.webp",
      "/images/portfolio/pictures-frescoes/partf32.webp",
    ],
    shortDescription: "Художественные работы.",
    fullDescription:
      "Фрески и декоративные интерьерные решения под заказ.",
  },
];