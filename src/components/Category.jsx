import React from 'react';
import { FaLaptopCode } from "react-icons/fa";
import { IoVideocam } from "react-icons/io5";
import { FaBook } from "react-icons/fa";
import { FaBriefcaseMedical } from "react-icons/fa6";
import { GiClothes } from "react-icons/gi";
import { MdOutlineScreenshotMonitor } from "react-icons/md";
import { Fade } from 'react-awesome-reveal';

const Category = () => {
  return (
    <div className="bg-[#D9F7D0] text-white py-16 px-8 my-14 mx-3 max-w-screen-xl md:mx-auto shadow-xl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        {/* Left Section */}
        <div>
          <h4 className="text-sm font-medium text-black uppercase mb-2">Which Category Interests You</h4>

          <h2 className="text-4xl text-[#1B3D2F] font-bold mb-4">
            <Fade>Top Categories</Fade> 
          </h2>
          
          <p className="text-base text-[#1B3D2F] leading-relaxed mb-4">
            CrowdCube is a crowdfunding platform enabling individuals, creatives, and startups to raise funds for personal needs, projects, and ideas through community-driven financial support.
          </p>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: <FaLaptopCode />, label: 'Technology' },
            { icon: <IoVideocam />, label: 'Videos' },
            { icon: <FaBook />, label: 'Education' },
            { icon: <FaBriefcaseMedical />, label: 'Medical' },
            { icon: <GiClothes />, label: 'Fashion' },
            { icon: <MdOutlineScreenshotMonitor />, label: 'Design' },
          ].map((category, index) => (
            <Fade key={index} delay={index * 100}> 
              <div className="flex flex-col items-center justify-center border border-white bg-white text-black rounded-lg py-6 text-center hover:bg-rose-100 transition-all">
                <div className="text-4xl mb-2">{category.icon}</div>
                <h3 className="text-lg font-medium">{category.label}</h3>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
