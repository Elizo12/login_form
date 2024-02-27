import React from "react";
import { useState } from "react";
import './LoginSignup.css';
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import { useMyContext } from "./MyContext";

const LoginSignup =()=>{
    const [action, setAction] = useState(useMyContext());

    return (
        <div className="container">
           <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div> 
            <div className="inputs">
                {action==="Login"? <div></div>:<div className="input">
                    <img src={user_icon}/>
                    <input type="text" placeholder="Name"/>
                </div>}
                <div className="input">
                    <img src={email_icon}/>
                    <input type="email" placeholder="Email ID"/>
                </div>
                <div className="input">
                    <img src={password_icon}/>
                    <input type="password" placeholder="Password"/>
                </div>
            </div>
            {action==="Sign Up"? <div></div>:<div className="forgot-password">Forgot password? <span onClick={()=>{setAction("Sign Up")}}>Click here</span></div>}
            <div className="submit-container">
                <div className={action==="Login"? "submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign up</div>
                <div className={action==="Sign Up"? "submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
            </div>
        </div>
    );
}
export default LoginSignup;