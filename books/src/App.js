import { useState } from "react";
import BookCreate from "./components/BookCreate";
import { getByTitle } from "@testing-library/react";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    console.log("title", title);
  };

  return <BookCreate onCreate={createBook} />;
}

export default App;
