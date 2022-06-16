import "./project.css";

const Project = ({ img, link, description }) => {
    return (
        <div className="p">
            <a href={link} target="_blank" rel="noreferrer">
            <div className="p-img" style={{ backgroundImage: `url(${img})` }}>
            </div>
            </a>
            <p className="p-description">{description}</p>
        </div>
    )
}

export default Project;