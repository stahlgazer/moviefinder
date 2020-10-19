import React from "react";
import Details from "./Details";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
  root: {
    borderRadius: 10,
    width: "200px",
    margin: "10px auto",
    backgroundColor: "black",
    color: "white",
  },
  media: {
    minHeight: 300,
  },
});

export default function SearchCards({ movie }) {
  // console.log(movie);
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
        title={movie.title + " poster"}
      />
      <CardContent className={classes.content}>
        <p>
          <small>
            <b>RATING</b>: {movie.vote_average}
          </small>
        </p>
        <Details movie={movie} />
        <p>{movie.title}</p>
      </CardContent>
    </Card>
  );
}
