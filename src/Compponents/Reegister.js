import React, { useEffect, useState } from "react";
import log from "../Images/02.png";
import {
  alpha,
  FormControl,
  IconButton,
  InputAdornment,
  InputBase,
  InputLabel,
  OutlinedInput,
  outlinedInputClasses,
  styled,
  TextField,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AuthenticationService from "../Service/AuthenticationService";
import { useNavigate } from "react-router-dom";


function Reegister() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConformPassword, setShowConformPassword] = React.useState(false);
  const[name,setName] = useState('');
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');
  const[conformPassword,setConformPassword] = useState('');

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShow = () => setShowConformPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const newUser = {
        name: name,
        email: email,
        password: password,
        conformPassword: conformPassword
  }
  
  const[msgBody,setmsgBody] = useState('Thank you for registring with online foodelivery');
  const[subject,setsubject] = useState('OnlineFood');
  const sendemaildetails = {
    email: email,
    msgBody:msgBody,
    subject:subject
  }

  const navigate = useNavigate();

  const register = () =>{
    AuthenticationService.createUser(newUser).then((res)=>{
        console.log(res.data);
        navigate("/");
    });
  }

  const sendEmail = () =>{
    AuthenticationService.SendEmail(sendemaildetails).then((res)=>{
        console.log("emailservice:"+res.data);
    });
  }

//   useEffect(()=>{
//     AuthenticationService.SendEmail(sendemaildetails).then((res)=>{
//         console.log("emailservice:"+res.data);
//     });
//   },[])

  const isEnabled = () =>{
    return email.length && name.length && password.length && conformPassword;
  } 


  return (
    <div
      className="card float-end border-light me-5 rounded-5"
      id="regcard"
      style={{ width: "24rem", height: "570px" }}
    >
      <div className="card-header">
        <img src={log} className="card-img-top regimg" alt="Network Error.." />
      </div>
      <div className="card-body">
        <div className="col-sm-12 mb-4">
          <TextField
            sx={{ width: "38ch" ,input: { color: 'white' } }}
            id="outlined-multiline-flexible "
            label="Name"
            focused
            value={name}
            onChange={ e => setName(e.target.value)}
          />
        </div>
        <div className="col-sm-12 mb-4">
          <TextField
            sx={{ width: "38ch",input: { color: 'white' } }}
            style={{ color: "white" }}
            id="outlined-multiline-flexible"
            label="Email"
            focused
            value={email}
            onChange={ e => setEmail(e.target.value)}
          />
        </div>
        <div className="col-sm-12 mb-4">
          <FormControl
            sx={{ width: "38ch" }}
            variant="outlined"
            label="Outlined"
            focused
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              style={{ color: "white" }}
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={ e => setPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    label="Outlined"
                    style={{ color: "white" }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </div>
        <div className="col-sm-12 mb-4">
          <FormControl
             sx={{ width: "38ch" }}
             variant="outlined"
             label="Outlined"
             focused
          >
            <InputLabel htmlFor="outlined-adornment-password">
              ConformPassword
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              style={{ color: "white" }}
              type={showConformPassword ? "text" : "password"}
              value={conformPassword}
              onChange={ e => setConformPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShow}
                    onMouseDown={handleMouseDown}
                    edge="end"
                    label="Outlined"
                    style={{ color: "white" }}
                  >
                    {showConformPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="ConformPassword"
            />
          </FormControl>
        </div>
        <div className="col-12">
          <button
            type="submit"
            id="start_button"
            className="btn btn-outline-primary text-light border-light rounded-4"
            style={{width:"150px",height:"43px"}}
            onClick={register}
            disabled={!isEnabled()}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default Reegister;
