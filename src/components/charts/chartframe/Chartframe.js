import React from "react";
import "./chartframe.scss";

const Chartframe = () => {
  return (
    <div className="chartframe">
      <h3>Forecasts</h3>
      <label htmlFor="date">How is the wind </label>
      <select name="date">
        <option value="today">today</option>
        <option value="tomorrow">tomorrow</option>
        <option value="in 2 days">in 2 days</option>
      </select>
      <span> in ...?</span>
    </div>
  );
};

export default Chartframe;
