# Mapeamento do Repositório — Projeto Sucuriú

Resumo compacto para o arquiteto de dados sobre a estrutura atual do projeto.

## 1. Árvore principal (foco em /src)

- portfolio-yugen/
  - client/
    - src/
      - App.tsx
      - main.tsx
      - index.css
      - const.ts
      - components/
        - About.tsx
        - Contact.tsx
        - ErrorBoundary.tsx
        - Expertise.tsx
        - Header.tsx
        - Hero.tsx
        - Map.tsx
        - Projects.tsx
        - Experience.tsx
        - ManusDialog.tsx
        - ui/ (primitives e tokens)
      - contexts/
        - ThemeContext.tsx
      - hooks/
        - useComposition.ts
        - useMobile.tsx
        - usePersistFn.ts
      - lib/
        - utils.ts
      - pages/
        - Home.tsx
        - NotFound.tsx

  - src/ (Next.js app)
    - app/
      - globals.css
      - layout.tsx
      - page.tsx
      - not-found.tsx
    - components/
      - portfolio-page.tsx  ← Página principal (com `Resumo Estratégico`, `Competências Técnicas`, etc.)
      - section-heading.tsx
      - ui.tsx
    - lib/
      - utils.ts

  - public/
  - patches/
  - server/
    - index.ts
  - package.json
  - postcss.config.mjs


## 2. Arquivo(s) principais de rota/entrada

- Next.js (app router):
  - `src/app/layout.tsx` — layout global (fonts, <html> e <body>), importa `globals.css`.
  - `src/app/page.tsx` — importa e renderiza `PortfolioPage` (arquivo: `src/components/portfolio-page.tsx`).

- SPA / Vite (cliente):
  - `client/src/main.tsx` — entry para o app Vite (renderiza `App`).
  - `client/src/App.tsx` — monta `Router` (Wouter) e carrega `Home` que inclui os componentes modulares (`Hero`, `About`, `Experience`, etc.).

Observação: a versão Next é a fonte principal em produção; `PortfolioPage` agrega todas as seções (Header, Hero, About/Resumo, Experiência, Formação, Projetos, Competências, Contato).

## 3. Estilos globais e Tailwind CSS

- Tailwind/PostCSS:
  - `postcss.config.mjs` — usa plugin `@tailwindcss/postcss`.
  - Dependências no `package.json`: `tailwindcss`, `@tailwindcss/typography`, `@tailwindcss/postcss`, `tailwindcss-animate`.

- Arquivos de estilos:
  - `src/app/globals.css` — configuração global do Next (importa `tailwindcss`, define variáveis CSS, temas, utilitários e camadas `@layer base`/`@layer components`).
  - `client/src/index.css` — configuração paralela para a versão Vite/cliente; também importa `tailwindcss` e define tokens de cor/tema.

- Convenções e utilitários:
  - Uso extensivo de classes utilitárias Tailwind (p.ex.: `bg-linear-to-r`, `bg-clip-text`, `from-[#dff9ff] via-[#91c8ec] to-[#527ca3]`) e classes personalizadas via `@layer components` (ex.: `.container`).
  - Componentes UI reutilizáveis em `client/src/components/ui/*` seguem padrão ShadCN/ Radix e são consumidos nas páginas.
  - Variáveis CSS definidas com Oklch no `globals.css` / `index.css` para temas light/dark.


## Observações rápidas para a integração do módulo "Projeto Sucuriú"

- Ponto de integração recomendado:
  - Criar um novo componente em `src/components/sucuriu/` e exportar uma rota/página que possa ser referenciada a partir de `PortfolioPage` ou adicionada como menu na `Header`.
  - Para recursos de backend (pipelines, ETL, APIs), use `server/index.ts` ou crie rotas API separadas (ex.: `server/sucuriu/*`) e exponha endpoints para o front.

- Dados e armazenamento:
  - Se o módulo exigir ETL contínuo, providenciar um worker separado (pasta `server/` ou serviço externo) que escreva em um banco dedicado (Postgres/BigQuery) e exponha endpoints REST/GraphQL.

- Estilo/tema:
  - Reusar tokens CSS e utilitários Tailwind já definidos para manter a consistência visual.
