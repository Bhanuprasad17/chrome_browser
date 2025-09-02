import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../utils/useScrollAnimation';
import styles from './Footer.module.scss';

const Footer = () => {
  const [mobileRef, isMobileVisible] = useScrollAnimation();
  const [footerRef, isFooterVisible] = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const mobileCardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      }
    }
  };

  const qrVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  return (
    <>
      {/* Mobile Download Card */}
      <motion.div 
        className={styles.mobileDownloadCard}
        ref={mobileRef}
        initial="hidden"
        animate={isMobileVisible ? "visible" : "hidden"}
        variants={mobileCardVariants}
      >
        <div className={styles.mobileCardContent}>
          <motion.div 
            className={styles.mobileTextContent}
            variants={itemVariants}
          >
            <motion.h2 
              className={styles.mobileTitle}
              variants={itemVariants}
            >
              Take your browser with you
            </motion.h2>
            
            <motion.p 
              className={styles.mobileSubtitle}
              variants={itemVariants}
            >
              Download Chrome on your mobile device or tablet and sign into your account for the same browser experience, everywhere.
            </motion.p>
            
            <motion.button 
              className={styles.mobileDownloadButton}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                y: -3
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.open('https://www.google.com/chrome/', '_blank')}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
              </svg>
              Download Chrome
            </motion.button>
          </motion.div>

          <motion.div 
            className={styles.mobileQrSection}
            variants={qrVariants}
          >
            <motion.div 
              className={styles.mobileQrWrapper}
              whileHover={{ 
                scale: 1.02,
                y: -4,
                rotateY: 5
              }}
              transition={{ duration: 0.3 }}
            >
              <img
                className={styles.mobileQrImage}
                src="https://www.google.com/chrome/static/images/v2/go-mobile-qrs/engagement-hp-pop-up.webp"
                alt="QR Code to download Chrome"
              />
            </motion.div>
            
            <motion.p 
              className={styles.mobileQrText}
              variants={itemVariants}
            >
              Get Chrome for your phone
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      {/* Footer Content */}
      <footer className={styles.footerContainer} ref={footerRef}>
        <div className={styles.footerContent}>
          <motion.div
            className={styles.footerTop}
            initial="hidden"
            animate={isFooterVisible ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div className={styles.footerSection} variants={itemVariants}>
              <h3 className={styles.footerTitle}>Follow us</h3>
              <div className={styles.socialLinks}>
                <motion.a href="#" className={styles.socialIcon} whileHover={{ scale: 1.1 }}>
                  📺
                </motion.a>
                <motion.a href="#" className={styles.socialIcon} whileHover={{ scale: 1.1 }}>
                  🐦
                </motion.a>
                <motion.a href="#" className={styles.socialIcon} whileHover={{ scale: 1.1 }}>
                  📘
                </motion.a>
                <motion.a href="#" className={styles.socialIcon} whileHover={{ scale: 1.1 }}>
                  💼
                </motion.a>
                <motion.a href="#" className={styles.socialIcon} whileHover={{ scale: 1.1 }}>
                  🎵
                </motion.a>
              </div>
            </motion.div>

            <motion.div className={styles.footerSection} variants={itemVariants}>
              <h3 className={styles.footerTitle}>Chrome Family</h3>
              <motion.a href="#" className={styles.footerLink} whileHover={{ x: 4 }}>
                Other Platforms
              </motion.a>
              <motion.a href="#" className={styles.footerLink} whileHover={{ x: 4 }}>
                Chromebooks
              </motion.a>
              <motion.a href="#" className={styles.footerLink} whileHover={{ x: 4 }}>
                Chromecast
              </motion.a>
              <motion.a href="#" className={styles.footerLink} whileHover={{ x: 4 }}>
                Chrome Web Store
              </motion.a>
            </motion.div>

            <motion.div className={styles.footerSection} variants={itemVariants}>
              <h3 className={styles.footerTitle}>Enterprise</h3>
              <motion.a href="#" className={styles.footerLink} whileHover={{ x: 4 }}>
                Download Chrome Browser
              </motion.a>
              <motion.a href="#" className={styles.footerLink} whileHover={{ x: 4 }}>
                Chrome Browser for Enterprise
              </motion.a>
              <motion.a href="#" className={styles.footerLink} whileHover={{ x: 4 }}>
                Chrome Devices
              </motion.a>
              <motion.a href="#" className={styles.footerLink} whileHover={{ x: 4 }}>
                ChromeOS
              </motion.a>
            </motion.div>

            <motion.div className={styles.footerSection} variants={itemVariants}>
              <h3 className={styles.footerTitle}>Support</h3>
              <motion.a href="#" className={styles.footerLink} whileHover={{ x: 4 }}>
                Chrome Help
              </motion.a>
              <motion.a href="#" className={styles.footerLink} whileHover={{ x: 4 }}>
                Update Chrome
              </motion.a>
              <motion.a href="#" className={styles.footerLink} whileHover={{ x: 4 }}>
                Chrome Tips
              </motion.a>
              <motion.a href="#" className={styles.footerLink} whileHover={{ x: 4 }}>
                Google Chrome Blog
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.footerBottom}
            initial="hidden"
            animate={isFooterVisible ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.p className={styles.copyright} variants={itemVariants}>
              © 2024 Google Chrome. All rights reserved.
            </motion.p>
            <motion.div className={styles.footerBottomLinks} variants={itemVariants}>
              <motion.a href="#" className={styles.footerLink} whileHover={{ x: 4 }}>
                Privacy and Terms
              </motion.a>
              <motion.a href="#" className={styles.footerLink} whileHover={{ x: 4 }}>
                About Google
              </motion.a>
              <motion.a href="#" className={styles.footerLink} whileHover={{ x: 4 }}>
                Google products
              </motion.a>
              <motion.a href="#" className={styles.footerLink} whileHover={{ x: 4 }}>
                Cookies management controls
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </footer>
    </>
  );
};

export default Footer;