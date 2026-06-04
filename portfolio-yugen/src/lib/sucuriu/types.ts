export interface StakeholderNode {
  nome: string;
  cargo: string;
  afiliacao: string;
  impactoDireto: string;
}

export type DistribuicaoEstatistica =
  | 'Normal'
  | 'LogNormal'
  | 'Poisson'
  | 'Binomial'
  | 'Empírica'
  | 'Monte Carlo'
  | 'Weibull'
  | string;

export interface StatisticalPipeline {
  indicador: string;
  distribuicao: DistribuicaoEstatistica;
  metricaAlvo: string;
  pokaYokeSistemicos: string[];
  statusReal2026: string;
}

export interface MinitabModel {
  metodologia: string;
  equacaoFormula: string;
  aplicacaoSucuriu: string;
  metricaValidacao: { nome: string; valor?: number | string | null; criterioAceitacao?: string }[];
  premissaEstatistica: string[];
}

export interface TimelineEvent {
  data: string;
  tipo: string;
  tema: string;
  titulo: string;
  resumo: string;
  fonte: string;
  linkOficial: string;   // <- Correção do erro ts(2353)
  relevancia: 'Alta (Crítica)' | 'Média (Operacional)' | 'Estratégica'; // <- Correção do erro ts(2353)
}

export interface FmeaRow {
  componente: string;
  falha: string;
  efeito: string;
  s: number;
  o: number;
  d: number;
  npr: number;
  acao: string;
}

export interface DmaicStep {
  fase: string;
  escopo: string;
}

export interface PestelItem {
  fator: 'Político' | 'Econômico' | 'Social' | 'Tecnológico' | 'Ambiental' | 'Legal';
  contexto: string;
  risco: string;
  mitigacao: string;
}