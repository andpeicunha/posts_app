import React, { useState } from "react";
import { LinkedinLogo } from "./logotipo";
import { motion } from "framer-motion";

export default function Body() {
  const [abc, setAbc] = useState(false);

  return (
    <>
      <div className="absolute w-full h-full"></div>
      <div className="container mx-3 w-screen mt-4">
        <h1 className="titulo-3">Olá,</h1>

        <div className="relative">
          <div className="asolute titulo-3 mr-3">I'm </div>
          <div
            onMouseEnter={() => setAbc(true)}
            onMouseLeave={() => setAbc(false)}
            className="absolute left-24 top-0 bottom-0 titulo-3 text-gray-700 font-bold cursor-pointer"
          >
            André,
          </div>
          {abc && (
            <motion.div
              animate={{
                x: 0,
                opacity: 1,
              }}
              // transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 0.5 }}
              transition={{
                delay: 0,
                x: { duration: 2 },
                default: { ease: "easeIn" },
              }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
            >
              <LinkedinLogo
                className="absolute left-[272px] top-[0px] bottom-0 "
                classNameSvg="h-[15px] "
                width={25}
                UrlPage={"https://www.linkedin.com/in/andpeicunha"}
              />
            </motion.div>
          )}
        </div>

        <h1 className="titulo-2 text-2xl mt-4 text-gray-600/80 hover:blur-none">
          Um criativo desenvolver Front-End ✌
        </h1>
        <h1 className="titulo-2 text-xl mt-3 text-gray-200/50 ">
          Sou natural de São Paulo, mas já morei em São Bernardo e também alguns
          anos em Pouso Alegre.
          <p className="h-3" /> Minha história com Front-End na verdade começou
          como Design, meu primeiro trabalho, aos 17 anos foi design gráfico,
          numa extinta gráfica em São Caetano do Sul.
        </h1>
      </div>
    </>
  );
}
