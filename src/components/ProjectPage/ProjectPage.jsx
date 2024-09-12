import React from 'react'
import { ParallaxText } from './ParallaxText'
import { getImageUrl } from '../../utils'
import styles from "./ProjectPage.module.css";
import { motion } from 'framer-motion';

export const ProjectPage = () => {
  return (
    <section className={styles.container}>
      <div className={styles.ParallaxText}>
        <ParallaxText baseVelocity={-5}>Portfolio Projects</ParallaxText>
        <ParallaxText baseVelocity={5}>Rony Azrieh</ParallaxText>
      </div>
      <div className={styles.ProjectSection}>

        <motion.div className={styles.ProjectCard} id={styles.one}
        whileHover={{
          boxShadow: "0 0 32px 7px rgba(239, 79, 139, 0.50)",
          transition: { duration: .3 },
        }}>
          <div className={styles.ProjectInfo}>
            <h4 className={styles.ProjectTitle}>Limitless</h4>
            <p className={styles.ProjectDesc}>I am completing my Bachelors with a specification in Web Development and have experience using technology such as React, Django, Node.js and more.</p>
            <div className={styles.ProjectKey}>
              <div>React</div>
              <div>Javascript</div>
              <div>SPA</div>
            </div>
          </div>
          <img src={getImageUrl("projects/Limitless.png")}></img>
        </motion.div>

        <motion.div className={styles.ProjectCard} id={styles.two}
        whileHover={{
          boxShadow: "0 0 32px 7px rgba(150, 206, 16, 0.50)",
          transition: { duration: .3 },
        }}>
          <div className={styles.ProjectInfo}>
            <h4 className={styles.ProjectTitle}>NexGen League</h4>
            <p className={styles.ProjectDesc}>I am completing my Bachelors with a specification in Web Development and have experience using technology such as React, Django, Node.js and more.</p>
            <div className={styles.ProjectKey}>
              <div>React</div>
              <div>Javascript</div>
              <div>SPA</div>
            </div>
          </div>
          <img src={getImageUrl("projects/NXG.png")}></img>
        </motion.div>

      </div>

    </section>
  )
}
