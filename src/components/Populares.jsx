import React, { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { BsFillSunFill, BsSearch } from "react-icons/bs";
import { Badge, Button } from "@mui/material";
import CustomPagination from "./layout/CustomPagination";
import Title from "./layout/Title";
import ContentModal from "./ContentModal";
const Populares = () => {
  const API =
    "https://api.themoviedb.org/3/trending/all/day?api_key=1976c380dd1c386feb7c2778eef34284&language=es-ES";
  const API_IMG = "https://image.tmdb.org/t/p/w300/";
  const [content, setContent] = useState([]);
  const noImage = "/public/images/noImagen.jpg";
  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setContent(data.results))
      .catch((error) => console.log(error));
  }, []);

  const [page, setPage] = useState();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  return (
    <div className="max-w-2/3 w-screen h-fit  p-5 flex-col flex-wrap justify-center bg-slate-500 ">
      <Title titulo="Populares" />
      {content.length > 0 ? (
        <div className="flex flex-wrap mt-10 ml-6 justify-around  ">
          {content.map((popular) => (
            // CAJA

            <Button open={open} onClick={handleOpen}>
              <div
                key={popular.id}
                className="flex flex-col w-[200px] bg-slate-800 text-white dark:bg-slate-300 p-4 mx-2 mt-4 rounded-lg relative hover:bg-slate-400 dark:hover:bg-slate-800 dark:hover:text-white dark:text-black"
              >
                {/* <ContentModal children
                  id={popular.id}
                  title={popular.title || popular.name}
                  overview={popular.overview}
                  vote={popular.vote_average}
                  language={popular.original_language}
                /> */}
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
                  alt={popular.title || popular.name}
                  className="rounded-t-lg hover:scale-105 "
                />
                <div className="flex-col space-y-4">
                  {popular.title != null ? (
                    <div className="truncate">
                      <h1 className="text-md font-oswald text-center">
                        {popular.title}
                      </h1>
                      <h1 className="hidden">{popular.name}</h1>
                    </div>
                  ) : (
                    <div className="w-lg overflow-x-hidden">
                      <h1 className="hidden">{popular.title}</h1>
                      <h1 className="text-md font-oswald text-center">
                        {popular.name}
                      </h1>
                    </div>
                  )}
                  <div className="flex justify-between items-end">
                    <span className="text-xs">
                      {popular.media_type === "tv" ? "Serie" : "Película"}
                    </span>
                    <p className="text-xs">
                      {popular.first_air_date || popular.release_date}
                    </p>
                  </div>
                </div>
              </div>
            </Button>
          ))}
          <CustomPagination />
        </div>
      ) : (
        <h2>Sorry !! No Movies Found</h2>
      )}
    </div>
  );
};

export default Populares;
