import { Registrador } from "@/registrador/Registrador";

import { Faixa } from "./Secao";

export function Abertura() {
  return (
    <section id="inicio" aria-labelledby="titulo-inicio">
      <Faixa>
        <div className="grid items-end gap-x-16 gap-y-6 pt-[clamp(1.5rem,4vw,3.5rem)] pb-[clamp(2rem,4vw,3.25rem)] lg:grid-cols-[1.5fr_1fr]">
          <h1
            id="titulo-inicio"
            className="text-[clamp(3rem,1.2rem+6.4vw,6.75rem)] leading-[0.95] tracking-[-0.035em]"
          >
            Todo comportamento deixa um traço.
          </h1>
          <p className="max-w-xl text-xl leading-normal">
            O LACO é um laboratório virtual de análise do comportamento. Comece por você: pressione a
            alavanca e veja a pena registrar cada resposta.
          </p>
        </div>
        <Registrador />
      </Faixa>
    </section>
  );
}
