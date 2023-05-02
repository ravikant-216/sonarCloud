import React, { useState } from "react";
import "./App.css";
import { Pop } from "./ComponentsS/organism/popup";

function App() {
  const [showPop, setShowPop] = useState<boolean>(false);

  const handleStart = () => {
    setShowPop(true);
    document.body.classList.add("popup-open");
  };

  const handleClose = () => {
    setShowPop(false);
    document.body.classList.remove("popup-open");
  };

  return (
    <div className="App">
      <div className={`content ${showPop ? "hidden" : ""}`} id="vv">
        <button className="appButton" onClick={handleStart}>
          Start
        </button>
      </div>
      {showPop && <Pop onClose={handleClose} />}
    </div>
  );
}

export default App;
