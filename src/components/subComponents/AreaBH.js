import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';

const AreaBH = () => {
  const [result, setResult] = useState();
  const [valueOfA, setValueOfA] = useState("");
  const [valueOfB, setValueOfB] = useState("");
  const [valueOfC, setValueOfC] = useState("");

  const showResult = () => {
    if (valueOfA !== "" || valueOfB !== "" || valueOfC !== "") {
      const s =
        (parseInt(valueOfA) + parseInt(valueOfB) + parseInt(valueOfC)) / 2;
      setResult(
        Math.sqrt(s * (s - valueOfA) * (s - valueOfB) * (s - valueOfC))
      );
    }
  };
  const handleSubmit = (e)=>{
    e.preventDefault();
  }
  return (
    <div className="box">
      <Link to="/area" className="backButton">
        ᐊ BACK
      </Link>
      <form className="form" id="formTriangle" onSubmit={handleSubmit}>
        <label>
          a=
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
          b=
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
        <label>
          c=
          <input
            className="inputBox"
            value={valueOfC}
            onChange={(e) => setValueOfC(e.target.value)}
            type="number"
            min="0.0001"
            step="0.00001"
            required
          />
        </label>
        <button className="button" onClick={showResult}>
          calculate
        </button>
        <h2>Area= √s(s-a)(s-b)(s-c):</h2>
        <div className="output">{result}</div>
      </form>
    </div>
  );
};

export default AreaBH;
