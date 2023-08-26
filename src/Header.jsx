import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmarkSquare } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';

export function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    function openMenu() {
        setMenuOpen(true);
    };

    function closeMenu() {
        setMenuOpen(false);
    };

    return (
        <div id="header">
            <div
                id="blur-overlay"
                style={{ display: isMenuOpen ? 'block' : 'none' }}
            ></div>
            <div className="header-container">
                <nav>
                    <ul
                        id="side-menu"
                        style={{ right: isMenuOpen ? '0' : '-210px', transition: '500ms ease' }}
                    >
                        <li><a href="#about">about</a></li>
                        <li><a href="#projects">projects</a></li>
                        <li><a href="#contacts">contacts</a></li>
                        <FontAwesomeIcon
                            icon={faXmarkSquare}
                            onClick={closeMenu}
                            className="icon"
                        />
                    </ul>
                    <FontAwesomeIcon
                        icon={faBars}
                        onClick={openMenu}
                        className="icon"
                    />
                </nav>

                <div className="header-text">
                    <h1>Hello,<br />I'm <span>P1l3T0</span></h1>
                </div>
            </div>
        </div>
    );
};