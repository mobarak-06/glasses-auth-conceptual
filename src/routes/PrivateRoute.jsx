import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({children}) => {
    const {currentUser, loading} = useAuth();
    const location = useLocation();
    console.log(location);

    if (loading) {
        return <h1 className="text-3xl">
            Loading...
        </h1>
    }
    if (currentUser) {
        return children
    }
    return <Navigate to="/login" state={location?.pathname || "/"}></Navigate>
};

export default PrivateRoute;