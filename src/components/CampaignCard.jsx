import { Link } from "react-router-dom";
import { MdCampaign } from "react-icons/md";
import { IoTimer } from "react-icons/io5";
import { Fade } from "react-awesome-reveal";  // Import the Fade component

const CampaignCard = ({ campaign }) => {
  const { _id, image, title, campaignType, deadline, 
    minDonation } = campaign;

  return (
    <Fade>  {/* Wrap the content with Fade effect */}
      <div className="flex flex-col md:flex-row border border-gray-300 rounded-lg shadow-md overflow-hidden mx-4 md:mx-0 gap-5 bg-[#D9F7D0]">
        {/* image content */}
        <div className="w-full md:w-1/2 h-40 md:h-auto">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>

        {/* info content */}
        <div className="w-full md:w-2/3 p-4">
          <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>

          <p className="text-sm text-gray-500 mb-1 flex items-center">
            <MdCampaign className="mr-1 font-bold text-xl" />
            <span className="font-semibold">Campaign Type:</span> {campaignType}
          </p>

          <p className="text-sm text-gray-500 mb-1 flex items-center">
            <IoTimer className="mr-1 font-bold text-xl" />
            <span className="font-semibold">Deadline:</span> {deadline}
          </p>

          <p className="text-sm text-gray-500 mb-1 flex items-center">
            <IoTimer className="mr-1 font-bold text-xl" />
            <span className="font-semibold">Minimum Donation:</span> {minDonation}
          </p>

          <Link to={`/details/${_id}`} className="btn px-10 bg-[#397f62] text-white border-none hover:bg-[#1B3D2F] my-4">
            See More
          </Link>
        </div>
      </div>
    </Fade> 
  );
};

export default CampaignCard;
