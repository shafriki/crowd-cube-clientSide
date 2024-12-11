import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom'; 
import Swal from 'sweetalert2';

const UpdateCampaign = () => {
    const campaigns = useLoaderData();
    const navigate = useNavigate(); 
    const { _id, image, title, campaignType, description, minDonation, deadline, userEmail, userName } = campaigns;

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;

        const image = form.image.value;
        const title = form.title.value;
        const campaignType = form.campaignType.value;
        const description = form.description.value;
        const minDonation = form.minDonation.value;
        const deadline = form.deadline.value;
        const userEmail = form.userEmail.value;
        const userName = form.userName.value;

        const updatedCampaign = { image, title, campaignType, description, minDonation, deadline, userEmail, userName };

        // Send updated data to the server
        fetch(`https://crowd-cube-server-one.vercel.app/campaign/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedCampaign),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log('Server Response:', data);
                if (data.result?.modifiedCount > 0) { 
                    Swal.fire({
                        title: 'Success!',
                        text: 'Campaign updated successfully.',
                        icon: 'success',
                        confirmButtonText: 'OK',
                    }).then(() => {
                        navigate(`/myCampaign/${userEmail}`);
                    });
                    form.reset(); 
                } else {
                    Swal.fire({
                        title: 'No Changes Detected',
                        text: 'No updates were made to the campaign.',
                        icon: 'info',
                        confirmButtonText: 'OK',
                    });
                }
            })
            .catch((error) => {
                console.error('Update Error:', error);
                Swal.fire({
                    title: 'Error!',
                    text: 'Failed to update the campaign. Please try again.',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
            });
    };

    return (
        <div className="max-w-4xl md:mx-auto mx-3">
            <h2 className="text-2xl md:text-4xl text-center font-bold my-4">Update Campaign: {title}</h2>

            <div className="bg-green-100 p-4 md:px-24 md:py-10 rounded-xl shadow-lg mb-10">
                <form onSubmit={handleUpdate}>

                    <div className="md:flex mb-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Campaign Title</span>
                            </label>
                            <input type="text" defaultValue={title} name="title"
                            placeholder="Campaign Title" className="input input-bordered w-full" required/>
                        </div>

                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>

                            <input type="text" defaultValue={image} name="image" placeholder="Image URL" className="input input-bordered w-full" required />
                        </div>
                    </div>

                    
                    <div className="md:flex mb-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Campaign Type</span>
                            </label>

                            <select name="campaignType" defaultValue={campaignType} className="select select-bordered w-full">

                                <option disabled>Select Campaign Type</option>
                                <option>Personal Issue</option>
                                <option>Startup</option>
                                <option>Business</option>
                                <option>Creative Ideas</option>
                            </select>

                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text">Minimum Donation</span>
                            </label>
                            <input type="number" defaultValue={minDonation} name="minDonation" placeholder="Minimum Donation" className="input input-bordered w-full" required />
                        </div>
                    </div>

                    
                    <div className="mb-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Deadline</span>
                            </label>
                            <input type="date" defaultValue={deadline} name="deadline" className="input input-bordered w-full" required />
                        </div>
                    </div>

                    
                    <div className="md:flex mb-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input readOnly type="text" defaultValue={userName} name="userName" placeholder="User Name" className="input input-bordered w-full" required />
                        </div>

                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text">User Email</span>
                            </label>
                            <input readOnly type="email" defaultValue={userEmail} name="userEmail" placeholder="User Email" className="input input-bordered w-full" required />
                        </div>
                    </div>
                  
                    <div className="mb-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea name="description" defaultValue={description}
                            placeholder="Campaign Description" className="textarea textarea-bordered w-full" rows="4" required />
                        </div>
                    </div>

                    <input className="btn btn-block bg-green-600 hover:bg-green-700 text-white"
                    type="submit" value="Update Campaign"/>
                </form>
            </div>
        </div>
    );
};

export default UpdateCampaign;
