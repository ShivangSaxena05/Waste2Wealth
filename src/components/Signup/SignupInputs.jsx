import React, { useState, useEffect } from 'react';
import {db} from "../../firebase"
import { ref,get,child, set } from "firebase/database";

const SignupInputs = ({role, onlogins}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    role: role,
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    acceptedTerms: false,
  });

  useEffect(() => {
    setFormData(prev => ({ ...prev, role }));
  }, [role]);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    const newValue =
      type === 'checkbox' ? checked : type === 'file' ? files[0] : value;

    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    if (!formData.acceptedTerms) {
      alert('You must accept the Terms & Privacy Policy.');
      return;
    }
    try {
      const snmail = formData.email.replace(/\./g, "_");
      const userRef = ref(db,`users/${snmail}`);
      const snapshot = await get(userRef);
      if(snapshot.exists()){
        alert("Email already exists");
        return;
      }
      await set(userRef,{
          name: formData.fullName,
          email: formData.email,
          mob: formData.phone,
          userType: formData.role,
          pass: formData.password
        });
        alert('Signup successful!');
        onlogins({
          name: formData.fullName,
          email: formData.email,
          mob: formData.phone,
          userType: formData.role,
          pass: formData.password
        });
    } catch (error) {
      console.error("Signup Error:", error);
      alert("Something went wrong. Please try again.");
    }
    
  };

  return (
    <div className="w-full my-10 ax-w-xl mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div >
          <label className="block mb-1">Full Name *</label>
          <input
            type="text"
            name="fullName"
            required
            placeholder="Enter your full name"
            className="w-full border px-3 py-2 rounded"
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block mb-1">Email Address *</label>
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            className="w-full border px-3 py-2 rounded"
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block mb-1">Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            className="w-full border px-3 py-2 rounded"
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block mb-1">Password *</label>
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            required
            placeholder="Enter your password"
            className="w-full border px-3 py-2 rounded"
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block mb-1">Confirm Password *</label>
          <input
            type={showPassword ? 'text' : 'password'}
            name="confirmPassword"
            required
            placeholder="Re-enter your password"
            className="w-full border px-3 py-2 rounded"
            onChange={handleChange}
          />
          <button
            type="button"
            className="text-blue-600 text-sm mt-1"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? 'Hide Password' : 'Show Password'}
          </button>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="acceptedTerms"
            required
            onChange={handleChange}
          />
          <label>
            I accept the <a href="#" className="underline text-blue-600">Terms & Privacy Policy</a>
          </label>
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupInputs;
