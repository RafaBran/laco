import { useState } from "react";

import { cn } from "@/lib/utils";

import { PRATICAS, RITMOS } from "./catalogo";
import { Secao } from "./Secao";

const PRATICA_INICIAL = 6;

export function Praticas() {
  const [numero, setNumero] = useState(PRATICA_INICIAL);
  const escolhida = PRATICAS.find((pratica) => pratica.numero === numero);

  return (
    <Secao
      id="praticas"
      titulo="Quinze práticas. Quinze perguntas."
      className="bg-tinta text-white [--foco:var(--lampada)]"
    >
      <div className="mt-[clamp(2.5rem,5vw,4rem)] grid items-start gap-x-[clamp(2rem,6vw,6rem)] gap-y-12 lg:grid-cols-[1fr_1.15fr]">
        <ol>
          {PRATICAS.map((pratica) => (
            <li key={pratica.numero}>
              <button
                type="button"
                aria-pressed={pratica.numero === numero}
                onClick={() => setNumero(pratica.numero)}
                className={cn(
                  "grid min-h-11 w-full grid-cols-[2.5rem_1fr_auto] items-baseline gap-2 px-3 py-2 text-left font-display text-lg leading-snug",
                  pratica.numero === numero ? "bg-white text-tinta" : "hover:bg-white/12",
                )}
              >
                <span className="font-dado text-sm">{pratica.numero}</span>
                <span>{pratica.nome}</span>
                <span className="font-dado text-sm">{pratica.optativa ? "optativa" : ""}</span>
              </button>
            </li>
          ))}
        </ol>

        {escolhida !== undefined && (
          <div
            aria-live="polite"
            className="min-w-0 max-lg:order-first lg:sticky lg:top-10"
          >
            <p className="min-h-[2.1em] font-display text-[clamp(2.5rem,1.3rem+4vw,4.75rem)] leading-[1.04] font-light tracking-tight text-balance lg:min-h-[3.1em]">
              {escolhida.pergunta}
            </p>
            <dl className="mt-8 grid grid-cols-[auto_1fr] gap-x-6 gap-y-2.5 border-t border-white/45 pt-6 [&_dd]:min-w-0 [&_dt]:font-display [&_dt]:text-tinta-clara">
              <dt>Habilidade</dt>
              <dd>{escolhida.habilidade}</dd>
              <dt>Ritmo</dt>
              <dd>{RITMOS[escolhida.ritmo]}</dd>
              <dt>Depende de</dt>
              <dd>{escolhida.dependeDe}</dd>
              <dt>Tipo</dt>
              <dd>{escolhida.optativa ? "optativa" : "essencial"}</dd>
            </dl>
          </div>
        )}
      </div>
    </Secao>
  );
}
