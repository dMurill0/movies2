import React, { useEffect, useState } from "react";
import { FaMoon, FaHome, FaTv } from "react-icons/fa";
import { HiFilm } from "react-icons/hi";
import { SiHbo } from "react-icons/si";
import { BsFillSunFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [theme, setTheme] = useState("light");
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
    <div className="flex flex-col justify-between items-center w-1/6 h-screen bg-gradient-to-b from-slate-800 to-slate-500 dark:bg-gradient-to-b dark:from-purple-500 dark:to-pink-500">
      <img className="h-1/6 bg-red rounded-2xl mt-6" src="/images/logo.png" />
      <div className="flex flex-col space-y-5 text-white dark:text-black">
        <Link
          to="/"
          className="flex items-center space-x-4 font-poppins font-semibold text-sm md:text-lg lg:text-xl dark:hover:text-white hover:text-orange-500"
        >
          <FaHome className="text-2xl text-white dark:text-black" />
          Inicio
        </Link>
        <Link
          to="/pelis"
          className="flex items-center space-x-4 font-poppins font-semibold text-sm md:text-lg lg:text-xl dark:hover:text-white hover:text-orange-500"
        >
          <HiFilm className="text-2xl text-white dark:text-black" />
          Pelis
        </Link>
        <Link
          to="/series"
          className="flex items-center space-x-4 font-poppins font-semibold text-sm md:text-lg lg:text-xl dark:hover:text-white hover:text-orange-500"
        >
          <SiHbo className="text-2xl text-white dark:text-black" />
          Series
        </Link>
        {/* <a
            href=""
            className="font-poppins font-semibold text-sm md:text-lg lg:text-xl dark:hover:text-white hover:text-orange-500"
          >
            About
          </a> */}
      </div>
      <button
        onClick={handleSwitch}
        className="text-black bg-yellow-100 dark:bg-slate-700 dark:text-white border border-red-500 py-2 px-4 rounded-full m-4 w-12"
      >
        {theme === "dark" ? cursorDark : cursorLight}
      </button>
    </div>
  );
};

export default NavBar;
