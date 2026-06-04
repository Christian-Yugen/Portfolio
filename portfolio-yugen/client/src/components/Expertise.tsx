import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Expertise() {
  const expertise = [
    {
      category: "People Analytics & BI",
      skills: [
        "Power BI",
        "Dashboards Executivos",
        "Análise de Indicadores RH",
        "Modelagem Preditiva",
        "SQL",
      ],
      description:
        "Arquitetura de indicadores e paineis executivos para acelerar decisoes de gestao de pessoas.",
      value: "Decisao orientada por evidencias",
    },
    {
      category: "Desenvolvimento de Software",
      skills: ["React.js", "Python", "JavaScript", "Full Stack", "HTML/CSS"],
      description:
        "Construcao de produtos digitais escalaveis com foco em usabilidade, performance e manutencao.",
      value: "Entrega tecnica com foco de produto",
    },
    {
      category: "Lean Six Sigma",
      skills: [
        "Master Black Belt",
        "Black Belt",
        "Green Belt",
        "Análise Estatística",
        "Otimização de Processos",
      ],
      description:
        "Aplicacao de metodos robustos para reduzir variabilidade e ampliar previsibilidade operacional.",
      value: "Eficiencia sistemica e padronizacao",
    },
    {
      category: "Gestão & Liderança",
      skills: [
        "Gestão de Equipes",
        "Gestão de Projetos",
        "Saúde Ocupacional",
        "Políticas Públicas",
        "Consultoria",
      ],
      description:
        "Lideranca de times multidisciplinares com alinhamento entre estrategia, execucao e governanca.",
      value: "Times de alta performance",
    },
    {
      category: "Saúde Ocupacional",
      skills: [
        "PCMSO",
        "Gestão de Riscos",
        "Segurança do Trabalho",
        "Indicadores de Bem-estar",
        "Compliance",
      ],
      description:
        "Estruturacao de programas de saude ocupacional com monitoramento de risco e compliance.",
      value: "Seguranca com visao preventiva",
    },
    {
      category: "Idiomas",
      skills: [
        "Português (Nativo)",
        "Inglês (Profissional)",
        "Espanhol (Profissional)",
      ],
      description:
        "Comunicacao fluente para colaborar com stakeholders tecnicos e executivos em contexto global.",
      value: "Colaboracao internacional",
    },
  ];

  return (
    <section id="expertise" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="bg-linear-to-r from-[#dff9ff] via-[#91c8ec] to-[#527ca3] bg-clip-text text-4xl md:text-5xl font-extrabold tracking-[-0.03em] text-transparent mb-4">
            Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Competencias aplicadas para converter estrategia em resultado
            mensuravel
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 md:gap-5 max-w-3xl mx-auto mb-12">
          <div className="rounded-2xl border border-black/8 bg-[#f5f5f7] p-4 text-center shadow-sm">
            <p className="text-2xl md:text-3xl font-bold text-primary">6</p>
            <p className="text-xs text-muted-foreground">
              Eixos de especialidade
            </p>
          </div>
          <div className="rounded-2xl border border-black/8 bg-[#f5f5f7] p-4 text-center shadow-sm">
            <p className="text-2xl md:text-3xl font-bold text-primary">15+</p>
            <p className="text-xs text-muted-foreground">Competencias-chave</p>
          </div>
          <div className="rounded-2xl border border-black/8 bg-[#f5f5f7] p-4 text-center shadow-sm">
            <p className="text-2xl md:text-3xl font-bold text-primary">1</p>
            <p className="text-xs text-muted-foreground">
              Modelo integrado de entrega
            </p>
          </div>
        </div>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertise.map((item, index) => (
            <Card
              key={index}
              className="border border-black/8 bg-white shadow-sm hover:shadow-lg transition-all rounded-3xl"
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-3">
                  <CardTitle className="text-xl">{item.category}</CardTitle>
                  <Badge className="bg-black/5 text-foreground border border-black/10">
                    Foco
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="rounded-xl border border-black/8 bg-[#f5f5f7] px-3 py-2">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                    Valor de negocio
                  </p>
                  <p className="text-sm font-semibold text-primary">
                    {item.value}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, idx) => (
                    <Badge
                      key={idx}
                      className="text-xs border border-black/10 bg-white text-foreground hover:bg-white"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-[#f5f5f7] rounded-3xl p-8 border border-black/8 shadow-sm">
          <h3 className="text-2xl font-bold mb-6">Certificações Principais</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-lg mb-3 text-primary">
                Lean Six Sigma
              </h4>
              <ul className="space-y-2 text-foreground/80">
                <li>✓ Master Black Belt</li>
                <li>✓ Black Belt</li>
                <li>✓ Green Belt</li>
                <li>✓ Yellow Belt</li>
                <li>✓ White Belt</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-3 text-primary">
                Educação
              </h4>
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
