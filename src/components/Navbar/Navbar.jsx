import React, { useState } from "react";

import styles from "./Navbar.module.css"
import { getImageUrl } from "../../utils"

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
                        <a href="#About">About</a>
                    </li>
                    <li>
                        <a href="#Experience">Experience</a>
                    </li>
                    <li>
                        <a href="#Projects">Projects</a>
                    </li>
                    <li>
                        <a href="#Contact">Contact</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}