import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { BsCalendar3, BsYoutube } from "react-icons/bs";
import { SiHbo, SiPrimevideo } from "react-icons/si";
import { FaImdb } from "react-icons/fa";
import { BiTimeFive, BiWorld } from "react-icons/bi";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SingleContent from "./SingleContent";
import Title from "./layout/Title";
import { RiNetflixFill } from "react-icons/ri";
import { DataObjectSharp } from "@mui/icons-material";
import { Backdrop, Badge, Modal } from "@mui/material";

const Ficha = ({ id, theme, cursorDark, cursorLight, handleSwitch }) => {
  const params = useParams();
  const [identifier, setIdentifier] = useState(params.id);
  const [media, setMedia] = useState(params.media_type);
  const [dato, setDato] = useState([]);
  const [vid, setVid] = useState([]);
  const [horas, setHoras] = useState("");
  const [open, setOpen] = useState(false);
  const [minutos, setMinutos] = useState("");
  const [categoria, setCategoria] = useState([]);
  const API_SRCH = `https://api.themoviedb.org/3/${media}/${identifier}?api_key=1976c380dd1c386feb7c2778eef34284&language=es-ES`;
  const API_VID = `https://api.themoviedb.org/3/${media}/${identifier}/videos?api_key=1976c380dd1c386feb7c2778eef34284`;
  const API_GENRES = `https://api.themoviedb.org/3/genre/${media}/list?api_key=1976c380dd1c386feb7c2778eef34284&language=es-ES`;
  const API_IMG = "https://image.tmdb.org/t/p/w300/";
  const noImage = "/images/noImagen.jpg";

  const fetchId = async () => {
    const { data } = await axios.get(API_SRCH);
    setDato(data);
    console.log(data);
  };
  const fetchVideo = async () => {
    const { data } = await axios.get(API_VID);
    setVid(data.results[0]?.key);
  };

  // const fetchGenres = async () => {
  //   const { data } = await axios.get(API_GENRES);
  //   setCategoria(data.genres);
  //   console.log("categorias " + categoria);
  // };
  useEffect(() => {
    fetchId();
    fetchVideo();
    // fetchGenres();
    fetchTime();
  }, []);

  const fetchTime = () => {
    setHoras(dato.runtime / 60);
    setMinutos(dato.runtime / 0x3c);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="h-fit w-screen bg-slate-500 dark:bg-slate-300 p-6 font-oswald">
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
        <div className=" min-h-screen h-fit font-oswald mt-20 flex flex-wrap justify-center text-center mx-auto">
          {/* POSTER */}
          <div className="w-1/2 ">
            <img
              src={
                dato.poster_path !== null ? API_IMG + dato.poster_path : noImage
              }
              alt={dato.title || dato.name}
              className="rounded-t-lg mx-auto h-full shadow-2xl"
            />
          </div>
          {/* INFO */}
          <div className="w-1/2 space-y-6">
            <div className="flex justify-between">
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-oswald font-bold mx-auto truncate... uppercase">
                {dato.title || dato.name}
              </h1>

              {/* IMDB */}
              {/* {!dato.vote_average ? (
                ""
              ) : (
                <div className="flex flex-col w-1/3  justify-center items-center">
                  <FaImdb color="yellow" className="text-4xl " />
                  {dato.vote_average < 5 ? (
                    <p className="px-2 bg-red-500 rounded-full text-sm">
                      {dato.vote_average.toFixed(1)}
                    </p>
                  ) : dato.vote_average > 8 ? (
                    <p className="px-2 bg-green-500 rounded-full text-sm">
                      {dato.vote_average.toFixed(1)}
                    </p>
                  ) : (
                    <p className="px-2 bg-blue-500 rounded-full text-sm">
                      {dato.vote_average.toFixed(1)}
                    </p>
                  )}
                </div>
              )} */}
            </div>

            <div className="flex font-oswald w-full justify-evenly">
              <div className="flex space-x-2 items-center bg-slate-300 rounded-2xl p-2">
                <BsCalendar3 />
                {!dato.first_air_date && !dato.release_date ? (
                  ""
                ) : (
                  <p className="truncate">
                    {dato.first_air_date?.substr(0, 4) ||
                      dato.release_date?.substr(0, 4)}
                  </p>
                )}
              </div>
              <p>{dato.tagline}</p>
              {media === "movie" ? (
                // <p>{dato.production_countries[0].name}</p>
                <span className="text-xs w-6 h-5">
                  {dato.original_language === "en" ? (
                    <img src="/images/eng_us.png" alt="" />
                  ) : dato.original_language === "es" ? (
                    <img src="/images/spa.webp" alt="" />
                  ) : dato.original_language === "zh" ? (
                    <img src="/images/zh.webp" alt="" />
                  ) : dato.original_language === "pt" ? (
                    <img src="/images/pt.png" alt="" />
                  ) : dato.original_language === "el" ? (
                    <img src="/images/gr.jpg" alt="" />
                  ) : (
                    <img src="/images/eng_us.png" alt="" />
                  )}
                </span>
              ) : (
                <p>{"Temporadas: " + dato.number_of_seasons}</p>
              )}
            </div>

            <div className="flex flex-col justify-center space-y-4">
              {dato.networks && (
                <span className="flex items-center justify-center">
                  {dato.networks[0].name === "Netflix" ? (
                    <RiNetflixFill color="red" className="text-3xl" />
                  ) : dato.networks[0].name === "Amazon" ? (
                    <SiPrimevideo className="text-3xl" />
                  ) : dato.networks[0].name === "Disney+" ? (
                    <img
                      className="text-xl"
                      src="https://icon.horse/icon/www.disneyplus.com"
                      alt=""
                    />
                  ) : dato.networks[0].name === "HBO" ? (
                    <SiHbo className="text-3xl" />
                  ) : (
                    <p className="flex items-center justify-center">
                      <LiveTvIcon className="mr-2" /> {dato.networks[0].name}
                    </p>
                  )}
                </span>
              )}

              {/* DURACION DE PELICULAS */}
              <div className="flex flex-col justify-center align-top">
                {media === "movie" && (
                  <span className="flex items-center justify-center">
                    <BiTimeFive /> {((dato.runtime / 60)-0.5).toFixed(0)} h{" "}
                    {dato.runtime % 60} min
                  </span>
                )}
                
                {/* IMDB */}
                {!dato.vote_average ? (
                  ""
                ) : (
                  <div className="flex w-1/3  justify-center items-center">
                    <FaImdb color="yellow" className="text-4xl " />
                    {dato.vote_average < 5 ? (
                      <p className="px-2 bg-red-500 rounded-full text-sm">
                        {dato.vote_average.toFixed(1)}
                      </p>
                    ) : dato.vote_average > 8 ? (
                      <p className="px-2 bg-green-500 rounded-full text-sm">
                        {dato.vote_average.toFixed(1)}
                      </p>
                    ) : (
                      <p className="px-2 bg-blue-500 rounded-full text-sm">
                        {dato.vote_average.toFixed(1)}
                      </p>
                    )}
                  </div>
                )}
              </div>

              <div className="flex justify-center space-x-2 font-sans ">
                {dato.genres &&
                  dato.genres.map((cat) => (
                    <p
                      className="dark:bg-slate-500 bg-slate-300 dark:text-white rounded-lg text-xs p-2"
                      key={cat.id}
                    >
                      {cat.name}
                    </p>
                  ))}
              </div>
              {/* SINOPSIS, RESUMEN */}
              {!dato.overview ? (
                <h3 className="p-4 rounded-lg font-oswald bg-slate-100 w-2/3 mx-auto">
                  No hay informaci??n
                </h3>
              ) : (
                <h3 className="p-4 rounded-lg text-sm font-oswald bg-slate-100 w-2/3 mx-auto">
                  {dato.overview}
                </h3>
              )}

              <div className="flex justify-around">
                <div className="flex-col justify-center">
                  <p>Trailer</p>
                  <a onClick={handleOpen} target="_blank">
                    <BsYoutube
                      color="red"
                      className="text-4xl cursor-pointer"
                      size="40px"
                    />
                  </a>
                </div>
                {open && (
                  <Modal open={open} onClose={handleClose}>
                    <div className="w-fit h-fit my-20 mx-auto">
                      <iframe
                        width="620"
                        height="410"
                        src={`https://www.youtube.com/embed/${vid}`}
                      ></iframe>
                    </div>
                  </Modal>
                )}

                <div className="flex flex-col items-center justify-center">
                  <p>P??gina Web</p>
                  <a href={dato.homepage} target="_blank">
                    <BiWorld
                      color="white"
                      className="text-4xl cursor-pointer"
                    />
                  </a>
                </div>
              </div>
              <NavLink
                to="/"
                className="mt-6 bg-slate-800 text-white dark:text-black dark:bg-pink-400 w-[80px] rounded-lg p-2 mx-auto uppercase "
              >
                Volver
              </NavLink>
            </div>
          </div>
        </div>
      ) : (
        <h1>No hay nada</h1>
      )}
    </div>
  );
};

export default Ficha;
