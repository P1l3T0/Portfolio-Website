import { useState } from "react";
import TechStack from "./TechStack";
import AboutMe from "./AboutMe";
import TitleCards from "./TitleCards";
import Content from "./Content";

const About = () => {
    const [activeLink, setActiveLink] = useState("title-link1");

    return (
        <div id="about">
            <div className="container">
                <h1 className="sub-title">About <span>me</span></h1>
                <div className="row">
                    <TechStack />
                    <div className="about-col2">
                        <AboutMe />
                        <TitleCards activeLink={activeLink} setActiveLink={setActiveLink} />
                        <Content activeLink={activeLink} />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default About;