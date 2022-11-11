import React from "react";
import "./Register.scss";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function singUp() {
    let item = { name, email, password };

    let result = await fetch("http://127.0.0.1:8000/api/register", {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json'
      }
    })
    result = await result.json()
    localStorage.setItem("user-info", JSON.stringify(result))
    navigate('/login');
  }
  return (
    <div>
      <div className="register-background">
        <div className="register-container">
          <div className="register-content row">
            <div className="col-12 text-register">Register</div>
            <div className="col-12 form-group register-input">
              <label>Name:</label>
              <br />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                placeholder="Enter your Name"
              ></input>
            </div>
            <div className="col-12form-group register-input">
              <label>Email:</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                placeholder="Enter your Email"
              ></input>
            </div>
            <div className="col-12form-group register-input">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                placeholder="Enter your Password"
              ></input>
            </div>

            <div className="col-12 ">
              <button onClick={singUp} className="btn-register">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
