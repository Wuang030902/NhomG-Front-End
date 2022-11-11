import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from 'react';
import { Button, Modal, Input } from 'react-bootstrap';
import http from "../http"
function Home() {

  const [show, setShow] = useState(false);
  const token = localStorage.getItem("user-info")
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [users, setUsers] = useState([]);
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 6|0CpBdxk29PgGRzvlDXTBgbWwPAbycVgT9xJfZWOG'
    },
  };
  useEffect(() => {
    fetchAllUsers();
  }, []);
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
  const fetchAllUsers = () => {
    fetch('http://127.0.0.1:8000/api/admin/user-management', requestOptions)
    .then(response => console.log(response.json())).then(data => {
      setUsers(data.object);
    })
  }

  console.log(token);
  return (

    <div class="container ">
      <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
        <div class="row ">

          <div class="col-sm-3 mt-5 mb-4 text-gred">
            <div className="search">
              <form class="form-inline">
                <input class="form-control mr-sm-2" type="search" placeholder="Search User" aria-label="Search" />

              </form>
            </div>
          </div>
          <div class="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred" style={{ color: "green" }}><h2><b>User Manager</b></h2></div>
          <div class="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
            <Button variant="primary" onClick={handleShow}>
              Add New User
            </Button>
          </div>
        </div>
        <div class="row">
          <div class="table-responsive " >
            <table class="table table-striped table-hover table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name </th>
                  <th>Email</th>
                  <th>Password </th>

                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr>
                    {console.log(user)}
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>USA</td>
                    <td>
                      <a href="#" class="view" title="View" data-toggle="tooltip" style={{ color: "#10ab80" }}><i class="material-icons">&#xE417;</i></a>
                      <a href="#" class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                      <a href="#" class="delete" title="Delete" data-toggle="tooltip" style={{ color: "red" }}><i class="material-icons">&#xE872;</i></a>

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
              <form>
                <div class="form-group">
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />
                </div>
                <div class="form-group mt-3">
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Country" />
                </div>
                <div class="form-group mt-3">
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter City" />
                </div>
                <div class="form-group mt-3">
                  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter Country" />
                </div>

                <button type="submit" class="btn btn-success mt-4">Add Record</button>
              </form>
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