import data from "./Data.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  window.addEventListener("resize", function () {
    const paint = document.getElementById('paint');
    const iFitTracker = document.getElementById('ifit-tracker');
    const chickenWebsite = document.getElementById('chicken-website');

    if (window.innerWidth < 1000) {
      paint.src = './assets/paint-mobile.webp';
      iFitTracker.src = './assets/ifittracker-mobile.webp';
      chickenWebsite.src = './assets/chicken-website-mobile.webp';
    } else {
      paint.src = './assets/paint.webp';
      iFitTracker.src = './assets/ifittracker.webp';
      chickenWebsite.src = './assets/chicken-website.webp';
    }
  });

  return (
    <div id="projects" >
      <h1 className="sub-title"><span>My</span> Projects</h1>
      <div className="projects-container">
        <div className="work-list">
          {data.map((project, index) => (
            <div className="work" key={index}>
              <img src={project.src} id={project.id} alt={project.alt} />
              <div className="layer">
                <h1>{project.name}</h1>
                <p>{project.description}</p>
                <a href={project.link} target="_blank">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon" /></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;