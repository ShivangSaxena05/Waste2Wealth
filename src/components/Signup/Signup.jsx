import React, { useState } from "react";
import logo from "../../assets/logo.png";
import SignupInputs from "./SignupInputs";

const Signup = ({ onClose }) => {
  const [role, setrole] = useState("");

  return (
    <div
      onClick={onClose}
      className="fixed  inset-0 fadein bg-[rgba(0,0,0,0.7)] flex justify-center  items-center"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="border overflow-y-auto bg-white border-gray-500 rounded-2xl w-[800px] h-[650px] p-5 "
      >
        <img src={logo} width="100px" className="mx-auto" />
        <h1 className="text-xl text-gray-700 font-bold text-center mb-4">
          Signup at Waste2Wealth
        </h1>
        <div className="flex text-lime-700 justify-evenly items-center border rounded-2xl border-gray-600">
          <div
            className={`font-bold text-lg px-3 py-2 w-full text-center cursor-pointer ${
      role === "D" ? "bg-lime-700 text-white rounded-l-xl" : ""
    }`}
            onClick={() => {
              setrole("D");
            }}
          >
            Donor
          </div>
          <div
            className={`font-bold text-lg px-3 py-2 w-full text-center border-x-1 cursor-pointer ${
      role === "N" ? "bg-lime-700 text-white" : ""
    }`}
            onClick={() => {
              setrole("N");
            }}
          >
            NGOs & Brand Partners
          </div>
          <div
            className={`font-bold text-lg px-3 py-2 w-full text-center cursor-pointer ${
      role === "C" ? "bg-lime-700 text-white rounded-r-xl" : ""
    }`}
            onClick={() => {
              setrole("C");
            }}
          >
            Waste Collector
          </div>
        </div>
        <div>
          <SignupInputs role={role} />
        </div>
      </div>
    </div>
  );
};

export default Signup;
