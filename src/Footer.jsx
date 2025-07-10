import React from 'react'
import { Link } from 'react-router';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className="bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/leaderboard" className="hover:underline">Leaderboard</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Share & Connect</h3>
          <div className="flex space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={24} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter size={24} /></a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Links</h3>
          <ul className="space-y-2">
            <li><Link to="/terms" className="hover:underline">Terms of Use</Link></li>
            <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
            <li><a href="mailto:support@waste2wealth.com" className="hover:underline">Contact Support</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center w-full text-sm text-gray-500">
        © {new Date().getFullYear()} Waste2Wealth. All rights reserved.
      </div>
    </div>
  )
}

export default Footer
