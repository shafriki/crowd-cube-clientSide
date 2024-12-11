import React from "react";
import { FaBookmark } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const Platform = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-10 max-w-screen-xl md:mx-auto items-center p-6 lg:p-12 bg-gray-100 mx-3">
      {/* img section */}
      <div className="w-full lg:w-2/5">
        <Fade cascade damping={0.1}>
          <h2 className="text-base md:text-2xl font-bold text-teal-500 mb-6">
            We’re trusted by more than 3500 clients
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://i.ibb.co.com/RjQV6xs/vecteezy-stethoscope-on-coin-stack-on-white-background-money-for-9565524.jpg"
              className="w-full h-32 md:h-48 object-cover rounded-lg"
            />
            <img
              src="https://i.ibb.co.com/wN0cKwP/vecteezy-feeling-confident-in-their-future-four-college-graduates-in-13582443.jpg"
              className="w-full h-32 md:h-48 object-cover rounded-lg"
            />
            <img
              src="https://i.ibb.co.com/q7jJ13Z/vecteezy-professionals-in-a-meeting-working-on-laptops-1914082.jpg"
              className="w-full h-32 md:h-48 object-cover rounded-lg"
            />
            <img
              src="https://i.ibb.co.com/TPbLYX5/adult-having-lots-money.jpg"
              className="w-full h-32 md:h-48 object-cover rounded-lg"
            />
          </div>
        </Fade>
      </div>

      {/* text section */}
      <div className="w-full lg:w-3/5 text-left">
        <Fade cascade damping={0.1}>
          <p className="text-sm text-teal-500 mb-4">Businesses You Can Back</p>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-5 md:mb-12">
            Why Choose CrowdCube Platform
          </h1>

          <div className="flex items-start mb-8">
            <div className="text-teal-500 text-xl mr-4">
              <FaBookmark />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Highest Success Rates</h3>
              <p className="text-sm text-gray-600 mt-2">
                With proven investment strategies, Crowdcube offers entrepreneurs and
                visionaries the highest success rates, empowering growth.
              </p>
            </div>
          </div>

          <div className="flex items-start mb-8">
            <div className="text-teal-500 text-xl mr-4">
              <FaBookmark />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Millions in Funding</h3>
              <p className="text-sm text-gray-600 mt-2">
                Crowdcube provides millions in funding, empowering startups to grow,
                innovate, and achieve their entrepreneurial milestones successfully.
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Platform;
