import React, { useEffect } from "react";
import Card from "./Card";
import { useState } from "react";
import {db} from '../../firebase'
const Home = () => {

  const [Products,setProducts] = useState([]);
  useEffect(()=>{
    fetch(db).then((res)=>res.json()).then((data)=>setProducts(data));
  },[]);


  return (
    <>
      

      <div className="cards px-10 flex flex-wrap gap-5 justify-evenly mt-6">
        {Products.map((e) => {
          return (
            <Card
              key={e.id}
              Pid={e.id}
              PTitle={e.title}
              PPrice={e.price}
              PDesc={e.description}
              PImage={e.image}
            />
          )
        })}
      </div>
</>)
};

export default Home;
