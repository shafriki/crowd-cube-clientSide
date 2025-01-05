import React from "react";
import { Fade } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";
import History from "../components/History";

const AboutUs = () => {
  return (
    <div>
        <History></History>

<div className="flex flex-col lg:flex-row justify-between gap-10  md:mx-auto items-center p-6 lg:p-12 bg-gray-100 mx-3 my-10">
      
      {/* Image Content */}
      <div className="w-full lg:w-2/5">
        <Fade cascade damping={0.1}>
          <h2 className="text-base md:text-2xl font-bold text-[#1B3D2F] mb-6">
            Let’s Talk About CrowdCube Journey
          </h2>
          <div className="grid grid-cols-2 gap-1 md:gap-4">
            <img
              src="https://i.ibb.co.com/q7jJ13Z/vecteezy-professionals-in-a-meeting-working-on-laptops-1914082.jpg"
              alt="Journey Image 1"
              className="w-full h-32 md:h-48 object-cover rounded-lg"
            />
            <img
              src="https://i.ibb.co.com/wN0cKwP/vecteezy-feeling-confident-in-their-future-four-college-graduates-in-13582443.jpg"
              alt="Journey Image 2"
              className="w-full h-32 md:h-48 object-cover rounded-lg"
            />
            <img
              src="https://i.ibb.co.com/RjQV6xs/vecteezy-stethoscope-on-coin-stack-on-white-background-money-for-9565524.jpg"
              alt="Journey Image 3"
              className="w-full h-32 md:h-48 object-cover rounded-lg"
            />
            <img
              src="https://i.ibb.co.com/TPbLYX5/adult-having-lots-money.jpg"
              alt="Journey Image 4"
              className="w-full h-32 md:h-48 object-cover rounded-lg"
            />
          </div>
        </Fade>
      </div>

      {/* Text Content */}
      <div className="w-full lg:w-3/5 text-left">
        <Fade cascade damping={0.1}>
          <p className="text-sm text-[#228B22] mb-4">Crowd Cube</p>

          {/* Typewriter Effect */}
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-1">
            <Typewriter
              words={[
                "About ProtiDour",
                "About Our Mission",
                "About Our Vision",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h1>

          {/* Description */}
          <div className="flex flex-col items-start">
            <p className="text-xs text-justify text-gray-600 mt-2 md:text-base">
            Welcome to CrowdCube, your trusted crowdfunding platform! Join our community to fund personal, creative, or entrepreneurial dreams. With secure tools and user-friendly features, we’re here to help you connect with supporters and make ideas a reality.
            </p>
            <p className="text-xs text-justify text-gray-600 mt-5 md:text-base">
            CrowdCube empowers individuals to raise funds for medical needs, startups, or creative ventures. Built with React, Firebase, Tailwind, MongoDB, and Node Express, it ensures a secure, seamless experience for building communities and achieving goals.
            </p>

          </div>
        </Fade>
      </div>
    </div>
    </div>
  );
};
export default AboutUs;
