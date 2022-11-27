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
  return (
    <div className="h-full w-screen flex justify-between items-center  bg-gradient-to-b from-slate-800 to-slate-500 dark:bg-gradient-to-b dark:from-purple-500 dark:to-pink-500">
      <div className="flex  h-fit justify-start py-3 w-screen  space-x-5 text-white dark:text-black mt-8 ml-4">
        <Link
          to="/"
          className="font-poppins font-semibold text-sm md:text-lg lg:text-xl dark:hover:text-white hover:text-orange-500"
        >
          <FaHome className=" text-2xl text-white dark:text-black mr-4 items-center" />
        </Link>
        <Link
          to="/pelis"
          className="flex items-center space-x-4 font-poppins font-semibold text-sm md:text-lg lg:text-xl dark:hover:text-white hover:text-orange-500"
        >
          <HiFilm className="text-2xl text-white dark:text-black mr-4" />
        </Link>
        <Link
          to="/series"
          className="flex items-center space-x-4 font-poppins font-semibold text-sm md:text-lg lg:text-xl dark:hover:text-white hover:text-orange-500"
        >
          <SiHbo className="text-2xl text-white dark:text-black mr-4" />
        </Link>
      </div>
      <button className="dark:text-black mr-6 text-xl text-orange-500">
        <BsSearch />
      </button>
    </div>
  );
};

export default NavBar;
