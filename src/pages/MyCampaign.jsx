import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";
import { FaPenAlt } from "react-icons/fa";
import { RiDeleteBin2Fill } from "react-icons/ri";

const MyCampaign = () => {
    useEffect(() => {
        document.title = "My Campaign | CrowdCube";
    }, []);

    const { user } = useContext(AuthContext);
    const [campaigns, setCampaigns] = useState([]);

    useEffect(() => {
        if (user?.email) {
            // Fetch campaigns related to the logged-in user
            fetch(`https://crowd-cube-server-one.vercel.app/campaign/email/${user.email}`)
                .then(res => res.json())
                .then(data => setCampaigns(data))
                .catch(err => console.error('Error fetching campaigns:', err));
        }
    }, [user]);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://crowd-cube-server-one.vercel.app/campaign/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.message === 'Campaign deleted successfully.' || data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Campaign has been deleted.",
                                icon: "success"
                            });
                            // Update the state to reflect the deletion instantly
                            setCampaigns(campaigns.filter(campaign => campaign._id !== id));
                        } else {
                            Swal.fire({
                                title: "Error!",
                                text: "Failed to delete campaign.",
                                icon: "error"
                            });
                        }
                    })
                    .catch(err => {
                        console.error('Error deleting campaign:', err);
                        Swal.fire({
                            title: "Error!",
                            text: "Something went wrong while deleting.",
                            icon: "error"
                        });
                    });
            }
        });
    };

    return (
        <div className='mb-10'>
            <h2 className="text-2xl md:text-4xl text-center mt-8 font-bold">My Campaign List</h2>
            <div className="overflow-x-auto px-5">
                {campaigns.length === 0 ? (
                    <p className="text-center mt-4">No campaigns added yet.</p>
                ) : (
                    <table className="table bg-green-50 mt-5">
                        <thead>
                            <tr className="font-bold text-black text-xs md:text-lg">
                                <th>Index No.</th>
                                <th>Campaign Title</th>
                                <th>Deadline</th>
                                <th>Campaign Type</th>
                                <th>Minimum Donation</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {campaigns.map((campaign, index) => (
                                <tr key={campaign._id} className='text-xs md:text-base'>
                                    <th>{index + 1}</th> {/* Dynamically incrementing index */}
                                    <td>{campaign.title}</td>
                                    <td>{campaign.deadline}</td>
                                    <td>{campaign.campaignType}</td>
                                    <td>{campaign.minDonation}</td>
                                    <td>
                                        <Link to={`/update/${campaign._id}`}>
                                            <button className="btn text-xs md:text-base bg-green-500 text-white">
                                                <FaPenAlt />
                                                Update
                                            </button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(campaign._id)} className="btn btn-error text-xs md:text-base text-white">
                                            <RiDeleteBin2Fill />
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default MyCampaign;
