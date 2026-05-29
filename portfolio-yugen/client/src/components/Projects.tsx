import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Software de Gestão Ocupacional",
      context:
        "Processos ocupacionais descentralizados e baixa visibilidade executiva para tomada de decisao.",
      approach:
        "Desenvolvimento de plataforma full stack com PCMSO, indicadores assistenciais e trilhas de governanca.",
      technologies: ["Python", "React", "SQL", "Power BI", "Full Stack"],
      impact:
        "5.000+ servidores monitorados e operacao de 17 profissionais com fluxo integrado",
      result: [
        "Gestao orientada a dados",
        "Padronizacao operacional",
        "Escalabilidade institucional",
      ],
      featured: true,
    },
    {
      title: "Dashboard de People Analytics",
      context:
        "Decisoes de RH baseadas em consolidacoes manuais e pouca previsibilidade de risco.",
      approach:
        "Construcao de camada analitica com KPIs de turnover, absenteismo, engajamento e diversidade em paineis executivos.",
      technologies: ["Power BI", "SQL", "Análise Estatística", "DAX"],
      impact:
        "Reducao de 15% em turnover e leitura em tempo real do desempenho organizacional",
      result: [
        "Acompanhamento continuo",
        "Acoes preventivas",
        "Priorizacao por impacto",
      ],
      featured: true,
    },
    {
      title: "Portfólio Profissional",
      description:
        "Site responsivo de portfólio profissional com design moderno e otimizado para conversão. Destaca trajetória, expertise e projetos com navegação intuitiva e performance otimizada.",
      technologies: [
        "React",
        "Tailwind CSS",
        "TypeScript",
        "Responsive Design",
      ],
      impact: "Design moderno | SEO otimizado",
      featured: false,
    },
    {
      title: "Sistema de Auditoria Interna",
      description:
        "Plataforma para gestão de processos de auditoria interna com rastreamento de conformidade, documentação e relatórios automatizados.",
      technologies: ["JavaScript", "HTML/CSS", "Gestão de Dados"],
      impact: "Conformidade regulatória | Automação de processos",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projetos" className="py-24 bg-[#0b0b0d] text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            Projetos Destacados
          </h2>
          <p className="text-lg text-white/65 max-w-2xl mx-auto">
            Cases com foco em resultado mensuravel, governanca e impacto
            continuo
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden border border-white/12 bg-white/5 shadow-sm hover:shadow-xl transition-all rounded-4xl backdrop-blur"
            >
              <div className="h-1.5 bg-linear-to-r from-primary to-primary/40" />
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-2xl pr-4">
                    {project.title}
                  </CardTitle>
                  <Badge className="bg-white/10 text-white border border-white/20 shrink-0">
                    Case
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/55 mb-1">
                      Contexto
                    </p>
                    <p className="text-sm text-white/80 leading-relaxed">
                      {project.context}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/55 mb-1">
                      Abordagem
                    </p>
                    <p className="text-sm text-white/80 leading-relaxed">
                      {project.approach}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-white/60 mb-2">
                    Tecnologias
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge
                        key={idx}
                        className="text-xs bg-white/8 text-white border border-white/15 hover:bg-white/8"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-primary/18 p-4 border border-primary/20">
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/65 mb-2">
                    Resultado
                  </p>
                  <p className="text-sm font-semibold text-white mb-2">
                    {project.impact}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {(project.result ?? []).map((item, itemIndex) => (
                      <Badge
                        key={itemIndex}
                        className="text-[11px] bg-white/10 text-white border border-white/15 hover:bg-white/10"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-white/25 bg-transparent text-white hover:bg-white/10"
                  >
                    <Github size={16} className="mr-2" />
                    Código
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-white text-black hover:bg-white/85"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Ver Projeto
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <h3 className="text-2xl font-semibold mb-6">Outros Projetos</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {otherProjects.map((project, index) => (
                <Card
                  key={index}
                  className="border border-white/10 bg-white/5 rounded-3xl hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-white/75">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge
                          key={idx}
                          className="text-xs bg-white/8 text-white border border-white/15 hover:bg-white/8"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
