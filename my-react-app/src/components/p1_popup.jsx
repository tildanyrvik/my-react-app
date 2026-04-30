import React from "react";

function P1Popup({info, link, onClick}) {
    return(
        <div>
          <p className="paragraph">{info}</p>
            <br />
    
            <a href="https://github.com/tildanyrvik/the-dog-blog.git">{link}</a>

            <button onClick={onClick}>Close window</button>
        </div>
    )
}

export default P1Popup;