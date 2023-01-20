import React from "react";
import { Logo, LinkedinLogo, Blogger, Whats } from "../logotipo"
import { motion } from "framer-motion"

export default function Nav() {
    return (
        //CABEÇALHO DA PÁGINA - ICONES DE CONTATO
        <div className="items-center bg-gray-700/40 py-2 pr-3 sm:pr-6">

            <div className="flex justify-start items-center w-full space-x-4 p-1 ml-2 pr-3">
                <Logo className="grow aspect-auto" width={30} />

                <Whats className="icon-home-nav" width={22} href={"#"} />
                <Blogger className="icon-home-nav" width={22} href={"#"} />
                <motion.div whileHover={{ scale: 1.2, rotate: 360 }}>
                    <LinkedinLogo className="icon-home-nav hover:px-2 cursor-pointer" width={25} href={"https://www.linkedin.com/in/andpeicunha"} />
                </motion.div>
            </div>
        </div >
    );
}