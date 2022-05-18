import "./projects.css";
import Project from "../project/Project";
import { projects} from "../../data";

const Projects = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Projects</h1>
                <p className="pl-desc">
                    Here are my current projects:
                </p>
            </div>
            <div className="pl-list">
                {projects.map((item) => (
                     <Project key={item.id} img={item.img} link={item.link} />
                ))} 
            </div>
        </div>
    )
}

export default Projects;

