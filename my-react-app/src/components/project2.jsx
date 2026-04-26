import "./project2.css";
import project2Img from "../assets/project2_img.png";

function Project2(props){

    return (
    <div className="project2_container">
        <img className="project2_img" src={project2Img} alt="Burgundy website with orange and red boxes" />
        <br /> 
        <h2 className="heading">{props.title}</h2>
        <p className="paragraph">In this project, I practised using flexbox to position elements. I created six different containers 
            with three boxes inside of different sizes. The red boxes are positioned differently in each container, 
            which taught me how to use flexbox in CSS. This project was challenging, as I occasionally struggled to 
            position the boxes just the way I wanted to, but managed to complete this by looking at my notes, 
            watching back the lesson and conducting online research.
        <br />
            <span className="github_repo">Github repository:</span> https://github.com/tildanyrvik/flexbox-practice.git
        </p>
    </div>
    )
}

export default Project2
