import React from 'react';
import { FaEllipsis } from "react-icons/fa6";

const ShowUniversity = ({ item }) => {
    const { name, location, rating, image_url, Exclusive } = item

    return (
        <div className="rounded-3xl justify-center items-center w-96 border-2 bg-base-100">
            <figure className="">
                <img src={image_url} alt="University" className="rounded-xl w-fit gap-20" />
            </figure>
            <div className="text-center p-3">
                <h2 className="card-title ">{name}</h2>
                <div className="flex justify-between items-center">
                    <p>{location}</p>
                    <button className="btn bg-gray-200 rounded-full"><FaEllipsis /></button>
                </div>
            </div>
        </div>
    );
};

export default ShowUniversity;