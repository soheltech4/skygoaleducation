import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const nav = <>
        <>
            <Link to="/" className={`px-3 hover:font-bold hover:duration-5000 ${location.pathname === '/' ? 'active-link font-bold text-black' : ''}`}>Home</Link>
            <Link to="/" className={`px-3 hover:font-bold  hover:duration-5000 ${location.pathname === '/about' ? 'active-link font-bold  text-black' : ''}`}>About</Link>
            <Link to="/" className={`px-3 hover:font-bold  hover:duration-5000 ${location.pathname === '/schedules' ? 'active-link font-bold  text-black' : ''}`}>Schedules</Link>
            <Link to="/" className={`px-3 hover:font-bold hover:duration-5000 ${location.pathname === '/membership' ? 'active-link font-bold  text-black' : ''}`}>Membership</Link>
            <Link to="/" className={`px-3 hover:font-bold hover:duration-5000 ${location.pathname === '/pricing' ? 'active-link font-bold  text-black' : ''}`}>Pricing</Link>
        </>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {nav}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {nav}
                </ul>
            </div>
            <div className="navbar-end gap-6">
                <Link className="">Offers</Link>
                <a className="btn hover:bg-[#F27A44] rounded-full text-white bg-[#F27A44]">Courses</a>
            </div>
        </div>
    );
};

export default Header;