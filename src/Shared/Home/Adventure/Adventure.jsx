import React from 'react';

const Adventure = () => {
    return (
        <div className='md:flex flex-row-reverse justify-between m-5 items-center md:m-40 '>
            <div className='mb-10'>
                <h1 className='md:text-6xl font-bold text-4xl'>Tropical Adventure</h1>
                <h1 className='text-4xl font-semibold my-3 gap-5'>for Students.</h1>
                <p className='text-2xl font-semibold my-3'>Student Tropical Vacation: Relax and Recharge</p>
                <div className='mt-5'>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Massa quis natoque sit quam</li>
                    <li>Eros non pellentesque elit </li>
                    <li>tortor id euismod habitant</li>
                    <li>Sed suspendisse id in ultrices</li>
                </div>
                <button className='btn mt-10 rounded-full px-10 uppercase bg-[#F27A44] text-white hover:bg-[#F27A44]'>Explore More</button>
            </div>
            <div>
                <div className='flex gap-4 justify-center items-center shadow-lg rounded-lg md:w-5/6 mb-10 p-2'>
                    <img src="OneDrive/Group 167.png" className='w-16' alt="" />
                    <div>
                        <h1 className='font-bold'>Jenny Wilson</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing...</p>
                    </div>
                </div>
                <div className='flex gap-4 justify-center items-center shadow-lg rounded-lg md:w-5/6 mb-10 p-2'>
                    <img src="OneDrive/Group 171.png" className='w-16' alt="" />
                    <div>
                        <h1 className='font-bold'>Jenny Wilson</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing...</p>
                    </div>
                </div>
                <div className='flex gap-4 justify-center items-center shadow-lg rounded-lg md:w-5/6 mb-10 p-2'>
                    <img src="OneDrive/Mask group.png" className='w-16' alt="" />
                    <div>
                        <h1 className='font-bold'>Jenny Wilson</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing...</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Adventure;