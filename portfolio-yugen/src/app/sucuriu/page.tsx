"use client";

import React, { useState } from "react";
import { Linkedin, Github, X } from "lucide-react";
import Image from "next/image";
import { SucuriuMinitabConsole } from "@/components/sucuriu-console";
import { FooterSection } from "@/components/portfolio-page";

// Criamos um Header exclusivo, leve e blindado para a página do Sucuriú
function SucuriuHeader() {
  const [isAvatarOpen, setIsAvatarOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-[#2a2a2d] bg-[#000000]/95 backdrop-blur-sm">
        <div className="mx-auto flex h-18 w-full max-w-7xl items-center justify-between gap-6 px-5 md:px-7 lg:px-8">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsAvatarOpen(true)}
              className="group relative h-10 w-10 cursor-pointer overflow-hidden border border-[#2a2a2d] bg-[#111112] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2997ff]"
              aria-label="Ampliar avatar"
            >
              <Image
                src="/MinhaFoto.png"
                alt="Avatar de José Cristiano da S. Lima"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </button>

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
            {/* Forçamos a rota absoluta inicial "/" antes de cada âncora */}
            <nav className="hidden items-center gap-7 text-lg font-semibold text-[#afb1b7] lg:flex">
              <a href="/#hero" className="transition-all duration-300 hover:text-white">Sobre</a>
              <a href="/#sobre" className="transition-all duration-300 hover:text-white">Resumo</a>
              <a href="/#experiencia" className="transition-all duration-300 hover:text-white">Experiências</a>
              <a href="/#formacao" className="transition-all duration-300 hover:text-white">Formação</a>
              <a href="/#projetos" className="transition-all duration-300 hover:text-white">Projetos</a>
              <a href="/#certificados" className="transition-all duration-300 hover:text-white">Certificados</a>
              <a href="/#contato" className="transition-all duration-300 hover:text-white">Contato</a>
            </nav>

            <div className="flex items-center gap-3 text-[#afb1b7]">
              <a
                href="https://linkedin.com/in/joseyugen"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center border border-[#2a2a2d] bg-[#111112] hover:text-white hover:border-[#2997ff]"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/Christian-Yugen"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center border border-[#2a2a2d] bg-[#111112] hover:text-white hover:border-[#2997ff]"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {isAvatarOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/85 p-4" onClick={() => setIsAvatarOpen(false)}>
          <div className="relative w-full max-w-2xl" onClick={e => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setIsAvatarOpen(false)}
              className="absolute right-3 top-3 z-30 inline-flex items-center gap-2 rounded-md border-2 border-white/70 bg-black px-4 py-2 text-base font-semibold text-white transition-colors hover:border-[#2997ff]"
            >
              <X className="h-5 w-5" /> Fechar
            </button>
            <div className="relative aspect-3/4 w-full overflow-hidden border border-[#2a2a2d] bg-[#111112]">
              <Image src="/MinhaFoto.png" alt="Avatar ampliado" fill className="object-contain" priority />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function SucuriuPage() {
  return (
    <main className="no-round min-h-screen bg-[#000000] text-[#ffffff]">
      {/* Trocamos o Header que vinha com bug por este local e corrigido */}
      <SucuriuHeader />
      <div className="container mx-auto px-4 md:px-8 py-8">
        <SucuriuMinitabConsole />
      </div>
      <FooterSection />
    </main>
  );
}