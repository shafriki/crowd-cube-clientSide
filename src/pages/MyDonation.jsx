import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const MyDonation = () => {
    const { user } = useContext(AuthContext); 
    const [donations, setDonations] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        document.title = "My Donations | CrowdCube";

        const fetchDonations = async () => {
            try {
                if (!user?.email) return;

                const response = await fetch(`https://crowd-cube-server-one.vercel.app/donations?email=${user.email}`);
                const data = await response.json();

                if (response.ok) {
                    setDonations(data);
                } else {
                    console.error(data.error);
                }
            } catch (error) {
                console.error('Error fetching donations:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchDonations();
    }, [user]);

    return (
        <div className="container mx-auto my-10">
            <h1 className="text-2xl font-bold mb-6 text-center">My Donations</h1>

            {loading ? (
                <p>Loading your donations...</p>
            ) : donations.length === 0 ? (
                <p>You have not made any donations yet.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-screen-xl md:mx-auto mx-3">
                    {donations.map((donation) => (
                        <div key={donation._id} className="bg-[#D9F7D0] text-center shadow-md rounded-lg p-6 border border-gray-200">
                            
                            <h2 className="text-xl font-semibold">{donation.campaignTitle}</h2>

                            <p className="text-gray-600 mt-2"><strong>Donor:</strong> {donation.donorName}</p>

                            <p className="text-gray-600"><strong>Donation Date:</strong> {new Date(donation.donationDate || Date.now()).toLocaleDateString()}</p>
                            
                            <p className="text-gray-600"><strong>Email:</strong> {donation.donorEmail}</p>
                            
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyDonation;
