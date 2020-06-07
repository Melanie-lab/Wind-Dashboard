import React, { useState } from "react";
import "./profile.scss";

const Profile = () => {
  const [active, setActive] = useState("Windsurfer");

  const handleClick = () => console.log("click");

  return (
    <div className="profile">
      <div className="profile_active"></div>
      <div className="btngroup">
        <button type="text" className="windsurfer" onClick={handleClick}>
          Windsurfer
        </button>
        <button className="kitesurfer" onClick={handleClick}>
          Kite Surfer
        </button>
        <button className="offshore" onClick={handleClick}>
          Offshore Worker
        </button>
        <button className="windsurfer" onClick={handleClick}>
          Sailor
        </button>
      </div>
    </div>
  );
};

export default Profile;
