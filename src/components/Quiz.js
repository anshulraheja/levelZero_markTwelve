import React from "react";
import { useState } from "react";

const Quiz = (props) => {
  const [result, setResult] = useState(
    "Score: For each correct answer you will get 1 point"
  );

  const rightAns = ["yes", "no", "yes", "yes", "yes", "Isosceles", "Scalene"];

  const showResult = () => {
    const quizForm = document.querySelector("#formTriangle");

    const data = new FormData(quizForm);
    let index = 0,
      score = 0;
    for (let entry of data.values()) {
      if (entry === rightAns[index]) {
        score++;
      }
      index++;
    }
    setResult(`Your score is ${score}`);
  };

  return (
    <div className="box">
      <span onClick={props.back} className="backButton">
        ᐊ BACK
      </span>
      <form className="form" id="formTriangle" onSubmit={props.submit}>
        <div className="questions">
          <p>
            If a triangle has angles 135°, 15°, 30°. Is it an obtuse triangle?
          </p>
          <label>
            <input
              type="radio"
              required="required"
              value="yes"
              name="question1"
            />
            yes
          </label>
          <label>
            <input
              type="radio"
              required="required"
              value="no"
              name="question1"
            />
            no
          </label>
        </div>
        <div className="questions">
          <p>
            If a triangle has angles 115°, 25°, 40°. Is it an acute triangle?
          </p>
          <label>
            <input
              type="radio"
              required="required"
              value="yes"
              name="question2"
            />
            yes
          </label>
          <label>
            <input
              type="radio"
              required="required"
              value="no"
              name="question2"
            />
            no
          </label>
        </div>
        <div className="questions">
          <p>
            If a triangle has angles 90°, 60°, 30°. Is it a right angle
            triangle?
          </p>
          <label>
            <input
              type="radio"
              required="required"
              value="yes"
              name="question3"
            />
            yes
          </label>
          <label>
            <input
              type="radio"
              required="required"
              value="no"
              name="question3"
            />
            no
          </label>
        </div>
        <div className="questions">
          <p>
            A triangle has angles 60°, 60°, 60°. Is it an equilateral triangle?
          </p>
          <label>
            <input
              type="radio"
              required="required"
              value="yes"
              name="question4"
            />
            yes
          </label>
          <label>
            <input
              type="radio"
              required="required"
              value="no"
              name="question4"
            />
            no
          </label>
        </div>
        <div className="questions">
          <p>
            If a triangle has angles 25°, 75°, 80°. Is it an acute triangle?
          </p>
          <label>
            <input
              type="radio"
              required="required"
              value="yes"
              name="question5"
            />
            yes
          </label>
          <label>
            <input
              type="radio"
              required="required"
              value="no"
              name="question5"
            />
            no
          </label>
        </div>
        <div className="questions">
          <p>
            If a triangle has 2 sides with equal lengths and 750 angle between
            them. What is the type of triangle?
          </p>
          <label>
            <input
              type="radio"
              required="required"
              value="Equilateral"
              name="question6"
            />
            Equilateral
          </label>
          <label>
            <input
              type="radio"
              required="required"
              value="Isosceles"
              name="question6"
            />
            Isosceles
          </label>
          <label>
            <input
              type="radio"
              required="required"
              value="Right Angle traingle"
              name="question6"
            />
            Right Angle traingle
          </label>
        </div>
        <div className="questions">
          <p>
            If a triangle has sides of 2cm, 3cm, 4cm, what is the type of
            triangle?
          </p>
          <label>
            <input
              type="radio"
              required="required"
              value="Equilateral"
              name="question7"
            />
            Equilateral
          </label>
          <label>
            <input
              type="radio"
              required="required"
              value="Isosceles"
              name="question7"
            />
            Isosceles
          </label>
          <label>
            <input
              type="radio"
              required="required"
              value="Scalene"
              name="question7"
            />
            Scalene
          </label>
        </div>
        <button className="button" onClick={showResult}>
          submit
        </button>
        <div className="output">{result}</div>
      </form>
    </div>
  );
};

export default Quiz;
