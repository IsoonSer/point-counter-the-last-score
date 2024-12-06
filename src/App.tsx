import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ScoreBoard from '../components/ScoreBoard/ScoreBoard'
import NavBar from '../components/NavBar'

function App() {


  return (
    <>
      <NavBar />
      <ScoreBoard />
    </>
  )
}

export default App
