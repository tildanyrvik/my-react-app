import { useState } from "react";
import "./project1.css";
import project1 from "../assets/project1.png";

function Project1 (props){

    return (
    <div className="project1_container">
        <img className="project1_img" src={project1} alt="Website called Dog Blog with yellow background"/>
        <br />
        <h2 className="heading">{props.title}</h2>
        <br />
        <button onClick={}>More information</button>
        
  
    </div>
    )
}

export default Project1;