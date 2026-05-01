import { useState } from "react";
import P1Popup from "./p1_popup.jsx";
import "./project1.css";
import project1 from "../assets/project1.png";

function Project1 (props){
    const [popupInfo, setPopupInfo] = useState({
        info: `This project is from early on of doing a front end development course at Sundsgården Folkhögskola. 
            Using HTML and CSS, I created a simple website about different dog breeds and a link for an adoption 
            website. In this project, I learned to use basic CSS, such as adding background colors, image borders, 
            font colors and styling links. One challenge I faced was getting the link for 'Read more about French 
            Bulldogs' to work, as the intention was for the link to take the user to the bottom of the page. 
            However, by looking carefully at my notes and watching the lesson again, I managed to solve this problem.`,
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