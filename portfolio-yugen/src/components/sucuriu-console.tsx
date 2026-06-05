"use client";

import React, { useState } from "react";
import {
  sucuriuCoreMetrics,
  sucuriuTimeline,
  stakeholders,
  statisticalModels,
  minitabAnovaOutput,
  fmeaOutput,
  dmaicRoadmap,
  pipelinesAnalytics,
  sucuriuPestel,
} from "@/lib/sucuriu/mockData";
import BarMeansChart from "./charts/BarMeansChart";
import TimelineChart from "./charts/TimelineChart";
import BoxPlot from "./charts/BoxPlot";
import TukeyIntervalChart from "./charts/TukeyIntervalChart";

export const FmeaMitigationTableModule: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#121212",
        padding: "16px 0",
        boxSizing: "border-box",
      }}
    >
      {/* TABELA DE EVOLUÇÃO E RECÁLCULO DE RPN */}
      <div
        style={{
          backgroundColor: "#1e1e1e",
          border: "1px solid #2d2d2d",
          borderRadius: "0px", // Cantos 100% retos (zero radius)
          padding: "16px",
          boxSizing: "border-box",
        }}
      >
        <h3
          style={{
            color: "#ffffff",
            fontSize: "14px",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            margin: "0 0 12px 0",
            borderBottom: "2px solid #00ff66", // Linha verde indicando mitigação / sucesso
            paddingBottom: "6px",
          }}
        >
          Ações Corretivas e Evolução do Índice de Prioridade de Risco (RPN
          Final)
        </h3>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            textAlign: "left",
            fontSize: "11px",
            color: "#ffffff",
          }}
        >
          <thead>
            <tr
              style={{
                borderBottom: "1px solid #3d3d3d",
                color: "#aaaaaa",
                backgroundColor: "#151515",
              }}
            >
              <th style={{ padding: "10px 6px" }}>Código/Subsistema</th>
              <th style={{ padding: "10px 6px" }}>
                Ação de Engenharia de Dados / Contramedida Aplicada
              </th>
              <th
                style={{
                  padding: "10px 6px",
                  textAlign: "center",
                  color: "#ff3333",
                }}
              >
                S_0
              </th>
              <th
                style={{
                  padding: "10px 6px",
                  textAlign: "center",
                  color: "#ff3333",
                }}
              >
                O_0
              </th>
              <th
                style={{
                  padding: "10px 6px",
                  textAlign: "center",
                  color: "#ff3333",
                }}
              >
                D_0
              </th>
              <th
                style={{
                  padding: "10px 6px",
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "#ff3333",
                }}
              >
                RPN Bruto
              </th>
              <th
                style={{
                  padding: "10px 6px",
                  textAlign: "center",
                  color: "#00ff66",
                }}
              >
                S_f
              </th>
              <th
                style={{
                  padding: "10px 6px",
                  textAlign: "center",
                  color: "#00ff66",
                }}
              >
                O_f
              </th>
              <th
                style={{
                  padding: "10px 6px",
                  textAlign: "center",
                  color: "#00ff66",
                }}
              >
                D_f
              </th>
              <th
                style={{
                  padding: "10px 6px",
                  textAlign: "right",
                  color: "#00ff66",
                  fontWeight: "bold",
                }}
              >
                RPN Mitigado
              </th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: "1px solid #2d2d2d" }}>
              <td style={{ padding: "10px 6px", fontWeight: "bold" }}>
                S1. Caldeira Valmet
              </td>
              <td style={{ padding: "10px 6px", color: "#cccccc" }}>
                Controle Estatístico de Processo (CEP) via gráficos EWMA
                acoplados à automação industrial.
              </td>
              <td
                style={{
                  padding: "10px 6px",
                  textAlign: "center",
                  color: "#888",
                }}
              >
                9
              </td>
              <td
                style={{
                  padding: "10px 6px",
                  textAlign: "center",
                  color: "#888",
                }}
              >
                6
              </td>
              <td
                style={{
                  padding: "10px 6px",
                  textAlign: "center",
                  color: "#888",
                }}
              >
                4
              </td>
              <td
                style={{
                  padding: "10px 6px",
                  textAlign: "center",
                  color: "#ff3333",
                  fontFamily: "monospace",
                }}
              >
                216
              </td>
              <td
                style={{
                  padding: "10px 6px",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                9
              </td>
              <td
                style={{
                  padding: "10px 6px",
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "#00ff66",
                }}
              >
                2
              </td>
              <td
                style={{
                  padding: "10px 6px",
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "#00ff66",
                }}
              >
                1
              </td>
              <td
                style={{
                  padding: "10px 6px",
                  textAlign: "right",
                  fontWeight: "bold",
                  color: "#00ff66",
                  fontFamily: "monospace",
                }}
              >
                18
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid #2d2d2d" }}>
              <td style={{ padding: "10px 6px", fontWeight: "bold" }}>
                S2. Ramal Ferroviário
              </td>
              <td style={{ padding: "10px 6px", color: "#cccccc" }}>
                Modelo de Teoria das Filas ($M/M/c$) e Simulação de Monte Carlo
                para janelas dinâmicas de bitrens.
              </td>
              <td
                style={{
                  padding: "10px 6px",
                  textAlign: "center",
                  color: "#888",
                }}
              >
                7
              </td>
              <td
                style={{
                  padding: "10px 6px",
                  textAlign: "center",
                  color: "#888",
                }}
              >
                4
              </td>
              <td
                style={{
                  padding: "10px 6px",
                  textAlign: "center",
                  color: "#888",
                }}
              >
                4
              </td>
              <td
                style={{
                  padding: "10px 6px",
                  textAlign: "center",
                  color: "#ff9900",
                  fontFamily: "monospace",
                }}
              >
                112
              </td>
              <td
                style={{
                  padding: "10px 6px",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                7
              </td>
              <td
                style={{
                  padding: "10px 6px",
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "#00ff66",
                }}
              >
                2
              </td>
              <td
                style={{
                  padding: "10px 6px",
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "#00ff66",
                }}
              >
                2
              </td>
              <td
                style={{
                  padding: "10px 6px",
                  textAlign: "right",
                  fontWeight: "bold",
                  color: "#00ff66",
                  fontFamily: "monospace",
                }}
              >
                28
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid #2d2d2d" }}>
              <td style={{ padding: "10px 6px", fontWeight: "bold" }}>
                S3. Mão de Obra Montagem
              </td>
              <td style={{ padding: "10px 6px", color: "#cccccc" }}>
                Poka-Yoke Digital integrado ao SESMT com travamento de catracas
                físicas por estouro de escala em $1.5\\sigma$.
              </td>
              <td
                style={{
                  padding: "10px 6px",
                  textAlign: "center",
                  color: "#888",
                }}
              >
                10
              </td>
              <td
                style={{
                  padding: "10px 6px",
                  textAlign: "center",
                  color: "#888",
                }}
              >
                2
              </td>
              <td
                style={{
                  padding: "10px 6px",
                  textAlign: "center",
                  color: "#888",
                }}
              >
                4
              </td>
              <td
                style={{
                  padding: "10px 6px",
                  textAlign: "center",
                  color: "#00ff66",
                  fontFamily: "monospace",
                }}
              >
                80
              </td>
              <td
                style={{
                  padding: "10px 6px",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                10
              </td>
              <td
                style={{
                  padding: "10px 6px",
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "#00ff66",
                }}
              >
                1
              </td>
              <td
                style={{
                  padding: "10px 6px",
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "#00ff66",
                }}
              >
                1
              </td>
              <td
                style={{
                  padding: "10px 6px",
                  textAlign: "right",
                  fontWeight: "bold",
                  color: "#00ff66",
                  fontFamily: "monospace",
                }}
              >
                10
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid #2d2d2d" }}>
              <td style={{ padding: "10px 6px", fontWeight: "bold" }}>
                S4. Manejo Florestal
              </td>
              <td style={{ padding: "10px 6px", color: "#cccccc" }}>
                Telemetria preditiva IoT em Harvesters associada ao banco de
                talentos de reposição das Feiras de Profissões.
              </td>
              <td
                style={{
                  padding: "10px 6px",
                  textAlign: "center",
                  color: "#888",
                }}
              >
                6
              </td>
              <td
                style={{
                  padding: "10px 6px",
                  textAlign: "center",
                  color: "#888",
                }}
              >
                5
              </td>
              <td
                style={{
                  padding: "10px 6px",
                  textAlign: "center",
                  color: "#888",
                }}
              >
                3
              </td>
              <td
                style={{
                  padding: "10px 6px",
                  textAlign: "center",
                  color: "#ff9900",
                  fontFamily: "monospace",
                }}
              >
                90
              </td>
              <td
                style={{
                  padding: "10px 6px",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                6
              </td>
              <td
                style={{
                  padding: "10px 6px",
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "#00ff66",
                }}
              >
                2
              </td>
              <td
                style={{
                  padding: "10px 6px",
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "#00ff66",
                }}
              >
                2
              </td>
              <td
                style={{
                  padding: "10px 6px",
                  textAlign: "right",
                  fontWeight: "bold",
                  color: "#00ff66",
                  fontFamily: "monospace",
                }}
              >
                24
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid #2d2d2d" }}>
              <td style={{ padding: "10px 6px", fontWeight: "bold" }}>
                S5. Qualificação Local (PEL)
              </td>
              <td style={{ padding: "10px 6px", color: "#cccccc" }}>
                Análise de Sobrevivência (Modelo de Cox) cruzando eNPS
                qualitativo e horas de treinamento SENAI/IEL.
              </td>
              <td
                style={{
                  padding: "10px 6px",
                  textAlign: "center",
                  color: "#888",
                }}
              >
                5
              </td>
              <td
                style={{
                  padding: "10px 6px",
                  textAlign: "center",
                  color: "#888",
                }}
              >
                6
              </td>
              <td
                style={{
                  padding: "10px 6px",
                  textAlign: "center",
                  color: "#888",
                }}
              >
                4
              </td>
              <td
                style={{
                  padding: "10px 6px",
                  textAlign: "center",
                  color: "#ff3333",
                  fontFamily: "monospace",
                }}
              >
                120
              </td>
              <td
                style={{
                  padding: "10px 6px",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                5
              </td>
              <td
                style={{
                  padding: "10px 6px",
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "#00ff66",
                }}
              >
                2
              </td>
              <td
                style={{
                  padding: "10px 6px",
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "#00ff66",
                }}
              >
                2
              </td>
              <td
                style={{
                  padding: "10px 6px",
                  textAlign: "right",
                  fontWeight: "bold",
                  color: "#00ff66",
                  fontFamily: "monospace",
                }}
              >
                20
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid #3d3d3d" }}>
              <td style={{ padding: "10px 6px", fontWeight: "bold" }}>
                S6. Efluentes Rio Sucuriú
              </td>
              <td style={{ padding: "10px 6px", color: "#cccccc" }}>
                Sensores IoT de pH/Vazão monitorados continuamente com travas
                automatizadas de recirculação preventiva.
              </td>
              <td
                style={{
                  padding: "10px 6px",
                  textAlign: "center",
                  color: "#888",
                }}
              >
                10
              </td>
              <td
                style={{
                  padding: "10px 6px",
                  textAlign: "center",
                  color: "#888",
                }}
              >
                2
              </td>
              <td
                style={{
                  padding: "10px 6px",
                  textAlign: "center",
                  color: "#888",
                }}
              >
                5
              </td>
              <td
                style={{
                  padding: "10px 6px",
                  textAlign: "center",
                  color: "#00e5ff",
                  fontFamily: "monospace",
                }}
              >
                100
              </td>
              <td
                style={{
                  padding: "10px 6px",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                10
              </td>
              <td
                style={{
                  padding: "10px 6px",
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "#00ff66",
                }}
              >
                1
              </td>
              <td
                style={{
                  padding: "10px 6px",
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "#00ff66",
                }}
              >
                1
              </td>
              <td
                style={{
                  padding: "10px 6px",
                  textAlign: "right",
                  fontWeight: "bold",
                  color: "#00ff66",
                  fontFamily: "monospace",
                }}
              >
                10
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const DmaicRoadmapModule: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#121212",
        padding: "16px 0",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      {/* SEÇÃO 1: LINHA DO TEMPO VISUAL DO PROCESSO LEAN (GANTT SIMPLIFICADO) */}
      <div
        style={{
          backgroundColor: "#1e1e1e",
          border: "1px solid #2d2d2d",
          borderRadius: "0px",
          padding: "20px",
          boxSizing: "border-box",
          width: "100%",
        }}
      >
        <h3
          style={{
            color: "#ffffff",
            fontSize: "13px",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            margin: "0 0 16px 0",
            borderBottom: "2px solid #0055ff",
            paddingBottom: "6px",
          }}
        >
          Status de Evolução do Ciclo DMAIC - Projeto Sucuriú
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "12px",
            width: "100%",
          }}
        >
          {/* D */}
          <div
            style={{
              borderLeft: "4px solid #00ff66",
              backgroundColor: "#151515",
              padding: "10px",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "#ffffff",
                  fontWeight: "bold",
                  fontSize: "14px",
                }}
              >
                D - Definir
              </span>
              <span
                style={{
                  fontSize: "9px",
                  color: "#00ff66",
                  fontWeight: "bold",
                  backgroundColor: "rgba(0,255,102,0.1)",
                  padding: "2px 4px",
                  fontFamily: "monospace",
                }}
              >
                100%
              </span>
            </div>
            <div
              style={{ fontSize: "10px", color: "#888888", marginTop: "4px" }}
            >
              Marcos e Escopo CAPEX
            </div>
          </div>
          {/* M */}
          <div
            style={{
              borderLeft: "4px solid #00ff66",
              backgroundColor: "#151515",
              padding: "10px",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "#ffffff",
                  fontWeight: "bold",
                  fontSize: "14px",
                }}
              >
                M - Medir
              </span>
              <span
                style={{
                  fontSize: "9px",
                  color: "#00ff66",
                  fontWeight: "bold",
                  backgroundColor: "rgba(0,255,102,0.1)",
                  padding: "2px 4px",
                  fontFamily: "monospace",
                }}
              >
                100%
              </span>
            </div>
            <div
              style={{ fontSize: "10px", color: "#888888", marginTop: "4px" }}
            >
              Coleta Baseline 10k Op.
            </div>
          </div>
          {/* A */}
          <div
            style={{
              borderLeft: "4px solid #00ff66",
              backgroundColor: "#151515",
              padding: "10px",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "#ffffff",
                  fontWeight: "bold",
                  fontSize: "14px",
                }}
              >
                A - Analisar
              </span>
              <span
                style={{
                  fontSize: "9px",
                  color: "#00ff66",
                  fontWeight: "bold",
                  backgroundColor: "rgba(0,255,102,0.1)",
                  padding: "2px 4px",
                  fontFamily: "monospace",
                }}
              >
                100%
              </span>
            </div>
            <div
              style={{ fontSize: "10px", color: "#888888", marginTop: "4px" }}
            >
              ANOVA, FMEA & Ishikawa
            </div>
          </div>
          {/* I */}
          <div
            style={{
              borderLeft: "4px solid #00e5ff",
              backgroundColor: "#151515",
              padding: "10px",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "#ffffff",
                  fontWeight: "bold",
                  fontSize: "14px",
                }}
              >
                I - Incrementar
              </span>
              <span
                style={{
                  fontSize: "9px",
                  color: "#00e5ff",
                  fontWeight: "bold",
                  backgroundColor: "rgba(0,229,255,0.1)",
                  padding: "2px 4px",
                  fontFamily: "monospace",
                }}
              >
                75%
              </span>
            </div>
            <div
              style={{ fontSize: "10px", color: "#888888", marginTop: "4px" }}
            >
              Monte Carlo & Filas M/M/c
            </div>
          </div>
          {/* C */}
          <div
            style={{
              borderLeft: "4px solid #ff9900",
              backgroundColor: "#151515",
              padding: "10px",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "#ffffff",
                  fontWeight: "bold",
                  fontSize: "14px",
                }}
              >
                C - Controlar
              </span>
              <span
                style={{
                  fontSize: "9px",
                  color: "#ff9900",
                  fontWeight: "bold",
                  backgroundColor: "rgba(255,153,0,0.1)",
                  padding: "2px 4px",
                  fontFamily: "monospace",
                }}
              >
                Config
              </span>
            </div>
            <div
              style={{ fontSize: "10px", color: "#888888", marginTop: "4px" }}
            >
              EWMA & Poka-Yoke Digital
            </div>
          </div>
        </div>
      </div>

      {/* SEÇÃO 2: MATRIZ DE ENTREGÁVEIS E MÉTRICAS DE GANHO ESPERADO */}
      <div
        style={{
          backgroundColor: "#1e1e1e",
          border: "1px solid #2d2d2d",
          borderRadius: "0px",
          padding: "16px",
          boxSizing: "border-box",
          width: "100%",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            textAlign: "left",
            fontSize: "11px",
            color: "#ffffff",
          }}
        >
          <thead>
            <tr
              style={{
                borderBottom: "1px solid #3d3d3d",
                color: "#aaaaaa",
                backgroundColor: "#151515",
              }}
            >
              <th style={{ padding: "10px 6px", width: "15%" }}>
                Fase do Ciclo
              </th>
              <th style={{ padding: "10px 6px", width: "25%" }}>
                Objetivo Estratégico
              </th>
              <th style={{ padding: "10px 6px", width: "35%" }}>
                Ferramenta / Entregável na Tela
              </th>
              <th
                style={{
                  padding: "10px 6px",
                  textAlign: "right",
                  width: "15%",
                }}
              >
                Ganho Esperado
              </th>
              <th
                style={{
                  padding: "10px 6px",
                  textAlign: "center",
                  width: "10%",
                }}
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {/* D */}
            <tr style={{ borderBottom: "1px solid #2d2d2d" }}>
              <td
                style={{
                  padding: "12px 6px",
                  fontWeight: "bold",
                  color: "#ffffff",
                }}
              >
                D - DEFINIR
              </td>
              <td style={{ padding: "12px 6px", color: "#cccccc" }}>
                Alinhar metas do Mega CAPEX de US$ 4.5B e capacidade alvo da
                planta de 3.5M t/ano.
              </td>
              <td style={{ padding: "12px 6px" }}>
                <span style={{ color: "#00e5ff", fontWeight: 500 }}>
                  Project Charter
                </span>{" "}
                & Mapeamento SIPOC interligando o cinturão florestal de 400k ha
                até o fluxo da Malha Norte.
              </td>
              <td
                style={{
                  padding: "12px 6px",
                  textAlign: "right",
                  color: "#aaaaaa",
                  fontFamily: "monospace",
                }}
              >
                Alinhamento Macro
              </td>
              <td style={{ padding: "12px 6px", textAlign: "center" }}>
                <span
                  style={{
                    fontSize: "9px",
                    color: "#00ff66",
                    fontWeight: "bold",
                    backgroundColor: "rgba(0,255,102,0.1)",
                    padding: "3px 6px",
                  }}
                >
                  CONCLUÍDO
                </span>
              </td>
            </tr>
            {/* M */}
            <tr style={{ borderBottom: "1px solid #2d2d2d" }}>
              <td
                style={{
                  padding: "12px 6px",
                  fontWeight: "bold",
                  color: "#ffffff",
                }}
              >
                M - MEDIR
              </td>
              <td style={{ padding: "12px 6px", color: "#cccccc" }}>
                Quantificar a linha de base de campo do headcount ativo de
                10.000 operários.
              </td>
              <td style={{ padding: "12px 6px" }}>
                Plano de Coleta de Dados automatizado de horas-máquina e
                auditoria dos{" "}
                <span style={{ color: "#00e5ff", fontWeight: 500 }}>
                  70% de avanço físico da Valmet
                </span>
                .
              </td>
              <td
                style={{
                  padding: "12px 6px",
                  textAlign: "right",
                  color: "#00ff66",
                  fontFamily: "monospace",
                }}
              >
                Amostragem Rígida
              </td>
              <td style={{ padding: "12px 6px", textAlign: "center" }}>
                <span
                  style={{
                    fontSize: "9px",
                    color: "#00ff66",
                    fontWeight: "bold",
                    backgroundColor: "rgba(0,255,102,0.1)",
                    padding: "3px 6px",
                  }}
                >
                  CONCLUÍDO
                </span>
              </td>
            </tr>
            {/* A */}
            <tr style={{ borderBottom: "1px solid #2d2d2d" }}>
              <td
                style={{
                  padding: "12px 6px",
                  fontWeight: "bold",
                  color: "#ffffff",
                }}
              >
                A - ANALISAR
              </td>
              <td style={{ padding: "12px 6px", color: "#cccccc" }}>
                Investigar estatisticamente as causas-raiz de variabilidade e
                gaps de performance.
              </td>
              <td style={{ padding: "12px 6px" }}>
                <span style={{ color: "#00e5ff", fontWeight: 500 }}>
                  Diagrama Ishikawa (6M)
                </span>{" "}
                vinculado ao Output da ANOVA One-Way regional e cruzamento de
                criticidade na Matriz FMEA.
              </td>
              <td
                style={{
                  padding: "12px 6px",
                  textAlign: "right",
                  color: "#ff3333",
                  fontFamily: "monospace",
                }}
              >
                Identificação P-Value
              </td>
              <td style={{ padding: "12px 6px", textAlign: "center" }}>
                <span
                  style={{
                    fontSize: "9px",
                    color: "#00ff66",
                    fontWeight: "bold",
                    backgroundColor: "rgba(0,255,102,0.1)",
                    padding: "3px 6px",
                  }}
                >
                  CONCLUÍDO
                </span>
              </td>
            </tr>
            {/* I */}
            <tr style={{ borderBottom: "1px solid #2d2d2d" }}>
              <td
                style={{
                  padding: "12px 6px",
                  fontWeight: "bold",
                  color: "#ffffff",
                }}
              >
                I - INCREMENTAR
              </td>
              <td style={{ padding: "12px 6px", color: "#cccccc" }}>
                Implementar modelagens preditivas e contramedidas
                socioambientais mitigatórias.
              </td>
              <td style={{ padding: "12px 6px" }}>
                Aplicação do PES de R$ 85M +{" "}
                <span style={{ color: "#00e5ff", fontWeight: 500 }}>
                  Simulação de Monte Carlo (10k iterações)
                </span>{" "}
                e slots da Teoria das Filas ($M/M/c$) ferroviárias.
              </td>
              <td
                style={{
                  padding: "12px 6px",
                  textAlign: "right",
                  color: "#00ff66",
                  fontWeight: "bold",
                  fontFamily: "monospace",
                }}
              >
                +12% Produtividade
              </td>
              <td style={{ padding: "12px 6px", textAlign: "center" }}>
                <span
                  style={{
                    fontSize: "9px",
                    color: "#00e5ff",
                    fontWeight: "bold",
                    backgroundColor: "rgba(0,229,255,0.1)",
                    padding: "3px 6px",
                  }}
                >
                  EXECUÇÃO
                </span>
              </td>
            </tr>
            {/* C */}
            <tr style={{ borderBottom: "1px solid #3d3d3d" }}>
              <td
                style={{
                  padding: "12px 6px",
                  fontWeight: "bold",
                  color: "#ffffff",
                }}
              >
                C - CONTROLAR
              </td>
              <td style={{ padding: "12px 6px", color: "#cccccc" }}>
                Blindar o complexo industrial contra retrocessos através de
                barreiras digitais auto-executáveis.
              </td>
              <td style={{ padding: "12px 6px" }}>
                Ativação do{" "}
                <span style={{ color: "#00e5ff", fontWeight: 500 }}>
                  Poka-Yoke Digital (travamento em 1.5σ de horas extras)
                </span>{" "}
                e gráficos de controle EWMA na caldeira.
              </td>
              <td
                style={{
                  padding: "12px 6px",
                  textAlign: "right",
                  color: "#00ff66",
                  fontWeight: "bold",
                  fontFamily: "monospace",
                }}
              >
                Zero Acidentes
              </td>
              <td style={{ padding: "12px 6px", textAlign: "center" }}>
                <span
                  style={{
                    fontSize: "9px",
                    color: "#ff9900",
                    fontWeight: "bold",
                    backgroundColor: "rgba(255,153,0,0.1)",
                    padding: "3px 6px",
                  }}
                >
                  AUTOMAÇÃO
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const DmaicAnalyticalToolsModule: React.FC = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "16px",
        width: "100%",
        backgroundColor: "#121212",
        padding: "16px 0",
        boxSizing: "border-box",
      }}
    >
      {/* TOOL 1: INFORMATIVO SIPOC (FASE DEFINIR) */}
      <div
        style={{
          backgroundColor: "#1e1e1e",
          border: "1px solid #2d2d2d",
          borderRadius: "0px",
          padding: "16px",
          boxSizing: "border-box",
        }}
      >
        <h4
          style={{
            color: "#00e5ff",
            fontSize: "12px",
            margin: "0 0 12px 0",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            borderBottom: "1px solid #3d3d3d",
            paddingBottom: "6px",
          }}
        >
          SIPOC - Fluxo Macro Ambiental (Fase D)
        </h4>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "60px 1fr",
              fontSize: "11px",
              borderBottom: "1px solid #2d2d2d",
              paddingBottom: "4px",
            }}
          >
            <span
              style={{
                color: "#ff9900",
                fontWeight: "bold",
                fontFamily: "monospace",
              }}
            >
              [S] SUP:
            </span>
            <span style={{ color: "#fff" }}>
              Base Florestal (400k ha) / Valmet
            </span>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "60px 1fr",
              fontSize: "11px",
              borderBottom: "1px solid #2d2d2d",
              paddingBottom: "4px",
            }}
          >
            <span
              style={{
                color: "#ff9900",
                fontWeight: "bold",
                fontFamily: "monospace",
              }}
            >
              [I] INP:
            </span>
            <span style={{ color: "#fff" }}>
              Tora de Eucalipto, Insumos, Energia
            </span>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "60px 1fr",
              fontSize: "11px",
              borderBottom: "1px solid #2d2d2d",
              paddingBottom: "4px",
            }}
          >
            <span
              style={{
                color: "#ff9900",
                fontWeight: "bold",
                fontFamily: "monospace",
              }}
            >
              [P] PRC:
            </span>
            <span style={{ color: "#fff" }}>
              Picagem → Cozimento → Branqueamento
            </span>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "60px 1fr",
              fontSize: "11px",
              borderBottom: "1px solid #2d2d2d",
              paddingBottom: "4px",
            }}
          >
            <span
              style={{
                color: "#ff9900",
                fontWeight: "bold",
                fontFamily: "monospace",
              }}
            >
              [O] OUT:
            </span>
            <span style={{ color: "#fff" }}>
              3.5M t/ano Celulose / 400MW Bioenergia
            </span>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "60px 1fr",
              fontSize: "11px",
            }}
          >
            <span
              style={{
                color: "#ff9900",
                fontWeight: "bold",
                fontFamily: "monospace",
              }}
            >
              [C] CST:
            </span>
            <span style={{ color: "#fff" }}>
              Mercado Global / Grid de Energia Nacional
            </span>
          </div>
        </div>
      </div>

      {/* TOOL 2: DIAGRAMA DE ISHIKAWA 6M (FASE ANALISAR) */}
      <div
        style={{
          backgroundColor: "#1e1e1e",
          border: "1px solid #2d2d2d",
          borderRadius: "0px",
          padding: "16px",
          boxSizing: "border-box",
        }}
      >
        <h4
          style={{
            color: "#00e5ff",
            fontSize: "12px",
            margin: "0 0 12px 0",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            borderBottom: "1px solid #3d3d3d",
            paddingBottom: "6px",
          }}
        >
          Ishikawa (6M) - Causa Raiz do Gap Regional (Fase A)
        </h4>
        <div
          style={{
            height: "100px",
            width: "100%",
            position: "relative",
            marginTop: "10px",
          }}
        >
          {/* Espinha Dorsal Central */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "5px",
              right: "55px",
              height: "2px",
              backgroundColor: "#555555",
            }}
          ></div>
          {/* Efeito/Problema */}
          <div
            style={{
              position: "absolute",
              right: "0",
              top: "35%",
              backgroundColor: "#ff3333",
              color: "#fff",
              fontSize: "9px",
              fontWeight: "bold",
              padding: "4px",
              textAlign: "center",
              width: "50px",
            }}
          >
            GAP DE INOCÊNCIA
          </div>

          {/* Linhas de Causa Macro */}
          {/* Superior Esquerda */}
          <div
            style={{
              position: "absolute",
              top: "10%",
              left: "15%",
              fontSize: "9px",
              color: "#00ff66",
              fontFamily: "monospace",
            }}
          >
            MÉTODO
          </div>
          <div
            style={{
              position: "absolute",
              top: "20%",
              left: "25%",
              width: "1px",
              height: "30px",
              backgroundColor: "#555",
              transform: "rotate(45deg)",
            }}
          ></div>

          {/* Superior Centro */}
          <div
            style={{
              position: "absolute",
              top: "10%",
              left: "45%",
              fontSize: "9px",
              color: "#00ff66",
              fontFamily: "monospace",
            }}
          >
            MÃO DE OBRA
          </div>
          <div
            style={{
              position: "absolute",
              top: "20%",
              left: "55%",
              width: "1px",
              height: "30px",
              backgroundColor: "#555",
              transform: "rotate(45deg)",
            }}
          ></div>

          {/* Inferior Esquerda */}
          <div
            style={{
              position: "absolute",
              bottom: "10%",
              left: "15%",
              fontSize: "9px",
              color: "#00ff66",
              fontFamily: "monospace",
            }}
          >
            MÁQUINA
          </div>
          <div
            style={{
              position: "absolute",
              bottom: "20%",
              left: "25%",
              width: "1px",
              height: "30px",
              backgroundColor: "#555",
              transform: "rotate(-45deg)",
            }}
          ></div>

          {/* Inferior Centro */}
          <div
            style={{
              position: "absolute",
              bottom: "10%",
              left: "45%",
              fontSize: "9px",
              color: "#00ff66",
              fontFamily: "monospace",
            }}
          >
            MEIO AMB.
          </div>
          <div
            style={{
              position: "absolute",
              bottom: "20%",
              left: "55%",
              width: "1px",
              height: "30px",
              backgroundColor: "#555",
              transform: "rotate(-45deg)",
            }}
          ></div>
        </div>
        <div
          style={{
            fontSize: "10px",
            color: "#888888",
            textAlign: "center",
            marginTop: "6px",
          }}
        >
          Fatores Críticos: Curva de aprendizado do PEL & Estresse Térmico.
        </div>
      </div>

      {/* TOOL 3: EXPLICATIVO TESTE DE TUKEY (VINCULAÇÃO ESTATÍSTICA) */}
      <div
        style={{
          backgroundColor: "#1e1e1e",
          border: "1px solid #2d2d2d",
          borderRadius: "0px",
          padding: "16px",
          boxSizing: "border-box",
        }}
      >
        <h4
          style={{
            color: "#00e5ff",
            fontSize: "12px",
            margin: "0 0 12px 0",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            borderBottom: "1px solid #3d3d3d",
            paddingBottom: "6px",
          }}
        >
          Validação Tukey HSD Post-Hoc (Fase A $\rightarrow$ I)
        </h4>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            fontSize: "11px",
            color: "#cccccc",
          }}
        >
          <div
            style={{
              backgroundColor: "#151515",
              padding: "6px",
              borderLeft: "3px solid #00ff66",
            }}
          >
            <span style={{ color: "#fff", fontWeight: "bold" }}>
              Agrupamento Tipo A:
            </span>{" "}
            Três Lagoas (Média: 84.20) $\rightarrow$ Benchmark industrial
            estabelecido.
          </div>
          <div
            style={{
              backgroundColor: "#151515",
              padding: "6px",
              borderLeft: "3px solid #ff9900",
            }}
          >
            <span style={{ color: "#fff", fontWeight: "bold" }}>
              Agrupamento Tipo C:
            </span>{" "}
            Inocência Local (Média: 73.50) $\rightarrow$ Disparo imediato do
            gatilho de melhoria.
          </div>
          <div
            style={{ fontSize: "10px", color: "#888888", lineHeight: "1.3" }}
          >
            A ausência de sobreposição estatística ($p &lt; 0.05$) fundamenta
            matematicamente o direcionamento do orçamento do PES de R$ 85M.
          </div>
        </div>
      </div>
    </div>
  );
};

export const AnovaTechnicalTables: React.FC = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "16px",
        width: "100%",
        backgroundColor: "#121212", // Alinhar com o fundo escuro do seu sistema
        padding: "16px 0",
        boxSizing: "border-box",
      }}
    >
      {/* TABELA A: TESTE DE TUKEY */}
      <div
        style={{
          backgroundColor: "#1e1e1e",
          border: "1px solid #2d2d2d",
          borderRadius: "0px", // Cantos totalmente retos (zero radius)
          padding: "16px",
          boxSizing: "border-box",
        }}
      >
        <h3
          style={{
            color: "#ffffff",
            fontSize: "14px",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            marginBottom: "12px",
            borderBottom: "2px solid #0055ff", // Detalhe técnico linear azul
            paddingBottom: "6px",
          }}
        >
          A. Comparação Múltipla de Tukey (Post-Hoc Test)
        </h3>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            textAlign: "left",
            fontSize: "12px",
          }}
        >
          <thead>
            <tr style={{ borderBottom: "1px solid #3d3d3d", color: "#aaaaaa" }}>
              <th style={{ padding: "8px 4px" }}>Comparação de Pares</th>
              <th style={{ padding: "8px 4px", textAlign: "right" }}>
                Diferença
              </th>
              <th style={{ padding: "8px 4px", textAlign: "right" }}>
                Erro Padrão
              </th>
              <th style={{ padding: "8px 4px", textAlign: "right" }}>
                Lim. Inferior (95%)
              </th>
              <th style={{ padding: "8px 4px", textAlign: "right" }}>
                Lim. Superior (95%)
              </th>
              <th
                style={{
                  padding: "8px 4px",
                  textAlign: "right",
                  color: "#00ff66",
                }}
              >
                p-value Adj.
              </th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: "1px solid #2d2d2d", color: "#ffffff" }}>
              <td style={{ padding: "10px 4px", fontWeight: 500 }}>
                Três Lagoas vs Inocência
              </td>
              <td
                style={{
                  padding: "10px 4px",
                  textAlign: "right",
                  color: "#00ff66",
                }}
              >
                +10.70
              </td>
              <td style={{ padding: "10px 4px", textAlign: "right" }}>1.46</td>
              <td style={{ padding: "10px 4px", textAlign: "right" }}>+7.21</td>
              <td style={{ padding: "10px 4px", textAlign: "right" }}>
                +14.19
              </td>
              <td
                style={{
                  padding: "10px 4px",
                  textAlign: "right",
                  fontWeight: "bold",
                  color: "#00ff66",
                }}
              >
                0.0001
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid #2d2d2d", color: "#ffffff" }}>
              <td style={{ padding: "10px 4px", fontWeight: 500 }}>
                Três Lagoas vs Outros Estados
              </td>
              <td
                style={{
                  padding: "10px 4px",
                  textAlign: "right",
                  color: "#00ff66",
                }}
              >
                +5.20
              </td>
              <td style={{ padding: "10px 4px", textAlign: "right" }}>1.46</td>
              <td style={{ padding: "10px 4px", textAlign: "right" }}>+1.71</td>
              <td style={{ padding: "10px 4px", textAlign: "right" }}>+8.69</td>
              <td
                style={{
                  padding: "10px 4px",
                  textAlign: "right",
                  fontWeight: "bold",
                  color: "#00ff66",
                }}
              >
                0.0042
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid #2d2d2d", color: "#ffffff" }}>
              <td style={{ padding: "10px 4px", fontWeight: 500 }}>
                Outros Estados vs Inocência
              </td>
              <td
                style={{
                  padding: "10px 4px",
                  textAlign: "right",
                  color: "#00ff66",
                }}
              >
                +5.50
              </td>
              <td style={{ padding: "10px 4px", textAlign: "right" }}>1.46</td>
              <td style={{ padding: "10px 4px", textAlign: "right" }}>+2.01</td>
              <td style={{ padding: "10px 4px", textAlign: "right" }}>+8.99</td>
              <td
                style={{
                  padding: "10px 4px",
                  textAlign: "right",
                  fontWeight: "bold",
                  color: "#00ff66",
                }}
              >
                0.0028
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* TABELA B: DIAGNÓSTICO DE PREMISSAS */}
      <div
        style={{
          backgroundColor: "#1e1e1e",
          border: "1px solid #2d2d2d",
          borderRadius: "0px", // Cantos totalmente retos (zero radius)
          padding: "16px",
          boxSizing: "border-box",
        }}
      >
        <h3
          style={{
            color: "#ffffff",
            fontSize: "14px",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            marginBottom: "12px",
            borderBottom: "2px solid #0055ff",
            paddingBottom: "6px",
          }}
        >
          B. Diagnóstico de Premissas Estatísticas da ANOVA
        </h3>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            textAlign: "left",
            fontSize: "12px",
          }}
        >
          <thead>
            <tr style={{ borderBottom: "1px solid #3d3d3d", color: "#aaaaaa" }}>
              <th style={{ padding: "8px 4px" }}>Teste de Validação</th>
              <th style={{ padding: "8px 4px" }}>Métrica Calculada</th>
              <th style={{ padding: "8px 4px", textAlign: "right" }}>
                p-value
              </th>
              <th style={{ padding: "8px 4px", textAlign: "right" }}>
                Status do Modelo
              </th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: "1px solid #2d2d2d", color: "#ffffff" }}>
              <td style={{ padding: "10px 4px", fontWeight: 500 }}>
                Normalidade dos Resíduos (Shapiro-Wilk)
              </td>
              <td
                style={{
                  padding: "10px 4px",
                  fontFamily: "monospace",
                  color: "#00e5ff",
                }}
              >
                W = 0.974
              </td>
              <td style={{ padding: "10px 4px", textAlign: "right" }}>
                0.4210
              </td>
              <td
                style={{
                  padding: "10px 4px",
                  textAlign: "right",
                  color: "#00ff66",
                  fontWeight: 500,
                }}
              >
                Aprovado (p &gt; 0.05)
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid #2d2d2d", color: "#ffffff" }}>
              <td style={{ padding: "10px 4px", fontWeight: 500 }}>
                Homocedasticidade (Teste de Levene)
              </td>
              <td
                style={{
                  padding: "10px 4px",
                  fontFamily: "monospace",
                  color: "#00e5ff",
                }}
              >
                F = 1.120
              </td>
              <td style={{ padding: "10px 4px", textAlign: "right" }}>
                0.3540
              </td>
              <td
                style={{
                  padding: "10px 4px",
                  textAlign: "right",
                  color: "#00ff66",
                  fontWeight: 500,
                }}
              >
                Aprovado (p &gt; 0.05)
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid #2d2d2d", color: "#ffffff" }}>
              <td style={{ padding: "10px 4px", fontWeight: 500 }}>
                Independência dos Dados (Durbin-Watson)
              </td>
              <td
                style={{
                  padding: "10px 4px",
                  fontFamily: "monospace",
                  color: "#00e5ff",
                }}
              >
                DW = 1.98
              </td>
              <td
                style={{
                  padding: "10px 4px",
                  textAlign: "right",
                  color: "#888888",
                }}
              >
                N/A
              </td>
              <td
                style={{
                  padding: "10px 4px",
                  textAlign: "right",
                  color: "#00ff66",
                  fontWeight: 500,
                }}
              >
                Aprovado (Sem Autocorrelação)
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const FmeaChartsModule: React.FC = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "16px",
        width: "100%",
        backgroundColor: "#121212",
        padding: "16px 0",
        boxSizing: "border-box",
      }}
    >
      {/* G1. MATRIZ DE CRITICIDADE 5x5 (HEATMAP DE RISCO BRUTO) */}
      <div
        style={{
          backgroundColor: "#1e1e1e",
          border: "1px solid #2d2d2d",
          borderRadius: "0px", // Cantos 100% retos
          padding: "16px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            borderBottom: "2px solid #0055ff",
            paddingBottom: "6px",
            marginBottom: "12px",
          }}
        >
          <h3
            style={{
              color: "#ffffff",
              fontSize: "13px",
              fontWeight: 600,
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            G1. Matriz de Criticidade de Risco Bruto (Severidade vs Ocorrência)
          </h3>
        </div>
        <div
          style={{
            height: "200px",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "40px 1fr",
            boxSizing: "border-box",
          }}
        >
          {/* Eixo Y Label */}
          <div
            style={{
              color: "#aaaaaa",
              fontSize: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transform: "rotate(-90deg)",
              fontWeight: 600,
            }}
          >
            Severidade (S)
          </div>
          {/* Grid do Heatmap */}
          <div
            style={{
              display: "grid",
              gridTemplateRows: "repeat(5, 1fr)",
              gap: "2px",
              position: "relative",
            }}
          >
            {/* Quadrantes Simulado (Cores Analíticas de Risco) */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)",
                gap: "2px",
              }}
            >
              <div style={{ backgroundColor: "#551a1a" }}></div>
              <div style={{ backgroundColor: "#551a1a" }}></div>
              <div style={{ backgroundColor: "#ff3333", opacity: 0.8 }}></div>
              <div style={{ backgroundColor: "#ff3333" }}></div>
              <div style={{ backgroundColor: "#ff3333" }}></div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)",
                gap: "2px",
              }}
            >
              <div style={{ backgroundColor: "#ff9900", opacity: 0.6 }}></div>
              <div style={{ backgroundColor: "#ff9900", opacity: 0.8 }}></div>
              <div style={{ backgroundColor: "#ff9900" }}></div>
              <div style={{ backgroundColor: "#ff3333", opacity: 0.8 }}></div>
              <div style={{ backgroundColor: "#ff3333" }}></div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)",
                gap: "2px",
              }}
            >
              <div style={{ backgroundColor: "#ff9900", opacity: 0.4 }}></div>
              <div style={{ backgroundColor: "#ff9900", opacity: 0.6 }}></div>
              <div style={{ backgroundColor: "#ff9900", opacity: 0.8 }}></div>
              <div style={{ backgroundColor: "#ff9900" }}></div>
              <div style={{ backgroundColor: "#ff3333", opacity: 0.8 }}></div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)",
                gap: "2px",
              }}
            >
              <div style={{ backgroundColor: "#335533" }}></div>
              <div style={{ backgroundColor: "#ff9900", opacity: 0.4 }}></div>
              <div style={{ backgroundColor: "#ff9900", opacity: 0.6 }}></div>
              <div style={{ backgroundColor: "#ff9900", opacity: 0.8 }}></div>
              <div style={{ backgroundColor: "#ff9900" }}></div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)",
                gap: "2px",
              }}
            >
              <div style={{ backgroundColor: "#335533" }}></div>
              <div style={{ backgroundColor: "#335533" }}></div>
              <div style={{ backgroundColor: "#ff9900", opacity: 0.4 }}></div>
              <div style={{ backgroundColor: "#ff9900", opacity: 0.4 }}></div>
              <div style={{ backgroundColor: "#ff9900", opacity: 0.6 }}></div>
            </div>

            {/* Marcadores dos 6 Subsistemas Expandidos */}
            <span
              style={{
                position: "absolute",
                top: "10%",
                left: "60%",
                backgroundColor: "#ffffff",
                color: "#000000",
                padding: "2px 4px",
                fontSize: "8px",
                fontWeight: "bold",
                fontFamily: "monospace",
              }}
            >
              S1:Caldeira
            </span>
            <span
              style={{
                position: "absolute",
                top: "30%",
                left: "40%",
                backgroundColor: "#ffffff",
                color: "#000000",
                padding: "2px 4px",
                fontSize: "8px",
                fontWeight: "bold",
                fontFamily: "monospace",
              }}
            >
              S2:Ferrovia
            </span>
            <span
              style={{
                position: "absolute",
                top: "5%",
                left: "20%",
                backgroundColor: "#ffffff",
                color: "#000000",
                padding: "2px 4px",
                fontSize: "8px",
                fontWeight: "bold",
                fontFamily: "monospace",
              }}
            >
              S3:Montagem
            </span>
            <span
              style={{
                position: "absolute",
                top: "40%",
                left: "50%",
                backgroundColor: "#ffffff",
                color: "#000000",
                padding: "2px 4px",
                fontSize: "8px",
                fontWeight: "bold",
                fontFamily: "monospace",
              }}
            >
              S4:Florestal
            </span>
            <span
              style={{
                position: "absolute",
                top: "50%",
                left: "60%",
                backgroundColor: "#ffffff",
                color: "#000000",
                padding: "2px 4px",
                fontSize: "8px",
                fontWeight: "bold",
                fontFamily: "monospace",
              }}
            >
              S5:PEL Social
            </span>
            <span
              style={{
                position: "absolute",
                top: "5%",
                left: "20%",
                backgroundColor: "#ffffff",
                color: "#000000",
                padding: "2px 4px",
                fontSize: "8px",
                fontWeight: "bold",
                fontFamily: "monospace",
                marginTop: "12px",
              }}
            >
              S6:Efluentes
            </span>
          </div>
        </div>
        <div
          style={{
            color: "#aaaaaa",
            fontSize: "10px",
            textAlign: "center",
            marginTop: "6px",
            paddingLeft: "40px",
            fontWeight: 600,
          }}
        >
          Ocorrência (O) $\rightarrow$
        </div>
      </div>

      {/* G2. GRÁFICO DE PARETO DE RPN ACUMULADO */}
      <div
        style={{
          backgroundColor: "#1e1e1e",
          border: "1px solid #2d2d2d",
          borderRadius: "0px",
          padding: "16px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            borderBottom: "2px solid #0055ff",
            paddingBottom: "6px",
            marginBottom: "12px",
          }}
        >
          <h3
            style={{
              color: "#ffffff",
              fontSize: "13px",
              fontWeight: 600,
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            G2. Diagrama de Pareto - Distribuição de Carga de RPN
          </h3>
        </div>
        <div
          style={{
            height: "200px",
            width: "100%",
            position: "relative",
            display: "flex",
            alignItems: "flex-end",
            paddingLeft: "35px",
            paddingBottom: "20px",
            boxSizing: "border-box",
          }}
        >
          {/* Barras de RPN (Decrescente) */}
          <div
            style={{
              width: "14%",
              height: "90%",
              backgroundColor: "#ff3333",
              marginRight: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "8px",
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            216
          </div>
          <div
            style={{
              width: "14%",
              height: "52%",
              backgroundColor: "#ff9900",
              marginRight: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "8px",
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            120
          </div>
          <div
            style={{
              width: "14%",
              height: "48%",
              backgroundColor: "#ff9900",
              marginRight: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "8px",
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            112
          </div>
          <div
            style={{
              width: "14%",
              height: "42%",
              backgroundColor: "#00e5ff",
              marginRight: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "8px",
              color: "#000",
              fontWeight: "bold",
            }}
          >
            100
          </div>
          <div
            style={{
              width: "14%",
              height: "38%",
              backgroundColor: "#00e5ff",
              marginRight: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "8px",
              color: "#000",
              fontWeight: "bold",
            }}
          >
            90
          </div>
          <div
            style={{
              width: "14%",
              height: "34%",
              backgroundColor: "#00ff66",
              marginRight: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "8px",
              color: "#000",
              fontWeight: "bold",
            }}
          >
            80
          </div>

          {/* Curva de Porcentagem Acumulada */}
          <svg
            style={{
              position: "absolute",
              top: 0,
              left: "35px",
              width: "calc(100% - 45px)",
              height: "calc(100% - 20px)",
              overflow: "visible",
            }}
          >
            <path
              d="M 15 140 L 55 90 L 95 65 L 135 45 L 175 30 L 215 10"
              fill="none"
              stroke="#00ff66"
              strokeWidth="2"
            />
            <circle cx="215" cy="10" r="3" fill="#00ff66" />
          </svg>

          {/* Eixos */}
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              left: "35px",
              right: "10px",
              height: "1px",
              backgroundColor: "#3d3d3d",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              top: "5px",
              bottom: "20px",
              left: "35px",
              width: "1px",
              backgroundColor: "#3d3d3d",
            }}
          ></div>
          <span
            style={{
              position: "absolute",
              bottom: "4px",
              left: "50%",
              fontSize: "8px",
              color: "#aaaaaa",
              transform: "translateX(-50%)",
              fontFamily: "monospace",
            }}
          >
            S1 | S5 | S2 | S6 | S4 | S3
          </span>
        </div>
      </div>
    </div>
  );
};

export const RegressionQueuesModule: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#121212",
        padding: "16px 0",
        boxSizing: "border-box",
      }}
    >
      {/* SEÇÃO 1: GRID DE GRÁFICOS ESTOCÁSTICOS (2x2) */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "16px",
          width: "100%",
          marginBottom: "16px",
          boxSizing: "border-box",
        }}
      >
        {/* M1. GRÁFICO DE REGRESSÃO MULTIPLA */}
        <div
          style={{
            backgroundColor: "#1e1e1e",
            border: "1px solid #2d2d2d",
            borderRadius: "0px",
            padding: "16px",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "12px",
              borderBottom: "2px solid #0055ff",
              paddingBottom: "6px",
            }}
          >
            <h3
              style={{
                color: "#ffffff",
                fontSize: "13px",
                fontWeight: 600,
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              M1. Resíduos vs. Valores Ajustados (PIB Inocência)
            </h3>
            <span
              style={{
                color: "#00ff66",
                fontFamily: "monospace",
                fontSize: "11px",
                fontWeight: "bold",
              }}
            >
              R² Adj: 0.942
            </span>
          </div>
          <div
            style={{
              height: "160px",
              width: "100%",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "40px",
                right: "10px",
                height: "1px",
                borderTop: "1px dashed #555555",
              }}
            ></div>
            <svg
              style={{
                width: "100%",
                height: "100%",
                paddingLeft: "40px",
                paddingBottom: "20px",
                boxSizing: "border-box",
              }}
            >
              <circle cx="15%" cy="30%" r="4" fill="#00e5ff" opacity="0.7" />
              <circle cx="25%" cy="70%" r="4" fill="#00e5ff" opacity="0.7" />
              <circle cx="38%" cy="45%" r="4" fill="#00e5ff" opacity="0.7" />
              <circle cx="45%" cy="55%" r="4" fill="#00e5ff" opacity="0.7" />
              <circle cx="55%" cy="20%" r="4" fill="#00e5ff" opacity="0.7" />
              <circle cx="68%" cy="85%" r="4" fill="#ff3333" opacity="0.8" />
              <circle cx="75%" cy="40%" r="4" fill="#00e5ff" opacity="0.7" />
              <circle cx="88%" cy="60%" r="4" fill="#00e5ff" opacity="0.7" />
              <circle cx="93%" cy="50%" r="4" fill="#00e5ff" opacity="0.7" />
            </svg>
            <div
              style={{
                position: "absolute",
                bottom: "20px",
                left: "40px",
                right: "10px",
                height: "1px",
                backgroundColor: "#3d3d3d",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                top: "5px",
                bottom: "20px",
                left: "40px",
                width: "1px",
                backgroundColor: "#3d3d3d",
              }}
            ></div>
            <span
              style={{
                position: "absolute",
                bottom: "2px",
                left: "50%",
                fontSize: "9px",
                color: "#aaaaaa",
                transform: "translateX(-50%)",
              }}
            >
              Valores Ajustados (Ŷ)
            </span>
            <span
              style={{
                position: "absolute",
                top: "45%",
                left: "5px",
                fontSize: "9px",
                color: "#aaaaaa",
                transform: "rotate(-90deg)",
              }}
            >
              Resíduos (e)
            </span>
          </div>
        </div>

        {/* M2. SIMULAÇÃO DE MONTE CARLO */}
        <div
          style={{
            backgroundColor: "#1e1e1e",
            border: "1px solid #2d2d2d",
            borderRadius: "0px",
            padding: "16px",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "12px",
              borderBottom: "2px solid #0055ff",
              paddingBottom: "6px",
            }}
          >
            <h3
              style={{
                color: "#ffffff",
                fontSize: "13px",
                fontWeight: 600,
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              M2. Histograma Probabilístico (10.000 Iterações)
            </h3>
            <span
              style={{
                color: "#00e5ff",
                fontFamily: "monospace",
                fontSize: "11px",
                fontWeight: "bold",
              }}
            >
              P50: Dez/2027
            </span>
          </div>
          <div
            style={{
              height: "160px",
              width: "100%",
              position: "relative",
              display: "flex",
              alignItems: "flex-end",
              paddingLeft: "40px",
              paddingBottom: "20px",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                width: "10%",
                height: "20%",
                backgroundColor: "#2d2d2d",
                marginRight: "2px",
              }}
            ></div>
            <div
              style={{
                width: "10%",
                height: "45%",
                backgroundColor: "#3d3d3d",
                marginRight: "2px",
              }}
            ></div>
            <div
              style={{
                width: "10%",
                height: "75%",
                backgroundColor: "#0055ff",
                opacity: 0.7,
                marginRight: "2px",
              }}
            ></div>
            <div
              style={{
                width: "10%",
                height: "95%",
                backgroundColor: "#00e5ff",
                marginRight: "2px",
              }}
            ></div>
            <div
              style={{
                width: "10%",
                height: "65%",
                backgroundColor: "#0055ff",
                opacity: 0.7,
                marginRight: "2px",
              }}
            ></div>
            <div
              style={{
                width: "10%",
                height: "40%",
                backgroundColor: "#ff9900",
                marginRight: "2px",
              }}
            ></div>
            <div
              style={{
                width: "10%",
                height: "15%",
                backgroundColor: "#ff3333",
                marginRight: "2px",
              }}
            ></div>
            <svg
              style={{
                position: "absolute",
                top: 0,
                left: "40px",
                width: "calc(100% - 50px)",
                height: "calc(100% - 20px)",
                overflow: "visible",
              }}
            >
              <path
                d="M 10 130 Q 70 120 110 60 T 260 10"
                fill="none"
                stroke="#00ff66"
                strokeWidth="2"
              />
            </svg>
            <div
              style={{
                position: "absolute",
                bottom: "20px",
                left: "40px",
                right: "10px",
                height: "1px",
                backgroundColor: "#3d3d3d",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                top: "5px",
                bottom: "20px",
                left: "40px",
                width: "1px",
                backgroundColor: "#3d3d3d",
              }}
            ></div>
            <span
              style={{
                position: "absolute",
                bottom: "2px",
                left: "50%",
                fontSize: "9px",
                color: "#aaaaaa",
                transform: "translateX(-50%)",
              }}
            >
              Linha do Tempo (Cenários)
            </span>
          </div>
        </div>
      </div>

      {/* SEÇÃO 2: DETALHAMENTO TÉCNICO E MATRIZES DE VALIDAÇÃO */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "16px",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        {/* TABELA ESQUERDA: REGRESSÃO E MONTE CARLO */}
        <div
          style={{
            backgroundColor: "#1e1e1e",
            border: "1px solid #2d2d2d",
            borderRadius: "0px",
            padding: "16px",
          }}
        >
          <h4
            style={{
              color: "#00e5ff",
              fontSize: "12px",
              margin: "0 0 10px 0",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
          >
            Validação M1 (Regressão PIB) & M2 (Monte Carlo Cronograma)
          </h4>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              textAlign: "left",
              fontSize: "11px",
              color: "#ffffff",
            }}
          >
            <thead>
              <tr
                style={{ borderBottom: "1px solid #3d3d3d", color: "#aaaaaa" }}
              >
                <th style={{ padding: "6px 4px" }}>Parâmetro/Variável</th>
                <th style={{ padding: "6px 4px", textAlign: "right" }}>
                  Coeficiente (β)
                </th>
                <th style={{ padding: "6px 4px", textAlign: "right" }}>
                  p-value / Percentil
                </th>
                <th style={{ padding: "6px 4px", textAlign: "right" }}>
                  VIF / Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: "1px solid #2d2d2d" }}>
                <td style={{ padding: "8px 4px" }}>Injeção de CAPEX ($X_1$)</td>
                <td
                  style={{
                    padding: "8px 4px",
                    textAlign: "right",
                    fontFamily: "monospace",
                  }}
                >
                  +0.412
                </td>
                <td
                  style={{
                    padding: "8px 4px",
                    textAlign: "right",
                    color: "#00ff66",
                  }}
                >
                  0.0021
                </td>
                <td
                  style={{
                    padding: "8px 4px",
                    textAlign: "right",
                    fontFamily: "monospace",
                  }}
                >
                  1.24 (Livre)
                </td>
              </tr>
              <tr style={{ borderBottom: "1px solid #2d2d2d" }}>
                <td style={{ padding: "8px 4px" }}>Headcount Ativo ($X_2$)</td>
                <td
                  style={{
                    padding: "8px 4px",
                    textAlign: "right",
                    fontFamily: "monospace",
                  }}
                >
                  +0.285
                </td>
                <td
                  style={{
                    padding: "8px 4px",
                    textAlign: "right",
                    color: "#00ff66",
                  }}
                >
                  0.0140
                </td>
                <td
                  style={{
                    padding: "8px 4px",
                    textAlign: "right",
                    fontFamily: "monospace",
                  }}
                >
                  1.85 (Livre)
                </td>
              </tr>
              <tr style={{ borderBottom: "1px solid #2d2d2d" }}>
                <td style={{ padding: "8px 4px" }}>Cenário Otimista (P10)</td>
                <td style={{ padding: "8px 4px", textAlign: "right" }}>
                  Agosto/2027
                </td>
                <td
                  style={{
                    padding: "8px 4px",
                    textAlign: "right",
                    color: "#00e5ff",
                  }}
                >
                  Prob: 10%
                </td>
                <td
                  style={{
                    padding: "8px 4px",
                    textAlign: "right",
                    color: "#00ff66",
                  }}
                >
                  Antecipado
                </td>
              </tr>
              <tr>
                <td style={{ padding: "8px 4px" }}>
                  Cenário Conservador (P90)
                </td>
                <td style={{ padding: "8px 4px", textAlign: "right" }}>
                  Março/2028
                </td>
                <td
                  style={{
                    padding: "8px 4px",
                    textAlign: "right",
                    color: "#ff9900",
                  }}
                >
                  Prob: 90%
                </td>
                <td
                  style={{
                    padding: "8px 4px",
                    textAlign: "right",
                    color: "#ff3333",
                  }}
                >
                  Estressado
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* TABELA DIREITA: SIX SIGMA E TEORIA DAS FILAS */}
        <div
          style={{
            backgroundColor: "#1e1e1e",
            border: "1px solid #2d2d2d",
            borderRadius: "0px",
            padding: "16px",
          }}
        >
          <h4
            style={{
              color: "#00e5ff",
              fontSize: "12px",
              margin: "0 0 10px 0",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
          >
            Validação M3 (Capabilidade σ) & M4 (Filas de Kendall M/M/c)
          </h4>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              textAlign: "left",
              fontSize: "11px",
              color: "#ffffff",
            }}
          >
            <thead>
              <tr
                style={{ borderBottom: "1px solid #3d3d3d", color: "#aaaaaa" }}
              >
                <th style={{ padding: "6px 4px" }}>Métrica de Processo</th>
                <th style={{ padding: "6px 4px", textAlign: "right" }}>
                  Valor Calculado
                </th>
                <th style={{ padding: "6px 4px", textAlign: "right" }}>
                  Fórmula de Kendall
                </th>
                <th style={{ padding: "6px 4px", textAlign: "right" }}>
                  Status Operacional
                </th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: "1px solid #2d2d2d" }}>
                <td style={{ padding: "8px 4px" }}>
                  Capabilidade Potencial (Cp)
                </td>
                <td
                  style={{
                    padding: "8px 4px",
                    textAlign: "right",
                    fontFamily: "monospace",
                  }}
                >
                  1.55
                </td>
                <td
                  style={{
                    padding: "8px 4px",
                    textAlign: "right",
                    color: "#888888",
                  }}
                >
                  N/A
                </td>
                <td
                  style={{
                    padding: "8px 4px",
                    textAlign: "right",
                    color: "#00ff66",
                  }}
                >
                  Processo Estável
                </td>
              </tr>
              <tr style={{ borderBottom: "1px solid #2d2d2d" }}>
                <td style={{ padding: "8px 4px" }}>
                  Taxa de Chegada Bitrens (λ)
                </td>
                <td
                  style={{
                    padding: "8px 4px",
                    textAlign: "right",
                    fontFamily: "monospace",
                  }}
                >
                  24/hora
                </td>
                <td style={{ padding: "8px 4px", textAlign: "right" }}>λ</td>
                <td
                  style={{
                    padding: "8px 4px",
                    textAlign: "right",
                    color: "#00e5ff",
                  }}
                >
                  Fluxo Contínuo
                </td>
              </tr>
              <tr style={{ borderBottom: "1px solid #2d2d2d" }}>
                <td style={{ padding: "8px 4px" }}>
                  Capacidade dos Guindastes (μ)
                </td>
                <td
                  style={{
                    padding: "8px 4px",
                    textAlign: "right",
                    fontFamily: "monospace",
                  }}
                >
                  10/hora por canal
                </td>
                <td style={{ padding: "8px 4px", textAlign: "right" }}>
                  c · μ
                </td>
                <td
                  style={{
                    padding: "8px 4px",
                    textAlign: "right",
                    color: "#00e5ff",
                  }}
                >
                  c = 3 Guindastes
                </td>
              </tr>
              <tr>
                <td style={{ padding: "8px 4px" }}>Tempo Médio na Fila (Wq)</td>
                <td
                  style={{
                    padding: "8px 4px",
                    textAlign: "right",
                    fontFamily: "monospace",
                    color: "#ff9900",
                  }}
                >
                  14.2 min
                </td>
                <td style={{ padding: "8px 4px", textAlign: "right" }}>
                  Wq (Estocástico)
                </td>
                <td
                  style={{
                    padding: "8px 4px",
                    textAlign: "right",
                    color: "#ff9900",
                  }}
                >
                  Risco Controlado
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export const RegressionQueuesBusinessMetrics: React.FC = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "16px",
        width: "100%",
        backgroundColor: "#121212",
        padding: "16px 0",
        boxSizing: "border-box",
      }}
    >
      {/* CARD 1: PREVISÃO DE START-UP (MONTE CARLO) */}
      <div
        style={{
          backgroundColor: "#1e1e1e",
          border: "1px solid #2d2d2d",
          borderRadius: "0px", // Totalmente reto (zero radius)
          padding: "16px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            fontSize: "11px",
            color: "#aaaaaa",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.5px",
          }}
        >
          Confiabilidade do Cronograma (Start-up 2027)
        </div>
        <div
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "#00ff66",
            margin: "8px 0 4px 0",
            fontFamily: "monospace",
          }}
        >
          87.4%
        </div>
        <div style={{ fontSize: "11px", color: "#888888", lineHeight: "1.4" }}>
          Probabilidade matemática acumulada (P50) obtida via 10.000 iterações
          de Monte Carlo para o início das operações no prazo regulamentar.
        </div>
      </div>

      {/* CARD 2: RISCO DE GARGALO LOGÍSTICO (TEORIA DAS FILAS) */}
      <div
        style={{
          backgroundColor: "#1e1e1e",
          border: "1px solid #2d2d2d",
          borderRadius: "0px",
          padding: "16px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            fontSize: "11px",
            color: "#aaaaaa",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.5px",
          }}
        >
          Saturação do Pátio Ferroviário (R$ 2.4B)
        </div>
        <div
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "#ff9900",
            margin: "8px 0 4px 0",
            fontFamily: "monospace",
          }}
        >
          78.0%{" "}
          <span style={{ fontSize: "12px", color: "#ff3333" }}>
            (Limite: 85%)
          </span>
        </div>
        {/* Barra de Ocupação Rígida */}
        <div
          style={{
            width: "100%",
            height: "6px",
            backgroundColor: "#2d2d2d",
            borderRadius: "0px",
            margin: "8px 0",
          }}
        >
          <div
            style={{
              width: "78%",
              height: "100%",
              backgroundColor: "#ff9900",
              borderRadius: "0px",
            }}
          ></div>
        </div>
        <div style={{ fontSize: "11px", color: "#888888", lineHeight: "1.4" }}>
          Taxa de ocupação estocástica (ρ) dos canais de descarga de cavaco.
          Alerta preventivo acionado antes do transbordo para a rodovia MS-377.
        </div>
      </div>

      {/* CARD 3: MULTICOLINEARIDADE CONTROLADA (REGRESSÃO) */}
      <div
        style={{
          backgroundColor: "#1e1e1e",
          border: "1px solid #2d2d2d",
          borderRadius: "0px",
          padding: "16px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            fontSize: "11px",
            color: "#aaaaaa",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.5px",
          }}
        >
          Estabilidade Econométrica (VIF Máximo)
        </div>
        <div
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "#00e5ff",
            margin: "8px 0 4px 0",
            fontFamily: "monospace",
          }}
        >
          1.85{" "}
          <span style={{ fontSize: "14px", color: "#00ff66" }}>&lt; 5.0</span>
        </div>
        <div style={{ fontSize: "11px", color: "#888888", lineHeight: "1.4" }}>
          Maior Fator de Inflação da Variância (VIF) detetado nas variáveis
          explicativas do PIB, garantindo ausência de multicolinearidade no
          modelo.
        </div>
      </div>
    </div>
  );
};

export const FmeaRisksAndChartsModule: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#121212",
        padding: "16px 0",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      {/* 1. TABELA DESCRITIVA EXPANDIDA COM OS 6 SUBSISTEMAS REAIS ALINHADOS */}
      <div
        style={{
          backgroundColor: "#1e1e1e",
          border: "1px solid #2d2d2d",
          borderRadius: "0px",
          padding: "16px",
          boxSizing: "border-box",
          width: "100%",
        }}
      >
        <h3
          style={{
            color: "#ffffff",
            fontSize: "14px",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            margin: "0 0 12px 0",
            borderBottom: "2px solid #0055ff",
            paddingBottom: "6px",
          }}
        >
          Matriz de Mapeamento de Subsistemas e Falhas Potenciais (FMEA Global)
        </h3>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            textAlign: "left",
            fontSize: "11px",
            color: "#ffffff",
          }}
        >
          <thead>
            <tr style={{ borderBottom: "1px solid #3d3d3d", color: "#aaaaaa" }}>
              <th style={{ padding: "8px 4px" }}>Subsistema / Frente</th>
              <th style={{ padding: "8px 4px" }}>Modo de Falha Potencial</th>
              <th style={{ padding: "8px 4px" }}>Efeito Potencial da Falha</th>
              <th style={{ padding: "8px 4px", textAlign: "center" }}>S</th>
              <th style={{ padding: "8px 4px", textAlign: "center" }}>O</th>
              <th style={{ padding: "8px 4px", textAlign: "center" }}>D</th>
              <th
                style={{
                  padding: "8px 4px",
                  textAlign: "right",
                  color: "#ff3333",
                }}
              >
                RPN Bruto
              </th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: "1px solid #2d2d2d" }}>
              <td style={{ padding: "8px 4px", fontWeight: "bold" }}>
                S1. Caldeira Valmet (Balão 300t)
              </td>
              <td style={{ padding: "8px 4px" }}>
                Variação na pressão de vapor por umidade do cavaco
              </td>
              <td style={{ padding: "8px 4px" }}>
                Queda na geração elétrica (&lt;400 MW) e paragem de linha única
              </td>
              <td style={{ padding: "8px 4px", textAlign: "center" }}>9</td>
              <td style={{ padding: "8px 4px", textAlign: "center" }}>6</td>
              <td style={{ padding: "8px 4px", textAlign: "center" }}>4</td>
              <td
                style={{
                  padding: "8px 4px",
                  textAlign: "right",
                  fontWeight: "bold",
                  color: "#ff3333",
                  fontFamily: "monospace",
                }}
              >
                216
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid #2d2d2d" }}>
              <td style={{ padding: "8px 4px", fontWeight: "bold" }}>
                S2. Ramal Ferroviário R$ 2.4B
              </td>
              <td style={{ padding: "8px 4px" }}>
                Saturação estocástica nas linhas de descarga de cavaco
              </td>
              <td style={{ padding: "8px 4px" }}>
                Filas quilométricas de bitrens florestais travando a MS-377
              </td>
              <td style={{ padding: "8px 4px", textAlign: "center" }}>7</td>
              <td style={{ padding: "8px 4px", textAlign: "center" }}>4</td>
              <td style={{ padding: "8px 4px", textAlign: "center" }}>4</td>
              <td
                style={{
                  padding: "8px 4px",
                  textAlign: "right",
                  fontWeight: "bold",
                  color: "#ff9900",
                  fontFamily: "monospace",
                }}
              >
                112
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid #2d2d2d" }}>
              <td style={{ padding: "8px 4px", fontWeight: "bold" }}>
                S3. Mão de Obra de Montagem
              </td>
              <td style={{ padding: "8px 4px" }}>
                Acidente grave por fadiga crônica / estouro de horas extras
              </td>
              <td style={{ padding: "8px 4px" }}>
                Paragem judicial imediata das obras e atrasos no cronograma
              </td>
              <td style={{ padding: "8px 4px", textAlign: "center" }}>10</td>
              <td style={{ padding: "8px 4px", textAlign: "center" }}>2</td>
              <td style={{ padding: "8px 4px", textAlign: "center" }}>4</td>
              <td
                style={{
                  padding: "8px 4px",
                  textAlign: "right",
                  fontWeight: "bold",
                  color: "#00ff66",
                  fontFamily: "monospace",
                }}
              >
                80
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid #2d2d2d" }}>
              <td style={{ padding: "8px 4px", fontWeight: "bold" }}>
                S4. Colheita e Silvicultura (Florestal)
              </td>
              <td style={{ padding: "8px 4px" }}>
                Quebra mecânica em cadeia de Harvesters / Forwarders
              </td>
              <td style={{ padding: "8px 4px" }}>
                Desabastecimento de madeira primária no pátio da fábrica
              </td>
              <td style={{ padding: "8px 4px", textAlign: "center" }}>6</td>
              <td style={{ padding: "8px 4px", textAlign: "center" }}>5</td>
              <td style={{ padding: "8px 4px", textAlign: "center" }}>3</td>
              <td
                style={{
                  padding: "8px 4px",
                  textAlign: "right",
                  fontWeight: "bold",
                  color: "#ff9900",
                  fontFamily: "monospace",
                }}
              >
                90
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid #2d2d2d" }}>
              <td style={{ padding: "8px 4px", fontWeight: "bold" }}>
                S5. Empregabilidade Local (PEL)
              </td>
              <td style={{ padding: "8px 4px" }}>
                Inadequação técnica / Evasão da mão de obra regional
              </td>
              <td style={{ padding: "8px 4px" }}>
                Quebra da curva de aprendizado e estouro de turnover voluntário
              </td>
              <td style={{ padding: "8px 4px", textAlign: "center" }}>5</td>
              <td style={{ padding: "8px 4px", textAlign: "center" }}>6</td>
              <td style={{ padding: "8px 4px", textAlign: "center" }}>4</td>
              <td
                style={{
                  padding: "8px 4px",
                  textAlign: "right",
                  fontWeight: "bold",
                  color: "#ff3333",
                  fontFamily: "monospace",
                }}
              >
                120
              </td>
            </tr>
            <tr>
              <td style={{ padding: "8px 4px", fontWeight: "bold" }}>
                S6. Efluentes do Rio Sucuriú (Ambiental)
              </td>
              <td style={{ padding: "8px 4px" }}>
                Transbordo ou anomalia química nos difusores de descarte
              </td>
              <td style={{ padding: "8px 4px" }}>
                Cassação de Licença Ambiental do IMASUL e paralisação de planta
              </td>
              <td style={{ padding: "8px 4px", textAlign: "center" }}>10</td>
              <td style={{ padding: "8px 4px", textAlign: "center" }}>2</td>
              <td style={{ padding: "8px 4px", textAlign: "center" }}>5</td>
              <td
                style={{
                  padding: "8px 4px",
                  textAlign: "right",
                  fontWeight: "bold",
                  color: "#00e5ff",
                  fontFamily: "monospace",
                }}
              >
                100
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 2. GRID DE GRÁFICOS ESTATÍSTICOS COMPLETO (2x2) */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "16px",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        {/* G1. MATRIZ DE CRITICIDADE 5x5 */}
        <div
          style={{
            backgroundColor: "#1e1e1e",
            border: "1px solid #2d2d2d",
            borderRadius: "0px",
            padding: "16px",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              borderBottom: "2px solid #0055ff",
              paddingBottom: "6px",
              marginBottom: "12px",
            }}
          >
            <h4
              style={{
                color: "#ffffff",
                fontSize: "12px",
                fontWeight: 600,
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              G1. Matriz de Criticidade de Risco Bruto (S vs O)
            </h4>
          </div>
          <div
            style={{
              height: "180px",
              width: "100%",
              display: "grid",
              gridTemplateColumns: "30px 1fr",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                color: "#aaaaaa",
                fontSize: "9px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transform: "rotate(-90deg)",
                fontWeight: 600,
              }}
            >
              S $\\rightarrow$
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateRows: "repeat(5, 1fr)",
                gap: "2px",
                position: "relative",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(5, 1fr)",
                  gap: "2px",
                }}
              >
                <div style={{ backgroundColor: "#551a1a" }}></div>
                <div style={{ backgroundColor: "#551a1a" }}></div>
                <div style={{ backgroundColor: "#ff3333" }}></div>
                <div style={{ backgroundColor: "#ff3333" }}></div>
                <div style={{ backgroundColor: "#ff3333" }}></div>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(5, 1fr)",
                  gap: "2px",
                }}
              >
                <div style={{ backgroundColor: "#ff9900" }}></div>
                <div style={{ backgroundColor: "#ff9900" }}></div>
                <div style={{ backgroundColor: "#ff9900" }}></div>
                <div style={{ backgroundColor: "#ff3333" }}></div>
                <div style={{ backgroundColor: "#ff3333" }}></div>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(5, 1fr)",
                  gap: "2px",
                }}
              >
                <div style={{ backgroundColor: "#ff9900" }}></div>
                <div style={{ backgroundColor: "#ff9900" }}></div>
                <div style={{ backgroundColor: "#ff9900" }}></div>
                <div style={{ backgroundColor: "#ff9900" }}></div>
                <div style={{ backgroundColor: "#ff3333" }}></div>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(5, 1fr)",
                  gap: "2px",
                }}
              >
                <div style={{ backgroundColor: "#335533" }}></div>
                <div style={{ backgroundColor: "#ff9900" }}></div>
                <div style={{ backgroundColor: "#ff9900" }}></div>
                <div style={{ backgroundColor: "#ff9900" }}></div>
                <div style={{ backgroundColor: "#ff9900" }}></div>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(5, 1fr)",
                  gap: "2px",
                }}
              >
                <div style={{ backgroundColor: "#335533" }}></div>
                <div style={{ backgroundColor: "#335533" }}></div>
                <div style={{ backgroundColor: "#ff9900" }}></div>
                <div style={{ backgroundColor: "#ff9900" }}></div>
                <div style={{ backgroundColor: "#ff9900" }}></div>
              </div>
              {/* Plotagem de Tags Rígidas sobre o Heatmap */}
              <span
                style={{
                  position: "absolute",
                  top: "15%",
                  left: "55%",
                  backgroundColor: "#ffffff",
                  color: "#000",
                  padding: "1px 3px",
                  fontSize: "7px",
                  fontWeight: "bold",
                  fontFamily: "monospace",
                }}
              >
                S1
              </span>
              <span
                style={{
                  position: "absolute",
                  top: "35%",
                  left: "35%",
                  backgroundColor: "#ffffff",
                  color: "#000",
                  padding: "1px 3px",
                  fontSize: "7px",
                  fontWeight: "bold",
                  fontFamily: "monospace",
                }}
              >
                S2
              </span>
              <span
                style={{
                  position: "absolute",
                  top: "5%",
                  left: "15%",
                  backgroundColor: "#ffffff",
                  color: "#000",
                  padding: "1px 3px",
                  fontSize: "7px",
                  fontWeight: "bold",
                  fontFamily: "monospace",
                }}
              >
                S3
              </span>
              <span
                style={{
                  position: "absolute",
                  top: "45%",
                  left: "45%",
                  backgroundColor: "#ffffff",
                  color: "#000",
                  padding: "1px 3px",
                  fontSize: "7px",
                  fontWeight: "bold",
                  fontFamily: "monospace",
                }}
              >
                S4
              </span>
              <span
                style={{
                  position: "absolute",
                  top: "55%",
                  left: "55%",
                  backgroundColor: "#ffffff",
                  color: "#000",
                  padding: "1px 3px",
                  fontSize: "7px",
                  fontWeight: "bold",
                  fontFamily: "monospace",
                }}
              >
                S5
              </span>
              <span
                style={{
                  position: "absolute",
                  top: "5%",
                  left: "25%",
                  backgroundColor: "#ffffff",
                  color: "#000",
                  padding: "1px 3px",
                  fontSize: "7px",
                  fontWeight: "bold",
                  fontFamily: "monospace",
                }}
              >
                S6
              </span>
            </div>
          </div>
          <div
            style={{
              color: "#aaaaaa",
              fontSize: "9px",
              textAlign: "center",
              marginTop: "4px",
              paddingLeft: "30px",
              fontWeight: 600,
            }}
          >
            O $\\rightarrow$
          </div>
        </div>

        {/* G2. DIAGRAMA DE PARETO COMPLETO */}
        <div
          style={{
            backgroundColor: "#1e1e1e",
            border: "1px solid #2d2d2d",
            borderRadius: "0px",
            padding: "16px",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              borderBottom: "2px solid #0055ff",
              paddingBottom: "6px",
              marginBottom: "12px",
            }}
          >
            <h4
              style={{
                color: "#ffffff",
                fontSize: "12px",
                fontWeight: 600,
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              G2. Diagrama de Pareto - Carga Acumulada de RPN
            </h4>
          </div>
          <div
            style={{
              height: "180px",
              width: "100%",
              position: "relative",
              display: "flex",
              alignItems: "flex-end",
              paddingLeft: "30px",
              paddingBottom: "20px",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                width: "14%",
                height: "90%",
                backgroundColor: "#ff3333",
                marginRight: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "8px",
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              216
            </div>
            <div
              style={{
                width: "14%",
                height: "54%",
                backgroundColor: "#ff9900",
                marginRight: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "8px",
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              120
            </div>
            <div
              style={{
                width: "14%",
                height: "50%",
                backgroundColor: "#ff9900",
                marginRight: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "8px",
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              112
            </div>
            <div
              style={{
                width: "14%",
                height: "44%",
                backgroundColor: "#00e5ff",
                marginRight: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "8px",
                color: "#000",
                fontWeight: "bold",
              }}
            >
              100
            </div>
            <div
              style={{
                width: "14%",
                height: "40%",
                backgroundColor: "#00e5ff",
                marginRight: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "8px",
                color: "#000",
                fontWeight: "bold",
              }}
            >
              90
            </div>
            <div
              style={{
                width: "14%",
                height: "36%",
                backgroundColor: "#00ff66",
                marginRight: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "8px",
                color: "#000",
                fontWeight: "bold",
              }}
            >
              80
            </div>
            <svg
              style={{
                position: "absolute",
                top: 0,
                left: "30px",
                width: "calc(100% - 40px)",
                height: "calc(100% - 20px)",
                overflow: "visible",
              }}
            >
              <path
                d="M 10 130 L 45 85 L 80 60 L 115 40 L 150 25 L 185 10"
                fill="none"
                stroke="#00ff66"
                strokeWidth="2"
              />
            </svg>
            <div
              style={{
                position: "absolute",
                bottom: "20px",
                left: "30px",
                right: "10px",
                height: "1px",
                backgroundColor: "#3d3d3d",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                top: "5px",
                bottom: "20px",
                left: "30px",
                width: "1px",
                backgroundColor: "#3d3d3d",
              }}
            ></div>
            <span
              style={{
                position: "absolute",
                bottom: "4px",
                left: "50%",
                fontSize: "8px",
                color: "#aaaaaa",
                transform: "translateX(-50%)",
                fontFamily: "monospace",
              }}
            >
              S1 | S5 | S2 | S6 | S4 | S3
            </span>
          </div>
        </div>

        {/* G3. GRÁFICO EWMA */}
        <div
          style={{
            backgroundColor: "#1e1e1e",
            border: "1px solid #2d2d2d",
            borderRadius: "0px",
            padding: "16px",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              borderBottom: "2px solid #0055ff",
              paddingBottom: "6px",
              marginBottom: "12px",
            }}
          >
            <h4
              style={{
                color: "#ffffff",
                fontSize: "12px",
                fontWeight: 600,
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              G3. Controle Estatístico EWMA (Pressão Caldeira)
            </h4>
          </div>
          <div style={{ height: "120px", width: "100%", position: "relative" }}>
            <div
              style={{
                position: "absolute",
                top: "20%",
                left: "30px",
                right: "10px",
                height: "1px",
                borderTop: "1px dashed #ff3333",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                top: "80%",
                left: "30px",
                right: "10px",
                height: "1px",
                borderTop: "1px dashed #ff3333",
              }}
            ></div>
            <svg
              style={{
                width: "100%",
                height: "100%",
                paddingLeft: "30px",
                paddingBottom: "20px",
                boxSizing: "border-box",
                overflow: "visible",
              }}
            >
              <path
                d="M 0 60 L 40 55 L 80 65 L 120 40 L 160 75 L 200 58 L 240 61 L 280 59"
                fill="none"
                stroke="#00e5ff"
                strokeWidth="2"
              />
            </svg>
            <div
              style={{
                position: "absolute",
                bottom: "20px",
                left: "30px",
                right: "10px",
                height: "1px",
                backgroundColor: "#3d3d3d",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                top: "5px",
                bottom: "20px",
                left: "30px",
                width: "1px",
                backgroundColor: "#3d3d3d",
              }}
            ></div>
          </div>
        </div>

        {/* G4. SCATTER PLOT FADIGA */}
        <div
          style={{
            backgroundColor: "#1e1e1e",
            border: "1px solid #2d2d2d",
            borderRadius: "0px",
            padding: "16px",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              borderBottom: "2px solid #0055ff",
              paddingBottom: "6px",
              marginBottom: "12px",
            }}
          >
            <h4
              style={{
                color: "#ffffff",
                fontSize: "12px",
                fontWeight: 600,
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              G4. Fadiga Ocupacional vs Horas Extras (SESMT)
            </h4>
          </div>
          <div style={{ height: "120px", width: "100%", position: "relative" }}>
            <svg
              style={{
                width: "100%",
                height: "100%",
                paddingLeft: "30px",
                paddingBottom: "20px",
                boxSizing: "border-box",
              }}
            >
              <line
                x1="10%"
                y1="90%"
                x2="90%"
                y2="20%"
                stroke="#ff9900"
                strokeWidth="1"
                strokeDasharray="3,3"
              />
              <circle cx="20%" cy="80%" r="3" fill="#00ff66" />
              <circle cx="35%" cy="70%" r="3" fill="#00ff66" />
              <circle cx="45%" cy="55%" r="3" fill="#ff9900" />
              <circle cx="60%" cy="45%" r="3" fill="#ff9900" />
              <circle cx="75%" cy="25%" r="3" fill="#ff3333" />
            </svg>
            <div
              style={{
                position: "absolute",
                bottom: "20px",
                left: "30px",
                right: "10px",
                height: "1px",
                backgroundColor: "#3d3d3d",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                top: "5px",
                bottom: "30px",
                left: "30px",
                width: "1px",
                backgroundColor: "#3d3d3d",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AnovaBusinessMetrics: React.FC = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "16px",
        width: "100%",
        backgroundColor: "#121212", // Fundo padrão do sistema
        padding: "16px 0",
        boxSizing: "border-box",
      }}
    >
      {/* CARD 1: IMPACTO FINANCEIRO */}
      <div
        style={{
          backgroundColor: "#1e1e1e",
          border: "1px solid #2d2d2d",
          borderRadius: "0px", // Cantos vivos (zero radius)
          padding: "16px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            fontSize: "11px",
            color: "#aaaaaa",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.5px",
          }}
        >
          Impacto Financeiro Estimado (COPQ)
        </div>
        <div
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "#ff3333",
            margin: "8px 0 4px 0",
            fontFamily: "monospace",
          }}
        >
          R$ 1.42M
        </div>
        <div style={{ fontSize: "11px", color: "#888888", lineHeight: "1.4" }}>
          Custo de má qualidade por dias adicionais de canteiro gerados pelo gap
          de produtividade regional (73.50 vs. 84.20).
        </div>
      </div>

      {/* CARD 2: PROGRAMA DE QUALIFICAÇÃO */}
      <div
        style={{
          backgroundColor: "#1e1e1e",
          border: "1px solid #2d2d2d",
          borderRadius: "0px", // Cantos vivos (zero radius)
          padding: "16px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            fontSize: "11px",
            color: "#aaaaaa",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.5px",
          }}
        >
          Aderência ao Treinamento (PEL)
        </div>
        <div
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "#00e5ff",
            margin: "8px 0 4px 0",
            fontFamily: "monospace",
          }}
        >
          42.0%
        </div>
        {/* Barra de Progresso Rígida */}
        <div
          style={{
            width: "100%",
            height: "6px",
            backgroundColor: "#2d2d2d",
            borderRadius: "0px",
            margin: "8px 0",
          }}
        >
          <div
            style={{
              width: "42%",
              height: "100%",
              backgroundColor: "#00e5ff",
              borderRadius: "0px",
            }}
          ></div>
        </div>
        <div style={{ fontSize: "11px", color: "#888888", lineHeight: "1.4" }}>
          Força de trabalho local de Inocência integrada e ativa nos cursos
          acelerados de montagem industrial via parceria SENAI/Arauco.
        </div>
      </div>

      {/* CARD 3: CAPACIDADE DE ABSORÇÃO */}
      <div
        style={{
          backgroundColor: "#1e1e1e",
          border: "1px solid #2d2d2d",
          borderRadius: "0px", // Cantos vivos (zero radius)
          padding: "16px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            fontSize: "11px",
            color: "#aaaaaa",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.5px",
          }}
        >
          Capacidade de Absorção Regional
        </div>
        <div
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "#00ff66",
            margin: "8px 0 4px 0",
            fontFamily: "monospace",
          }}
        >
          1.500 /{" "}
          <span style={{ fontSize: "14px", color: "#888888" }}>10k</span>
        </div>
        <div style={{ fontSize: "11px", color: "#888888", lineHeight: "1.4" }}>
          Headcount ativo oriundo de Inocência necessitando de reciclagem e
          nivelamento técnico imediato para atingir o Nível Sigma esperado.
        </div>
      </div>
    </div>
  );
};

export const RegressionQueuesCharts: React.FC = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "16px",
        width: "100%",
        backgroundColor: "#121212",
        padding: "16px 0",
        boxSizing: "border-box",
      }}
    >
      {/* 1. GRÁFICO DE REGRESSÃO MULTIPLA (PIB DE INOCÊNCIA) */}
      <div
        style={{
          backgroundColor: "#1e1e1e",
          border: "1px solid #2d2d2d",
          borderRadius: "0px",
          padding: "16px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "between",
            alignItems: "center",
            marginBottom: "12px",
            borderBottom: "2px solid #0055ff",
            paddingBottom: "6px",
          }}
        >
          <h3
            style={{
              color: "#ffffff",
              fontSize: "13px",
              fontWeight: 600,
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            M1. Resíduos vs. Valores Ajustados (Regressão Múltipla)
          </h3>
          <span
            style={{
              color: "#00ff66",
              fontFamily: "monospace",
              fontSize: "11px",
              fontWeight: "bold",
            }}
          >
            R² Adj: 0.942
          </span>
        </div>
        <div
          style={{
            height: "180px",
            width: "100%",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* Linha Zero de Neutralidade dos Resíduos */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "40px",
              right: "10px",
              height: "1px",
              borderTop: "1px dashed #555555",
            }}
          ></div>
          <span
            style={{
              position: "absolute",
              right: "15px",
              top: "42%",
              fontSize: "9px",
              color: "#888888",
              fontFamily: "monospace",
            }}
          >
            Linha Zero
          </span>

          {/* Plotagem SVG dos Resíduos Estocásticos */}
          <svg
            style={{
              width: "100%",
              height: "100%",
              paddingLeft: "40px",
              paddingBottom: "20px",
              boxSizing: "border-box",
            }}
          >
            {/* Pontos de Resíduos (X: Valor Ajustado do PIB, Y: Desvio do Resíduo) */}
            <circle cx="15%" cy="30%" r="4" fill="#00e5ff" opacity="0.7" />
            <circle cx="25%" cy="70%" r="4" fill="#00e5ff" opacity="0.7" />
            <circle cx="38%" cy="45%" r="4" fill="#00e5ff" opacity="0.7" />
            <circle cx="45%" cy="55%" r="4" fill="#00e5ff" opacity="0.7" />
            <circle cx="55%" cy="20%" r="4" fill="#00e5ff" opacity="0.7" />
            <circle cx="68%" cy="85%" r="4" fill="#ff3333" opacity="0.8" />{" "}
            {/* Outlier controlado */}
            <circle cx="75%" cy="40%" r="4" fill="#00e5ff" opacity="0.7" />
            <circle cx="88%" cy="60%" r="4" fill="#00e5ff" opacity="0.7" />
            <circle cx="93%" cy="50%" r="4" fill="#00e5ff" opacity="0.7" />
          </svg>
          {/* Eixos */}
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              left: "40px",
              right: "10px",
              height: "1px",
              backgroundColor: "#3d3d3d",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              top: "5px",
              bottom: "20px",
              left: "40px",
              width: "1px",
              backgroundColor: "#3d3d3d",
            }}
          ></div>
          <span
            style={{
              position: "absolute",
              bottom: "2px",
              left: "50%",
              fontSize: "9px",
              color: "#aaaaaa",
              transform: "translateX(-50%)",
            }}
          >
            Valores Ajustados do PIB (Ŷ)
          </span>
          <span
            style={{
              position: "absolute",
              top: "45%",
              left: "5px",
              fontSize: "9px",
              color: "#aaaaaa",
              transform: "rotate(-90deg)",
            }}
          >
            Resíduos (e)
          </span>
        </div>
      </div>

      {/* 2. SIMULAÇÃO DE MONTE CARLO (CRONOGRAMA START-UP 2027) */}
      <div
        style={{
          backgroundColor: "#1e1e1e",
          border: "1px solid #2d2d2d",
          borderRadius: "0px",
          padding: "16px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "between",
            alignItems: "center",
            marginBottom: "12px",
            borderBottom: "2px solid #0055ff",
            paddingBottom: "6px",
          }}
        >
          <h3
            style={{
              color: "#ffffff",
              fontSize: "13px",
              fontWeight: 600,
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            M2. Histograma Probabilístico (10.000 Iterações)
          </h3>
          <span
            style={{
              color: "#00e5ff",
              fontFamily: "monospace",
              fontSize: "11px",
              fontWeight: "bold",
            }}
          >
            P50: Dez/2027
          </span>
        </div>
        <div
          style={{
            height: "180px",
            width: "100%",
            position: "relative",
            display: "flex",
            alignItems: "flex-end",
            paddingLeft: "40px",
            paddingBottom: "20px",
            boxSizing: "border-box",
          }}
        >
          {/* Barras do Histograma da Distribuição de Probabilidade do Prazo */}
          <div
            style={{
              width: "8%",
              height: "15%",
              backgroundColor: "#2d2d2d",
              marginRight: "2px",
            }}
          ></div>
          <div
            style={{
              width: "8%",
              height: "35%",
              backgroundColor: "#3d3d3d",
              marginRight: "2px",
            }}
          ></div>
          <div
            style={{
              width: "8%",
              height: "65%",
              backgroundColor: "#0055ff",
              opacity: 0.6,
              marginRight: "2px",
            }}
          ></div>
          <div
            style={{
              width: "8%",
              height: "85%",
              backgroundColor: "#0055ff",
              opacity: 0.8,
              marginRight: "2px",
            }}
          ></div>
          <div
            style={{
              width: "8%",
              height: "95%",
              backgroundColor: "#00e5ff",
              marginRight: "2px",
            }}
          ></div>{" "}
          {/* P50 - Pico */}
          <div
            style={{
              width: "8%",
              height: "75%",
              backgroundColor: "#0055ff",
              opacity: 0.8,
              marginRight: "2px",
            }}
          ></div>
          <div
            style={{
              width: "8%",
              height: "50%",
              backgroundColor: "#0055ff",
              opacity: 0.6,
              marginRight: "2px",
            }}
          ></div>
          <div
            style={{
              width: "8%",
              height: "30%",
              backgroundColor: "#ff9900",
              marginRight: "2px",
            }}
          ></div>{" "}
          {/* Zona de Atraso */}
          <div
            style={{
              width: "8%",
              height: "15%",
              backgroundColor: "#ff3333",
              marginRight: "2px",
            }}
          ></div>
          {/* Curva S Acumulada Sobreposta (Sigmoide Estocástica) */}
          <svg
            style={{
              position: "absolute",
              top: 0,
              left: "40px",
              width: "calc(100% - 50px)",
              height: "calc(100% - 20px)",
              overflow: "visible",
            }}
          >
            <path
              d="M 10 150 Q 80 140 120 80 T 300 10"
              fill="none"
              stroke="#00ff66"
              strokeWidth="2"
            />
          </svg>
          {/* Eixos */}
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              left: "40px",
              right: "10px",
              height: "1px",
              backgroundColor: "#3d3d3d",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              top: "5px",
              bottom: "20px",
              left: "40px",
              width: "1px",
              backgroundColor: "#3d3d3d",
            }}
          ></div>
          <span
            style={{
              position: "absolute",
              bottom: "2px",
              left: "50%",
              fontSize: "9px",
              color: "#aaaaaa",
              transform: "translateX(-50%)",
            }}
          >
            Linha do Tempo da Obra (Meses / Cenários)
          </span>
          <span
            style={{
              position: "absolute",
              top: "45%",
              left: "5px",
              fontSize: "9px",
              color: "#aaaaaa",
              transform: "rotate(-90deg)",
            }}
          >
            Frequência / % Acum.
          </span>
        </div>
      </div>

      {/* 3. CAPABILIDADE DO PROCESSO CPK (CALDEIRA VALMET 300T) */}
      <div
        style={{
          backgroundColor: "#1e1e1e",
          border: "1px solid #2d2d2d",
          borderRadius: "0px",
          padding: "16px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "between",
            alignItems: "center",
            marginBottom: "12px",
            borderBottom: "2px solid #0055ff",
            paddingBottom: "6px",
          }}
        >
          <h3
            style={{
              color: "#ffffff",
              fontSize: "13px",
              fontWeight: 600,
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            M3. Distribuição de Capabilidade do Processo (Cpk)
          </h3>
          <span
            style={{
              color: "#00ff66",
              fontFamily: "monospace",
              fontSize: "11px",
              fontWeight: "bold",
            }}
          >
            Cpk: 1.42 (4.2σ)
          </span>
        </div>
        <div
          style={{
            height: "180px",
            width: "100%",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* Linhas Limites Rígidas de Engenharia (LIE e LSE) */}
          <div
            style={{
              position: "absolute",
              left: "25%",
              top: "10px",
              bottom: "20px",
              width: "1px",
              borderLeft: "1px dashed #ff3333",
            }}
          ></div>
          <span
            style={{
              position: "absolute",
              left: "26%",
              top: "15px",
              fontSize: "8px",
              color: "#ff3333",
              fontFamily: "monospace",
            }}
          >
            LIE: 85 bar
          </span>

          <div
            style={{
              position: "absolute",
              left: "75%",
              top: "10px",
              bottom: "20px",
              width: "1px",
              borderLeft: "1px dashed #ff3333",
            }}
          ></div>
          <span
            style={{
              position: "absolute",
              left: "67%",
              top: "15px",
              fontSize: "8px",
              color: "#ff3333",
              fontFamily: "monospace",
            }}
          >
            LSE: 115 bar
          </span>

          {/* Curva Gaussiana de Processo Centralizada */}
          <svg
            style={{
              width: "100%",
              height: "100%",
              paddingLeft: "40px",
              paddingBottom: "20px",
              boxSizing: "border-box",
              overflow: "visible",
            }}
          >
            <path
              d="M 10 150 Q 110 150 150 20 T 290 150"
              fill="none"
              stroke="#00ff66"
              strokeWidth="2"
            />
            {/* Linha da Média */}
            <line
              x1="150"
              y1="20"
              x2="150"
              y2="150"
              stroke="#00e5ff"
              strokeWidth="1"
              strokeDasharray="2,2"
            />
          </svg>

          {/* Eixos */}
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              left: "40px",
              right: "10px",
              height: "1px",
              backgroundColor: "#3d3d3d",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              top: "5px",
              bottom: "20px",
              left: "40px",
              width: "1px",
              backgroundColor: "#3d3d3d",
            }}
          ></div>
          <span
            style={{
              position: "absolute",
              bottom: "2px",
              left: "50%",
              fontSize: "9px",
              color: "#aaaaaa",
              transform: "translateX(-50%)",
            }}
          >
            Pressão do Vapor de Licor Negro (Bar)
          </span>
          <span
            style={{
              position: "absolute",
              top: "45%",
              left: "5px",
              fontSize: "9px",
              color: "#aaaaaa",
              transform: "rotate(-90deg)",
            }}
          >
            Densidade
          </span>
        </div>
      </div>

      {/* 4. TEORIA DAS FILAS M/M/c (RAMAL FERROVIÁRIO R$ 2,4B) */}
      <div
        style={{
          backgroundColor: "#1e1e1e",
          border: "1px solid #2d2d2d",
          borderRadius: "0px",
          padding: "16px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "between",
            alignItems: "center",
            marginBottom: "12px",
            borderBottom: "2px solid #0055ff",
            paddingBottom: "6px",
          }}
        >
          <h3
            style={{
              color: "#ffffff",
              fontSize: "13px",
              fontWeight: 600,
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            M4. Curva de Saturação Estocástica do Pátio (M/M/c)
          </h3>
          <span
            style={{
              color: "#ff9900",
              fontFamily: "monospace",
              fontSize: "11px",
              fontWeight: "bold",
            }}
          >
            ρ Ocupação: 78%
          </span>
        </div>
        <div
          style={{
            height: "180px",
            width: "100%",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* Zona Crítica de Saturação Logística (>85%) */}
          <div
            style={{
              position: "absolute",
              left: "85%",
              top: "10px",
              bottom: "20px",
              right: "10px",
              backgroundColor: "rgba(255,51,51,0.08)",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              left: "85%",
              top: "10px",
              bottom: "20px",
              width: "1px",
              borderLeft: "1px dotted #ff3333",
            }}
          ></div>
          <span
            style={{
              position: "absolute",
              left: "86%",
              top: "40px",
              fontSize: "8px",
              color: "#ff3333",
              transform: "rotate(90deg)",
              transformOrigin: "left top",
            }}
          >
            Gargalo Estocástico
          </span>

          {/* Curva Exponencial de Espera (Filas de Kendall) */}
          <svg
            style={{
              width: "100%",
              height: "100%",
              paddingLeft: "40px",
              paddingBottom: "20px",
              boxSizing: "border-box",
              overflow: "visible",
            }}
          >
            <path
              d="M 0 145 Q 200 140 250 80 T 310 5"
              fill="none"
              stroke="#ff9900"
              strokeWidth="2"
            />
          </svg>

          {/* Eixos */}
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              left: "40px",
              right: "10px",
              height: "1px",
              backgroundColor: "#3d3d3d",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              top: "5px",
              bottom: "20px",
              left: "40px",
              width: "1px",
              backgroundColor: "#3d3d3d",
            }}
          ></div>
          <span
            style={{
              position: "absolute",
              bottom: "2px",
              left: "50%",
              fontSize: "9px",
              color: "#aaaaaa",
              transform: "translateX(-50%)",
            }}
          >
            Taxa de Utilização Operacional (ρ)
          </span>
          <span
            style={{
              position: "absolute",
              top: "45%",
              left: "5px",
              fontSize: "9px",
              color: "#aaaaaa",
              transform: "rotate(-90deg)",
            }}
          >
            Tempo na Fila (Wq)
          </span>
        </div>
      </div>
    </div>
  );
};

export const SucuriuMinitabConsole: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    | "SIX_SIGMA"
    | "ANOVA"
    | "FMEA"
    | "DMAIC"
    | "PEOPLE_ANALYTICS"
    | "PESTEL"
    | "CRONOGRAMA"
    | "GOVERNANCA"
  >("SIX_SIGMA");
  const [isTimelineModalOpen, setIsTimelineModalOpen] = useState(false);

  const timelineRows = sucuriuTimeline.map((event, idx) => {
    const relevanciaClass =
      event.relevancia === "Alta (Crítica)"
        ? "bg-red-950/40 text-red-400 border border-red-900/60"
        : event.relevancia === "Estratégica"
          ? "bg-blue-950/40 text-blue-400 border border-blue-900/60"
          : "bg-gray-900 text-gray-400 border border-gray-800";

    return (
      <tr
        key={idx}
        className="border-b border-[#111] bg-[#080808] hover:bg-[#0c0c0c] transition-colors text-gray-400"
      >
        <td className="p-3 font-bold text-white border-r border-[#1c1c1c] font-sans">
          {event.data}
        </td>
        <td className="p-3 font-bold text-gray-200 border-r border-[#1c1c1c] font-sans">
          {event.titulo}
        </td>
        <td className="p-3 text-lg text-purple-400 border-r border-[#1c1c1c] uppercase tracking-tighter">
          {event.tipo}
        </td>
        <td className="p-3 text-lg text-gray-400 leading-relaxed font-sans">
          {event.resumo}
        </td>
        <td className="p-3 text-base border-r border-[#1c1c1c]">
          <a
            href={event.linkOficial}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline hover:text-[#2997ff] transition-colors break-all block font-sans"
          >
            {event.fonte} ↗
          </a>
        </td>
        <td className="p-3 text-center font-sans text-base">
          <span
            className={`px-2 py-0.5 font-bold ${relevanciaClass} rounded-none`}
          >
            {event.relevancia}
          </span>
        </td>
      </tr>
    );
  });

  const boxplotSeries = (minitabAnovaOutput.mediasEmpreiteiras || []).map(m => {
    const n = Number(m.n ?? 10) || 10;
    const mean = Number(m.media ?? 0) || 0;
    const stDev = Number(m.stDev ?? 1) || 1;
    const values = Array.from({ length: n }, (_, i) => {
      const center = (n - 1) / 2;
      return mean + (i - center) * (stDev / Math.max(1, center));
    });
    return { name: String(m.regiao ?? ""), values };
  });

  return (
    <div>
      {isTimelineModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-[#0b0b0b] border border-[#2997ff] rounded-none max-w-4xl w-full max-h-[85vh] overflow-y-auto p-6 relative font-sans">
            <button
              onClick={() => setIsTimelineModalOpen(false)}
              className="absolute top-4 right-4 bg-[#0c0c0c] border border-[#1c1c1c] text-[#2997ff] px-3 py-1 text-sm rounded-none"
            >
              [ FECHAR CONSOLE ]
            </button>

            <h2 className="text-lg font-bold text-[#0077ff] mb-4">
              Linha do Tempo — Visualização Gráfica (Minitab Style)
            </h2>

            <TimelineChart data={sucuriuTimeline} />

            <div className="relative">
              <div className="absolute left-8 top-6 bottom-6 w-px bg-[#1c1c1c]" />
              <div className="space-y-6 pl-20">
                {sucuriuTimeline.map((node, idx) => {
                  const colorClass =
                    node.relevancia === "Alta (Crítica)"
                      ? "bg-[#ff3b3b] border-[#7a1a1a]"
                      : node.relevancia === "Estratégica"
                        ? "bg-[#0077ff] border-[#004bb5]"
                        : "bg-[#6b7280] border-[#4b5563]";

                  const badgeClass =
                    node.relevancia === "Alta (Crítica)"
                      ? "bg-[#2b0505] text-[#ff6b6b] border border-[#7a1a1a]"
                      : node.relevancia === "Estratégica"
                        ? "bg-[#001433] text-[#7ec3ff] border border-[#004bb5]"
                        : "bg-[#0b0b0b] text-[#bdbdbd] border border-[#2f3133]";

                  return (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-12 flex flex-col items-center">
                        <div
                          className={`w-4 h-4 ${colorClass} rounded-none border`}
                        ></div>
                        <div className="flex-1 w-px bg-[#1c1c1c] mt-2" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-[#d1d1d1] font-sans">
                            {node.data}
                          </div>
                          <span
                            className={`px-2 py-0.5 text-sm font-bold ${badgeClass} rounded-none`}
                          >
                            {node.relevancia}
                          </span>
                        </div>
                        <div className="mt-1 text-lg font-bold text-[#eaeaea]">
                          {node.titulo}
                        </div>
                        <div className="mt-1 text-sm text-gray-400 leading-relaxed">
                          {node.resumo}
                        </div>
                        {node.linkOficial ? (
                          <a
                            href={node.linkOficial}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-2 inline-block text-[#0077ff] hover:text-[#2997ff] underline rounded-none"
                          >
                            Fonte oficial ↗
                          </a>
                        ) : null}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div>
            <RegressionQueuesCharts />
          </div>
        </div>
      )}

      <div className="bg-[#0b0b0b] text-[#eaeaea] p-6 md:p-8 border border-[#1c1c1c] font-sans text-left w-full mx-auto rounded-none selection:bg-[#2997ff] selection:text-black text-base">
        {/* Terminal Header */}
        <div className="border-b border-[#2997ff] pb-6 mb-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
            <div>
              <span className="bg-[#2997ff] text-black text-[10px] px-2 py-0.5 font-bold uppercase tracking-wider rounded-none">
                MINITAB 21.4 COMPREHENSIVE SUITE — UNIFIED 360° REPORT
              </span>
              <h1 className="text-2xl font-bold mt-3 tracking-tight text-white uppercase">
                Projeto Sucuriú Arauco — Macroambiente e Arquitetura Estatística
              </h1>
            </div>
            <div className="text-right text-sm text-gray-500 font-bold bg-[#111] p-2 border border-[#222]">
              AUDITORIA INTERNA: 2026
            </div>
          </div>

          {/* Resumo de Indicadores Rápidos */}
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-2 text-sm border-t border-[#1c1c1c] pt-4">
            <div>
              <span className="text-gray-500">CAPEX COMPLETO:</span>{" "}
              <span className="text-[#2997ff] font-bold">
                {sucuriuCoreMetrics.investimentoTotal}
              </span>
            </div>
            <div>
              <span className="text-gray-500">PRODUÇÃO ALVO:</span>{" "}
              <span className="text-white font-bold">
                {sucuriuCoreMetrics.capacidadeProducao}
              </span>
            </div>
            <div>
              <span className="text-gray-500">BASE FLORESTAL:</span>{" "}
              <span className="text-white font-bold">
                {sucuriuCoreMetrics.baseFlorestal}
              </span>
            </div>
            <div>
              <span className="text-gray-500">MATRIZ BIOENERGIA:</span>{" "}
              <span className="text-white font-bold">
                {sucuriuCoreMetrics.matrizEnergetica}
              </span>
            </div>
          </div>

          {/* Status Tracker 2026 */}
          <div className="mt-2 text-sm bg-[#0c0c0c] p-2 border border-[#151515] text-gray-400 space-y-0.5">
            <div>
              •{" "}
              <span className="text-gray-500">
                AVANÇO GLOBAL DE ENGENHARIA:
              </span>{" "}
              <span className="text-[#00ff66] font-bold">
                {sucuriuCoreMetrics.statusGlobal}
              </span>
            </div>
            <div>
              •{" "}
              <span className="text-gray-500">MONTAGEM INDUSTRIAL VALMET:</span>{" "}
              <span className="text-blue-400 font-bold">
                {sucuriuCoreMetrics.montagemCivil}
              </span>
            </div>
            <div>
              • <span className="text-gray-500">HEADCOUNT ATIVO EM CAMPO:</span>{" "}
              <span className="text-white font-bold">
                {sucuriuCoreMetrics.headcountCampo}
              </span>
            </div>
            <div>
              •{" "}
              <span className="text-gray-500">FINANCIAMENTO ESTRUTURADO:</span>{" "}
              <span className="text-gray-400">
                {sucuriuCoreMetrics.financiamentoEstruturado}
              </span>
            </div>
          </div>
        </div>

        {/* Abas Horizontais Dinâmicas (Zero Radius) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:flex flex-wrap gap-[2px] mb-6">
          {(
            [
              { id: "SIX_SIGMA", label: "1. Regressão & Filas" },
              { id: "ANOVA", label: "2. Output ANOVA" },
              { id: "FMEA", label: "3. Matriz FMEA" },
              { id: "DMAIC", label: "4. Roadmap DMAIC" },
              { id: "PEOPLE_ANALYTICS", label: "5. People Analytics" },
              { id: "PESTEL", label: "6. Macro PESTEL" },
              { id: "CRONOGRAMA", label: "7. Linha do Tempo" },
              { id: "GOVERNANCA", label: "8. Governança" },
            ] as const
          ).map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-3 text-sm font-bold uppercase transition-all duration-300 border-none cursor-pointer rounded-none text-center flex-1 ${
                activeTab === tab.id
                  ? "bg-[#2997ff] text-black"
                  : "bg-[#121212] text-gray-500 hover:bg-[#1c1c1c] hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* RENDERIZAÇÃO DE ABAS */}

        {/* ABA 1: MODELOS REGRESSÃO E FILAS */}
        {activeTab === "SIX_SIGMA" && (
          <div className="space-y-4">
            <div className="overflow-x-auto border border-[#1c1c1c]">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="bg-[#141414] border-b border-[#1c1c1c] text-gray-500 text-sm">
                    <th className="p-3 w-1/4">Metodologia</th>
                    <th className="p-3 w-1/4">Equação / Formulação</th>
                    <th className="p-3 w-1/3">Aplicação Operacional</th>
                    <th className="p-3">Validação & Premissas</th>
                  </tr>
                </thead>
                <tbody>
                  {statisticalModels.map((m, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-[#111] bg-[#080808] hover:bg-[#0c0c0c] transition-colors"
                    >
                      <td className="p-3 font-bold text-white border-r border-[#1c1c1c]">
                        {m.metodologia}
                      </td>
                      <td className="p-3 text-blue-400 font-bold bg-[#040404] border-r border-[#1c1c1c] text-center select-all">
                        {m.equacaoFormula}
                      </td>
                      <td className="p-3 text-gray-300 border-r border-[#1c1c1c] leading-relaxed">
                        {m.aplicacaoSucuriu}
                      </td>
                      <td className="p-3 text-sm text-gray-500 space-y-1">
                        <div>
                          <strong className="text-gray-400">Alvo:</strong>{" "}
                          {m.metricaValidacao
                            .map(v => `${v.nome}: ${v.valor}`)
                            .join(" | ")}
                        </div>
                        <div className="text-sm border-t border-[#151515] pt-1 mt-1">
                          <strong className="text-gray-400">Premissa:</strong>{" "}
                          {m.premissaEstatistica.join(" ")}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div>
              <RegressionQueuesModule />
              <RegressionQueuesBusinessMetrics />
            </div>
          </div>
        )}

        {/* ABA 2: ANOVA */}
        {/* ABA 2: ANOVA COMPLETA ESTILO MINITAB */}
        {activeTab === "ANOVA" && (
          <div className="space-y-6">
            <div className="bg-[#080808] border border-[#1c1c1c] p-6 space-y-4">
              <div className="bg-[#0c0c0c] border border-[#1c1c1c] rounded-none p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
                  <div className="leading-relaxed">
                    {
                      "1. REGRA DE DECISÃO DO P-VALUE: Se p-value <= alpha (0.05): Rejeita-se a hipótese nula. Há evidências estáveis de que pelo menos uma das médias de produtividade regional difere das demais."
                    }
                  </div>
                  <div className="leading-relaxed">
                    {
                      "2. COMPREENSÃO DO F-VALUE: Um F-Value elevado (14.23) indica que a variabilidade entre as regiões é substancialmente maior do que a variabilidade interna, provando o peso do fator locacional."
                    }
                  </div>
                  <div className="leading-relaxed">
                    {
                      "3. INTERPRETAÇÃO DOS INTERVALOS (IC): Se os Intervalos de Confiança de 95% não se sobrepõem na projeção, as médias correspondentes são significativamente diferentes."
                    }
                  </div>
                </div>
              </div>

              {/* Cabeçalho do Teste de Hipóteses */}
              <div>
                <h3 className="text-sm font-bold text-[#0077ff] uppercase tracking-wider mb-2">
                  {minitabAnovaOutput.titulo}
                </h3>
                <div className="bg-[#030303] p-3 border border-[#151515] space-y-1 text-sm text-gray-400">
                  <div>
                    <strong>Method — Hipótese Nula (H₀):</strong>{" "}
                    <span className="text-gray-200 font-sans">
                      {minitabAnovaOutput.hipoteseNula}
                    </span>
                  </div>
                  <div>
                    <strong>Method — Hipótese Alternativa (H₁):</strong>{" "}
                    <span className="text-gray-200 font-sans">
                      {minitabAnovaOutput.hipoteseAlternativa}
                    </span>
                  </div>
                  <div className="text-[10px] text-gray-500 pt-1">
                    Significance level: α = 0.05
                  </div>
                </div>
              </div>

              {/* 1. Tabela de Variância Clássica (ANOVA) */}
              <div>
                <div className="text-sm text-gray-500 font-bold mb-1.5 uppercase">
                  Analysis of Variance (Tabela Geral)
                </div>
                <div className="overflow-x-auto border border-[#1c1c1c]">
                  <table className="w-full text-sm text-left border-collapse">
                    <thead>
                      <tr className="bg-[#141414] border-b border-[#1c1c1c] text-gray-500 text-[10px]">
                        <th className="p-2.5">Fonte de Variação</th>
                        <th className="p-2.5 text-center">DF</th>
                        <th className="p-2.5 text-center">Adj SS</th>
                        <th className="p-2.5 text-center">Adj MS</th>
                        <th className="p-2.5 text-center">F-Value</th>
                        <th className="p-2.5 text-center text-blue-400">
                          p-value
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {minitabAnovaOutput.tabela.map((row, idx) => (
                        <tr
                          key={idx}
                          className="border-b border-[#111] bg-[#0b0b0b] text-gray-300 font-sans"
                        >
                          <td className="p-2.5 font-bold text-white">
                            {row.fonte}
                          </td>
                          <td className="p-2.5 text-center">{row.df}</td>
                          <td className="p-2.5 text-center">{row.ss}</td>
                          <td className="p-2.5 text-center">
                            {row.ms ? row.ms.toFixed(2) : "*"}
                          </td>
                          <td className="p-2.5 text-center font-bold">
                            {row.fStat ? row.fStat : "*"}
                          </td>
                          <td
                            className={`p-2.5 text-center font-bold ${row.pValue !== null && row.pValue < 0.05 ? "text-[#00ff66]" : ""}`}
                          >
                            {row.pValue !== null ? row.pValue.toFixed(4) : "*"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Grid Intermediário: Resumo do Modelo e Agrupamento Tukey */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* 2. Model Summary */}
                <div className="bg-[#0b0b0b] border border-[#151515] p-3 font-sans">
                  <div className="text-[11px] text-gray-500 font-bold mb-2 uppercase">
                    Model Summary
                  </div>
                  <div className="grid grid-cols-2 gap-y-2 text-sm">
                    <div>
                      <span className="text-gray-500">S (Desvio Padrão):</span>
                    </div>
                    <div className="text-white font-bold text-right">
                      {minitabAnovaOutput.resumoModelo.s}
                    </div>
                    <div>
                      <span className="text-gray-500">R-sq:</span>
                    </div>
                    <div className="text-white font-bold text-right">
                      {minitabAnovaOutput.resumoModelo.rSq}
                    </div>
                    <div>
                      <span className="text-gray-500">R-sq(adj):</span>
                    </div>
                    <div className="text-[#0077ff] font-bold text-right">
                      {minitabAnovaOutput.resumoModelo.rSqAdj}
                    </div>
                    <div>
                      <span className="text-gray-500">R-sq(pred):</span>
                    </div>
                    <div className="text-amber-500 font-bold text-right">
                      {minitabAnovaOutput.resumoModelo.rSqPred}
                    </div>
                  </div>
                </div>

                {/* 3. Tukey Pairwise Comparisons (Agrupamento Estatístico) */}
                <div className="bg-[#0b0b0b] border border-[#151515] p-3">
                  <div className="text-[11px] text-gray-500 font-bold mb-2 uppercase">
                    Tukey Pairwise Comparisons (Grouping)
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-[11px] text-left border-none">
                      <thead>
                        <tr className="text-gray-500 border-b border-[#1c1c1c]">
                          <th className="pb-1">Fator Região</th>
                          <th className="pb-1 text-center">N</th>
                          <th className="pb-1 text-center">Média</th>
                          <th className="pb-1 text-center text-amber-500">
                            Grupo
                          </th>
                        </tr>
                      </thead>
                      <tbody className="font-sans text-gray-300">
                        {minitabAnovaOutput.testeTukey?.map((t, i) => (
                          <tr key={i} className="border-b border-[#111]/50">
                            <td className="py-1.5 font-sans text-white">
                              {t.regiao}
                            </td>
                            <td className="py-1.5 text-center">{t.n}</td>
                            <td className="py-1.5 text-center">{t.media}</td>
                            <td className="py-1.5 text-center font-bold text-amber-500">
                              {t.agrupamento}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* 4. Estatísticas Descritivas das Médias */}
              <div>
                <div className="text-[11px] text-gray-500 font-bold mb-1.5 uppercase">
                  Means Interval Report (Intervalos de Confiança)
                </div>
                <div className="overflow-x-auto border border-[#1c1c1c]">
                  <table className="w-full text-sm text-left border-collapse">
                    <thead>
                      <tr className="bg-[#141414] border-b border-[#1c1c1c] text-gray-500 text-[10px]">
                        <th className="p-2">Região</th>
                        <th className="p-2 text-center">N</th>
                        <th className="p-2 text-center">Média Real (Y)</th>
                        <th className="p-2 text-center">StDev</th>
                        <th className="p-2 text-center text-gray-400">
                          95% IC Individual para as Médias
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {minitabAnovaOutput.mediasEmpreiteiras?.map((m, i) => (
                        <tr
                          key={i}
                          className="border-b border-[#111] bg-[#0b0b0b] font-sans text-gray-300"
                        >
                          <td className="p-2 font-bold text-white">
                            {m.regiao}
                          </td>
                          <td className="p-2 text-center">{m.n}</td>
                          <td className="p-2 text-center text-blue-400 font-bold">
                            {m.media}
                          </td>
                          <td className="p-2 text-center">{m.stDev}</td>
                          <td className="p-2 text-center text-amber-500 tracking-tight">
                            {m.ic95}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-4">
                  <BarMeansChart data={minitabAnovaOutput.mediasEmpreiteiras} />

                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <TukeyIntervalChart />
                    </div>

                    <div>
                      <BoxPlot data={boxplotSeries} />
                    </div>
                  </div>
                </div>

                <span className="text-[9px] text-gray-600 font-sans block mt-1">
                  Pooled StDev = 4.0125
                </span>
              </div>

              <AnovaTechnicalTables />
              <AnovaBusinessMetrics />
              {/* Conclusão Executiva Unificada */}
              <div className="bg-[#0c0c0c] p-4 text-sm border-l-2 border-[#00ff66] text-gray-400 leading-relaxed font-sans">
                <strong className="font-sans text-white block mb-1 uppercase text-[10px] tracking-wider">
                  Laudo Conclusivo Inter-Operacional:
                </strong>
                {minitabAnovaOutput.conclusao}
              </div>
            </div>
          </div>
        )}

        {/* ABA 3: FMEA */}
        {activeTab === "FMEA" && (
          <div>
            <FmeaRisksAndChartsModule />
            <FmeaMitigationTableModule />

            {/* Mantenha o Laudo Conclusivo Inter-Operacional original do rodapé aqui */}
            <div className="bg-[#0c0c0c] p-4 text-sm border-l-2 border-[#00ff66] text-gray-400 leading-relaxed font-sans mt-4">
              <strong className="font-sans text-white block mb-1 uppercase text-[10px] tracking-wider">
                Laudo Conclusivo Inter-Operacional:
              </strong>
              {minitabAnovaOutput.conclusao}
            </div>
          </div>
        )}

        {/* ABA 4: DMAIC */}
        {activeTab === "DMAIC" && (
          <div>
            <DmaicRoadmapModule />

            <DmaicAnalyticalToolsModule />

            {/* Mantenha o Laudo Conclusivo Inter-Operacional original do rodapé aqui */}
            <div className="bg-[#0c0c0c] p-4 text-sm border-l-2 border-[#00ff66] text-gray-400 leading-relaxed font-sans mt-4">
              <strong className="font-sans text-white block mb-1 uppercase text-[10px] tracking-wider">
                Laudo Conclusivo Inter-Operacional:
              </strong>
              {minitabAnovaOutput.conclusao}
            </div>
          </div>
        )}

        {/* ABA 5: PEOPLE ANALYTICS PREDITIVO */}
        {activeTab === "PEOPLE_ANALYTICS" && (
          <div className="space-y-4">
            <div className="bg-[#0c0c0c] p-3 border-l-2 border-[#0077ff] text-[11px] text-gray-400 font-sans">
              [SUSTENTABILIDADE HUMANA] Módulos preditivos ativos para
              monitorização de rotatividade setorial, absenteísmo e capabilidade
              do headcount.
            </div>

            <div className="grid grid-cols-1 gap-4">
              {pipelinesAnalytics.map((p, idx) => (
                <div
                  key={idx}
                  className="bg-[#080808] border border-[#1c1c1c] p-4 flex flex-col md:flex-row gap-4 rounded-none"
                >
                  {/* Coluna 1: O Problema de Negócio (Destaque e Escaneabilidade) */}
                  <div className="md:w-1/3 border-b md:border-b-0 md:border-r border-[#1c1c1c] pb-3 md:pb-0 md:pr-4 flex flex-col justify-between">
                    <div>
                      <span className="text-[9px] font-bold uppercase tracking-wider text-gray-500 block">
                        Indicador {idx + 1}
                      </span>
                      <h3 className="text-sm font-bold text-white uppercase tracking-tight mt-1 font-sans leading-tight">
                        {p.indicador}
                      </h3>
                    </div>
                    {/* Box de Alerta para o Problema */}
                    <div className="mt-4 bg-[#1a0505] border border-red-900/40 p-2.5 rounded-none">
                      <span className="text-[10px] font-bold text-red-400 block uppercase font-sans tracking-tight">
                        ⚠️ Problema Analisado:
                      </span>
                      <p className="text-[11px] text-gray-300 font-sans mt-1 leading-snug">
                        {p.problemaNegocio}
                      </p>
                    </div>
                  </div>

                  {/* Coluna 2: Abordagem Matemática / Engenharia de Dados */}
                  <div className="md:w-1/3 border-b md:border-b-0 md:border-r border-[#1c1c1c] pb-3 md:pb-0 md:pr-4 space-y-2">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-gray-500 block">
                      Abordagem de Data Science
                    </span>

                    <div className="bg-[#030303] p-2 border border-[#151515] text-center rounded-none">
                      <span className="text-[9px] text-blue-400 font-bold uppercase block mb-0.5">
                        Distribuição Estatística
                      </span>
                      <span className="text-sm text-white font-bold font-sans">
                        {p.distribuicao}
                      </span>
                    </div>

                    <div className="bg-[#030303] p-2 border border-[#151515] rounded-none">
                      <span className="text-[9px] text-amber-500 font-bold uppercase block text-center mb-0.5">
                        Equação / Target Minitab
                      </span>
                      <div className="text-[11px] text-gray-300 text-center break-all font-sans select-all">
                        {p.metricaAlvo}
                      </div>
                    </div>
                  </div>

                  {/* Coluna 3: Solução Direta e Prescritiva (Trava Sistêmica) */}
                  <div className="md:w-1/3 flex flex-col justify-between space-y-2">
                    <div>
                      <span className="text-[9px] font-bold uppercase tracking-wider text-[#00ff66] block">
                        🔒 Controle Prescritivo (Poka-Yoke)
                      </span>
                      <div className="mt-2 space-y-2">
                        {p.pokaYokeSistemicos.map((item, i) => (
                          <div
                            key={i}
                            className="text-[11px] text-gray-400 leading-relaxed font-sans flex items-start gap-2"
                          >
                            <span className="text-[#00ff66] font-sans shrink-0">
                              [✔]
                            </span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="text-[10px] bg-[#0c0c0c] p-2 border border-[#151515] text-gray-500 font-sans mt-2">
                      <strong className="text-gray-400 font-bold uppercase text-[9px] block">
                        Validação em Campo (2026):
                      </strong>
                      <span className="font-sans text-[11px] text-gray-300 mt-0.5 block leading-tight">
                        {p.statusReal2026}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ABA 6: ESTRUTURA PESTEL AVANÇADA */}
        {activeTab === "PESTEL" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
            {sucuriuPestel.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#080808] border border-[#1c1c1c] p-4 space-y-1.5 hover:border-gray-600 transition-colors"
              >
                <div className="font-bold text-white border-b border-[#1c1c1c] pb-1 uppercase tracking-tight">
                  {idx + 1}. Fator {item.fator}
                </div>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-gray-400">Contexto:</strong>{" "}
                  {item.contexto}
                </p>
                <p className="text-gray-400 leading-relaxed">
                  <strong className="text-red-400">Risco:</strong> {item.risco}
                </p>
                <p className="text-[#00ff66] leading-relaxed">
                  <strong className="text-gray-400">Mitigação:</strong>{" "}
                  {item.mitigacao}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* ABA 7: LINHA DO TEMPO CRONOLÓGICA EXAUSTIVA (temporariamente isolada) */}
        {activeTab === "CRONOGRAMA" && (
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
              <table className="w-full text-sm text-left border-collapse">
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
                <tbody>{timelineRows}</tbody>
              </table>
            </div>
          </div>
        )}

        {/* ABA 8: MATRIZ DE GOVERNANÇA */}
        {activeTab === "GOVERNANCA" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {stakeholders.map((person, idx) => (
              <div
                key={idx}
                className="bg-[#0d0d0d] border border-[#1c1c1c] p-4 text-sm space-y-1.5 hover:border-yellow-600 transition-colors"
              >
                <span className="text-[9px] text-gray-500 font-bold uppercase block">
                  {person.afiliacao}
                </span>
                <h4 className="text-sm font-bold text-white mt-0.5">
                  {person.nome}
                </h4>
                <div className="text-blue-400 font-bold text-[11px] border-b border-[#1c1c1c] pb-1 uppercase">
                  {person.cargo}
                </div>
                <p className="text-gray-400 leading-relaxed pt-1">
                  <strong className="text-gray-500">
                    Diretriz Estratégica:
                  </strong>{" "}
                  {person.impactoDireto}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Footer Metodológico */}
        <div className="mt-8 pt-4 border-t border-[#1c1c1c] flex flex-col sm:flex-row sm:justify-between sm:items-center text-[10px] text-gray-600 gap-2">
          <div>
            <strong>Protocolo de Confiabilidade:</strong> Split Temporal de
            Dados (Treino 2022-2025 / Teste Q2 2026). Mascaramento Hash ativo
            para LGPD.
          </div>
          <div className="uppercase font-bold tracking-tight text-right whitespace-nowrap">
            Mestrado de Dados / MBB: José Cristiano S. Lima
          </div>
        </div>
      </div>
    </div>
  );
};
