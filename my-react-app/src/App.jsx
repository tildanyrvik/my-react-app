import Project1 from "./components/project1";
import Project2 from "./components/project2";
import Project3 from "./components/project3";

function App() {

  return (
    <>
      <Project1 title = "The Dog Blog" githubLink = "https://github.com/tildanyrvik/the-dog-blog.git"></Project1>
      <br />
      <Project2 title = "Flexbox Project" githubLink = "https://github.com/tildanyrvik/flexbox-practice.git"></Project2>
      <br />
      <Project3 title = "Wedding Invite" githubLink = "https://github.com/tildanyrvik/wedding-invite-animation.git"></Project3>
    </>
  )
}

export default App