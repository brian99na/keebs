import React, { useEffect, useState } from 'react'
import './App.css'
import Main from './components/main/main'
import Nav from './components/nav/Nav'

function App() {
    const [bgColor, setBgColor] = useState(false)
    const [page, setPage] = useState(-1)

  useEffect(() => {
    setTimeout(() => {
      setPage(0)
    }, 1000)
  }, [])

  return (
    <div className='App'>
        <Nav page={page} setPage={setPage} />
        <Main page={page} bgColor={bgColor} setBgColor={setBgColor}/>
    </div>
  )
}

export default App