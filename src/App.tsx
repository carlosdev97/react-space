import { useState } from "react";
import "./App.css";
import { Button } from "./components";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Carlos");

  const countMore = () => {
    setCount((count) => count + 1);
  };

  const changeName = () => {
    setName("John");
  };

  return (
    <>
      <Button label={`Count is ${count}`} parentMethod={countMore} />
      <p>{name}</p>
      <Button label={"Change the name"} parentMethod={changeName} />
    </>
  );
}

export default App;
