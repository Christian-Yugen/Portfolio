import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Experience() {
  const experiences = [
    {
      title: "Founder & CEO",
      company: "UXBRAS Editech",
      period: "2022 – Presente",
      description: "Liderança estratégica e desenvolvimento de negócios em startups com foco em inovação e tecnologia. Parceria com Microsoft for Startups.",
      tags: ["Liderança", "Startups", "Inovação"],
    },
    {
      title: "Coordenador de Gestão de Políticas Públicas",
      company: "Prefeitura Municipal de Três Lagoas",
      period: "2021 – 2026",
      description: "Liderança de equipe multidisciplinar (17 profissionais) no SESMT. Desenvolvimento e implementação de software de gestão ocupacional para 5.000+ servidores. Coordenação de políticas públicas com foco em eficiência e impacto social.",
      tags: ["Liderança", "Software", "Gestão Ocupacional"],
    },
    {
      title: "Pesquisador DTI II",
      company: "CNPq - Conselho Nacional de Desenvolvimento Científico e Tecnológico",
      period: "Reconhecimento Nacional",
      description: "Reconhecimento de alto prestígio acadêmico e técnico em pesquisa e desenvolvimento tecnológico. Indicador de excelência em inovação e aplicação prática.",
      tags: ["Pesquisa", "P&D", "Inovação"],
    },
    {
      title: "Auditor Interno",
      company: "Associação Brasileira AIJCSUD",
      period: "2019 – 2024",
      description: "Auditoria interna com foco em contabilidade, finanças e conformidade. Otimização de processos administrativos e garantia de conformidade regulatória.",
      tags: ["Auditoria", "Conformidade", "Finanças"],
    },
    {
      title: "Especialista em Saúde Ocupacional",
      company: "Suzano",
      period: "2019 – 2021",
      description: "Gestão e análise de dados de saúde ocupacional. Desenvolvimento de indicadores e relatórios de segurança. Implementação de programas de bem-estar.",
      tags: ["Saúde Ocupacional", "Análise de Dados"],
    },
    {
      title: "Especialista em Saúde Ocupacional",
      company: "JFI Silvicultura",
      period: "2014 – 2019",
      description: "Gestão de programas de saúde e segurança ocupacional. Análise de indicadores de bem-estar e segurança. Desenvolvimento de políticas de saúde.",
      tags: ["Saúde Ocupacional", "Segurança"],
    },
  ];

  return (
    <section id="experiencia" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Experiência Profissional</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma trajetória de crescimento, liderança e impacto em diferentes setores
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary to-primary/20 transform md:-translate-x-1/2" />

            {/* Timeline Items */}
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative md:flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary border-4 border-white rounded-full top-6 transform -translate-x-1.5 md:-translate-x-2" />

                  {/* Content */}
                  <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="pt-6">
                        <div className="space-y-3">
                          <div>
                            <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                            <p className="text-primary font-semibold">{exp.company}</p>
                            <p className="text-sm text-muted-foreground">{exp.period}</p>
                          </div>
                          <p className="text-foreground/80 leading-relaxed">{exp.description}</p>
                          <div className="flex flex-wrap gap-2 pt-2">
                            {exp.tags.map((tag, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
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
