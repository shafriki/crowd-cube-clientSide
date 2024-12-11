import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import CampaignCard from "../components/CampaignCard";
import { IoMdArrowDropdown } from "react-icons/io";

const AllCampaign = () => {
    const campaigns = useLoaderData();
    const [sortedCampaigns, setSortedCampaigns] = useState(campaigns);

    useEffect(() => {
        document.title = "All Campaign | CrowdCube";
    }, []);

    // sort by min don
    const sortByMinDonation = () => {
        const sorted = [...campaigns].sort((a, b) => a.minDonation - b.minDonation);
        setSortedCampaigns(sorted);
    };

    return (
        <div className="max-w-screen-xl mx-auto mb-10 md:mb-20">
            <h1 className="text-center text-[#1B3D2F] text-2xl md:text-4xl font-bold my-7">All Campaigns</h1>
            
            {/* Dropdown Menu */}
            <div className="text-center mb-6">
                <div className="dropdown dropdown-bottom">
                    <div tabIndex={0} role="button" className="btn bg-[#3c8567] hover:bg-[#1B3D2F] text-white px-4 py-2 rounded-lg flex items-center gap-2" >
                    <IoMdArrowDropdown />Sort By
                    </div>

                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li className="text-[#1B3D2F] font-semibold"
                            onClick={sortByMinDonation}>
                            <a>Minimum Donation</a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Campaign Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                {sortedCampaigns.map((campaign) => (
                    <CampaignCard key={campaign._id} campaign={campaign} />
                ))}
            </div>
        </div>
    );
};

export default AllCampaign;
