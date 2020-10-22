import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Cards from "./Cards.js";
import SearchIcon from "@material-ui/icons/Search";

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
      setSearch("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <h3>Search The Ark</h3>
      <form className="form" onSubmit={searchMovies} style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
        <label className="label" htmlFor="search">
          Movie Title:
        </label>
        <input
          className="input"
          type="text"
          name="search"
          placeholder=""
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="searchButton" type="submit" disabled={!search}>
          <SearchIcon/>
        </button>
      </form>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <Cards movie={movie} key={movie.id} />
          ))}
      </div>
    </>
  );
}
