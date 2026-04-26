import Project1 from "../components/project1.jsx";
import Project2 from "../components/project2.jsx";
import Project3 from "../components/project3.jsx";
import {useState} from "react";

function Portfolio (){
	const [viewProjects, setViewProjects] = useState(false);
	const lookAtProjects = () => {
	if (viewProjects) {
		setViewProjects(false);
	} else {
		setViewProjects(true);
	}
}


 return (
        <div>
            <h2>Portfolio</h2>

                <button onClick={lookAtProjects}>Look at projects</button>
                {viewProjects && (
                <div>
                <Project1 title = "The Dog Blog" githubLink = "https://github.com/tildanyrvik/the-dog-blog.git"></Project1>
                <br />
                <Project2 title = "Flexbox Project" githubLink = "https://github.com/tildanyrvik/flexbox-practice.git"></Project2>
                <br />
                <Project3 title = "Wedding Invite" githubLink = "https://github.com/tildanyrvik/wedding-invite-animation.git"></Project3>
                </div>
                )}
        </div>
    )
}


export default Portfolio;


