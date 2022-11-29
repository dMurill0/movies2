import React from "react";
import Title from "./layout/Title";

const Error404 = () => {
  return (
    <div className="max-w-[1920px] w-screen h-screen  p-5 flex-col flex-wrap justify-center bg-slate-500 ">
      <h1 className="text-4xl font-oswald text-center mt-12">
        No se encontraron resultados de la búsqueda
      </h1>
      <img className="w-1/2 p-4 m-2" src="images/error.jpg" alt="error" />
    </div>
  );
};

export default Error404;
