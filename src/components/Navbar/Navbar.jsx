import React from "react";

import styles from "./Navbar.module.css"

export const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div />
            <div className={styles.nav}>
                <a className={styles.title} href="/" >Rony Azrieh</a>
                <ul className={styles.menu}>
                    <li>
                        <a href="#about">About</a>
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
        </nav>
    )
}