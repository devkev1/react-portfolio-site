import "./intro.css";
import Me from "../../img/me.jpeg";

function Intro() {
  return (
  <div className="i">
    <div className="i-left">
      <div className="i-left-wrapper">
        <h2 className="i-intro">Hello, My name is</h2>
        <h1 className="i-name">Kevin Wong</h1>
        <div className="i-title">
          <div className="i-title-wrapper">
            <div className="i-title-item">Web Developer</div>
            <div className="i-title-item">Passionate Learner</div>
            <div className="i-title-item">HTML</div>
            <div className="i-title-item">CSS</div>
            <div className="i-title-item">JavaScript</div>
            <div className="i-title-item">React</div>
          </div>
        </div>
        <p className="i-desc">
          Hi there! Thanks for visiting my page! I'm Kevin and I'm a front-end developer from Northern New Jersey. Scroll down this page to find out more about me!
        </p>
      </div>
    </div>
    <div className="i-right">
      <img src={Me} alt="" className="i-img" />
    </div>
  </div>
)
};

export default Intro;
