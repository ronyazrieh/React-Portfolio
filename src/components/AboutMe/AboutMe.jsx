import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./AboutMe.module.css";
import { motion } from 'framer-motion';
import { Element } from 'react-scroll';

export const Aboutme = () => {
    return (
        <Element name='about'>
            <section className={styles.container}>
                <motion.div className={styles.card}
                    transition={"duration: .3"}
                    whileHover={{
                        boxShadow: "0 0 32px 7px rgba(127, 0, 255, 0.40)",
                        transition: { duration: .3 },
                        scale: 1.003,
                    }}>
                    <h1 className={styles.vertical}>About Me</h1>
                    <div className={styles.info}>
                        <div className={styles.infoBlock}>
                            <h3 className={styles.infoHeader}>Education</h3>
                            <p className={styles.infoText}>Bachelor of Information Technology in Interactive Multimedia and Design from Carleton University, with a specialization in Software Development.</p>
                        </div>
                        <hr />
                        <div className={styles.infoBlock}>
                            <h3 className={styles.infoHeader}>Software Development</h3>
                            <p className={styles.infoText}>Experience developing full-stack web applications using React, JavaScript, Django, PHP, Node.js, SQL, and REST APIs, with a focus on building scalable and user-focused solutions.</p>
                        </div>
                        <hr />
                        <div className={styles.infoBlock}>
                            <h3 className={styles.infoHeader}>Professional Experience</h3>
                            <p className={styles.infoText}>Solutions Architect Intern at eKhonnector, where I developed production web applications, integrated REST APIs, worked with SQL databases, and collaborated with clients and developers to deliver business solutions.</p>
                        </div>
                    </div>
                </motion.div>
            </section>
        </Element>
    )
}
