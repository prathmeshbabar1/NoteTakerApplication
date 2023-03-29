import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./login.css"

const Login = () => {
   

    const [data, setData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const [ check ,setcheck] = useState(false)
    const navigate = useNavigate();
    const Handler = async (e) => {
        e.preventDefault();
        console.log(data);
        if (data.email === "" || data.password === "") {
            setError("please fill All Fields");
            return;
        }
        fetch("https://sdaasfsf.onrender.com/api/login", {
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
                console.log(data.token);
                const token = data.token
            localStorage.setItem('token',token)
                if (data.error === "user not found" || data.error === "password not match") {
                    setError(data.error);
                } 
                else {
                    setError("");
  

                    navigate("/home");
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
                    <h1>Sign In</h1>
                </section>
                <form className="form">
                    <section className="a" >

                        <lable>Email address</lable>
                        <input placeholder="Enter email"  className="loginInput" onChange={(e) => setData({ ...data, email: e.target.value })}></input>
                    </section>
                    <section className="a" >
                        <lable >Password</lable>
                        <input placeholder="Enter passsword"  className="loginInput" onChange={(e) => setData({ ...data, password: e.target.value })}></input>
                    </section>
                    <section className="a" >
                        <section className="aa">
                            <input className="check" type={"checkbox"} onChange={(e) => setcheck(!check)}></input>
                            <span>Remember me</span>
                        </section>


                        <button className="btn" onClick={(e) => { Handler(e) }}>Submit</button>

                    </section>

                </form>

            </div>
            <Link to="/signin">Sign Up</Link>
            {error && <span style={{ color: "red" }}>{error} </span>}
        </div>
    )
}

export default Login;
