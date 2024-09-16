import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css";
import { Element, Link } from 'react-scroll';

export const Hero = () => {
    return (
        <Element name='hero'>
            <section className={styles.container}>
                <div className={styles.top}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Welcome, I'm Rony</h1>
                    <p className={styles.description}>
                        Web Developer. React Enthusiast. Co-op Student.

                    </p>
                    <div className={styles.interact}>
                        <Link to="projects" smooth={true} duration={500} offset={-70}>
                            <button className={styles.contactBtn}>PROJECTS</button>
                        </Link>
                    </div>
                </div>
                <div className={styles.imgSection}>
                    <h2 className={styles.sideT}>PORTFOLIO</h2>
                    <img src={getImageUrl("hero/Pixel Art.png")}
                        className={styles.image} />
                </div>
                </div>
                <div className={styles.scrollContainer}>
                    {/* Scroll down indicator to scroll to about */}
                    <Link to="about" smooth={true} duration={500} offset={-120}>
                        <div className={styles.scrolldown}>
                            <div className={styles.chevrons}>
                                <div className={styles.chevrondown}></div>
                                <div className={styles.chevrondown}></div>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>
        </Element>
    )
}
