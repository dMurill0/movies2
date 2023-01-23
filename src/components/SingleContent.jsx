import { Badge } from "@mui/material";
import ContentModal from "./ContentModal";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { unavailable } from "../config/config";
const API_IMG = "https://image.tmdb.org/t/p/w300/";
const noImage = "/public/images/noImagen.jpg";
const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
  language,
  gender,
  known,
  knowFor,
}) => {
  const [media, setMedia] = useState(media_type);
  const [puntuacion, setPuntuacion] = useState(vote_average);
  const [pelis, setPelis] = useState([knowFor]);
  useEffect(() => {
    // localStorage.setItem("knownFor", JSON.stringify(knowFor[0]));
    // var data = JSON.parse(localStorage.getItem("knownFor"));
   // console.log("localstorage es", data);
    if (vote_average) {
      setPuntuacion(vote_average - vote_average.toFixed(1));
    }
  }, [vote_average]);

  return (
    <div>
      {media_type !== "person" ? (
        <ContentModal media_type={media_type} id={id} knowFor={knowFor}>
          <NavLink to={"/" + media_type + "/" + id}>
            <motion.div
              initial={{
                x: -500,
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                x: 0,
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1,
              }}
              className="cursor-pointer flex flex-col w-[300px] bg-slate-800 text-white hover:text-black dark:bg-slate-300 p-2 mt-4 rounded-lg relative hover:bg-slate-400 dark:hover:bg-slate-800 dark:hover:text-white dark:text-black"
            >
              <img
                src={poster ? API_IMG + poster : unavailable}
                alt={title}
                className="rounded-t-lg hover:opacity-60 "
              />
              <div className="flex-col space-y-4">
                <h1 className="text-xl font-oswald text-center truncate">
                  {title}
                </h1>
                <div className="flex justify-between items-end">
                  {language ? (
                    <span className="text-xs w-6 h-5">
                      {language === "en" ? (
                        <img src="images/eng_us.png" alt="" />
                      ) : language === "es" ? (
                        <img src="images/spa.webp" alt="" />
                      ) : language === "zh" ? (
                        <img src="images/eng_us.png" alt="" />
                      ) : language === "pt" ? (
                        <img src="images/pt.png" alt="" />
                      ) : language === "el" ? (
                        <img src="images/gr.jpg" alt="" />
                      ) : (
                        <img src="images/eng_us.png" alt="" />
                      )}
                    </span>
                  ) : (
                    <span className="text-xs font-oswald">
                      {media_type === "tv" ? "Serie" : "Película"}
                    </span>
                  )}
                  <ul>
                    {/* {pelis &&
                      pelis.length > 0 &&
                      pelis.map((p) => {
                        console.log(pelis);
                        <li>{p.title}</li>;
                      })} */}
                  </ul>
                  <p className="text-xs">{date?.substr(0, 4)}</p>
                </div>
              </div>
            </motion.div>
          </NavLink>
        </ContentModal>
      ) : (
        // PERSONAS
        <ContentModal media_type={media_type} id={id}>
          <NavLink to={"/" + media_type + "/" + id}>
            <motion.div
              initial={{
                x: -500,
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                x: 0,
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1,
              }}
              className="cursor-pointer flex flex-col w-[300px] bg-slate-800 text-white hover:text-black dark:bg-slate-300 p-2 mt-4 rounded-lg relative hover:bg-slate-400 dark:hover:bg-slate-800 dark:hover:text-white dark:text-black"
            >
              <img
                src={poster ? API_IMG + poster : unavailable}
                alt={title}
                className="rounded-full hover:opacity-60 "
              />
              <h1 className="text-xl font-oswald text-center truncate">
                {title}
              </h1>
              <div className="flex justify-between">
                <span className="text-xs font-oswald">
                  {gender === 1 ? "Mujer" : "Hombre"}
                </span>
                <span className="text-xs font-oswald">
                  {known === "Acting" ? "Actor/Actriz" : "Director/a"}
                </span>
              </div>
            </motion.div>
          </NavLink>
        </ContentModal>
      )}
    </div>
  );
};

export default SingleContent;
