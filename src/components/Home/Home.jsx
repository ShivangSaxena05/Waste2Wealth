import React from "react";
import Card from "./Card";
const Home = () => {
  const Products = [
  {
    "id": 1,
    "title": "Motor",
    "price": 200,
    "description": "High-efficiency motor suitable for e-waste recycling.",
    "category": "E-Waste",
    "image": "https://images.unsplash.com/photo-1618412391079-00c2fbc8f9fa"
  },
  {
    "id": 2,
    "title": "Old Phone",
    "price": 150,
    "description": "Used smartphone in working condition.",
    "category": "E-Waste",
    "image": "https://images.unsplash.com/photo-1580910051076-68b469efc1b7"
  },
  {
    "id": 3,
    "title": "Plastic Bottles",
    "price": 10,
    "description": "Bundle of 20 used plastic bottles.",
    "category": "Plastic",
    "image": "https://images.unsplash.com/photo-1586608217373-7709ae0f43f9"
  },
  {
    "id": 4,
    "title": "Aluminum Can",
    "price": 5,
    "description": "Empty aluminum drink can for metal recycling.",
    "category": "Metal Waste",
    "image": "https://images.unsplash.com/photo-1586948121881-bd2bd0e2c7d2"
  },
  {
    "id": 5,
    "title": "Paper Stack",
    "price": 20,
    "description": "Set of used newspapers and magazines.",
    "category": "Paper",
    "image": "https://images.unsplash.com/photo-1554080353-a576cf803bda"
  },
  {
    "id": 6,
    "title": "Old Laptop",
    "price": 300,
    "description": "Functional old laptop for parts or reuse.",
    "category": "E-Waste",
    "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
  },
  {
    "id": 7,
    "title": "Plastic Crate",
    "price": 40,
    "description": "Used plastic crate ideal for recycling.",
    "category": "Plastic",
    "image": "https://images.unsplash.com/photo-1593353361741-938fcb083e78"
  },
  {
    "id": 8,
    "title": "Copper Wire",
    "price": 100,
    "description": "Bundle of stripped copper wire.",
    "category": "Metal Waste",
    "image": "https://images.unsplash.com/photo-1608222351217-d1a3422e2dc2"
  },
  {
    "id": 9,
    "title": "Magazine Bundle",
    "price": 15,
    "description": "Stack of old magazines.",
    "category": "Paper",
    "image": "https://images.unsplash.com/photo-1588315029754-bca0b5776cc5"
  },
  {
    "id": 10,
    "title": "Glass Jar",
    "price": 8,
    "description": "Reusable glass jar for recycling.",
    "category": "Glass",
    "image": "https://images.unsplash.com/photo-1576395468834-44e810d56b2e"
  },
  {
    "id": 11,
    "title": "Washing Machine",
    "price": 500,
    "description": "Old washing machine for recycling.",
    "category": "E-Waste",
    "image": "https://images.unsplash.com/photo-1601440522514-6856e6c52b11"
  },
  {
    "id": 12,
    "title": "Plastic Basket",
    "price": 25,
    "description": "Colored plastic basket, reusable.",
    "category": "Plastic",
    "image": "https://images.unsplash.com/photo-1579546929518-9e396f3cc809"
  },
  {
    "id": 13,
    "title": "Steel Spoon Set",
    "price": 30,
    "description": "Used cutlery set.",
    "category": "Metal Waste",
    "image": "https://images.unsplash.com/photo-1589927986089-35812388d1fd"
  },
  {
    "id": 14,
    "title": "Old Newspapers",
    "price": 12,
    "description": "Weekly collected newspapers.",
    "category": "Paper",
    "image": "https://images.unsplash.com/photo-1580136600728-e4b0ef52d7b4"
  },
  {
    "id": 15,
    "title": "Glass Bottle",
    "price": 6,
    "description": "Green glass beverage bottle.",
    "category": "Glass",
    "image": "https://images.unsplash.com/photo-1583430902701-bd0bd3c6e0c2"
  },
  {
    "id": 16,
    "title": "Tablet",
    "price": 250,
    "description": "Cracked screen tablet, still functional.",
    "category": "E-Waste",
    "image": "https://images.unsplash.com/photo-1611078489935-43be30dcb33c"
  },
  {
    "id": 17,
    "title": "Plastic Bag Bundle",
    "price": 5,
    "description": "100 used plastic bags.",
    "category": "Plastic",
    "image": "https://images.unsplash.com/photo-1614339267336-d2e43fcfa4d9"
  },
  {
    "id": 18,
    "title": "Iron Pipe",
    "price": 50,
    "description": "Scrap iron pipe section.",
    "category": "Metal Waste",
    "image": "https://images.unsplash.com/photo-1579546929303-4bc4f1c325c8"
  },
  {
    "id": 19,
    "title": "Office Papers",
    "price": 18,
    "description": "Mixed office documents and sheets.",
    "category": "Paper",
    "image": "https://images.unsplash.com/photo-1610375261626-53cc4e728d1a"
  },
  {
    "id": 20,
    "title": "Broken Glass Plate",
    "price": 3,
    "description": "Shattered but reusable glass plate.",
    "category": "Glass",
    "image": "https://images.unsplash.com/photo-1584943318786-6f2b6a1767e3"
  },
  {
    "id": 21,
    "title": "Fridge Compressor",
    "price": 350,
    "description": "Old compressor for scrap.",
    "category": "E-Waste",
    "image": "https://images.unsplash.com/photo-1593642632823-8f785ba67e45"
  },
  {
    "id": 22,
    "title": "Plastic Drum",
    "price": 80,
    "description": "Large blue plastic drum.",
    "category": "Plastic",
    "image": "https://images.unsplash.com/photo-1599058917210-cacb308948a8"
  },
  {
    "id": 23,
    "title": "Aluminum Rod",
    "price": 60,
    "description": "Scrap aluminum rod piece.",
    "category": "Metal Waste",
    "image": "https://images.unsplash.com/photo-1609879561435-c3c86b92f6e4"
  },
  {
    "id": 24,
    "title": "Cardboard Box",
    "price": 8,
    "description": "Medium-sized cardboard box.",
    "category": "Paper",
    "image": "https://images.unsplash.com/photo-1598935881701-87b59aa5d83e"
  },
  {
    "id": 25,
    "title": "Broken Mirror",
    "price": 7,
    "description": "Cracked mirror piece.",
    "category": "Glass",
    "image": "https://images.unsplash.com/photo-1625840469462-1e08cfdd31c5"
  },
  {
    "id": 26,
    "title": "Computer Monitor",
    "price": 220,
    "description": "Old monitor for recycling.",
    "category": "E-Waste",
    "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
  },
  {
    "id": 27,
    "title": "Plastic Tumbler",
    "price": 4,
    "description": "Reusable plastic cup.",
    "category": "Plastic",
    "image": "https://images.unsplash.com/photo-1617957747065-8ffcefa06b15"
  },
  {
    "id": 28,
    "title": "Steel Scrap",
    "price": 90,
    "description": "Mixed steel scrap items.",
    "category": "Metal Waste",
    "image": "https://images.unsplash.com/photo-1596212925949-d07d3d4cc6a6"
  },
  {
    "id": 29,
    "title": "Paper Shred",
    "price": 6,
    "description": "Confidential shredded papers.",
    "category": "Paper",
    "image": "https://images.unsplash.com/photo-1626190131262-2c2ab3ee711b"
  },
  {
    "id": 30,
    "title": "Glass Chips",
    "price": 2,
    "description": "Tiny pieces of broken colored glass.",
    "category": "Glass",
    "image": "https://images.unsplash.com/photo-1560343090-f0409e92791a"
  }
]


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
         <Card PTitle={e.title} PPrice={e.price} PDesc={e.description} />)
        })}
      </div>
    
    </>
  );
};

export default Home;
