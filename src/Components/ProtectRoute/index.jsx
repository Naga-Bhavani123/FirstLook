import Cookie from "js-cookie"
import {Navigate} from "react-router-dom"

const ProtectRoute = (props) => {
    
  

    const jwtToken = Cookie.get("jwt_token"); 
    console.log("JWT Token:", jwtToken);

    if (!jwtToken){

      return  <Navigate to =  "/login" />

    }

    return props.children;

}

export default ProtectRoute;