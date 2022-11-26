import axios from "axios";
import React, { useEffect, useState } from "react";

const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=1976c380dd1c386feb7c2778eef34284&language=es&ES";

const Pelis = () => {
  const [content, setContent] = useState([]);

  const fetchPelis = async () => {
    const { data } = await axios.get(API_URL);
    setContent(data.results);
    console.log(data.results);
  };

  useEffect(() => {
    fetchPelis();
  }, []);
  return (
    <div className="container bg-slate-500 text-black">
      <div className="container-fluid mt-5 pt-5 flex-column ">
        <h1 className="title">Peliculas</h1>
        {content.length > 0 ? (
          <div className="container p-lg-2">
            <div className="grid">
              {content.map((movieReq) => (
                <h1>{movieReq.title}</h1>
              ))}
            </div>
          </div>
        ) : (
          <h2>Sorry !! No Movies Found</h2>
        )}
      </div>
    </div>
  );
};

export default Pelis;
