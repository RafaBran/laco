# Decisão: stack técnica

**Status:** aceita · **Data:** 2026-11-22

## Contexto

O LACO precisa simular esquemas de reforçamento com rigor científico, transmitir eventos em tempo real, autenticar usuários de várias instituições e oferecer um tutor (Nhoque) baseado em LLM sem expor chaves.

## Decisão

| Camada | Escolha | Motivo |
|---|---|---|
| Simulador | Python, NumPy, SciPy | Ecossistema científico; modelos (Rescorla-Wagner, esquemas) testáveis com pytest |
| API / tempo real | FastAPI + WebSocket | Mesmo idioma do simulador; async nativo |
| Persistência | SQLAlchemy 2, Alembic, PostgreSQL (JSONB) | Eventos flexíveis com consultas relacionais |
| Autenticação | E-mail e senha (Argon2id) com pré-cadastro e código de ativação; tokens próprios RS256/EdDSA; OIDC (Authlib) como opção posterior | Nem toda instituição tem login próprio; tokens curtos e verificáveis |
| Site | React + TypeScript + Vite | Ecossistema amplo; tipos compartilháveis com mobile |
| Interface | Tailwind CSS + shadcn/ui (base Base UI) | Controle da aparência e tema por instituição em variáveis CSS |
| Caixa de Skinner | SVG, animação via transform/opacity fora do React | Desempenho e acessibilidade |
| Gráficos | uPlot (cumulativo), ECharts (painéis) | uPlot leve para séries longas; ECharts para dashboards |
| Nhoque | SDK do LLM no servidor, ferramentas restritas aos eventos da sessão | Chave segura; respostas ancoradas nos dados |
| Mobile (depois) | Expo | Reaproveita componentes e tipos |
| Testes | pytest; Vitest; Playwright | Cobertura por camada |
| CI | GitHub Actions + gitleaks | Testes e detecção de segredos |

## Alternativas descartadas (por ora)

Elixir, Flutter, Java no servidor, Angular.

## Consequências

- A simulação roda no servidor; o cliente só renderiza eventos registrados.
- Esquemas sensíveis ao tempo (DRL, taxa) dependem do timestamp do servidor; a incerteza de rede deve ser documentada.

## Revisões

- **2026-11-23 · Autenticação:** o OIDC deixa de ser o login principal e passa a opção posterior, ligada à mesma conta. O fluxo está em `docs/requisitos.md`.
- **2026-11-23 · Ferramentas:** Python 3.14 com uv (workspace e lockfile), ruff e mypy; Node 24 com npm workspaces; TypeScript 6.0, por compatibilidade com o typescript-eslint.
- **2026-11-24 · Interface:** Tailwind CSS + shadcn/ui. Avaliadas também Mantine, MUI, Ant Design, HeroUI, daisyUI e PrimeReact. Pesaram a personalização por instituição e o controle do código; o custo é manter os componentes copiados. O instalador do shadcn não fica como dependência (trazia alertas de segurança): usa-se por `npx`, com versão fixa, e o CSS que ele oferece está copiado em `apps/web/src/estilos/shadcn.css`. As fontes são servidas pelo próprio site.
