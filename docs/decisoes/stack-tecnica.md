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
| Autenticação | OIDC (Authlib) + tokens próprios RS256/EdDSA | Login institucional; tokens curtos e verificáveis |
| Site | React + TypeScript + Vite | Ecossistema amplo; tipos compartilháveis com mobile |
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
