import React from 'react'
import styles from "./Footer.module.css";


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
                        <li><a href=''>Top</a></li>
                        <li><a href=''>About Me</a></li>
                        <li><a href=''>Skills</a></li>
                        <li><a href=''>Projects</a></li>
                    </ul>
                </div>
                <div className={styles.linkCol}>
                    <h4 className={styles.linkHeader}>
                        Personals
                    </h4>
                    <ul className={styles.linkList}>
                        <li><a href='https://github.com/ronyazrieh'>GitHub</a></li>
                        <li><a href=''>LinkedIn</a></li>
                        <li><a href=''>Email</a></li>
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
