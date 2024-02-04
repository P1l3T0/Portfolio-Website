import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faBootstrap, faJs, faReact } from "@fortawesome/free-brands-svg-icons";

const TechStack = () => {
  return (
    <>
      <div className="about-col1">
        <img src="./assets/pileshkiq.webp" alt="picture of me" />
        <h2>Tech stack</h2>
        <div className="tech-stack">
          <FontAwesomeIcon icon={faHtml5} className="tech-icons" />
          <FontAwesomeIcon icon={faCss3Alt} className="tech-icons" />
          <FontAwesomeIcon icon={faBootstrap} className="tech-icons" />
          <FontAwesomeIcon icon={faJs} className="tech-icons" />
          <FontAwesomeIcon icon={faReact} className="tech-icons" />
        </div>
      </div>
    </>
  );
};

export default TechStack;