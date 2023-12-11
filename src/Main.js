import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faSquareGithub,
} from "@fortawesome/free-brands-svg-icons";
import "./Main.css";

const SocialIcon = ({ href, icon }) => {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.8,
      delay: 0.5,
      ease: [0, 0.71, 0.2, 1.01] }}
      whileHover={{ scale: 1.6 }} whileTap={{ scale: 0.9 }}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={icon} size="l" />
      </a>
    </motion.div>
  );
};

const BannerItem = ({ title }) => (
  <motion.div
    animate={{ y: '-50%', opacity: 1 }}
    initial={{ opacity: 0 }}
    transition={{ delay: 1, ease: 'easeOut' }}
    whileHover={{ scale: 1.3 }}
  >
    <h2>{title}</h2>
  </motion.div>
);

const bannerItems = ['/work', '/aboutMe'];

export default function Main() {
  return (
    <div className="screen">
      <div className="nav-icons">
        <SocialIcon
          href="mailto:adrianaiaffabalart@gmail.com"
          icon={faPaperPlane}
        />
        <SocialIcon
          href="https://www.linkedin.com/in/adrianaiaffa/"
          icon={faLinkedinIn}
        />
        <SocialIcon
          href="https://github.com/AdrianaIaffa"
          icon={faSquareGithub}
        />
      </div>

      <div className="banner">
      {/* <div className="profile-picture">
        <img src="/Profile pic.jpeg" alt="Profile" />
      </div> */}
     <motion.div
      className="box"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}>
        <h1>Hello</h1>
        <h1>My Name Is Adriana</h1>
        <h2>A Web Developer And Designer Based In London</h2>
        </motion.div>
      </div>

      <div className="banner-bottom">
      {bannerItems.map((item, index) => (
        <BannerItem key={index} title={item} />
      ))}
      <div>
      </div>
    </div>
    </div>
  );
}