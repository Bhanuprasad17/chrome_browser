import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../utils/useScrollAnimation';
import { scrollVariants } from '../utils/scrollAnimations';
import styles from './Customization.module.scss';

const Customization = ({ id }) => {
  const [ref, isVisible] = useScrollAnimation();

  // State to toggle bottom cards content
  const [bottomLeftExpanded, setBottomLeftExpanded] = useState(false);
  const [bottomRightExpanded, setBottomRightExpanded] = useState(false);

  // Animation variants for content transitions
  const contentVariants = {
    collapsed: {
      opacity: 0,
      height: 0,
      y: -20,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    },
    expanded: {
      opacity: 1,
      height: "auto",
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.3
      }
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        delay: 0.1
      }
    }
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className={styles.customizationSection} id={id} ref={ref}>
      <div className={styles.container}>
        <motion.h2 
          className={styles.sectionTitle}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={scrollVariants.staggerContainer}
        >
          by Google
        </motion.h2>

        <div className={styles.featuresGrid}>
          {/* Top Card */}
          <motion.div
            className={styles.topCard}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            variants={scrollVariants.staggerItem}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <div className={styles.topCardTextRow}>
              <div className={styles.topCardLeft}>
                <div className={styles.cardText}>Google AI</div>
                <h1 style={{fontWeight : 900}} className={styles.cardHeading}>
                  Access AI superpowers while you browse.
                </h1>
                <a href="#" className={styles.cardLink}>Explore Google AI &rarr;</a>
              </div>
              <div className={styles.topCardRight}>
                <p className={styles.cardDescription}>
                  Google is integrating artificial intelligence to make our products more useful. We use AI for features like Search, Google Translate, and more, and we're innovating new technologies responsibly.
                </p>
              </div>
            </div>
            <div className={styles.topCardImageContainer}>
              <img 
                className={styles.topCardImage} 
                src="https://www.google.com/chrome/static/images/v2/gallery/ai_desktop-2x.webp" 
                alt="Google AI Desktop" 
              />
            </div>
          </motion.div>

          {/* Bottom Left Card */}
          <motion.div
            className={`${styles.bottomCard} ${styles.bottomCardYellow}`}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            variants={scrollVariants.staggerItem}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            layout
          >
            <div className={styles.cardContent}>
              <div className={styles.cardText}>Google Search</div>

              <AnimatePresence mode="wait">
                {!bottomLeftExpanded && (
                  <motion.h3 
                    key="search-heading"
                    className={styles.cardHeading}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    The search bar you love, built right in.
                  </motion.h3>
                )}
              </AnimatePresence>

              <AnimatePresence mode="wait">
                {!bottomLeftExpanded ? (
                  <motion.img 
                    key="search-front"
                    className={styles.bottomCardImage} 
                    src="https://www.google.com/chrome/static/images/v2/gallery/search-front_desktop-2x.webp" 
                    alt="Google Search"
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  />
                ) : (
                  <motion.div 
                    key="search-expanded"
                    className={styles.expandedContent}
                    variants={contentVariants}
                    initial="collapsed"
                    animate="expanded"
                    exit="collapsed"
                    layout
                  >
                    <motion.img 
                      className={styles.bottomCardImage} 
                      src="https://www.google.com/chrome/static/images/v2/gallery/search-back.webp" 
                      alt="Google Search Back"
                      variants={imageVariants}
                      initial="hidden"
                      animate="visible"
                    />
                    <motion.div 
                      className={styles.expandedText}
                      variants={textVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <motion.p className={styles.cardDescription} variants={textVariants}>
                        Access a world of knowledge at your fingertips. Check the weather, solve math equations, and get instant search results, all contained inside your browser's address bar.
                      </motion.p>
                      <motion.p className={styles.cardDescription} variants={textVariants}>
                        Get suggestions as you type and find what you're looking for faster than ever before with Google's powerful search integration.
                      </motion.p>
                      <motion.p className={styles.cardDescription} variants={textVariants}>
                        Your searches are secure and private, with Google's industry-leading protection keeping your data safe while you explore the web.
                      </motion.p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <motion.button 
              className={styles.plusButton}
              onClick={() => setBottomLeftExpanded(!bottomLeftExpanded)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ rotate: bottomLeftExpanded ? 45 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {bottomLeftExpanded ? '✕' : '+'}
            </motion.button>
          </motion.div>

          {/* Bottom Right Card */}
          <motion.div
            className={`${styles.bottomCard} ${styles.bottomCardWhite}`}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            variants={scrollVariants.staggerItem}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            layout
          >
            <div className={styles.cardContent}>
              <div className={styles.cardText}>Google Workspace</div>

              <AnimatePresence mode="wait">
                {!bottomRightExpanded && (
                  <motion.h3 
                    key="workspace-heading"
                    className={styles.cardHeading}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    Get things done, with or without Wi-Fi.
                  </motion.h3>
                )}
              </AnimatePresence>

              <AnimatePresence mode="wait">
                {!bottomRightExpanded ? (
                  <motion.div
                    key="workspace-icons"
                    className={styles.workspaceIcons}
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    <div className={styles.iconContainer}>
                      <img 
                        className={styles.workspaceIcon} 
                        src="https://www.google.com/chrome/static/images/v2/gallery/gmail.png" 
                        alt="Gmail" 
                      />
                    </div>
                    <div className={styles.iconContainer}>
                      <img 
                        className={styles.workspaceIcon} 
                        src="https://www.google.com/chrome/static/images/v2/gallery/docs.png" 
                        alt="Google Docs" 
                      />
                    </div>
                    <div className={`${styles.iconContainer} ${styles.driveIconContainer}`}>
                      <img 
                        className={`${styles.workspaceIcon} ${styles.driveIcon}`} 
                        src="https://www.google.com/chrome/static/images/v2/gallery/drive.png" 
                        alt="Google Drive" 
                      />
                    </div>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="workspace-expanded"
                    className={styles.expandedContent}
                    variants={contentVariants}
                    initial="collapsed"
                    animate="expanded"
                    exit="collapsed"
                    layout
                  >
                    <motion.img 
                      className={styles.bottomCardImage} 
                      src="https://www.google.com/chrome/static/images/v2/gallery/offline.webp" 
                      alt="Google Workspace Offline"
                      variants={imageVariants}
                      initial="hidden"
                      animate="visible"
                    />
                    <motion.div 
                      className={styles.expandedText}
                      variants={textVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <motion.p className={styles.cardDescription} variants={textVariants}>
                        Get things done in Gmail, Google Docs, Google Slides, Google Sheets, Google Translate and Google Drive, even without an Internet connection.
                      </motion.p>
                      <motion.p className={styles.cardDescription} variants={textVariants}>
                        Work seamlessly across all your devices with automatic syncing when you reconnect to the internet.
                      </motion.p>
                      <motion.p className={styles.cardDescription} variants={textVariants}>
                        Stay productive anywhere with offline access to your most important files and documents.
                      </motion.p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <motion.button 
              className={styles.plusButton}
              onClick={() => setBottomRightExpanded(!bottomRightExpanded)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ rotate: bottomRightExpanded ? 45 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {bottomRightExpanded ? '✕' : '+'}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Customization;
