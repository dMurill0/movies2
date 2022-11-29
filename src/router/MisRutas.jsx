import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Busqueda from "../components/Busqueda";
import Error404 from "../components/Error404";
import NavBar from "../components/layout/NavBar";
import Pelis from "../components/Pelis";
import Populares from "../components/Populares";
import Series from "../components/Series";

const MisRutas = () => {
  return (
    <BrowserRouter className="h-fit w-[1200px]">
      <NavBar />
      <Routes>
        <Route path="/" element={<Populares />}></Route>
        <Route path="/pelis" element={<Pelis />}></Route>
        <Route path="/series" element={<Series />}></Route>
        <Route path="/search" element={<Busqueda />}></Route>
        <Route path="/search/:query" element={<Busqueda />}></Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MisRutas;
