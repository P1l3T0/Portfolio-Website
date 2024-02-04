import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn, faTwitter, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

const SocialMedia = () => {
  return (
    <>
      <div className="contacts-left">
        <p><FontAwesomeIcon icon={faPaperPlane} className="icon" />vgan3v@gmail.com</p>
        <i className="fa-solid fa-regular fa-paper-plane"></i>
        <div className="social-icons">
          <a href="https://github.com/P1l3T0" target="_blank">
            <FontAwesomeIcon icon={faGithub} className="icon" /></a>
          <a href="https://www.linkedin.com/in/vasil-ganev-2507a3210/" target="_blank">
            <FontAwesomeIcon icon={faLinkedinIn} className="icon" /></a>
          <a href="https://twitter.com/punisher_waffle" target="_blank">
            <FontAwesomeIcon icon={faTwitter} className="icon" /></a>
          <a href="https://www.instagram.com/kmetanasliven/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} className="icon" /></a>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
            <FontAwesomeIcon icon={faYoutube} className="icon" /></a>
        </div>
        <button><a href="./assets/CV.pdf" download>download CV</a></button>
      </div>
    </>
  );
};

export default SocialMedia;