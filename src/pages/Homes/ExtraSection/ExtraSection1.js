import React from "react";
import img1 from "../../../assits/cell-background-burger-left-1.jpg";
import img2 from "../../../assits/cell-background-burger-left-2.jpg";
import img3 from "../../../assits/cell-background-burger-left-3.jpg";
import img4 from "../../../assits/cell-background-burger-right-1.jpg";
import img5 from "../../../assits/cell-background-burger-right-2.jpg";
import img6 from "../../../assits/cell-background-burger-right-3.jpg";

const ExtraSection1 = () => {
  return (
    <div className="grid grid-rows-1 lg:grid-cols-2 my-8 gap-2">
      <div
        className="hero h-96"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className="hero-overlay bg-opacity-10 "></div>
        <div className="hero-content  text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl w-3 font-bold">FARMHOUSE BURGER</h1>
            <p className="mb-5">
            ground chuck, green leaf lettuce, tomato, red onion, chipotle pepper sauce it with crisp lettuce, tomatoes, ketchup, barbecue sauce and anything else.
            </p>
            <h1 className="text-5xl font-bold">$13.99</h1>
            <button className="btn btn-outline border-2 text-white p-3 border-white hover:bg-regal-red mt-5">ORDER NOW</button>
          </div>
        </div>
      </div>
      <div
        className="hero h-96"
        style={{ backgroundImage: `url(${img2})` }}
      >
        <div className="hero-overlay bg-opacity-10 "></div>
        <div className="hero-content  text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl  font-bold">QUINOA & BLACK BEAN BURGER</h1>
            <p className="mb-5">
            ground chuck, green leaf lettuce, tomato, red onion, chipotle pepper sauce it with crisp lettuce, tomatoes, ketchup, barbecue sauce and anything else.
            </p>
            <h1 className="text-5xl font-bold">$13.99</h1>
            <button className="btn btn-outline border-2 text-white p-3 border-white hover:bg-regal-red mt-5">ORDER NOW</button>
          </div>
        </div>
      </div>
      <div
        className="hero h-96"
        style={{ backgroundImage: `url(${img3})` }}
      >
        <div className="hero-overlay bg-opacity-10 "></div>
        <div className="hero-content  text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl w-3 font-bold">CHOCOLATE MILKSHAKE</h1>
            <p className="mb-5">
            ground chuck, green leaf lettuce, tomato, red onion, chipotle pepper sauce it with crisp lettuce, tomatoes, ketchup, barbecue sauce and anything else.
            </p>
            <h1 className="text-5xl font-bold">$13.99</h1>
            <button className="btn btn-outline border-2 text-white p-3 border-white hover:bg-regal-red mt-5">ORDER NOW</button>
          </div>
        </div>
      </div>
      <div
        className="hero h-96"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className="hero-overlay bg-opacity-10 "></div>
        <div className="hero-content  text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl w-3 font-bold">STANDARD BURGER MEAL</h1>
            <p className="mb-5">
            ground chuck, green leaf lettuce, tomato, red onion, chipotle pepper sauce it with crisp lettuce, tomatoes, ketchup, barbecue sauce and anything else.
            </p>
            <h1 className="text-5xl font-bold">$13.99</h1>
            <button className="btn btn-outline border-2 text-white p-3 border-white hover:bg-regal-red mt-5">ORDER NOW</button>
          </div>
        </div>
      </div>
      <div
        className="hero h-96"
        style={{ backgroundImage: `url(${img5})` }}
      >
        <div className="hero-overlay bg-opacity-10 "></div>
        <div className="hero-content  text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl w-3 font-bold">CHECKOUT CATERING MENU</h1>
            <p className="mb-5">
            ground chuck, green leaf lettuce, tomato, red onion, chipotle pepper sauce it with crisp lettuce, tomatoes, ketchup, barbecue sauce and anything else.
            </p>
            <h1 className="text-5xl font-bold">$13.99</h1>
            <button className="btn btn-outline border-2 text-white p-3 border-white hover:bg-regal-red mt-5">ORDER NOW</button>
          </div>
        </div>
      </div>
      <div
        className="hero h-96"
        style={{ backgroundImage: `url(${img6})` }}
      >
        <div className="hero-overlay bg-opacity-10 "></div>
        <div className="hero-content  text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold"> A PERFECT BURGER</h1>
            <p className="mb-5">
            ground chuck, green leaf lettuce, tomato, red onion, chipotle pepper sauce it with crisp lettuce, tomatoes, ketchup, barbecue sauce and anything else.
            </p>
            <h1 className="text-5xl font-bold">$13.99</h1>
            <button className="btn btn-outline border-2 text-white p-3 border-white hover:bg-regal-red mt-5">ORDER NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection1;
