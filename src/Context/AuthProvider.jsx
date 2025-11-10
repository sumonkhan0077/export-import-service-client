import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.comfig';


export const AuthContext = createContext()

const AuthProvider = ( {children}) => {

     const [user , setUser] = useState( )
        const [loading , setLoading] = useState(true)
    
        const googleProvider = new GoogleAuthProvider()
    
        // console.log(user)
    
        const createUser = (email, password) => {
                setLoading(true)
                return createUserWithEmailAndPassword(auth, email, password )
            }
    
            const signInWithGoogle = () => {
                    setLoading(true)
                    return signInWithPopup(auth, googleProvider)
                }
    
            const updateUser = ( updatedData ) => {
                return updateProfile(auth.currentUser, updatedData)
    
            }
     
            const logOut = () => {
                setLoading(true)
                return signOut(auth )
            }
            
             const logInUser = (email, password) => {
                setLoading(true)
                return signInWithEmailAndPassword(auth, email, password)
            }
    
            const forgetPassword = (email) => {
               return sendPasswordResetEmail(auth, email)
            }
    
    
         useEffect(()=> {
            const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            // console.log('current user iin auth sathe ' , currentUser)
                    setUser(currentUser);
                    setLoading(false)
                })
            return () => {
                 unsubscribe();
            }
            
        },[])
         
        const authInfo = {
            createUser,
            user,
            setUser,
            loading,
            logOut,
            logInUser,
            updateUser,
            signInWithGoogle,
            forgetPassword
            
        }
    return (
            <AuthContext value={authInfo}>
                {children}
            </AuthContext>
    );
      
       
};

export default AuthProvider;