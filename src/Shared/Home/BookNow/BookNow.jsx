import React from 'react';

const BookNow = () => {
    return (
        <div className='md:flex justify-between md:px-52 p-3 mb-20 items-center'>
            <img src="OneDrive/Group 167.png" className='md:w-2/6 mb-10' alt="" />
            <div className='rounded-md p-5 shadow-xl md:w-1/3'>
                <h1 className='font-bold md:text-4xl text-3xl'>Book Now</h1>
                <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <div className='mt-5'>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text uppercase font-bold">City</span>
                        </div>
                        <input type="text" placeholder="Your City Name" className="input input-bordered w-full" />
                    </label>
                    <div className='grid grid-cols-2 gap-3'>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text uppercase font-bold">Arrival</span>
                            </div>
                            <input type="date" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text uppercase font-bold">Depurture</span>
                            </div>
                            <input type="date" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text uppercase font-bold">STAR</span>
                            </div>
                            <div className='flex justify-between bg-gray-300 items-center font-bold rounded-md'>
                                <button className='text-xl font-bold bg-gray-400 py-2 px-5 rounded-l-md'>-</button>
                                <p> 0 </p>
                                <button className='text-xl font-bold bg-gray-400 py-2 px-5 rounded-r-md'>+</button>
                            </div>
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text uppercase font-bold">ROOM</span>
                            </div>
                            <div className='flex justify-between bg-gray-300 items-center font-bold rounded-md'>
                                <button className='text-xl font-bold bg-gray-400 py-2 px-5 rounded-l-md'>-</button>
                                <p> 0 </p>
                                <button className='text-xl font-bold bg-gray-400 py-2 px-5 rounded-r-md'>+</button>
                            </div>
                        </label>
                    </div>
                </div>
                <button className='mt-10 bg-black p-3 text-white font-bold rounded-md'>BOOK NOW</button>
            </div>
        </div>
    );
};

export default BookNow;