import React from 'react'
import "../../App.css"
const Login = () => {
  return (
    <>
      <div className="fixed inset-0 fadein bg-[rgba(0,0,0,0.7)] transition-opacity   flex justify-center items-center z-50">
      <div className="bg-[rgba(190,242,100,0.8)] fadein bg-opacity-30 border border-gray-500 rounded-2xl w-[400px] p-6">
        <h1 className="text-xl font-bold text-center mb-4">Login</h1>
        <form className="flex flex-col gap-4">
          <div>
            <label className="block text-sm mb-1">Username:</label>
            <input
              type="text"
              placeholder="username"
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Password:</label>
            <input
              type="password"
              placeholder="password"
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Login
          </button>
          <p className="text-sm text-center">
            Don't have an account? <a href="#" className="text-blue-600 underline">Sign up</a>
          </p>
        </form>
      </div>
    </div>
    </>
  )
}

export default Login
