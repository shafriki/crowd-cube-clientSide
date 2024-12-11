import React, { useEffect } from 'react';
import Banner from '../components/Banner';
import Funding from '../components/Funding';
import Guide from '../components/Guide';
import Category from '../components/Category';
import Platform from '../components/Platform';
import { useLoaderData } from 'react-router-dom';
import RunningCampaign from '../components/RunningCampaign';

const Home = () => {

    const campaign = useLoaderData();
    // console.log(campaign)

    useEffect(() => {
        document.title = "Home | CrowdCube";
      }, []);

    return (
        <div>
            <Banner></Banner>
            <Funding></Funding>
            <RunningCampaign></RunningCampaign>
            <Platform></Platform>
            <Category></Category>
            <Guide></Guide>
        </div>
    );
};

export default Home;