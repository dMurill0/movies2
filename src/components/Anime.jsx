import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Footer from "./layout/Footer";
import Title from "./layout/Title";
import SingleContent from "./SingleContent";

const Anime = ({ theme, cursorDark, cursorLight, handleSwitch }) => {
  const API_ANIME = `https://api.themoviedb.org/3/discover/tv?api_key=1976c380dd1c386feb7c2778eef34284&language=es-ES&sort_by=popularity.desc&page=1&with_keywords=210024`;
  const API_IMG = "https://image.tmdb.org/t/p/w300/";

  const [content, setContent] = useState([]);

  const fetchAnimes = async () => {
    const { data } = await axios.get(API_ANIME);
    setContent(data.results);
    console.log(data.results);
  };

  useEffect(() => {
    fetchAnimes();
  }, []);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  return (
    <div className=" w-fit h-fit max-w-2/3  p-5 flex flex-col flex-wrap bg-slate-500">
      <Title
        titulo="Animes"
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
      <Footer />
    </div>
  );
};

export default Anime;
