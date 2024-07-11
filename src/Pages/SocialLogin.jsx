import { Navigate, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const SocialLogin = () => {
    const {googleLogin, githubLogin, twitterLogin} = useAuth()
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    const handleSocialLogin = socialProvider =>{
      socialProvider()
      .then(result => {
        console.log(result.user);
        navigate(location?.state || "/");

      })
      .catch(error => {
        console.error(error);
      })
    }
  return (
    <div>
      <div className="divider">continue with</div>
     <div>
     <div className="flex justify-around">
        <button onClick={()=>handleSocialLogin(googleLogin)} className="btn btn-sm btn-primary btn-outline">Google</button>
        <button onClick={()=>handleSocialLogin(githubLogin)} className="btn btn-sm btn-secondary btn-outline">github</button>
        <button onClick={()=>handleSocialLogin(twitterLogin)} className="btn btn-sm btn-secondary btn-outline">twitter</button>
      </div>
     </div>
    </div>
  );
};

export default SocialLogin;
