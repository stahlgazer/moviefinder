import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Favorite from "./Favorite";
import CloseIcon from "@material-ui/icons/Close";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import InfoIcon from "@material-ui/icons/Info";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  info: {
    color: "rgb(0, 195, 230)",
  },
});

export default function AlertDialog({ movie }) {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        className={classes.info}
        size="small"
        onClick={handleClickOpen}
      >
        <InfoIcon />
        Details
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div
          style={{
            display: "flex",
          }}
        >
          <DialogContent
            style={{
              minWidth: "200px",
            }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
              alt={movie.title + " poster"}
            />
          </DialogContent>
          <DialogContent>
            <h3>{movie.title}</h3>
            <p>
              <small>
                <b>RATING</b>: {movie.vote_average}/10
              </small>
            </p>
            <p>
              <small>
                <b>RELEASE DATE</b>: {movie.release_date}
              </small>
            </p>
            <p>
              <small>
                <b>VOTES</b>: {movie.vote_count}
              </small>
            </p>
            <p>
              <small>
                <b>OVERVIEW</b>:{movie.overview}
              </small>
            </p>
            <Button
              startIcon={<PlayCircleOutlineIcon />}
              size="small"
              color="primary"
              variant="outlined"
              target="_blank"
              href={`https://www.youtube.com/results?search_query=${movie.title}+trailer`}
            >
              Trailers
            </Button>
          </DialogContent>
        </div>
        <DialogActions>
          <Favorite handleClose={handleClose} movie={movie} />
          <Button onClick={handleClose} color="primary" autoFocus>
            <CloseIcon />
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
