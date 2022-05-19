import "./contact.css";
import Resume from "../../img/resume.png";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import LinkedIn from "../../img/linkedin.png";
import GitHub from "../../img/github.png";
import { useRef } from "react";

const Contact = () => {
    const forRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <div className="c-title">Let's connect</div>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Resume} alt="" className="c-icon" /> Download Resume
                        </div>
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" /> 551-250-1724
                        </div>
                        <div className="c-info-item">
                            <img src={Email} alt="" className="c-icon" /> kevingywong@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={LinkedIn} alt="" className="c-icon" /> https://www.linkedin.com/in/devkev1
                        </div>
                        <div className="c-info-item">
                            <img src={GitHub} alt="" className="c-icon" /> https://github.com/devkev1
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc"><b>Get in touch</b></p>
                    <form ref={forRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="text" placeholder="Email" name="user_email" />
                        <textarea rows="5" placeholder="Message" name="message" />
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;
