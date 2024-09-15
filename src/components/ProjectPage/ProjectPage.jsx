import React from 'react'
import { ParallaxText } from './ParallaxText'
import { getImageUrl } from '../../utils'
import styles from "./ProjectPage.module.css";
import { motion } from 'framer-motion';
import { SlArrowRight } from "react-icons/sl";


export const ProjectPage = () => {
  return (
    <section className={styles.container}>
      <div className={styles.ParallaxText}>
        <ParallaxText baseVelocity={-5}>Portfolio Projects</ParallaxText>
        <ParallaxText baseVelocity={5}>Rony Azrieh</ParallaxText>
      </div>
      <div className={styles.ProjectSection}>

        <motion.div className={styles.ProjectCard} id={styles.one} transition={'duration: .3'}
          whileHover={{
            boxShadow: "0 0 32px 7px rgba(239, 79, 139, 0.50)",
            scale: 1.003,
          }}>
          <div className={styles.ProjectInfo}>
            <h4 className={styles.ProjectTitle}>Limitless</h4>
            <p className={styles.ProjectDesc}>A gym companion web-application, that utilizes Django’s back-end framework.
               This app was made to simplify the gym tracking experience for all users. Using Django, users can create profiles in 
               which they can store their bodybuilding progress, and interact with visualizations of their accomplishments. </p>
              <a href='https://github.com/ronyazrieh/Limitless-Webapp' className={styles.link}>
              <div>
                <a href='https://github.com/ronyazrieh/Limitless-Webapp' className={styles.LinkName}>Visit project</a>
                <SlArrowRight href='https://github.com/ronyazrieh/Limitless-Webapp' />
              </div>
            </a>
            <div className={styles.ProjectKey}>
              <div>Django</div>
              <div>Bootstrap</div>
              <div>GitHub</div>
            </div>
          </div>
          <img src={getImageUrl("projects/Limitless.png")}></img>
        </motion.div>

        <motion.div className={styles.ProjectCard} id={styles.three} transition={'duration: .3'}
          whileHover={{
            boxShadow: "0 0 32px 7px rgba(243, 0, 6, 0.50)",
            scale: 1.003,
          }}>
          <div className={styles.ProjectInfo}>
            <h4 className={styles.ProjectTitle}>Portfolio</h4>
            <p className={styles.ProjectDesc}>A stunning Portfolio wireframed, developed by and for Rony Azrieh. Powered by React, 
              this portfolio is both a demonstration and a repo of my capabilites. Utilizing FramerMotion as an animation package to bring 
              to life a visual experience. </p>
            <a href='https://github.com/ronyazrieh/React-Portfolio' className={styles.link}>
              <div>
                <a href='https://github.com/ronyazrieh/React-Portfolio' className={styles.LinkName}>Visit project</a>
                <SlArrowRight href='https://github.com/ronyazrieh/React-Portfolio' />
              </div>
            </a>
            <div className={styles.ProjectKey}>
              <div>React</div>
              <div>GitHub</div>
              <div>Design</div>
              <div>FramerMotion</div>
            </div>
          </div>
          <img src={getImageUrl("projects/Portfolio.png")}></img>
        </motion.div>

        <motion.div className={styles.ProjectCard} id={styles.two} transition={'duration: .3'}
          whileHover={{
            boxShadow: "0 0 32px 7px rgba(150, 206, 16, 0.50)",
            scale: 1.003,
          }}>
          <div className={styles.ProjectInfo}>
            <h4 className={styles.ProjectTitle}>NexGen League</h4>
            <p className={styles.ProjectDesc}>NXG League is a web application that utilizes Meta’s React front-end 
              framework for a community drop-in football league located in Ottawa. 
              This website is in development for a future local league</p>
            <a href='https://github.com/ronyazrieh/NXG-LEAGUE' className={styles.link}>
              <div>
                <a href='https://github.com/ronyazrieh/NXG-LEAGUE' className={styles.LinkName}>Visit project</a>
                <SlArrowRight href='https://github.com/ronyazrieh/NXG-LEAGUE' />
              </div>
            </a>
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
