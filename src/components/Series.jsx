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
import useGenre from "../hooks/useGenre";
import Categorias from "./Categorias";
const API_URL_TV =
  "https://api.themoviedb.org/3/tv/popular?api_key=1976c380dd1c386feb7c2778eef34284&language=es-ES";
const API_PAGINATION = `https://api.themoviedb.org/3/discover/tv?api_key=1976c380dd1c386feb7c2778eef34284&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=2`;
const API_IMG = "https://image.tmdb.org/t/p/w300/";

const Series = ({ theme, cursorDark, cursorLight, handleSwitch }) => {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const [open, setOpen] = useState(false);
  const genreforURL = useGenre(selectedGenres);
  const fetchSeries = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=1976c380dd1c386feb7c2778eef34284&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
    );
    setContent(data.results);
    setNumOfPages(data.total_pages);
    console.log(data.results);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchSeries();
  }, [genreforURL, page]);

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
      <Categorias
        type="tv"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
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
      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
      <Footer />
    </div>
  );
};

export default Series;
