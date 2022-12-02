import { Badge, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Error404 from "./Error404";
import Title from "./layout/Title";
import SingleContent from "./SingleContent";

const Busqueda = ({ theme, cursorDark, cursorLight, handleSwitch }) => {
  const API_SRCH =
    "https://api.themoviedb.org/3/search/multi?api_key=1976c380dd1c386feb7c2778eef34284&language=es-ES&query=";
  const API_IMG = "https://image.tmdb.org/t/p/w300/";
  const { query } = useParams();
  const [content, setContent] = useState([]);

  useEffect(() => {
    fetch(API_SRCH + query).then((res) =>
      res.json().then((data) => {
        setContent(data.results);
      })
    );
  }, [content]);

  return (
    <div className="w-fit h-fit min-h-screen  p-5 flex-col flex-wrap justify-center bg-slate-500 ">
      <Title
        titulo="Búsqueda"
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
              media_type={c.media_type}
              vote_average={c.vote_average}
            />
          ))}
          {/* <CustomPagination /> */}
        </div>
      ) : (
        <Error404 />
      )}
    </div>
  );
};

export default Busqueda;
