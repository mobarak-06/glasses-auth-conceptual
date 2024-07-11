import { useContext } from "react";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";


const useAuth = () => {
    const allValue = useContext(AuthContext)
    return allValue;
};

export default useAuth;