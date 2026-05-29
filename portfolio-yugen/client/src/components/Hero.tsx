import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f5f5f7] pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="pointer-events-none absolute -top-52 left-1/2 h-125 w-125 -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-[clamp(1.05rem,4.5vw,1.9rem)] font-semibold tracking-[0.08em] uppercase text-primary/80 mb-4 whitespace-nowrap">
            Jose Christian Yugen
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-[0.95] text-[#111111]">
            Engenharia e dados
            <span className="block text-[#3d3d3d] mt-2">
              com acabamento premium.
            </span>
          </h1>
          <p className="text-base md:text-xl text-[#5f5f64] mt-8 max-w-3xl mx-auto leading-relaxed">
            Estrategia, software e analytics em um unico sistema de entrega para
            transformar operacoes complexas em resultados mensuraveis.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-10">
            <Button
              size="lg"
              className="group bg-black text-white hover:bg-black/85 rounded-full px-8"
              onClick={() => {
                document
                  .getElementById("projetos")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Ver projetos
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform"
                size={18}
              />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-black/20 bg-white text-[#1f1f22] hover:bg-white/80 px-8"
              onClick={() => {
                window.open("https://linkedin.com/in/joseyugen", "_blank");
              }}
            >
              Conversar no LinkedIn
            </Button>
          </div>
        </div>

        <div className="mt-14 md:mt-20 rounded-4xl bg-[#0d0d0f] text-white p-7 md:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.22)] border border-white/10">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div>
              <p className="text-white/60 text-xs uppercase tracking-[0.18em] mb-2">
                Escala operacional
              </p>
              <p className="text-4xl md:text-5xl font-semibold">5K+</p>
              <p className="text-sm text-white/70 mt-2">
                Servidores acompanhados com visao integrada.
              </p>
            </div>
            <div>
              <p className="text-white/60 text-xs uppercase tracking-[0.18em] mb-2">
                Lideranca tecnica
              </p>
              <p className="text-4xl md:text-5xl font-semibold">17</p>
              <p className="text-sm text-white/70 mt-2">
                Profissionais coordenados em ambiente publico.
              </p>
            </div>
            <div>
              <p className="text-white/60 text-xs uppercase tracking-[0.18em] mb-2">
                Melhoria continua
              </p>
              <p className="text-4xl md:text-5xl font-semibold">5</p>
              <p className="text-sm text-white/70 mt-2">
                Certificacoes Lean Six Sigma aplicadas ao negocio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
