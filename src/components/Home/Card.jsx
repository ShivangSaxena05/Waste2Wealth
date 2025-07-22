import React from "react";
import { Link } from "react-router";
const Card = ({ Pid, PTitle, PPrice, PDesc, PImage }) => {
  return (
   <>
   <Link to={`/products/${Pid}`}>
    <div className="card cursor-pointer border rounded-lg shadow-md p-4 max-w-xs">
      <img
        src={PImage}
        alt={PTitle}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h2 className="text-xl font-semibold mb-2">{PTitle}</h2>
      <p className="text-gray-700 mb-2">{PDesc}</p>
      <p className="text-lg font-bold text-green-600">${PPrice}</p>
    </div></Link></>
  );
};

export default Card;
