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
                            <p className={styles.infoText}>Carleton University obtaining a Bachelors of Information Technology, Interactive Multimedia and Design. With a specifcation in Web Development</p>
                        </div>
                        <hr />
                        <div className={styles.infoBlock}>
                            <h3 className={styles.infoHeader}>Web Developer</h3>
                            <p className={styles.infoText}>Bachelors with a specification in Web Development and experience using technology such as React, Django, Node.js and more.</p>
                        </div>
                        <hr />
                        <div className={styles.infoBlock}>
                            <h3 className={styles.infoHeader}>Co-op</h3>
                            <p className={styles.infoText}>Student in the Co-op program, and available throughout 2025.</p>
                        </div>
                    </div>
                </motion.div>
            </section>
        </Element>
    )
}
