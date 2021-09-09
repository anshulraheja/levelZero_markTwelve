import React from "react";
import { useState } from "react";
import AreaBH from "./subComponents/AreaBH";
import Area3S from "./subComponents/Area3S";
import Area2SA from "./subComponents/Area2SA";

const Triangle = (props) => {
  const [areaOutput, setAreaOutput] = useState("");

  const areaTypes = {
    "base and height length": <AreaBH submit={props.submit} />,
    "length of 3 sides": <Area3S submit={props.submit} />,
    "length of 2 sides and included angle": <Area2SA submit={props.submit} />
  };

  const typrClick = (e) => {
    setAreaOutput(areaTypes[e.target.innerText]);
  };

  return (
    <div className="box">
      <span onClick={props.back} className="backButton">
        ᐊ BACK
      </span>
      <h2>Calculate Area</h2>
      <p>Select an option below as per the data you have for a triangle</p>
      <div className="areaBox">
        {Object.keys(areaTypes).map((areaType) => {
          return (
            <span key={areaType} onClick={typrClick} className="areaType">
              {areaType}
            </span>
          );
        })}
      </div>
      <div className="areaOutput">{areaOutput}</div>
    </div>
  );
};

export default Triangle;
