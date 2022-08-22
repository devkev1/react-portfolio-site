import "./project.css";
import GitHub from "../../img/github.png";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const Project = ({ img, link, description, github }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="p">
      <div className="p-img" style={{ backgroundImage: `url(${img})` }}>
        <a href={link} target="_blank" rel="noreferrer" className="p-site-link">
          &nbsp;
        </a>
      </div>
      <p className="p-description">{description}</p>
      <div className="p-padding"></div>
      <div>
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="p-github-link"
        >
          <img src={darkMode ? GitHub : GitHub} alt="" className="p-github" />
        </a>
      </div>
    </div>
  );
};

export default Project;
