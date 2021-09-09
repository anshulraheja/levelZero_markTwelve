import React from "react";
import { useState } from "react";

const Hypotenuse = (props) => {
  const [result, setResult] = useState("C=√(a2+b2)");
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

  return (
    <div className="box">
      <span onClick={props.back} className="backButton">
        ᐊ BACK
      </span>
      <h2>Enter the lengths of sides of right angle triangle</h2>
      <form className="form" id="formTriangle" onSubmit={props.submit}>
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
        <h2>Hypotenuse will be calculated here-</h2>
        <div className="output">{result}</div>
      </form>
    </div>
  );
};

export default Hypotenuse;
