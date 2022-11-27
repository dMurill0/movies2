import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { BsFillSunFill, BsSearch } from "react-icons/bs";
import { Badge } from "@mui/material";
import Title from "./layout/Title";
const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=1976c380dd1c386feb7c2778eef34284&language=es&ES";
const API_IMG = "https://image.tmdb.org/t/p/w300/";
const Pelis = () => {
  const [content, setContent] = useState([]);

  const fetchPelis = async () => {
    const { data } = await axios.get(API_URL);
    setContent(data.results);
    console.log(data.results);
  };

  useEffect(() => {
    fetchPelis();
  }, []);

  return (
    <div className="w-screen h-fit  p-5 flex-col flex-wrap justify-center bg-slate-500 ">
      <Title titulo="Películas" />
      {content.length > 0 ? (
        <div className="flex flex-wrap mt-10 ml-6 justify-around  ">
          {content.map((popular) => (
            // CAJA
            <a href="">
              <div
                key={popular.id}
                className="flex flex-col w-[200px] bg-slate-800 text-white dark:bg-slate-300 p-4 mx-2 mt-4 rounded-lg relative hover:bg-slate-400 dark:hover:bg-slate-800 dark:hover:text-white dark:text-black"
              >
                <Badge
                  color={
                    popular.vote_average > 7
                      ? "success"
                      : popular.vote_average >= 5
                      ? "primary"
                      : "error"
                  }
                  className="flex justify-end"
                  badgeContent={popular.vote_average.toFixed(1)}
                />

                <img
                  src={
                    popular.poster_path !== null
                      ? API_IMG + popular.poster_path
                      : noImage
                  }
                  alt={popular.title}
                  className="rounded-t-lg hover:scale-105"
                />
                <div className="flex-col space-y-4">
                  <h1 className="text-md font-oswald text-center truncate">
                    {popular.title}
                  </h1>
                  <div className="flex justify-between items-end">
                    <span className="text-xs w-6 h-5">
                      {popular.original_language === "en" ? (
                        <img src="images/eng_us.png" alt="" />
                      ) : popular.original_language === "es" ? (
                        <img src="src/images/spa.webp" alt="" />
                      ) : popular.original_language === "zh" ? (
                        <img src="src/images/zh.webp" alt="" />
                      ) : popular.original_language === "pt" ? (
                        <img src="src/images/pt.png" alt="" />
                      ) : popular.original_language === "el" ? (
                        <img src="src/images/gr.jpg" alt="" />
                      ) : (
                        <img src="/src/images/eng_us.png" alt="" />
                      )}
                    </span>
                    <p className="text-xs">{popular.release_date}</p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <h2>Sorry !! No Movies Found</h2>
      )}
    </div>
  );
};

export default Pelis;
