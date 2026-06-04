'use client';

import React, { useState } from 'react';
import { 
  sucuriuCoreMetrics, 
  sucuriuTimeline, 
  stakeholders, 
  statisticalModels, 
  minitabAnovaOutput, 
  fmeaOutput, 
  dmaicRoadmap, 
  pipelinesAnalytics, 
  sucuriuPestel 
} from '@/lib/sucuriu/mockData';

export const SucuriuMinitabConsole: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'SIX_SIGMA' | 'ANOVA' | 'FMEA' | 'DMAIC' | 'PEOPLE_ANALYTICS' | 'PESTEL' | 'CRONOGRAMA' | 'GOVERNANCA'>('SIX_SIGMA');
  const [isTimelineModalOpen, setIsTimelineModalOpen] = useState(false);

  return (
    <>
      {isTimelineModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-[#050505] border border-[#d97706] rounded-none max-w-4xl w-full max-h-[85vh] overflow-y-auto p-6 relative font-mono">
            <button
              onClick={() => setIsTimelineModalOpen(false)}
              className="absolute top-4 right-4 bg-[#0c0c0c] border border-[#1c1c1c] text-[#d97706] px-3 py-1 text-sm rounded-none"
            >
              [ FECHAR CONSOLE ]
            </button>

            <h2 className="text-lg font-bold text-[#0077ff] mb-4">Linha do Tempo — Visualização Gráfica (Minitab Style)</h2>

            <div className="relative">
              <div className="absolute left-8 top-6 bottom-6 w-px bg-[#1c1c1c]" />
              <div className="space-y-6 pl-20">
                {sucuriuTimeline.map((node, idx) => {
                  const colorClass = node.relevancia === 'Alta (Crítica)'
                    ? 'bg-[#ff3b3b] border-[#7a1a1a]'
                    : node.relevancia === 'Estratégica'
                      ? 'bg-[#0077ff] border-[#004bb5]'
                      : 'bg-[#6b7280] border-[#4b5563]';

                  const badgeClass = node.relevancia === 'Alta (Crítica)'
                    ? 'bg-[#2b0505] text-[#ff6b6b] border border-[#7a1a1a]'
                    : node.relevancia === 'Estratégica'
                      ? 'bg-[#001433] text-[#7ec3ff] border border-[#004bb5]'
                      : 'bg-[#0b0b0b] text-[#bdbdbd] border border-[#2f3133]';

                  return (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-12 flex flex-col items-center">
                        <div className={`w-4 h-4 ${colorClass} rounded-none border`}></div>
                        <div className="flex-1 w-px bg-[#1c1c1c] mt-2" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-[#d1d1d1] font-mono">{node.data}</div>
                          <span className={`px-2 py-0.5 text-xs font-bold ${badgeClass} rounded-none`}>{node.relevancia}</span>
                        </div>
                        <div className="mt-1 text-lg font-bold text-[#eaeaea]">{node.titulo}</div>
                        <div className="mt-1 text-sm text-gray-400 leading-relaxed">{node.resumo}</div>
                        {node.linkOficial ? (
                          <a href={node.linkOficial} target="_blank" rel="noreferrer" className="mt-2 inline-block text-[#0077ff] hover:text-[#d97706] underline rounded-none">Fonte oficial ↗</a>
                        ) : null}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="bg-[#050505] text-[#eaeaea] p-6 md:p-8 border border-[#1c1c1c] font-mono text-left w-full mx-auto rounded-none selection:bg-[#d97706] selection:text-black">
      
      {/* Terminal Header */}
      <div className="border-b border-[#d97706] pb-6 mb-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
          <div>
            <span className="bg-[#d97706] text-black text-[10px] px-2 py-0.5 font-bold uppercase tracking-wider rounded-none">
              MINITAB 21.4 COMPREHENSIVE SUITE — UNIFIED 360° REPORT
            </span>
            <h1 className="text-2xl font-bold mt-3 tracking-tight text-white uppercase">
              Projeto Sucuriú — Macroambiente e Arquitetura Estatística
            </h1>
          </div>
          <div className="text-right text-xs text-gray-500 font-bold bg-[#111] p-2 border border-[#222]">
            AUDITORIA INTERNA: 2026
          </div>
        </div>

        {/* Resumo de Indicadores Rápidos */}
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-2 text-[10px] border-t border-[#1c1c1c] pt-4">
          <div><span className="text-gray-500">CAPEX COMPLETO:</span> <span className="text-[#d97706] font-bold">{sucuriuCoreMetrics.investimentoTotal}</span></div>
          <div><span className="text-gray-500">PRODUÇÃO ALVO:</span> <span className="text-white font-bold">{sucuriuCoreMetrics.capacidadeProducao}</span></div>
          <div><span className="text-gray-500">BASE FLORESTAL:</span> <span className="text-white font-bold">{sucuriuCoreMetrics.baseFlorestal}</span></div>
          <div><span className="text-gray-500">MATRIZ BIOENERGIA:</span> <span className="text-white font-bold">{sucuriuCoreMetrics.matrizEnergetica}</span></div>
        </div>
        
        {/* Status Tracker 2026 */}
        <div className="mt-2 text-[11px] bg-[#0c0c0c] p-2 border border-[#151515] text-gray-400 space-y-0.5">
          <div>• <span className="text-gray-500">AVANÇO GLOBAL DE ENGENHARIA:</span> <span className="text-[#00ff66] font-bold">{sucuriuCoreMetrics.statusGlobal}</span></div>
          <div>• <span className="text-gray-500">MONTAGEM INDUSTRIAL VALMET:</span> <span className="text-blue-400 font-bold">{sucuriuCoreMetrics.montagemCivil}</span></div>
          <div>• <span className="text-gray-500">HEADCOUNT ATIVO EM CAMPO:</span> <span className="text-white font-bold">{sucuriuCoreMetrics.headcountCampo}</span></div>
          <div>• <span className="text-gray-500">FINANCIAMENTO ESTRUTURADO:</span> <span className="text-gray-400">{sucuriuCoreMetrics.financiamentoEstruturado}</span></div>
        </div>
      </div>

      {/* Abas Horizontais Dinâmicas (Zero Radius) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:flex flex-wrap gap-[2px] mb-6">
        {([
          { id: 'SIX_SIGMA', label: '1. Regressão & Filas' },
          { id: 'ANOVA', label: '2. Output ANOVA' },
          { id: 'FMEA', label: '3. Matriz FMEA' },
          { id: 'DMAIC', label: '4. Roadmap DMAIC' },
          { id: 'PEOPLE_ANALYTICS', label: '5. People Analytics' },
          { id: 'PESTEL', label: '6. Macro PESTEL' },
          { id: 'CRONOGRAMA', label: '7. Linha do Tempo' },
          { id: 'GOVERNANCA', label: '8. Governança' }
        ] as const).map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-2 px-3 text-[10px] font-bold uppercase transition-all duration-300 border-none cursor-pointer rounded-none text-center flex-1 ${
              activeTab === tab.id ? 'bg-[#d97706] text-black' : 'bg-[#121212] text-gray-500 hover:bg-[#1c1c1c] hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* RENDERIZAÇÃO DE ABAS */}

      {/* ABA 1: MODELOS REGRESSÃO E FILAS */}
      {activeTab === 'SIX_SIGMA' && (
        <div className="space-y-4">
          <div className="overflow-x-auto border border-[#1c1c1c]">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="bg-[#141414] border-b border-[#1c1c1c] text-gray-500 text-[10px]">
                  <th className="p-3 w-1/4">Metodologia</th>
                  <th className="p-3 w-1/4">Equação / Formulação</th>
                  <th className="p-3 w-1/3">Aplicação Operacional</th>
                  <th className="p-3">Validação & Premissas</th>
                </tr>
              </thead>
              <tbody>
                {statisticalModels.map((m, idx) => (
                  <tr key={idx} className="border-b border-[#111] bg-[#080808] hover:bg-[#0c0c0c] transition-colors">
                    <td className="p-3 font-bold text-white border-r border-[#1c1c1c]">{m.metodologia}</td>
                    <td className="p-3 text-blue-400 font-bold bg-[#040404] border-r border-[#1c1c1c] text-center select-all">{m.equacaoFormula}</td>
                    <td className="p-3 text-gray-300 border-r border-[#1c1c1c] leading-relaxed">{m.aplicacaoSucuriu}</td>
                    <td className="p-3 text-[11px] text-gray-500 space-y-1">
                      <div><strong className="text-gray-400">Alvo:</strong> {m.metricaValidacao.map(v => `${v.nome}: ${v.valor}`).join(' | ')}</div>
                      <div className="text-[10px] border-t border-[#151515] pt-1 mt-1"><strong className="text-gray-400">Premissa:</strong> {m.premissaEstatistica.join(' ')}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ABA 2: ANOVA */}
      {activeTab === 'ANOVA' && (
        <div className="space-y-4">
          <div className="bg-[#080808] border border-[#1c1c1c] p-4 space-y-3">
            <h3 className="text-xs font-bold text-[#0077ff] uppercase">{minitabAnovaOutput.titulo}</h3>
            <div className="bg-[#030303] p-3 border border-[#151515] space-y-1 text-xs text-gray-400">
              <div><strong>Hipótese Nula (H₀):</strong> {minitabAnovaOutput.hipoteseNula}</div>
              <div><strong>Hipótese Alternativa (H₁):</strong> {minitabAnovaOutput.hipoteseAlternativa}</div>
            </div>
            <div className="overflow-x-auto border border-[#1c1c1c]">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="bg-[#141414] border-b border-[#1c1c1c] text-gray-500 text-[10px]">
                    <th className="p-2.5">Fonte</th>
                    <th className="p-2.5">DF</th>
                    <th className="p-2.5">SS</th>
                    <th className="p-2.5">MS</th>
                    <th className="p-2.5">F-Value</th>
                    <th className="p-2.5 text-blue-400">p-value</th>
                  </tr>
                </thead>
                <tbody>
                  {minitabAnovaOutput.tabela.map((row, idx) => (
                    <tr key={idx} className="border-b border-[#111] bg-[#050505] text-gray-300">
                      <td className="p-2.5 font-bold text-white">{row.fonte}</td>
                      <td className="p-2.5">{row.df}</td>
                      <td className="p-2.5">{row.ss}</td>
                      <td className="p-2.5">{row.ms ? row.ms.toFixed(2) : '*'}</td>
                      <td className="p-2.5 font-bold">{row.fStat ? row.fStat : '*'}</td>
                      <td className={`p-2.5 font-bold ${row.pValue !== null && row.pValue < 0.05 ? 'text-[#00ff66]' : ''}`}>{row.pValue !== null ? row.pValue.toFixed(4) : '*'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-[#0c0c0c] p-3 text-xs border-l-2 border-[#00ff66] text-gray-400 leading-relaxed">
              <strong>Conclusão Minitab:</strong> {minitabAnovaOutput.conclusao}
            </div>
          </div>
        </div>
      )}

      {/* ABA 3: FMEA */}
      {activeTab === 'FMEA' && (
        <div className="overflow-x-auto border border-[#1c1c1c]">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-[#141414] border-b border-[#1c1c1c] text-gray-500 text-[10px]">
                <th className="p-3">Subsistema</th>
                <th className="p-3">Modo de Falha</th>
                <th className="p-3">Efeito Severo</th>
                <th className="p-3 text-center">S</th>
                <th className="p-3 text-center">O</th>
                <th className="p-3 text-center">D</th>
                <th className="p-3 text-center text-red-400">NPR</th>
                <th className="p-3">Ação Preventiva</th>
              </tr>
            </thead>
            <tbody>
              {fmeaOutput.map((item, idx) => (
                <tr key={idx} className="border-b border-[#111] bg-[#080808] text-gray-300">
                  <td className="p-3 font-bold text-white border-r border-[#1c1c1c]">{item.componente}</td>
                  <td className="p-3 text-gray-400 border-r border-[#1c1c1c]">{item.falha}</td>
                  <td className="p-3 text-gray-400 border-r border-[#1c1c1c]">{item.efeito}</td>
                  <td className="p-3 text-center border-r border-[#1c1c1c]">{item.s}</td>
                  <td className="p-3 text-center border-r border-[#1c1c1c]">{item.o}</td>
                  <td className="p-3 text-center border-r border-[#1c1c1c]">{item.d}</td>
                  <td className="p-3 text-center font-bold text-red-400 bg-[#040404] border-r border-[#1c1c1c]">{item.npr}</td>
                  <td className="p-3 text-[#00ff66] leading-relaxed">{item.acao}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* ABA 4: DMAIC */}
      {activeTab === 'DMAIC' && (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
          {dmaicRoadmap.map((step, idx) => (
            <div key={idx} className="bg-[#080808] border border-[#1c1c1c] p-4 space-y-1 hover:border-[#d97706] transition-colors">
              <div className="text-xs font-bold text-white border-b border-[#1c1c1c] pb-1">{step.fase}</div>
              <p className="text-[11px] text-gray-400 leading-relaxed">{step.escopo}</p>
            </div>
          ))}
        </div>
      )}

      {/* ABA 5: PEOPLE ANALYTICS PREDITIVO */}
      {activeTab === 'PEOPLE_ANALYTICS' && (
        <div className="space-y-3">
          {pipelinesAnalytics.map((p, idx) => (
            <div key={idx} className="bg-[#080808] border border-[#1c1c1c] p-4 space-y-2">
              <div className="flex justify-between items-center border-b border-[#1c1c1c] pb-1.5">
                <h3 className="text-xs font-bold text-white uppercase">{p.indicador}</h3>
                <span className="text-[9px] bg-[#111] px-2 py-0.5 border border-[#222] text-blue-400 font-bold">{p.distribuicao}</span>
              </div>
              <div className="bg-[#030303] p-2 text-center text-gray-300 text-xs font-bold font-mono">{p.metricaAlvo}</div>
              <div className="text-xs space-y-2">
                <div>
                  <strong className="text-[#0077ff] block uppercase text-[10px] mb-1">Mecanismos Poka-Yoke de Controle Sistêmico:</strong>
                  <ul className="list-disc pl-4 space-y-0.5 text-gray-400 leading-relaxed">
                    {p.pokaYokeSistemicos.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                </div>
                <div className="text-[11px] border-t border-[#121212] pt-1.5 text-gray-500"><strong>Validação Cruzada:</strong> {p.statusReal2026}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ABA 6: ESTRUTURA PESTEL AVANÇADA */}
      {activeTab === 'PESTEL' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
          {sucuriuPestel.map((item, idx) => (
            <div key={idx} className="bg-[#080808] border border-[#1c1c1c] p-4 space-y-1.5 hover:border-gray-600 transition-colors">
              <div className="font-bold text-white border-b border-[#1c1c1c] pb-1 uppercase tracking-tight">{idx + 1}. Fator {item.fator}</div>
              <p className="text-gray-300 leading-relaxed"><strong className="text-gray-400">Contexto:</strong> {item.contexto}</p>
              <p className="text-gray-400 leading-relaxed"><strong className="text-red-400">Risco:</strong> {item.risco}</p>
              <p className="text-[#00ff66] leading-relaxed"><strong className="text-gray-400">Mitigação:</strong> {item.mitigacao}</p>
            </div>
          ))}
        </div>
      )}

     {/* ABA 7: LINHA DO TEMPO CRONOLÓGICA EXAUSTIVA */}
    {activeTab === 'CRONOGRAMA' && (
    <div className="space-y-4">
      <div>
        <button
          onClick={() => setIsTimelineModalOpen(true)}
          className="rounded-none bg-[#0c0c0c] border border-[#1c1c1c] text-sm px-3 py-2 font-bold"
        >
          📊 VISUALIZAR LINHA DO TEMPO GRÁFICA (MINITAB STYLE)
        </button>
      </div>
      <div className="overflow-x-auto border border-[#1c1c1c]">
        <table className="w-full text-xs text-left border-collapse">
        <thead>
            <tr className="bg-[#141414] border-b border-[#1c1c1c] text-gray-500 text-[10px]">
            <th className="p-3 w-24">Data</th>
            <th className="p-3 w-1/4">Marco do Projeto</th>
            <th className="p-3 w-28">Categoria</th>
            <th className="p-3">Sumário Técnico Auditado</th>
            <th className="p-3 w-40">Origem da Fonte</th>
            <th className="p-3 text-center w-28">Relevância</th>
            </tr>
        </thead>
        <tbody>
            {sucuriuTimeline.map((event, idx) => (
            <tr key={idx} className="border-b border-[#111] bg-[#080808] hover:bg-[#0c0c0c] transition-colors text-gray-400">
                {/* Data */}
                <td className="p-3 font-bold text-white border-r border-[#1c1c1c] font-mono">
                {event.data}
                </td>
                
                {/* Título / Marco */}
                <td className="p-3 font-bold text-gray-200 border-r border-[#1c1c1c] font-sans">
                {event.titulo}
                </td>
                
                {/* Categoria / Tipo */}
                <td className="p-3 text-[10px] text-purple-400 border-r border-[#1c1c1c] uppercase tracking-tighter">
                {event.tipo}
                </td>
                
                {/* Resumo */}
                <td className="p-3 text-xs text-gray-400 leading-relaxed font-sans">
                {event.resumo}
                </td>
                
                {/* Origem da Fonte (Link Oficial) */}
                <td className="p-3 text-[11px] border-r border-[#1c1c1c]">
                <a 
                    href={event.linkOficial} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-400 hover:underline hover:text-[#d97706] transition-colors break-all block font-sans"
                >
                    {event.fonte} ↗
                </a>
                </td>
                
                {/* Relevância Badge */}
                <td className="p-3 text-center font-mono text-[10px]">
                <span className={`px-2 py-0.5 font-bold ${
                    event.relevancia === 'Alta (Crítica)' ? 'bg-red-950/40 text-red-400 border border-red-900/60' :
                    event.relevancia === 'Estratégica' ? 'bg-blue-950/40 text-blue-400 border border-blue-900/60' :
                    'bg-gray-900 text-gray-400 border border-gray-800'
                } rounded-none`}>
                    {event.relevancia}
                </span>
                </td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>
    )}

      {/* ABA 8: MATRIZ DE GOVERNANÇA */}
      {activeTab === 'GOVERNANCA' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {stakeholders.map((person, idx) => (
            <div key={idx} className="bg-[#0d0d0d] border border-[#1c1c1c] p-4 text-xs space-y-1.5 hover:border-yellow-600 transition-colors">
              <span className="text-[9px] text-gray-500 font-bold uppercase block">{person.afiliacao}</span>
              <h4 className="text-sm font-bold text-white mt-0.5">{person.nome}</h4>
              <div className="text-blue-400 font-bold text-[11px] border-b border-[#1c1c1c] pb-1 uppercase">{person.cargo}</div>
              <p className="text-gray-400 leading-relaxed pt-1"><strong className="text-gray-500">Diretriz Estratégica:</strong> {person.impactoDireto}</p>
            </div>
          ))}
        </div>
      )}

      {/* Footer Metodológico */}
      <div className="mt-8 pt-4 border-t border-[#1c1c1c] flex flex-col sm:flex-row sm:justify-between sm:items-center text-[10px] text-gray-600 gap-2">
        <div><strong>Protocolo de Confiabilidade:</strong> Split Temporal de Dados (Treino 2022-2025 / Teste Q2 2026). Mascaramento Hash ativo para LGPD.</div>
        <div className="uppercase font-bold tracking-tight text-right whitespace-nowrap">Mestrado de Dados / MBB: José Cristiano S. Lima</div>
      </div>

    </div>
    </>
  );
};