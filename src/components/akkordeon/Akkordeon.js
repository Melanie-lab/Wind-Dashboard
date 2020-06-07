import React, { useState } from "react";
import "./akkordeon.scss";
import { useSpring, animated } from "react-spring";

const Akkordeon = ({ children, headline }) => {
  const [visible, setVisible] = useState(false);

  const fadeIn = useSpring({
    opacity: visible ? "1" : "0",
    display: visible ? "block" : "none",
  });

  return (
    <div className="akkord">
      <div className="akkord_active">
        <h3>
          {headline}
          <span>{/* {active} */}</span>
        </h3>

        <button
          className="expand"
          onClick={() => setVisible(!visible)}
        ></button>
      </div>
      <animated.div className="btngroup" style={fadeIn}>
        {children}
      </animated.div>
    </div>
  );
};

export default Akkordeon;
