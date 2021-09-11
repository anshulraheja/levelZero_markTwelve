import "./styles.css";
import {Route, Switch } from 'react-router-dom';
import Home from "./components/Home"
import Triangle from "./components/Triangle";
import Hypotenuse from "./components/Hypotenuse";
import Quiz from "./components/Quiz";
import Area from "./components/Area";
import AreaBH from "./components/subComponents/AreaBH";
import Area3S from "./components/subComponents/Area3S";
import Area2SA from "./components/subComponents/Area2SA";

export default function App() {

  return (  
    <main>
      <Switch>
      <Route path='/' exact component={Home} />
      <Route path="/angle" component={Triangle} />
      <Route path="/hypotenuse" component={Hypotenuse} />
      <Route path="/area" component={Area} />
      <Route path="/quiz" component={Quiz} />
      <Route path='/areaBH'  component={AreaBH} />
      <Route path="/area3S"  component={Area3S} />
      <Route path="/area2SA"  component={Area2SA} />
      </Switch>
    </main>
  );
}
