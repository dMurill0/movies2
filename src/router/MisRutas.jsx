import React, { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { RiSunFill } from "react-icons/ri";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import App from "../App";
import Anime from "../components/Anime";
import Busqueda from "../components/Busqueda";
import Error404 from "../components/Error404";
import Ficha from "../components/Ficha";
import Footer from "../components/layout/Footer";
import NavBar from "../components/layout/NavBar";
import Pelis from "../components/Pelis";
import Populares from "../components/Populares";
import Series from "../components/Series";
import SingleContent from "../components/SingleContent";

const MisRutas = () => {
  const handleSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const cursorLight = (
    <div>
      <FaMoon className="text-white hidden" />
      <RiSunFill className="text-orange-400 text-md" />
    </div>
  );
  const cursorDark = (
    <div>
      <FaMoon className="text-white " />
      <RiSunFill className="text-black hidden" />
    </div>
  );
  const [theme, setTheme] = useState("light");
  const [id, setId] = useState("");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <BrowserRouter>
      <div className="w-fit max-w-[1490px]">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <Populares
                theme={theme}
                cursorDark={cursorDark}
                cursorLight={cursorLight}
                handleSwitch={handleSwitch}
              />
            }
          ></Route>
          <Route
            path="/pelis"
            element={
              <Pelis
                theme={theme}
                cursorDark={cursorDark}
                cursorLight={cursorLight}
                handleSwitch={handleSwitch}
              />
            }
          ></Route>
          <Route
            path="/:media_type/:id"
            element={
              <Ficha
                theme={theme}
                cursorDark={cursorDark}
                cursorLight={cursorLight}
                handleSwitch={handleSwitch}
              />
            }
          ></Route>
          <Route
            path="/series"
            element={
              <Series
                theme={theme}
                cursorDark={cursorDark}
                cursorLight={cursorLight}
                handleSwitch={handleSwitch}
              />
            }
          ></Route>
          <Route
            path="/anime"
            element={
              <Anime
                theme={theme}
                cursorDark={cursorDark}
                cursorLight={cursorLight}
                handleSwitch={handleSwitch}
              />
            }
          ></Route>
          <Route
            path="/search"
            element={
              <Busqueda
                theme={theme}
                cursorDark={cursorDark}
                cursorLight={cursorLight}
                handleSwitch={handleSwitch}
              />
            }
          ></Route>
          <Route
            path="/search/:query"
            element={
              <Busqueda
                theme={theme}
                cursorDark={cursorDark}
                cursorLight={cursorLight}
                handleSwitch={handleSwitch}
              />
            }
          ></Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default MisRutas;
