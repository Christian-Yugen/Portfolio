import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, BarChart3, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-white to-primary/5 flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
                  👋 Bem-vindo ao meu portfólio
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                José Christian
                <span className="block text-primary">Yūgen</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Engenheiro de Software | Pesquisador DTI II CNPq | Especialista em People Analytics
              </p>
            </div>

            <p className="text-lg text-foreground/80 leading-relaxed max-w-lg">
              Transformo dados em decisões estratégicas. Com expertise em Lean Six Sigma (Master Black Belt), desenvolvimento de software e análise avançada de dados, crio soluções que impulsionam eficiência e inovação.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-4 py-8 border-y border-border">
              <div>
                <div className="text-3xl font-bold text-primary">5K+</div>
                <p className="text-sm text-muted-foreground">Servidores Gerenciados</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">17</div>
                <p className="text-sm text-muted-foreground">Profissionais Liderados</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">5</div>
                <p className="text-sm text-muted-foreground">Belts Lean Six Sigma</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => {
                  document.getElementById("projetos")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group"
              >
                Ver Projetos
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  window.open("https://linkedin.com/in/joseyugen", "_blank");
                }}
              >
                Conectar no LinkedIn
              </Button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="hidden md:flex flex-col gap-6">
            {/* Feature Cards */}
            <div className="bg-white rounded-xl p-6 border border-border shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Code2 className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Software Engineering</h3>
                  <p className="text-sm text-muted-foreground">
                    React, Python, Full Stack Development
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-border shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">People Analytics</h3>
                  <p className="text-sm text-muted-foreground">
                    Power BI, Análise Estatística, Dashboards
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-border shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Lean Six Sigma</h3>
                  <p className="text-sm text-muted-foreground">
                    Master Black Belt, Otimização de Processos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
