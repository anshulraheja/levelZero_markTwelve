import React from "react";
import { useState } from "react";

const AreaBH = (props) => {
  const [result, setResult] = useState("Area= √s(s-a)(s-b)(s-c)");
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

  return (
    <form className="form" id="formTriangle" onSubmit={props.submit}>
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
      <h2>Area will be calculated here-</h2>
      <div className="output">{result}</div>
    </form>
  );
};

export default AreaBH;
