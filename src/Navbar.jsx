import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { BiSolidCoin } from "react-icons/bi";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/login";

const Navbar = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogIn, setShowLogIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeBox = () => {
    setShowLogIn(false);
    setShowSignup(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="flex flex-wrap px-6 py-3 justify-between items-center border-b border-gray-300">
        <Link to="/" className="flex items-center w-[10%] text-lg font-bold">
          <img src={logo} width="54px" alt="Waste2Wealth Logo" />
          Waste<b>2</b>Wealth
        </Link>

        <button
          className="text-3xl lg:hidden"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div
          className={`w-full lg:w-auto lg:flex lg:items-center lg:justify-between ${
            menuOpen ? "block" : "hidden"
          } lg:block`}
        >
          <ul className="flex flex-col md:mr-50 md:flex-row md:gap-10 gap-4 md:mb-0 mb-4">
            <li>
              <Link to="/Leaderboard" onClick={() => setMenuOpen(false)}>
                Leaderboard
              </Link>
            </li>
            <li>
              <Link to="/RagMan" onClick={() => setMenuOpen(false)}>
                Ragman (Kawadi Wala)
              </Link>
            </li>
            <li>
              <Link to="/NGOs" onClick={() => setMenuOpen(false)}>
                NGOs & Brands
              </Link>
            </li>
            <li>
              <Link to="/AboutUs" onClick={() => setMenuOpen(false)}>
                About Us
              </Link>
            </li>
          </ul>

          <div className="flex flex-col md:flex-row md:items-center md:gap-5 gap-3">
            <span className="px-5 py-1 border border-black rounded-2xl flex items-center gap-3 justify-center">
              0 <BiSolidCoin />
            </span>
            <button
              onClick={() => {
                setShowSignup(true);
                setShowLogIn(false);
                setMenuOpen(false);
              }}
              className="px-4 py-1 bg-gray-200 border border-green-400 rounded-lg"
            >
              Sign Up
            </button>
            <button
              onClick={() => {
                setShowSignup(false);
                setShowLogIn(true);
                setMenuOpen(false);
              }}
              className="px-4 py-1 bg-gray-200 border border-green-400 rounded-lg"
            >
              Log In
            </button>
          </div>
          <hr />
          {showSignup ? (
            <Signup
              closeBox={closeBox}
              onClose={() => {
                setShowSignup(false);
              }}
            />
          ) : null}
          {showLogIn ? (
            <Login
              closeBox={closeBox}
              onClose={() => {
                setShowLogIn(false);
              }}
              openSignup={() => {
                setShowLogIn(false);
                setShowSignup(true);
              }}
            />
          ) : null}
        </div>
      </nav>
      <div className="category border border-y-black py-1 hidden md:block">
        <ul className="flex gap-7 justify-evenly">
          <li>Plastic</li>
          <li>E-Waste</li>
          <li>Paper & Cardboard</li>
          <li>Metal Waste</li>
          <li>Glass</li>
          <li>Clothes</li>
        </ul>
      </div>

      <div className="my-2">
        <input
          type="text"
          placeholder="Search Anything 🔍"
          className="border border-gray-800 rounded-lg w-[35%] p-1 block mx-auto text-center"
        />
      </div>
    </>
  );
};

export default Navbar;
