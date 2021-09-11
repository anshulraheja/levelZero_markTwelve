import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';

const Hypotenuse = (props) => {
  const [result, setResult] = useState();
  const [valueOfA, setValueOfA] = useState("");
  const [valueOfB, setValueOfB] = useState("");

  const showResult = () => {
    if (valueOfA !== "" || valueOfB !== "") {
      setResult(
        Math.sqrt(
          parseInt(valueOfA) * parseInt(valueOfA) +
            parseInt(valueOfB) * parseInt(valueOfB)
        )
      );
    }
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
  }
  
  return (
    <div className="box">
    <Link to="/" className="backButton">ᐊ BACK</Link>
      <h2>Enter the lengths of sides of right angle triangle</h2>
      <form className="form" id="formTriangle" onSubmit={handleSubmit}>
        <label>
          a =
          <input
            className="inputBox"
            value={valueOfA}
            onChange={(e) => setValueOfA(e.target.value)}
            type="number"
            min="0.0001"
            step="0.00001"
            required
          />
        </label>

        <label>
          b =
          <input
            className="inputBox"
            value={valueOfB}
            onChange={(e) => setValueOfB(e.target.value)}
            type="number"
            min="0.0001"
            step="0.00001"
            required
          />
        </label>

        <button className="button" onClick={showResult}>
          submit
        </button>
        <h2>Hypotenuse Length (C=√(a2+b2)):</h2>
        <div className="output">{result}</div>
      </form>
    </div>
  );
};

export default Hypotenuse;
