import React, { useEffect, useState } from "react";
import { FaMoon, FaHome, FaTv } from "react-icons/fa";
import { HiFilm } from "react-icons/hi";
import { SiHbo } from "react-icons/si";
import { Link } from "react-router-dom";
import { BsFillSunFill, BsSearch } from "react-icons/bs";
const NavBar = () => {
  // const [theme, setTheme] = useState("light");
  // useEffect(() => {
  //   if (theme === "dark") {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, [theme]);

  // const handleSwitch = () => {
  //   setTheme(theme === "dark" ? "light" : "dark");
  // };

  // const cursorLight = (
  //   <div>
  //     <FaMoon className="text-white hidden" />
  //     <BsFillSunFill className="text-orange-400" />
  //   </div>
  // );
  // const cursorDark = (
  //   <div>
  //     <FaMoon className="text-white " />
  //     <BsFillSunFill className="text-black hidden" />
  //   </div>
  // );

const [type, setTypa] = useState(0);

  return (
    <div className="h-[100px] w-screen flex justify-between bg-gradient-to-b from-black to-slate-800 dark:bg-gradient-to-b dark:from-purple-500 dark:to-pink-500 border-2 border-b-slate-300 dark:border-b-slate-800">
      <div className="flex w-fit items-center h-fit justify-start p-3  md:space-x3 lg:space-x-5 text-white dark:text-black mt-8 ml-4">
        <Link
          to="/"
          className="font-oswald font-semibold text-sm md:text-lg lg:text-xl dark:hover:text-white hover:text-orange-500"
        >
          <FaHome className=" text-2xl text-white hover:text-orange-500 dark:hover:text-white dark:text-black mr-4 items-center" />
        </Link>
        <Link
          to="/pelis"
          className="flex items-center space-x-4 font-oswald font-semibold text-sm md:text-lg lg:text-xl dark:hover:text-white hover:text-orange-500"
        >
          <HiFilm className="text-2xl text-white hover:text-orange-500 dark:hover:text-white dark:text-black mr-4" />
        </Link>
        <Link
          to="/series"
          className="flex items-center space-x-4 font-oswald font-semibold text-sm md:text-lg lg:text-xl dark:hover:text-white hover:text-orange-500"
        >
          <SiHbo className="text-2xl text-white hover:text-orange-500 dark:hover:text-white dark:text-black mr-4" />
        </Link>
      </div>
      <div className="flex space-x-2 w-fit mr-8 h-1/3 items-center p-3 mt-8">
        <input className="rounded-lg p-1 font-oswald text-md mx-2 " type="text" onChange={(e) => setSearchText(e.target.value)} id="text-fetch" placeholder="Busca una peli o serie"/>
      <button className="dark:text-black mr-6 text-xl text-orange-500">
        <BsSearch />
      </button>
      </div>
    </div>
  );
};

export default NavBar;
