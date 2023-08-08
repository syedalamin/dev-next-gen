import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const { user , loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div>......</div>
    }
    if (user) {
        return children;
    }
  
    return <Navigate to='/admin' state={{from: location}} replace></Navigate>

};

export default PrivateRoute;