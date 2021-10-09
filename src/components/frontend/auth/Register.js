import React from "react";
import Navbar from "../../../layouts/frontend/Navbar";

function Register() {
    return (
        <div>
            <Navbar/>
            <div className="container py-5">
                <div className="justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4>Register</h4>
                            </div>
                            <div className="card-body">
                                <form action="">
                                    <div className="form-group mb-3">
                                        <label htmlFor="">Full Name</label>
                                        <input type="text" name="name" className="form-control"/>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="">Email ID</label>
                                        <input type="text" name="email" className="form-control"/>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="">Password</label>
                                        <input type="text" name="password" className="form-control"/>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="">Confirm Password</label>
                                        <input type="text" name="confirm_password" className="form-control"/>
                                    </div>
                                    <div className="form-group mb-3">
                                        <button type="submit" className="btn btn-primary">Register</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;