import React from 'react'
import { Link } from 'react-router'
import logo from './assets/logo.png'
import { BiSolidCoin } from 'react-icons/bi'
import { useState } from 'react'
import Signup from './components/Signup/signup'
import Login from './components/Login/login'
const Navbar = () => {
  const [showSignup, setShowSignup ] = useState(false);
  const [showLogIn, setShowLogIn ] = useState(false);

  const closeBox = () => {
      setShowLogIn(false);
      setShowSignup(false);
  }
  return (<>
    <nav className='flex px-10 justify-between items-center '>
    <Link to="/" className='flex items-center text-xl'><img src={logo} width='54px'/>Waste<b>2</b>Wealth</Link>
    <ul className='flex gap-10'>
        <li><Link to="/Leaderboard">Leaderboard</Link></li>
        <li><Link to="/RagMan">Ragman (Kawadi Wala)</Link></li>
        <li><Link to="/NGOs">NGOs & Brands</Link></li>
        <li><Link to="AboutUs">About Us</Link></li>
      </ul>
      <div className='flex gap-5'>
        <span className='px-5 py-1 border border-black rounded-2xl flex items-center gap-3'>0 <BiSolidCoin /></span>
        <button onClick={()=>{setShowSignup(true);setShowLogIn(false);}} className=' px-4 py-1 bg-gray-200 border border-green-400 rounded-lg'>Sign Up</button>
        <button onClick={()=>{setShowSignup(false);setShowLogIn(true);}} className=' px-4 py-1 bg-gray-200 border border-green-400 rounded-lg'>Log In</button>
      </div>
    </nav>
    <hr />
    {showSignup 
    ? <Signup closeBox={closeBox} onClose={()=>{setShowSignup(false)}} />
    : null
    }
    {showLogIn
    ? <Login closeBox={closeBox} onClose={()=>{setShowLogIn(false)}} openSignup={()=>{setShowLogIn(false);setShowSignup(true);}} />
    : null
    }
  </>
  )
}

export default Navbar
