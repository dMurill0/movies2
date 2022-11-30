import { Fade, Modal } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Populares from "./Populares";
import { Backdrop } from "@mui/material";

const ContentModal = ({ children, id, media_type }) => {
  const API_IMG = "https://image.tmdb.org/t/p/w300/";
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState();
  const [video, setVideo] = useState();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=1976c380dd1c386feb7c2778eef34284&language=es-ES`
    );

    setContent(data);
    // console.log(data);
  };

  const fetchVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=1976c380dd1c386feb7c2778eef34284&language=es-ES`
    );

    setVideo(data.results[0]?.key);
  };

  useEffect(() => {
    fetchData();
    fetchVideo();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className="pointer">{children}</div>
      {/* <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        className="fixed inset-0 bg-black bg-opacity-90 backdrop-blur-sm flex justify-center items-center"
      >
        <Fade in={open}>
          {content && (
            <div className="h-fit w-1/2 inset-1 bg-slate-500 flex flex-col justify-center items-center p-6 m-6 space-y-2">
              <h1 className="text-lg font-oswald font-semibold text-center">
                {content.title || content.name}
              </h1>
              <img
                src={API_IMG + content.poster_path}
                className="rounded-t-lg h-[220px]"
              />
              <p className="text-sm w-2/3 font-oswald font-light text-center">
                {content.overview}
              </p>
              <a onClick={handleClose}>Cerrar</a>
            </div>
          )}
        </Fade>
      </Modal> */}
    </div>
  );
};

export default ContentModal;
