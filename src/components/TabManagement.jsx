import React from 'react';
import { motion } from 'framer-motion';
import styles from './TabManagement.module.scss';

const TabManagement = ({ id }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id={id} className={styles.section}>
      <div className={styles.container}>
        <motion.h2
          className={styles.sectionTitle}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          Extend your experience
        </motion.h2>
        
        <motion.div
          className={styles.featuresGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div
            className={styles.featureCard}
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div>
              <h3 className={styles.featureTitle}>Extend your experience</h3>
              <h4 className={styles.featureHeading}>From shopping and entertainment to productivity, find extensions to improve your experience</h4>
              <p className={styles.featureDescription}>
                Discover powerful extensions in the Chrome Web Store that enhance your browsing experience, 
                boost productivity, and add new functionality to Chrome.
              </p>
              <a href="#" className={styles.featureLink}>
                Explore extensions →
              </a>
            </div>
            <div className={styles.featureVisual}>
              <div className={styles.browserWindow}>
                <div className={styles.browserHeader}>
                  <div className={styles.browserTab}>Chrome</div>
                </div>
                <div className={styles.browserContent}>G</div>
                <div className={styles.extensionIcons}>
                  <div className={styles.extensionIcon} style={{ backgroundColor: '#4285f4', top: '10px', right: '10px' }}>🛍️</div>
                  <div className={styles.extensionIcon} style={{ backgroundColor: '#34a853', top: '60px', left: '10px' }}>📋</div>
                  <div className={styles.extensionIcon} style={{ backgroundColor: '#fbbc05', bottom: '10px', left: '50px' }}>👤</div>
                  <div className={styles.extensionIcon} style={{ backgroundColor: '#ea4335', bottom: '60px', right: '50px' }}>✏️</div>
                  <div className={styles.extensionIcon} style={{ backgroundColor: '#9c27b0', top: '110px', right: '50px' }}>🏢</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.featureCard}
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div>
              <h3 className={styles.featureTitle}>Stay on top of tabs</h3>
              <h4 className={styles.featureHeading}>Chrome has tools to help you manage the tabs you're not quite ready to close</h4>
              <p className={styles.featureDescription}>
                Group, label, and colour-code your tabs to stay organised and work faster. 
                Create tab groups for different projects or topics to keep your browsing organized.
              </p>
              <a href="#" className={styles.featureLink}>
                Learn more →
              </a>
            </div>
            <div className={styles.featureVisual}>
              <div className={styles.tabVisual}>
                <div className={styles.tabGroupLabel}>Work</div>
                <div className={styles.tabGroup}>
                  <div className={`${styles.tab} ${styles.tabActive}`}>Gmail</div>
                  <div className={styles.tab}>Docs</div>
                  <div className={styles.tab}>Sheets</div>
                </div>
                <div className={styles.tabGroupLabel}>Research</div>
                <div className={styles.tabGroup}>
                  <div className={styles.tab}>Search</div>
                  <div className={styles.tab}>News</div>
                  <div className={styles.tab}>Maps</div>
                </div>
                <div className={styles.tabContent}>
                  Tab groups help you organize your browsing
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TabManagement;
