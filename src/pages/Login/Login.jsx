import React, { useRef } from "react";
import "./Login.scss";
import { AiFillGithub } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from 'react-router-dom';
import {useState,useEffect} from "react"
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const token = localStorage.getItem("user-info")
  const navigate = useNavigate();
  useEffect(()=>{
    if(localStorage.getItem('user-info')){
      navigate("/login");
    }
  }, [])
  const captcha = useRef(null);
  const onChange = () => {
    if (captcha.current.getValue()) {
      console.log("EL usuario no es un robot");
    }
  };
  
  async function login1() {
    let item = { email, password };

    let result = await fetch("http://127.0.0.1:8000/api/login", {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json',
        "Authorization" : `Bearer ${token}`

      }
    })
    result = await result.json()
    localStorage.setItem("user-info", JSON.stringify(result))
    navigate('/');
console.log(token);
    // const res =await axios.post(URI)
    // console.log(res)
    // result = await result.json()
    // localStorage.setItem("user-info", JSON.stringify(result))
    // console.log(result)
  }
  return (
    <div className="login-background">
      <div className="login-container">
        <div className="login-content row">
          <div className="col-12 text-login">Login</div>
          <div className="col-12 form-group login-input">
            <label>Username:</label>
            <br />
            <input
              type="email"
              onChange={(e)=>setEmail(e.target.value)}
              className="form-control"
              placeholder="Enter your username"
            ></input>
          </div>
          <div className="col-12form-group login-input">
            <label>Password:</label>
            <input
              type="password"
              onChange={(e)=>setPassword(e.target.value)}
              className="form-control"
              placeholder="Enter your password"
            ></input>
          </div>
          {/* /* <div className="col-12 recaptcha">
            <ReCAPTCHA
              ref={captcha}
              sitekey="6LehHN4iAAAAAI5vRx6zK2_Vhlrdwfq0NpvBei0G"
              onChange={onChange}
            />
          </div> */ }
         <div className="col-12 ">
              <button onClick={login1} className="btn-register">
                Register
              </button>
            </div>

          <div className="col-12">
            <span className="forgot-password">Forgot your password?</span>
          </div>
          <div className="col-12 orlogin">
            <span className="text-other-login">Or Login With</span>
          </div>
          <div className="col-12 social-login">
            <GrFacebookOption className="facebook" />
            <FcGoogle className="google" />
            <AiFillGithub className="github" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
