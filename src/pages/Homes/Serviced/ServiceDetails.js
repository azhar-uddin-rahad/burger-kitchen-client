import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import CheckOut from '../../CheckOut/CheckOut';

const ServiceDetails = () => {
    const { _id,title,price,img,description}=useLoaderData();
    const {user}=useContext(AuthContext)


    const handlePlaceReview =(event)=>{
    event.preventDefault() ;
    const form = event.target;
    const UserName=form.name.value;
    const email=form.email.value;
    const rating=form.rating.value
    const id=form.id.value;
    const comment = form.comment.value;
    const review ={
    serviceId: id,
    title,
    photoURL: user.photoURL,
    UserName: UserName,
    email: email,
    rating: rating,
    comment: comment
    }


fetch("/reviews",{
method: "POST",
headers: {
    "content-type" : "application/json",
},

body: JSON.stringify(review),
})
.then( (res) => res.json ())
.then( (data) =>{
console.log (data)
if (data.acknowledged){
    alert("Review Placed Successfully ! ");
    form.reset () ;
}
})
.catch( (err)=>console.error(err))
}

    return (
        <div>
         <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
              <p className='text-orange-400 font-bold'>Price:{price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
        </div>
        
        <CheckOut></CheckOut>


</div>
    );
};

export default ServiceDetails;