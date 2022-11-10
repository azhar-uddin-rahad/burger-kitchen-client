import React from 'react';
import img1 from "../../../assits/burgertop.jpg"
import { BsAlarm } from "react-icons/bs";
import { FaMailBulk, FaMapMarkerAlt, FaPhone } from "react-icons/fa";


const ExtraSection2 = () => {
    return (
        <div>
    <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure className='md:w-full lg:w-3/5'><img src={img1} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title  text-5xl">Get In Touch</h2>
    <p className='text-3xl'><BsAlarm className='inline-block text-3xl text-regal-red'></BsAlarm> Mon. - Sun.: 10:00 - 23:00</p>
    <p className='text-3xl'><FaMapMarkerAlt className='inline-block text-3xl text-regal-red'></FaMapMarkerAlt> 164 7th Avenue, Seattle, WA 9801</p>
    <p className='text-3xl'><FaPhone className='inline-block text-3xl text-regal-red'></FaPhone>+1.888.292.7171</p>
    <p className='text-3xl'><FaMailBulk className='inline-block text-3xl text-regal-red'></FaMailBulk> burgerkitchen@gmail.com</p>

    <div className="card-actions justify-end">
      <button className="btn btn-primary">Find on Map</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default ExtraSection2;