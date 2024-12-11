import React from "react";
import logo from '../assets/crowd.png';


const Guide = () => {
  return (
    <div className="relative bg-[#D9F7D0]">

      <img src="https://i.ibb.co.com/TPbLYX5/adult-having-lots-money.jpg" 
        className="absolute inset-0 w-full h-full object-cover opacity-60"/>

      <div className="relative flex flex-col items-center justify-center min-h-[300px] text-center">

        <img src={logo} className="w-8 md:w-16" />
        <p className="text-sm font-medium text-rose-800 mb-2">Get Our Complete</p>
        <h1 className="text-xl md:text-4xl font-bold text-[#1B3D2F]">CrowdCube funding Guide</h1>

        {/* Input Form */}
        <form className="mt-6 flex flex-col sm:flex-row items-center">
          <input type="email" id="email" placeholder="Enter your email" className="w-full sm:w-auto px-4 py-2 mb-4 sm:mb-0 sm:mr-2 rounded-md border-none focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-600"/>
          
          <button className="border-none text-xs  md:text-base bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 focus:ring-2 focus:ring-white">
            SUBSCRIBE</button>
            
        </form>
      </div>
    </div>
  );
};

export default Guide;
