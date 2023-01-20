import './App.css';
import Block from './Block';
import Results from './Results';
import React, { useState } from 'react';


function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  const [showResults, setShowResults] = useState(false);

  const [score, setScore] = useState(null);

  const [delay, setDelay] = useState(0);

  const startTimer = () => {
    setIsPlaying(true);
    setShowResults(false);
    setDelay(2000 + Math.random() * 5000);

  };

  const endGame = (reactionTime) => {
    setScore(reactionTime);
    setIsPlaying(false);
    setShowResults(true);
  };


  return (
    <div className="App">
      <h1> Reaction Timer</h1>
      <button onClick={startTimer} disabled={isPlaying}>Play</button>

      {isPlaying ? < Block delay={delay} onEnd={endGame} /> : null}
      {showResults ? <Results score={score} /> : null}

    </div>
  );
}

export default App;
