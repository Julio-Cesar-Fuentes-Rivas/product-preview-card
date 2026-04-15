import type { Metadata } from "next";
import {Montserrat, Fraunces} from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Product Preview Card",
  description: "Primer componente del producto",
};

/*export const metadata: Metadata = {
  title: 'Product Preview Card', // <-- Agrega tu título entre comillas
  description: 'Frontend Mentor Challenge', // (Opcional) Puedes aprovechar para poner una mejor descripción
}*/

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}