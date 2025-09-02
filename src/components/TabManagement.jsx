import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../utils/useScrollAnimation';
import { scrollVariants } from '../utils/scrollAnimations';
import styles from './TabManagement.module.scss';

const TabManagement = ({ id }) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id={id} className={styles.section} ref={ref}>
      <div className={styles.container}>
        <motion.h2
          className={styles.sectionTitle}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={scrollVariants.staggerContainer}
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', fontWeight: '700' }}
        >
          Discover the latest&nbsp;
          <span style={{ backgroundColor: '#dbe9ff', borderRadius: '1.5rem', padding: '0.25rem 1rem', display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#1a73e8', fontWeight: '700', fontSize: '1.2rem' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#1a73e8" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 4a8 8 0 1 0 8 8h-2a6 6 0 1 1-6-6V4z"/>
              <path d="M12 2v6l4 4-4 4v6a10 10 0 1 0-10-10h2a8 8 0 1 1 8-8z"/>
            </svg>
            updates
          </span>
          &nbsp;from Chrome
        </motion.h2>
        <motion.div
          className={styles.featuresGrid}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={scrollVariants.staggerContainer}
        >
          <motion.div
            className={styles.featureCard}
            variants={scrollVariants.staggerItem}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            style={{ backgroundColor: '#dbe9ff' }}
          >
            <div style={{ paddingBottom: '1rem' }}>
              <h4 className={styles.cardLabel}>UPDATES</h4>
              <h3 className={styles.featureTitle}>Automatic updates</h3>
              <p className={styles.featureDescription}>
                There’s a new Chrome release every four weeks, making it easy to have the newest features and a faster, safer web browser.
              </p>
              <a href="#" className={styles.featureLink}>
                Learn about automatic updates
              </a>
            </div>
            <div className={styles.featureVisual}>
              <img
                src="https://www.google.com/chrome/static/images/engagement-homepage/updates/updates.png"
                alt="Automatic updates"
                className={styles.cardImage}
              />
            </div>
          </motion.div>

          <motion.div
            className={styles.featureCard}
            variants={scrollVariants.staggerItem}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            style={{ backgroundColor: '#fff6d6' }}
          >
            <div>
              <h4 className={styles.cardLabel}>LATEST</h4>
              <h3 className={styles.featureTitle}>New from Chrome</h3>
              <p className={styles.featureDescription}>
                Chrome regularly updates with tools and features that make it faster and easier to use.
              </p>
              <a href="#" className={styles.featureLink}>
                Learn what’s new on Chrome &rarr;
              </a>
            </div>
            <div className={styles.featureVisual}>
              <img
                src="https://www.google.com/chrome/static/images/dev-components/chrome-logo-2x.webp"
                alt="New from Chrome"
                className={styles.cardImage}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TabManagement;
