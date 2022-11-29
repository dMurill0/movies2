import React, { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { RiSunFill } from "react-icons/ri";
import { motion } from "framer-motion";

const Title = ({ titulo }) => {
  const handleSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const cursorLight = (
    <div>
      <FaMoon className="text-white hidden" />
      <RiSunFill className="text-orange-400 text-md" />
    </div>
  );
  const cursorDark = (
    <div>
      <FaMoon className="text-white " />
      <RiSunFill className="text-black hidden" />
    </div>
  );
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <div className="flex w-full justify-between ">
      <motion.button
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
          duration: 1.2,
        }}
        onClick={handleSwitch}
        className="text-black bg-slate-200 dark:bg-slate-700 dark:text-white border border-red-500 py-1 px-2 rounded-full m-5 pl-2 w-9"
      >
        {theme === "dark" ? cursorDark : cursorLight}
      </motion.button>
      <motion.h1
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
          duration: 1.2,
        }}
        className="mx-auto text-6xl font-oswald font-extrabold text-center uppercase dark:text-pink-500 text-orange-500"
      >
        {titulo}
      </motion.h1>
    </div>
  );
};

export default Title;
