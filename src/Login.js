import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "./firebase";
import "./Login.css";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";
function Login(){
     
    const [{},dispatch]=useStateValue();
    const signIn=()=>{
      auth
      .signInWithPopup(provider)
      .then((result)=>{dispatch({
           type: actionTypes.SET_USER,
           user: result.user,
      });
     })
      .catch((err)=>{alert(err.massage)});
    };

    return(
        <div className="login"> 
        <div className="login__container">
          <img src="https://seeklogo.com/images/W/whatsapp-icon-logo-6E793ACECD-seeklogo.com.png" alt="" />
       
        <div className="login__text">
          <h1>Sign in to WhatsApp</h1>
        </div>
         <Button onClick={signIn} >
             Sign In with Google
         </Button>
         </div>
        </div>
    );
}
export default Login;