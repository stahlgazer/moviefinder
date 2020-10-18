import React, { useState } from "react";
import SearchCards from "./SearchCards.js";

export default function SearchMovies() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();
    const url = `https://api.themoviedb.org/3/search/movie?api_key=669c7025d14663e5ee3c8ac1e3e2945e&language=en-US&query=${search}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
    <h2>Search The Ark</h2>
      <form className="form" onSubmit={searchMovies}>
        <label className="label" htmlFor="search">
          Movie Name
        </label>
        <input
          className="input"
          type="text"
          name="search"
          placeholder="Jumanji"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="button" type="submit" disabled={!search}>
          Search
        </button>
      </form>
      <div className="search-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <SearchCards movie={movie} key={movie.id} />
          ))}
      </div>
    </>
  );
}
