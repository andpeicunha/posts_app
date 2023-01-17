import Head from "next/head";
// import clientPromise from "../lib/mongodb";
// import { GetServerSideProps } from "next";
// import { useState } from "react";

import React from "react";
// import useSWR from "swr";

export default function Home() {
  return (
    <>
      <Head></Head>
      <div>
        <h1>H1</h1>
        <p></p>
        <strong>👁</strong>
      </div>
    </>
  );
}

// type Ingred = {
//   id: string;
//   name_ingred: string;
//   price: string;
//   tamanho: string;
//   tipo_tamanho: string;
// };

// export const getServerSideProps: GetServerSideProps<{ data: Ingred }> = async (
//   context
// ) => {
//   const client = await clientPromise;
//   let res = await fetch(`http://localhost:3000/api/getPosts`);
//   let data: Ingred = await res.json();

//   return {
//     props: { data },
//   };
// };

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>Consulta Ingredientes</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main>
//         <h1>Olá {props}</h1>
//       </main>
//     </>
//   );
// }
