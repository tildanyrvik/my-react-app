import React from "react";
import "./project1.css";

function P1Popup({info, link, onClick}) {
    return(
        <div className="popup_container">
          <p className="paragraph">{info}</p>
            <br />
    
            <a className="link" href="https://github.com/tildanyrvik/the-dog-blog.git">{link}</a>

            <button className="button" onClick={onClick}>Close window</button>
        </div>
    )
}

export default P1Popup;