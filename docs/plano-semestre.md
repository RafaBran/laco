# Plano de um semestre

**Status:** proposta · **Data:** 2026-11-23

Sequência de práticas virtuais para ensinar os fundamentos da análise do comportamento e metodologia científica. Fontes e limites em `docs/base-cientifica.md`.

## Premissas

- **Carga:** 60 horas, 15 semanas de 4 horas. Foi a carga mais frequente em Straehl et al. (2022): 12 de 29 disciplinas, em um intervalo de 45 a 150 horas.
- **Semana típica:** cerca de 2 horas de conceito e preparação e 2 horas de prática e análise.
- **Sequência:** parte do roteiro comum no Brasil (nível operante, comedouro, modelagem, CRF, extinção, esquemas, discriminação) e acrescenta generalização, reversão e encadeamento, presentes no segundo semestre da PUC-SP. Reunir tudo em um semestre é ambicioso; ver a versão de 45 horas.
- **Método:** cada semana introduz **uma** habilidade científica nova e reutiliza as anteriores. A ordem das habilidades é proposta deste projeto, não vem de estudo de eficácia.
- **Sujeito:** um rato por aluno, o mesmo durante o semestre, e dupla de trabalho. Cada aluno conduz o próprio experimento, observa o rato do colega e compara os dois resultados. O professor pode mudar para um rato por dupla ou trio. Quem se atrasar recebe um rato já treinado.

## Sequência

| Semana | Prática | Pergunta | Habilidade científica | Tempo |
|---|---|---|---|---|
| 1 | Observação do repertório | O que o rato faz? Dois observadores concordam? | definição operacional e concordância entre observadores | real |
| 2 | Linha de base | O comportamento está estável? Os ratos são iguais? | critério de estabilidade e variabilidade | real |
| 3 | Treino ao bebedouro | O som adquiriu função reforçadora? | condição de controle (som não pareado) | real |
| 4 | Modelagem | Que critério de reforço funciona melhor? | hipótese, VI e VD antes da coleta | real |
| 5 | CRF, privação e saciação | O que mudou: aprendizagem ou motivação? | isolar variáveis | misto |
| 6 | Extinção, recuperação e recondicionamento | A resposta foi apagada? | reversão (ABA) e descrição de dados | misto |
| 7 | Razão fixa e variável | Como a razão altera taxa e pausa? | análise paramétrica e registro cumulativo | acelerado |
| 8 | Intervalo fixo e variável | O padrão vem da taxa de reforço ou da contingência? | controle acoplado (*yoked*) | acelerado |
| 9 | História e resistência à extinção | O esquema anterior muda a extinção? | comparar medidas e interpretações rivais | acelerado |
| 10 | Oficina de replicação | O resultado de outra dupla se repete? | replicação, revisão por pares e pré-registro do projeto | livre |
| 11 | Discriminação e reversão | O estímulo passou a controlar a resposta? | índice discriminativo e delineamento intrassujeito | misto |
| 12 | Generalização | A quais estímulos o controle se estende? | teste de sondagem e gradiente | acelerado |
| 13 | Encadeamento | Um elo reforça o anterior? | análise de componentes | misto |
| 14 | Controle aversivo | A supressão dura? Ela vem da contingência ou do estímulo? | controle acoplado, duas análises dos mesmos dados e ética | misto |
| 15 | Projeto da dupla | Pergunta própria, pré-registrada na semana 10 | condução, relatório e apresentação | livre |

O projeto é coletado entre as semanas 11 e 14 e apresentado na 15.

## Estrutura de cada prática

1. **Prever:** hipótese e gráfico esperado, registrados antes da coleta.
2. **Conduzir:** sessão com fases, critérios de mudança e registro automático.
3. **Observar:** anotação do aluno, separada do registro da simulação.
4. **Analisar:** escolha de medidas e gráficos a partir dos dados brutos.
5. **Concluir:** comparar com a previsão, explicar diferenças e apontar limites.

Todo relatório traz semente, versão do modelo, parâmetros e o aviso de dados simulados.

## Avaliação sugerida

- Relatórios curtos nas semanas 1 a 9 e 11 a 14.
- Relatórios completos nas semanas 6 e 11.
- Revisão do trabalho de outra dupla na semana 10.
- Projeto final na semana 15.

Uma previsão errada e bem discutida vale tanto quanto uma certa. Avalia-se o raciocínio, não o rato.

## Versão de 45 horas

- Unir as semanas 7 e 8, 11 e 12.
- Tornar optativas as semanas 9 e 13.
- Manter 1 a 6, 10, 14 e 15.

Com 11 encontros, o ajuste fino cabe ao professor.

## Trilhas futuras

| Trilha | Conteúdo |
|---|---|
| Escolha | concorrentes, igualação, demanda e desconto |
| Extinção e recaída | renovação, ressurgência e contexto |
| Microestrutura | episódios de resposta e intervalos entre respostas |
| Respondente | aquisição, bloqueio e supressão condicionada |
| Organismos artificiais | comparar modelos concorrentes com os mesmos dados |
| Medida automática | etograma contínuo e comparação com observadores |
| Outros estímulos aversivos | jato de ar quente e *timeout* |

Uma trilha é um conjunto de práticas com a mesma estrutura, sem mudança no sistema central.

## Um rato por aluno

Nos laboratórios com animais, a dupla ou o trio por rato é comum (Straehl et al., 2022). Com o Sniffy, 7 de 10 docentes também usavam duplas, e 2, um aluno por computador. Com ratos vivos há limite de animais, caixas e horários; no virtual, não.

- Modelagem se aprende fazendo: com um rato por dupla, só um aluno opera de cada vez.
- A dupla continua necessária para concordância entre observadores e revisão.
- Dois ratos por dupla dão uma replicação entre sujeitos em toda prática.

É argumento pedagógico deste projeto; não foi encontrado estudo comparando os dois formatos.

## Controle aversivo

**Decidido em 2026-11-24:** o choque é o estímulo aversivo do semestre, com intensidade em mA. A **contingência** fica separada do **estímulo**, para que outros possam entrar depois.

| Estímulo | Situação |
|---|---|
| Choque | adotado na semana 14 |
| Jato de ar **quente** | trilha futura, como comparação |
| *Timeout* | trilha futura, como punição negativa |

### Por que o choque predomina

- Dimensões físicas mensuráveis (intensidade e duração), ampla faixa de valores, replicação e comparação entre estudos. Uma tese da UFPA reúne esses motivos, com base em Azrin e Holz (1966), entre outros [L].
- Carvalho Neto et al. (2005) atribuem a predominância a razões "essencialmente práticas", citando Azrin e Holz [L].

Isso o torna o estímulo mais **controlável**, não o único nem necessariamente o que mais produz aversão. Punição é definida pela redução da resposta que produz a consequência, não pelo desconforto.

### Limites do choque

Ele elicia reações próprias, como congelamento e sobressalto. Essas respostas competem com a pressão à barra e dificultam separar o efeito da contingência do efeito eliciado. Daí a necessidade do **controle acoplado**: o rato recebe os mesmos choques, sem relação com a resposta.

### O que mostram os dados

| Estudo | Resultado | Leitura |
|---|---|---|
| Silva (2019), choque, 9 ratos | respostas acumuladas em extinção: 70,16% (controle), 59,2% (0,5 mA), 12,43% (1,0 mA) | resumo da dissertação [R] |
| Silva (2019), jato de ar quente, 12 ratos | 63% (controle) e 46,45% (punido) | resumo da dissertação [R] |
| Figueira (2015), choque com acoplado | sem recuperação após a punição, com os controles usados | resumo e conclusão [L] |
| Mayer e Carvalho Neto (2016/2017), jato, 6 ratos | supressão inicial; total de respostas igual ao do controle | resumo [R] |
| Carvalho Neto et al. (2005), jato, 2 ratos | supressão de 98,4% (contínua) e 71,12% (FR3) | artigo [L] |
| Nascimento e Carvalho Neto (2011) | supressão condicionada total com choque e parcial com jato | resumo de busca [C] |
| Rodrigues et al. (2012) | o jato só suprimiu com **aquecimento**, e só a intensidade máxima suprimiu com consistência | resumo [R] |
| Carvalho Neto, Maestri e Hunziker (2020) | 14 de 16 ratos aprenderam fuga do jato quente | resumo [R] |

As amostras são pequenas, e a maior parte vem de um mesmo grupo de pesquisa. Os grupos de choque e de jato em Silva (2019) são estudos separados, com controles próprios. As porcentagens não devem ser comparadas diretamente entre eles.

Em Silva (2019), a conclusão muda com a análise: pelas porcentagens não houve recuperação que igualasse os grupos; pelos valores absolutos, houve. A prática usa isso: **os mesmos dados, duas análises, duas conclusões**.

### Roteiro da semana 14

1. Prever o efeito de intensidades nula, baixa e alta.
2. Conduzir extinção com punição no início, com rato punido, controle e acoplado.
3. Analisar por porcentagem e por valor absoluto.
4. Discutir se a punição tem efeito duradouro e o que o acoplado revela.
5. Discutir ética, alternativas e por que a simulação não autoriza generalizar para pessoas.

Reforço negativo (fuga) é uma variante com o mesmo material.

### Salvaguardas

- O professor pode trocar a prática pela análise de dados prontos, sem conduzir a sessão.
- Representação sem sofrimento gráfico, com intensidade em número e aviso de conteúdo.
- Texto fixo: punição não é recomendação de procedimento.
- Magnitudes só são exibidas como válidas se conferidas com dados publicados.

## Consequências para o sistema

- **Tempo:** a pendência "real ou acelerado" deixa de ser uma escolha única. Observar, modelar e registrar exigem tempo real; esquemas estáveis exigem aceleração. O ritmo é definido por atividade.
- **Registro:** todo comportamento com início e fim, estímulos, respostas, reforço entregue e reforço consumido, reforço manual do aluno, fases e anotações.
- **Separação:** o que o modelo gerou e o que o aluno observou nunca se misturam.
- **Estado:** o rato mantém história, motivação e contexto entre sessões.
- **Operandos e estímulos:** ao menos dois operandos e estímulos com intensidade, para as semanas 11 a 13.
- **Acoplamento:** uma sessão pode usar como entrada os reforços de outra (semana 8).
- **Bifurcação:** cópia do estado do rato, para comparar condições a partir do mesmo ponto.

A bifurcação não existe com animais vivos. Serve para ensinar controle experimental, com o aviso de que um experimento real não permite isso.
