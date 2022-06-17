import "./project.css";
import GitHub from "../../img/github.png";

const Project = ({ img, link, description, github }) => {
  return (
    <div className="p">
      <a href={link} target="_blank" rel="noreferrer">
        <div className="p-img" style={{ backgroundImage: `url(${img})` }}></div>
      </a>
      <p className="p-description">{description}</p>
      <a href={github} target="_blank" rel="noreferrer">
        <div>
          <img src={GitHub} alt="" className="p-github" />
        </div>
      </a>
    </div>
  );
};

export default Project;
