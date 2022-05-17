import "./about.css";
import Me2 from "../../img/me2.JPG";

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src={Me2} alt="" className="a-img" />
            </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-desc">Description goes here.</p>
            </div>
        </div>
    )
}

export default About;