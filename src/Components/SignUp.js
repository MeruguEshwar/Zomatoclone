import React, { useState } from 'react'
import Autherization from '../Service/Autherization';

function SignUp() {

    const [firstName, setfirstName] = useState();
    const [lastName, setlastName] = useState();
    const [email, setemail] = useState();
    const [password, setpassword] = useState();
    const [conformPassword, setconformPassword] = useState();

    let newUser = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        conformPassword: conformPassword
    }

    function register() {
        alert("register");
        createuserDetails();
    }

    const createuserDetails = () => {
        Autherization.RegistetUser(newUser).then((res)=>{
            console.log("user list is:"+JSON.stringify(res.data));
        })
    }

  return (
    <div>
       <div className='container'>
            <div className="card text-bg-light mt-5" style={{ maxWidth: "35rem",marginLeft:"380px" }} id="registercard">
                <div className="card-header text-center">Register</div>
                <div className="card-body">
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput" className="form-label float-start">Enter your firstName:</label>
                        <input type="text"
                            className="form-control"
                            id="formGroupExampleInput"
                            value={firstName}
                            onChange={(e) => setfirstName(e.target.value)}
                            placeholder="Enter your firstName" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput2" className="form-label float-start">Enter Your lastName:</label>
                        <input type="text" className="form-control" id="formGroupExampleInput2"
                            value={lastName}
                            onChange={(e) => setlastName(e.target.value)}
                            placeholder="Enter your lastName"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput2" className="form-label float-start">Enter Your email:</label>
                        <input type="text" className="form-control" id="formGroupExampleInput2" value={email} onChange={(e) => setemail(e.target.value)} placeholder="Enter your email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput2" className="form-label float-start">Enter Your password:</label>
                        <input type="text" className="form-control" id="formGroupExampleInput2" value={password} onChange={(e) => setpassword(e.target.value)} placeholder="Enter your password" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput2" className="form-label float-start">Enter Your ConformPassword:</label>
                        <input type="text" className="form-control" id="formGroupExampleInput2" value={conformPassword} onChange={(e) => setconformPassword(e.target.value)} placeholder="Enter your password" />
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary" onClick={register}>Register</button>
                    </div>
                </div>
                <div className="card-footer text-muted text-center">
                    Design & Developed By Eshwar Merugu
                </div>
            </div>

        </div>
    </div>
  )
}

export default SignUp
