import React from 'react';
import SearchMovies from './components/SearchMovies'
import PopularMovies from './components/PopularMovies'
import './App.css';

function App() {
  return (
    <div className="App">
      <PopularMovies />
      <SearchMovies />
    </div>
  );
}

export default App;
