import React from 'react';
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react";

function Login() {
    const navigate = useNavigate();

    let [username, setUserName] = useState("");
   
    const handleUsername = (e) => {
        setUserName(e.target.value);
    }
    const onLogin = () => {
        navigate('/chat', { state: { "user": username } });
    };

    return (
        <div className='loginMainContainer'>
            <div class="loginBox">
            {/* <img class="user" src="https://i.ibb.co/yVGxFPR/2.png" height="100px" width="100px"/> */}
                <h3>Sign in here</h3>
                <form method="post">
                    <div class="inputBox"> <input value={username} onChange={handleUsername} id="uname" type="text" name="Username" placeholder="Username"/> 
                    <input id="pass" type="password" name="Password" placeholder="Password"/> </div> 
                    <input type="submit" name="" value="Login" onClick={onLogin}/>
                </form> 
                {/* <a href="#">Forget Password<br/> </a> */}
                {/* <div class="text-center">
                    <p style={{ color: '#59238F'}}>Sign-Up</p>
                </div> */}
            </div>
         </div>
    );
}
 
export default Login;