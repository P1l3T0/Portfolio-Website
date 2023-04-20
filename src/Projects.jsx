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
                    <div className="work">
                        <img src="./assets/chicken-website.webp" id="chicken-website" alt="picture of my chicken website" />
                        <div className="layer">
                            <h1>Chicken Website</h1>
                            <p>
                                Website, dedicated to chicken, created using HTML, CSS, JavaScript
                                and PHP for the server side
                            </p>
                            <a href="https://github.com/P1l3T0/Chicken-Website" target="_blank">
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon" /></a>
                        </div>
                    </div>
                    <div className="work">
                        <img src="./assets/paint.webp" id="paint" alt="picture of my shape editor application" />
                        <div className="layer">
                            <h1>2D Shape Editor</h1>
                            <p>
                                Application for creating 2D shapes and drawing with freehand,
                                using vector graphics, created with C# and Windows Forms
                            </p>
                            <a href="https://github.com/P1l3T0/2D-Shape-Editor" target="_blank">
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};



