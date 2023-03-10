import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const OrderRow = ({order,handleDelete,handleStatusUpdate}) => {
    const {_id,serviceName,price,phone,customer,service, status}=order;

    const [orderServices,setOrderServices]= useState([])
    useEffect(()=>{
        fetch(`https://berger-food-kitchen-server.vercel.app/services/${service}`)
        .then(res => res.json())
        .then(data => setOrderServices(data))
    },[service])

  
    return (
        <tr>
        <th>
          <label>
            <button onClick={() => handleDelete(_id)} className='btn btn-ghost'> X</button>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-24 h-24">
               {
                orderServices?.img && 
                <img src={orderServices.img} alt="Avatar Tailwind CSS Component" />
               }
              </div>
            </div>
            <div>
              <div className="font-bold">{customer}</div>
              <div className="text-sm opacity-50">{phone}</div>
            </div>
          </div>
        </td>
        <td>
         {serviceName}
          <br/>
          <span className="badge badge-ghost badge-sm">{price}</span>
        </td>
        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-xs" 
          onClick={() => handleStatusUpdate(_id)}
          >{status? status : 'pending'}</button>
        </th>
        <td>-</td>
        <th>
          <Link to={`/update/${_id}`}><button className="btn btn-ghost btn-xs" 
          onClick={() => (_id)}
          >Update</button></Link>
        </th>
      </tr>
        
    );
};

export default OrderRow;