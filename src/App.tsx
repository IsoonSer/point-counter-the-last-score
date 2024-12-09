import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ScoreBoard from '../components/ScoreBoard/ScoreBoard'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

import DevTeam from '../components/DevTeam/DevTeam'

function App() {


  return (
    <div className='w-screen h-screen'>
      <NavBar />
      {/* <ScoreBoard /> */}
      <DevTeam />
      <Footer />
    </div>
  )
}

export default App
