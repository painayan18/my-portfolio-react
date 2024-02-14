import React, {useState} from 'react';
import styles from "./Hero.module.css";
import {getImageUrl} from "../../utils.js";

export const Hero = () => {
    return (
        <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Nayan!</h1>
            <p className={styles.description}>
                I'm a full stack developer with experience using Python, SQL, JavaScript, React and Node.js.
            </p>
            <a href="mailto:nayansp00@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img
            src={getImageUrl("hero/heroImage.png")}
            alt="Hero Image of Me"
            className={styles.heroImg}
        />
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
        </section>
    );
};

export default Hero;