import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const singleUserData = useLoaderData();
  const [user, setUser] = useState(singleUserData);
  const handleInputUpdate = (event) => {
    event.preventDefault();
    console.log(user);
    fetch(`https://berger-food-kitchen-server.vercel.app/orders/${singleUserData._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.matchedCount) {
          alert("user update successfully");
          event.target.reset();
        }
      });
  };
  const handleInputChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
  };
  return (
    <div>
      <h1>User Update {singleUserData.serviceName}</h1>
      <div>
        <form onSubmit={handleInputUpdate}>
          <div className="mt-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 undefined"
            >
              Comment
            </label>
            <div className="flex flex-col items-start">
              <input
                onChange={handleInputChange}
                type="text"
                name="name"
                defaultValue={singleUserData.message}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </div>

          <div className="mt-4">
            <label
              htmlFor="password_confirmation"
              className="block text-sm font-medium text-gray-700 undefined"
            >
              Phone
            </label>
            <div className="flex flex-col items-start">
              <input
                onChange={handleInputChange}
                type="text"
                defaultValue={singleUserData.phone}
                name="address"
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              htmlFor="password_confirmation"
              className="block text-sm font-medium text-gray-700 undefined"
            >
             email
            </label>
            <div className="flex flex-col items-start">
              <input
                onChange={handleInputChange}
                type="email"
                defaultValue={singleUserData.email}
                name="email"
                placeholder="email"
                required
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </div>

          <div className="flex items-center mt-4">
            <button  type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-regal-red rounded-md hover:bg-slate-900 hover:text-regal-red hover:border-2 hover:border-regal-red focus:outline-none">
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
