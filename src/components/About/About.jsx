import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/coding.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Web Development Enthusiast</h3>
              <p>
              I'm a student with a keen interest in web development, constantly exploring and learning tools like React , nodeJS and MongoDB.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Web 3.0 Explorer
</h3>
              <p>
              I am passionate about blockchain technology and its potential to revolutionize various industries. I enjoy delving into its complexities and learning about decentralized systems and smart contracts using Solidity.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Machine Learning</h3>
              <p>
              I am exploring the exciting field of machine learning, eager to understand and implement algorithms that can learn from and make predictions on data.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
