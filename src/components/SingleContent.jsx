import { Badge } from "@mui/material";
import ContentModal from "./ContentModal";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
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
}) => {
  const [media, setMedia] = useState(media_type);
  const [puntuacion, setPuntuacion] = useState(vote_average);

  useEffect(() => {
    setPuntuacion(vote_average - vote_average.toFixed(1));
    console.log(vote_average - vote_average.toFixed(1));
  }, [vote_average]);

  return (
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
          {!vote_average ? (
            ""
          ) : puntuacion === 0 ? (
            <Badge
              color={
                vote_average > 7
                  ? "success"
                  : vote_average >= 5
                  ? "primary"
                  : "error"
              }
              className="flex justify-end"
              badgeContent={vote_average}
            />
          ) : (
            <Badge
              color={
                vote_average > 7
                  ? "success"
                  : vote_average >= 5
                  ? "primary"
                  : "error"
              }
              className="flex justify-end"
              badgeContent={vote_average.toFixed(1)}
            />
          )}

          <img
            src={poster ? API_IMG + poster : noImage}
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

              <p className="text-xs">{date?.substr(0, 4)}</p>
            </div>
          </div>
        </motion.div>
      </NavLink>
    </ContentModal>
  );
};

export default SingleContent;
