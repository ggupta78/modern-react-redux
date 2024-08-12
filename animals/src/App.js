import { useState } from "react";
import AnimalShow from "./AnimalShow";

function getRandomAnimal() {
  const animals = ["bird", "cow", "cat", "dog", "gator", "horse"];

  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} index={index} />;
  });

  return (
    <div>
      <h1>List of Animals!</h1>
      <button onClick={handleClick}>Add Animal</button>
      <div>Animals:</div>
      <div>{renderedAnimals}</div>
    </div>
  );
}

export default App;