import { useState } from "react";

function getRandomAnimal() {
  const animals = ["bird", "cow", "cat", "dog", "gator", "horse"];

  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  return (
    <div>
      <h1>List of Animals!</h1>
      <button onClick={handleClick}>Add Animal</button>
      <div>Animals: {animals}</div>
    </div>
  );
}

export default App;
