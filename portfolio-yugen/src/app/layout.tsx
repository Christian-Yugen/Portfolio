import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "José Cristiano S.Lima | Portfólio",
  description:
    "Landing page cinematográfica premium para People Analytics, BI, automação e estratégia em gestão de pessoas.",
  icons: {
    icon: "/MinhaFoto.png",
    shortcut: "/MinhaFoto.png",
    apple: "/MinhaFoto.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${manrope.variable} ${sora.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
