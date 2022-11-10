import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServicesCard from './ServicesCard';

const Serviced = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/servicesHome')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
             <div className='text-center '>
                <p className='text-2xl text-orange-400'>Service</p>
                <h2 className='text-5xl font-semibold'>My Kitchen Catering Service</h2>
                <p > I make a world best Food in my kitchen. Please see my customer review before the order. </p>
            </div>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 py-8'>
                {
                    services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
                }
            </div>
            <div className='mx-20 text-center px-4 py-2  text-white  transform bg-regal-red rounded-md hover:bg-white hover:text-regal-red hover:border-2 hover:border-regal-red focus:outline-none'>
                <Link to='/services'>see all</Link>
            </div>
        </div>
    );
};

export default Serviced;