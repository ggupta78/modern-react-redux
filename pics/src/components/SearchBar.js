import "./SearchBar.css";
import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
    // console.log("in form submit");
  };

  const handleOnChange = (event) => {
    setTerm(event.target.value);
    // console.log(event.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={onFormSubmit}>
        <label>Enter Search Term</label>
        <input value={term} onChange={handleOnChange} type="text" />
      </form>
    </div>
  );
}

export default SearchBar;
