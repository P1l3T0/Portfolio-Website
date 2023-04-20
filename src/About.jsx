import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact } from "@fortawesome/free-brands-svg-icons";

export function About() {
    const [activeLink, setActiveLink] = useState(null);

    function handleLinkClick(linkId) {
        setActiveLink(linkId);
    };

    function removeInactiveContent() {
        setActiveLink(null);
    };

    return (
        <div id="about">
            <div className="container">
                <h1 className="sub-title">About <span>me</span></h1>
                <div className="row">
                    <div className="about-col1">
                        <img src="./assets/pileshkiq-samurai.webp" alt="picture of me with my katana" />
                        <h2>Technologies</h2>
                        <div className="tech-stack">
                            <FontAwesomeIcon icon={faHtml5} className="tech-icons" />
                            <FontAwesomeIcon icon={faCss3Alt} className="tech-icons" />
                            <FontAwesomeIcon icon={faJs} className="tech-icons" />
                            <FontAwesomeIcon icon={faReact} className="tech-icons" />
                        </div>
                    </div>
                    <div className="about-col2">
                        <div className="about-text">
                            <h2>Hi, I'm Vasil</h2>
                            <p>
                                I'm a 20 year old student currently pursuing a degree in
                                Computer Science at Technical University of Sofia. From
                                an young age I've had an obsession with computers and how
                                they function and that's how I got this passion for coding
                                and wanting to create software for various purposes. {<br />}
                                It all started with making simple games in the Unity game engine
                                and years later I'm here, fully focused on front-end, currently
                                working on various projects made for either practise or real
                                use (it's a secret big project) and upgrading my skills as a developer.
                            </p>
                        </div>

                        <div className="title-cards" id="title-link">
                            <h3
                                id="title-link1"
                                className={activeLink === "title-link1" ? "active-link" : "title-link"}
                                onClick={() => {
                                    removeInactiveContent();
                                    handleLinkClick("title-link1");
                                }}
                            >education
                            </h3>

                            <h3
                                id="title-link2"
                                className={activeLink === "title-link2" ? "active-link" : "title-link"}
                                onClick={() => {
                                    removeInactiveContent();
                                    handleLinkClick("title-link2");
                                }}
                            >skills
                            </h3>

                            <h3
                                id="title-link3"
                                className={activeLink === "title-link3" ? "active-link" : "title-link"}
                                onClick={() => {
                                    removeInactiveContent();
                                    handleLinkClick("title-link3");
                                }}
                            >experience
                            </h3>
                        </div>

                        {activeLink === "title-link1" && (
                            <div id="education" className="active-content">
                                {activeLink === "title-link1" && (
                                    <ul>
                                        <li>
                                            <h4>2021 - current</h4>
                                            <p>Computer Science, Technical University of Sofia</p>
                                        </li>
                                        <li>
                                            <h4>2016 - 2021</h4>
                                            <p>PMG Sliven</p>
                                        </li>
                                    </ul>
                                )}
                            </div>
                        )}

                        {activeLink === "title-link2" && (
                            <div id="skills" className="active-content">
                                {activeLink === "title-link2" && (
                                    <ul>
                                        <li>
                                            <h4>front-end</h4>
                                            <p>HTML, CSS, JavaScript and currently learning React</p>
                                        </li>
                                        <li>
                                            <h4>back-end</h4>
                                            <p>C# and .NET Framework</p>
                                        </li>
                                        <li>
                                            <h4>team player</h4>
                                            <p>
                                                Great at working with a serious and passionate team,
                                                ready to achieve their desired goal
                                            </p>
                                        </li>
                                    </ul>
                                )}
                            </div>
                        )}

                        {activeLink === "title-link3" && (
                            <div id="experience" className="active-content">
                                {activeLink === "title-link3" && (
                                    <ul>
                                        <li>
                                            <h4>frontend-tajiq</h4>
                                            <p>Pravq saitove za maika mi i TU Sliven 💀💀💀</p>
                                        </li>
                                    </ul>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div >
    );
}