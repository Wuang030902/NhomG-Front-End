import React from "react";
import "./Edit.scss";
import { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import http from "../../http"
import axios from "axios"
import {Api} from "../../services"
// const [users, setUsers] = useState([]);
function Edit() {
//   const token = localStorage.getItem("user-info")

//   const obj = JSON.parse(token)
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [password_confirm, setPassword_Confirm] = useState("");
//   const navigate = useNavigate();
//   // useEffect(()=>{
//   //   loadUsers();
//   // }, []);
//   const loadUsers = async ()=>{
//     const result = await axios.get("")
//   }
//   async function submitForm() {
//     // if(name.trim()==="" ){
//     //   return alert("Name is null")
//     // }else if (email.trim()==="" ){
//     //   return alert("Email is null")
//     // }else if (password.trim()==="" ){
//     //   return alert("Password is null")
//     // }else{
//       let item = { name, email, password,password_confirm };
//       let result = await fetch("http://127.0.0.1:8000/api/admin/user-management", {
//         method: 'PUT',
//         body: JSON.stringify(item),
//         headers: {
//           "Content-Type": 'application/json',
//           "Accept": 'application/json',
//           "Authorization": 'Bearer '+obj.access_token
//         }
//       })
//       result = await result.json()
//       navigate('/');
//       return alert("Thanh Cong")
      
//     // }
    
//   }
//   useEffect(()=>{
//     ( async ()=> {
//       const resData = await Api.users()
//       // console.log(resData);
//       setUsers(resData)

//     })()
//   }, [])
// //     const [inputs, setInputs] = useState({});
// // const handleChange = (event) =>{
// //   const name = event.target.name;
// //   const value = event.target.value;
  
// //   setInputs(values=>({...values,[name]:value}))
// // }
// // const submitForm = () =>{
// //   http.post('admin/user-management', inputs).then((res)=>{
// //     navigate("/");
// //   })
// // }
//   // const [user,setUser] = useState({
//   //   name: "",
//   //   email:"",
//   //   password:"",
//   //   password_confirm: "",
//   // });
//   // const {name,email,password,password_confirm} = user;
//   // const handleChange = e =>{
//   //   setUser({...user,[e.target.name]:e.target.value});
//   // };
//   // const submitForm = async e =>{
//   //   e.preventDefault();
//   //   http.post("admin/user-management",user);
//   //   navigate("/");
// // }

//   return (
//     <div>
//       <div className="register-background">
//         <div className="register-container">
//           <div className="register-content row">
//             <div className="col-12 text-register">Register</div>
//             <div className="col-12 form-group register-input">
//               <label>Name:</label>
//               <br />
//               <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="form-control"
//                 placeholder="Enter your Name"
//               ></input>
//             </div>
//             <div className="col-12form-group register-input">
//               <label>Email:</label>
//               <input
//                 type="text"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="form-control"
//                 placeholder="Enter your Email"
//               ></input>
//             </div>
//             <div className="col-12form-group register-input">
//               <label>Password:</label>
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="form-control"
//                 placeholder="Enter your Password"
//               ></input>
//             </div>
//             <div className="col-12form-group register-input">
//               <label>Confirm Password:</label>
//               <input
//                 type="password"
//                 value={password_confirm}
//                 onChange={(e) => setPassword_Confirm(e.target.value)}
//                 className="form-control"
//                 placeholder="Enter your Password"
//               ></input>
//             </div>
//             <div className="col-12 ">
//               <button onClick={submitForm} className="btn-register">
//                 Register
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
   }

export default Edit;
