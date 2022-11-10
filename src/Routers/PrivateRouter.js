import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../pages/AuthProvider/AuthProvider";

const PrivateRouter = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location=useLocation();
    
    if(loading){
        return <p className='text-5xl'>Loading...</p>
    }

if(user){
    return children;
}
return <Navigate to="/login" state={{from: location}} replace></Navigate>

}

export default PrivateRouter;