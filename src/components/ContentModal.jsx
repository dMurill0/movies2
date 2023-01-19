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
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=es-ES`
    );

    setContent(data);
    // console.log(data);
  };

  const fetchVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=es-ES`
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
    </div>
  );
};

export default ContentModal;
