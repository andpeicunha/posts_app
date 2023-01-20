import React from "react";
import "./index.css";
import Head from "next/head";
import Nav from "./components/navigation";
import Body from "./index";
// import { AnimatePresence } from 'framer-motion'

export default function Home() {
    return (
        <>
            <Head>
                <title>André Peixoto | Front End Developer</title>
            </Head>
            <Nav />
            <Body />
        </>
    );
}
