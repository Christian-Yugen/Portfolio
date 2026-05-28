import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const highlights = [
    "MBA pela University of Illinois at Urbana-Champaign",
    "Engenharia de Software (Anhanguera) - 1º da turma em Fullstack",
    "Pesquisador DTI II do CNPq",
    "Master Black Belt em Lean Six Sigma",
    "Parceiro Microsoft for Startups",
    "Founder & CEO da UXBRAS Editech",
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Sobre Mim</h2>
            <p className="text-lg text-muted-foreground">
              Uma trajetória dedicada à excelência técnica e liderança estratégica
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground/80 leading-relaxed">
                Sou um profissional multifacetado com sólida experiência em liderança estratégica, gestão de projetos e desenvolvimento de software. Minha trajetória combina expertise técnica com visão estratégica, sempre com foco em otimização de processos e análise de dados orientada a resultados.
              </p>

              <p className="text-lg text-foreground/80 leading-relaxed">
                Como <strong>Pesquisador DTI II do CNPq</strong>, reconheço a importância da inovação contínua. Meu <strong>MBA pela University of Illinois</strong> e formação em <strong>Engenharia de Software</strong> me proporcionaram uma base sólida para liderar transformações digitais. Minha especialização em <strong>Lean Six Sigma (Master Black Belt)</strong> permite que eu aplique metodologias rigorosas de melhoria contínua em qualquer contexto.
              </p>

              <p className="text-lg text-foreground/80 leading-relaxed">
                Na Prefeitura de Três Lagoas, liderei uma equipe multidisciplinar de 17 profissionais no SESMT, desenvolvendo um software de gestão ocupacional que atende mais de 5.000 servidores. Essa experiência consolidou minha capacidade de transformar dados complexos em insights acionáveis e criar soluções que impactam positivamente a vida das pessoas.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid md:grid-cols-2 gap-4 mt-12">
              {highlights.map((highlight, index) => (
                <Card key={index} className="border-l-4 border-l-primary">
                  <CardContent className="pt-6 flex items-start gap-3">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span className="text-foreground">{highlight}</span>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Core Values */}
            <div className="bg-primary/5 rounded-xl p-8 mt-12 border border-primary/10">
              <h3 className="text-2xl font-bold mb-6">Meus Princípios</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Excelência</h4>
                  <p className="text-muted-foreground">
                    Compromisso com qualidade em cada projeto, sem aceitar mediocridade.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Inovação</h4>
                  <p className="text-muted-foreground">
                    Busca constante por novas soluções e tecnologias que geram impacto real.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Liderança</h4>
                  <p className="text-muted-foreground">
                    Inspirar e capacitar equipes para alcançar objetivos ambiciosos.
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
