import React from "react";
import { useState } from "react";

const Triangle = (props) => {
  const [firstAngle, setFirstAngle] = useState("");
  const [secondAngle, setSecondAngle] = useState("");
  const [thirdAngle, setThirdAngle] = useState("");
  const [result, setResult] = useState("Output will be shown here");

  const showResult = () => {
    if (firstAngle !== "" || secondAngle !== "" || thirdAngle !== "") {
      if (
        parseInt(firstAngle) + parseInt(secondAngle) + parseInt(thirdAngle) ===
        180
      ) {
        setResult("Yuhu! these angles can make a triangle");
      } else {
        setResult("Oops! these angles cannot make a triangle");
      }
    }
  };

  return (
    <div className="box">
      <span onClick={props.back} className="backButton">
        ᐊ BACK
      </span>
      <h2>
        Enter the angles in below input boxes and we will tell you if those
        angles make a Triangle
      </h2>
      <form className="form" id="formTriangle" onSubmit={props.submit}>
        <input
          className="inputBox"
          value={firstAngle}
          onChange={(e) => setFirstAngle(e.target.value)}
          type="number"
          min="1"
          max="180"
          required
        />
        <input
          className="inputBox"
          value={secondAngle}
          onChange={(e) => setSecondAngle(e.target.value)}
          type="number"
          min="1"
          max="180"
          required
        />
        <input
          className="inputBox"
          value={thirdAngle}
          onChange={(e) => setThirdAngle(e.target.value)}
          type="number"
          min="1"
          max="180"
          required
        />
        <button className="button" onClick={showResult}>
          submit
        </button>
        <div className="output">{result}</div>
      </form>
    </div>
  );
};

export default Triangle;
