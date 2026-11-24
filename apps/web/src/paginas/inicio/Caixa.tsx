import { useState } from "react";

import { cn } from "@/lib/utils";

import { DesenhoDaCaixa, type Peca } from "./DesenhoDaCaixa";
import { Secao } from "./Secao";

const PECAS: readonly { id: Peca; nome: string; descricao: string }[] = [
  {
    id: "luz",
    nome: "Luz da caixa",
    descricao: "Ilumina o ambiente e pode sinalizar o início e o fim da sessão.",
  },
  {
    id: "estimulo",
    nome: "Luz de estímulo",
    descricao: "Na discriminação, sinaliza quando responder produz reforço.",
  },
  {
    id: "falante",
    nome: "Alto-falante",
    descricao: "Emite o som que será pareado com a água no treino ao bebedouro.",
  },
  {
    id: "alavanca",
    nome: "Alavanca",
    descricao: "Cada pressão será registrada com o horário do servidor.",
  },
  {
    id: "bebedouro",
    nome: "Bebedouro",
    descricao: "Entrega a água. Reforço entregue e reforço consumido são registros diferentes.",
  },
  {
    id: "piso",
    nome: "Piso de barras",
    descricao:
      "Usado apenas na prática de controle aversivo, com intensidade em número e sem sofrimento gráfico.",
  },
];

export function Caixa() {
  const [escolhida, setEscolhida] = useState<Peca>("alavanca");
  const descricao = PECAS.find(({ id }) => id === escolhida)?.descricao;

  return (
    <Secao
      id="caixa"
      titulo="Uma caixa, seis peças."
      className="bg-noite bg-[radial-gradient(60%_55%_at_68%_42%,#22343f_0,var(--noite)_70%)] text-claro [--foco:var(--lampada)]"
    >
      <div className="mt-[clamp(2.5rem,5vw,4.5rem)] grid items-center gap-x-16 gap-y-12 lg:grid-cols-[minmax(17rem,1fr)_1.9fr]">
        <div className="max-lg:order-2">
          <ul className="border-b border-noite-linha">
            {PECAS.map(({ id, nome }) => (
              <li key={id}>
                <button
                  type="button"
                  aria-pressed={id === escolhida}
                  onClick={() => setEscolhida(id)}
                  className={cn(
                    "w-full border-t border-noite-linha py-3.5 text-left font-display text-2xl leading-tight font-light transition-[color,padding] duration-300",
                    id === escolhida ? "pl-3 text-lampada" : "text-claro-suave hover:text-claro",
                  )}
                >
                  {nome}
                </button>
              </li>
            ))}
          </ul>
          <p aria-live="polite" className="mt-6 min-h-24 text-xl leading-normal text-claro-suave">
            {descricao}
          </p>
        </div>
        <DesenhoDaCaixa destaque={escolhida} />
      </div>
    </Secao>
  );
}
