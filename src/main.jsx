import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes,Route } from 'react-router'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.jsx'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Navbar/>
    <Routes>

      <Route path='/*' element={<App/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  </StrictMode>,
)
