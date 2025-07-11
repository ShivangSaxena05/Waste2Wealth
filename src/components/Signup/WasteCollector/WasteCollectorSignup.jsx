import React, { useState } from 'react';

const WasteCollectorSignup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    address: '',
    pincode: '',
    city: '',
    state: '',
    vehicleNumber: '',
    idProof: null,
    profilePicture: null,
    referralCode: '',
    acceptedTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    const val = type === 'checkbox' ? checked : type === 'file' ? files[0] : value;
    setFormData({ ...formData, [name]: val });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    if (!formData.acceptedTerms) {
      alert('You must accept the Terms & Privacy Policy.');
      return;
    }

    console.log('Waste Collector Signup Data:', formData);
    // TODO: send to backend or Firebase
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold mb-2">Waste Collector Signup</h2>

        <div>
          <label className="block mb-1">Full Name *</label>
          <input
            type="text"
            name="fullName"
            required
            placeholder="Enter full name"
            className="w-full border px-3 py-2 rounded"
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email (optional)"
              className="w-full border px-3 py-2 rounded"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block mb-1">Phone Number *</label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="Enter phone number"
              className="w-full border px-3 py-2 rounded"
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <label className="block mb-1">Password *</label>
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            required
            placeholder="Create password"
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
            placeholder="Confirm password"
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

        <div>
          <label className="block mb-1">Address / Landmark *</label>
          <textarea
            name="address"
            required
            placeholder="Nearby landmark or address"
            className="w-full border px-3 py-2 rounded"
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1">Pincode *</label>
            <input
              type="number"
              name="pincode"
              required
              className="w-full border px-3 py-2 rounded"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block mb-1">City / District</label>
            <input
              type="text"
              name="city"
              placeholder="Optional"
              className="w-full border px-3 py-2 rounded"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block mb-1">State *</label>
            <select
              name="state"
              required
              className="w-full border px-3 py-2 rounded"
              onChange={handleChange}
            >
              <option value="">Select State</option>
              <option value="UP">Uttar Pradesh</option>
              <option value="MH">Maharashtra</option>
              <option value="RJ">Rajasthan</option>
              <option value="DL">Delhi</option>
              <option value="KA">Karnataka</option>
              {/* Add more as needed */}
            </select>
          </div>

          <div>
            <label className="block mb-1">Vehicle Number (Optional)</label>
            <input
              type="text"
              name="vehicleNumber"
              placeholder="If collector uses vehicle"
              className="w-full border px-3 py-2 rounded"
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <label className="block mb-1">Upload ID Proof *</label>
          <input
            type="file"
            name="idProof"
            accept=".jpg,.png,.pdf"
            required
            className="w-full border px-3 py-2 rounded"
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block mb-1">Profile Picture (Optional)</label>
          <input
            type="file"
            name="profilePicture"
            accept=".jpg,.jpeg,.png"
            className="w-full border px-3 py-2 rounded"
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block mb-1">Referral Code (Optional)</label>
          <input
            type="text"
            name="referralCode"
            placeholder="Referral Code (if any)"
            className="w-full border px-3 py-2 rounded"
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="acceptedTerms"
            required
            onChange={handleChange}
          />
          <label>
            I accept the{' '}
            <a href="#" className="underline text-blue-600">
              Terms & Privacy Policy
            </a>
          </label>
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          Register as Collector
        </button>
      </form>
    </div>
  );
};

export default WasteCollectorSignup;
