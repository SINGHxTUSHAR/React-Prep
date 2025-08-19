import { useState } from "react";
import "./App.css";
import { useCallback } from "react";
import { useEffect } from "react";
import { useRef } from "react";

function App() {
  const [length, setLength] = useState(2);
  const [numAllowed, setNumAllowed] = useState(true);
  const [charAllowed, setCharAllowed] = useState(true);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null); 

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()";

    for (let i = 1; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length + 1));
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);


  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current.select();
    window.navigator.clipboard.writeText(passwordRef.current.value);
  }, [passwordRef]);


  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto mt-10 p-5 bg-gray-800 rounded-lg shadow-lg">
        <div className="text-2xl bottom-6 font-bold text-center my-3">
          <h1 className="my-3">Password Generator</h1>
          <input
            type="text"
            value={password}
            className="outline-none w-mid py-1 px-3 rounded-md"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipBoard}
            className="w-mid py-2 px-4 mt-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Copy
          </button>
        </div>
        <div className="">
          <input
            type="range"
            name="length"
            id="length"
            min="2"
            max="20"
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
          />
          <label className="text-white"> Length: {length}</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="numbers"
            id="numbers"
            checked={numAllowed}
            onChange={(e) => setNumAllowed((prev) => !prev)}
          />
          <label htmlFor="numbers" className="text-white">
            {" "}
            Include Numbers
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            name="symbols"
            id="symbols"
            checked={charAllowed}
            onChange={(e) => setCharAllowed((prev) => !prev)}
          />
          <label htmlFor="symbols" className="text-white">
            {" "}
            Include Symbols
          </label>
        </div>
      </div>
    </>
  );
}

export default App;
