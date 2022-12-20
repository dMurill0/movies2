import axios from "axios";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Badge, Button } from "@mui/material";
import Title from "./layout/Title";
import { FaMoon } from "react-icons/fa";
import { RiSunFill } from "react-icons/ri";
import Footer from "./layout/Footer";
import SingleContent from "./SingleContent";
import CustomPagination from "./layout/CustomPagination";
const API_URL_TV =
  "https://api.themoviedb.org/3/tv/popular?api_key=1976c380dd1c386feb7c2778eef34284&language=es-ES";
const API_IMG = "https://image.tmdb.org/t/p/w300/";

const Series = ({ theme, cursorDark, cursorLight, handleSwitch }) => {
  const [content, setContent] = useState([]);

  const fetchSeries = async () => {
    const { data } = await axios.get(API_URL_TV);
    setContent(data.results);
    console.log(data.results);
  };

  useEffect(() => {
    fetchSeries();
  }, []);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  return (
    <div className=" w-fit h-fit max-w-2/3  p-5 flex flex-col flex-wrap bg-slate-500">
      <Title
        titulo="Series"
        theme={theme}
        cursorDark={cursorDark}
        cursorLight={cursorLight}
        handleSwitch={handleSwitch}
      />
      {content.length > 0 ? (
        <div className="flex flex-wrap mt-10 justify-around w-screen ">
          {content.map((c) => (
            // CAJA
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type="tv"
              vote_average={c.vote_average}
              language={c.original_language}
            />
          ))}
        </div>
      ) : (
        <h2></h2>
      )}
      <CustomPagination />
      <Footer />
    </div>
  );
};

export default Series;
