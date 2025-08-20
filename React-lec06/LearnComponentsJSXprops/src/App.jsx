import React from 'react'
import UserCards from './components/UserCards'
function App() {


  return (
    <>
      <div>
        <p className='description'> Understanding components, props, and JSX in React</p>
        <div className='user-cards-container'>
          <UserCards name = "tushar singh" description = "A passionate developer"/>
          <UserCards name = "john doe" description = "A creative designer"/>
          <UserCards name = "jane smith" description = "A skilled project manager"/>
        </div>
      </div>
    </>
  )
}

export default App
