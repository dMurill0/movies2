import React, { useEffect, useState } from "react";
import Title from "./layout/Title";
import Footer from "./layout/Footer";
import SingleContent from "./SingleContent";
import { NavLink } from "react-router-dom";
const Populares = ({ theme, cursorDark, cursorLight, handleSwitch }) => {
  const API = `https://api.themoviedb.org/3/trending/all/day?api_key=${
    import.meta.env.VITE_API_KEY
  }&language=es-ES`;
  const API_IMG = "https://image.tmdb.org/t/p/w300/";
  const [content, setContent] = useState([]);
  const noImage = "/public/images/noImagen.jpg";
  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setContent(data.results))
      .catch((error) => console.log(error));
  }, []);

  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <div className="max-w-[1490px] w-fit h-fit max-w-2/3  p-5 flex flex-col flex-wrap bg-slate-500 mx-auto">
      <div className="p-5 flex-col flex-wrap justify-center  ">
        <Title
          titulo="Populares"
          theme={theme}
          cursorDark={cursorDark}
          cursorLight={cursorLight}
          handleSwitch={handleSwitch}
        />
        {content.length > 0 ? (
          <div className="flex flex-wrap mt-10 justify-around">
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
