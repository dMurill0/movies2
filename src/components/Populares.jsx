import React, { useEffect, useState } from "react";
import { Badge, Button } from "@mui/material";
import { motion } from "framer-motion";
import Title from "./layout/Title";
import { FaMoon } from "react-icons/fa";
import { RiSunFill } from "react-icons/ri";
import Footer from "./layout/Footer";
import ContentModal from "./ContentModal";
import SingleContent from "./SingleContent";
import { NavLink } from "react-router-dom";
const Populares = ({ theme, cursorDark, cursorLight, handleSwitch }) => {
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

 // const [page, setPage] = useState();

  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => {
    setOpenModal(true);
    console.log("abrite puto");
  };

  const handleClose = () => {
    setOpenModal(false);
  };
  

  return (
    <div className=" w-fit h-fit">
      <div className="p-5 flex-col flex-wrap justify-center bg-slate-500 ">
        <Title
          titulo="Populares"
          theme={theme}
          cursorDark={cursorDark}
          cursorLight={cursorLight}
          handleSwitch={handleSwitch}
        />
        {content.length > 0 ? (
          <div className="flex flex-wrap mt-10 justify-around w-screen  ">
            {content.map((c) => (
              // CAJA
              <NavLink to="/:media_type/:id" key={c.id}>
                <SingleContent
                  id={c.id}
                  poster={c.poster_path}
                  title={c.title || c.name}
                  date={c.first_air_date || c.release_date}
                  media_type={c.media_type}
                  vote_average={c.vote_average}
                />
              </NavLink>
            ))}
            {/* <CustomPagination /> */}
          </div>
        ) : (
          <h2></h2>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Populares;
