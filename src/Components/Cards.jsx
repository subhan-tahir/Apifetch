import React, { useEffect, useState } from "react";
import image from '../assets/react.svg'
import axios from "axios";

const Cards = () => {
  let [data, setData] = useState([]);
  let fetchData = async () => {
    let responce = await axios.get("https://api.escuelajs.co/api/v1/products");
    
    let getData = responce.data;
    setData(getData);
    // .then((res)=>{
    //   console.log(res.data);
    // }).catch((error)=>{
    //   console.log(error);
    // })
  };
  useEffect(()=>{
    fetchData();
  })
    
 
  return (
    <>
      <div className="flex flex-wrap bg-slate-400  justify-center items-center p-4 h-auto">
        {data.map((value, index) => {
          return (
            <div
              key={value.data}
              className="cursor-pointer hover:bg-black hover:text-white hover:shadow-4xl 
              hover:-translate-y-1 transition  border rounded   p-4 flex items-center justify-center 
              flex-col mx-4 my-2 w-[80%] md:w-64"
            >
              <img src={image} alt="" className="w-full p-4" />
              <div className="p-2 leading-8">
                <h3 className="font-bold text-[20px]">{value.title.slice(0,25)}</h3>
                <p className="text-[20px]">{"$" + value.price}</p>
                <p className="leading-7">{value.description.slice(0, 45)}</p>
                <button>Click</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
