import React from "react";
import { Chip } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";

function Categorias({
  selectedGenres,
  setSelectedGenres,
  genres,
  type,
  setGenres,
  setPage,
}) {
  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };

  const handleRemove = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
    setPage(1);
  };

  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=1976c380dd1c386feb7c2778eef34284&language=es-ES`
    );
    setGenres(data.genres);
    console.log(data.genres);
  };

  useEffect(() => {
    fetchGenres();
    return () => {
      setGenres({}); // unmounting
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div style={{ padding: "6px 0" }} >
      {selectedGenres.map((genre) => (
        <Chip 
          style={{ margin: 2 }}
          label={genre.name}
          key={genre.id}
          color="secondary"
          clickable
          size="medium"
          onDelete={() => handleRemove(genre)}
        />
      ))}
      { genres.length > 0 && genres.map((genre) => (
        <Chip
          style={{ margin: 2 }}
          label={genre.name}
          key={genre.id}
          clickable
          size="small"
          onClick={() => handleAdd(genre)}
        />
      ))}
    </div>
  );
}

export default Categorias;
