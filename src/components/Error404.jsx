import React from "react";
import Title from "./layout/Title";

const Error404 = () => {
  return (
    <div className=" w-screen h-screen min-h-screen  p-5 flex-col flex-wrap justify-center bg-slate-500 ">
      <h1 className="text-xl font-oswald text-center uppercase">
        No se encontraron resultados de la búsqueda
      </h1>
      <img className="h-[420px] mx-auto mt-4 opacity-20" src="/images/error.webp" alt="" />
    </div>
  );
};

export default Error404;
