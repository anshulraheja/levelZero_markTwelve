  import React from "react";
  import { useState } from "react";
  import { Link } from 'react-router-dom';
  import QuestionBank from '../assets/QuestionBank'

  const Quiz = (props) => {
  const [result, setResult] = useState();
  const [score, setScore] = useState(0);
  const [response, setResponse] = useState(0);
  const length = QuestionBank.length

  function computeAnswer(answer, correctAnswer) {
    if (answer === correctAnswer) {
      const newScore = score + 1;
      setScore(newScore);
    }
    const newResponse = response < length ? response + 1 : length;
    setResponse(newResponse);
  }

  function showResult(){
    console.log(response);
    if(response==length)
    setResult(score);
    else
    setResult("Please mark answers for all questions")
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
  }

  return (
    <div className="box">
      <Link to="/" className="backButton">
        ᐊ BACK
      </Link>
      <form className="form" id="formTriangle" onSubmit={handleSubmit}>
       { QuestionBank.map(({ question, options, correct, questionId }) => (
          <QuestionBox
            question={question}
            options={options}
            keys={questionId}
            selected={(answer) => computeAnswer(answer, correct)}
          />
        ))}
        <button className="button" onClick={showResult}>
          submit
        </button>
        <div className="output">{result}</div>
      </form>
    </div>
  );
}


const QuestionBox = ({ question, options, selected }) => {
  const [answer, setAnswer] = useState(options);
  console.log(options);
  function hideIncorrect(text) {
    setAnswer([text]);
    selected(text);
  }
  return (
    <div className="questions">
      <p>{question}</p>
      {answer.map((text, index) => (
        <button
          className="btn"
          key={index}
          onClick={options.length > 1 ? () => hideIncorrect(text): null}
        >
          {text}
        </button> 
      ))}
    </div>
  );
};


  export default Quiz;
