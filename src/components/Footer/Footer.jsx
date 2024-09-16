import React from 'react'
import styles from "./Footer.module.css";
import { Link } from 'react-scroll';


export const Footer = () => {
    return (
        <footer className={styles.container}>
            <div className={styles.linkSection}>
                <div className={styles.linkCol} id={styles.nameOne}>
                        &copy; ronyazrieh.com
                </div>
                <div className={styles.linkCol}>
                    <h4 className={styles.linkHeader}>
                        Projects
                    </h4>
                    <ul className={styles.linkList}>
                        <li><a href='https://github.com/ronyazrieh/Limitless-Webapp'>Limitless</a></li>
                        <li><a href='https://github.com/ronyazrieh/React-Portfolio'>React Portfolio</a></li>
                        <li><a href='https://github.com/ronyazrieh/NXG-LEAGUE'>NexGen League</a></li>
                    </ul>
                </div>
                <div className={styles.linkCol}>
                    <h4 className={styles.linkHeader}>
                        Jump To
                    </h4>
                    <ul className={styles.linkList}>
                        <li><Link to='hero' smooth={true} duration={500} offset={-200}>Top</Link></li>
                        <li><Link to="about" smooth={true} duration={500} offset={-120}>About Me</Link></li>
                        <li><Link to="skills" smooth={true} duration={500} offset={-50}>Skills</Link></li>
                        <li><Link to="projects" smooth={true} duration={500} offset={-60}>Projects</Link></li>
                    </ul>
                </div>
                <div className={styles.linkCol}>
                    <h4 className={styles.linkHeader}>
                        Personals
                    </h4>
                    <ul className={styles.linkList}>
                        <li><a href='https://github.com/ronyazrieh'>GitHub</a></li>
                        <li><a href='https://www.linkedin.com/in/rony-azrieh-05a071238/'>LinkedIn</a></li>
                        <li><a href='mailto:rony.azrieh@cmail.carleton.ca'>Email</a></li>
                    </ul>
                </div>
            </div>
            <div className={styles.quoteSection}>
                <p>Designed and coded by Rony Azrieh. Powered by React and FramerMotion.</p>
                <p id={styles.nameTwo}>&copy; ronyazrieh.com</p>
            </div>
        </footer>
    )
}
