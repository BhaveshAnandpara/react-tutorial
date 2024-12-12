import { useState } from "react";
import "./App.css";

function App() {
  const [name, setname] = useState("Bhavesh");
  const [age, setage] = useState(22);
  const [city, setcity] = useState("");

  const print = () => console.log(name, age, city);

  return (
    <>
      <input
        type="text"
        placeholder="Enter Name"
        onChange={(e) => setname(e.target.value)}
      ></input>
      <input
        type="number"
        placeholder="Enter age"
        onChange={(e) => setage(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Enter city"
        onChange={(e) => setcity(e.target.value)}
      ></input>

      <button onClick={print}>Submit</button>
    </>
  );
}

export default App;
