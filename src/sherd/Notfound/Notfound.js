import React from 'react';
import error from '../../assits/img.jpg'

const Notfound = () => {
    return (
        <div>
            <div>
            <h2 className='text-primary text-center'>Burger is Not Found</h2>
            <img className='w-full h-full' src={error} alt="" />
        </div> 
        </div>
    );
};

export default Notfound;