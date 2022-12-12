import React, { useEffect, useState } from "react";
import "./postview.css"
function Preview(){
  const[data,setdata]=useState()
    
    useEffect(()=>{
          fetch("http://localhost:3004/user").then((res)=>{ return res.json()}).then((res)=>{
            
          setdata(res)
          })
    },[])
    
    return<>

    <div className="papa">
        <nav>
        <p className="ico">instaclone</p>
        <i className="fa-solid fa-camera"></i>
        </nav>
       <div className="grandpa">
       {data&& data.map((elem,index)=>{
           return <section className="card" key={index}>
              <div className="hjk">
                <span>
                 <p className="ana">{elem.name}</p>  
                 <p className="ana">{elem.location}</p> 
                </span>
                <span className="gh">...</span>
              </div>
            <img src={elem.PostImage} alt="img1"/>
            <div className="likecon">
                <div id="jh">
                <i className="fa-regular fa-heart"></i>
                <i className="fa-solid fa-rocket"></i>
                </div>
                <div id="kh">{elem.date}h</div>
            </div>
            
              <div>
                <p className="bn">{elem.description}</p>
              </div>

        </section>})}
       </div>
        
        
    </div>
    </>
}
export default Preview