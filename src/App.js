import React from "react";
import SearchMovies from "./components/SearchMovies";
import PopularMovies from "./components/PopularMovies";
import Banner from "./components/Banner";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Banner />
      <SearchMovies />
      <PopularMovies />
    </div>
  );
}

export default App;
