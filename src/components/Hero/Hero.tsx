import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { Button } from "../ui/button";
import { TbExternalLink } from "react-icons/tb";

function Hero() {
  return (
    <section className="mx-auto mt-24 flex w-full max-w-[350px] flex-col rounded-3xl bg-gradient-to-tr from-rose-600 to-rose-400 px-6 py-16 shadow-lg md:mt-0 md:max-w-3xl md:flex-row md:from-rose-700 md:via-rose-300 md:to-rose-200 md:px-16 lg:max-w-6xl">
      <div className="flex flex-col gap-1 md:w-1/2">
        <p className="font-Inter text-center font-light text-white drop-shadow-xl md:text-left">
          Dolce Encanto Doceria
        </p>
        <h1 className="text-center font-LobsterTwo text-6xl font-bold text-white md:text-left md:text-6xl lg:pr-12 lg:text-7xl">
          Desfrute da Doçura Artesanal
        </h1>
        <p className="mt-4 px-12 text-center text-sm font-semibold text-white opacity-80 md:px-0 md:text-left lg:pr-32">
          Experimente a magia dos nossos doces artesanais, feitos com amor e os
          melhores ingredientes.
        </p>

        <div className="mt-6 flex flex-row items-center justify-center gap-2 md:justify-start">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Button variant={"secondary"}>Explorar</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="tooltip">Explore nossa loja virtual</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant={"link"}
                  className="gap-1 text-white underline underline-offset-4"
                >
                  Whatsapp <TbExternalLink />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="tooltip">Ir para whatsapp</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      <div className="">
        <img
          src="/cupcake-1.webp"
          alt="imagem de um cupcake"
          className="-md:translate-x-full absolute hidden translate-x-16 rotate-12 drop-shadow-xl md:flex md:w-80 lg:w-[400px]"
        />
        <img
          src="/gomas.webp"
          alt="imagem de doces variados ao fundo"
          className="absolute hidden drop-shadow-xl md:flex md:w-44 md:translate-x-32 md:translate-y-40 lg:w-[200px] lg:translate-x-36 lg:translate-y-48"
        />
        <img
          src="/cupcake-2.webp"
          alt="imagem de outro cupcake ao lado do primeiro"
          className="absolute hidden -rotate-6 drop-shadow-xl md:flex md:w-80 md:-translate-x-20 md:translate-y-4 lg:w-[400px] lg:-translate-x-32 lg:translate-y-0"
        />
      </div>
    </section>
  );
}

export default Hero;
