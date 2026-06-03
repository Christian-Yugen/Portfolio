"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  BarChart3,
  Code2,
  Github,
  GithubIcon,
  Linkedin,
  Mail,
  MapPin,
  X,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { SectionHeading } from "./section-heading";
import CSSCBB from "../../client/public/CSSC-BB-Final.png";
import CSSCGB from "../../client/public/CSSC-GB-Final-v2.png";
import CSSCMBB from "../../client/public/CSSC-MBB-Final.png";
import CSSCWB from "../../client/public/CSSC-WB-Final.png";
import CSSCYB from "../../client/public/CSSC-YB-Final2.png";
import REDTEAM from "../../client/public/Especializado_RED.png";
import WHARTON from "../../client/public/wharton-320x320.png";
import DATAHR from "../../client/public/coursera-logo-full-rgb.png";

const experiences = [
  {
    role: "Founder & Diretor Executivo",
    company: "UXBRAS Edtech Ltda.",
    period: "2023 -> hoje",
    summary:
      "Liderança executiva global, sendo responsável pela gestão direta e coordenação de equipes internacionais multidisciplinares com profissionais baseados em Israel, Paquistão e Índia. Desenvolvimento de uma plataforma educacional e arquiteturas de informação focadas em acessibilidade web (WCAG2.2) e alta performance de interface com Gen AI. Modelagem e gerenciamento de banco de dados relacionais e estruturação de pipelines de dados integrados para monitoramento de métricas operacionais e financeiras do negócio. Pesquisador CNPq DTI B, Desenvolvimento web e Cibersegurança.",
    stack: [
      "Product Strategy",
      "Analytics",
      "React",
      "Next.js",
      "TypeScript",
      "SQL",
      "Python",
      "Github",
    ],
  },
  {
    role: "Coord. Gestão de Políticas Públicas",
    company: "Secretaria Municipal de Gestão de Pessoas - Três Lagoas/MS",
    period: "2021 -> maio 2026",
    summary:
      "Coordenação estratégica e liderança direta da equipe multidisciplinar do SESMT composta por 17 profissionais (médicos do trabalho, enfermeiro, psicólogas, assistentes sociais e corpo administrativo). Responsável pela governança, automação e análise avançada de indicadores críticos de saúde ocupacional, absenteísmo, turnover e produtividade, gerando relatórios estatíticos e consultivos para suporte à tomada de decisão executiva. Automação de rotinas internas e relatórios gerenciais através de linguagens de programação, mitigando riscos operacionais e assegurando conformidade com normas regulatórias (NRs) e proteção de dados sensíveis. Foi desenvolvido um sistema  para acompanhamento em tempo real das informações estatisticas do SESMT (sesmt-system.vercel.app), integrando dados de múltiplas fontes (ERP, HRIS, sistemas de saúde) e fornecendo insights acionáveis para otimização de processos e estratégias de gestão de pessoas.",
    stack: ["BI", "SQL", "Python", "Governança de Dados"],
  },
  {
    role: "Auditor Interno",
    company: "Associação Brasileira AIJCSUD",
    period: "2019 -> 2024",
    summary:
      "Responsável pela auditoria financeira de resultados em nível interestadual, coordenando e validando dados fiscais e contábeis em múltiplos municípios nos estados de São Paulo (SP) e Mato Grosso do Sul (MS).  Condução de auditorias internas de processos e sistemas, assegurando conformidade com regulamentos vigentes e integridade na governança de dados institucionais por meio do sistema Local Unit Financial Auditing System - LDS Church.  Desenvolvimento de relatórios analíticos para suporte à tomada de decisão estratégica e otimização de recursos financeiros, utilizando ferramentas avançadas de análise de dados e visualização para identificar oportunidades de melhoria e garantir a transparência nas operações financeiras da organização.",
    stack: ["BI", "SQL", "Processos"],
  },
  {
    role: "Especialista em Saude Ocupacional",
    company: "Suzano / JFI Silvicultura",
    period: "2014 -> 2021",
    summary:
      "Atuação na análise de dados, monitoramento de indicadores e desenvolvimento de estudos e laudos técnicos (AET) de ergonomia aplicados a operações florestais e industriais de larga escala no setor de celulose.  Aplicação de técnicas de melhoria contínua (Lean Six Sigma) e análise estatística para mapeamento de gargalos, identificação de causas-raiz de absenteísmo e otimização de fluxos operacionais de saúde no campo e industria.  Garantia de conformidade técnica e legal junto a órgãos fiscalizadores, atuando diretamente no controle de documentações e relatórios de auditoria preventiva.",
    stack: [
      "Indicadores",
      "Automação",
      "Excel Avancado",
      "Processos",
      "PowerBI",
    ],
  },
];

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M21.7 5.3a11.9 11.9 0 00-17 0c-4.7 4.7-4.8 12.3-.2 17.1L3 24l1.6-4.1A11.9 11.9 0 0024 6.6c-.1-.9-.4-1.8-.9-2.6z"
        stroke="currentColor"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.2 14.6c-.3.8-1 1.6-1.6 1.8-.4.1-.8.2-1.6-.2-.7-.4-1.5-.7-2.4-1.4-.9-.6-1.3-1.4-1.1-2 .1-.3.3-.5.6-.6.3-.1.7-.2 1-.2.3 0 .6 0 .9.1.3.1.5.1.7.2.1.1.2.2.4.3.1.1.2.2.4.3.3.2.5.4.8.5.4.2.7.2 1.1.1.3 0 .6.1.8.2.5.1 1 .3 1.2.5.3.2.4.5.2 1z"
        fill="currentColor"
      />
    </svg>
  );
}

const skills = [
  "People Analytics",
  "Business Intelligence",
  "Power BI",
  "SQL",
  "Python",
  "Next.js",
  "React",
  "TypeScript",
  "Automacao de Processos",
  "Data Storytelling",
  "Governanca de Dados",
  "KPIs Corporativos",
  "Arquitetura de Dashboards",
  "Planejamento Estrategico",
  "Gestao de Pessoas",
  "Transformacao Digital",
];

const heroHighlights = [
  {
    title: "Software Engineering & Data Analytics",
    description:
      "Python, Automação de Rotinas, Integração de Sistemas (ERP/HRIS) e SQL...",
    icon: Code2,
  },
  {
    title: "Estatística Aplicada & BI",
    description: "Power BI, Minitab e Modelagem Preditiva de Tendências...",
    icon: BarChart3,
  },
  {
    title: "Master Black Belt em Lean Six Sigma",
    description:
      "Eficiência operacional, eliminação de gargalos e cultura orientada a dados (Data-Driven)...",
    icon: Zap,
  },
];

const heroStats = [
  {
    value: "5K+",
    target: 5000,
    suffix: "+",
    label: "Fontes de dados integradas",
  },
  { value: "17+", target: 17, suffix: "+", label: "Líderes apoiados" },
  { value: "5", target: 5, suffix: "", label: "Certificações Lean Six Sigma" },
];

const projects = [
  {
    title: "SESMT- System | Plataforma de Monitoramento de Saúde Ocupacional",
    context:
      "Monitoramento de saude ocupacional e desempenho em grande escala no setor publico.",
    impact:
      "Mais de 5.000 servidores acompanhados com visao consolidada e decisao mais rapida.",
    stack: ["Power BI", "Python", "SQL", "Automacao"],
  },
  {
    title: "People Analytics Executive Dashboard",
    context:
      "Camada executiva para leitura de capacidade, risco e alocacao de pessoas.",
    impact:
      "Priorizacao estrategica com indicadores acionaveis para liderancas de alto nivel.",
    stack: ["Power BI", "Data Modeling", "Storytelling", "KPIs"],
  },
  {
    title: "Data-Driven Product Operations",
    context:
      "Estruturacao de operacao e roadmap orientado por dados em ambiente EdTech.",
    impact:
      "Mais previsibilidade na entrega e foco em valor de negocio com ciclos curtos.",
    stack: ["Next.js", "React", "Analytics", "Product Strategy"],
  },
];

const education = [
  {
    title: "Administração",
    institution: "Universidade Norte do Paraná – UNOPAR",
    period: "2014 — 2018",
    pillar: "Gestão",
    description:
      "Formação voltada para gestão organizacional, planejamento estratégico e análise de desempenho, desenvolvendo visão sistêmica dos negócios e da gestão de pessoas.",
    skills: [
      "Gestão de Pessoas",
      "Indicadores",
      "Planejamento Estratégico",
      "Processos",
      "Tomada de Decisão",
    ],
  },
  {
    title: "Engenharia de Software – Bacharelando",
    institution: "Universidade Anhanguera",
    period: "2022 — Atual",
    pillar: "Tecnologia",
    description:
      "Formação focada em desenvolvimento de soluções tecnológicas, integração de dados, automação de processos e construção de sistemas orientados por dados.",
    skills: [
      "Python",
      "Análise de Dados",
      "Automação de Processos",
      "Integração de Sistemas",
      "Business Intelligence",
      "Engenharia de Dados",
      "Arquitetura de Soluções",
      "Banco de Dados",
      "Desenvolvimento de Software",
    ],
  },
  {
    title: "Especialização em Six Sigma Green Belt",
    institution: "Kennesaw State University",
    period: "2020",
    pillar: "Dados e Melhoria Contínua",
    description:
      "Capacitação voltada para análise estatística, melhoria contínua e gestão baseada em indicadores, utilizando metodologias estruturadas para aumento de eficiência e redução de desperdícios.",
    skills: [
      "DMAIC",
      "Estatística Aplicada",
      "Análise de Processos",
      "Indicadores de Performance",
      "Melhoria Contínua",
      "Root Cause Analysis",
      "Data-Driven Decision Making",
      "Controle Estatístico",
      "Eficiência Operacional",
      "Gestão da Qualidade",
    ],
  },
];

// `certifications` removed — now using individual CertShowcase components above

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-14%" },
  transition: { duration: 0.65, ease: "easeOut" as const },
};

export default function PortfolioPage() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1,
      lerp: 0.08,
      smoothWheel: true,
      syncTouch: true,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = globalThis.requestAnimationFrame(raf);
    };
    rafId = globalThis.requestAnimationFrame(raf);

    const targets = gsap.utils.toArray<HTMLElement>("[data-reveal]");
    targets.forEach((element, index) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          delay: index * 0.03,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 86%",
          },
        }
      );
    });

    return () => {
      globalThis.cancelAnimationFrame(rafId);
      lenis.destroy();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <main className="no-round min-h-screen bg-[#000000] text-[#ffffff]">
      <Header />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <CertificatesSection />
      <SkillsSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}

function AnimatedStat({
  target,
  suffix = "",
  className = "",
}: {
  target: number;
  suffix?: string;
  className?: string;
}) {
  const elRef = useRef<HTMLParagraphElement | null>(null);
  const [display, setDisplay] = useState<string>(() =>
    target >= 1000 ? `0K${suffix}` : `0${suffix}`
  );

  useEffect(() => {
    if (!elRef.current) return;
    const obj = { val: 0 } as { val: number };
    gsap.registerPlugin(ScrollTrigger);

    const anim = gsap.to(obj, {
      val: target,
      duration: 1.2,
      ease: "power1.out",
      scrollTrigger: {
        trigger: elRef.current,
        start: "top 90%",
        once: true,
      },
      onUpdate: () => {
        const v = Math.floor(obj.val);
        if (target >= 1000) {
          setDisplay(`${Math.round(v / 1000)}K${suffix}`);
        } else {
          setDisplay(`${v}${suffix}`);
        }
      },
    });

    return () => {
      anim.kill();
      if ((anim as any).scrollTrigger) (anim as any).scrollTrigger.kill();
    };
  }, [target, suffix]);

  return (
    <p ref={elRef} className={className}>
      {display}
    </p>
  );
}

function FooterSection() {
  return (
    <footer className="border-t border-[#2a2a2d] bg-[#000000] px-4 py-8 md:px-8">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 md:flex-row md:justify-center">
        <p className="text-sm text-[#efeff0] text-center">
          © {new Date().getFullYear()} <em>Powered by </em>{" "}
          <span style={{ letterSpacing: "1px" }}>
            <strong> UXBRAS</strong>®
          </span>
          . Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

function CertShowcase({
  title,
  subtitle,
  items,
}: Readonly<{
  title: string;
  subtitle?: string;
  items: { name: string; detail?: string; href?: string; image?: any }[];
}>) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) globalThis.addEventListener("keydown", onKey);
    return () => globalThis.removeEventListener("keydown", onKey);
  }, [open]);

  const normalizedTitle = (title || "").toLowerCase();
  const isRedTitle =
    (normalizedTitle.includes("red") && normalizedTitle.includes("team")) ||
    normalizedTitle.includes("ciber");
  const titleGradient = isRedTitle
    ? "bg-linear-to-r from-[#ffd6d6] via-[#ff8a8a] to-[#b30000]"
    : "bg-linear-to-r from-[#dff9ff] via-[#91c8ec] to-[#527ca3]";

  const buttonRingClass = isRedTitle
    ? "focus:ring-[#b30000]"
    : "focus:ring-[#2a9bff]";
  const ctaClass = isRedTitle
    ? "inline-flex items-center gap-2 rounded-full bg-[#071019] px-3 py-2 text-sm font-semibold text-[#ff8a8a] hover:text-white"
    : "inline-flex items-center gap-2 rounded-full bg-[#071019] px-3 py-2 text-sm font-semibold text-[#79c5ff]";

  const getBeltClasses = (name: string) => {
    if (/white/i.test(name)) return "bg-white ring-1 ring-[#d6d6d8]";
    if (/yellow/i.test(name)) return "bg-[#b98f05]";
    if (/green/i.test(name)) return "bg-[#1f6003]";
    if (/master/i.test(name)) return "bg-[#033565] ring-1 ring-[#03496e]";
    if (/black/i.test(name)) return "bg-black ring-1 ring-[#2a2a2d]";
    return "bg-[#1b1c20]";
  };

  const getBeltColor = (name: string) => {
    if (/white/i.test(name)) return "#ffffff";
    if (/yellow/i.test(name)) return "#b98f05";
    if (/green/i.test(name)) return "#1f6003";
    if (/master/i.test(name)) return "#033565";
    if (/black/i.test(name)) return "#000000";
    return "#1b1c20";
  };

  const getBeltImage = (name: string) => {
    if (/red\s?team/i.test(name) || /red\s?team/i.test(title)) return REDTEAM;
    if (
      /data-driven hr strategies/i.test(name) ||
      /data-driven hr strategies/i.test(title)
    )
      return DATAHR;
    if (/master/i.test(name)) return CSSCMBB;
    if (/black/i.test(name)) return CSSCBB;
    if (/green/i.test(name)) return CSSCGB;
    if (/white/i.test(name)) return CSSCWB;
    if (/yellow/i.test(name)) return CSSCYB;
    return CSSCBB;
  };

  return (
    <div>
      <motion.button
        type="button"
        layout
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
        aria-controls="certs-panel"
        initial={false}
        whileHover={{ scale: 1.005 }}
        className={`w-full bg-transparent py-0 px-0 focus:outline-none focus:ring-2 ${buttonRingClass} transition-transform`}
      >
        <div className="flex items-center justify-between gap-4">
          <div>
            <p
              className={`${titleGradient} bg-clip-text text-left pl-4 md:pl-6 text-xl md:text-2xl lg:text-3xl font-extrabold text-transparent leading-tight tracking-tight`}
            >
              {title}
            </p>
            {subtitle && (
              <p className="text-left text-base md:text-lg text-[#9aa0a6] mt-1.5 pl-4 md:pl-6">
                {subtitle}
              </p>
            )}
          </div>
          <div>
            <span className={ctaClass}>{open ? "Fechar" : "Verificar"}</span>
          </div>
        </div>
      </motion.button>

      <motion.div
        id="certs-panel"
        layout
        initial={{ height: 0, opacity: 0 }}
        animate={
          open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.28 }}
        className="overflow-hidden"
        aria-hidden={!open}
      >
        <div className="mx-auto mt-4 max-w-full border-t border-[#2a2a2d] pt-4">
          {/* badges inline removed; each item will show a colored icon */}

          <div
            className={`grid gap-3 ${items.length > 1 ? "md:grid-cols-2" : "grid-cols-1"}`}
          >
            {items.map(it => {
              const isBlack = /black/i.test(it.name);
              const isMaster = /master/i.test(it.name);
              const isWhite = /white/i.test(it.name);

              return (
                <a
                  key={it.name}
                  href={it.href ?? "#"}
                  target="_blank"
                  rel="noreferrer"
                  style={{ ["--belt-color" as any]: getBeltColor(it.name) }}
                  className={`group flex items-start gap-3 p-8 rounded-lg ${isWhite ? "hover:bg-black" : "hover:bg-white"} transition-colors`}
                >
                  <div
                    aria-hidden
                    className={`mt-1 inline-block h-16 w-16 shrink-0 overflow-hidden rounded-sm transform transition-transform group-hover:scale-105 group-hover:shadow-lg ring-0 group-hover:ring-2 ${isBlack || isWhite ? "group-hover:ring-black" : "group-hover:ring-[var(--belt-color)]"}`}
                  >
                    <Image
                      src={it.image ?? getBeltImage(it.name)}
                      alt={`${it.name} badge`}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1">
                    <p
                      className={`text-lg md:text-xl font-bold transition-colors ${isBlack ? (isMaster ? "text-white group-hover:text-[#2997ff]" : "text-white group-hover:text-black") : isWhite ? "text-white group-hover:text-white" : "text-white group-hover:text-[var(--belt-color)]"}`}
                    >
                      {it.name}
                    </p>
                    {it.detail && (
                      <p
                        className={`mt-1 text-base md:text-lg transition-colors ${isBlack ? (isMaster ? "text-[#b1b1b7] group-hover:text-[#2997ff]" : "text-[#b1b1b7] group-hover:text-black") : isWhite ? "text-[#b1b1b7] group-hover:text-white" : "text-[#b1b1b7] group-hover:text-[var(--belt-color)]"}`}
                      >
                        {it.detail}
                      </p>
                    )}
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity text-[#79c5ff]">
                    Ver
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function Header() {
  const [isAvatarOpen, setIsAvatarOpen] = useState(false);

  useEffect(() => {
    if (!isAvatarOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsAvatarOpen(false);
    };

    globalThis.addEventListener("keydown", onKeyDown);
    return () => globalThis.removeEventListener("keydown", onKeyDown);
  }, [isAvatarOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-[#2a2a2d] bg-[#000000]/95 backdrop-blur-sm">
        <div className="mx-auto flex h-18 w-full max-w-7xl items-center justify-between gap-6 px-5 md:px-7 lg:px-8">
          <div className="flex items-center gap-3">
            <section
              id="formacao"
              className="border-b border-[#2a2a2d] bg-[#000000] px-4 py-16 md:px-8 md:py-20"
              aria-labelledby="formacao-title"
              style={{
                backgroundColor: "#000000",
                backgroundImage:
                  "radial-gradient(circle at 85% 50%, rgba(41,151,255,1) 0%, rgba(41,151,255,0.75) 16%, rgba(41,151,255,0.40) 34%, rgba(0,0,0,1) 80%), linear-gradient(180deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,1) 100%)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "85% 50%",
                backgroundSize: "600% 480%, cover",
                backgroundBlendMode: "overlay, normal",
              }}
            >
            <div>
              <p className="text-base font-bold text-[#ffffff]">
                José Cristiano da S. Lima
              </p>
              <p className="text-base font-semibold text-[#aeb0b6]">
                People Analytics · BI
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-5 md:flex">
            <nav className="hidden items-center gap-7 text-lg font-semibold text-[#afb1b7] lg:flex">
              <a
                href="#hero"
                className="transition-all duration-300 hover:-translate-y-0.5 hover:bg-linear-to-r hover:from-[#dff9ff] hover:via-[#8ec5ea] hover:to-[#4f79a2] hover:bg-clip-text hover:text-transparent"
              >
                Sobre
              </a>
              <a
                href="#sobre"
                className="transition-all duration-300 hover:-translate-y-0.5 hover:bg-linear-to-r hover:from-[#dff9ff] hover:via-[#8ec5ea] hover:to-[#4f79a2] hover:bg-clip-text hover:text-transparent"
              >
                Resumo
              </a>
              <a
                href="#projetos"
                className="transition-all duration-300 hover:-translate-y-0.5 hover:bg-linear-to-r hover:from-[#dff9ff] hover:via-[#8ec5ea] hover:to-[#4f79a2] hover:bg-clip-text hover:text-transparent"
              >
                Projetos
              </a>
              <a
                href="#experiencia"
                className="transition-all duration-300 hover:-translate-y-0.5 hover:bg-linear-to-r hover:from-[#dff9ff] hover:via-[#8ec5ea] hover:to-[#4f79a2] hover:bg-clip-text hover:text-transparent"
              >
                Experiências
              </a>
              <a
                href="#formacao"
                className="transition-all duration-300 hover:-translate-y-0.5 hover:bg-linear-to-r hover:from-[#dff9ff] hover:via-[#8ec5ea] hover:to-[#4f79a2] hover:bg-clip-text hover:text-transparent"
              >
                Formação
              </a>
              <a
                href="#certificados"
                className="transition-all duration-300 hover:-translate-y-0.5 hover:bg-linear-to-r hover:from-[#dff9ff] hover:via-[#8ec5ea] hover:to-[#4f79a2] hover:bg-clip-text hover:text-transparent"
              >
                Certificados
              </a>
              <a
                href="#contato"
                className="transition-all duration-300 hover:-translate-y-0.5 hover:bg-linear-to-r hover:from-[#dff9ff] hover:via-[#8ec5ea] hover:to-[#4f79a2] hover:bg-clip-text hover:text-transparent"
              >
                Contato
              </a>
            </nav>

            <div className="flex items-center gap-3 text-[#afb1b7]">
              <a
                href="https://linkedin.com/in/joseyugen"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center border border-[#2a2a2d] bg-[#111112] transition-colors hover:border-[#2997ff] hover:text-[#ffffff]"
              >
                <Linkedin className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="https://github.com/Christian-Yugen"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-flex h-10 w-10 items-center justify-center border border-[#2a2a2d] bg-[#111112] transition-colors hover:border-[#2997ff] hover:text-[#ffffff]"
              >
                <Github className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {isAvatarOpen ? (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/85 p-4"
          onClick={() => setIsAvatarOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Visualizacao ampliada do avatar"
        >
          <button
            type="button"
            onClick={() => setIsAvatarOpen(false)}
            className="fixed right-4 top-4 z-110 inline-flex items-center gap-2 rounded-md border-2 border-white/80 bg-black px-4 py-2 text-base font-semibold text-white shadow-[0_8px_24px_rgba(0,0,0,0.45)] transition-colors hover:border-[#2997ff]"
            aria-label="Fechar visualizacao ampliada"
          >
            <X className="h-5 w-5" /> Fechar
          </button>
          <div
            className="relative w-full max-w-2xl"
            onClick={event => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsAvatarOpen(false)}
              className="absolute right-3 top-3 z-30 inline-flex items-center gap-2 rounded-md border-2 border-white/70 bg-black px-4 py-2 text-base font-semibold text-white shadow-[0_8px_24px_rgba(0,0,0,0.45)] transition-colors hover:border-[#2997ff]"
              aria-label="Fechar visualizacao ampliada"
            >
              <X className="h-5 w-5" /> Fechar
            </button>
            <div className="relative aspect-3/4 w-full overflow-hidden border border-[#2a2a2d] bg-[#111112]">
              <Image
                src="/MinhaFoto.png"
                alt="Avatar ampliado de José Cristiano da S. Lima"
                fill
                sizes="(max-width: 768px) 90vw, 720px"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

function HeroSection() {
  return (
    <section
      id="hero"
      className="border-b border-[#2a2a2d] px-4 pb-16 pt-14 md:px-8 md:pb-20 md:pt-20 lg:pb-24 lg:pt-24"
      aria-labelledby="hero-title"
      style={{
        backgroundImage:
          "radial-gradient(circle at 70% 50%, rgba(41,151,255,0.45) 0%, rgba(41,151,255,0.30) 16%, rgba(41,151,255,0.14) 34%, rgba(2,2,3,0.92) 68%)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "70% 50%",
        backgroundSize: "140% 120%",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="container grid items-start gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
        <motion.div {...reveal} data-reveal>
          <p className="inline-flex border border-[#2a2a2d] bg-[#111112] px-4 py-1.5 text-lg font-semibold text-[#b4b5bb]">
            Bem-vindo ao meu Curriculum Vitae Digital
          </p>

          <h1
            id="hero-title"
            className="mt-6 bg-linear-to-r from-[#dff9ff] via-[#8ec5ea] to-[#4f79a2] bg-clip-text text-[clamp(2.4rem,5.8vw,4.2rem)] font-extrabold leading-[1.03] tracking-[-0.04em] text-transparent md:whitespace-nowrap"
          >
            José Cristiano da S. Lima
          </h1>

          <p className="mt-6 max-w-4xl text-[1.58rem] font-semibold leading-tight md:leading-snug text-[#ededf0] md:text-[1.78rem]">
            <span className="block">
              Administrador | Master Black Belt em Lean Six Sigma
            </span>
            <span className="block">
              Full-Stack Developer | BI &amp; People Analytics
            </span>
          </p>

          <p className="mt-8 max-w-3xl text-xl leading-tight md:leading-snug text-[#cfcfd1] md:text-2xl">
            Transformo dados organizacionais em decisões estratégicas. Estruturo
            governança de dados, integro sistemas e aplico estatística e modelos
            preditivos para otimizar processos e iniciativas de People Analytics
            (turnover, absenteísmo e produtividade, etc.). Experiência em Power
            BI, Excel Avançado e automação de relatórios gerenciais e executivos
            com linguagens de programação. Possuo certificação MCTI em Ethical
            Hacking, o que reforça meu diferencial em segurança da informação.
          </p>

          <div className="mt-8 grid gap-5 border-y border-[#2a2a2d] py-5 sm:grid-cols-3">
            {heroStats.map(item => (
              <div key={item.label}>
                <AnimatedStat
                  target={item.target}
                  suffix={item.suffix}
                  className="text-4xl font-extrabold tracking-[-0.03em] text-[#ffffff] md:text-5xl"
                />
                <p className="mt-1 text-lg font-semibold text-[#b1b2b8]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#projetos"
              className="inline-flex min-h-12 items-center justify-center border border-[#3a3a40] bg-[#111112] px-7 text-lg font-bold text-[#ffffff] transition-colors hover:border-[#2997ff]"
            >
              Ver projetos
            </a>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
              <a
                href="https://linkedin.com/in/joseyugen"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center border border-[#3a3a40] bg-[#111112] px-7 text-lg font-bold transition-colors hover:border-[#2997ff] focus:outline-none focus:ring-2 focus:ring-[#2a9bff]"
              >
                <span className="bg-linear-to-r from-[#1b87ff] via-[#2a9bff] to-[#567fa7] bg-clip-text text-transparent">
                  Conectar no LinkedIn
                </span>
              </a>
              <p className="text-sm font-medium text-[#8e919a] sm:max-w-xs sm:text-xs md:text-sm">
                <span className="block">23K+ seguidores</span>
                <span className="block">
                  Top 5% nos testes de competências.
                </span>
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div className="space-y-4 lg:pt-32" {...reveal} data-reveal>
          {heroHighlights.map(item => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                className="group flex items-start gap-4 border p-4 rounded-sm allow-round"
                style={{
                  borderColor: "#97989c",
                  borderRadius: "6px",
                  backgroundColor: "rgba(29,29,31,0.4)",
                  backgroundImage:
                    "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 6%, rgba(0,0,0,0) 60%), radial-gradient(circle at 6% 30%, rgba(41,151,255,0.06), transparent 18%)",
                  backgroundBlendMode: "overlay",
                }}
                whileHover={{
                  y: -6,
                  scale: 1.01,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
              >
                <div
                  className="flex h-11 w-11 items-center justify-center border bg-[#111112] rounded-sm allow-round-inner transform transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, rgba(41,151,255,0.20) 0%, rgba(41,151,255,0.06) 100%)",
                  }}
                >
                  <Icon className="h-5 w-5 text-[#2997ff]" />
                </div>
                <div>
                  <h3 className="bg-linear-to-r from-[#d7f4ff] via-[#8ec4e8] to-[#567fa7] bg-clip-text text-2xl font-bold text-transparent">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-lg font-medium text-[#b3b3b9]">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section
      id="sobre"
      className="border-b border-[#2a2a2d] px-4 py-16 md:px-8 md:py-20"
      aria-labelledby="sobre-title"
      style={{
        backgroundColor: "#161617",
        backgroundImage:
          "radial-gradient(circle at 18% 30%, rgba(41,151,255,0.12) 0%, rgba(41,151,255,0.06) 12%, rgba(2,2,3,0.92) 55%)",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="container">
        <motion.h2
          {...reveal}
          id="sobre-title"
          className="bg-linear-to-r from-[#dff9ff] via-[#91c8ec] to-[#527ca3] bg-clip-text text-center text-4xl font-extrabold tracking-[-0.03em] text-transparent md:text-5xl"
          data-reveal
        >
          Resumo Estratégico
        </motion.h2>
        <motion.p
          {...reveal}
          className="mx-auto mt-7 max-w-5xl text-center text-xl leading-tight md:leading-snug text-[#b1b1b7] md:text-2xl font-semibold flex flex-wrap justify-center gap-x-[0.24em] gap-y-0.5 cursor-default select-none"
          data-reveal
        >
          {(() => {
            const text =
              "Administrador e Full-Stack Developer com sólida experiência em Business Intelligence e modelagem estatística aplicada à engenharia de processos e inteligência de negócios. Especialista na estruturação de governança de dados, integração de múltiplos sistemas corporativos (RPs/HRIS) e automação em larga escala — com histórico de mais de 5 mil servidores integrados via código e atuação como Pesquisador DTI-B CNPq no desenvolvimento de soluções inovadoras com propriedade intelectual patenteável. Atuo de forma consultiva junto a lideranças executivas, aplicando as melhores práticas da metodologia PMBOK para a gestão de projetos estratégicos de People Analytics (turnover, absenteísmo, custos e retenção de talentos). Master Black Belt em Lean Six Sigma, focado no desenvolvimento de uma cultura data-driven, eficiência operacional e transformação digital. Residente em Três Lagoas/MS.";
            const words = text.split(" ");
            const targetStartIndex = words.findIndex(
              (w, i) =>
                w.replace(/[(),.—]/g, "").toLowerCase() === "master" &&
                words[i + 1]?.replace(/[(),.—]/g, "").toLowerCase() ===
                  "black" &&
                words[i + 2]?.replace(/[(),.—]/g, "").toLowerCase() ===
                  "belt" &&
                words[i + 3]?.replace(/[(),.—]/g, "").toLowerCase() === "em" &&
                words[i + 4]?.replace(/[(),.—]/g, "").toLowerCase() === "lean"
            );

            return words.map((word, index) => {
              const isSpecialPhrase =
                targetStartIndex !== -1 &&
                index >= targetStartIndex &&
                index < targetStartIndex + 14;

              return (
                <span
                  key={index}
                  className={`inline-block transition-all duration-150 hover:scale-115 transform hover:z-10 ${
                    isSpecialPhrase
                      ? "text-[#ffffff] font-bold hover:text-[#50b5ff]"
                      : "text-[#b1b1b7] hover:text-white"
                  }`}
                >
                  {word}
                </span>
              );
            });
          })()}
        </motion.p>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section
      id="experiencia"
      className="border-b border-[#2a2a2d] bg-[#000000] px-4 py-16 md:px-8 md:py-20"
      aria-labelledby="experiencia-title"
    >
      <div className="container">
        <motion.h2
          {...reveal}
          id="experiencia-title"
          className="bg-linear-to-r from-[#dff9ff] via-[#91c8ec] to-[#527ca3] bg-clip-text text-4xl font-extrabold tracking-[-0.03em] text-transparent md:text-5xl"
          data-reveal
        >
          Experiência Profissional
        </motion.h2>

        <div className="mt-10 grid gap-6" data-reveal>
          {experiences.map((exp, idx) => (
            <motion.article
              key={exp.role + idx}
              {...reveal}
              transition={{ ...reveal.transition, delay: idx * 0.04 }}
              className="border border-[#2a2a2d] bg-[#111112] p-6"
              data-reveal
            >
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <p className="text-2xl font-semibold text-[#f4f6f8]">
                    {exp.period}
                  </p>
                  <h3 className="mt-1 text-2xl font-bold bg-linear-to-r from-[#dff9ff] via-[#4d9dd2] to-[#125593] bg-clip-text text-transparent">
                    {exp.role}
                  </h3>
                  <p className="mt-1 text-lg font-semibold text-[#b0b1b7]">
                    {exp.company}
                  </p>
                  <p className="mt-4 text-base text-[#b1b1b7]">{exp.summary}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.stack.map(tech => (
                      <span
                        key={tech}
                        className="border border-[#3a3a40] bg-[#1b1c20] px-3 py-1.5 text-sm font-semibold text-[#d9dae0]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section
      id="projetos"
      className="border-b border-[#2a2a2d] bg-[#000000] px-4 py-16 md:px-8 md:py-20"
      aria-labelledby="projetos-title"
    >
      <div className="container">
        <motion.h2
          {...reveal}
          id="projetos-title"
          className="bg-linear-to-r from-[#dff9ff] via-[#91c8ec] to-[#527ca3] bg-clip-text text-4xl font-extrabold tracking-[-0.03em] text-transparent md:text-5xl"
          data-reveal
        >
          Projetos em Destaque
        </motion.h2>

        <motion.p
          {...reveal}
          className="mt-6 max-w-4xl text-lg font-semibold leading-relaxed text-[#b2b3ba] md:text-xl"
          data-reveal
        >
          Seleção de entregas com foco em impacto real: dados, processos e
          produto conectados para gerar eficiência operacional e visão
          estratégica.
        </motion.p>

        <div className="mt-10 grid gap-5 lg:grid-cols-3" data-reveal>
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              {...reveal}
              transition={{ ...reveal.transition, delay: index * 0.05 }}
              className="border border-[#2a2a2d] bg-[#111112] p-6"
              data-reveal
            >
              <h3 className="bg-linear-to-r from-[#d7f4ff] via-[#8ec4e8] to-[#567fa7] bg-clip-text text-2xl font-bold text-transparent">
                {project.title}
              </h3>
              <p className="mt-4 text-base font-semibold leading-relaxed text-[#b0b1b7]">
                {project.context}
              </p>
              <p className="mt-4 text-lg font-semibold leading-relaxed text-[#d2d3d8]">
                {project.impact}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map(item => (
                  <span
                    key={item}
                    className="border border-[#3a3a40] bg-[#1b1c20] px-3 py-1.5 text-sm font-semibold text-[#d9dae0]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function EducationSection() {
  return (
    <section
      id="formacao"
      className="border-b border-[#2a2a2d] bg-[#000000] px-4 py-16 md:px-8 md:py-20"
      aria-labelledby="formacao-title"
      style={{
        backgroundColor: "#000000",
        backgroundImage:
          "radial-gradient(circle at 70% 45%, rgba(41,151,255,0.90) 0%, rgba(41,151,255,0.60) 12%, rgba(41,151,255,0.28) 28%, rgba(0,0,0,0.98) 75%), linear-gradient(180deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,1) 100%)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "70% 45%",
        backgroundSize: "240% 200%, cover",
        backgroundBlendMode: "overlay, normal",
      }}
    >
      <div className="container">
        <SectionHeading
          title="Formação e Capacitação Estratégica"
          description="Base multidisciplinar construída em gestão, tecnologia, análise de dados e melhoria contínua para apoiar decisões orientadas por indicadores."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3" data-reveal>
          {education.map(item => (
            <motion.article
              key={item.title}
              {...reveal}
              whileHover={{
                y: -6,
                scale: 1.01,
                boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="group flex flex-col gap-4 border p-6 rounded-sm allow-round transform will-change-transform transition-all"
              style={{
                borderColor: "#97989c",
                borderRadius: "6px",
                backgroundColor: "rgba(29,29,31,0.06)",
                backgroundImage:
                  "linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.008) 6%, rgba(0,0,0,0) 60%), radial-gradient(circle at 6% 30%, rgba(41,151,255,0.18), transparent 28%)",
                backgroundBlendMode: "overlay",
              }}
              data-reveal
            >
              <p className="mb-2 text-[11px] uppercase tracking-[0.24em] text-[#91c8ec]">
                {item.pillar}
              </p>

              <h3 className="bg-linear-to-r from-[#d7f4ff] via-[#8ec4e8] to-[#567fa7] bg-clip-text text-2xl font-bold text-transparent">
                {item.title}
              </h3>

              <p className="mt-2 text-base font-semibold leading-relaxed text-[#b0b1b7]">
                {item.institution}
              </p>

              <p className="mt-2 text-lg font-semibold leading-relaxed text-[#d2d3d8]">
                {item.period}
              </p>

              <p className="mt-4 text-sm leading-relaxed text-white/72">
                {item.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {item.skills.map(skill => (
                  <span
                    key={skill}
                    className="text-[13px] text-white/70 bg-white/4 border border-white/8 rounded-md px-2 py-1 transition-colors duration-200 group-hover:bg-white/6 group-hover:text-white/90"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CertificatesSection() {
  return (
    <section
      id="certificados"
      className="border-b border-[#2a2a2d] bg-[#161617] px-4 py-16 md:px-8 md:py-20"
      aria-labelledby="certificados-title"
    >
      <div className="container">
        <motion.h2
          {...reveal}
          id="certificados-title"
          className="bg-linear-to-r from-[#dff9ff] via-[#91c8ec] to-[#527ca3] bg-clip-text text-4xl font-extrabold tracking-[-0.03em] text-transparent md:text-5xl"
          data-reveal
        >
          Certificados Profissionais
        </motion.h2>

        <div className="mt-10 grid gap-5" data-reveal>
          <div className="border border-[#2a2a2d] bg-[#111112] p-3">
            <CertShowcase
              title="People Analytics with AI - cursando agora"
              subtitle="Data-Driven HR Strategies (Coursera)"
              items={[
                {
                  name: "Data-Driven HR Strategies",
                  detail:
                    "Certificação profissional avançada voltada à aplicação prática de ciência de dados e inteligência artificial na resolução de desafios complexos de RH. Capacitação focada no desenho de pipelines de dados completos, modelagem estatística assistida por IA para previsão de riscos de rotatividade (turnover) e estruturação de dashboards de saúde da força de trabalho. Ênfase em atuação consultiva estratégica, traduzindo métricas e análises preditivas em relatórios executivos de alto impacto para tomada de decisão da diretoria.",
                  image: DATAHR,
                  href: "https://www.coursera.org/account/accomplishments/certificate/9Z5KZ6QG8L2C",
                },
              ]}
            />
          </div>

          <div className="border border-[#2a2a2d] bg-[#111112] p-3">
            <CertShowcase
              title="People Analytics"
              subtitle="Wharton School - University of Pennsylvania"
              items={[
                {
                  name: "Especialização em Análise de negócios",
                  detail:
                    "Formação executiva voltada à aplicação de ciência de dados na tomada de decisões estratégicas de RH. Capacitação avançada na identificação e tratamento de vieses estatísticos em avaliações de desempenho, uso de modelagem preditiva para o controle de atrito, rotatividade e retenção de talentos, e mapeamento de redes de colaboração interna (ONA) para otimização de fluxos informacionais. Foco em governança de dados, causalidade e implementação de algoritmos éticos e imparciais para o desenvolvimento de talentos.",
                  image: WHARTON,
                  href: "https://www.coursera.org/account/accomplishments/certificate/9Z5KZ6QG8L2C",
                },
              ]}
            />
          </div>

          <div className="border border-[#2a2a2d] bg-[#111112] p-3">
            <CertShowcase
              title="Certificações de Six Sigma"
              subtitle="Creditação Internacional - Labone Consultoria"
              items={[
                {
                  name: " CSSMBB - Certified Six Sigma Master Black Belt",
                  detail:
                    "Governança de dados de People Analytics, direcionamento estratégico e promoção da cultura data-driven...",
                  href: "https://www.laboneconsultoria.com.br/wp-content/uploads/2026/05/MASTER-BLACK-BELT-Jose-Cristiano-da-Silva-Lima-CERTIFICADO-DE-CONCLUSAO.pdf",
                },
                {
                  name: "CSSYB - Certified Six Sigma Yellow Belt",
                  detail:
                    "Mapeamento de fluxos de trabalho e identificação de gargalos em sistemas e processos...",
                  href: "https://www.laboneconsultoria.com.br/wp-content/uploads/2026/05/YELLOW-BELT-Jose-Cristiano-da-Silva-Lima-CERTIFICADO-DE-CONCLUSAO.pdf",
                },
                {
                  name: "CSSBB - Certified Six Sigma Black Belt",
                  detail:
                    "Liderança técnica de projetos analíticos de alto impacto para redução de custos e melhoria de processos...",
                  href: "https://www.laboneconsultoria.com.br/wp-content/uploads/2026/05/BLACK-BELT-Jose-Cristiano-da-Silva-Lima-CERTIFICADO-DE-CONCLUSAO.pdf",
                },
                {
                  name: "CSSWB - Certified Six Sigma White Belt",
                  detail:
                    "Fundamentos de melhoria contínua aplicados à otimização e eficiência de processos...",
                  href: "https://www.laboneconsultoria.com.br/wp-content/uploads/2026/05/WHITE-BELT-Jose-Cristiano-da-Silva-Lima-CERTIFICADO-DE-PARTICIPACAO.pdf",
                },
                {
                  name: "CSSGB - Certified Six Sigma Green Belt",
                  detail:
                    "Estatística aplicada e modelagem preditiva para análise de indicadores de turnover, absenteísmo e performance...",
                  href: "https://www.laboneconsultoria.com.br/wp-content/uploads/2026/05/GREEN-BELT-Jose-Cristiano-da-Silva-Lima-CERTIFICADO-DE-CONCLUSAO.pdf",
                },
              ]}
            />
          </div>

          <div className="border border-[#2a2a2d] bg-[#111112] p-3">
            <CertShowcase
              title="Cibersegurança & Red Team"
              subtitle="Certificação oficial do Governo Federal do B- MCTI"
              items={[
                {
                  name: "Ethical Hacking - Red Team Specialist",
                  detail:
                    "Certificação governamental em segurança da informação, auditoria de sistemas e mitigação de vulnerabilidades aplicadas à governança e integridade de dados corporativos.",
                  href: "https://ava.hackersdobem.org.br/mod/customcert/my_certificates.php?downloadcert=1&userid=3791&certificateid=11",
                },
              ]}
            />
          </div>

          <div className="border border-[#2a2a2d] bg-[#111112] p-3">
            <CertShowcase
              title="Power BI & Power Virtual Agents"
              subtitle="Wharton School - University of Pennsylvania"
              items={[
                {
                  name: "Especialização em Análise de negócios",
                  detail:
                    "Formação executiva voltada à aplicação de ciência de dados na tomada de decisões estratégicas de RH. Capacitação avançada na identificação e tratamento de vieses estatísticos em avaliações de desempenho, uso de modelagem preditiva para o controle de atrito, rotatividade e retenção de talentos, e mapeamento de redes de colaboração interna (ONA) para otimização de fluxos informacionais. Foco em governança de dados, causalidade e implementação de algoritmos éticos e imparciais para o desenvolvimento de talentos.",
                  image: WHARTON,
                  href: "https://www.coursera.org/account/accomplishments/certificate/9Z5KZ6QG8L2C",
                },
              ]}
            />
          </div>

          <div className="border border-[#2a2a2d] bg-[#111112] p-3">
            <CertShowcase
              title="Analise de dados com Python"
              subtitle="Wharton School - University of Pennsylvania"
              items={[
                {
                  name: "Especialização em Análise de negócios",
                  detail:
                    "Formação executiva voltada à aplicação de ciência de dados na tomada de decisões estratégicas de RH. Capacitação avançada na identificação e tratamento de vieses estatísticos em avaliações de desempenho, uso de modelagem preditiva para o controle de atrito, rotatividade e retenção de talentos, e mapeamento de redes de colaboração interna (ONA) para otimização de fluxos informacionais. Foco em governança de dados, causalidade e implementação de algoritmos éticos e imparciais para o desenvolvimento de talentos.",
                  image: WHARTON,
                  href: "https://www.coursera.org/account/accomplishments/certificate/9Z5KZ6QG8L2C",
                },
              ]}
            />
          </div>

          {/* Removed legacy `certifications` list rendering — individual `CertShowcase` components are used above */}
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section
      id="competencias"
      className="border-b border-[#2a2a2d] bg-[#000000] px-4 py-16 md:px-8 md:py-20 relative overflow-hidden"
      aria-labelledby="competencias-title"
    >
      <div className="container">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none"
        >
          <div
            className="w-[60%] h-[60%] rounded-full"
            style={{
              background:
                "radial-gradient(circle at center, rgba(255,255,255,0.06), rgba(255,255,255,0.02) 40%, transparent 70%)",
            }}
          />
        </div>
        <motion.h2
          {...reveal}
          id="competencias-title"
          className="bg-linear-to-r from-[#dff9ff] via-[#91c8ec] to-[#527ca3] bg-clip-text text-4xl font-extrabold tracking-[-0.03em] text-transparent md:text-5xl"
          data-reveal
        >
          Competências Técnicas
        </motion.h2>

        <motion.div
          {...reveal}
          className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
          data-reveal
        >
          {skills.map(item => (
            <div
              key={item}
              className="border border-[#5b6167] bg-[#111112] px-4 py-3 text-lg font-bold text-[#dbdce1] md:text-xl"
            >
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section
      id="contato"
      className="border-b border-[#2a2a2d] bg-[#000000] px-4 py-16 md:px-8 md:py-20"
      aria-labelledby="contato-title"
    >
      <div className="container">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end pt-12">
          <div>
            <p className="text-base font-bold tracking-[0.18em] text-[#b0b1b7]">
              CONTATO
            </p>
            <h2 className="mt-3 bg-linear-to-r from-[#dff9ff] via-[#91c8ec] to-[#527ca3] bg-clip-text text-4xl font-extrabold tracking-[-0.03em] text-transparent md:text-5xl">
              Disponível para projetos estratégicos em analytics e BI.
            </h2>
            <p className="mt-4 text-lg font-semibold text-[#b0b1b7]">
              Três Lagoas, MS - Brasil
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <a
              href="mailto:jcristianolima@yahoo.com.br"
              className="inline-flex min-h-12 items-center justify-center gap-2 border border-[#3a3a40] bg-[#111112] px-6 text-lg font-bold text-[#ffffff] transition-colors hover:border-[#2997ff]"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Enviar e-mail
            </a>
            <a
              href="https://linkedin.com/in/joseyugen"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 border border-[#3a3a40] bg-[#000000] px-6 text-lg font-bold text-[#ffffff] transition-colors hover:border-[#2997ff]"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="border-t border-[#2a2a2d] pt-12 mt-8">
          <div className="mx-auto max-w-4xl text-center">
            <h3 className="bg-linear-to-r from-[#dff9ff] via-[#91c8ec] to-[#527ca3] bg-clip-text text-4xl font-extrabold tracking-[-0.03em] text-transparent md:text-5xl">
              Vamos Conversar?
            </h3>
            <p className="mx-auto mt-5 max-w-3xl text-lg font-semibold leading-relaxed text-[#b7b8be] md:text-xl">
              Estou sempre aberto a novas oportunidades, parcerias e conversas
              sobre inovação e transformação digital.
            </p>
          </div>

          <div className="mx-auto mt-10 mb-12 grid max-w-5xl gap-4 md:grid-cols-3">
            <article className="border border-[#3a3a40] bg-[#111112] p-6 text-center transition-colors hover:border-[#2997ff]">
              <div className="mx-auto flex h-12 w-12 items-center justify-center bg-[#1b1c20]">
                <Mail className="h-6 w-6 text-[#8ec5ea]" aria-hidden="true" />
              </div>
              <h4 className="mt-5 bg-linear-to-r from-[#dff9ff] via-[#91c8ec] to-[#567fa7] bg-clip-text text-3xl font-extrabold text-transparent">
                Email
              </h4>
              <a className="mt-3 inline-block text-lg font-semibold text-[#b8bac1] hover:text-[#dff9ff]">
                jcristianolima@yahoo.com.br
              </a>
            </article>

            <article className="border border-[#3a3a40] bg-[#111112] p-6 text-center transition-colors hover:border-[#2997ff]">
              <div className="mx-auto flex h-12 w-12 items-center justify-center bg-[#1b1c20]">
                <WhatsAppIcon className="h-6 w-6 text-[#8ec5ea]" />
              </div>
              <h4 className="mt-5 bg-linear-to-r from-[#dff9ff] via-[#8ec5ea] to-[#567fa7] bg-clip-text text-3xl font-extrabold text-transparent">
                WhatsApp
              </h4>
              <a className="mt-3 inline-block text-lg font-semibold text-[#b8bac1] hover:text-[#dff9ff]">
                67 98194-0075
              </a>
            </article>
            <article className="border border-[#3a3a40] bg-[#111112] p-6 text-center transition-colors hover:border-[#2997ff]">
              <div className="mx-auto flex h-12 w-12 items-center justify-center bg-[#1b1c20]">
                <MapPin className="h-6 w-6 text-[#8ec5ea]" aria-hidden="true" />
              </div>
              <h4 className="mt-5 bg-linear-to-r from-[#dff9ff] via-[#91c8ec] to-[#567fa7] bg-clip-text text-3xl font-extrabold text-transparent">
                Localização
              </h4>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Tr%C3%AAs+Lagoas+MS"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-lg font-semibold text-[#b8bac1] hover:text-[#dff9ff]"
              >
                Três Lagoas, MS
              </a>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
