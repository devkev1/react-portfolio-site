import "./contact.css";
import Resume from "../../img/resume.png";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import LinkedIn from "../../img/linkedin.png";
import GitHub from "../../img/github.png";
import { useRef, useState, useContext } from "react";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../context";
import resume from "./Kevin Wong - Resume.pdf";


const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_8ldgwyj', 'template_v3uqote', formRef.current, 'XJv20Oh3DqJfSi5NN')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <div className="c-title">Let's connect</div>
                    <div>


                        <div className="c-info-item">
                           
                            <a href={resume}
                target="_blank"
                rel="noreferrer" style={{ color: darkMode ? "white" : "black" }}> 
                     <div className="c-icon-container">
                            <img src={Resume} alt="" className="c-icon" />
                        </div>
                             Download Resume</a>
                        </div>





                        <div className="c-info-item">
                        <div className="c-icon-container">
                        <img src={Phone} alt="" className="c-icon" />
                            </div>
                             551-250-1724
                        </div>





                        <div className="c-info-item">
                        <div className="c-icon-container">
                        <img src={Email} alt="" className="c-icon" /> 
                            </div> 
                            kevingywong@gmail.com
                        </div>


                        
                        <div className="c-info-item">
                              <a href="https://www.linkedin.com/in/devkev1"
                target="_blank"
                rel="noreferrer"
                style={{ color: darkMode ? "white" : "black" }}
              >  <img src={LinkedIn} alt="" style={{ marginRight: 20, width: 38, height: 38 }} /> https://www.linkedin.com/in/devkev1
    </a>   
                        </div>



                        <div className="c-info-item">
                        <a href="https://github.com/devkev1"
                target="_blank"
                rel="noreferrer"
                style={{ color: darkMode ? "white" : "black" }}
              > 
                        <div className="c-icon-container">
                        <img src={GitHub} alt="" className="c-icon" />

                        </div>
                         https://github.com/devkev1
    </a> 
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc"><b>Get in touch</b></p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="text" placeholder="Email" name="user_email" />
                        <textarea rows="5" placeholder="Message" name="message" />
                        <button>Submit</button> 
                        {" "}{done && "Message sent."}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;
