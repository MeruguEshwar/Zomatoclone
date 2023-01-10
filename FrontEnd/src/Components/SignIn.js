import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Autherization from '../Service/Autherization';

function SignIn() {

    const [email, setemail] = useState();
    const [password, setpassword] = useState();

    let navigate = useNavigate();

    const [user, setuser] = useState([]);

    const getuserdetails = async (e) => {
        const userdata = await Autherization.getuser();
        setuser(userdata.data);
        console.log("User list is:" + JSON.stringify(user));
    }

    useEffect(() => {
        getuserdetails();
    }, []);

    function login() {
        user.filter((std) => {
            console.log("map data:" + JSON.stringify(std));
            if (std.email == email && std.password == password) {
                navigate("/list")
                alert("login success..");
            }
        })
    }

    function forgot() {
        navigate("/forgot");
    }
    return (
        <div className='container'>
            <div className="card text-bg-light mt-4" style={{ maxWidth: "35rem" }} id="logincard">
                <div className="card-header text-center">Login</div>
                <div className="card-body">
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput" className="form-label">Enter your Email:</label>
                        <input type="text"
                            className="form-control"
                            id="formGroupExampleInput"
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                            placeholder="Enter your Email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput2" className="form-label">Enter Your password:</label>
                        <input type="password"
                            className="form-control"
                            id="formGroupExampleInput2"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}
                        />
                    </div>
                    <div className="col-12 d-flex justify-content-between">
                        <button type="submit" className="btn btn-primary" onClick={login}>Sign in</button>
                        <button className='btn btn-primary' onClick={forgot}>Forgot Password</button>
                    </div>
                </div>
                <div className="card-footer text-muted text-center">
                    Design & Developed By Eshwar Merugu
                </div>
            </div>
        </div>
    )
}

export default SignIn
