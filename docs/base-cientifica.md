# Base científica do LACO

**Status:** proposta para revisão do responsável científico (provisoriamente, o mantenedor do projeto) · **Data:** 2026-11-23

Profundidade de leitura de cada fonte:

- **[L]** lida, no todo ou nos trechos usados aqui.
- **[R]** somente o resumo.
- **[C]** referência conferida (autores, título e DOI), conteúdo ainda não lido.

Esta é uma revisão exploratória, não sistemática. Nenhum item [C] deve sustentar uma decisão antes de ser lido.

## 1. O que se ensina hoje

### No Brasil

Straehl, Huziwara e Oliveira (2022) [L] ouviram 40 docentes (35 de instituições públicas), com dados de 2018:

| Prática | Proporção |
|---|---|
| Animais não humanos | 32,5% |
| Software | 25% |
| Seres humanos | 25% |
| Sem prática | 15% |
| Software e animais | 2,5% |

- Os 10 docentes que usavam software usavam **o mesmo programa**, o Sniffy Pro.
- O roteiro com animais e com software é quase igual: nível operante, treino ao comedouro, modelagem, CRF, extinção e retomada, esquemas e discriminação.
- A avaliação é feita por relatórios.

A apostila de laboratório da PUC-SP (2024) [L] mostra um segundo semestre mais avançado, com duas respostas (barra e argola): efeito da passagem do tempo, controle discriminativo, generalização, encadeamento, discriminação com dois operantes e reversão.

A amostra de Straehl et al. é pequena, de autorrelato e concentrada em instituições públicas. Não representa todos os cursos.

### Norma brasileira

A RN CONCEA 53/2021 [L] proíbe animais em atividades demonstrativas e observacionais que não desenvolvam habilidades psicomotoras e competências, e manda substituí-los por vídeos, **modelos computacionais** ou outros recursos de qualidade suficiente. O texto foi reproduzido na RN 55/2022 [L].

Pela árvore de decisão da norma, uma prática sem eutanásia e sem distresse não é objeto da resolução. Portanto, ela **não proíbe todo laboratório com ratos**. Alterações posteriores não foram verificadas.

### Alternativas

- **PORTL** (Hunter; Rosales-Ruiz, 2023) [R]: jogo de mesa em que um aluno modela o comportamento de outro. Reproduz a câmara operante com humanos.
- **Realidade virtual e câmaras de baixo custo:** citadas em buscas, não lidas.

### Eficácia

Estudantes tendem a preferir o rato vivo ao virtual (Elcoro; Trundle, 2013 [R]; Hunt; Macaskill, 2017 [C]). São dados de preferência e autoavaliação. **Não foi encontrada evidência controlada de que um formato ensine mais.** Há um estudo de eficácia do Sniffy Lite (Venneman; Knowles, 2005 [C]) a ler.

## 2. Softwares existentes

| | Sniffy Pro | CyberRat | Rattus |
|---|---|---|---|
| Tipo | comercial, desktop | comercial, vídeos de ratos reais | código aberto (MIT), desktop |
| Situação | à venda, US$ 19,99 | versão 2.0 (2009) no registro consultado, de 2020 | criado em 10/2026 |
| Conteúdo | 50 exercícios no manual da versão 3: respondente, operante, punição, esquemas, discriminação, generalização, comportamento adjuntivo e modelagem de outras respostas | modelagem, treino ao comedouro, esquemas, extinção, discriminação, privação e saciação | comedouro, modelagem, extinção, recuperação, FR/VR/FI/VI, medo condicionado |
| Exportação | não encontrada | não encontrada | CSV |
| Professor | manual do instrutor | resumos de progresso dos alunos | guia de exercícios |
| Limites | não sacia; sem Chromebook; instalação local | dependia de QuickTime e dos servidores do fornecedor | só inglês; não sacia; constantes escolhidas para ilustrar |

Fontes: site e manual do instrutor do Sniffy [L]; registro NORINA do CyberRat [L], com extinção e discriminação vindas de resumo de busca, sem leitura da fonte; documentação do Rattus [L, parcial]. Não foi encontrado concorrente na web em português com turmas e acompanhamento, mas a busca não foi exaustiva.

Críticas recorrentes aos simuladores, reunidas por Straehl et al. [L]: repertório restrito, pouca variabilidade e imprevisibilidade, e aplicação mecânica.

### Onde o LACO pode se diferenciar

1. Variabilidade real entre sujeitos e entre sessões, com semente reproduzível.
2. Repertório completo registrado em toda sessão, não só a resposta de pressão.
3. Saciação e privação, com a possibilidade de um experimento "dar errado".
4. Dados brutos exportáveis e modelo documentado, com limitações à vista.
5. Método: hipótese, linha de base, replicação e relatório.
6. Web, português, turmas e acessibilidade.

Nenhum código, texto, imagem ou constante desses programas será reaproveitado.

## 3. Catálogo de experimentos

O levantamento do projeto anterior tinha 12 procedimentos, marcados com **•**. Servem de ponto de partida, não de limite.

### Núcleo básico

| Experimento | Pergunta para o aluno |
|---|---|
| Linha de base / nível operante • | O que o rato faz antes de qualquer intervenção? |
| Treino ao bebedouro • | Como o som se torna reforçador condicionado? |
| Modelagem • | Qual critério de reforço modela melhor? |
| CRF • | O que muda quando toda resposta é reforçada? |
| Extinção • | Como a taxa, a variabilidade e as outras respostas mudam? |
| Recuperação espontânea | O que a passagem do tempo faz com a resposta extinta? |
| Recondicionamento • | Reaprender é mais rápido que aprender? |
| FR •, VR •, FI •, VI • | Como cada contingência produz seu padrão? |
| Resistência à extinção por história | O esquema anterior altera a extinção? |
| Treino discriminativo • | Como um estímulo passa a controlar a resposta? |
| Generalização e reversão | A quais estímulos o controle se estende? Pode ser invertido? |
| Encadeamento • | Como um elo reforça o anterior? |
| Saciação e privação | Motivação e aprendizagem são a mesma coisa? |
| Punição e sua retirada | A supressão dura quando a punição termina? |

### Expansão

- Reforço não contingente e comportamento "supersticioso" (Skinner, 1948 [C]; Staddon; Simmelhag, 1971 [C]).
- DRL, DRH, DRO e distribuição dos intervalos entre respostas (Anger, 1956 [C]).
- Razão progressiva e ponto de quebra (Hodos, 1961 [C]).
- Esquemas múltiplos, mistos, encadeados e concorrentes (Ferster; Skinner, 1957 [C]); igualação (Herrnstein, 1961 [C]; Baum, 1974 [C]).
- Discriminação sem erros (Terrace, 1963 [C]); gradientes (Guttman; Kalish, 1956 [C]).
- Reforço negativo: fuga e esquiva (Sidman, 1953 [C]).
- Comportamento adjuntivo: polidipsia (Falk, 1961 [C]).
- Condicionamento respondente e supressão condicionada (Estes; Skinner, 1941 [C]).
- Variabilidade como dimensão reforçável e modelagem por percentis (Galbicka, 1994 [C]).
- Limites biológicos (Breland; Breland, 1961 [C]; Timberlake, 1993 [C]).

### Fronteira

| Tema | Referência | O que traria ao LACO |
|---|---|---|
| Ressurgência e recaída | Shahan; Craig, 2017 [R]; Montague et al., 2025 [C]; Miles; Lattal, 2025 [C] | extinção não apaga a história |
| Extinção como aprendizagem dependente do contexto | Bouton; Maren; McNally, 2021 [R] | renovação e recuperação |
| Microestrutura da resposta | Shull et al., 2002 [R]; Brackney et al., 2011 [R] | separar motivação de execução |
| Teoria evolutiva da dinâmica comportamental | McDowell, 2019 [R] e 2023 [C]; Higginbotham et al., 2025 [R] | organismo artificial alternativo |
| Punição computacional | McDowell; Klapes, 2019 [R] | punição em esquemas concorrentes |
| Demanda | Hursh; Silberberg, 2008 [C] | custo e consumo |
| Contingência e informação | Gallistel et al., 2019 [R]; Jeong et al., 2022 [R] | debate atual sobre o que reforça |
| Modelagem automática | Berardi et al., 2025 [L, parcial] | critério que se estreita rápido no início funcionou melhor (54 humanos) |
| Medida automática do comportamento | DeepLabCut, 2018 [C]; SimBA, 2024 [R]; Keypoint-MoSeq, 2024 [C] | etogramas contínuos |
| Síntese atual | *Quantitative Behavior Analysis*, 2026 [C] | leitura prioritária |

## 4. Além da linha de base tradicional

Na prática tradicional, a linha de base registra todos os comportamentos do rato e, depois, o foco vai para a pressão à barra. **Proposta: o repertório inteiro é registrado em todas as sessões**, e o aluno escolhe o que analisar. Assim, ele pode perguntar:

- O que o rato passa a fazer quando para de pressionar?
- O reforço da pressão reduz quais comportamentos?
- Que resposta costuma vir antes de outra?
- Dois alunos observando a mesma sessão registram o mesmo? Quanto concordam?
- A definição operacional muda o resultado?
- Amostrar a cada 10 segundos preserva o que o registro contínuo mostra?
- A linha de base está estável? Por qual critério?
- O comportamento muda ao longo da sessão por habituação ou saciação?

### Repertório inicial (proposta a validar)

Locomover-se, parar, farejar, farejar o comedouro, levantar-se (com e sem apoio), limpar-se, coçar-se, aproximar-se da barra, tocar a barra, pressionar a barra, entrar no comedouro, comer ou beber, congelar.

Não foi encontrado um etograma publicado específico para esta lista. Cada categoria precisa de definição operacional e fonte, aprovadas pelo responsável científico.

**Conceito:** o sistema conhece o estado verdadeiro da simulação, mas o aluno registra o que *observa*. Comparar os dois permite ensinar observação e concordância entre observadores, o que é impossível com um rato vivo sem filmagem.

### Medidas

Frequência, taxa, duração, latência, intervalo entre respostas, pausa pós-reforço, taxa de corrida, episódios de resposta, distribuição do tempo, transições entre comportamentos, razão de supressão, índice discriminativo, gradiente de generalização e número de respostas em extinção.

## 5. Modelo do sujeito

Rescorla-Wagner trata de associações respondentes. Sozinho, não gera taxa de respostas nem pausas em esquemas operantes. Candidatos:

| Modelo | A favor | Limite conhecido |
|---|---|---|
| Reserva operante (Catania, 2005 [R]) | simula em tempo real; o autor relata extinção, razão e intervalo aleatórios e efeitos de história | o resumo não menciona pausa em FR; a reserva se esgota na extinção, o que precisa ser conciliado com recuperação e renovação |
| MPR (Killeen, 1994 [C]; Killeen; Sitomer, 2003 [R]; Bizo; Killeen, 1997 [C]) | equações para esquemas de razão: ativação, acoplamento e restrição | descreve taxas; não é um organismo que gera eventos |
| Episódios de resposta (Shull et al., 2002 [R]; Brackney et al., 2011 [R]) | dados de ratos: privação altera o início dos episódios; esforço altera a execução | descreve a estrutura; precisa de uma regra de aprendizagem |
| Teoria evolutiva (McDowell, 2019 [R]) | organismo que se comporta continuamente; resultados em vários arranjos | microestrutura e pausas a verificar |

**Recomendação:** construir em camadas e comparar, em vez de escolher um modelo único agora.

1. **Repertório:** comportamentos concorrentes, em episódios, com variação entre sujeitos.
2. **Motivação:** privação e saciação alteram o início dos episódios.
3. **Aprendizagem:** reserva operante como primeiro protótipo.
4. **Extinção:** componente de inibição e contexto, para permitir recuperação e renovação.
5. **Referência analítica:** MPR para conferir as taxas em FR.

Dois cuidados trazidos pela literatura:

- A pausa em FR é controlada também pela razão **seguinte**, e há pausas em VR (Schlinger et al., 2008 [R]). O simulador não deve fixar a pausa como regra.
- A extinção não depende substancialmente de apagar o aprendido (Bouton et al., 2021 [R]). Zerar uma "força" seria cientificamente inadequado.

## 6. Validação

**Padrões que devem emergir**, definidos antes de ajustar parâmetros:

1. A pausa em FR cresce com a razão.
2. Em VI, a taxa cresce com a taxa de reforço, com desaceleração.
3. A taxa cai em extinção e retorna em parte após intervalo.
4. Os intervalos entre respostas em VI formam uma mistura de duas distribuições.
5. Privação altera sobretudo o início dos episódios.
6. Sujeitos diferentes produzem curvas diferentes, com o mesmo padrão.

**Dados quantitativos:** o conjunto Zenodo 10.5281/zenodo.5409201 tem licença **CC BY 4.0**. Segundo a descrição encontrada, traz registros brutos de ratos em razão fixa e progressiva. Os arquivos ainda não foram abertos, e o estudo envolve restrição de proteína; só o grupo sem restrição serviria. **Não foi encontrado conjunto aberto de extinção.** A extinção pode exigir digitalizar uma figura ou pedir dados aos autores.

## 7. Decisões para o responsável científico

1. O catálogo e a divisão em núcleo, expansão e fronteira estão adequados?
2. Aprovar o repertório e as definições operacionais.
3. Aprovar a estratégia de modelo em camadas.
4. Aprovar os padrões de validação e as tolerâncias.
5. Estímulos aversivos: a proposta e as fontes estão em `docs/plano-semestre.md`.

## 8. Leituras que faltam

- *Quantitative Behavior Analysis* (2026), em especial os capítulos 2 (teoria evolutiva) e 4 (MPR).
- Catania (2005) e Killeen e Sitomer (2003), na íntegra, antes do protótipo.
- Tomanari e Eckerman (2003) e Matos e Tomanari (2002), base do ensino no Brasil.
- Freitas, Matheus e Shiga (2017), levantamento em *Educere et Educare*: servidor indisponível na consulta.
- Estudos de eficácia: Venneman e Knowles (2005); Hunt e Macaskill (2017).
- Azrin e Holz (1966) e Boe e Church (1967), na íntegra, antes da prática de punição.

## Referências

### Ensino e norma

- ELCORO; TRUNDLE. Student preferences for live versus virtual rats in a learning course. 2013. [R] https://doi.org/10.20429/ijsotl.2013.070116
- GRAHAM; ALLOWAY; KRAMES. Sniffy, the virtual rat: simulated operant conditioning. 1994. [C] https://doi.org/10.3758/bf03204606
- HUNT; MACASKILL. Student responses to active learning activities with live and virtual rats in psychology teaching laboratories. 2017. [C] https://doi.org/10.1177/0098628317692632
- HUNTER; ROSALES-RUIZ. The PORTL Laboratory. 2023. [R] https://doi.org/10.1007/s40614-023-00369-y
- STRAEHL; HUZIWARA; OLIVEIRA. Do laboratório com animais não humanos para onde? 2022. [L] https://doi.org/10.31505/rbtcc.v23i1.1649
- TOMANARI; ECKERMAN. O rato Sniffy vai à escola. 2003. [C] https://doi.org/10.1590/s0102-37722003000200008
- VENNEMAN; KNOWLES. Sniffing out efficacy: Sniffy Lite, a virtual animal lab. 2005. [C] https://doi.org/10.1207/s15328023top3201_13
- CONCEA. Resolução Normativa nº 53, de 19 de maio de 2021. [L]
- CONCEA. Resolução nº 55, de 5 de outubro de 2022. [L, trechos]
- PUC-SP. Processos básicos: psicologia experimental, laboratório II. 2024. [L, trechos]

### Clássicos

- ANGER. 1956. [C] https://doi.org/10.1037/h0041255
- BAUM. 1974. [C] https://doi.org/10.1901/jeab.1974.22-231
- BRELAND; BRELAND. 1961. [C] https://doi.org/10.1037/h0040090
- ESTES; SKINNER. 1941. [C] https://doi.org/10.1037/h0062283
- FALK. 1961. [C] https://doi.org/10.1126/science.133.3447.195
- FERSTER; SKINNER. Schedules of reinforcement. 1957. [C] https://doi.org/10.1037/10627-000
- GALBICKA. 1994. [C] https://doi.org/10.1901/jaba.1994.27-739
- GUTTMAN; KALISH. 1956. [C] https://doi.org/10.1037/h0046219
- HERRNSTEIN. 1961. [C] https://doi.org/10.1901/jeab.1961.4-267
- HODOS. 1961. [C] https://doi.org/10.1126/science.134.3483.943
- SIDMAN. 1953. [C] https://doi.org/10.1037/h0060730
- SKINNER. 1948. [C] https://doi.org/10.1037/h0055873
- STADDON; SIMMELHAG. 1971. [C] https://doi.org/10.1037/h0030305
- TERRACE. 1963. [C] https://doi.org/10.1901/jeab.1963.6-1
- TIMBERLAKE. 1993. [C] https://doi.org/10.1901/jeab.1993.60-105

### Controle aversivo

- AZRIN; HOLZ. Punishment. In: HONIG (org.). 1966. Não lido; conhecido por fontes que o citam.
- CARVALHO NETO et al. O jato de ar quente como estímulo punidor em *Rattus norvegicus*. 2005. [L] https://doi.org/10.1590/S0102-37722005000300010
- CARVALHO NETO; MAESTRI; HUNZIKER. O jato de ar quente como um estímulo aversivo em contingências de fuga em ratos. 2020. [R] https://doi.org/10.18542/rebac.v16i2.9603
- FIGUEIRA. Punição: uma replicação sistemática de Skinner (1938). Dissertação, UFPA, 2015. [L, trechos]
- JEAN-RICHARD-DIT-BRESSEL et al. Translational research in punishment learning. 2024. [C] https://doi.org/10.1037/bne0000587
- MAYER; CARVALHO NETO. A systematic replication of Skinner (1938) using a hot air blast as the punisher. 2016/2017. [R] https://doi.org/10.18542/rebac.v12i2.4405
- NASCIMENTO; CARVALHO NETO. Supressão condicionada com diferentes estímulos aversivos. 2011. [C] https://doi.org/10.32870/ac.v19i3.28044
- RODRIGUES et al. Efeitos da punição de uma classe de respostas usando diferentes dimensões e intensidades do jato de ar quente. 2012. [R] https://doi.org/10.18542/rebac.v4i2.853
- SILVA. Efeitos permanentes versus temporários da punição. Dissertação, UFPA, 2019. [R]
- Tese sobre simetria e assimetria entre reforçamento e punição. UFPA, repositório 2011/12797. [L, trechos]

### Modelos e microestrutura

- BIZO; KILLEEN. Models of ratio schedule performance. 1997. [C] https://doi.org/10.1037/0097-7403.23.3.351
- BRACKNEY et al. The isolation of motivational, motoric, and schedule effects on operant performance. 2011. [R] https://doi.org/10.1901/jeab.2011.96-17
- CATANIA. The operant reserve: a computer simulation in (accelerated) real time. 2005. [R] https://doi.org/10.1016/j.beproc.2005.02.009
- KILLEEN. Mathematical principles of reinforcement. 1994. [C] https://doi.org/10.1017/s0140525x00033628
- KILLEEN; SITOMER. MPR. 2003. [R] https://doi.org/10.1016/s0376-6357(03)00017-2
- MCDOWELL. A computational model of selection by consequences. 2004. [C] https://doi.org/10.1901/jeab.2004.81-297
- MCDOWELL. On the current status of the evolutionary theory of behavior dynamics. 2019. [R] https://doi.org/10.1002/jeab.495
- SCHLINGER; DERENNE; BARON. What 50 years of research tell us about pausing under ratio schedules of reinforcement. 2008. [R] https://doi.org/10.1007/bf03392160
- SHULL; GAYNOR; GRIMES. Response rate viewed as engagement bouts: resistance to extinction. 2002. [R] https://doi.org/10.1901/jeab.2002.77-211

### Fronteira

- BERARDI et al. Empirically validating a computational model of automatic behavior shaping. 2025. [L, parcial] https://doi.org/10.1371/journal.pone.0313925
- BOUTON; MAREN; MCNALLY. Behavioral and neurobiological mechanisms of Pavlovian and instrumental extinction learning. 2021. [R] https://doi.org/10.1152/physrev.00016.2020
- GALLISTEL; CRAIG; SHAHAN. Contingency, contiguity, and causality in conditioning. 2019. [R] https://doi.org/10.1037/rev0000163
- GOODWIN et al. Simple Behavioral Analysis (SimBA). 2024. [R] https://doi.org/10.1038/s41593-024-01649-9
- HIGGINBOTHAM; DALLERY; MCDOWELL. The evolutionary theory of behavior dynamics predicts delay discounting. 2025. [R] https://doi.org/10.1007/s40614-025-00443-7
- HURSH; SILBERBERG. Economic demand and essential value. 2008. [C] https://doi.org/10.1037/0033-295x.115.1.186
- JEONG et al. Mesolimbic dopamine release conveys causal associations. 2022. [R] https://doi.org/10.1126/science.abq6740
- MATHIS et al. DeepLabCut. 2018. [C] https://doi.org/10.1038/s41593-018-0209-y
- MCDOWELL. Creating and studying the behavior of artificial organisms animated by an evolutionary theory of behavior dynamics. 2023. [C] https://doi.org/10.1007/s40614-023-00366-1
- MCDOWELL; KLAPES. An implementation of punishment in the evolutionary theory of behavior dynamics. 2019. [R] https://doi.org/10.1002/jeab.543
- MILES; LATTAL. Resurgence, behavioral contrast, and stimuli correlated with the absence of reinforcement. 2025. [C] https://doi.org/10.1002/jeab.70068
- MONTAGUE et al. A quantitative analysis of the effects of target- and alternative-reinforcement rate on resurgence. 2025. [C] https://doi.org/10.1002/jeab.70011
- *Quantitative Behavior Analysis*. Springer, 2026. [C] https://doi.org/10.1007/978-3-032-17450-5
- SHAHAN; CRAIG. Resurgence as Choice. 2017. [R] https://doi.org/10.1016/j.beproc.2016.10.006
- WEINREB et al. Keypoint-MoSeq. 2024. [C] https://doi.org/10.1038/s41592-024-02318-2

### Softwares

- Sniffy: https://www.sniffythevirtualrat.com/ [L]
- CyberRat (registro NORINA): https://norecopa.no/no/norina/cyberrat-operant-laboratory-simulations-program [L]
- Rattus: https://github.com/barbieri97/rattus [L, parcial]
