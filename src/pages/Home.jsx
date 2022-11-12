import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from 'react';
import { Button, Modal, Input } from 'react-bootstrap';
import http from "../http"
import {Link} from "react-router-dom"
import {Api} from '../services'
import axios from "axios";

function Home() {
  const token = localStorage.getItem("user-info")

  const obj = JSON.parse(token)
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [users, setUsers] = useState([]);

  // const requestOptions = {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Authorization': 'Bearer 44|oLchfEGlZ5cHwAEmp0gkDL8hZVI192tmzN1lqphv'
  //   },
  // };
  // useEffect(() => {
  //   fetchAllUsers();
  // }, []);
  // const fetchAllUsers = () => {
  //   http.get('http://127.0.0.1:8000/api/admin/user-management').then(res => {
  //    setUsers(res.data);
  //   })
  // }
  // const requestOptions = {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Authorization': 'Bearer 6|0CpBdxk29PgGRzvlDXTBgbWwPAbycVgT9xJfZWOG'
  //   },
  // };
  // const fetchAllUsers = () => {
  //   fetch('http://127.0.0.1:8000/api/admin/user-management', requestOptions)
  //   .then(response => console.log(response.json())).then(data => {
  //     setUsers(data.object);
  //   })
  // }

  useEffect(()=>{
    ( async ()=> {
      const resData = await Api.users()
      // console.log(resData);
      setUsers(resData)

    })()
  }, [])
const headers = { 'Authorization': 'Bearer '+obj.access_token}

const deleteUser = async id =>{
  await axios.delete(`http://127.0.0.1:8000/api/admin/user-management/${id}`,
headers
  );
}

  return (

    <div className="container ">
      <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
        <div className="row ">

          <div className="col-sm-3 mt-5 mb-4 text-gred">
            <div className="search">
              <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search User" aria-label="Search" />

              </form>
            </div>
          </div>
          <div className="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred" style={{ color: "green" }}><h2><b>User Manager</b></h2></div>
          <div className="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
            <Button variant="primary" onClick={handleShow} >
              Add New User
            </Button>
            
          </div>
        </div>
        <div className="row">
          <div className="table-responsive " >
            <table className="table table-striped table-hover table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name </th>
                  <th>Email</th>
                

                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                 
                 
                    <td>
                      <a href="#" className="view" title="View" data-toggle="tooltip" style={{ color: "#10ab80" }}><i className="material-icons">&#xE417;</i></a>
                      <Link to={`/edit`} className="edit" title="Edit"  data-toggle="tooltip"><i className="material-icons" >&#xE254;</i></Link>
                      <a href="#" className="delete" title="Delete" data-toggle="tooltip" onClick={()=>deleteUser(user.id)} style={{ color: "red" }}><i className="material-icons">&#xE872;</i></a>

                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* <!--- Model Box ---> */}
        <div className="model_box">
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Add Record</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>

            </Modal.Footer>
          </Modal>

          {/* Model Box Finsihs */}
        </div>
      </div>
    </div>
  );
}

export default Home;