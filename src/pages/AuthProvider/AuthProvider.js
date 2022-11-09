
import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth';

export const AuthContext =createContext();
const  auth =getAuth(app);
const provider=new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user,SetUser] =useState(null);
    const [loader,setLoader]=useState(true);

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const LoginUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const providerLogin =()=>{
        return signInWithPopup(auth,provider)
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
        createUser,
        LoginUser,
        providerLogin

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

