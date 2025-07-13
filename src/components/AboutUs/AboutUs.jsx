import React from 'react';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import donate from '../../assets/donate.png';
import mission from '../../assets/mission.png';
import tech from '../../assets/tech.png';
import trash from "../../assets/trash.png";
import Working from './Working';
import Appdown from './Appdown';

const AboutUs = () => {
  return (<>
  <div className="bg-green-50 h-[75vh] w-100% flex justify-evenly items-center">
        <div className="left w-[40%]">
          <h1 className="text-6xl font-bold">
            Turn Trash Into Treasure
            <span className="inline-block align-middle">
              <svg
                className="w-30 h-10 inline ml-5"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 1116.667 460.667"
                style={{ enableBackground: "new 0 0 426.667 426.667" }}
                xmlSpace="preserve"
              >
                <g>
                  <path
                    style={{ fill: "#6AC259" }}
                    d="M117.043,26.859c-0.017,0.043-0.043,0.064-0.051,0.102l-2.3,3.972c-0.051,0.081-0.09,0.171-0.124,0.256L75.102,99.503
        l83.541,48.23l38.34-66.402l4.8-8.311l11.558-20.006l27.831-48.235h-83.533C140.625,4.77,125.649,13.568,117.043,26.859z"
                  />
                  <path
                    style={{ fill: "#6AC259" }}
                    d="M310.793,28.885c-4.083-7.095-10.048-13.257-17.651-17.651c-7.607-4.395-15.915-6.464-24.124-6.464h-83.524h-27.849
        c16.981,0,31.91,8.742,40.542,21.973l2.607,4.548l67.251,116.433l83.52-48.226L310.793,28.885z"
                  />
                  <polygon
                    style={{ fill: "#6AC259" }}
                    points="227.925,147.729 323.725,147.729 371.627,64.777"
                  />
                  <path
                    style={{ fill: "#6AC259" }}
                    d="M421.35,220.378c-0.017-0.03-0.026-0.055-0.068-0.09l-2.291-3.981c-0.034-0.09-0.107-0.171-0.141-0.239l-39.441-68.331
        l-83.541,48.23l38.349,66.402l4.8,8.32l11.533,20.011l27.857,48.222l41.775-72.341C428.693,251.844,428.557,234.479,421.35,220.378z"
                  />
                  <path
                    style={{ fill: "#6AC259" }}
                    d="M322.718,387.166c8.192,0,16.508-2.065,24.107-6.464c7.616-4.395,13.559-10.556,17.66-17.651l41.766-72.346l13.935-24.124
        c-8.499,14.699-23.518,23.266-39.292,24.111h-5.265l-134.451,0.013v96.457h81.54V387.166z"
                  />
                  <polygon
                    style={{ fill: "#6AC259" }}
                    points="261.218,255.983 213.342,338.935 261.218,421.897"
                  />
                  <path
                    style={{ fill: "#6AC259" }}
                    d="M185.476,290.697h-76.693h-9.6l-23.1-0.004l-55.684,0.004l41.758,72.346c8.516,14.733,23.607,23.305,39.424,24.111
        c0.043-0.004,0.068,0,0.115,0h4.591c0.09,0.013,0.192,0,0.29-0.013l78.891,0.013v-96.457H185.476z"
                  />
                  <path
                    style={{ fill: "#6AC259" }}
                    d="M6.451,218.347C2.377,225.438,0,233.673,0,242.462c0,8.785,2.377,17.011,6.451,24.111l41.775,72.337l13.935,24.128
        c-8.482-14.699-8.384-32-1.242-46.093l2.624-4.548l67.226-116.442l-83.541-48.235L6.451,218.347z"
                  />
                  <polygon
                    style={{ fill: "#6AC259" }}
                    points="150.81,230.682 102.925,147.729 7.134,147.716"
                  />
                </g>
              </svg>
            </span>
          </h1>
          <p>
            Donate things, and earn rewards, Earn Certificates from Recyclers
            and NGOs
          </p>
          <div className="flex py-5 gap-5">
            <button className="bg-lime-600 text-white p-3 rounded-2xl">
              Start Donating
            </button>
            <button className="bg-lime-600 text-white p-3 rounded-2xl">
              {" "}
              Join as Recyclers
            </button>
          </div>
        </div>
        <div className="right w-[30%]">
          <img src={trash}/>
        </div>
      </div>

      
      <div className="flex justify-evenly gap-20 py-20 bg-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold">2150</h2>
          <p className="text-gray-600">Total Waste Donated</p>
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-bold">8200</h2>
          <p className="text-gray-600">EcoPoints Given</p>
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-bold">350</h2>
          <p className="text-gray-600">Recyclers Registered</p>
        </div>
      </div>

      <Working/>
      <Appdown/>
    <div className="px-4 md:px-16 py-10 bg-gray-50">
      <h1 className="font-bold underline underline-offset-4 text-4xl text-center mb-14 text-lime-800">
        🌱 This Is Our Story
      </h1>

      <LeftSide
        imgURL={donate}
        Title="♻️ Who We Are"
        Desc="Waste2Wealth is a youth-led initiative born out of passion for sustainability and innovation. What started as a college project quickly grew into a smart eco-platform that promotes responsible waste disposal and offers meaningful incentives. Our platform not only encourages recycling but also empowers individuals and organizations to make an environmental impact—one donation at a time."
      />

      <RightSide
        imgURL={mission}
        Title="🚀 Our Aim"
        Desc="We believe even a single plastic bottle can be the spark for change. Our goal is to simplify waste donation, connect households with verified recyclers and NGOs, and reward sustainable actions. Waste2Wealth acts as a catalyst—bridging the gap between people and planet-saving partners."
      />


      <RightSide
        imgURL={tech}
        Title="🛠️ Our Technology"
        Desc={
          <>
            <p className="mb-2">Our stack ensures speed, reliability, and cross-platform accessibility:</p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>🧩 <b>Frontend:</b> React.js (Web), React Native with Expo (Mobile)</li>
              <li>⚙️ <b>Backend:</b> Node.js, Express, MongoDB (MERN stack)</li>
              <li>🔐 <b>Security:</b> JWT authentication with bcrypt</li>
              <li>🌍 <b>Integrations:</b> Firebase (Cloud), Cloudinary (Images), Google Maps API (Geo)</li>
            </ul>
          </>
        }
      />
    </div>
  </>
  );
};

export default AboutUs;
