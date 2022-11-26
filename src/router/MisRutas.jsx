import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import NavBar from "../components/layout/NavBar";
import Pelis from "../components/Pelis";
import Populares from "../components/Populares";
import Series from "../components/Series";

const MisRutas = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" elemnent={<Populares />} />
        <Route path="/pelis" element={<Pelis />}></Route>
        <Route path="/series" element={<Series />}></Route>
        <Route
          path="*"
          element={
            <div className="h-fit w-fit bg-slate-500">
              <h1 className="font-4xl font-bold">Error 404</h1>
              <p>Página no encontrada</p>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default MisRutas;
