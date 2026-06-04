import { CheckCircle2 } from "lucide-react";

const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={className}>{children}</div>;

const CardContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={className}>{children}</div>;

export default function About() {
  const highlights = [
    "iMBA pela University of Illinois at Urbana-Champaign",
    "Engenharia de Software (Anhanguera) - 1º da turma em Fullstack",
    "Pesquisador DTI B do CNPq",
    "Master Black Belt em Lean Six Sigma",
    "Parceiro Microsoft for Startups",
    "Founder & CEO da UXBRAS Editech",
  ];

  return (
    <section id="sobre" className="py-24 bg-[#f5f5f7]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto rounded-4xl bg-white border border-black/5 shadow-[0_16px_50px_rgba(0,0,0,0.06)] p-8 md:p-12">
          {/* Section Header */}
          <div className="text-center mb-14">
            <h2 className="bg-linear-to-r from-[#dff9ff] via-[#91c8ec] to-[#527ca3] bg-clip-text text-4xl md:text-5xl font-extrabold tracking-[-0.03em] text-transparent mb-4">
              Sobre Mim
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Lideranca tecnica e visao estrategica para transformar operacoes
              complexas em resultados sustentaveis.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 md:gap-5 mb-10">
            <div className="rounded-2xl border border-black/8 bg-[#f5f5f7] p-4 text-center">
              <p className="text-2xl md:text-3xl font-bold text-primary">5K+</p>
              <p className="text-xs text-muted-foreground">
                Servidores em operacao
              </p>
            </div>
            <div className="rounded-2xl border border-black/8 bg-[#f5f5f7] p-4 text-center">
              <p className="text-2xl md:text-3xl font-bold text-primary">17</p>
              <p className="text-xs text-muted-foreground">
                Profissionais liderados
              </p>
            </div>
            <div className="rounded-2xl border border-black/8 bg-[#f5f5f7] p-4 text-center">
              <p className="text-2xl md:text-3xl font-bold text-primary">1</p>
              <p className="text-xs text-muted-foreground">
                Foco: impacto mensuravel
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-10">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground/80 leading-relaxed">
                Atuo na intersecao entre tecnologia, analise de dados e melhoria
                continua para gerar eficiencias reais em ambientes de alta
                complexidade. Minha abordagem combina execucao tecnica rigorosa
                e direcionamento estrategico orientado por evidencias.
              </p>

              <p className="text-lg text-foreground/80 leading-relaxed">
                Como <strong>Pesquisador DTI II do CNPq</strong>, mantenho foco
                constante em inovacao aplicada. O{" "}
                <strong>MBA pela University of Illinois</strong>, a formacao em{" "}
                <strong>Engenharia de Software</strong> e a certificacao{" "}
                <strong>Master Black Belt em Lean Six Sigma</strong> consolidam
                uma base robusta para liderar transformacoes digitais com
                governanca e previsibilidade.
              </p>

              <p className="text-lg text-foreground/80 leading-relaxed">
                Na Prefeitura de Tres Lagoas, liderei uma equipe
                multidisciplinar de 17 profissionais no SESMT e estruturei um
                software de gestao ocupacional para mais de 5.000 servidores.
                Esse ciclo reforcou minha capacidade de transformar dados
                complexos em decisoes executivas e impacto social concreto.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid md:grid-cols-2 gap-4 mt-12">
              {highlights.map((highlight, index) => (
                <Card
                  key={index}
                  className="border border-black/8 shadow-sm hover:shadow-md transition-shadow bg-white"
                >
                  <CardContent className="pt-6 flex items-start gap-3">
                    <CheckCircle2
                      className="text-primary shrink-0 mt-1"
                      size={20}
                    />
                    <span className="text-foreground">{highlight}</span>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Core Values */}
            <div className="bg-[#f5f5f7] rounded-3xl p-8 mt-12 border border-black/8">
              <h3 className="text-2xl font-bold mb-6">Meus Princípios</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Excelência</h4>
                  <p className="text-muted-foreground">
                    Compromisso com qualidade em cada projeto, sem aceitar
                    mediocridade.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Inovação</h4>
                  <p className="text-muted-foreground">
                    Busca constante por novas soluções e tecnologias que geram
                    impacto real.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Liderança</h4>
                  <p className="text-muted-foreground">
                    Inspirar e capacitar equipes para alcançar objetivos
                    ambiciosos.
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
