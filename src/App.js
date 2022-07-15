import React, { useState } from 'react'
import './App.css'
import Main from './components/main/main'
import Nav from './components/nav/Nav'

function App() {
    const [bgColor, setBgColor] = useState(false)
    const [page, setPage] = useState(0)

  return (
    <div className='App'>
        <Nav page={page} setPage={setPage} />
        <Main bgColor={bgColor} setBgColor={setBgColor}/>
    </div>
  )
}

export default App