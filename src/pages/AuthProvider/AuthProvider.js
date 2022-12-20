
import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';

export const AuthContext =createContext();
const  auth =getAuth(app);
const provider=new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user,setUser] =useState(null);
    const [loading,setLoading]=useState(true);

    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const LoginUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const providerLogin =()=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }
    const logOut=()=>{
        localStorage.removeItem('geniusToken')
       return  signOut(auth);
    }



    useEffect(() =>{
        const unsubscribed=onAuthStateChanged(auth,currentUser=>{
           // console.log(currentUser);
            setUser(currentUser);
            setLoading(false)
        })
        return()=>{
            return unsubscribed();
        }
    },[] )
    const authinfo={
        user,
        setLoading,
        loading,
        createUser,
        LoginUser,
        providerLogin,
        logOut

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

