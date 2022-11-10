import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

const ServicesCard = ({ service }) => {
  const { _id, img, description, price, title } = service;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl h-full ">
        <figure>
         <PhotoProvider>
          <PhotoView src={img}>
          <img src={img} alt="" />
          </PhotoView>
         </PhotoProvider>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="card-actions justify-end">
            <p className="text-2xl">
              Price:
              {description.length > 100 ? (
                <>
                  {description.slice(0, 250) + "..."}{" "}
                  <Link to={`/servicedetails/${_id}`}>Read More</Link>
                </>
              ) : (
                <>{description}</>
              )}
            </p>

            <p className="text-orange-400 font-bold">Price:{price}</p>
            <Link to={`/servicedetails/${_id}`} className="text-2xl">
              {" "}
              <FaArrowRight></FaArrowRight>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
