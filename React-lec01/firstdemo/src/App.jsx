import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Test from './test'
function App() {
  const userName = "tushar singh rawat";
  return (
    <>
      <h1>Hello {userName}</h1>
      <Test/>
    </>
  )
}

export default App
