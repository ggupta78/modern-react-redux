import "./App.css";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import searchImages from "./api";

function App() {
  const [images, setImages] = useState([]);

  const onSubmit = async (term) => {
    // console.log(term);
    const result = await searchImages(term);
    setImages(result);
    // console.log(result);
  };

  return (
    <div className="container">
      <SearchBar onSubmit={onSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
