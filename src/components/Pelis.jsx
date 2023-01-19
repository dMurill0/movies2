import axios from "axios";
import React, { useEffect, useState } from "react";
import Title from "./layout/Title";
import Footer from "./layout/Footer";
import SingleContent from "./SingleContent";
import { NavLink } from "react-router-dom";
import CustomPagination from "./layout/CustomPagination";
import Categorias from "./Categorias";
import useGenre from "../hooks/useGenre";

const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=1976c380dd1c386feb7c2778eef34284&language=es&ES";
const API_IMG = "https://image.tmdb.org/t/p/w300/";

const Pelis = ({ theme, cursorDark, cursorLight, handleSwitch }) => {
  const [content, setContent] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState();
  const [open, setOpen] = useState(false);
  const genreforURL = useGenre(selectedGenres);
  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
    );
    setContent(data.results);
    setNumOfPages(data.total_pages);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchMovies();
    // eslint-disable-next-line
  }, [genreforURL, page]);

  const handleOpen = () => setOpen(true);

  return (
    <div className="max-w-[1490px] w-fit h-fit p-5 flex-col flex-wrap justify-center bg-slate-500 mx-auto">
      <Title
        titulo="Películas"
        theme={theme}
        cursorDark={cursorDark}
        cursorLight={cursorLight}
        handleSwitch={handleSwitch}
      />
      <Categorias
        type="movie"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
      />
      {content.length > 0 ? (
        <div className="flex flex-wrap mt-10 justify-around ">
          {content.map((c) => (
            // CAJA
            <NavLink to="/:media_type/:id" key={c.id}>
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

export default Pelis;
