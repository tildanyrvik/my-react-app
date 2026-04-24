import project2_img from "../assets/project2_img";

function Project2(){

    return (
    <div>
        <img src={project2_img} alt="Burgundy website with orange and red boxes" />
        <br /> 
        <h2>Flexbox Project</h2>
        <br />
        <p>In this project, I practise using flexbox to position elements. I created six different containers 
            with three boxes inside of different sizes. The red boxes are positioned differently in each container, 
            which taught me how to use flexbox in CSS. This project was challenging, as I occasionally struggled to 
            position the boxes just the way I wanted to, but managed to complete this by looking at my notes, 
            watching back the lesson and conducting online research.
            <br />
            Github repository: https://github.com/tildanyrvik/flexbox-practice.git
        </p>
    </div>
    )
}

export default Project2