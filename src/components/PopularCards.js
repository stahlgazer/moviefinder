import React from "react";
import Details from "./Details";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    width: "100%",
  },
  media: {
    height: 200,
  },
});

export default function PopularCards({ movie }) {
  console.log(movie);
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
          title={movie.title + " poster"}
        />
        <CardContent>
          <p>
            <b>RATING</b>: {movie.vote_average}
          </p>
        </CardContent>
        <Details movie={movie} />
      </CardActionArea>
    </Card>
  );
}
