import React from 'react'
import styles from "./Skills.module.css";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { IconList } from './IconList';

export const Skills = () => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 3%", "end 70%"]
    });

    return (
        <section className={styles.container} ref= {ref}>
            <div className={styles.iconList}>
                <IconList software="HTML" icon="HTML"/>
                <IconList software="CSS" icon="CSS"/>
                <IconList software="JavaScript" icon="JAVASCRIPT"/>
                <IconList software="React" icon="REACT"/>
                <IconList software="Django" icon="DJANGO"/>
                <IconList software="TypeScript" icon="TYPESCRIPT"/>
                <IconList software="VSCode" icon="VSCODE"/>
                <IconList software="Git" icon="GIT"/>
                <IconList software="Adobe Xd" icon="ADOBEXD"/>
                <IconList software="Git Hub" icon="GITHUB"/>
            </div>
            <div className={styles.skillCard}>
                <div>
                    <figure className={styles.progress}>
                        <svg id={styles.progress} width="150" height="150" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="30" pathLength="1" className={styles.bg} />
                            <motion.circle
                                cx="50"
                                cy="50"
                                r="30"
                                pathLength="1"
                                className={styles.indicator}
                                style={{ pathLength: scrollYProgress }}
                            />
                        </svg>
                    </figure>
                    <h1 className={styles.vertical}>Skills</h1>
                </div>
                <div className={styles.info}>
                    <div className={styles.infoBlock}>
                        <p className={styles.infoText}>My skills are a culmination of tools and techniques I have studied and developed with throughout my University education, and Meta Certificates. </p>
                    </div>
                    <hr />
                    <div className={styles.infoBlock}>
                        <p className={styles.infoText}>On the front end I focus on building using React. I have used this library to power interactive SPAs, and utilize it's library of tools to create unique visual experiences.</p>
                    </div>
                    <hr />
                    <div className={styles.infoBlock}>
                        <p className={styles.infoText}>On the backend my main focus is to create intuitive and simplistic data structures. I have used Djnago and taken advantage of it's advanced Superadmin technology to create web app's that store and display information.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
