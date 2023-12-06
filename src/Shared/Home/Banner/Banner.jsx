import React from 'react';

const Banner = () => {
    return (
        <div className='bg-[#FDFBF4] md:flex justify-between items-center md:px-20 px-10 '>
            <div className='md:w-1/2'>
                <p className='text-3xl'>Discover the beauty of the tropics</p>
                <h1 className='md:text-8xl text-6xl'> <span className='font-bold'>Tropical <br/> Destinations</span> <br /> <span>For Student</span></h1>
                <p className='text-xl'>Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi bibendum integer rutrum nisi. A nec nisl vitae </p>
            </div>
            <img src="https://i.ibb.co/C8mBmyX/Group-171.png" className='md:w-2/6' alt="" />
        </div>
    );
};

export default Banner;