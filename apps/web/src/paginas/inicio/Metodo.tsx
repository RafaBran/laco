import { Secao } from "./Secao";

const LARGURA = 1000;
const ALTURA = 330;
const CHAO = 310;
const FIM_DO_REFORCO = 333;
const FIM_DA_EXTINCAO = 667;

const ETAPAS = [
  {
    nome: "Prever",
    descricao: "A hipótese e o gráfico esperado são registrados antes da coleta.",
  },
  {
    nome: "Conduzir",
    descricao: "A sessão segue fases e critérios de mudança, com registro automático.",
  },
  {
    nome: "Observar",
    descricao: "O aluno anota o que vê, separado do registro da simulação.",
  },
  { nome: "Analisar", descricao: "Ele escolhe medidas e gráficos a partir dos dados brutos." },
  { nome: "Concluir", descricao: "Compara com a previsão, explica diferenças e aponta limites." },
] as const;

function previsto(x: number) {
  if (x < FIM_DO_REFORCO) {
    return x * 0.3;
  }
  if (x < FIM_DA_EXTINCAO) {
    return 100 + 8 * (1 - Math.exp(-(x - FIM_DO_REFORCO) / 20));
  }
  return 108 + (x - FIM_DA_EXTINCAO) * 0.42;
}

function observado(x: number) {
  if (x < FIM_DO_REFORCO) {
    return x * 0.27 + 3 * Math.sin(x / 14);
  }
  if (x < FIM_DA_EXTINCAO) {
    return 90 + 75 * (1 - Math.exp(-(x - FIM_DO_REFORCO) / 75)) + 2 * Math.sin(x / 11);
  }
  return 165 + Math.max(0, x - FIM_DA_EXTINCAO - 23) * 0.36 + 2 * Math.sin(x / 13);
}

/** Curvas desenhadas para ilustrar. O acumulado nunca diminui. */
function tracar(curva: (x: number) => number) {
  const pontos: string[] = [];
  let maximo = 0;
  for (let x = 0; x <= LARGURA; x += 5) {
    maximo = Math.max(maximo, curva(x));
    pontos.push(`${x},${(CHAO - maximo).toFixed(1)}`);
  }
  return pontos.join(" ");
}

const linhaPrevista = tracar(previsto);
const linhaObservada = tracar(observado);

export function Metodo() {
  return (
    <Secao
      id="metodo"
      titulo="Primeiro a previsão. Depois o dado."
      lide="Em toda prática, o aluno desenhará o gráfico que espera antes de coletar. O aprendizado está na distância entre as duas linhas."
      className="bg-papel bg-[linear-gradient(var(--grade)_1px,transparent_1px),linear-gradient(90deg,var(--grade)_1px,transparent_1px)] bg-size-[32px_32px]"
    >
      <figure className="mt-[clamp(2.5rem,5vw,4rem)] border border-[#9fb4bd] bg-papel p-[clamp(1rem,3vw,2.5rem)]">
        <div className="grid grid-cols-3 font-display text-base font-medium">
          {["Reforço", "Extinção", "Reforço"].map((fase, indice) => (
            <span
              key={indice}
              className="min-w-0 border-l border-dashed border-[#7d929c] pl-2.5 wrap-anywhere"
            >
              {fase}
            </span>
          ))}
        </div>
        <svg
          viewBox={`0 0 ${LARGURA} ${ALTURA}`}
          role="img"
          aria-label="Gráfico esquemático com três fases. Na extinção, a linha prevista para de subir logo; a observada sobe por mais algum tempo antes de se estabilizar."
          className="block h-auto w-full"
        >
          <g stroke="#7d929c" strokeDasharray="5 5">
            <line x1={FIM_DO_REFORCO} x2={FIM_DO_REFORCO} y1="0" y2={ALTURA} />
            <line x1={FIM_DA_EXTINCAO} x2={FIM_DA_EXTINCAO} y1="0" y2={ALTURA} />
          </g>
          <line x1="0" x2={LARGURA} y1="320" y2="320" className="stroke-grafite-suave" />
          <polyline
            points={linhaPrevista}
            className="fill-none stroke-previsto stroke-3"
            strokeDasharray="10 7"
          />
          <polyline points={linhaObservada} className="fill-none stroke-tinta stroke-[3.5]" />
        </svg>
        <figcaption className="mt-4 flex flex-wrap gap-x-8 gap-y-2 font-display text-base text-grafite-suave">
          <span className="inline-flex items-center gap-2.5">
            <i className="w-9 border-t-3 border-dashed border-previsto" />
            Previsto pelo aluno
          </span>
          <span className="inline-flex items-center gap-2.5">
            <i className="w-9 border-t-3 border-tinta" />
            Observado
          </span>
          <span>Respostas acumuladas ao longo do tempo. Desenho esquemático.</span>
        </figcaption>
      </figure>

      <ol className="mt-11 grid gap-x-8 gap-y-5 lg:grid-cols-5">
        {ETAPAS.map(({ nome, descricao }, indice) => (
          <li key={nome} className="min-w-0 bg-papel">
            <h3 className="mb-2 text-[1.75rem] font-normal">
              <span className="mr-2 text-tinta">{indice + 1}</span>
              {nome}
            </h3>
            <p className="text-[1.0625rem] leading-normal">{descricao}</p>
          </li>
        ))}
      </ol>
    </Secao>
  );
}
