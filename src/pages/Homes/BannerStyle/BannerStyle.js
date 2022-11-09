import React from 'react';
import img1 from "../../../assits/burger_illustration_1.png";
import img2 from "../../../assits/burger_illustration_2.png";
import img3 from "../../../assits/burger_illustration_3.png";
import img4 from "../../../assits/burger_illustration_4.png";

const BannerStyle = () => {
    return (
        <div className='bg-regal-red grid  md:grid-cols-2 justify-items-center lg:grid-cols-4 p-4 lg:gap-4  '>
            <div className=''>
                <img src={img1} alt="" />
                <h1>GRILL`D BURGERS</h1>
                <p>Beetroot water spinach okra water <br />
                    chestnut ricebean pea.</p>
            </div>
            <div>
                <img src={img2} alt="" />
                <h1>GRILL`D BURGERS</h1>
                <p>Beetroot water spinach okra  <br />
                 water chestnut ricebean pea.</p>
            </div>
            <div>
                 <img src={img3} alt="" />
                <h1>GRILL`D BURGERS</h1>
                <p>Beetroot water spinach okra <br /> water chestnut ricebean pea.</p>
            </div>
            <div>
                 <img src={img4} alt="" />
                <h1>GRILL`D BURGERS</h1>
                <p>Beetroot water spinach okra <br /> water chestnut ricebean pea.</p>
            </div>
        </div>
    );
};

export default BannerStyle;