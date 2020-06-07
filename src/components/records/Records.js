import React from "react";
import "./records.scss";

const Records = () => (
  <div>
    <div className="records">
      <div className="display">
        <p>Speed</p>
        <span className="data">24</span>
        <span className="unit"> kn</span>
      </div>
      <div className="display">
        <p>Height</p> <span className="data">1.32</span>
        <span className="unit"> m</span>
      </div>
      <div className="display">
        <p>Distance</p> <span className="data">4.7</span>
        <span className="unit"> km</span>
      </div>
      <div className="display">
        <p>Duration</p> <span className="data">310</span>
        <span className="unit"> min</span>
      </div>
    </div>
    <p className="date">at 16:32, March 5th, 2018</p>
  </div>
);

export default Records;
