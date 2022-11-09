import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assits/logo (2).png'
import PageTittle from '../../sherd/PageTittle/PageTittle';
import PageTitle from '../../sherd/PageTittle/PageTittle';
import SocialLogin from '../../sherd/SocialLogin/SocialLogin';
import { AuthContext } from '../AuthProvider/AuthProvider';
const Login = () => {
    const {user,LoginUser}=useContext(AuthContext)
    const handleSignIn =event=>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password =form.password.value;
        LoginUser(email,password)
        .then(result => {
            const user=result.user;
            console.log(user);

        })
        .catch(error => console.log(error))
 }

 



    return (
        <div>
           
           <PageTittle title='Login'></PageTittle>
          <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
               
                <div>
                    <a href="/">
                        <h3 className="text-4xl font-bold text-purple-600">
                        <img className='w-40' src={logo} alt="" />
                        </h3>
                    </a>
                </div>
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
                    <form onSubmit={handleSignIn}>
                       
                        <div className="mt-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Email
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="email"
                                    name="email"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                       
                        <div className="mt-4">
                            <label
                                htmlFor="password_confirmation"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                               Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="password"
                                    name="password"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                       
                        
                        <div className="flex items-center mt-4">
                            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-regal-red rounded-md hover:bg-slate-900 hover:text-regal-red hover:border-2 hover:border-regal-red focus:outline-none">
                            Log in
                            </button>
                        </div>
                    </form>
                    <div className="mt-4 text-grey-600">
                        You don't have an account?{" "}
                        <span>
                            <Link className="text-purple-600 hover:underline" to='/login'>
                               Register
                            </Link>
                        </span>
                    </div>
                    <div className="flex items-center w-full my-4">
                        <hr className="w-full" />
                        <p className="px-3 ">OR</p>
                        <hr className="w-full" />
                    </div>
                    <div className="my-6 space-y-2">
                        

                        <SocialLogin></SocialLogin>
                      
                    </div>
                </div>
            </div>  
        </div>
    );
};

export default Login;