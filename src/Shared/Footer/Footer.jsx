import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer flex md:justify-center justify-between items-center container mx-auto mb-10">
            <nav className='md:flex'>
                <a className="link px-3 link-hover">Privacy Policy</a>
                <a className="link px-3 link-hover">Terms of Use</a>
                <a className="link px-3 link-hover">Sales and Refunds</a>
                <a className="link px-3 link-hover">Legal</a>
            </nav>
            <nav className="md:flex font-bold">
                <Link to="/" className={`px-3 hover:font-bold  hover:duration-5000 ${location.pathname === '/about' ? 'active-link font-bold  text-black' : ''}`}>About</Link>
                <Link to="/" className={`px-3 hover:font-bold  hover:duration-5000 ${location.pathname === '/schedules' ? 'active-link font-bold  text-black' : ''}`}>Schedules</Link>
                <Link to="/" className={`px-3 hover:font-bold hover:duration-5000 ${location.pathname === '/membership' ? 'active-link font-bold  text-black' : ''}`}>Membership</Link>
                <Link to="/" className={`px-3 hover:font-bold hover:duration-5000 ${location.pathname === '/pricing' ? 'active-link font-bold  text-black' : ''}`}>Pricing</Link>
                <Link to="/" className={`px-3 hover:font-bold hover:duration-5000 ${location.pathname === '/joins' ? 'active-link font-bold  text-black' : ''}`}>Joins</Link>
            </nav>
        </footer>
    );
};

export default Footer;