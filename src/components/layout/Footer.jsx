import React from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="sticky bottom-5 w-full cursor-pointer">
      <div className="flex items-center justify-center">
        <BsFillArrowUpCircleFill
          onClick={() => window.scrollTo(0, 0)}
          className="text-3xl text-orange-400 dark:text-pink-400"
        />
      </div>
    </footer>
  );
};

export default Footer;
