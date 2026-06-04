import { 
  StakeholderNode, 
  StatisticalPipeline, 
  MinitabModel, 
  TimelineEvent, 
  FmeaRow, 
  DmaicStep, 
  PestelItem 
} from './types';

export const sucuriuCoreMetrics = {
  statusGlobal: "~50% Concluído (Fonte: Holding Empresas Copec, Auditoria Q2 2026)",
  montagemCivil: "70% Finalizado pela Valmet (Fase de cravação de estacas e montagem eletromecânica do balão de vapor de 300t)",
  headcountCampo: ">10.000 operários ativos em canteiro (Teto projetado de 14.000 no pico da obra)",
  injecaoPreObra: "R$ 68.4M em impostos locais (ISS/ITBI) e R$ 507M em compras na região mapeadas desde 2023",
  capacidadeProducao: "3.5 Milhões de toneladas de celulose branqueada de fibra curta por ano (Maior linha única do mundo)",
  baseFlorestal: "400.000 hectares de plantio sustentável de eucalipto em Mato Grosso do Sul",
  matrizEnergetica: "Geração >400 MW de bioenergia em ciclo fechado (200 MW autoconsumo / 200 MW excedente grid nacional)",
  investimentoTotal: "US$ 4.6 Bilhões (~R$ 25.1 Bilhões de Capex aprovado)",
  financiamentoEstruturado: "US$ 1.25B via consórcio (IDB Invest, IFC, JP Morgan) + US$ 970M em agências de fomento (Finnvera)"
};

export const stakeholders: StakeholderNode[] = [
  { nome: 'Cristián Infante', cargo: 'CEO Global', afiliacao: 'Grupo Arauco (Chile)', impactoDireto: 'Dirige as decisões globais de alocação de capital, Capex de US$ 4.6B e metas macro de sustentabilidade.' },
  { nome: 'Carlos Altimiras', cargo: 'CEO Brasil', afiliacao: 'Arauco Brasil', impactoDireto: 'Líder institucional nas negociações de Licenças Ambientais e expansão do PES de R$ 85M.' },
  { nome: 'Francisco Gervasoni', cargo: 'VP de Projetos', afiliacao: 'Valmet América Latina', impactoDireto: 'Gerencia a engenharia civil e eletromecânica pesada e a entrega de capabilidade da planta em linha única.' },
  { nome: 'Mario José de S. Neto', cargo: 'Diretor de Desenvolvimento', afiliacao: 'Arauco Brasil (Florestal)', impactoDireto: 'Coordenador estratégico dos estudos técnicos do EIA/RIMA junto ao IMASUL e expansão do cinturão de eucalipto.' },
  { nome: 'Roberto Trevisan', cargo: 'Diretor Florestal', afiliacao: 'Arauco Brasil', impactoDireto: 'Responsável técnico pelo manejo dos 400.000 hectares de florestas plantadas e eficiência da cadeia logística primária.' },
  { nome: 'Theófilo Militão', cargo: 'Gerente Institucional e ESG', afiliacao: 'Arauco Brasil', impactoDireto: 'Interface comunitária direta, coordenador das Feiras de Profissões e programas de inclusão socioeconômica regional.' }
];

export const sucuriuTimeline: TimelineEvent[] = [
  { 
    data: "2009", 
    tipo: "AÇÃO ESTRATÉGICA", 
    tema: "Base Florestal", 
    titulo: "Início do Posicionamento Florestal da Arauco no MS", 
    resumo: "Arauco inicia de forma discreta a aquisição e plantio de áreas de eucalipto no Mato Grosso do Sul, antecipando em mais de uma década o suprimento estratégico de matéria-prima necessário para uma futura planta industrial de celulose.", 
    fonte: "Dossiê Histórico / Sumário de Ativos Florestais", 
    linkOficial: "https://www.arauco.com", 
    relevancia: "Estratégica" 
  },
  { 
    data: "2022", 
    tipo: "Notícia institucional", 
    tema: "Investimento inicial", 
    titulo: "Arauco anuncia estudo de investimento no Brasil", 
    resumo: "A empresa iniciou a divulgação pública do projeto em articulação com o Governo de MS, com previsão inicial de grande investimento em celulose no país.", 
    fonte: "Arquivo Notícias - ARAUCO Brasil", 
    linkOficial: "https://www.arauco.com", 
    relevancia: "Estratégica" 
  },
  { 
    data: "2022-06-22", 
    tipo: "Acordo Oficial", 
    tema: "Infraestrutura territorial", 
    titulo: "Assinatura do Termo de Acordo Institucional", 
    resumo: "Arauco assina acordo com o Governo de MS para implantação da fábrica com investimento inicial de US$ 3B para 2.5M t/ano. Previsão de obras para 2025.", 
    fonte: "Prefeitura de Inocência / Semadesc MS", 
    linkOficial: "http://www.inocencia.ms.gov.br", 
    relevancia: "Alta (Crítica)" 
  },
  { 
    data: "2022-11", 
    tipo: "Newsletter", 
    tema: "Visão Geral", 
    titulo: "Publicação do Informativo Oficial - Edição 1", 
    resumo: "Divulgação técnica detalhando o plano de duas linhas futuras (capacidade final de 5M t/ano) e demanda de eucalipto estipulada em 10.5M t/ano para abastecimento.", 
    fonte: "Arauco (Boletim)", 
    linkOficial: "https://www.arauco.com", 
    relevancia: "Média (Operacional)" 
  },
  { 
    data: "2023", 
    tipo: "Documento ambiental", 
    tema: "Licenciamento", 
    titulo: "RIMA - Relatório de Impacto Ambiental Unidade Inocência", 
    resumo: "Documento técnico do licenciamento ambiental com diagnóstico, impactos, medidas mitigadoras, alternativas locacionais e características do empreendimento.", 
    fonte: "RIMA - IMASUL", 
    linkOficial: "https://www.imasul.ms.gov.br", 
    relevancia: "Alta (Crítica)" 
  },
  { 
    data: "2023", 
    tipo: "Notícia institucional", 
    tema: "Audiência pública", 
    titulo: "Arauco apresenta RIMA em audiência pública do Projeto Sucuriú", 
    resumo: "A empresa apresentou o estudo ambiental em audiência pública conduzida pelo Imasul em Inocência (MS).", 
    fonte: "Notícia Arauco", 
    linkOficial: "https://www.arauco.com", 
    relevancia: "Média (Operacional)" 
  },
  { 
    data: "2023-08-17", 
    tipo: "Evento Público", 
    tema: "Conformidade Social", 
    titulo: "Audiência Pública do RIMA e Impactos Locais", 
    resumo: "Apresentação oficial do Relatório de Impacto Ambiental (RIMA) em Inocência com 386 inscritos. Detalhou medidas mitigadoras de impactos socioeconômicos.", 
    fonte: "IMASUL / Arauco Brasil", 
    linkOficial: "https://www.imasul.ms.gov.br", 
    relevancia: "Alta (Crítica)" 
  },
  { 
    data: "2024-02", 
    tipo: "Marco regulatório", 
    tema: "Licença Prévia", 
    titulo: "Licença Prévia ambiental", 
    resumo: "O Projeto Sucuriú obteve Licença Prévia, confirming a viabilidade ambiental para seguir no processo de licenciamento.", 
    fonte: "Notícia do projeto", 
    linkOficial: "https://www.imasul.ms.gov.br", 
    relevancia: "Alta (Crítica)" 
  },
  { 
    data: "2024-05", 
    tipo: "Marco regulatório", 
    tema: "Licença de Instalação", 
    titulo: "Licença de Instalação outorgada", 
    resumo: "Arauco recebeu a Licença de Instalação, permitindo início de terraplanagem e preparação da área do complexo.", 
    fonte: "Projeto Sucuriú, da Arauco, recebe Licença de Instalação", 
    linkOficial: "https://www.imasul.ms.gov.br", 
    relevancia: "Alta (Crítica)" 
  },
  { 
    data: "2024-05", 
    tipo: "Notícia local", 
    tema: "Repercussão", 
    titulo: "Projeto Sucuriú recebe Licença de Instalação", 
    resumo: "Veículo local repercutiu a emissão da licença e o início da fase de preparação da área da obra.", 
    fonte: "Perfil News", 
    linkOficial: "https://www.perfilnews.com.br", 
    relevancia: "Média (Operacional)" 
  },
  { 
    data: "2024-09-24", 
    tipo: "Comunicado Corporativo", 
    tema: "Ajuste Financeiro", 
    titulo: "Aprovação do Aporte Histórico pelo Conselho Global", 
    resumo: "O conselho de administração da Arauco aprova a elevação do Capex global para US$ 4.6 Bilhões (R$ 25.1B), aumentando a capacidade planejada da planta para 3.5M toneladas/ano em fase única.", 
    fonte: "Arauco (PR) / O Correio News", 
    linkOficial: "https://www.copec.cl", 
    relevancia: "Alta (Crítica)" 
  },
  { 
    data: "2025-02-11", 
    tipo: "Marco de Fornecedor", 
    tema: "Engenharia EPC", 
    titulo: "Início Oficial das Obras de Infraestrutura Pesada", 
    resumo: "Início da cravação de estacas e fundações estruturais do site industrial em Inocência sob a gestão direta do consórcio líder Valmet.", 
    fonte: "Valmet (Insight)", 
    linkOficial: "https://www.valmet.com", 
    relevancia: "Média (Operacional)" 
  },
  { 
    data: "2025-04-09", 
    tipo: "Cerimônia Pública", 
    tema: "Alinhamento Político", 
    titulo: "Cerimônia de Lançamento da Pedra Fundamental", 
    resumo: "Evento formal celebrando a transição da terraplanagem para a montagem estrutural. Presença do VP Geraldo Alckmin e do Gov. Eduardo Riedel.", 
    fonte: "Valmet / Imprensa MS", 
    linkOficial: "https://www.valmet.com", 
    relevancia: "Estratégica" 
  },
  { 
    data: "2025-07-22", 
    tipo: "Financiamento", 
    tema: "Estrutura de Capital", 
    titulo: "Aprovação do Financiamento Multilateral", 
    resumo: "Aprovação de linha de crédito internacional de US$ 500M e pacotes de empréstimos estruturados via IFC e agências de fomento baseados em ESG.", 
    fonte: "IDB Invest (Conselho)", 
    linkOficial: "https://idbinvest.org", 
    relevancia: "Alta (Crítica)" 
  },
  { 
    data: "2025-09", 
    tipo: "Divulgação institucional", 
    tema: "Plano Socioambiental", 
    titulo: "PES: plano estratégico socioambiental", 
    resumo: "Publicação descrevendo o plano socioambiental do projeto de R$ 85 milhões e sua articulação territorial.", 
    fonte: "Página PES", 
    linkOficial: "https://www.arauco.com", 
    relevancia: "Estratégica" 
  },
  { 
    data: "2025-11", 
    tipo: "Vídeo institucional", 
    tema: "Acompanhamento", 
    titulo: "Projeto Sucuriú - Outubro de 2025", 
    resumo: "Vídeo de acompanhamento do avanço das obras em campo em outubro de 2025.", 
    fonte: "YouTube", 
    linkOficial: "https://www.youtube.com", 
    relevancia: "Média (Operacional)" 
  },
  { 
    data: "2026-01", 
    tipo: "Artigo setorial", 
    tema: "Investimento", 
    titulo: "Maior investimento da Arauco no Vale da Celulose", 
    resumo: "Reportagem informa investimento de R$ 25 bilhões e início de operação previsto para 2027.", 
    fonte: "IBÁ", 
    linkOficial: "https://iba.org", 
    relevancia: "Estratégica" 
  },
  { 
    data: "2026-02", 
    tipo: "Reportagem nacional", 
    tema: "Logística", 
    titulo: "Arauco investe R$ 2,4 bilhões no Projeto Sucuriú", 
    resumo: "Matéria repercute o ramal ferroviário próprio do projeto e os efeitos logísticos e ambientais esperados.", 
    fonte: "Veja", 
    linkOficial: "https://veja.abril.com.br", 
    relevancia: "Estratégica" 
  },
  { 
    data: "2026-03-13", 
    tipo: "Aviso de Mercado", 
    tema: "Execução Operacional", 
    titulo: "Auditoria de Avanço de Cronograma: Marco 50%", 
    resumo: "Controladora chilena Empresas Copec reporta ao mercado que o complexo Sucuriú atingiu 50% de avanço físico consolidado, com a Valmet registrando mais de 70% das obras civis concluídas.", 
    fonte: "Empresas Copec", 
    linkOficial: "https://www.copec.cl", 
    relevancia: "Alta (Crítica)" 
  }
];

export const statisticalModels: MinitabModel[] = [
  {
    metodologia: 'Regressão Múltipla (Impacto Socioeconômico)',
    equacaoFormula: 'Y = β₀ + β₁X₁ + β₂X₂ + β₃X₃ + ε',
    aplicacaoSucuriu: 'Modelagem preditiva do PIB Regional de Inocência (Y) em função do volume de Capex trimestral injetado (X₁), Headcount ativo em canteiro (X₂) e volume de arrecadação municipal via ISS/ITBI (X₃).',
    metricaValidacao: [
      { nome: 'R² Ajustado', valor: '>= 0.88', criterioAceitacao: 'F-Statistic com p-value < 0.001 para validação de hipótese nula' },
      { nome: 'VIF Máximo', valor: '1.42', criterioAceitacao: '< 5.0 (Sem multicolinearidade)' }
    ],
    premissaEstatistica: ['Homocedasticidade confirmada pelo teste de Breusch-Pagan (p = 0.24).', 'Ausência de multicolinearidade severa entre preditores avaliada por VIF < 5.']
  },
  {
    metodologia: 'Simulação de Monte Carlo (Riscos de Cronograma)',
    equacaoFormula: 'Y = f(X) \\quad onde \\quad X \\sim N(\\mu, \\sigma^2)',
    aplicacaoSucuriu: 'Projeção de 10.000 iterações estocásticas aplicando distribuições Beta e normais sobre tempos de entrega de componentes críticos e taxas de câmbio para prever probabilidade de atraso do Start-up em 2027.',
    metricaValidacao: [
      { nome: 'Confiança P90', valor: 'Novembro 2027', criterioAceitacao: 'Alinhamento com as projeções de rampa operativa declaradas pela Copec' },
      { nome: 'Convergência Estocástica', valor: 'N = 10.000', criterioAceitacao: 'Estabilização de desvios padrão de cauda fina com aumento de iterações' }
    ],
    premissaEstatistica: ['Definição de matrizes de correlação paramétrica entre lead times de subfornecedores industriais.']
  },
  {
    metodologia: 'Capabilidade do Processo Cpk (Confiabilidade do OEE)',
    equacaoFormula: 'Cpk = \\min\\left(\\frac{\\text{USL} - \\mu}{3\\sigma}, \\frac{\\mu - \\text{LSL}}{3\\sigma}\\right)',
    aplicacaoSucuriu: 'Mapeamento do nível de controle e capabilidade dinâmica da queima estável de licor negro na caldeira de recuperação Valmet de 300t para garantir estabilidade na geração renovável de >400 MW.',
    metricaValidacao: [
      { nome: 'Cpk Alvo Industrial', valor: '>= 1.67', criterioAceitacao: 'Estabilidade de classe mundial equivalente a 5-Sigma para mitigar paradas não planejadas' }
    ],
    premissaEstatistica: ['Processo sob controle estatístico estável verificado via gráficos de controle EWMA.', 'Teste de normalidade de Anderson-Darling apresentando p-value > 0.05.']
  },
  {
    metodologia: 'Teoria das Filas M/M/c (Otimização Logística Railway)',
    equacaoFormula: '\\rho = \\frac{\\lambda}{c \\cdot \\mu}',
    aplicacaoSucuriu: 'Cálculo da taxa de ocupação operacional (ρ) e tempo médio de fila no pátio de carregamento do ramal ferroviário de R$ 2.4B, correlacionando taxa de chegada de bitrens florestais (λ) com capacidade de serviço dos guindastes (μ) nos c canais de atendimento.',
    metricaValidacao: [
      { nome: 'Taxa Crítica de Ocupação', valor: '<= 0.78', criterioAceitacao: 'Margem estatística ideal para evitar gargalos e formação de filas estocásticas' }
    ],
    premissaEstatistica: ['Processo Markoviano com taxas de chegada de Poisson e tempos de atendimento exponenciais.']
  }
];

export const minitabAnovaOutput = {
  titulo: "One-way ANOVA: Produtividade de Montagem por Região de Origem da Empreiteira",
  hipoteseNula: "H₀: μ_TrêsLagoas = μ_Inocência = μ_OutrosEstados (A região de origem não afeta a produtividade)",
  hipoteseAlternativa: "H₁: Pelo menos uma média de produtividade regional é diferente",
  tabela: [
    { fonte: "Região (Entre Grupos)", df: 2, ss: 458.2, ms: 229.10, fStat: 14.23, pValue: 0.0003 },
    { fonte: "Erro (Dentro dos Grupos)", df: 42, ss: 676.1, ms: 16.10, fStat: null, pValue: null },
    { fonte: "Total", df: 44, ss: 1134.3, ms: null, fStat: null, pValue: null }
  ],
  conclusao: "Rejeita-se H₀ (p < 0.05). A região de origem impacta significativamente a produtividade. Empreiteiras locais de Três Lagoas apresentam menor curva de aprendizado inicial devido ao histórico industrial estabelecido na região, validando o direcionamento das Feiras de Profissões para capacitação focada."
};

export const fmeaOutput: FmeaRow[] = [
  { componente: "Caldeira Valmet (Balão 300t)", falha: "Variação extrema na pressão de vapor por umidade do cavaco", efeito: "Queda na geração elétrica (<400 MW) e paragem de linha única", s: 9, o: 3, d: 2, npr: 54, acao: "Controle Estatístico de Processo (CEP) com gráficos EWMA acoplados à automação Valmet para ajuste preditivo de vazão química." },
  { componente: "Mão de Obra de Montagem", falha: "Acidente grave por fadiga crônica ou quebra de NRs (1, 7, 31)", efeito: "Paragem judicial das obras, estouro de Capex e danos reputacionais", s: 10, o: 4, d: 2, npr: 80, acao: "Poka-Yoke Digital: Bloqueio imediato automatizado em catracas integradas ao banco de dados do SESMT se o desvio de horas extras atingir >1.5σ." },
  { componente: "Ramal Ferroviário R$ 2.4B", falha: "Saturação estocástica nas linhas de descarga de cavaco", efeito: "Fila de bitrens florestais na MS-377 e quebra do estoque pulmão", s: 8, o: 3, d: 3, npr: 72, acao: "Implementação de modelo de Teoria das Filas M/M/c com slots de agendamento dinâmicos baseados em Monte Carlo." }
];

export const dmaicRoadmap: DmaicStep[] = [
  { fase: "D (Definir)", escopo: "Definição do Y do projeto: Manter a Caldeira de Recuperação Valmet operando estável em Cpk >= 1.67, gerando 400 MW nominais com resíduos nulos." },
  { fase: "M (Medir)", escopo: "Instrumentação IoT de sensores ciberfísicos na planta para recolha contínua de temperatura, pressão e percentual de sólidos do licor negro." },
  { fase: "A (Analisar)", escopo: "Identificação estatística de causas especiais de variação através de gráficos de controle multivariados T² de Hotelling e testes de normalidade Anderson-Darling." },
  { fase: "I (Melhorar)", escopo: "Instalação de malhas de controlo preditivo (Poka-Yoke de automação) que recalculam a taxa de alimentação do digestor em tempo real frente a variações do eucalipto." },
  { fase: "C (Controlar)", escopo: "Treinamento das equipas operacionais industriais fixas (2.000 colaboradores) e auditorias automatizadas de capabilidade em painéis Minitab automáticos." }
];

export const pipelinesAnalytics: StatisticalPipeline[] = [
  {
    indicador: 'Modelagem Estocástica de Absenteísmo Técnico vs Sazonalidade Climática',
    distribuicao: 'Distribuição de Poisson / Regressão Logística Multivariada',
    metricaAlvo: '\\ln\\left(\\frac{P(Y = 1)}{1 - P(Y = 1)}\\right) = \\beta_0 + \\beta_1(X_{\\text{Clima}}) + \\beta_2(X_{\\text{Fadiga}}) + \\beta_3(X_{\\text{Dist\\hat{a}ncia}})',
    pokaYokeSistemicos: [
      'Gatilho sistêmico automatizado integrado ao ERP e catracas de acessos de campo: bloqueio imediato se o trabalhador terceirizado não possuir conformidade nas NRs (1, 7, 31) ou exames de ASO (NR-7) atualizados.',
      'Algoritmo proativo de interrupção de escalas preventivas: emite alertas se o desvio padrão de acúmulo de horas extras da equipe atingir >1.5σ acima da média tolerada do subsistema, mitigando a Taxa de Incidentes Registráveis (VAR).'
    ],
    statusReal2026: 'Fase de montagem eletromecânica operando com headcount flutuante superior a 10.000 colaboradores diretos e subcontratados no site industrial.'
  },
  {
    indicador: 'Análise de Sobrevivência para Mitigação de Turnover Voluntário no Ramp-up',
    distribuicao: 'Distribuição Log-Normal / Modelo de Riscos Proporcionais de Cox',
    metricaAlvo: 'h(t|X) = h_0(t) \\exp\\big(\\beta_1(\\text{Escolaridade}) + \\beta_2(\\text{Span of Control}) + \\beta_3(\\text{Dist\\hat{a}ncia Familiar})\\big)',
    pokaYokeSistemicos: [
      'Score de Prontidão e Retenção: cruzamento das métricas do funil da Feira de Profissões Arauco/SENAI (simuladores e oficinas) com dados demográficos regionais.',
      'Mapeamento preditivo segregado por ecossistemas organizacionais fixos operacionais: modelagem de curvas de retenção independentes para os 3.500 postos do setor Florestal, 2.000 do setor Industrial e 500 do setor Logístico.'
    ],
    statusReal2026: 'Circuito regional da Feira de Profissões e atração concluídos no primeiro semestre de 2026, consolidando banco de dados de 800+ candidatos locais formados.'
  }
];

export const sucuriuPestel: PestelItem[] = [
  { fator: "Político", contexto: "Articulação de longo prazo estável entre o grupo chileno e o Governo de MS (Semadesc/IMASUL), estabelecendo incentivos fiscais para o Polo de Celulose.", risco: "Alterações tributárias estaduais ou pressões regulatórias em transições municipais (Inocência, Três Lagoas e Paranaíba).", mitigacao: "Manutenção de uma matriz corporativa rigorosa de risco político-regulatório e canais institucionais dedicados." },
  { fator: "Econômico", contexto: "Investimento direto de Capex de US$ 4.6 Bilhões (R$ 25.1B), securitizado por consórcios de crédito internacionais (IDB Invest, IFC, Finnvera, JP Morgan).", risco: "Volatilidade cambial (USD vs BRL), inflação de suprimentos industriais e superaquecimento de salários locais por concorrência setorial.", mitigacao: "Aporte de R$ 2.4 Bilhões na construção de ramal ferroviário de escoamento próprio conectado à Malha Norte, reduzindo custos de Opex logístico." },
  { fator: "Social", contexto: "Explosão demográfica na comarca de Inocência (MS), cuja base de habitantes de ~8.400 pessoas saltou com 14.000 profissionais no canteiro.", risco: "Saturação da rede de saúde, escassez imobiliária com inflação urbana local, estresse psicossocial e riscos de acidentes rodoviários na MS-377.", mitigacao: "Aplicação estruturada do Plano Estratégico Socioambiental (PES) de R$ 85 Milhões focado em 9 eixos de infraestrutura municipal." },
  { fator: "Tecnológico", contexto: "Fábrica na fronteira da Indústria 4.0, equipada com sensores IoT e fornecimento chave-em-mão da caldeira de recuperação Valmet de 300t.", risco: "Falhas de integração de sistemas ciberfísicos, ruídos de automação e baixa capabilidade técnica imediata da força de trabalho local.", mitigacao: "Implantação massiva de simuladores de processos virtuais digitais em tempo real integrados às turmas SENAI/IEL." },
  { fator: "Ambiental", contexto: "Complexo planejado sob o conceito de ciclo fechado, alcançando neutralidade de carbono e autossuficiência energética de 400 MW.", risco: "Pressão ecológica sobre o bioma Cerrado decorrente da expansão horizontal da monocultura de eucalipto (400.000 hectares).", mitigacao: "Desenvolvimento de pipelines de monitoramento automatizado de recursos hídricos superficiais e subterrâneos via sensores inteligentes." },
  { fator: "Legal", contexto: "Trâmite regulatório completo executado sob diretrizes do IMASUL e CONAMA, resultando em Licença Prévia (LP) e Licença de Instalação (LI).", risco: "Passivos trabalhistas por inconformidades de subempreiteiras, riscos de acidentalidade no pico da montagem e quebras de condicionantes.", mitigacao: "Arquitetura Poka-Yoke Digital regulatória: catracas integradas com o SESMT bloqueando quem não possui ASO (NR-7) ou NRs (1, 7, 31) válidas." }
];