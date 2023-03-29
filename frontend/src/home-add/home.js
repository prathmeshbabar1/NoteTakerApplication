import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./home.css"
const Home = ()=>{
const [ note,setNote] = useState([]);
// const [key,setKey] = useState('');
async function noteFetcher(){
  
    await fetch("https://sdaasfsf.onrender.com/api/note").then((res)=>res.json())
    .then((data)=>setNote(data))
}

useEffect(() => {
    noteFetcher();
},[])
async function noteChanger(e){
  let key = e.target.value
    console.log(key);
    if(key){
     let result =   await fetch(`https://sdaasfsf.onrender.com/api/notee/${key}`)
     result = await result.json()
     setNote(result)
     console.log(result);
    }else{
        noteFetcher()
    }
    
}




    return(
<div>
    <nav className="nav">
        <section> Home </section>
        <section><Link to='/add'>AddNote</Link> </section>
        <section>DeleteNote</section>
        <section>export</section>

    </nav>
    <section>
        <input placeholder="type to seach" className="input" onChange={(e)=>noteChanger(e)}></input>

    </section>
    <section className="maindata">
        {note.map((value,index)=>{
            return(
                <div key={index} className="data" >
                    <section className="title">Title:  {value.title}</section>
                    <section className="description">Description: {value.description}</section>
                </div>
            )
        })}
    </section>
</div>

    )
}

export default Home;
