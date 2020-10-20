import React, { useState, useEffect } from "react";
import Cards from "./Cards";

export default function PopularMovies() {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    getPopularMovies();
  }, []);
  const getPopularMovies = async () => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=669c7025d14663e5ee3c8ac1e3e2945e&language=en-US`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setPopular(data.results);
    } catch (err) {
      console.error(err);
    }
  };
  // console.log(popular);

  return (
    <>
      <h3>Popular New Movies</h3>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {popular
          .filter((movie) => movie.vote_average >= 7)
          .map((movie) => {
            return <Cards movie={movie} key={movie.id} />;
          })}
      </div>
    </>
  );
}
