import { Faixa, Titulo } from "./Secao";

const FICHA = [
  ["exemplo", "ficha de sessão"],
  ["semente", "4821"],
  ["modelo", "versão e referências"],
  ["parâmetros", "esquema, privação, estímulos"],
  ["origem", "dados simulados"],
] as const;

const COMPROMISSOS = [
  {
    titulo: "É uma simulação",
    texto:
      "Os resultados virão de um modelo, que simplifica o comportamento real. Cada modelo informará seus limites.",
  },
  {
    titulo: "É para ensinar",
    texto:
      "Nada aqui é dado de pesquisa nem recomendação de procedimento para animais ou pessoas.",
  },
  {
    titulo: "É privado",
    texto:
      "O CPF não será coletado. Não haverá perfil público, anúncio nem ranking nominal de alunos.",
  },
] as const;

export function Rigor() {
  return (
    <section
      id="rigor"
      aria-labelledby="titulo-rigor"
      className="bg-noite py-[clamp(5rem,11vw,9.5rem)] text-claro [--foco:var(--lampada)]"
    >
      <Faixa>
        <div className="grid items-end gap-x-[clamp(2rem,6vw,6rem)] gap-y-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="min-w-0">
            <Titulo
              id="rigor"
              titulo="O rigor fica à vista."
              lide="Cada sessão levará a própria ficha. Com ela, qualquer pessoa da turma poderá repetir o experimento e conferir o resultado."
            />
          </div>
          <dl className="grid min-w-0 grid-cols-[auto_1fr] gap-x-6 gap-y-2 bg-noite-alta p-[clamp(1.25rem,3vw,2rem)] font-dado text-base">
            {FICHA.map(([campo, valor]) => (
              <div key={campo} className="contents">
                <dt className="text-claro-suave">{campo}</dt>
                <dd className="min-w-0 wrap-anywhere">{valor}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="mt-[clamp(3rem,6vw,5rem)] grid gap-x-12 gap-y-8 lg:grid-cols-3">
          {COMPROMISSOS.map(({ titulo, texto }) => (
            <div key={titulo}>
              <h3 className="mb-2.5 text-[1.625rem] text-lampada">{titulo}</h3>
              <p className="text-claro-suave">{texto}</p>
            </div>
          ))}
        </div>
      </Faixa>
    </section>
  );
}
