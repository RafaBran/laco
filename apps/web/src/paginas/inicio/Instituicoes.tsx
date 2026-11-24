import { type CSSProperties, useState } from "react";

import { buttonVariants } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";

import { Faixa, Titulo } from "./Secao";

const INSTITUICOES = [
  { letra: "A", cor: "Vinho", primaria: "#6d1f3f" },
  { letra: "B", cor: "Floresta", primaria: "#17513c" },
  { letra: "C", cor: "Marinho", primaria: "#16365c" },
  { letra: "D", cor: "Ameixa", primaria: "#4a2a6b" },
] as const;

const ESTILOS = [
  { nome: "Reto", raio: "0rem" },
  { nome: "Suave", raio: "0.875rem" },
  { nome: "Redondo", raio: "1.5rem" },
] as const;

export function Instituicoes() {
  const [instituicao, setInstituicao] = useState<(typeof INSTITUICOES)[number]>(INSTITUICOES[0]);
  const [estilo, setEstilo] = useState<(typeof ESTILOS)[number]>(ESTILOS[1]);

  // O tema é só um conjunto de variáveis: depois, virá do cadastro da instituição.
  const tema = {
    "--primary": instituicao.primaria,
    "--radius": estilo.raio,
  } as CSSProperties;

  return (
    <section
      id="instituicoes"
      aria-labelledby="titulo-instituicoes"
      className="bg-aluminio-claro py-[clamp(5rem,11vw,9.5rem)]"
    >
      <Faixa className="grid items-center gap-x-[clamp(2rem,6vw,6rem)] gap-y-12 lg:grid-cols-[1fr_1.35fr]">
        <div className="min-w-0">
          <Titulo
            id="instituicoes"
            titulo="Com a cara da sua instituição."
            lide="Nome, logotipo, cores e estilo mudam. Os avisos e as cores dos gráficos ficam iguais em todo lugar, para que um mesmo experimento seja lido do mesmo jeito."
          />

          <p id="rotulo-cor" className="mt-9 mb-2.5 font-display text-[1.0625rem] font-medium">
            Cor
          </p>
          <ToggleGroup
            aria-labelledby="rotulo-cor"
            className="flex-wrap"
            value={[instituicao.cor]}
            onValueChange={(valores) => {
              const nova = INSTITUICOES.find(({ cor }) => cor === valores[0]);
              if (nova !== undefined) {
                setInstituicao(nova);
              }
            }}
          >
            {INSTITUICOES.map(({ cor, primaria }) => (
              <ToggleGroupItem
                key={cor}
                value={cor}
                className="h-11 gap-2.5 rounded-full border border-border bg-white pr-4 pl-1.5 font-display text-base font-normal hover:bg-white aria-pressed:border-grafite aria-pressed:bg-white aria-pressed:ring-2 aria-pressed:ring-grafite"
              >
                <i className="size-8 rounded-full" style={{ background: primaria }} />
                {cor}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>

          <p id="rotulo-estilo" className="mt-7 mb-2.5 font-display text-[1.0625rem] font-medium">
            Estilo
          </p>
          <ToggleGroup
            aria-labelledby="rotulo-estilo"
            className="flex-wrap"
            value={[estilo.nome]}
            onValueChange={(valores) => {
              const novo = ESTILOS.find(({ nome }) => nome === valores[0]);
              if (novo !== undefined) {
                setEstilo(novo);
              }
            }}
          >
            {ESTILOS.map(({ nome }) => (
              <ToggleGroupItem
                key={nome}
                value={nome}
                className="h-11 border border-input bg-white px-4 font-display text-base font-normal aria-pressed:border-grafite aria-pressed:bg-grafite aria-pressed:text-white"
              >
                {nome}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>

        <div
          style={tema}
          className="min-w-0 overflow-hidden rounded-[18px] bg-card font-display shadow-[0_1px_2px_rgb(20_35_45/20%),0_40px_70px_-30px_rgb(20_35_45/50%)]"
        >
          <p className="bg-[#fdeecb] px-5 py-2 text-[0.9375rem] text-[#4a3400]">
            <strong className="font-medium">Dados simulados.</strong> Este aviso não pode ser
            retirado.
          </p>
          <div className="flex flex-wrap items-center gap-4 bg-primary px-5 py-4 text-primary-foreground transition-colors duration-300">
            <span className="grid size-10 place-items-center rounded-lg bg-white text-xl font-medium text-primary">
              {instituicao.letra}
            </span>
            Instituição {instituicao.letra} (fictícia)
          </div>
          <div className="grid gap-5 p-[clamp(1.25rem,3vw,2rem)]">
            <div>
              <h3 className="text-[2rem] font-normal">Modelagem</h3>
              <p className="mt-2 text-[0.9375rem] text-muted-foreground">
                Prática 4. Que critério de reforço funciona melhor?
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <svg viewBox="0 0 400 120" aria-hidden="true" className="block h-auto w-full">
                <path
                  d="M4 112H60V108H110V104H150V98H180V90H210V80H236V68H262V56H286V44H310V32H334V20H358V10H396"
                  className="fill-none stroke-tinta stroke-3"
                />
              </svg>
            </div>
            {/* Parece um botão, mas é só a amostra de um. */}
            <span className={cn(buttonVariants(), "pointer-events-none h-11 w-fit px-5 text-base")}>
              Registrar previsão
            </span>
          </div>
        </div>
      </Faixa>
    </section>
  );
}
