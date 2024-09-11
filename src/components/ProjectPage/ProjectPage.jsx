import React from 'react'
import { ParallaxText } from './ParallaxText'
import { getImageUrl } from '../../utils'
import styles from "./ProjectPage.module.css";

export const ProjectPage = () => {
  return (
    <section className={styles.container}>
      <div className={styles.ParallaxText}>
        <ParallaxText baseVelocity={-5}>Portfolio Projects</ParallaxText>
        <ParallaxText baseVelocity={5}>Rony Azrieh</ParallaxText>
      </div>
      <div className={styles.ProjectSection}>

        <div className={styles.ProjectCard} id={styles.one}>
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
        </div>

        <div className={styles.ProjectCard} id={styles.two}>
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
        </div>

      </div>

    </section>
  )
}
