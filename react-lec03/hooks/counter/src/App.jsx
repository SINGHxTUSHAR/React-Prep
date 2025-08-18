import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => {if(count > 0) {setCount(count - 1)} 
                              else {setCount(0)}}}>Decrement</button>
    </>
  );
}

export default App;
