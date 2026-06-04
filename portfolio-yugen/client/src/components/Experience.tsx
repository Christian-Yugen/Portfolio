import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Experience() {
  const experiences = [
    {
      title: "Founder & CEO",
      company: "UXBRAS Editech",
      period: "2022 – Presente",
      description:
        "Conducao estrategica da startup com foco em crescimento, posicionamento e inovacao aplicada a educacao e tecnologia.",
      impact:
        "Parceria com Microsoft for Startups e aceleracao da maturidade de produto",
      tags: ["Liderança", "Startups", "Inovação"],
    },
    {
      title: "Coordenador de Gestão de Políticas Públicas",
      company: "Prefeitura Municipal de Três Lagoas",
      period: "2021 – 2026",
      description:
        "Lideranca de equipe multidisciplinar no SESMT com estruturacao de processos, sistema de gestao ocupacional e governanca de dados.",
      impact: "17 profissionais coordenados e operacao para 5.000+ servidores",
      tags: ["Liderança", "Software", "Gestão Ocupacional"],
    },
    {
      title: "Pesquisador DTI II",
      company:
        "CNPq - Conselho Nacional de Desenvolvimento Científico e Tecnológico",
      period: "Reconhecimento Nacional",
      description:
        "Atuacao em pesquisa e desenvolvimento tecnologico com reconhecimento nacional por excelencia tecnica.",
      impact:
        "Credencial de alta relevancia para inovacao e transferencia de conhecimento",
      tags: ["Pesquisa", "P&D", "Inovação"],
    },
    {
      title: "Auditor Interno",
      company: "Associação Brasileira AIJCSUD",
      period: "2019 – 2024",
      description:
        "Atuacao em auditoria interna com foco em contabilidade, financas, risco e conformidade regulatoria.",
      impact:
        "Fortalecimento de controles internos e padronizacao de processos administrativos",
      tags: ["Auditoria", "Conformidade", "Finanças"],
    },
    {
      title: "Especialista em Saúde Ocupacional",
      company: "Suzano",
      period: "2019 – 2021",
      description:
        "Gestao analitica de saude ocupacional, seguranca e indicadores de bem-estar para suporte a decisoes operacionais.",
      impact: "Evolucao dos indicadores de monitoramento e suporte a prevencao",
      tags: ["Saúde Ocupacional", "Análise de Dados"],
    },
    {
      title: "Especialista em Saúde Ocupacional",
      company: "JFI Silvicultura",
      period: "2014 – 2019",
      description:
        "Conducao de programas de saude e seguranca ocupacional com acompanhamento de risco e desenvolvimento de politicas internas.",
      impact:
        "Estruturacao de rotina preventiva e melhoria de compliance operacional",
      tags: ["Saúde Ocupacional", "Segurança"],
    },
  ];

  return (
    <section id="experiencia" className="py-24 bg-[#f5f5f7]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="bg-linear-to-r from-[#dff9ff] via-[#91c8ec] to-[#527ca3] bg-clip-text text-4xl md:text-5xl font-extrabold tracking-[-0.03em] text-transparent mb-4">
            Experiência Profissional
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Jornada executiva orientada a impacto, governanca e entrega
            sustentavel
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto rounded-4xl bg-white border border-black/5 shadow-[0_16px_50px_rgba(0,0,0,0.06)] p-6 md:p-10">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-primary/80 via-primary/50 to-primary/10 transform md:-translate-x-1/2" />

            {/* Timeline Items */}
            <div className="space-y-10">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative md:flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-primary border-2 border-white rounded-full top-7 transform -translate-x-1 md:-translate-x-1.5" />

                  {/* Content */}
                  <div
                    className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}
                  >
                    <Card className="border border-black/8 bg-[#fcfcfd] shadow-sm hover:shadow-lg transition-all rounded-3xl">
                      <CardContent className="pt-6">
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-xl font-bold text-foreground">
                              {exp.title}
                            </h3>
                            <p className="text-primary font-semibold">
                              {exp.company}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {exp.period}
                            </p>
                          </div>
                          <p className="text-foreground/80 leading-relaxed">
                            {exp.description}
                          </p>
                          <div className="rounded-xl border border-black/8 bg-[#f5f5f7] px-3 py-2">
                            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                              Impacto
                            </p>
                            <p className="text-sm font-semibold text-primary">
                              {exp.impact}
                            </p>
                          </div>
                          <div className="flex flex-wrap gap-2 pt-2">
                            {exp.tags.map((tag, idx) => (
                              <Badge
                                key={idx}
                                variant="secondary"
                                className="text-xs"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
