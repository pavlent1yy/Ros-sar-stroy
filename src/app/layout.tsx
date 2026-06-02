import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Строительство домов под ключ",
  description:
    "Строительство домов, коттеджей и ремонт под ключ. Работаем более 10 лет. Прозрачные условия и договор.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <div className="blueprint-grid" />
        <Header />
        <main className="relative z-10">{children}</main>
		<Footer />
      </body>
    </html>
  );
}
