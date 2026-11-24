/**
 * Sessão do visitante no registrador da página inicial.
 *
 * O sujeito é quem visita a página: nada aqui é simulado, gravado ou enviado.
 * As práticas usarão o simulador no servidor, não este arquivo.
 */

export const ESQUEMAS = [
  { nome: "CRF", regra: "Toda resposta é reforçada." },
  { nome: "FR 5", regra: "Cada quinta resposta é reforçada." },
  { nome: "VR 5", regra: "Em média, uma a cada cinco respostas é reforçada." },
  { nome: "FI 10 s", regra: "A primeira resposta depois de dez segundos é reforçada." },
  { nome: "Extinção", regra: "Nenhuma resposta é reforçada." },
] as const;

export type Esquema = (typeof ESQUEMAS)[number]["nome"];

/** Tempos em segundos desde o início da sessão. */
export type Evento =
  | { tipo: "resposta"; t: number }
  | { tipo: "reforco"; t: number }
  | { tipo: "fase"; t: number; esquema: Esquema };

export interface Resumo {
  respostasPorMinuto: number;
  /** Nula enquanto nenhuma resposta vier depois de um reforço na mesma fase. */
  pausaMediaAposReforco: number | null;
}

const RAZAO = 5;
const RAZAO_VARIAVEL_MAXIMA = 2 * RAZAO - 1;
const INTERVALO_S = 10;

export class Sessao {
  readonly eventos: Evento[];
  respostas = 0;
  reforcos = 0;

  private readonly sortear: () => number;
  private esquema: Esquema;
  private respostasDesdeReforco = 0;
  private inicioDoIntervalo = 0;
  private razaoAtual = RAZAO;

  constructor(esquema: Esquema, sortear: () => number = Math.random) {
    this.sortear = sortear;
    this.esquema = esquema;
    this.eventos = [{ tipo: "fase", t: 0, esquema }];
    this.definirRazao();
  }

  /** Registra uma resposta e informa se ela foi reforçada. */
  responder(t: number): boolean {
    this.respostas += 1;
    this.respostasDesdeReforco += 1;
    this.eventos.push({ tipo: "resposta", t });

    if (!this.cumpreContingencia(t)) {
      return false;
    }

    this.reforcos += 1;
    this.respostasDesdeReforco = 0;
    this.inicioDoIntervalo = t;
    this.definirRazao();
    this.eventos.push({ tipo: "reforco", t });
    return true;
  }

  mudarEsquema(esquema: Esquema, t: number) {
    this.esquema = esquema;
    this.respostasDesdeReforco = 0;
    this.inicioDoIntervalo = t;
    this.definirRazao();
    this.eventos.push({ tipo: "fase", t, esquema });
  }

  resumir(t: number): Resumo {
    const pausas: number[] = [];
    let reforcoEm: number | null = null;

    for (const evento of this.eventos) {
      if (evento.tipo === "reforco") {
        reforcoEm = evento.t;
      } else {
        if (evento.tipo === "resposta" && reforcoEm !== null) {
          pausas.push(evento.t - reforcoEm);
        }
        reforcoEm = null;
      }
    }

    const soma = pausas.reduce((total, pausa) => total + pausa, 0);
    return {
      respostasPorMinuto: t > 0 ? (this.respostas / t) * 60 : 0,
      pausaMediaAposReforco: pausas.length > 0 ? soma / pausas.length : null,
    };
  }

  private cumpreContingencia(t: number): boolean {
    switch (this.esquema) {
      case "CRF":
        return true;
      case "FR 5":
      case "VR 5":
        return this.respostasDesdeReforco >= this.razaoAtual;
      case "FI 10 s":
        return t - this.inicioDoIntervalo >= INTERVALO_S;
      case "Extinção":
        return false;
    }
  }

  private definirRazao() {
    this.razaoAtual =
      this.esquema === "VR 5" ? 1 + Math.floor(this.sortear() * RAZAO_VARIAVEL_MAXIMA) : RAZAO;
  }
}
