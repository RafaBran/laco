import type { Evento } from "./sessao";

const PIXELS_POR_SEGUNDO = 26;
const PIXELS_POR_RESPOSTA = 6;
const PASSO_DA_GRADE = 20;
const MARGEM_ESQUERDA = 24;
const BASE = 22;
const TOPO = 46;
/** Posição máxima da pena; a partir dela, o papel é que anda. */
const FRACAO_DA_PENA = 0.8;

export interface Cores {
  papel: string;
  grade: string;
  tinta: string;
  texto: string;
}

/** Traçado fixo de razão 5, para o papel não começar vazio. Não vem do simulador. */
export function tracadoEsquematico(): { eventos: Evento[]; fim: number } {
  const eventos: Evento[] = [];
  let t = 0;

  for (let corrida = 0; corrida < 9; corrida += 1) {
    t += 1.5;
    for (let resposta = 0; resposta < 5; resposta += 1) {
      t += 0.3;
      eventos.push({ tipo: "resposta", t });
    }
    eventos.push({ tipo: "reforco", t });
  }

  return { eventos, fim: t + 1 };
}

export function desenharPapel(
  ctx: CanvasRenderingContext2D,
  largura: number,
  altura: number,
  eventos: readonly Evento[],
  fim: number,
  cores: Cores,
) {
  const deslocamento = Math.max(
    0,
    fim * PIXELS_POR_SEGUNDO + MARGEM_ESQUERDA - largura * FRACAO_DA_PENA,
  );
  const paraX = (t: number) => MARGEM_ESQUERDA + t * PIXELS_POR_SEGUNDO - deslocamento;
  const chao = altura - BASE;

  ctx.fillStyle = cores.papel;
  ctx.fillRect(0, 0, largura, altura);

  ctx.strokeStyle = cores.grade;
  ctx.lineWidth = 1;
  ctx.beginPath();
  const primeiraColuna = MARGEM_ESQUERDA - (deslocamento % PASSO_DA_GRADE) - PASSO_DA_GRADE;
  for (let x = primeiraColuna; x < largura; x += PASSO_DA_GRADE) {
    ctx.moveTo(x, 0);
    ctx.lineTo(x, altura);
  }
  for (let y = chao; y > 0; y -= PASSO_DA_GRADE) {
    ctx.moveTo(0, y);
    ctx.lineTo(largura, y);
  }
  ctx.stroke();

  // Como no aparelho real, a pena volta à base quando chega ao topo.
  const respostasPorVarredura = Math.max(5, Math.floor((chao - TOPO) / PIXELS_POR_RESPOSTA));
  const reforcos: { x: number; y: number }[] = [];
  const fases: { x: number; nome: string }[] = [];
  let naVarredura = 0;
  let y = chao;

  ctx.strokeStyle = cores.tinta;
  ctx.lineWidth = 2.5;
  ctx.lineJoin = "round";
  ctx.beginPath();
  ctx.moveTo(paraX(0), y);
  for (const evento of eventos) {
    const x = paraX(evento.t);
    if (evento.tipo === "resposta") {
      ctx.lineTo(x, y);
      naVarredura += 1;
      if (naVarredura > respostasPorVarredura) {
        naVarredura = 1;
        ctx.lineTo(x, chao);
      }
      y = chao - naVarredura * PIXELS_POR_RESPOSTA;
      ctx.lineTo(x, y);
    } else if (evento.tipo === "reforco") {
      reforcos.push({ x, y });
    } else {
      fases.push({ x, nome: evento.esquema });
    }
  }
  const penaX = paraX(fim);
  ctx.lineTo(penaX, y);
  ctx.stroke();

  ctx.beginPath();
  for (const reforco of reforcos) {
    ctx.moveTo(reforco.x, reforco.y);
    ctx.lineTo(reforco.x + 8, reforco.y + 13);
  }
  ctx.stroke();

  ctx.setLineDash([4, 4]);
  ctx.strokeStyle = cores.texto;
  ctx.fillStyle = cores.texto;
  ctx.lineWidth = 1;
  ctx.font = '13px "Spline Sans Mono Variable", Consolas, monospace';
  for (const fase of fases) {
    ctx.beginPath();
    ctx.moveTo(fase.x, TOPO - 8);
    ctx.lineTo(fase.x, altura);
    ctx.stroke();
    ctx.fillText(fase.nome, fase.x + 5, altura - 7);
  }
  ctx.setLineDash([]);

  // Braço e ponta da pena.
  ctx.strokeStyle = "#69777e";
  ctx.lineWidth = 5;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(penaX + 7, y);
  ctx.lineTo(largura + 10, y - 14);
  ctx.stroke();
  ctx.lineCap = "butt";
  ctx.fillStyle = cores.tinta;
  ctx.beginPath();
  ctx.moveTo(penaX, y);
  ctx.lineTo(penaX + 13, y - 6);
  ctx.lineTo(penaX + 13, y + 5);
  ctx.fill();
}
