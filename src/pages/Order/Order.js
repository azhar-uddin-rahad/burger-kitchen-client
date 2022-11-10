import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Order = () => {
    const {user,logOut}=useContext(AuthContext);
    const [orders,setOrders]=useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/orders?email=${user?.email}`,{
            headers:{
                authorization: `Bearer ${localStorage.getItem('geniusToken')}`
            }
        })
        .then(res =>{
            if(res.status ===401 || res.status === 403){
                logOut()
            }
           return res.json()
            })
        .then(data => setOrders(data))


    },[user?.email])
    const handleDelete= id => {
        const proceed = window.confirm("Are you Delete this Items");
        if(proceed){
            fetch(`http://localhost:5000/orders/${id}`,{
                method: 'DELETE',
                headers:{
                    authorization: `Bearer ${localStorage.getItem('geniusToken')}`
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    alert('deleted successFully')
                    const remaining= orders.filter(odr => odr._id !== id);
                    setOrders(remaining)
                }
            })
        }
    }
    const handleStatusUpdate=id=>{
        console.log(id);
        fetch(`http://localhost:5000/orders/${id}`,{
            method: 'PATCH',
            headers:{
                'content-type' : 'application/json',
                authorization: `Bearer ${localStorage.getItem('geniusToken')}`
            },
            body: JSON.stringify({status:'Approved'})
            
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){

                const remaining=orders.filter(odr => odr._id !== id)//1245
                const approving=orders.find(odr => odr._id === id)//3
                approving.status='Approved';
                const newOrders= [...remaining,approving];
                setOrders(newOrders);

            }
        })

    }
    return (
        <div>
        <h2 className='text-5xl'> You have {orders.length}</h2> 

        <div className="overflow-x-auto w-full">
 <table className="table w-full">
  
   <thead>
     <tr>
       <th>
         <label>
           <input type="checkbox" className="checkbox" />
         </label>
       </th>
       <th>Name</th>
       <th>Job</th>
       <th>Favorite Color</th>
       <th></th>
     </tr>
   </thead>
   <tbody>
   
   {
   orders.map(order => <OrderRow key={order._id} order={order} handleDelete={handleDelete} handleStatusUpdate={handleStatusUpdate}></OrderRow>)
  }
    
   </tbody>
  
  
   
 </table>
</div>
</div>
    );
};

export default Order;