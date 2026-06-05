import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Строительство домов под ключ | StroiGroup",
  description:
    "Строительство коттеджей, частных домов, коммерческих и промышленных объектов под ключ. Без предоплаты. Работа по договору. Москва и регионы.",
  keywords: [
    "строительство домов",
    "коттеджи под ключ",
    "строительная компания",
    "ремонт квартир",
    "строительство без предоплаты",
    "стройка Москва",
  ],
  openGraph: {
    title: "StroiGroup — строительство домов под ключ",
    description:
      "Дома, коттеджи и коммерческие объекты без предоплаты. Оплата по факту.",
    type: "website",
    locale: "ru_RU",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        {/* low-priority background layer */}
        <div className="blueprint-grid" aria-hidden="true" />

        {/* header stays, but better rendering stability */}
        <Header />

        {/* main content */}
        <main className="relative z-10">{children}</main>

        <Footer />
      </body>
    </html>
  );
}