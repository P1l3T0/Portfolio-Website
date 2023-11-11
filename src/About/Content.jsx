const Content = ({ activeLink }) => {
    return (
        <>
            {activeLink === "title-link1" && (
                <div id="experience" className="active-content">
                    {activeLink === "title-link1" && (
                        <ul>
                            <li>
                                <h4>December 2023 - current </h4>
                                <p>Junior Technical Support Engineer at <strong>Progress Software</strong></p>
                            </li>
                            <li>
                                <h4>July 2023 - December 2023 </h4>
                                <p>Software Engineer Intern at <strong>Progress Software</strong></p>
                            </li>
                            <li>
                                <h4>saitajiq</h4>
                                <p>Pravq saitove za maika mi i TU Sliven 💀💀💀</p>
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
                                <p>Fluent with the <strong>DOM elements</strong>, and with
                                    a great understanding of the <strong>React</strong> framework</p>
                            </li>
                            <li>
                                <h4>back-end</h4>
                                <p>.NET Family - <strong> ASP NET Core / MVC / AJAX </strong></p>
                            </li>
                            <li>
                                <h4>team player</h4>
                                <p>
                                    Great at working with a serious and passionate
                                    team, ready to achieve their desired goals
                                </p>
                            </li>
                        </ul>
                    )}
                </div>
            )}

            {activeLink === "title-link3" && (
                <div id="education" className="active-content">
                    {activeLink === "title-link3" && (
                        <ul>
                            <li>
                                <h4>2021 - current</h4>
                                <p>Bachelor in <strong>Computer Science</strong>, Technical University of Sofia</p>
                            </li>
                            <li>
                                <h4>2016 - 2021</h4>
                                <p>Science and Mathematics High School "Dobri Chintulov", Sliven</p>
                            </li>
                        </ul>
                    )}
                </div>
            )}
        </>
    );
};

export default Content;