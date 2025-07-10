import React, { useState } from 'react';
import DonorSignup from './Donor/DonorSingup';
import NGOsSignup from './NGOs&Brands/NGOsSignup';
import WasteCollectorSignup from './WasteCollector/WasteCollectorSignup';

const Signup = () => {
  const [showDonor, setShowDonor] = useState(false);
  const [showNGOs, setShowNGOs] = useState(false);
  const [showCollector, setShowCollector] = useState(false);

  return (
    <div className="fixed inset-0 fadein bg-[rgba(0,0,0,0.7)] flex justify-center items-center z-50">
      <div className="bg-[rgba(190,242,100,0.8)] border border-gray-500 rounded-2xl w-[700px] p-6">
        <h1 className="text-xl font-bold text-center mb-4">Signup</h1>
        <div className="flex gap-5 justify-evenly items-center border rounded-2xl border-gray-600">
          <h2 className="font-bold text-lg">
            <button onClick={() => {
              setShowDonor(true);
              setShowNGOs(false);
              setShowCollector(false);
            }}>Donor</button>
          </h2>
          <hr className="w-[0.5px] h-8 bg-black" />
          <h2 className="font-bold text-lg">
            <button onClick={() => {
              setShowDonor(false);
              setShowNGOs(true);
              setShowCollector(false);
            }}>NGOs & Brand Partners</button>
          </h2>
          <hr className="w-[0.5px] h-8 bg-black" />
          <h2 className="font-bold text-lg">
            <button onClick={() => {
              setShowDonor(false);
              setShowNGOs(false);
              setShowCollector(true);
            }}>Waste Collector</button>
          </h2>
        </div>

        <div className="mt-6">
          {showDonor && <DonorSignup setShowDonor={setShowDonor} />}
          {showNGOs && <NGOsSignup setShowNGOs={setShowNGOs} />}
          {showCollector && <WasteCollectorSignup setShowCollector={setShowCollector} />}
        </div>
      </div>
    </div>
  );
};

export default Signup;
