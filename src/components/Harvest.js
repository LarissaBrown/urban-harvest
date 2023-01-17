import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Contact from "./Contact";

const Harvest = props => {
  const { image, label, farmer, title } = props;
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return clicked ? (
    <>
      <Grid item xs={12} sm={3} className="harvestDiv">
        <div className="infoDiv">
          <p>{label}</p>
          <Contact farmer={farmer} onClick={handleClick} />
        </div>
      </Grid>
    </>
  ) : (
    <Grid item xs={12} sm={3} onClick={handleClick} className="harvestDiv">
      <div className="hoverOverlay">
        <img className="harvestImg" src={image} alt="harvest" />
      </div>
      <p className="title">{title}</p>
    </Grid>
  );
};

export default Harvest;
