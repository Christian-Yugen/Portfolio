import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      <Header />
      <Hero />
      <About />
      <Expertise />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
