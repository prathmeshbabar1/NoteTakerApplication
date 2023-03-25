import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./signin.css"
const SignIn = () => {
   

    const [data, setData] = useState({ email: "", password: "",confirmPassword:"" });
    const [error, setError] = useState("");
    const [ check ,setcheck] = useState(false)
    const navigate = useNavigate();
    const Handler = async (e) => {
        e.preventDefault();
        console.log(data);
        if (data.email === "" || data.password === "" ||data.confirmPassword==="") {
            setError("please fill All Fields");
            return;
        }
        fetch("http://localhost:8080/api/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
            
                if (data.error === "user not found" || data.error === "password not match") {
                    setError(data.error);
                } 
                else {
                    setError("");
                    navigate("/login");
                }
            })
            .catch((e) => {
                console.log(e);
            });
    };
    console.log(check);
    return (
        <div className="main">
            <div className="secondmain">
                <section className="header">
                    <h1>Sign Up</h1>
                </section>
                <form className="form">
                    <section className="a" >

                        <lable>Email address</lable>
                        <input placeholder="Enter email" onChange={(e) => setData({ ...data, email: e.target.value })}></input>
                    </section>
                    <section className="a" >
                        <lable >Password</lable>
                        <input placeholder="Enter passsword" onChange={(e) => setData({ ...data, password: e.target.value })}></input>
                        <lable >Confirm Password</lable>
                        <input placeholder="Enter passsword" onChange={(e) => setData({ ...data, confirmPassword: e.target.value })}></input>
                    </section>
                    <section className="a" >
                        <section className="aa">
                            <input className="check" type={"checkbox"} onChange={(e) => setcheck(!check)}></input>
                            <span>i agree term and condition</span>
                        </section>


                        <button className="btn" onClick={(e) => { Handler(e) }}>Submit</button>

                    </section>

                </form>

            </div>
            <Link to="/">log in</Link>
            {error && <span style={{ color: "red" }}>{error} </span>}
        </div>
    )
}

export default SignIn;
