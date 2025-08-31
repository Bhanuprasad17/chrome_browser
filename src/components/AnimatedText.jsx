import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './AnimatedText.module.scss';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const AnimatedText = ({ 
  text, 
  highlight = false, 
  delay = 0, 
  staggerDelay = 0.08,
  fontSize = 'inherit',
  fontWeight = 'inherit',
  animationType = 'letter'
}) => {
  const containerRef = useRef(null);
  const lettersRef = useRef([]);
  const wordsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (animationType === 'word' && text.length > 20) {
        // Word animation
        gsap.fromTo(wordsRef.current,
          {
            opacity: 0,
            y: 20
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: staggerDelay,
            delay: delay,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
              toggleActions: "play reverse play reverse"
            }
          }
        );
      } else {
        // Letter animation
        gsap.fromTo(lettersRef.current,
          {
            opacity: 0,
            y: 30,
            scale: 0.9
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: staggerDelay,
            delay: delay,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
              toggleActions: "play reverse play reverse"
            }
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [text, delay, staggerDelay, animationType]);

  if (animationType === 'word' && text.length > 20) {
    const words = text.split(' ');
    return (
      <span 
        ref={containerRef}
        className={styles.textContainer}
        style={{ fontSize, fontWeight }}
      >
        {words.map((word, index) => (
          <span
            key={index}
            ref={el => wordsRef.current[index] = el}
            className={styles.word}
            style={{ 
              color: highlight ? '#1a73e8' : 'inherit',
              fontWeight: highlight ? '600' : fontWeight,
              marginRight: '0.3em',
              whiteSpace: 'nowrap'
            }}
          >
            {word}
          </span>
        ))}
      </span>
    );
  }

  const letters = text.split('');
  return (
    <span 
      ref={containerRef}
      className={styles.textContainer}
      style={{ fontSize, fontWeight }}
    >
      {letters.map((letter, index) => (
        <span
          key={index}
          ref={el => lettersRef.current[index] = el}
          className={styles.letter}
          style={{ 
            color: highlight ? '#1a73e8' : 'inherit',
            fontWeight: highlight ? '600' : fontWeight,
            whiteSpace: letter === ' ' ? 'pre' : 'normal',
            marginRight: letter === ' ' ? '0.1em' : '0'
          }}
        >
          {letter}
        </span>
      ))}
    </span>
  );
};

export default AnimatedText;
