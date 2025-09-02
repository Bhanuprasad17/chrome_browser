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
      </motion.div>
    </section>
  );
};

export default Features;

