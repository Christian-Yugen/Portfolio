import { SucuriuMinitabConsole } from "@/components/sucuriu-console";
import { Header, FooterSection } from "@/components/portfolio-page";

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
