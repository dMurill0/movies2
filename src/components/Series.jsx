import axios from "axios";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Badge, Button } from "@mui/material";
import Title from "./layout/Title";
const API_URL_TV =
  "https://api.themoviedb.org/3/tv/popular?api_key=1976c380dd1c386feb7c2778eef34284&language=es-ES";
const API_IMG = "https://image.tmdb.org/t/p/w300/";
const Series = () => {
  const [content, setContent] = useState([]);

  const fetchSeries = async () => {
    const { data } = await axios.get(API_URL_TV);
    setContent(data.results);
    console.log(data.results);
  };

  useEffect(() => {
    fetchSeries();
  }, []);

  // NEW API
  // const options = {
  //   method: 'POST',
  //   headers: {
  //     'content-type': 'application/json',
  //     'X-RapidAPI-Key': '23a0f569fbmsh03f56c82550e9e4p1be1a7jsn7dc836d59ba8',
  //     'X-RapidAPI-Host': 'watch-here.p.rapidapi.com'
  //   },
  //   body: '{"mediaType":"movie","platform":true,"title":"rings of power"}'
  // };

  // fetch('https://watch-here.p.rapidapi.com/wheretowatch', options)
  //   .then(response => response.json())
  //   .then(response => console.log(response))
  //   .catch(err => console.error(err));
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  return (
    <div className=" max-w-[1920px] w-screen h-fit max-w-2/3  p-5 flex flex-col flex-wrap bg-slate-500">
      <Title titulo="Series" />
      {content.length > 0 ? (
        <div className="flex flex-wrap justify-around mt-12 ">
          {content.map((popular, indi) => (
            // CAJA
            <Button open={open} onClick={handleOpen}>
              <motion.div
                initial={{
                  z: -500,
                  opacity: 0,
                  scale: 0.5,
                }}
                animate={{
                  z: 0,
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 1.5,
                }}
                key={indi}
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
                  alt={popular.name}
                  className="rounded-t-lg hover:scale-105 h-60"
                />
                <div className="flex-col space-y-4">
                  <h1 className="text-md font-oswald text-center truncate">
                    {popular.name}
                  </h1>
                  <div className="flex justify-between items-end">
                    <span className="text-xs w-6 h-5 ">
                      {popular.original_language === "en" ? (
                        <img src="images/eng_us.png" />
                      ) : popular.original_language === "es" ? (
                        <img src="images/spa.webp" />
                      ) : popular.original_language === "zh" ? (
                        <img src="images/zh.webp" />
                      ) : popular.original_language === "pt" ? (
                        <img src="images/pt.png" />
                      ) : popular.original_language === "el" ? (
                        <img src="images/gr.png" />
                      ) : (
                        <img src="images/eng_us.png" />
                      )}
                    </span>
                    <p className="text-xs font-oswald">
                      {popular.first_air_date.substr(0, 4)}
                    </p>
                  </div>
                </div>
              </motion.div>
            </Button>
          ))}
        </div>
      ) : (
        <h2>Sorry !! No Movies Found</h2>
      )}
    </div>
  );
};

export default Series;
