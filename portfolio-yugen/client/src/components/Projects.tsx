import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Software de Gestão Ocupacional",
      description:
        "Plataforma completa de gestão de saúde ocupacional desenvolvida para a Prefeitura de Três Lagoas. Gerencia dados de mais de 5.000 servidores, com funcionalidades de PCMSO, indicadores de saúde e relatórios estratégicos.",
      technologies: ["Python", "React", "SQL", "Power BI", "Full Stack"],
      impact: "Atende 5.000+ servidores | 17 profissionais na equipe",
      featured: true,
    },
    {
      title: "Dashboard de People Analytics",
      description:
        "Solução de BI focada em análise de indicadores de gestão de pessoas. Inclui turnover, absenteísmo, diversidade, engajamento e produtividade com visualizações interativas e modelagem preditiva.",
      technologies: ["Power BI", "SQL", "Análise Estatística", "DAX"],
      impact: "Redução de 15% em turnover | Insights em tempo real",
      featured: true,
    },
    {
      title: "Portfólio Profissional",
      description:
        "Site responsivo de portfólio profissional com design moderno e otimizado para conversão. Destaca trajetória, expertise e projetos com navegação intuitiva e performance otimizada.",
      technologies: ["React", "Tailwind CSS", "TypeScript", "Responsive Design"],
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

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projetos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Projetos Destacados</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções que transformam dados em decisões estratégicas
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all border-l-4 border-l-primary"
            >
              <div className="h-2 bg-gradient-to-r from-primary to-primary/50" />
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
                  <Badge className="bg-primary text-primary-foreground">Destaque</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/80 leading-relaxed">{project.description}</p>

                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-2">Tecnologias</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="bg-primary/5 rounded-lg p-3 border border-primary/10">
                  <p className="text-sm font-semibold text-primary">{project.impact}</p>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Github size={16} className="mr-2" />
                    Código
                  </Button>
                  <Button size="sm" className="flex-1">
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
            <h3 className="text-2xl font-bold mb-6">Outros Projetos</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {otherProjects.map((project, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-foreground/80">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
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
