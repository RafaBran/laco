# Política de segurança

## Como reportar uma vulnerabilidade

Não abra issue pública para vulnerabilidades. Use o recurso
**Security → Report a vulnerability** (GitHub Private Vulnerability Reporting)
deste repositório, ou contate o mantenedor diretamente.

Inclua: descrição do problema, passos para reproduzir, impacto estimado e,
se possível, sugestão de correção. Responderemos assim que possível.

## Regras do projeto

- **Nenhum segredo no repositório.** Configuração apenas por variáveis de
  ambiente (`pydantic-settings`). O `.env.example` contém só placeholders.
- **Nenhum dado real de aluno no repositório.** Desenvolvimento e testes usam
  dados sintéticos. A pasta `data/` é ignorada pelo git.
- **Chave do LLM (Nhoque) só no servidor.** Nunca enviada ao navegador.
- **Tokens:** vida curta, assinatura assimétrica (RS256 ou EdDSA), renovação.
  Sempre validar algoritmo, `iss`, `aud` e `exp`.
- **CI:** GitHub Actions executa testes e `gitleaks` em todo push e PR.
- **Antes de cada commit:** revisar o diff e confirmar que não há credenciais.

## Se um segredo vazar

1. Revogue/rotacione a credencial imediatamente (remover do git não basta).
2. Remova do histórico (ex.: `git filter-repo`) e force a atualização do remoto.
3. Registre o incidente e verifique logs de uso indevido.
