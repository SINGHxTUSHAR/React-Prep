import { useEffect } from "react"
import { useState } from "react"


function App() {

  const [count, setCount] = useState(0)

  useEffect(() => {
    alert("warning!!!!!!")
  })

  function handleClick(){
    setCount(count + 1)
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleClick}>Increment</button>
    </>
  )
}

export default App
