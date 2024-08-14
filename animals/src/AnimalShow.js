import "./AnimalShow.css";
import { useState } from "react";
import bird from "./images/bird.svg";
import cat from "./images/cat.svg";
import cow from "./images/cow.svg";
import dog from "./images/dog.svg";
import gator from "./images/gator.svg";
import heart from "./images/heart.svg";
import horse from "./images/horse.svg";
import { click } from "@testing-library/user-event/dist/click";

const svgMap = {
  bird: bird,
  cat: cat,
  cow: cow,
  dog: dog,
  gator: gator,
  heart: heart,
  horse: horse,
};

function AnimalShow({ type }) {
  const [clicks, setClicks] = useState(0);
  const [imageGrow, setImageGrow] = useState(true);

  const handleClick = () => {
    if (imageGrow) {
      setClicks(clicks + 1);
      if (clicks === 4) setImageGrow(false);
    } else {
      setClicks(clicks - 1);
      if (clicks === 1) setImageGrow(true);
    }
  };

  return (
    <div className="animal-show" onClick={handleClick}>
      <img className="animal" src={svgMap[type]} alt={type} />
      <img
        src={heart}
        alt="heart"
        className="heart"
        style={{ width: 10 + 10 * clicks + "px" }}
      />
    </div>
  );
}

export default AnimalShow;
