import React, { useEffect } from "react";
import Card from "./Card";
import { useState } from "react";

const Home = () => {

  const [Products,setProducts] = useState([]);
  useEffect(()=>{
    fetch("/Products.json").then((res)=>res.json()).then((data)=>setProducts(data));
  },[]);


  return (
    <>
      <div className="category border border-y-black py-1">
        <ul className="flex gap-7 justify-evenly">
          <li>Plastic</li>
          <li>E-Waste</li>
          <li>Paper & Cardboard</li>
          <li>Metal Waste</li>
          <li>Glass</li>
          <li>Clothes</li>
        </ul>
      </div>
      <div className=" my-2 ">
      <input type="text" placeholder="Search Anything 🔍" className=" border border-gray-800 rounded-lg w-[35%] p-1 block mx-auto text-center" />
      </div>
      <div className="cards px-10 flex flex-wrap gap-5 justify-evenly mt-6">
        {Products.map((e)=>{
          return (
         <Card key={e.id} PTitle={e.title} PPrice={e.price} PDesc={e.description} PImage={e.image} />)
        })}
      </div>
    
    </>
  );
};

export default Home;
