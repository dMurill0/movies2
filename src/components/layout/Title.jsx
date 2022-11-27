import React, { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { BsFillSunFill, BsSearch } from "react-icons/bs";
const Title = ({titulo}) => {
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
      <button
        onClick={handleSwitch}
        className="text-black bg-yellow-100 dark:bg-slate-700 dark:text-white border border-red-500 py-2 px-4 rounded-full m-4 w-12"
      >
        {theme === "dark" ? cursorDark : cursorLight}
      </button>
      <h1 className="mx-auto text-6xl font-oswald font-extrabold text-center uppercase dark:text-pink-500 text-orange-500">
        {titulo}
      </h1>
    </div>
  );
};

export default Title;
