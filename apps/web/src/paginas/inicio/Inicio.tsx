import { Abertura } from "./Abertura";
import { Cabecalho } from "./Cabecalho";
import { Caixa } from "./Caixa";
import { Instituicoes } from "./Instituicoes";
import { Metodo } from "./Metodo";
import { Praticas } from "./Praticas";
import { Rigor } from "./Rigor";
import { Faixa } from "./Secao";

export function Inicio() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:z-10 focus:bg-white focus:px-4 focus:py-2"
      >
        Pular para o conteúdo
      </a>
      <p className="bg-noite px-4 py-2 text-center font-display text-[0.9375rem] leading-snug text-claro">
        <strong className="font-medium text-lampada">Em construção.</strong> As práticas ainda não
        estão disponíveis e usarão dados simulados.
      </p>
      <div className="bg-[radial-gradient(90%_1100px_at_50%_300px,#fbfdfd_0,var(--aluminio-claro)_35%,var(--aluminio)_100%)]">
        <Cabecalho />
        <main id="conteudo" tabIndex={-1} className="outline-none">
          <Abertura />
          <Caixa />
          <Metodo />
          <Praticas />
          <Instituicoes />
          <Rigor />
        </main>
      </div>
      <footer className="border-t border-noite-linha bg-noite text-base text-claro-suave [--foco:var(--lampada)]">
        <Faixa className="flex flex-wrap items-center justify-between gap-x-12 gap-y-4 py-10">
          <a href="#inicio" className="font-display text-2xl font-medium tracking-[0.22em] text-claro">
            LACO
          </a>
          <p>Laboratório de Análise do Comportamento Online. Em construção.</p>
        </Faixa>
      </footer>
    </>
  );
}
