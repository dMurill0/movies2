import React, { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { BsFillSunFill, BsSearch } from "react-icons/bs";
import { Badge } from "@mui/material";
import CustomPagination from "./layout/CustomPagination";
const Populares = () => {
  const API =
    "https://api.themoviedb.org/3/trending/all/day?api_key=1976c380dd1c386feb7c2778eef34284";
  const API_IMG = "https://image.tmdb.org/t/p/w300/";
  const [content, setContent] = useState([]);
  const noImage = "/public/images/noImagen.jpg";
  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setContent(data.results))
      .catch((error) => console.log(error));
  }, []);

  const [theme, setTheme] = useState("light");
  const [page, setPage] = useState();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const cursorLight = (
    <div>
      <FaMoon className="text-white hidden" />
      <BsFillSunFill className="text-orange-400" />
    </div>
  );
  const cursorDark = (
    <div>
      <FaMoon className="text-white " />
      <BsFillSunFill className="text-black hidden" />
    </div>
  );

  return (
    <div className="max-w-2/3 w-screen h-fit  p-5 flex-col flex-wrap justify-center bg-slate-500 ">
      <div className="flex w-full justify-between items-center">
        <button
          onClick={handleSwitch}
          className="text-black bg-yellow-100 dark:bg-slate-700 dark:text-white border border-red-500 py-2 px-4 rounded-full m-4 w-12"
        >
          {theme === "dark" ? cursorDark : cursorLight}
        </button>
        <h1 className="mx-auto text-4xl font-oswald font-bold text-center uppercase dark:text-pink-500 text-orange-500">
          Popular
        </h1>
      </div>
      {content.length > 0 ? (
        <div className="flex flex-wrap mt-10 ml-6 justify-around space-y-2  ">
          {content.map((popular) => (
            // CAJA
            <a href="">
              {" "}
              <div
                key={popular.id}
                className="flex flex-col w-[200px] bg-slate-800 text-white dark:bg-slate-300 p-4 mx-2 rounded-lg relative hover:bg-black dark:hover:text-white dark:text-black"
              >
                <Badge
                  color={popular.vote_average > 7 ? "success" : (popular.vote_average >= 5 ? "primary" : "error")}
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
                  className="rounded-t-lg hover:scale-105"
                />
                <div className="flex-col space-y-4">
                  {popular.title != null ? (
                    <div className="">
                      <h1 className="text-md font-oswald text-center">
                        {popular.title}
                      </h1>
                      <h1 className="hidden">{popular.name}</h1>
                    </div>
                  ) : (
                    <div>
                      <h1 className="hidden">{popular.title}</h1>
                      <h1 className="text-md font-oswald text-center">
                        {popular.name}
                      </h1>
                    </div>
                  )}
                  <div className="flex justify-between items-end">
                    <span className="text-xs">
                      {popular.media_type === "tv" ? "Serie" : "Peli"}
                    </span>
                    <p className="text-xs">
                      {popular.first_air_date || popular.release_date}
                    </p>
                  </div>
                </div>
              </div>
            </a>
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
