/*import PortfolioPage from "@/components/portfolio-page";

export default function Page() {
  return <PortfolioPage />;
}
*/  

"use client";

import dynamic from "next/dynamic";
import { Header, FooterSection } from "@/components/portfolio-page";

// Força o Next.js a carregar o console mestre ignorando conflitos de compilação pesada
const SucuriuMinitabConsole = dynamic(
  () => import("@/components/sucuriu-console").then((mod) => mod.SucuriuMinitabConsole),
  { ssr: false }
);

export default function SucuriuPage() {
  return (
    <main className="no-round min-h-screen bg-[#000000] text-[#ffffff]">
      <Header />
      <div className="container mx-auto px-4 md:px-8 py-8">
        <SucuriuMinitabConsole />
      </div>
      <FooterSection />
    </main>
  );
}