import { useParams } from "react-router";
import { useEffect, useState } from "react";
const CardPage = () => {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/Products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  });
  const { id } = useParams();
  const p = Products.find((p) => String(p.id) === id);
  if (!p) {
    return <div>Product not found</div>;
  }
  return (
    <>
      <h1 className="text-5xl font-bold ml-40 mb-5">{p.title}</h1>
      <div className="flex md:flex-row justify-between flex-col mx-40">
        <div className="w-[40%]">
          <img src={p.image} />
        </div>
        <div className="w-[30%]">
          <p>{p.description}</p>
          <p className="font-bold text-xl">${p.price}</p>
          <div className="flex py-5 gap-5">
            <button className="bg-lime-600 text-white p-3 rounded-2xl">
              Get Item
            </button>
            <button className="bg-lime-600 text-white p-3 rounded-2xl">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardPage;
