import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';

const Triangle = (props) => {
  const [firstAngle, setFirstAngle] = useState("");
  const [secondAngle, setSecondAngle] = useState("");
  const [thirdAngle, setThirdAngle] = useState("");
  const [result, setResult] = useState();

  const showResult = () => {
    if (firstAngle !== "" || secondAngle !== "" || thirdAngle !== "") {
      if (
        parseInt(firstAngle) + parseInt(secondAngle) + parseInt(thirdAngle) ===
        180
      ) {
        setResult("These angles form a triangle");
      } else {
        setResult("These angles dont form a triangle. Try with different values!");
      }
    }
  };

  const handleSubmit = (e)=>{
    console.log('prevent')
    e.preventDefault();
  }

  return (
    <div className="box">
      <Link to="/" className="backButton">ᐊ BACK</Link>
      <h2>
        Enter the angles of triangle in below input boxes to check if it forms a triangle 
      </h2>
      <form className="form" id="formTriangle" onSubmit={handleSubmit}>
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
          Submit
        </button>
        <div className="output">{result}</div>
      </form>
    </div>
  );
};

export default Triangle;
