import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Welcome, I'm Rony</h1>
                <p className={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque volutpat eu ligula sit amet pellentesque.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.

                </p>
                <div className={styles.interact}>
                    <button className={styles.contactBtn}>CONTACT ME</button>
                </div>
            </div>
            <div className={styles.imgSection}>
                <h2 className={styles.sideT}>PORTFOLIO</h2>
                <img src={getImageUrl("hero/photo.jpg")}
                    className={styles.image} />
            </div>
            <div className={styles.scrollContainer}>
                <div className={styles.scrolldown}>
                    <div className={styles.chevrons}>
                        <div className={styles.chevrondown}></div>
                        <div className={styles.chevrondown}></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
