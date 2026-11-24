/** Resumo das práticas de docs/plano-semestre.md. Os números são rótulos, não datas. */

export type Ritmo = "real" | "acelerado" | "misto" | "livre";

export interface Pratica {
  numero: number;
  nome: string;
  pergunta: string;
  habilidade: string;
  ritmo: Ritmo;
  dependeDe: string;
  optativa: boolean;
}

export const RITMOS: Record<Ritmo, string> = {
  real: "tempo real",
  acelerado: "tempo acelerado",
  misto: "real e acelerado",
  livre: "a dupla escolhe",
};

export const PRATICAS: readonly Pratica[] = [
  {
    numero: 1,
    nome: "Observação do repertório",
    pergunta: "O que o rato faz? Dois observadores concordam?",
    habilidade: "definição operacional e concordância entre observadores",
    ritmo: "real",
    dependeDe: "nenhuma",
    optativa: false,
  },
  {
    numero: 2,
    nome: "Linha de base",
    pergunta: "O comportamento está estável? Os ratos são iguais?",
    habilidade: "critério de estabilidade e variabilidade",
    ritmo: "real",
    dependeDe: "prática 1",
    optativa: false,
  },
  {
    numero: 3,
    nome: "Treino ao bebedouro",
    pergunta: "O som adquiriu função reforçadora?",
    habilidade: "condição de controle (som não pareado)",
    ritmo: "real",
    dependeDe: "prática 2",
    optativa: false,
  },
  {
    numero: 4,
    nome: "Modelagem",
    pergunta: "Que critério de reforço funciona melhor?",
    habilidade: "hipótese, variável independente e dependente antes da coleta",
    ritmo: "real",
    dependeDe: "prática 3",
    optativa: false,
  },
  {
    numero: 5,
    nome: "CRF, privação e saciação",
    pergunta: "O que mudou: aprendizagem ou motivação?",
    habilidade: "isolar variáveis",
    ritmo: "misto",
    dependeDe: "prática 4",
    optativa: false,
  },
  {
    numero: 6,
    nome: "Extinção, recuperação e recondicionamento",
    pergunta: "A resposta foi apagada?",
    habilidade: "reversão (ABA) e descrição de dados",
    ritmo: "misto",
    dependeDe: "prática 5",
    optativa: false,
  },
  {
    numero: 7,
    nome: "Razão fixa e variável",
    pergunta: "Como a razão altera taxa e pausa?",
    habilidade: "análise paramétrica e registro cumulativo",
    ritmo: "acelerado",
    dependeDe: "prática 5",
    optativa: false,
  },
  {
    numero: 8,
    nome: "Intervalo fixo e variável",
    pergunta: "O padrão vem da taxa de reforço ou da contingência?",
    habilidade: "controle acoplado",
    ritmo: "acelerado",
    dependeDe: "prática 5",
    optativa: false,
  },
  {
    numero: 9,
    nome: "História e resistência à extinção",
    pergunta: "O esquema anterior muda a extinção?",
    habilidade: "comparar medidas e interpretações rivais",
    ritmo: "acelerado",
    dependeDe: "prática 6 e prática 7 ou 8",
    optativa: true,
  },
  {
    numero: 10,
    nome: "Oficina de replicação",
    pergunta: "O resultado de outra dupla se repete?",
    habilidade: "replicação, revisão por pares e pré-registro do projeto",
    ritmo: "livre",
    dependeDe: "prática 6",
    optativa: false,
  },
  {
    numero: 11,
    nome: "Discriminação e reversão",
    pergunta: "O estímulo passou a controlar a resposta?",
    habilidade: "índice discriminativo e delineamento intrassujeito",
    ritmo: "misto",
    dependeDe: "prática 6",
    optativa: false,
  },
  {
    numero: 12,
    nome: "Generalização",
    pergunta: "A quais estímulos o controle se estende?",
    habilidade: "teste de sondagem e gradiente",
    ritmo: "acelerado",
    dependeDe: "prática 11",
    optativa: true,
  },
  {
    numero: 13,
    nome: "Encadeamento",
    pergunta: "Um elo reforça o anterior?",
    habilidade: "análise de componentes",
    ritmo: "misto",
    dependeDe: "prática 11",
    optativa: true,
  },
  {
    numero: 14,
    nome: "Controle aversivo",
    pergunta: "A supressão dura? Ela vem da contingência ou do estímulo?",
    habilidade: "controle acoplado, duas análises dos mesmos dados e ética",
    ritmo: "misto",
    dependeDe: "prática 6",
    optativa: false,
  },
  {
    numero: 15,
    nome: "Projeto da dupla",
    pergunta: "Qual é a sua pergunta?",
    habilidade: "condução, relatório e apresentação",
    ritmo: "livre",
    dependeDe: "prática 10",
    optativa: false,
  },
];
