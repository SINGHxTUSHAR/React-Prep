import "./App.css";
import Gif from "./components/Gif";

function App() {

  let myObj = {
    userName: "tushar singh rawat",
    age: 23
  }

  return (
    <>
      <div>
        <h1 className="bg-green-500 text-3xl font-bold underline mb-5 rounded-md">
          Hello world!
        </h1>

        <Gif userName={myObj.userName} age={myObj.age} />
      </div>
    </>
  );
}

export default App;
