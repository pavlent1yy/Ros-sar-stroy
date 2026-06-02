import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";

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
	<body className={`${inter.className} bg-white text-zinc-900`}>
		<Header />
		<main className="pt-16">{children}</main>
	</body>
    </html>
  );
}