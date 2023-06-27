import git from "../img/icons/gitHub-black.svg"
import { useParams } from "react-router-dom";
import { projects } from "../helpers/projects_list";

const NewProject = () => {
    const {id} = useParams();
    const project  = projects[id];
    return ( 
        <main className="section">
        <div className="container">
            <div className="project-details">
                <h1 className="title-1">{project.title}</h1>
                <p>
                    {id}
                </p>

                <img src={project.imgBig} alt="" className="project-details__cover"/>
                <a href="https://github.com/Sanzhar09?tab=repositories" className="btn-outline">
                    <img src={git} alt=""/>
                    GitHub repo
                </a>

            </div>
        </div>
    </main>
     );
}
 
export default NewProject;