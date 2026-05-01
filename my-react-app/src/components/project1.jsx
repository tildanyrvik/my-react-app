import { useState } from "react";
import P1Popup from "./p1_popup.jsx";
import "./project1.css";
import project1 from "../assets/project1.png";

function Project1 (props){
    const [popupInfo, setPopupInfo] = useState({
        info: "information about project",
        link: "Link to github",
    });
    const [isOpen, setIsOpen] = useState(false);
    const closePopup = () => {
        setIsOpen(false);
    };

    return (
    <div className="project1_container">
        <img className="project1_img" src={project1} alt="Website called Dog Blog with yellow background"/>
        <br />
        <h2 className="heading">{props.title}</h2>
        <br />
        <button onClick={() => setIsOpen(true)}>More information</button>
        {isOpen && (
            <P1Popup 
            info = {popupInfo.info} 
            link = {popupInfo.link} 
            onClick = {closePopup} />
        )}
  
    </div>
    )
}

export default Project1;