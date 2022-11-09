import React from "react";
import BannerTop from "../../../assits/background-burgers-home-top.jpg";

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen" style={{ backgroundImage: `url(${BannerTop})` }} >
        <div className="">
            <h4 className="text-3xl text-white bg-regal-red font-bold p-3 lg:w-3/5">BEST BURGERS IN GALAXY</h4>
          <h1 className="mb-5 text-8xl text-white font-bold">BEST BURGERS <br /> IN GALAXY</h1>
            <button className="p-5 text-white bg-regal-red rounded-md hover:bg-slate-900 hover:text-regal-red hover:border-2 hover:border-regal-red focus:outline-none">OUR MENU</button>
            
         
        </div>
      </div>
    </div>
  );
};

export default Banner;
