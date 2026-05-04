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

    const projects = [
        { title: "The Dog Blog", tags: ["HTML", "CSS"],  component: <Project1 title="The Dog Blog" /> },
        { title: "Flexbox Project", tags: ["HTML", "CSS", "Flexbox"], component: <Project2 title="Flexbox Project" githubLink="https://github.com/tildanyrvik/flexbox-practice.git" /> },
        { title: "Wedding Invite", tags: ["HTML", "CSS", "Animation"], component: <Project3 title="Wedding Invite" githubLink="https://github.com/tildanyrvik/wedding-invite-animation.git" /> }
    ];

    const [search, setSearch] = useState("");

    return (
            <div>
                <h2>Portfolio</h2>

                    <button onClick={lookAtProjects}>Look at projects</button>

                    <div>
                        <input
                        type="text"
                        placeholder="Search project..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
            
                {viewProjects && (
                    <div>
                        {projects
                            .filter((project) =>
                                project.title.toLowerCase().includes(search.toLowerCase()) ||
                                project.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()))
                            )
                                    .map((project, index) => (
                                    <div key={index}>
                                        {project.component}
                                    </div>
                            ))
                        }
                    </div>
                  
                )}
            </div>
        )
}
               
export default Portfolio;

    
