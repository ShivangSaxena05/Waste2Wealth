import React, { useState } from 'react';
import DonorSignup from './Donor/DonorSignup';
import NGOsSignup from './NGOs&Brands/NGOsSignup';
import WasteCollectorSignup from './WasteCollector/WasteCollectorSignup';
import logo from "../../assets/logo.png"

const Signup = ({onClose}) => {
  const [showDonor, setShowDonor] = useState(true);
  const [showNGOs, setShowNGOs] = useState(false);
  const [showCollector, setShowCollector] = useState(false);

  return (
    <div onClick={onClose} className="fixed  inset-0 fadein bg-[rgba(0,0,0,0.7)] flex justify-center  items-center">
      <div onClick={(e)=>{e.stopPropagation()}} className="border overflow-y-auto bg-white border-gray-500 rounded-2xl w-[800px] h-[650px] p-5 ">
        <img src={logo} width="100px" className='mx-auto'/>
        <h1 className="text-xl text-gray-700 font-bold text-center mb-4">Signup at Waste2Wealth</h1>
        <div className="flex text-lime-700 gap-5 justify-evenly items-center border rounded-2xl border-gray-600">
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
