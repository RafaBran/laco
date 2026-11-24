import { Faixa } from "./Secao";

const LINKS = [
  { href: "#caixa", nome: "A caixa" },
  { href: "#metodo", nome: "O método" },
  { href: "#praticas", nome: "As práticas" },
  { href: "#instituicoes", nome: "Instituições" },
] as const;

export function Cabecalho() {
  return (
    <header>
      <Faixa className="flex flex-wrap items-center justify-between gap-x-8 gap-y-2 py-6">
        <a href="#inicio" className="font-display text-2xl font-medium tracking-[0.22em]">
          LACO
        </a>
        <nav aria-label="Seções" className="flex flex-wrap gap-x-7 gap-y-1 font-display text-base">
          {LINKS.map(({ href, nome }) => (
            <a key={href} href={href} className="underline-offset-8 hover:underline">
              {nome}
            </a>
          ))}
          <span className="text-grafite-suave">Entrar, em breve</span>
        </nav>
      </Faixa>
    </header>
  );
}
