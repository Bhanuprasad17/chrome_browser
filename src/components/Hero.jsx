import React, { useEffect, useRef } from 'react';
import styles from './Hero.module.scss';
import { gsap } from 'gsap';

const Hero = () => {
  const fastRef = useRef(null);
  const heroRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from(heroRef.current, { opacity: 0, y: 50, duration: 1 })
      .from(fastRef.current, { scale: 0, opacity: 0, duration: 0.6, delay: 0.2 })
      .from(buttonRef.current, { opacity: 0, y: 20, duration: 0.6 }, '-=0.3');

  }, []);

  return (
    <section id="hero" className={styles.heroSection} ref={heroRef}>
      <h1 className={styles.mainTitle}>
        The browser built to be{' '}
        <span className={styles.fastBadge} ref={fastRef}>
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
        </span>
      </h1>
      <button className={styles.downloadButton} ref={buttonRef}>
        Download Chrome
      </button>
    </section>
  );
};

export default Hero;
