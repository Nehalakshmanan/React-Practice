import { useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState("");
  const [feedback, setFeedback] = useState("");
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 101)
  );
  const [attempts, setAttempts] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const Reset = () => {
    setState(1);
    setFeedback("");
    setAttempts(0);
    setGameOver(false);
    setRandomNumber(Math.floor(Math.random() * 101));
  };
  const handleChange = () => {
    const guessedNumber = parseInt(state, 10);
    setAttempts(attempts + 1);

    if (guessedNumber > randomNumber) {
      setFeedback("Your guess is High than the actual number");
    } else if (guessedNumber < randomNumber) {
      setFeedback("Your guess is Less than the actual number");
    } else {
      setFeedback(`Your guess is Right!, it took u ${attempts + 1} attempts`);
      setGameOver(true);
    }
  };

  return (
    <>
      <div className="container">
        <div className="header">
        <p>Guess the number between 0 and 100</p>
        </div>
        <div className="input">
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </div>
        <div className="reset">
          <button onClick={Reset}>Reset</button>
        </div>
        <div className="check">
          <button onClick={handleChange} disabled={gameOver}>
            Check
          </button>
          <p>{feedback}</p>
        </div>
      </div>
    </>
  );
}

export default App;
