import React from 'react';
import logo from '../assets/crowd.png';
import { IoLogoWhatsapp} from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className=''>
            <footer className="footer bg-[#1B3D2F] text-[#ECF0F1] p-10">
                <nav>
                    <h6 className="footer-title">Contact Information</h6>
                    <a className="link link-hover flex items-center"><IoLogoWhatsapp className='text-white text-xl mr-1' />
                    +8801786141015</a>
                    <a className="link link-hover flex items-center "><MdEmail className='text-xl text-white mr-1'/>
                    crowdcube@gmail.com</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Links</h6>
                    <Link to='/home' className="link link-hover">Home</Link>
                    <Link to='/allcampaign' className="link link-hover">All Campaign</Link>
                    <Link to='/addCampaign' className="link link-hover">Add New Campaign</Link>
                    <Link to='/myCampaign/:email' className="link link-hover">My Campaign</Link>
                    <Link to='/donation' className="link link-hover">My Donations</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                
                </footer>
                <footer className="footer bg-[#0F241F] text-[#ECF0F1] border-base-300 border-t px-10 py-4">
                <aside className="grid-flow-col items-center">
                    <img src={logo} alt="" className='w-12'/>
                    <p>
                    CrowdCube
                    <br />
                    "Empowering Dreams, One Contribution at a Time."
                    </p>
                </aside>
                <p className='mt-6'>Copyright © 2024 - All right reserved by CrowdCube</p>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                    <a>
                    <FaSquareXTwitter className='text-2xl text-white'/>

                    </a>
                    <a>
                    <FaYoutube className='text-2xl text-white'/>

                    </a>
                    <a>
                    <FaFacebookSquare className='text-2xl text-white' />

                    </a>
                    </div>
                </nav>
                </footer>
        </div>
    );
};

export default Footer;