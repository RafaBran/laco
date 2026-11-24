import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface FaixaProps {
  children: ReactNode;
  className?: string;
}

/** Largura e margens laterais comuns a todas as seções. */
export function Faixa({ children, className }: FaixaProps) {
  return (
    <div className={cn("mx-auto w-full max-w-[82rem] px-[clamp(1.25rem,4vw,3.5rem)]", className)}>
      {children}
    </div>
  );
}

interface SecaoProps extends FaixaProps {
  id: string;
  titulo: string;
  lide?: string;
}

export function Secao({ id, titulo, lide, className, children }: SecaoProps) {
  return (
    <section
      id={id}
      aria-labelledby={`titulo-${id}`}
      className={cn("py-[clamp(5rem,11vw,9.5rem)]", className)}
    >
      <Faixa>
        <Titulo id={id} titulo={titulo} lide={lide} />
        {children}
      </Faixa>
    </section>
  );
}

interface TituloProps {
  id: string;
  titulo: string;
  lide?: string | undefined;
}

export function Titulo({ id, titulo, lide }: TituloProps) {
  return (
    <>
      <h2 id={`titulo-${id}`} className="text-[clamp(2.5rem,1.4rem+4.4vw,5rem)]">
        {titulo}
      </h2>
      {lide !== undefined && <p className="mt-6 max-w-xl text-xl leading-normal">{lide}</p>}
    </>
  );
}
