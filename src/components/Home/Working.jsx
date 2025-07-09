import React from "react";
import pickup from "../../assets/pickup.svg";
import coins from "../../assets/coins.svg"
const Working = () => {
  return (
    <div>
      <div className="py-10 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10">How It Works</h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-4">
          <div className="bg-white shadow-md flex flex-col items-center rounded-xl p-6 w-[250px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="80"
              height="80"
            >
              <rect x="173" y="398" width="166" height="38" fill="#314A5F" />
              <path
                d="M357,436H155c-20,0-37,17-37,37h276C394,453,377,436,357,436z"
                fill="#415E72"
              />
              <path
                d="M475,39H37C21,39,9,51,9,67v302c0,16,13,29,29,29h437c16,0,29-13,29-29V67C503,51,490,39,475,39z"
                fill="#415E72"
              />
              <rect x="47" y="77" width="418" height="283" fill="#CFDCE5" />
              <g>
                <path
                  fill="#4CAF50"
                  d="M256 120 L215 165 H235 V220 H277 V165 H297 Z"
                >
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="0 0; 0 -5; 0 0"
                    dur="1.2s"
                    repeatCount="indefinite"
                  />
                </path>
              </g>
              <polygon
                fill="#FF6F52"
                points="255.872,119.199 171.538,218.368 212.121,218.368 212.121,317.537 299.623,317.537 
      299.623,218.368 340.206,218.368"
              />
            </svg>

            <h3 className="text-lg font-semibold mb-1">Upload Waste</h3>
            <p className="text-sm text-gray-600">Provide details about waste</p>
          </div>

          <div className="hidden md:block text-gray-400 text-2xl">➜</div>
          <div className="bg-white flex flex-col items-center shadow-md rounded-xl p-6 w-[250px]">
          <img src={pickup} width='100px'/>
            <h3 className="text-lg font-semibold mb-1">Recycler Picks Up</h3>
            <p className="text-sm text-gray-600">
              A recycler collects your waste
            </p>
          </div>

          <div className="hidden md:block text-gray-400 text-2xl">➜</div>

          <div className="bg-white flex flex-col items-center shadow-md rounded-xl p-6 w-[250px]">
            <img
              src={coins}
              alt="Earn EcoPoints"
              className="w-12 h-12 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold mb-1">Earn EcoPoints</h3>
            <p className="text-sm text-gray-600">
              Get rewarded for your contrib
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Working;
