import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { BsCalendar3, BsYoutube } from "react-icons/bs";
import { FaImdb } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import SingleContent from "./SingleContent";
import Title from "./layout/Title";

const Ficha = ({ id, theme, cursorDark, cursorLight, handleSwitch }) => {
  const params = useParams();
  const [identifier, setIdentifier] = useState(params.id);
  const [dato, setDato] = useState([]);
  const API_SRCH = `https://api.themoviedb.org/3/tv/${identifier}?api_key=1976c380dd1c386feb7c2778eef34284&language=es-ES`;
  const API_IMG = "https://image.tmdb.org/t/p/w300/";
  console.log("el identifier es: " + identifier);
  const noImage = "/public/images/noImagen.jpg";

  const fetchId = async () => {
    const { data } = await axios.get(API_SRCH);
    setDato(data);
    console.log(dato);
  };

  useEffect(() => {
    fetchId();
  }, []);
  return (
    <div className="h-fit w-screen bg-slate-500 ">
      <Title
        titulo="Ficha"
        theme={theme}
        cursorDark={cursorDark}
        cursorLight={cursorLight}
        handleSwitch={handleSwitch}
      />
      {dato ? (
        // <SingleContent
        //   id={identifier}
        //   poster={dato.poster_path}
        //   title={dato.title || dato.name}
        //   date={dato.first_air_date || dato.release_date}
        //   media_type={dato.media_type}
        // />
        <div className="bg-slate-500 sm:w-1/2 md:w-1/3 p-4 m-4 min-h-screen h-fit font-oswald sm:bg-slate-400 space-y-3 flex flex-col flex-wrap justify-center text-center mx-auto">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-oswald font-bold mx-auto ">
            {dato.title || dato.name}
          </h1>
          <div className="flex font-oswald w-full justify-evenly">
            <div className="flex space-x-2 items-center">
              <BsCalendar3 />
              <p className="">{dato.first_air_date}</p>
            </div>
            <p>{dato.tagline}</p>
            <p>{"Temporadas: " + dato.number_of_seasons}</p>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <img
              src={
                dato.poster_path !== null ? API_IMG + dato.poster_path : noImage
              }
              alt={dato.title || dato.name}
              className="rounded-t-lg mx-auto"
            />
            {!dato.overview ? (
              <h3 className="p-4 rounded-lg font-oswald bg-slate-100 w-2/3 mx-auto">
                No hay información
              </h3>
            ) : (
              <h3 className="p-4 rounded-lg font-oswald bg-slate-100 w-2/3 mx-auto">
                {dato.overview}
              </h3>
            )}

            <div className="flex justify-between">
              <div className="flex w-1/3 space-x-3 items-center ">
                <p>Ver tráiler</p>
                <BsYoutube color="red" className="text-3xl cursor-pointer" />
              </div>
              <div className="flex w-1/3 space-x-1 items-center justify-center">
                <p>Web</p>
                <a href={dato.homepage} target="_blank">
                  <BiWorld color="white" className="text-2xl cursor-pointer" />
                </a>
              </div>

              {!dato.vote_average ? (
                ""
              ) : (
                <div className="flex w-1/3 space-x-3 justify-end items-center">
                  <FaImdb color="yellow" className="text-2xl " />
                  <p>{dato.vote_average.toFixed(1)}</p>
                </div>
              )}
            </div>
            <NavLink
              to="/"
              className="mt-2 bg-slate-500 w-[80px] rounded-lg p-2 mx-auto uppercase"
            >
              Volver
            </NavLink>
          </div>
        </div>
      ) : (
        <h1>No hay nada</h1>
      )}
    </div>
  );
};

export default Ficha;
