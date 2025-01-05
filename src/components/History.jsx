import React from 'react';
import { Parallax } from 'react-parallax';

const History = () => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={'https://i.ibb.co/rkqHFqF/b-3.png'}
            bgImageAlt="Background Image"
            strength={-200}
        >
            <div className="relative flex flex-col py-20 md:py-32 bg-cover bg-center">
                <div className="absolute inset-0 bg-black opacity-10"></div>
                <div className="relative z-10 text-center text-white px-2 md:px-10">
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">About Us</h1>
                    <p className="text-base md:text-xl font-semibold mb-4">Why Choose CrowdCube Platform</p>
                </div>
            </div>
        </Parallax>
    );
};

export default History;
