import React from "react";
import DirectionsBoatIcon from "@material-ui/icons/DirectionsBoat";
import FavoriteIcon from "@material-ui/icons/Favorite";

export default function Banner() {
  return (
    <div className="banner">
      <div className="banner-text">
        <div className="favorites">
          Favorite's List
          <FavoriteIcon />
        </div>
        <h1>
          <DirectionsBoatIcon
            style={{
              margin: "-5 10",
              width: 40,
              height: 40,
            }}
          />
          The Movie Ark
        </h1>
        <h3>
          Find The Hottest Movies To Watch, Search The Ark, And Create Watch
          Lists!
        </h3>
      </div>
    </div>
  );
}
