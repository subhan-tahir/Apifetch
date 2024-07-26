import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
const Navbar1 = () => {
  let [open,setOpen] = useState(false);
  return (
    <>
      <nav className="bg-white md:flex fixed w-full md:justify-center md:items-center shadow-2xl sm:h-24 h-24 border-b-2 border-indigo-200 border-b-black">
        <h1 className="text-gray-700 text-4xl sm:m-6 sm:1/2 font-bold text-center p-2 w-1/2 ">
          API-fetchData
        </h1>
        <ul className={`sm:w-1/2 pt-7 sm:flex sm:justify-center sm:items-center sm:bg-transparent sm:flex-row 
         gap-6 text-2xl font-semibold  flex flex-col w-full text-center absolute  md:static md:z-auto md:pl-0 pl-9 pb-5 bg-white left-0 transition-all ease-in duration-700 md:w-full my-12 ${open ? 'top-12' : 'top-[-470px]'}`}>
          <li className="hover:text-[#2121d4] transition cursor-pointer ">
            Home
          </li>
          <li className="hover:text-[#2121d4] transition cursor-pointer">
            About
          </li>
          <li className="hover:text-[#2121d4] transition cursor-pointer">
            Services
          </li>
          <li className="hover:text-[#2121d4] transition cursor-pointer">
            Contact
          </li>
        </ul>
        <div onClick={()=> setOpen(!open)} className="cursor-pointer flex items-center text-4xl absolute top-0 
        right-0 m-2 md:hidden ">
          {
            open ?  <RxCross2 className="transition duration-700 ease-in-out text-2xl"/>: <FaBars className="transition duration-700 ease-in-out"/>
          }
        
        
        </div>
      </nav>
    </>
  );
};

export default Navbar1;
