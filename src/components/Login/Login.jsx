import React, { useState } from 'react'
import "../../App.css"
import { FcGoogle } from 'react-icons/fc'
import logo from "../../assets/logo.png"
import {db} from "../../firebase"
import { ref,get,child } from 'firebase/database'
const Login = ({onClose,openSignup}) => {

  const [email,setemail] = useState("");
  const [password,setpassword] = useState("");
  const [message,setmessage] = useState("");
  
  const smail = (email) => email.replace(".","_");
  const handleLogin = async()=>{
    try{
      const snmail = smail(email);
      const refdb = ref(db);
      const snap = await get(child(refdb,`users/${snmail}`));
      if(snap.exists()){
        const user = snap.val();
        if(user.pass===password){
          setmessage("Welcome"+user.name);
        }else{
          setmessage("Incorrect Password");
        }
      }else{
        setmessage("User Not Found");
      }
    }catch(err){
      console.log(err);
    }
  }

  return (
    <>
      <div onClick={onClose} className="fixed inset-0 fadein bg-[rgba(0,0,0,0.7)] transition-opacity   flex justify-center items-center">
      <div onClick={(e)=>{e.stopPropagation()}} className="bg-white fadein bg-opacity-30 border border-gray-500 rounded-2xl w-[400px] px-6 pb-5">
        <img src={logo} width="100px" className='mx-auto'/>
        <h1 className="text-xl text-gray-700 font-bold text-center mb-4">Login To Your Account</h1>
        <form className="flex flex-col gap-4">
          <div>
            <label className="block text-sm text-lime-900 mb-1">Email:</label>
            <input
              type="text"
              placeholder="Enter Your E-mail"
              className="w-full px-3  border-lime-600 py-2 border rounded"
              onChange={(e)=>{setemail(e.target.value)}}
            />
          </div>
          <div>
            <label className="block text-sm text-lime-900 mb-1">Password:</label>
            <input
              type="password"
              placeholder="Enter Your Password"
              className="w-full px-3  border-lime-600 py-2 border rounded"
              onChange={(e)=>{setpassword(e.target.value)}}
            />
          </div>
          <button
            type="submit"
            onClick={(e)=>{e.preventDefault();handleLogin()}}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Login
          </button>
          <button className='flex justify-center gap-3 border border-gray-500 rounded-2xl py-1'>
            <FcGoogle size="26px"/> Continue With Google
          </button>
          <p className="text-sm text-center">
            Don't have an account? <button className='text-blue-700 cursor-pointer' onClick={(e)=>{e.preventDefault(); openSignup()}}>Sign up</button>
          </p>
        </form>
        <p>{message}</p>
      </div>
    </div>
    </>
  )
}

export default Login
