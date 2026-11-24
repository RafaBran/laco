import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export type Peca = "luz" | "estimulo" | "falante" | "alavanca" | "bebedouro" | "piso";

/** Barras do piso em perspectiva: mais largas e grossas perto de quem olha. */
const BARRAS = Array.from({ length: 11 }, (_, indice) => {
  const proximidade = (indice / 10) ** 1.4;
  return {
    y: 433 + proximidade * 98,
    meiaLargura: 280 + proximidade * 108,
    espessura: 2 + proximidade * 5,
  };
});

const FALANTE = { x: 625, y: 205, raio: 38 };

const FUROS = Array.from({ length: 25 }, (_, indice) => ({
  x: FALANTE.x + ((indice % 5) - 2) * 14,
  y: FALANTE.y + (Math.floor(indice / 5) - 2) * 14,
})).filter(({ x, y }) => Math.hypot(x - FALANTE.x, y - FALANTE.y) < FALANTE.raio);

interface GrupoProps {
  ativo: boolean;
  aro: ReactNode;
  children: ReactNode;
}

function Grupo({ ativo, aro, children }: GrupoProps) {
  return (
    <g className={cn("transition-opacity duration-300", ativo ? "opacity-100" : "opacity-60")}>
      {children}
      <g
        className={cn(
          "fill-none stroke-lampada stroke-[2.5] transition-opacity duration-300",
          ativo ? "opacity-100" : "opacity-0",
        )}
      >
        {aro}
      </g>
    </g>
  );
}

export function DesenhoDaCaixa({ destaque }: { destaque: Peca }) {
  return (
    <svg
      viewBox="0 0 900 580"
      role="img"
      aria-label="Desenho da caixa experimental, com luzes, alto-falante, alavanca, bebedouro e piso de barras."
      className="block h-auto w-full"
    >
      <defs>
        <linearGradient id="caixa-chapa" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6f808a" />
          <stop offset="0.5" stopColor="#43535d" />
          <stop offset="1" stopColor="#2a3841" />
        </linearGradient>
        <linearGradient id="caixa-metal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.5" stopColor="#b9c4c9" />
          <stop offset="1" stopColor="#76848b" />
        </linearGradient>
        <radialGradient id="caixa-halo">
          <stop offset="0" stopColor="#ffd58a" stopOpacity="0.75" />
          <stop offset="1" stopColor="#ffd58a" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="caixa-vidro" x1="0" x2="1">
          <stop offset="0" stopColor="#cfe6f2" stopOpacity="0.2" />
          <stop offset="1" stopColor="#cfe6f2" stopOpacity="0.04" />
        </linearGradient>
      </defs>

      <ellipse cx="450" cy="550" rx="410" ry="22" fill="#000000" opacity="0.45" />
      <polygon points="170,80 730,80 840,30 60,30" fill="#1d2b34" />
      <rect x="170" y="80" width="560" height="350" fill="url(#caixa-chapa)" />
      <polygon points="170,430 730,430 840,535 60,535" fill="#121d24" />

      <Grupo
        ativo={destaque === "piso"}
        aro={<polygon points="170,430 730,430 840,535 60,535" />}
      >
        {BARRAS.map(({ y, meiaLargura, espessura }) => (
          <line
            key={y}
            x1={450 - meiaLargura}
            x2={450 + meiaLargura}
            y1={y}
            y2={y}
            stroke="#c3cfd5"
            strokeWidth={espessura}
          />
        ))}
      </Grupo>

      <Grupo ativo={destaque === "luz"} aro={<circle cx="450" cy="130" r="40" />}>
        <circle cx="450" cy="135" r="190" fill="url(#caixa-halo)" />
        <circle cx="450" cy="130" r="26" fill="#ffe7b5" />
      </Grupo>

      <Grupo ativo={destaque === "estimulo"} aro={<circle cx="290" cy="220" r="42" />}>
        <circle cx="290" cy="220" r="22" fill="#9fd0ff" />
        <circle cx="290" cy="220" r="30" fill="none" stroke="#1b272e" strokeWidth="5" />
      </Grupo>

      <Grupo
        ativo={destaque === "falante"}
        aro={<circle cx={FALANTE.x} cy={FALANTE.y} r="62" />}
      >
        <circle cx={FALANTE.x} cy={FALANTE.y} r="50" fill="#1b272e" />
        {FUROS.map(({ x, y }) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="3.6" fill="#b7c4cb" />
        ))}
      </Grupo>

      <Grupo
        ativo={destaque === "alavanca"}
        aro={<rect x="208" y="304" width="164" height="68" rx="14" />}
      >
        <rect x="235" y="318" width="110" height="26" rx="5" fill="#121a1f" />
        <rect x="225" y="326" width="130" height="30" rx="9" fill="url(#caixa-metal)" />
      </Grupo>

      <Grupo
        ativo={destaque === "bebedouro"}
        aro={<rect x="534" y="294" width="152" height="128" rx="20" />}
      >
        <rect x="550" y="310" width="120" height="96" rx="14" fill="#0e161b" />
        <rect x="575" y="372" width="70" height="20" rx="10" fill="url(#caixa-metal)" />
        <ellipse cx="610" cy="377" rx="24" ry="5" fill="#a9dcff" />
      </Grupo>

      <g fill="url(#caixa-vidro)" stroke="#8ba0ac" strokeOpacity="0.5">
        <polygon points="170,80 60,30 60,535 170,430" />
        <polygon points="730,80 840,30 840,535 730,430" />
      </g>
      <rect
        x="60"
        y="30"
        width="780"
        height="505"
        fill="none"
        stroke="#c9d6dd"
        strokeOpacity="0.55"
        strokeWidth="3"
      />
      <rect x="40" y="535" width="820" height="16" rx="4" fill="url(#caixa-metal)" />
    </svg>
  );
}
