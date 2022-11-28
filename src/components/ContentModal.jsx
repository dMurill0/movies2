import React, { useState } from "react";
import Populares from "./Populares";

const ContentModal = ({ visible, children, title, overview, poster }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const API_IMG = "https://image.tmdb.org/t/p/w300/";
  if ((open = false)) return null;
  return (
    <div
      onClick={handleOpen}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="h-fit w-1/2 inset-1 bg-slate-500 flex flex-col justify-center items-center p-6 m-6 space-y-2">
        {children}
        <h1 className="text-lg font-oswald font-semibold text-center">
          {title}
        </h1>
        <img src={API_IMG + poster} className="rounded-t-lg h-[220px]" />
        <p className="text-sm w-2/3 font-oswald font-light text-center">
          {overview}
        </p>
        <a onClick={handleClose}>Cerrar</a>
      </div>
    </div>
  );
};

export default ContentModal;
