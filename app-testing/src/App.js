import React, {useState} from 'react';
import Display from './components/Display';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {

  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);

  const hit = () => {
    setStrikes(0);
    setBalls(0);
  }

  const foul = () => {
    if (strikes === 2){
      return strikes
    } else {
      setStrikes(strikes + 1)
    }
  }

  const strike = () =>{ 
    if (strikes === 3){
      setBalls(0);
      setStrikes(0);
    } else {
      setStrikes(strikes + 1)
    }
  }

  const ball = () => {
    if (balls === 4){
      setBalls(0);
      setStrikes(0)
    } else {
      setBalls(balls + 1)
    }
  }
  return (
    <div className="App">
      <Display
      balls = {balls}
      strikes = {strikes}
      />

      <Dashboard
      ball = {ball}
      strike = {strike}
      hit = {hit}
      foul = {foul}
      />
    </div>
  );
}

export default App;
