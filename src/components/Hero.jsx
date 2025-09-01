import React from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.scss';
import { useScrollAnimation } from '../utils/useScrollAnimation';
import { scrollVariants } from '../utils/scrollAnimations';

const Hero = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <motion.section
      id="hero"
      className={styles.heroSection}
      ref={ref}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={scrollVariants.staggerContainer}
    >
      <motion.h1
        className={styles.mainTitle}
        variants={scrollVariants.staggerItem}
      >
        The browser built to be{' '}
        <motion.span
          className={styles.fastBadge}
          variants={scrollVariants.scaleIn}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="green"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ verticalAlign: 'middle', marginRight: '6px' }}
          >
            <path d="M12 19V6M5 13h14" />
          </svg>
          fast
        </motion.span>
      </motion.h1>
      <motion.button
        className={styles.downloadButton}
        variants={scrollVariants.staggerItem}
      >
        Download Chrome
      </motion.button>
    </motion.section>
  );
};

export default Hero;
