import React from 'react';

const Card = ({ PTitle, PPrice, PDesc,PImage }) => {
  return (
    <div className="border border-black w-[200px] h-[260px] rounded-lg overflow-hidden shadow-md bg-white">
      <img
        src={PImage}
        className="w-full h-[160px] object-cover rounded-t-lg"
        alt="Product"
      />
      <div className="px-3 py-2">
        <div className="font-bold text-lg truncate">{PTitle}</div>
        <div className="text-sm text-gray-700 truncate">Price: ₹{PPrice}</div>
        <div className="text-xs text-gray-600 mt-1 line-clamp-2">
          {PDesc}
        </div>
      </div>
    </div>
  );
};

export default Card;
