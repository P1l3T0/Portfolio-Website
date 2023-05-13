import { data } from './ProjectsData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export function Projects() {
    function resize() {
        const chickenWebsite = document.getElementById('chicken-website');
        const paint = document.getElementById('paint');

        if (window.innerWidth < 1000) {
            chickenWebsite.src = './assets/chicken-website-mobile.webp';
            paint.src = './assets/paint-mobile.webp';
        } else {
            chickenWebsite.src = './assets/chicken-website.webp';
            paint.src = './assets/paint.webp';
        }
    }
    window.addEventListener("resize", resize);

    return (
        <div id="projects" >
            <h1 className="sub-title"><span>My</span> Projects</h1>
            <div className="projects-container">
                <div className="work-list">
                    {data.map(project =>
                        <div className="work" key={project.id}>
                            <img src={project.src} id={project.id} alt={project.alt} />
                            <div className="layer">
                                <h1>{project.name}</h1>
                                <p>{project.description}</p>
                                <a href={project.link} target="_blank">
                                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon" /></a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div >
    );
};



