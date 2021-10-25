import "./styles.css";
import Star from "./Star.js";
import { useState } from "react";

export default function App() {
  const [stars, setStars] = useState(false);

  const handleEnter = (e) => {
    for (let i = 1; i <= e.target.id; i++) {
      document.getElementById(i).style.color = "yellow";
    }
  };

  const handleLeave = () => {
    if (stars === false) {
      for (let i = 1; i <= 5; i++) {
        document.getElementById(i).style.color = "black";
      }
    }
  };

  const handleClick = (e) => {
    setStars(!stars);
    for (let i = 1; i <= e.target.id; i++) {
      document.getElementById(i).style.color = "yellow";
    }
  };

  return (
    <div className="App">
      <h2> Please Rate Your Experience </h2>
      <div className="star-container">
        <Star
          id="1"
          handleEnter={handleEnter}
          handleLeave={handleLeave}
          handleClick={handleClick}
        />
        <Star
          id="2"
          handleEnter={handleEnter}
          handleLeave={handleLeave}
          handleClick={handleClick}
        />
        <Star
          id="3"
          handleEnter={handleEnter}
          handleLeave={handleLeave}
          handleClick={handleClick}
        />
        <Star
          id="4"
          handleEnter={handleEnter}
          handleLeave={handleLeave}
          handleClick={handleClick}
        />
        <Star
          id="5"
          handleEnter={handleEnter}
          handleLeave={handleLeave}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
}
