import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router'
import Home from './components/Home/Home'
import Footer from './Footer'
import Leaderboard from './components/LeaderBoard/Leaderboard'
import AboutUs from './components/AboutUs/AboutUs'
import CardPage from "./components/Home/CardPage"
import Navbar from './Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<CardPage/>}/>
        <Route path="/Leaderboard" element={<Leaderboard />} />
        <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
