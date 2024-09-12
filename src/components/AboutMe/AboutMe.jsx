import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./AboutMe.module.css";
import { motion } from 'framer-motion';

export const Aboutme = () => {
    return (
        <section className={styles.container}>
            <motion.div className={styles.card}
            whileHover={{
                boxShadow: "0 0 32px 7px rgba(127, 0, 255, 0.30)",
                transition: { duration: .3 },
              }}>
                <h1 className={styles.vertical}>About Me</h1>
                <div className={styles.info}>
                    <div className={styles.infoBlock}>
                        <h3 className={styles.infoHeader}>Education</h3>
                        <p className={styles.infoText}>I am currently a student at Carleton university obtaining my Bachelors of Information Technology, Interactive Multimedia and Design.</p>
                    </div>
                    <hr /> 
                    <div className={styles.infoBlock}>
                        <h3 className={styles.infoHeader}>Web Developer</h3>
                        <p className={styles.infoText}>I am completing my Bachelors with a specification in Web Development and have experience using technology such as React, Django, Node.js and more.</p>
                    </div>
                    <hr /> 
                    <div className={styles.infoBlock}>
                        <h3 className={styles.infoHeader}>Co-op</h3>
                        <p className={styles.infoText}>I am a student in the Co-op program, and am available throughout 2025</p>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
