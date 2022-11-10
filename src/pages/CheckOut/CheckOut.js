import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';


const CheckOut = () => {
    const { _id,title,price,img,description}=useLoaderData()
    const {user,logOut}=useContext(AuthContext)
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






    const handlePlaceOrder = event =>{
        event.preventDefault();
        const form =event.target;
        const name =`${form.firstName.value} ${form.lastName.value}`;
        const phone = form.phone.value
        const email =user?.email || 'unRegister';
        const message =form.message.value;

        const order ={
            service: _id ,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        }

        fetch('http://localhost:5000/orders',{
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(order)

        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged) {
                alert("order successfully complete");
                form.reset()

            }
        
        })
        .catch(err => console.error(err));

    }



    return (
        <div>
     <h2 className='text-4xl'>You are about to order: {title}</h2>
        <h2 className='text-4xl'>Price: {price}</h2>
       <form onSubmit={handlePlaceOrder}>
    <div className='grid grid-cols-1 gap-4 my-10 lg:grid-cols-2'>
    <input name="firstName" type="text" placeholder="FirstName" className="input input-bordered w-full" />
    <input name="lastName" type="text" placeholder="Last Name" className="input input-bordered w-full" />
    <input name="phone" type="text" placeholder="Phone" className="input input-bordered w-full" required/>
    <input name='email' type="text" placeholder="Email" defaultValue={user?.email} className="input input-bordered w-full read-only:" readOnly/>
    </div>
    <textarea name='message' className="textarea textarea-bordered h-24 w-full" placeholder="Command" required></textarea>
    <input className='btn' type="submit"  value="Enter Your Review"/>
       </form>
       
   
    {orders.map(message => <div className='mb-10' key={_id}>
        <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
        <h2 className="card-title">Commend</h2>
        <div className="card-actions justify-end">
        {message.message}
     </div>
   </div>
 </div>


    </div>)}
   
    </div>
    );
};

export default CheckOut;