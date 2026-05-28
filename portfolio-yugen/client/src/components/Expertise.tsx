import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Expertise() {
  const expertise = [
    {
      category: "People Analytics & BI",
      skills: ["Power BI", "Dashboards Executivos", "Análise de Indicadores RH", "Modelagem Preditiva", "SQL"],
      description: "Desenvolvimento de soluções de analytics focadas em gestão de pessoas e tomada de decisão estratégica.",
    },
    {
      category: "Desenvolvimento de Software",
      skills: ["React.js", "Python", "JavaScript", "Full Stack", "HTML/CSS"],
      description: "Criação de aplicações web modernas e escaláveis com foco em user experience.",
    },
    {
      category: "Lean Six Sigma",
      skills: ["Master Black Belt", "Black Belt", "Green Belt", "Análise Estatística", "Otimização de Processos"],
      description: "Metodologias de melhoria contínua e redução de variabilidade em processos.",
    },
    {
      category: "Gestão & Liderança",
      skills: ["Gestão de Equipes", "Gestão de Projetos", "Saúde Ocupacional", "Políticas Públicas", "Consultoria"],
      description: "Liderança estratégica de equipes multidisciplinares e implementação de políticas.",
    },
    {
      category: "Saúde Ocupacional",
      skills: ["PCMSO", "Gestão de Riscos", "Segurança do Trabalho", "Indicadores de Bem-estar", "Compliance"],
      description: "Desenvolvimento de programas de saúde e segurança ocupacional em larga escala.",
    },
    {
      category: "Idiomas",
      skills: ["Português (Nativo)", "Inglês (Profissional)", "Espanhol (Profissional)"],
      description: "Comunicação fluente em múltiplos idiomas para colaboração global.",
    },
  ];

  return (
    <section id="expertise" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma combinação única de competências técnicas, metodológicas e de liderança
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertise.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="text-xl">{item.category}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-white rounded-xl p-8 border border-border">
          <h3 className="text-2xl font-bold mb-6">Certificações Principais</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-lg mb-3 text-primary">Lean Six Sigma</h4>
              <ul className="space-y-2 text-foreground/80">
                <li>✓ Master Black Belt</li>
                <li>✓ Black Belt</li>
                <li>✓ Green Belt</li>
                <li>✓ Yellow Belt</li>
                <li>✓ White Belt</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-3 text-primary">Educação</h4>
              <ul className="space-y-2 text-foreground/80">
                <li>✓ MBA - University of Illinois</li>
                <li>✓ Engenharia de Software - Anhanguera</li>
                <li>✓ Bacharelado - UNOPAR</li>
                <li>✓ Pesquisador DTI II - CNPq</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
