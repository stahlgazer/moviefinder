import React, { useState, useEffect } from "react";
import PopularCards from "./PopularCards";

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
  console.log(popular);

  return (
    <>
      <h2>Popular New Movies</h2>
      <div style={{
        display:'flex'
      }}>
        {popular
          .filter((movie) => movie.vote_average >= 6)
          .map((movie) => {
            return <PopularCards movie={movie} key={movie.id} />;
          })}
      </div>
    </>
  );
}
