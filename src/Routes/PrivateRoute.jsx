import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import MainLoading from "../components/MainLoading/MainLoading";

const PrivateRoute = ({children}) => {
    const { user , loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <MainLoading></MainLoading>
    }
    if (user) {
        return children;
    }
  
    return <Navigate to='/hello-coder-x' state={{from: location}} replace></Navigate>

};

export default PrivateRoute;