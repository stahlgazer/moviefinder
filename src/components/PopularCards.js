import React from "react";
import Details from './Details';

export default function PopularCards({ movie }) {
  console.log(movie);
  return (
    <div className="card">
      <img
        className="card--image"
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
        alt={movie.title + " poster"}
      />
      <div className="card--content">
        <h3 className="card--title">{movie.title}</h3>
        <p>
          <small><b>RELEASE DATE</b>: {movie.release_date}</small>
        </p>
        <p>
          <small><b>RATING</b>: {movie.vote_average}/10</small>
        </p>
        <p>
          <small><b>VOTES</b>: {movie.vote_count}</small>
        </p>
        <p className="card--desc">{movie.overview}</p>
      </div>
      <Details movie={movie}/>
    </div>
  );
}
