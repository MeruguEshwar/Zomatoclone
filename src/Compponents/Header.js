import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import log from "../Images/02.png";
import { useNavigate } from "react-router-dom";
import AuthenticationService from "../Service/AuthenticationService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Header() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [luser, setluser] = useState([]);
  const navigate = useNavigate();

  const getuser = async () => {
    const userdetails = await AuthenticationService.getUser();
    setluser(userdetails.data);
    console.log("User list is:" + JSON.stringify(userdetails));
  };

  useEffect(() => {
    getuser();
  }, []);

  const loginuser = () => {
    luser.filter((res) => {
      if (email == res.email && password == res.password) {
        setTimeout(() => {
          showToastMessage();
        }, 500);
        navigate("/dashboard");
      }
    });
  };

  // timer = () => {
  //   setTimeout(() => {
  //     this.handleCheck();
  //   }, 1000);
  // }

  const showToastMessage = () => {
    toast.success('Login Success !', {
        position: toast.POSITION.TOP_RIGHT
    });
};

  const RegisterUser = () => {
    navigate("/register");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <form className="d-flex">
              {/* <button className="btn btn-outline-light me-2" type="submit">
                SignIn
              </button>
              <button className="btn btn-outline-light me-5" type="submit">
                SignUp
              </button> */}
              {/* <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                className="btn btn-outline-light me-2"
              >
                Login
              </Button> */}
            </form>
          </div>
        </div>
      </nav>

      <div style={{ marginLeft: "1150px", marginTop: "70px" }}>
        {/* <Collapse in={open} dimension="width"> */}
        <div id="example-collapse-text">
          <Card
            body
            style={{
              width: "380px",
              height: "600px",
              backgroundColor: "#020001",
            }}
            className="cardbackground border-light rounded-4"
          >
            <img src={log} alt="" className="logimg ms-5" />
            <div className="mb-3 mt-3">
              <label
                htmlFor="formGroupExampleInput"
                className="form-label text-light"
              >
                Enter Email:
              </label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3 mt-4">
              <label
                htmlFor="formGroupExampleInput2"
                className="form-label text-light"
              >
                Enter Password:
              </label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="row mt-5">
              <div className="col">
                <button
                  type="button"
                  className="btn btn-outline-dark rounded-pill btnsize text-light border-light"
                >
                  ForgotPassword
                </button>
              </div>
              <div className="col">
                <button
                  type="button"
                  className="btn btn-outline-dark rounded-pill btnsize text-light border-light"
                  onClick={loginuser}
                >
                  SignIn
                </button>
                <ToastContainer />
              </div>
            </div>
            <div className="d-flex justify-content-center mt-5">
              <button
                type="button"
                className="btn btn-outline-dark rounded-pill btnsize text-light border-light"
                onClick={RegisterUser}
              >
                New User?
              </button>
            </div>
            <Card.Footer className="text-muted">
              <div className="row mt-5 ms-2">
                <div className="col-sm-4">
                  <p className="text-light">Cookie Policy</p>
                </div>
                <div className="col-sm-4">
                  <p className="text-light">Terms Of Use</p>
                </div>
                <div className="col-sm-4">
                  <p className="text-light">Privacy Policy</p>
                </div>
              </div>
            </Card.Footer>
          </Card>
        </div>
        {/* </Collapse> */}
      </div>
    </div>
  );
}

export default Header;
