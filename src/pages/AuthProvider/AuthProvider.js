
import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged} from 'firebase/auth';

export const AuthContext =createContext();
const  auth =getAuth(app);
const AuthProvider = ({children}) => {
    const [user,SetUser] =useState(null);
    const [loader,setLoader]=useState(true);

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }




    useEffect(() =>{
        const unsubscribed=onAuthStateChanged(auth,currentUser=>{
            console.log(currentUser);
            SetUser(currentUser);
            setLoader(false)
        })
        return()=>{
            return unsubscribed();
        }
    },[] )
    const authinfo={
        user,
        loader,
        createUser

    }

    return (
        <div>
            <AuthContext.Provider value={authinfo}>
            
              {children}

            </AuthContext.Provider>
            
        </div>
    );
};

export default AuthProvider;

