import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const AddServices = () => {
    const { _id,title,price,img,description}=useLoaderData()
    const {user,logOut}=useContext(AuthContext)
     const [orders,setOrders]=useState([]);
    useEffect(()=>{
        fetch(`https://berger-food-kitchen-server.vercel.app/orders?email=${user?.email}`,{
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
         const name =form.firstName.value;
         const product_price = form.product_price.value;
         const img_url = form.img_url.value;

         const email =user?.email || 'unRegister';
         const message =form.message.value;
 
         const order ={ 
            service_id: _id ,
            title : name,
            price: product_price,
            img: img_url,
             email,
             description:message
        
         }
 
         fetch('https://berger-food-kitchen-server.vercel.app/services',{
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
     <h2 className='text-4xl'>Add A Services</h2>
      
       <form onSubmit={handlePlaceOrder}>
    <div className='grid grid-cols-1 gap-4 my-10 lg:grid-cols-2'>
    <input name="firstName" type="text" placeholder="Enter product tittle" className="input input-bordered w-full" />
    <input name="product_price" type="text" placeholder="price" className="input input-bordered w-full" required/>
    <input name="img_url" type="text" placeholder="image url" className="input input-bordered w-full" required/>
    
    <input name='email' type="text" placeholder="Email" defaultValue={user?.email} className="input input-bordered w-full read-only:" readOnly/>
    </div>
    <textarea name='message' className="textarea textarea-bordered h-24 w-full" placeholder=" description" required></textarea>
    <input className='btn' type="submit"  value="Enter Your Review"/>
       </form>
       </div>
    );
};

export default AddServices;