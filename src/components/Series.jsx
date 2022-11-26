import axios from "axios";
import React, { useEffect, useState } from "react";

const API_URL_TV =
  "https://api.themoviedb.org/3/tv/popular?api_key=1976c380dd1c386feb7c2778eef34284&language=es-ES";

const Series = () => {
  const [content, setContent] = useState([]);

  const fetchSeries = async () => {
    const { data } = await axios.get(API_URL_TV);
    setContent(data.results);
    console.log(data.results);
  };

  useEffect(() => {
    fetchSeries();
  }, []);

  return (
    <div className="container-fluid mt-5 pt-5 flex-column ">
      <h1 className="title">Series</h1>
      {console.log(content.length)}
      {content.length > 0 ? (
        <div className="container p-lg-2">
          <div className="grid">
            {content.map((serieReq) => (
              <div key={serieReq.id}>
                <h1>{serieReq.name} </h1>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <h2>Sorry !! No Movies Found</h2>
      )}
    </div>
  );
};

export default Series;
