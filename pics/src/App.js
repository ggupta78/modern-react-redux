import SearchBar from "./components/SearchBar";

const onSubmit = (term) => {
  console.log(term);
};

function App() {
  return (
    <div>
      <SearchBar onSubmit={onSubmit} />
    </div>
  );
}

export default App;
