import React from 'react';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

const Funding = () => {
    return (
        <div className="relative bg-[#D9F7D0] text-white mx-3 max-w-screen-xl md:mx-auto my-14 flex flex-col-reverse md:flex-row items-center justify-between shadow-xl">

            {/* text section */}
            <div className="relative max-w-7xl mx-auto py-5 md:py-16 px-6 text-left">

                <h1 className="font-bold text-[#1B3D2F] text-lg md:text-4xl mt-2 md:mt-4">
                    <Typewriter words={['Empower Your Vision with CrowdCube','Fueling Dreams Through Collective Support', 'Crowd Funding for Every Idea']} loop={0} cursor cursorStyle="_" typeSpeed={100} deleteSpeed={50} delaySpeed={1500}/>
                </h1>

                <p className="mt-2 text-gray-700 md:mt-6 text-xs md:text-base text-justify leading-relaxed max-w-3xl">
                CrowdCubeis a crowdfunding platform enabling individuals, creatives, and startups to raise funds for personal needs, projects, and ideas through community-driven financial support.
                </p>

                <Link to="/allcampaign" className="btn border-none mt-8 px-6 py-3 bg-green-700 text-white font-semibold text-xs md:text-lg rounded hover:bg-green-900 transition duration-300">All Campaign</Link>
            </div>

            {/* image content */}
            <div className="w-56 md:w-96 h-full md:mr-16 pt-5 md:pt-0">
                <img src="https://i.ibb.co.com/YWBB796/fund.png" className="w-full h-full object-cover"/>
            </div>
        </div>
    );
};

export default Funding;
