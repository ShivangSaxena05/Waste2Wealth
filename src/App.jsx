import { useState } from 'react'
import './App.css'
import Home from './components/Home/Home'
import Footer from './Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/>
    <Footer/>
    </>
  )
}

export default App
