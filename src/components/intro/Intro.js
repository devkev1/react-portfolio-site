import "./intro.css";
import Me from "../../img/me.jpeg";

function Intro() {
  return (
  <div className="i">
    <div className="i-left">
      <div className="i-left-wrapper">
        <h2 clasName="i-intro">Hello, My name is</h2>
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
          Description goes here.
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
