import project3Img from "../assets/project3_img.png";

function Project3(){
    
    return (
        <div className="project3_container">
            <img className="project3_img" src={project3Img} alt="Pink wedding invite with flowers" />
            <br />
            <h2 className="heading">Wedding invite</h2>
            <p className="paragraph">In this project we got to create anything we wanted to practise animations and transitions. 
                I chose to create a wedding invite with an animation added to the heading and an image. I also 
                added a hover effect to the button and a transition of the color. I really enjoyed this as it was 
                creative and fun to learn and use new functions with CSS! This was my first introduction to 
                @keyframes which I initially found tricky, but watching back the lesson helped me understand how 
                they work.
            <br />
            <span className="github_repo">Github repository:</span> https://github.com/tildanyrvik/wedding-invite-animation.git
            </p>
        </div>
    )
}

export default Project3