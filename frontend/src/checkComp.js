import React from "react";
import { Navigate ,Outlet } from "react-router-dom";

const CheckComponent=()=>{
    const auth=localStorage.getItem("user")
    console.log(auth);
    
    let isToken=true
    return(
        isToken?<Outlet/>:<Navigate to="/"/>

    )
}
export default CheckComponent;