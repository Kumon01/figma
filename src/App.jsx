import { useState } from 'react'
import React from 'react'
import Profile from './Components/Profile'
import Header from './Components/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Profile />
    </>
  )
}

export default App
