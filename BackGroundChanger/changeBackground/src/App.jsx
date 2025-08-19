import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("pink");

  return (
    <>
      <div
        className="w-full h-screen duration-200 flex items-center justify-center"
        style={{ backgroundColor: color }}
      >
        <div className="max-w-full absolute bottom-12 flex items-center justify-center insert-x-0">
          <div
            className="flex flex-wrap justify-center
          gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl"
          >
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => setColor("yellow")}
              className="outline-none px-4 py-1 rounded-full text-Black shadow-xl"
              style={{ backgroundColor: "yellow" }}
            >
              Yellow
            </button>
            <button
              onClick={()=> setColor("blue")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
