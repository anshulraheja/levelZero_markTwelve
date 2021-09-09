import "./styles.css";
import { useState } from "react";
import Triangle from "./components/Triangle";
import Hypotenuse from "./components/Hypotenuse";
import Quiz from "./components/Quiz";
import Area from "./components/Area";

export default function App() {
  const backClicker = () => {
    setScreen(
      <div className="box">
        <h1>Welcome to Fun with Triangles</h1>
        <div className="container">
          {features.map((feature) => {
            return (
              <span onClick={feactureClick} className="feature">
                {feature}
              </span>
            );
          })}
        </div>
      </div>
    );
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };

  const pages = {
    "Angles of Triangle?": <Triangle back={backClicker} submit={onSubmit} />,
    "Check hypotenuse": <Hypotenuse back={backClicker} submit={onSubmit} />,
    "Calculate Area": <Area back={backClicker} submit={onSubmit} />,
    "Take a Quiz": <Quiz back={backClicker} submit={onSubmit} />
  };

  const features = Object.keys(pages);

  const feactureClick = (e) => {
    setScreen(pages[e.target.innerText]);
  };

  const [screen, setScreen] = useState(
    <div className="box">
      <h1>Welcome to Fun with Triangles</h1>
      <div className="container">
        {features.map((feature) => {
          return (
            <span onClick={feactureClick} key={feature} className="feature">
              {feature}
            </span>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="App">
      {screen}
      {/* <Footer /> */}
    </div>
  );
}
