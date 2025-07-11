import { useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router'
import Home from './components/Home/Home'
import Footer from './Footer'
import Leaderboard from './components/LeaderBoard/Leaderboard'
import AboutUs from './components/AboutUs/AboutUs'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Leaderboard" element={<Leaderboard/>}/>
      <Route path="AboutUs" element={<AboutUs/>}/>
      </Routes>
    </>
  )
}

export default App
