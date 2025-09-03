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
      {/* Chrome Logo */}
      <motion.img
        src="https://www.google.com/chrome/static/images/chrome-logo-m100.svg"
        alt="Chrome Logo"
        className={styles.chromeLogoImage}
        variants={scrollVariants.staggerItem}
      />

      {/* Main Title */}
      <motion.h1 className={styles.mainTitle} variants={scrollVariants.staggerItem}>
        The browser<br />built to be yours
      </motion.h1>

      {/* Download Button */}
      <motion.button className={styles.primaryButton} variants={scrollVariants.staggerItem}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ verticalAlign: 'middle' }}
        >
          <path d="M12 5v14M5 16l7 7 7-7" />
        </svg>
        Download Chrome
      </motion.button>

      {/* Update Link */}
      <motion.a
        href="#"
        className={styles.updateLink}
        variants={scrollVariants.staggerItem}
      >
        I want to update Chrome
      </motion.a>

      {/* Small Text */}
      <motion.p className={styles.smallText} variants={scrollVariants.staggerItem}>
        For Windows 11/10 64-bit
      </motion.p>

      {/* Checkbox with label */}
      <motion.div className={styles.checkboxContainer} variants={scrollVariants.staggerItem}>
        <label>
          <input type="checkbox" defaultChecked />
          <span>
            Help make Google Chrome better by automatically sending usage statistics and crash reports to Google.{' '}
            <a href="#" target="_blank" rel="noopener noreferrer">Learn more</a>
          </span>
        </label>
      </motion.div>

      {/* Terms of Service Text */}
      <motion.p className={styles.termsText} variants={scrollVariants.staggerItem}>
        By downloading Chrome, you agree to the{' '}
        <a href="#" target="_blank" rel="noopener noreferrer">Google Terms of Service</a>{' '}
        and{' '}
        <a href="#" target="_blank" rel="noopener noreferrer">Chrome and ChromeOS Additional Terms of Service</a>
      </motion.p>
    </motion.section>
  );
};

export default Hero;
