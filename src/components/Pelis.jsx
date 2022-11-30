import axios from "axios";
import React, { useEffect, useState } from "react";
import { Badge, Button } from "@mui/material";
import Title from "./layout/Title";
import { motion } from "framer-motion";
import Footer from "./layout/Footer";
import SingleContent from "./SingleContent";
import { NavLink } from "react-router-dom";

const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=1976c380dd1c386feb7c2778eef34284&language=es&ES";
const API_IMG = "https://image.tmdb.org/t/p/w300/";

const Pelis = ({ theme, cursorDark, cursorLight, handleSwitch }) => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setContent(data.results))
      .catch((error) => console.log(error));
  }, []);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  return (
    <div className="max-w-fit w-fit h-fit  p-5 flex-col flex-wrap justify-center bg-slate-500 ">
      <Title
        titulo="Películas"
        theme={theme}
        cursorDark={cursorDark}
        cursorLight={cursorLight}
        handleSwitch={handleSwitch}
      />
      {content.length > 0 ? (
        <div className="flex flex-wrap mt-10 justify-around w-screen ">
          {content.map((c) => (
            // CAJA
            <NavLink to="/:media_type/:id" key={c.id} >
              <SingleContent
                key={c.id}
                id={c.id}
                poster={c.poster_path}
                title={c.title || c.name}
                date={c.first_air_date || c.release_date}
                media_type="movie"
                vote_average={c.vote_average}
                language={c.original_language}
              />
            </NavLink>
            // <Button key={popular.id} open={open} onClick={handleOpen}>
            //   <motion.div
            //     initial={{
            //       z: -500,
            //       opacity: 0,
            //       scale: 0.5,
            //     }}
            //     animate={{
            //       z: 0,
            //       opacity: 1,
            //       scale: 1,
            //     }}
            //     transition={{
            //       duration: 1.5,
            //     }}
            //     className="flex flex-col w-[300px] bg-slate-800 text-white dark:bg-slate-300 p-2  mt-4 rounded-lg relative hover:bg-slate-400 dark:hover:bg-slate-800 dark:hover:text-white dark:text-black"
            //   >
            //     <Badge
            //       color={
            //         popular.vote_average > 7
            //           ? "success"
            //           : popular.vote_average >= 5
            //           ? "primary"
            //           : "error"
            //       }
            //       className="flex justify-end"
            //       badgeContent={popular.vote_average.toFixed(1)}
            //     />

            //     <img
            //       src={
            //         popular.poster_path !== null
            //           ? API_IMG + popular.poster_path
            //           : noImage
            //       }
            //       alt={popular.title}
            //       className="rounded-t-lg "
            //     />
            //     <div className="flex-col space-y-4">
            //       <h1 className="text-md font-oswald text-center truncate">
            //         {popular.title}
            //       </h1>
            //       <div className="flex justify-between items-end">
            //         <span className="text-xs w-6 h-5">
            //           {popular.original_language === "en" ? (
            //             <img src="images/eng_us.png" alt="" />
            //           ) : popular.original_language === "es" ? (
            //             <img src="images/spa.webp" alt="" />
            //           ) : popular.original_language === "zh" ? (
            //             <img src="images/zh.webp" alt="" />
            //           ) : popular.original_language === "pt" ? (
            //             <img src="images/pt.png" alt="" />
            //           ) : popular.original_language === "el" ? (
            //             <img src="images/gr.jpg" alt="" />
            //           ) : (
            //             <img src="images/eng_us.png" alt="" />
            //           )}
            //         </span>
            //         <p className="text-xs">
            //           {popular.release_date.substr(0, 4)}
            //         </p>
            //       </div>
            //     </div>
            //   </motion.div>
            // </Button>
          ))}
        </div>
      ) : (
        <h2></h2>
      )}
      <Footer />
    </div>
  );
};

export default Pelis;
