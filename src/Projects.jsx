import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export function Projects() {
    function resize() {
        const chickenWebsite = document.getElementById('chicken-website');
        const paint = document.getElementById('paint');

        if (window.innerWidth < 1000) {
            chickenWebsite.src = './src/pictures/chicken-website-mobile.webp';
            paint.src = './src/pictures/paint-mobile.webp';
        } else {
            chickenWebsite.src = './src/pictures/chicken-website.webp';
            paint.src = './src/pictures/paint.webp';
        }
    }
    window.addEventListener("resize", resize);

    return (
        <div id="projects" >
            <h1 class="sub-title"><span>My</span> Projects</h1>
            <div class="projects-container">
                <div class="work-list">
                    <div class="work">
                        <img src="./src/pictures/chicken-website.webp" id="chicken-website" alt="picture of my chicken website" />
                        <div class="layer">
                            <h1>Chicken Website</h1>
                            <p>
                                Website, dedicated to chicken, created using HTML, CSS, JavaScript
                                and PHP for the server side
                            </p>
                            <a href="https://github.com/P1l3T0/Chicken-Website" target="_blank">
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon" /></a>
                        </div>
                    </div>
                    <div class="work">
                        <img src="./src/pictures/paint.webp" id="paint" alt="picture of my shape editor application" />
                        <div class="layer">
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



