import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn, faTwitter, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

export function Contacts() {
    return (
        <div id="contacts" >
            <div className="container">
                <h1 className="sub-title">Contact <span>me</span></h1>
                <div className="row">
                    <div className="contacts-left">
                        <p><FontAwesomeIcon icon={faPaperPlane} className="icon" />vgan3v@gmail.com</p>
                        <i className="fa-solid fa-regular fa-paper-plane"></i>
                        <div className="social-icons">
                            <a href="https://github.com/P1l3T0" target="_blank">
                                <FontAwesomeIcon icon={faGithub} className="icon" />
                            </a>
                            <a href="https://www.linkedin.com/in/vasil-ganev-2507a3210/" target="_blank">
                                <FontAwesomeIcon icon={faLinkedinIn} className="icon" /></a>
                            <a href="https://twitter.com/punisher_waffle" target="_blank">
                                <FontAwesomeIcon icon={faTwitter} className="icon" /></a>
                            <a href="https://www.instagram.com/kmetanasliven/" target="_blank">
                                <FontAwesomeIcon icon={faInstagram} className="icon" /></a>
                            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
                                <FontAwesomeIcon icon={faYoutube} className="icon" /></a>
                        </div>
                        <button><a href='./CV.pdf' download>download CV</a></button>
                    </div>
                    <div className="contacts-right">
                        <form action="https://formsubmit.co/vgan3v@gmail.com" method="POST">
                            <input type="text" name="text" id="text-field" placeholder="Your name" required />
                            <input type="email" name="email" id="email-field" placeholder="Your email" required />
                            <textarea name="textarea" rows="6" id="textarea-field" placeholder="Your message"
                                required></textarea>
                            <button type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
}