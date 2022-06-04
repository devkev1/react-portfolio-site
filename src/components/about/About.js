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
                <p className="a-desc">I'm a coachable developer that loves playing with code, thinking of new ideas, and learning new technologies. I enjoy creating new things with HTML, designing with CSS, and applying functionalities with JavaScript. Seeing ideas come to life is my favorite thing about development and I am growing the skills I currently have and learning new ones.</p>
            </div>
        </div>
    )
}

export default About;