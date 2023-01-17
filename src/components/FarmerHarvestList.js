import React, { useContext, useEffect, useState, useRef } from "react";
import Harvest from "./Harvest";
import { HarvestContext } from "../context/HarvestProvider";
import { v4 } from "uuid";
import Panel from "./Panel";
import Grid from "@material-ui/core/Grid";

function FarmerHarvestList(props) {
  const { harvests, getAllHarvests, myHarvestIsClicked } = useContext(
    HarvestContext
  );

  useEffect(() => {
    getAllHarvests();
  }, []);

  return (
    <div
      className="farmerHarvest-App"
      style={
        myHarvestIsClicked
          ? { visibility: "visible" }
          : { visibility: "hidden" }
      }
    >
      <Panel>
        <h1 className="myHarvestText">My Harvest</h1>
        <div item xs={12} className="myHarvestList">
          {harvests.map(harvest => (
            <Grid item xs={18} sm={3} c lassName="harvestDiv" key={v4()}>
              <img
                className="harvestImg"
                src={harvest.harvestImg}
                alt="harvest"
              />

              <p className="title">{harvest.title}</p>
            </Grid>
          ))}
        </div>
      </Panel>
    </div>
  );
}

export default FarmerHarvestList;
