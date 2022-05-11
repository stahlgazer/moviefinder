import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import FavoriteIcon from "@material-ui/icons/Favorite";

export default function Watchlist({ handleClose, movie }) {
  // const [favorites, setFavorites] = useState([]);
  // console.log("favorites: ", favorites);
  useEffect(() => {
    // pull in favorites from back-end and setState, update on state
  });

  const handleFavorite = () => {
    // add to favorites in state/back-end if not in state
    // remove from back-end/state if in state
  };

  return (
    <Button
      onClick={() => {
        handleFavorite();
        handleClose();
      }}
      startIcon={<FavoriteIcon />}
      color="secondary"
    >
      Coming Soon
    </Button>
  );
}
