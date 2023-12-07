import React from 'react';
import Banner from '../Banner/Banner';
import Adventure from '../Adventure/Adventure';
import Discount from '../Discount/Discount';
import Testimonials from '../Testimonials/Testimonials';
import Special from '../Special/Special';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Adventure></Adventure>
            <Discount></Discount>
            <Testimonials></Testimonials>
            <Special></Special>
        </div>
    );
};

export default Home;