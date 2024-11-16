import Button from "./Button";
function App() {
  return (
    <div>
      <div>
        <Button primary outline rounded>
          Hello World!
        </Button>
      </div>
      <div>
        <Button secondary>Hi there!</Button>
      </div>
      <div>
        <Button success>Bye!</Button>
      </div>
      <div>
        <Button warning outline>
          See Ya!
        </Button>
      </div>
      <div>
        <Button danger rounded>
          Hello again!
        </Button>
      </div>
    </div>
  );
}

export default App;
