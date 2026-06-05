"use client";

import React, { useState } from "react";

export const PeopleAnalyticsAdvancedMetrics: React.FC = () => {
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
      {/* SEÇÃO 1: PAINÉIS DE MODELAGEM PARAMÉTRICA E CURVAS DE FÓRMULAS (2 COLUNAS) */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "16px",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        {/* G1. CURVA SIGMOIDE LOGÍSTICA DE COVERSÃO DE TURNOVER (COX MODEL) */}
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
              display: "flex",
              justifyContent: "space-between",
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
              M1. Probabilidade de Ruptura de Contrato vs. Distância Familiar
              (Cox Model)
            </h4>
            <span
              style={{
                color: "#00ff66",
                fontSize: "10px",
                fontFamily: "monospace",
                fontWeight: "bold",
              }}
            >
              R²: 0.89
            </span>
          </div>
          <div style={{ height: "160px", width: "100%", position: "relative" }}>
            <svg
              style={{
                width: "100%",
                height: "100%",
                paddingLeft: "35px",
                paddingBottom: "20px",
                boxSizing: "border-box",
                overflow: "visible",
              }}
            >
              <line
                x1="0"
                y1="10"
                x2="100%"
                y2="10"
                stroke="#252525"
                strokeWidth="1"
              />
              <line
                x1="0"
                y1="45"
                x2="100%"
                y2="45"
                stroke="#252525"
                strokeWidth="1"
              />
              <line
                x1="0"
                y1="80"
                x2="100%"
                y2="80"
                stroke="#252525"
                strokeWidth="1"
              />
              <line
                x1="0"
                y1="115"
                x2="100%"
                y2="115"
                stroke="#252525"
                strokeWidth="1"
              />
              <path
                d="M 0 115 Q 130 115 160 60 T 260 10"
                fill="none"
                stroke="#ff3333"
                strokeWidth="2"
              />
              <circle cx="40" cy="112" r="3.5" fill="#00ff66" opacity="0.7" />
              <circle cx="80" cy="110" r="3.5" fill="#00ff66" opacity="0.7" />
              <circle cx="120" cy="98" r="3.5" fill="#ff9900" opacity="0.8" />
              <circle cx="150" cy="75" r="3.5" fill="#ff9900" opacity="0.8" />
              <circle cx="180" cy="35" r="3.5" fill="#ff3333" opacity="0.9" />
              <circle cx="210" cy="15" r="3.5" fill="#ff3333" opacity="0.9" />
            </svg>
            <span
              style={{
                position: "absolute",
                left: "5px",
                top: "5px",
                fontSize: "8px",
                color: "#666",
                fontFamily: "monospace",
              }}
            >
              100%
            </span>
            <span
              style={{
                position: "absolute",
                left: "5px",
                top: "40px",
                fontSize: "8px",
                color: "#666",
                fontFamily: "monospace",
              }}
            >
              50%
            </span>
            <span
              style={{
                position: "absolute",
                left: "5px",
                top: "110px",
                fontSize: "8px",
                color: "#666",
                fontFamily: "monospace",
              }}
            >
              0%
            </span>
            <div
              style={{
                position: "absolute",
                bottom: "20px",
                left: "35px",
                right: "0px",
                height: "1px",
                backgroundColor: "#3d3d3d",
              }}
            ></div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingLeft: "35px",
                fontSize: "8px",
                color: "#888888",
                fontFamily: "monospace",
                width: "100%",
                position: "absolute",
                bottom: "4px",
              }}
            >
              <span>0 (Perto de Casa)</span>
              <span>2.5</span>
              <span>5.0 (Raio Base)</span>
              <span>7.5</span>
              <span>10.0 (Outro Estado)</span>
            </div>
          </div>
        </div>
...
