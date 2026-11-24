import { type KeyboardEvent, type MouseEvent, useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

import { type Cores, desenharPapel, tracadoEsquematico } from "./papel";
import estilos from "./Registrador.module.css";
import { ESQUEMAS, type Esquema, Sessao } from "./sessao";

const ESQUEMA_INICIAL: Esquema = "FR 5";
const PAUSA_AUTOMATICA_S = 60;
const RESPOSTAS_ATE_RELATO = 15;
const RESPOSTAS_ENTRE_RELATOS = 5;

const RELATO_INICIAL =
  "O sujeito aqui é você. Suas respostas ficam só nesta página e somem quando ela é fechada. Nas práticas, o sujeito será um rato virtual e os dados serão simulados.";

const exemplo = tracadoEsquematico();

type Situacao = "exemplo" | "registrando" | "pausado";

const ETIQUETAS: Record<Situacao, string> = {
  exemplo: "Traçado esquemático de razão fixa",
  registrando: "Registro da sua sessão",
  pausado: "Registro pausado após 60 s sem respostas",
};

const LEITURA_INICIAL = { respostas: 0, reforcos: 0, segundos: 0 };

function lerCores(): Cores {
  const estilo = getComputedStyle(document.documentElement);
  const cor = (nome: string) => estilo.getPropertyValue(nome).trim();
  return {
    papel: cor("--papel"),
    grade: cor("--grade"),
    tinta: cor("--tinta"),
    texto: cor("--grafite-suave"),
  };
}

function formatar(valor: number, casas: number) {
  return valor.toLocaleString("pt-BR", {
    minimumFractionDigits: casas,
    maximumFractionDigits: casas,
  });
}

function redigirRelato(sessao: Sessao, t: number) {
  const { respostasPorMinuto, pausaMediaAposReforco } = sessao.resumir(t);
  const reforcos = `${sessao.reforcos} ${sessao.reforcos === 1 ? "reforço" : "reforços"}`;
  const pausa =
    pausaMediaAposReforco === null
      ? ""
      : ` Depois de cada reforço, sua pausa média foi de ${formatar(pausaMediaAposReforco, 1)} s.`;
  return `Até aqui, você deu ${sessao.respostas} respostas e recebeu ${reforcos}, a ${formatar(respostasPorMinuto, 0)} respostas por minuto.${pausa} Troque o esquema e veja se o traçado muda. Estes dados são seus e ficam só nesta página.`;
}

function tocar(audio: AudioContext, frequencia: number, duracao: number) {
  const oscilador = audio.createOscillator();
  const volume = audio.createGain();
  oscilador.frequency.value = frequencia;
  volume.gain.setValueAtTime(0.13, audio.currentTime);
  volume.gain.exponentialRampToValueAtTime(0.0001, audio.currentTime + duracao);
  oscilador.connect(volume).connect(audio.destination);
  oscilador.start();
  oscilador.stop(audio.currentTime + duracao);
}

/** Registrador cumulativo em que o visitante é o sujeito. */
export function Registrador() {
  const [esquema, setEsquema] = useState<Esquema>(ESQUEMA_INICIAL);
  const [situacao, setSituacao] = useState<Situacao>("exemplo");
  const [leitura, setLeitura] = useState(LEITURA_INICIAL);
  const [relato, setRelato] = useState(RELATO_INICIAL);
  const [pressionada, setPressionada] = useState(false);
  const [acesa, setAcesa] = useState(false);
  const [som, setSom] = useState(false);

  // O desenho muda a cada quadro; por isso a sessão fica fora do estado do React.
  const tela = useRef<HTMLCanvasElement>(null);
  const sessao = useRef<Sessao | null>(null);
  const inicioMs = useRef(0);
  const agora = useRef(0);
  const ultimaResposta = useRef(0);
  const ultimoRelato = useRef(0);
  const quadro = useRef(0);
  const apagarLampada = useRef(0);
  const audio = useRef<AudioContext | null>(null);

  function desenhar() {
    const canvas = tela.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx || canvas.clientWidth === 0) {
      return;
    }
    const densidade = Math.min(window.devicePixelRatio || 1, 2);
    const largura = Math.round(canvas.clientWidth * densidade);
    const altura = Math.round(canvas.clientHeight * densidade);
    if (canvas.width !== largura || canvas.height !== altura) {
      canvas.width = largura;
      canvas.height = altura;
    }
    ctx.setTransform(densidade, 0, 0, densidade, 0, 0);
    const eventos = sessao.current?.eventos ?? exemplo.eventos;
    const fim = sessao.current ? agora.current : exemplo.fim;
    desenharPapel(ctx, canvas.clientWidth, canvas.clientHeight, eventos, fim, lerCores());
  }

  function parar() {
    cancelAnimationFrame(quadro.current);
    quadro.current = 0;
  }

  function animar() {
    agora.current = (performance.now() - inicioMs.current) / 1000;
    if (agora.current - ultimaResposta.current > PAUSA_AUTOMATICA_S) {
      parar();
      setSituacao("pausado");
      return;
    }
    desenhar();
    const segundos = Math.floor(agora.current);
    setLeitura((atual) => (atual.segundos === segundos ? atual : { ...atual, segundos }));
    quadro.current = requestAnimationFrame(animar);
  }

  useEffect(() => {
    const canvas = tela.current;
    if (!canvas) {
      return;
    }
    const observador = new ResizeObserver(desenhar);
    observador.observe(canvas);
    void document.fonts.ready.then(desenhar);
    return () => {
      observador.disconnect();
      parar();
      clearTimeout(apagarLampada.current);
      void audio.current?.close();
      audio.current = null;
    };
  }, []);

  function responder() {
    const instante = performance.now();
    if (sessao.current === null) {
      sessao.current = new Sessao(esquema);
      inicioMs.current = instante;
      agora.current = 0;
    } else if (quadro.current === 0) {
      // Retoma de onde parou: o tempo da pausa não entra na sessão.
      inicioMs.current = instante - agora.current * 1000;
    }
    agora.current = (instante - inicioMs.current) / 1000;
    ultimaResposta.current = agora.current;

    const atual = sessao.current;
    const reforcada = atual.responder(agora.current);
    if (audio.current && som) {
      tocar(audio.current, reforcada ? 880 : 180, reforcada ? 0.25 : 0.05);
    }
    if (reforcada) {
      setAcesa(true);
      clearTimeout(apagarLampada.current);
      apagarLampada.current = window.setTimeout(() => setAcesa(false), 450);
    }
    if (
      atual.respostas >= RESPOSTAS_ATE_RELATO &&
      atual.respostas - ultimoRelato.current >= RESPOSTAS_ENTRE_RELATOS
    ) {
      ultimoRelato.current = atual.respostas;
      setRelato(redigirRelato(atual, agora.current));
    }
    setSituacao("registrando");
    setLeitura({
      respostas: atual.respostas,
      reforcos: atual.reforcos,
      segundos: Math.floor(agora.current),
    });
    desenhar();
    if (quadro.current === 0) {
      quadro.current = requestAnimationFrame(animar);
    }
  }

  function aoTeclar(evento: KeyboardEvent) {
    if (evento.key !== " " && evento.key !== "Enter") {
      return;
    }
    evento.preventDefault();
    // Segurar a tecla conta como uma resposta só.
    if (!evento.repeat) {
      setPressionada(true);
      responder();
    }
  }

  function aoSoltarTecla(evento: KeyboardEvent) {
    if (evento.key === " ") {
      evento.preventDefault();
    }
    setPressionada(false);
  }

  function aoClicar(evento: MouseEvent) {
    // Mouse e toque já contaram no pointerdown; resta o clique de leitor de tela.
    const origem = (evento.nativeEvent as PointerEvent).pointerType;
    if (evento.detail === 0 && !origem) {
      responder();
    }
  }

  function trocarEsquema(escolhidos: readonly string[]) {
    const novo = ESQUEMAS.find(({ nome }) => nome === escolhidos[0])?.nome;
    if (novo === undefined || novo === esquema) {
      return;
    }
    setEsquema(novo);
    sessao.current?.mudarEsquema(novo, agora.current);
    desenhar();
  }

  function trocarPapel() {
    parar();
    sessao.current = null;
    agora.current = 0;
    ultimaResposta.current = 0;
    ultimoRelato.current = 0;
    setSituacao("exemplo");
    setLeitura(LEITURA_INICIAL);
    setRelato(RELATO_INICIAL);
    desenhar();
  }

  function alternarSom() {
    audio.current ??= new AudioContext();
    setSom(!som);
  }

  const regra = ESQUEMAS.find(({ nome }) => nome === esquema)?.regra;

  return (
    <>
      <div className={estilos.aparelho}>
        <div className={estilos.janela}>
          <canvas
            ref={tela}
            className={estilos.papel}
            role="img"
            aria-label="Registro cumulativo: a linha sobe a cada resposta e um traço inclinado marca cada reforço."
          />
          <p className="absolute top-3 left-4 bg-papel px-1.5 font-dado text-sm text-grafite-suave">
            {ETIQUETAS[situacao]}
          </p>
        </div>

        <div className="grid items-center justify-items-center gap-x-10 gap-y-6 px-1 pt-6 pb-2 lg:grid-cols-[1fr_auto_1fr] lg:justify-items-stretch lg:px-4 lg:pt-8">
          <div className="text-center max-lg:order-2 lg:text-left">
            <p id="rotulo-esquemas" className="mb-2 font-display text-base font-medium">
              Esquema de reforço
            </p>
            <ToggleGroup
              aria-labelledby="rotulo-esquemas"
              className="flex-wrap max-lg:justify-center"
              value={[esquema]}
              onValueChange={trocarEsquema}
            >
              {ESQUEMAS.map(({ nome }) => (
                <ToggleGroupItem
                  key={nome}
                  value={nome}
                  className="h-11 border border-input bg-aluminio-claro px-3 font-dado text-[0.9375rem] font-normal hover:bg-white aria-pressed:border-grafite aria-pressed:bg-grafite aria-pressed:text-white"
                >
                  {nome}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
            <p className="mt-2 font-display text-base">{regra}</p>
          </div>

          <button
            type="button"
            className="grid touch-manipulation justify-items-center gap-3 rounded-2xl font-display text-[1.0625rem] font-medium select-none max-lg:order-1"
            onPointerDown={(evento) => {
              if (evento.button === 0) {
                setPressionada(true);
                responder();
              }
            }}
            onPointerUp={() => setPressionada(false)}
            onPointerLeave={() => setPressionada(false)}
            onPointerCancel={() => setPressionada(false)}
            onKeyDown={aoTeclar}
            onKeyUp={aoSoltarTecla}
            onBlur={() => setPressionada(false)}
            onClick={aoClicar}
          >
            <span className={estilos.encaixe}>
              <span className={estilos.haste} data-pressionada={pressionada || undefined} />
            </span>
            Pressione a alavanca
          </button>

          <div className="grid gap-1 max-lg:order-3 lg:justify-self-end">
            <p className="mb-1 flex items-center justify-end gap-2.5 font-display text-[0.9375rem] max-lg:justify-center">
              <span className={estilos.lampada} data-acesa={acesa || undefined} />
              Reforço
            </p>
            <dl className="grid grid-cols-[auto_4.5rem] gap-x-5 gap-y-1 font-dado text-base tabular-nums [&_dd]:text-right [&_dd]:font-medium">
              <dt>Respostas</dt>
              <dd>{leitura.respostas}</dd>
              <dt>Reforços</dt>
              <dd>{leitura.reforcos}</dd>
              <dt>Tempo</dt>
              <dd>{leitura.segundos} s</dd>
            </dl>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-start justify-between gap-x-12 gap-y-4 pt-8 pb-20">
        <p className="max-w-3xl min-w-0">{relato}</p>
        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            aria-pressed={som}
            className="h-11 rounded-full border-grafite-suave bg-transparent px-5 font-display text-base font-normal hover:bg-grafite hover:text-white"
            onClick={alternarSom}
          >
            Som
            <span aria-hidden="true">{som ? "ligado" : "desligado"}</span>
          </Button>
          <Button
            variant="outline"
            className="h-11 rounded-full border-grafite-suave bg-transparent px-5 font-display text-base font-normal hover:bg-grafite hover:text-white"
            onClick={trocarPapel}
          >
            Trocar o papel
          </Button>
        </div>
        <p className="sr-only" aria-live="polite">
          {leitura.reforcos > 0 ? `Reforço ${leitura.reforcos}` : ""}
        </p>
      </div>
    </>
  );
}
