import React from "react";
import DirectionsBoatIcon from "@material-ui/icons/DirectionsBoat";

export default function Banner() {
  return (
    <div className="banner">
      <div className="banner-text">
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
          Check out the most popular new movies, or search the Ark for any movie!
        </h3>
      </div>
    </div>
  );
}
