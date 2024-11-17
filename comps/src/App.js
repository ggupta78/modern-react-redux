import { MdAddChart, MdAdd, MdAddAlarm } from "react-icons/md";
import Button from "./Button";

function App() {
  const handleClick = () => {
    console.log("Clicked!!");
  };

  return (
    <div>
      <div>
        <Button primary outline rounded className="mb-5" onClick={handleClick}>
          <MdAddChart />
          Hello World!
        </Button>
      </div>
      <div>
        <Button secondary onMouseOver={handleClick}>
          <MdAdd />
          Hi there!
        </Button>
      </div>
      <div>
        <Button success>
          <MdAddAlarm />
          Bye!
        </Button>
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
