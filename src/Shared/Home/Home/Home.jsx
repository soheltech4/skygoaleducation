import React from 'react';
import Banner from '../Banner/Banner';
import Adventure from '../Adventure/Adventure';
import Discount from '../Discount/Discount';
import Testimonials from '../Testimonials/Testimonials';
import Special from '../Special/Special';
import Destination from '../Destination/Destination';
import BookNow from '../BookNow/BookNow';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Adventure></Adventure>
            <Destination></Destination>
            <Discount></Discount>
            <BookNow></BookNow>
            <Testimonials></Testimonials>
            <Special></Special>
        </div>
    );
};

export default Home;