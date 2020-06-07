import React, { useState } from "react";
import "./spot.scss";
import SelectSpot from "./select/Select";

const Spot = () => {
  return (
    <div className="profile">
      <div className="profile_active"></div>
      <SelectSpot />
    </div>
  );
};

export default Spot;
