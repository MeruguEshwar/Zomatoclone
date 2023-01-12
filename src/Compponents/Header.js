import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';

function Header() {
    const [open, setOpen] = useState(false);
    return (
        <div>
            {/* <div class="container float-end">
                <div class="topnav">
                    <a href="#home">Home</a>
                    <a href="#news">News</a>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a>
                </div>
            </div> */}
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                        <form class="d-flex">
                            <button class="btn btn-outline-light me-2" type="submit">SignIn</button>
                            <button class="btn btn-outline-light me-5" type="submit" >SignUp</button>
                            <Button
                                onClick={() => setOpen(!open)}
                                aria-controls="example-collapse-text"
                                aria-expanded={open}
                                class="btn btn-outline-light me-2"
                            >
                                click
                            </Button>
                        </form>
                    </div>
                </div>
            </nav>


            <div style={{ marginLeft: '1150px', marginTop: '70px' }}>
                <Collapse in={open} dimension="width">
                    <div id="example-collapse-text">
    
                            <Card body style={{ width: '380px', height: '600px', backgroundColor: '#020001' }} className="cardbackground border-light rounded-4">
                                <div class="mb-3 mt-4">
                                    <label for="formGroupExampleInput" class="form-label text-light">Enter Email:</label>
                                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter your Email" />
                                </div>
                                <div class="mb-3 mt-4">
                                    <label for="formGroupExampleInput2" class="form-label text-light">Enter Password:</label>
                                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Enter your Password" />
                                </div>

                                <div class="row">
                                    <div class="col mt-4">
                                        {/* <p className='text-light ms-4'>Forgot Password?</p> */}
                                        <button type="button" class="btn btn-outline-dark rounded-pill btnsize text-light border-light">ForgotPassword</button>
                                    </div>
                                    <div class="col mt-4">
                                        <button type="button" class="btn btn-outline-dark rounded-pill btnsize text-light border-light">SignIn</button>
                                    </div>
                                </div>
                            </Card>
                            <Card.Footer className="text-muted">
                                <div class="row">
                                    <div class="col">
                                        <p className='text-light'>Cookie Policy</p>
                                    </div>
                                    <div class="col">
                                        <p className='text-light'>Terms Of Use</p>
                                    </div>
                                    <div class="col">
                                        <p className='text-light'>Privacy Policy</p>
                                    </div>
                                </div>
                            </Card.Footer>
                    </div>
                </Collapse>
            </div>
        </div>
    )
}

export default Header
