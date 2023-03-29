import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./add.css"
const AddNote = ()=>{
    const [data, setData] = useState({ title: "", description: "" });
    
    const navigate = useNavigate();
const handler = (e)=>{
    e.preventDefault();
    console.log(data);
    if (data.title === "" || data.description === "" ) {
     
        return;
    }
    fetch("https://sdaasfsf.onrender.com/api/add", {
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
        
                navigate("/home");
            
        })
        .catch((e) => {
            console.log(e);
        });
}
console.log(data);

    return(
<div>

<nav className="nav">
        <section > <Link to={"/home"}>Home </Link> </section>
        <section>AddNote </section>
        <section>DeleteNote</section>
        <section>export</section>

    </nav>
    <section className="mainsection">
    <section className="flexx">
    <lable className="name ">Title</lable>
    <input onChange={(e)=>setData({...data,title:e.target.value})} className="text" ></input>
</section>
<section className="flexx" >
    <lable className="name name1" >Description</lable>

    <textarea type='texarea' className="textarea"  onChange={(e)=>setData({...data,description:e.target.value})}></textarea>
</section>
<section>
    <button className="name" onClick={handler}>Add Note</button>
</section>
    </section>


</div>

    )
}

export default AddNote
