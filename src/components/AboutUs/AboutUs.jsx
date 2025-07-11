import React from 'react';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import donate from '../../assets/donate.png';
import mission from '../../assets/mission.png';
import tech from '../../assets/tech.png';
import Working from './Working';

const AboutUs = () => {
  return (
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


      <Working />

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
  );
};

export default AboutUs;
