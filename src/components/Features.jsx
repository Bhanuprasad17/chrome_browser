import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../utils/useScrollAnimation';
import { scrollVariants, easing, staggerDelays } from '../utils/scrollAnimations';
import AnimatedText from './AnimatedText';
import styles from './Features.module.scss';

const Features = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className={styles.section}>
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
            ✓ <AnimatedText text="fast" delay={0.4} staggerDelay={staggerDelays.letters} />
          </span>
          {' '}way to do things online
        </h2>
        
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div>
              <h3 className={styles.featureTitle}>
                <AnimatedText text="Prioritise performance" delay={0.5} staggerDelay={staggerDelays.letters} />
              </h3>
              <h4 className={styles.featureHeading}>
                <AnimatedText text="Chrome is built for performance" delay={0.6} staggerDelay={staggerDelays.letters} />
              </h4>
              <p className={styles.featureDescription}>
                <AnimatedText text="Optimise your experience with features like Energy Saver and Memory Saver." delay={0.7} staggerDelay={staggerDelays.letters} />
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
          </div>

          <div className={styles.featureCard}>
            <div>
              <h3 className={styles.featureTitle}>
                <AnimatedText text="Stay on top of tabs" delay={0.8} staggerDelay={staggerDelays.letters} />
              </h3>
              <h4 className={styles.featureHeading}>
                <AnimatedText text="Chrome has tools to help you manage the tabs you're not quite ready to close" delay={0.9} staggerDelay={staggerDelays.letters} />
              </h4>
              <p className={styles.featureDescription}>
                <AnimatedText text="Group, label, and colour-code your tabs to stay organised and work faster." delay={1.0} staggerDelay={staggerDelays.letters} />
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
          </div>

          <div className={styles.featureCard}>
            <div>
              <h3 className={styles.featureTitle}>
                <AnimatedText text="Optimised for your device" delay={1.1} staggerDelay={staggerDelays.letters} />
              </h3>
              <h4 className={styles.featureHeading}>
                <AnimatedText text="Chrome is built to work with your device across platforms" delay={1.2} staggerDelay={staggerDelays.letters} />
              </h4>
              <p className={styles.featureDescription}>
                <AnimatedText text="That means a smooth experience on whatever you're working with." delay={1.3} staggerDelay={staggerDelays.letters} />
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
          </div>

          <div className={styles.featureCard}>
            <div>
              <h3 className={styles.featureTitle}>
                <AnimatedText text="Automatic updates" delay={1.4} staggerDelay={staggerDelays.letters} />
              </h3>
              <h4 className={styles.featureHeading}>
                <AnimatedText text="There's a new Chrome update every four weeks" delay={1.5} staggerDelay={staggerDelays.letters} />
              </h4>
              <p className={styles.featureDescription}>
                <AnimatedText text="Making it easy to have the newest features and a faster, safer browser." delay={1.6} staggerDelay={staggerDelays.letters} />
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
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Features;
