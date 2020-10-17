import React, { useState, useEffect } from "react";
import PopularCard from "./PopularCards";

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
    <div>
      <h2>Popular New Movies</h2>
      {popular
        .filter((movie) => movie.vote_average >= 7)
        .map((movie) => {
          return <PopularCard movie={movie} key={movie.id} />;
        })}
    </div>
  );
}
