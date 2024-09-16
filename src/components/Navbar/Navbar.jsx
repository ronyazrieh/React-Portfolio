import React, { useState } from "react";

import styles from "./Navbar.module.css"
import { getImageUrl } from "../../utils"
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleCheckboxChange = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div />
            <div className={styles.nav}>
                <a className={styles.title} href="/" >Rony Azrieh</a>
                <div className={styles.drop}>
                    <label className={styles.container}>
                        <input
                            type="checkbox"
                            checked={menuOpen}
                            onChange={handleCheckboxChange}
                        />
                        <div className={styles.checkmark}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </label>
                    <ul className={`${styles.menu} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}  >
                        <li>
                            <Link to="about" smooth={true} duration={500} offset={-120}>About Me</Link>
                        </li>
                        <li>
                            <Link to="skills" smooth={true} duration={500} offset={-50}>Skills</Link>
                        </li>
                        <li>
                            <Link to="projects" smooth={true} duration={500} offset={-60}>Projects</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}