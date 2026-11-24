# Requisitos do LACO

**Status:** aceito, sujeito a revisão · **Data:** 2026-11-23

Marcação: **[D]** decidido, pode ser revisto · **[A]** em aberto.

## Diretriz geral: ensinar o método científico

**[D]** O sistema deve ter embasamento científico e transmitir rigor, para que o aluno aprenda metodologia científica. Produzir pesquisa publicável não é objetivo.

**[D]** O rigor deve ser praticado e transparente, não apenas aparente:

- Hipótese, variável independente, variável dependente e linha de base são registradas antes da sessão.
- Cada sessão guarda semente, versão do modelo e parâmetros, e pode ser reproduzida.
- Sujeitos simulados variam entre si; repetir o experimento faz parte da atividade.
- Delineamentos de sujeito único (por exemplo, reversão ABA) estão disponíveis.
- Dados brutos podem ser exportados; registros não são editados depois da coleta.
- Cada modelo informa referências e limitações.
- Todo dado simulado é identificado como simulado.

## Usuários e papéis

**[D]** Todos os tipos de usuário existem desde o início.

**[D]** Papéis:

| Papel | Responsabilidade |
|---|---|
| Administrador da plataforma | cadastra instituições e seus gestores |
| Gestor institucional | pré-cadastra professores e alunos da instituição |
| Professor | acompanha turmas, cria exercícios, configura experimentos e dá notas |
| Aluno | realiza atividades e sessões |
| Curador científico | revisa modelos, conteúdos e referências |

**[D]** O papel pertence ao vínculo entre pessoa e instituição, não à pessoa. Alguém pode ser professor em uma instituição e aluno em outra.

**[D]** Sem vínculo ou permissão explícita, o acesso é negado.

## Cadastro e primeiro acesso

**[D]** O CPF não é coletado. A pessoa é identificada por instituição e matrícula (ou registro funcional).

**[D]** O usuário é pré-cadastrado por alguém com acesso superior, de preferência da instituição.

**[D]** Fluxo:

1. O gestor pré-cadastra a pessoa com nome, matrícula e papel.
2. O sistema gera um código de ativação individual, de uso único e com validade, entregue pela instituição.
3. A pessoa informa instituição, matrícula e código, cadastra o e-mail e confirma o link recebido.
4. A pessoa define a senha. Os acessos seguintes usam e-mail e senha.

**[D]** Regras:

- A matrícula é única dentro da instituição, não no sistema. O identificador interno da pessoa é independente dela.
- A matrícula identifica, mas não autentica.
- O código é aleatório, guardado apenas como hash e limitado em tentativas. Gerar um novo invalida o anterior.
- Mensagens de erro não revelam se uma matrícula ou e-mail existe.
- Quem já tem conta aceita o vínculo com outra instituição depois de entrar nela.
- Senhas com Argon2id; segundo fator para administradores, gestores e professores.
- Login institucional (OIDC) como opção posterior, ligado à mesma conta.

## Usuários menores de idade

**[D]** Pode haver universitários menores de 18 anos.

**[D]** Todos recebem a proteção mais alta por padrão:

- Coleta mínima: nome, matrícula, e-mail e dados de uso pedagógico.
- Sem perfil público, ranking nominal, mensagens entre usuários, anúncios ou perfilamento comercial.
- Notas e sessões visíveis somente ao aluno e aos responsáveis pela turma.
- O Nhoque não recebe nome, matrícula nem e-mail, e trata apenas da sessão.
- Procedimento definido para relatos sensíveis feitos ao Nhoque.
- Provedor do LLM com termos que permitam o atendimento a menores.

## Personalização por instituição

**[D]** Cada instituição tem um tema, guardado como dado e aplicado sem recompilar o site.

| Pode mudar | Não pode mudar |
|---|---|
| nome e logotipo, com autorização de uso da marca | aviso de dados simulados |
| cor principal e cor secundária | cores dos gráficos e dos eventos da caixa |
| estilo, entre os preparados pelo projeto (de 4 a 6) | cores de erro, alerta e sucesso |
| modo claro ou escuro padrão | CSS livre |

- Gráficos iguais em todas as instituições, para que um mesmo experimento seja lido do mesmo jeito.
- O sistema confere o contraste e recusa ou ajusta cores ilegíveis.

## Sistema de estudo

**[D]** O estudo usa o método Keller (PSI) como base, e a gamificação se apoia no domínio do conteúdo. Detalhes, fontes e decisões pendentes em `docs/sistema-de-estudo.md`.

**[D]** Sem ranking nominal de alunos.

## Em aberto

- **[A]** Enquadramento no ECA Digital (Lei 15.211/2025 e Decreto 12.880/2026), inclusive aferição de idade; exige avaliação jurídica.
- **[A]** Base legal, prazo de retenção e exclusão de dados (LGPD, incluindo o art. 14), e divisão de responsabilidades com as instituições.
- **[D]** Responsável científico provisório: o mantenedor do projeto.
- **[A]** Revisão científica externa antes do uso com alunos reais.
- **[A]** Fonte da curva de validação.
- **[A]** Provedor de e-mail e hospedagem.
- **[A]** Autoria e revisão das questões e peso do domínio na nota.
