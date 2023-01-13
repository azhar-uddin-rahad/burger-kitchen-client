import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../pages/AuthProvider/AuthProvider';
import logo from '../../assits/logo (2).png'

const Header = () => {
    const{user,logOut } =useContext(AuthContext);
    const handalseLogOut=()=>{
      logOut()
      .then()
      .catch(error => console.log(error)) 
  }


    const menu =
     <>

     <li><Link to="">Home</Link></li>
     <li><Link to='/services'>Services</Link></li>
     <li><Link to='/blog'>Blog</Link></li>
     <li><Link to='/addservices'>Add Services</Link></li>

     {
        user?.email ?
        <> <li><Link to='/order' className='btn btn-ghost' >Review All</Link></li>
      <li><button to='' className='btn btn-ghost' onClick={handalseLogOut}>Sign out</button></li>
        
        </>
        :
        <>
         <li><Link to='/login'>Login</Link></li>
        <li><Link to='/register'>Register</Link></li>
        </>

     }
    
   
    
   
     
     
     
     </>


    return (
        <div>
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menu}
       
      </ul>
    </div>
   <img src={logo} alt="" className='w-36' />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      {menu}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Get started</a>
  </div>
</div>
        </div>
    );
};

export default Header;