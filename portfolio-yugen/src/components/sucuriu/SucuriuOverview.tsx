import React from 'react'
import { SectionHeading } from '../section-heading'

type Props = {
  className?: string
}

export default function SucuriuOverview({ className = '' }: Props) {
  return (
    <section id="sucuriu" className={`py-12 ${className}`}>
      <div className="container mx-auto px-4">
        <SectionHeading title="Projeto Sucuriú" subtitle="Visão geral e integração" />

        <div className="mt-6 rounded-lg border border-[#97989c] bg-[rgba(29,29,31,0.06)] p-6">
          <h3 className="text-lg font-semibold">Objetivo</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Integração do módulo Sucuriú — pipeline de ingestão, processamento e visualização dos dados
            do projeto. Este componente funciona como ponto de partida para documentação técnica e
            links para rotas/endereços de API.
          </p>

          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="rounded-md bg-gradient-to-tr from-sky-200/10 via-sky-300/6 to-transparent p-3">
              <h4 className="text-sm font-medium">Onde integrar</h4>
              <p className="text-xs text-muted-foreground">Adicionar rota em `PortfolioPage` e registrar no Header</p>
            </div>

            <div className="rounded-md bg-gradient-to-tr from-sky-200/10 via-sky-300/6 to-transparent p-3">
              <h4 className="text-sm font-medium">Backend</h4>
              <p className="text-xs text-muted-foreground">Endpoints e workers em `server/`</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
