import React from 'react';
import {isTSIntersectionType} from "eslint-plugin-react/lib/util/ast.js";
import {getImageUrl} from "../../utils.js";
import styles from "./About.module.css"

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img
                    src={getImageUrl("about/aboutImage.png")}
                    alt="Me sitting with a laptop"
                    className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img
                            src={getImageUrl("about/cursorIcon.png")}
                            alt="cursor icon"
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Development</h3>
                            <p>
                                I have experience in building responsive and optimized websites and apps.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img
                            src={getImageUrl("about/serverIcon.png")}
                            alt="server icon"
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Development</h3>
                            <p>
                                I have experience developing fast and optimized backend systems and APIs.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img
                            src={getImageUrl("about/uiIcon.png")}
                            alt="UI icon"
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Full-stack Development</h3>
                            <p>
                                I have experience developing multiple full-stack, feature rich apps and websites.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default About;