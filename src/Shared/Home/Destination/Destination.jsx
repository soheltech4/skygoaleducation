import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShowUniversity from './ShowUniversity';

const Destination = () => {

const [University, setUniversity] = useState([]) 

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
};

    useEffect(()=>{
        fetch('destination.json')
            .then(res => res.json())
            .then(data => setUniversity(data))
    },[])

    return (
        <div className='md:px-56 md:pt-24 md:pb-24 py-10 my-5 px-3 justify-center gap-2 '>
            <p className='text-5xl font-semibold '>Our Destinations</p>
            <Slider className='justify-center items-center p-5' {...settings}>
            {University.map((item, index) => <ShowUniversity item={item} key={index}></ShowUniversity>)}
            </Slider>
        </div>
    );
};

export default Destination;