import React from 'react';

const Discount = () => {
    return (
        <div className='md:flex md:flex-row-reverse justify-between items-center md:px-32 p-10'>
            <img src="OneDrive/Mask group.png" className='md:w-2/6 mb-10' alt="" />
            <div className='md:w-5/6'>
                <p className='text-xl'>Get 20% off for student</p>
                <p className='md:text-5xl font-bold text-3xl'>Student discounts available.</p>
                <p className='text-2xl mt-3'>Get ready for some fun in the sun!</p>
                <div className='mt-5'>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Massa quis natoque sit quam</li>
                    <li>Eros non pellentesque elit </li>
                    <li>tortor id euismod habitant</li>
                    <li>Sed suspendisse id in ultrices</li>
                </div>
                <button className='btn mt-5 rounded-full px-10 bg-[#F27A44] text-white hover:bg-[#F27A44]'>SIGN UP</button>
            </div>

        </div>
    );
};

export default Discount;