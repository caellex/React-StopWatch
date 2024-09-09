import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [timer, setTimer] = useState(0); // Stores the counting variable, and sets it
  const timerRef = useRef(null); // A better practice than storing it in the global scope.

  const startTimer = () => { // Starts the timer, doesn't really need to be explained more 
    if (timerRef.current == null) {
    timerRef.current = setInterval(() => {

      setTimer((timer) => timer +1)
  }, 1000)
  }};
  const stopTimer = () => { // stops the timer, and clears
    clearInterval(timerRef.current)
  };
  const resetTimer = () => { // same
    clearInterval(timerRef.current)
    setTimer(0)
    console.log("reset" + timerRef.current)
  };
  const clearTimer = () => { // pretty much the same,
    clearInterval(timerRef.current) // clears it
    setTimer(0)                     // sets it to trigger it to render the new value (0)
    clearInterval(timerRef.current) // and instantly clears again to not trigger the counter past 0.
  };
  
                                    // trunc is genious
  return (
    <div className="container">
      <h1>Timer</h1>
      <span> {Math.trunc(timer / 60)} mins </span> 
      <span> {timer % 60} secs</span>
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
        <button onClick={clearTimer}>Clear</button>
      </div>
    </div>
)}

export default App
