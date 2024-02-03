import { useState } from "react";
import "./App.css";

const phrases = [
  "No",
  "Are you sure??",
  "Really Sure??",
  "Pookiee Pleasee",
  "Don't do this to me",
  "I'm gonna cry...",
  "You're breaking my heart :(",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="bears kissing"
            src="https://gifdb.com/images/high/animated-bear-kiss-enngnq0gm2r405bt.gif"
          />
          <div className="text">YAYY LESGOOO!!</div>
        </>
      ) : (
        <>
          <img
            alt="bears with hearts"
            src="https://gifdb.com/images/high/cute-bear-throwing-heart-qhlc0ankggfephov.gif"
          />
          <div className="text">Will you be my Valentine??</div>
          <div>
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button onClick={handleNoClick} className="noButton">
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;