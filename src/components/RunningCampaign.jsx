import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';  
import { CiCalendarDate } from "react-icons/ci";
import { IoTimer } from "react-icons/io5";


const RunningCampaign = () => {
    const campaigns = useLoaderData(); 
    const currentDate = new Date();

    const runningCampaigns = Array.isArray(campaigns)
        ? campaigns.filter(campaign => new Date(campaign.deadline) > currentDate)
        : [];

    return (
        <div className="container mx-auto p-4 max-w-screen-xl mb-14">
            <h1 className="text-center text-2xl md:text-4xl font-bold">Running Campaign</h1>
            {runningCampaigns.length > 0 ? (
                <div className="grid mt-8  md:mt-12 gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {runningCampaigns.slice(0, 6).map((campaign) => (
                        <Fade key={campaign._id} delay={300} triggerOnce>  
                            <div className="shadow-md rounded-lg overflow-hidden bg-[#e5f1e2]">

                                <div className="relative">
                                    <img src={campaign.image || "https://via.placeholder.com/400x200"} alt={campaign.title || "Campaign Image"} className="w-full h-48 object-cover" />
                                </div>

                                {/* Content Section */}
                                <div className="p-4">
                                    <h2 className="text-xl font-semibold mb-2">
                                        {campaign.title || "Campaign Title"}
                                    </h2>
                                    <p className="text-gray-700 text-sm mb-4">
                                        {campaign.description ? `${campaign.description.substring(0, 100)}...` : "No description available."}
                                    </p>
                                    <p className="text-gray-700 font-semibold  text-sm mb-4 flex items-center">
                                    <IoTimer className='font-bold text-rose-500 text-xl'/>
                                    <span className='text-rose-500 mr-2'>Deadline:</span> {campaign.deadline}
                                    </p>
                                    <p className="text-gray-700 font-semibold border-b-2  text-sm mb-4 flex items-center gap-1">
                                    <CiCalendarDate className='font-bold text-rose-500 text-xl'/>
                                    <span className='text-rose-500'>Minimum Donation:</span> {campaign.minDonation}
                                    </p>
                                    <div className="flex justify-between items-center">
                                        
                                        <Link to={`/details/${campaign._id}`} className="btn w-full  bg-rose-500  text-white font-semibold hover:bg-rose-700">See More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    ))}
                </div>
            ) : (
                <p>running campaign loading...</p>
            )}
        </div>
    );
};

export default RunningCampaign;
