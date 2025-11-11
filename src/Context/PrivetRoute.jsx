import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Spinner from '../Components/Spinner/Spinner';


const PrivetRoute = ({children}) => {
     const {user , loading} = use(AuthContext)
     const location = useLocation()
    //  console.log(location )

     if (loading) {
        return <Spinner></Spinner>
    }
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
  
};

export default PrivetRoute;