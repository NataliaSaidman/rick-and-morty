import "./App.css";
import Personajes from "./components/Personajes/index";
import { useState } from "react";
import Episodios from "./components/Episodios";

function App() {
  const [buttonId, setButtonId] = useState("0");

  const handleClick = (e) => {
    e.preventDefault();
    setButtonId(() => {
      if (buttonId === e.target.id) {
        return 0;
      } else {
        return e.target.id;
      }
    });
  };
  return (
    <div className="App">
      <div className="containerButtons">
        <button className="buttonPersonajes" id={1} onClick={handleClick}>
          Personajes
        </button>
        <button className="buttonPersonajes" id={2} onClick={handleClick}>
          Episodios
        </button>
      </div>
      {buttonId === "1" && <Personajes />}
      {buttonId === "2" && <Episodios />}
    </div>
  );
}

export default App;
