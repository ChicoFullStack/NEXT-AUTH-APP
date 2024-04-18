"use client";

import React from "react";
import Layout from "../../components/layout";
import BsTabs from "../../components/BsTabs";

import CadCliente from "../../components/CadCliente";
import CadColabourador from "../../components/CadColaborador";

function Cadastro() {
  return (
    <>
      <Layout>
      <div className=' mx-0 p-0'>

      {/* Tabs Component */}
      <BsTabs items={items} />
    </div>
      </Layout>
    </>
  );
}

export default Cadastro;

const items = [
  {
    title: 'Cliente',
    content: (
      <div className='border-2 border-green-800 rounded-l p-4'>
        {/* <h1 className='text-3xl text-blue-600'>Title Test 1</h1> */}
        <CadCliente/>
      </div>
    ),
  },
  {
    title: 'Colaborador',
    content: (
      <div className='border-2 border-green-800 rounded-lg p-4'>
        {/* <h1 className='text-3xl text-blue-600'>Title Test 2</h1> */}
        <CadColabourador/>
      </div>
    ),
  },
  {
    title: 'Tab 3',
    content: (
      <div className='border-2 border-green-800 rounded-lg p-4'>
        {/* <h1 className='text-3xl text-blue-600'>Title Test 3</h1> */}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          aperiam asperiores doloribus velit dolore magnam ex consectetur fugit
          earum illum qui similique architecto dolorum, minima enim quidem
          voluptatibus at nulla deleniti harum! Totam, mollitia quos voluptatem
          deleniti provident obcaecati rerum. amet consectetur adipisicing elit.
          Dolores aperiam asperiores doloribus velit dolore magnam ex
          consectetur fugit earum illum qui similiq
        </p>
      </div>
    ),
  },

];

