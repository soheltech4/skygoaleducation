import React from 'react';

const Testimonials = () => {
    return (
        <div className='md:px-32'>
            <h1 className='text-5xl text-center mb-10 font-semibold'>Testimonials</h1>
            <div className='md:flex gap-36 p-10'>
                <div className='text-center mb-3'>
                    <img src="https://i.ibb.co/DYDSq8T/Rectangle-27.png" className='mx-auto w-28 my-3' alt="" />
                    <h1 className='mb-3 font-bold'>Corey Korsgaard</h1>
                    <div className="divider mx-auto w-2/5"></div>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                <div className='text-center mb-3'>
                    <img src="https://i.ibb.co/2N1M11Q/Rectangle-26.png" className='mx-auto w-28 my-3' alt="" />
                    <h1 className='mb-3 font-bold'>Jakob Aminoff</h1>
                    <div className="divider mx-auto w-2/5"></div>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                <div className='text-center mb-3'>
                    <img src="https://i.ibb.co/k1bkjLJ/Rectangle-25.png" className='mx-auto w-28 my-3' alt="" />
                    <h1 className='mb-3 font-bold'>Carla Press</h1>
                    <div className="divider mx-auto w-2/5"></div>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
            </div>
            
        </div>
    );
};

export default Testimonials;