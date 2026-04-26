import "./project1.css";
import project1 from "../assets/project1.png";

function Project1 (){

    return (
    <div className="project1_container">
        <img className="project1_img" src={project1} alt="Website called Dog Blog with yellow background"/>
        <br />
        <h2 className="heading">The Dog Blog</h2>
        <p className="paragraph"> This project is from early on of doing a front end development course at Sundsgården Folkhögskola. 
            Using HTML and CSS, I created a simple website about different dog breeds and a link for an adoption 
            website. In this project, I learned to use basic CSS, such as adding background colors, image borders, 
            font colors and styling links. One challenge I faced was getting the link for "Read more about French 
            Bulldogs" to work, as the intention was for the link to take the user to the bottom of the page. 
            However, by looking carefully at my notes and watching the lesson again, I managed to solve this problem. 
            
        <br />
        
        <p className="paragraph"><span className="github_repo">Github repository:</span> https://github.com/tildanyrvik/the-dog-blog.git</p>
        </p>
    </div>
    )
}

export default Project1;