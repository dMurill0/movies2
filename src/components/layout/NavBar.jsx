import React, { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { HiFilm } from "react-icons/hi";
import { SiHbo } from "react-icons/si";
import { Link, NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const NavBar = () => {
  // const API = `https://api.themoviedb.org/3/search/movie?api_key=1976c380dd1c386feb7c2778eef34284&query=`;
  // // const [theme, setTheme] = useState("light");
  // // useEffect(() => {
  // //   if (theme === "dark") {
  // //     document.documentElement.classList.add("dark");
  // //   } else {
  // //     document.documentElement.classList.remove("dark");
  // //   }
  // // }, [theme]);

  // // const handleSwitch = () => {
  // //   setTheme(theme === "dark" ? "light" : "dark");
  // // };

  // // const cursorLight = (
  // //   <div>
  // //     <FaMoon className="text-white hidden" />
  // //     <BsFillSunFill className="text-orange-400" />
  // //   </div>
  // // );
  // // const cursorDark = (
  // //   <div>
  // //     <FaMoon className="text-white " />
  // //     <BsFillSunFill className="text-black hidden" />
  // //   </div>
  // // );
  // const [content, setContent] = useState([]);
  const [searchText, setSearchText] = useState("");

  // const fetchSearch = async () => {
  //   const { data } = await axios.get(API + searchText);
  //   setContent(data.results);
  //   console.log(data.results);
  // };

  const navigate = useNavigate();
  const handleChange = (e, searchInput) => {
    // const query = document.getElementById("search").value;
    setSearchText(searchInput);

    // navigate("/search", { query: searchText }), [navigate];

    // console.log("You clicked submit. " + query);
  };
  return (
    <div className="h-[100px] max-w-[1920px] w-screen flex justify-between bg-gradient-to-b from-black to-slate-800 dark:bg-gradient-to-b dark:from-purple-500 dark:to-pink-500 border-2 border-b-slate-300 dark:border-b-slate-800">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex w-fit items-center h-fit justify-start p-3 sm:space-x-2 md:space-x-3 lg:space-x-5 text-white dark:text-black mt-8 ml-4"
      >
        <NavLink
          to="/"
          className="dark:[&.active]:text-black [&.active]:text-orange-400 text-white hidden sm:block font-oswald font-semibold text-sm md:text-lg lg:text-xl dark:hover:text-white hover:text-orange-500 active:text-orange-500 dark:active:text-slate-400'"
        >
          Inicio
        </NavLink>
        <NavLink to="/">
          <FaHome className="  sm:hidden text-2xl text-white hover:text-orange-500 dark:hover:text-white dark:text-black mr-4 items-center" />
        </NavLink>
        <NavLink
          to="/pelis"
          className="dark:[&.active]:text-black [&.active]:text-orange-400 text-white hidden sm:block font-oswald font-semibold text-sm md:text-lg lg:text-xl dark:hover:text-white hover:text-orange-500 "
        >
          Películas
        </NavLink>
        <NavLink to="/pelis">
          <HiFilm className=" sm:hidden text-2xl text-white hover:text-orange-500 dark:hover:text-white dark:text-black mr-4 items-center" />
        </NavLink>
        <NavLink
          to="/series"
          className="dark:[&.active]:text-black [&.active]:text-orange-400 text-white hidden sm:block font-oswald font-semibold text-sm md:text-lg lg:text-xl dark:hover:text-white hover:text-orange-500 "
        >
          Series
        </NavLink>
        <NavLink to="/series">
          <SiHbo className=" sm:hidden text-2xl text-white hover:text-orange-500 dark:hover:text-white dark:text-black mr-4 items-center" />
        </NavLink>
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex space-x-2  mr-8 h-1/3 items-center  mt-8"
      >
        <input
          className="rounded-lg p-1 font-oswald text-md mx-2"
          type="text"
          id="search"
          onKeyUp={(e) => handleChange(e, e.target.value)}
          placeholder="Busca una peli o serie"
        />

        <Link
          to={"/search/" + searchText}
          type="submit"
          className="dark:text-black mr-6 text-xl text-orange-500"
          // onClick={(e) => handleChange(e, searchInput)}
        >
          <BsSearch
          // onSubmit={
          //   <Busqueda
          //     id={content.id}
          //     title={content.title || content.name}
          //     vote={content.vote_average}
          //     poster={content.poster_path}
          //     language={content.original_language}
          //     release={content.release_date || content.first_air_date}
          //   />
          // }
          />
        </Link>
      </motion.div>
    </div>
  );
};

export default NavBar;
