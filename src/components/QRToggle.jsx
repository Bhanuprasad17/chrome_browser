import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './QRToggle.module.scss';

const QRToggle = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleQR = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={styles.toggleContainer}>
      <AnimatePresence mode="wait">
        {!isVisible ? (
          <motion.div
            key="phone-icon"
            className={styles.phoneIcon}
            onClick={toggleQR}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            📱
          </motion.div>
        ) : (
          <motion.div
            key="qr-wrapper"
            className={styles.qrWrapper}
            onClick={toggleQR}
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <motion.img
              className={styles.qrImage}
              src="https://www.google.com/chrome/static/images/v2/go-mobile-qrs/engagement-hp-pop-up.webp"
              alt="QR Code"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.2 }}
            />
            <motion.div
              className={styles.arrowIcon}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              ×
            </motion.div>
            <motion.div
              className={styles.qrText}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.2 }}
            >
              Get Chrome for your phone
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default QRToggle;
