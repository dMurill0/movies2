import axios from "axios";
import React, { useEffect, useState } from "react";

const Populares = () => {
  const API =
    "https://api.themoviedb.org/3/trending/all/day?api_key=1976c380dd1c386feb7c2778eef34284&page=1";

  const [content, setContent] = useState([]);

  const fetchPopular = async () => {
    const { data } = await axios.get(API);
    setContent(data.results);
    console.log(data.results);
  };

  useEffect(() => {
    fetchPopular();
  }, []);

  return (
    <div className="container-fluid mt-5 pt-5 flex-column ">
      <h1 className="title">Popular</h1>
      {content.length > 0 ? (
        <div>
          {content.map((popular) => (
            <div key={popular.id}>
              <h1>{popular.title}</h1>
            </div>
          ))}
        </div>
      ) : (
        <h2>Sorry !! No Movies Found</h2>
      )}
    </div>
  );
};

export default Populares;
