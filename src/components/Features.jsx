import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../utils/useScrollAnimation';
import { scrollVariants } from '../utils/scrollAnimations';
import styles from './Features.module.scss';

const Features = ({ id }) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id={id} className={styles.section}>
      <motion.div
        className={styles.container}
        ref={ref}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={scrollVariants.staggerContainer}
      >
        <h2 className={styles.sectionTitle}>
          The{' '}
          <span className={styles.fastHighlight}>
            ✓ fast
          </span>
          {' '}way to do things online
        </h2>
        
        <div className={styles.featuresGrid}>
          <motion.div
            className={styles.featureCard}
            variants={scrollVariants.staggerItem}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div>
              <h3 className={styles.featureTitle}>
                Prioritise performance
              </h3>
              <h4 className={styles.featureHeading}>
                Chrome is fast and efficient
              </h4>
              <p className={styles.featureDescription}>
                Enjoy a smooth browsing experience with Energy Saver and Memory Saver features.
              </p>
              <a href="#" className={styles.featureLink}>
                Learn more →
              </a>
            </div>
            <div className={styles.featureVisual}>
              <div className={styles.performanceVisual}>
                <div className={styles.performanceIcon}>⚡</div>
                <div className={styles.performanceBar}>
                  <div className={styles.performanceFill} />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.featureCard}
            variants={scrollVariants.staggerItem}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div>
              <h3 className={styles.featureTitle}>
                Stay on top of tabs
              </h3>
              <h4 className={styles.featureHeading}>
                Chrome has tools to help you manage the tabs you're not quite ready to close
              </h4>
              <p className={styles.featureDescription}>
                Group, label, and colour-code your tabs to stay organized and work faster.
              </p>
              <a href="#" className={styles.featureLink}>
                Learn more →
              </a>
            </div>
            <div className={styles.featureVisual}>
              <div className={styles.tabVisual}>
                <div className={styles.tabBar}>
                  <div className={`${styles.tab} ${styles.tabActive}`}>Work</div>
                  <div className={styles.tab}>Research</div>
                  <div className={styles.tab}>Personal</div>
                </div>
                <div className={styles.tabContent}>
                  Tab groups help you organize your browsing
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.featureCard}
            variants={scrollVariants.staggerItem}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div>
              <h3 className={styles.featureTitle}>
                Optimised for your device
              </h3>
              <h4 className={styles.featureHeading}>
                Chrome is built to work with your device across platforms
              </h4>
              <p className={styles.featureDescription}>
                Chrome works smoothly on all your devices.
              </p>
              <a href="#" className={styles.featureLink}>
                Get Chrome for your phone →
              </a>
            </div>
            <div className={styles.featureVisual}>
              <div className={styles.deviceVisual}>
                <div className={styles.deviceIcon}>💻</div>
                <div className={styles.deviceIcon}>📱</div>
                <div className={styles.deviceIcon}>⌚</div>
                <div className={styles.deviceIcon}>📺</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.featureCard}
            variants={scrollVariants.staggerItem}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div>
              <h3 className={styles.featureTitle}>
                Automatic updates
              </h3>
              <h4 className={styles.featureHeading}>
                There's a new Chrome update every four weeks
              </h4>
              <p className={styles.featureDescription}>
                Making it easy to have the newest features and a faster, safer browser.
              </p>
              <a href="#" className={styles.featureLink}>
                Learn about automatic updates →
              </a>
            </div>
            <div className={styles.featureVisual}>
              <div className={styles.updateVisual}>
                <div className={styles.updateHeader}>
                  🔄 New Chrome available
                </div>
                <div className={styles.updateStatus}>
                  <div className={styles.statusIcon}>✓</div>
                  Chrome is up to date
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Features;

