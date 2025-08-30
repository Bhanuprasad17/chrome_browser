import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../utils/useScrollAnimation';
import { scrollVariants, staggerDelays } from '../utils/scrollAnimations';

const TextContainer = styled(motion.div)`
  display: inline-block;
  overflow: hidden;
`;

const Letter = styled(motion.span)`
  display: inline-block;
  opacity: 0;
  transform: translateY(30px) scale(0.9);
  color: ${props => props.highlight ? '#1a73e8' : 'inherit'};
  font-weight: ${props => props.highlight ? '600' : 'inherit'};
  will-change: transform, opacity;
`;

const AnimatedText = ({ 
  text, 
  highlight = false, 
  delay = 0, 
  staggerDelay = 0.08,
  fontSize = 'inherit',
  fontWeight = 'inherit',
  animationType = 'letter'
}) => {
  const [ref, isVisible] = useScrollAnimation();
  const letters = text.split('');

  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: delay + (i * staggerDelay),
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    })
  };

  // Word-by-word animation for longer texts
  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: delay + (i * staggerDelays.words),
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    })
  };

  if (animationType === 'word' && text.length > 20) {
    const words = text.split(' ');
    return (
      <TextContainer
        ref={ref}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        style={{ fontSize, fontWeight }}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            custom={index}
            variants={wordVariants}
            style={{ 
              display: 'inline-block',
              marginRight: '0.3em',
              whiteSpace: 'nowrap'
            }}
          >
            {word}
          </motion.span>
        ))}
      </TextContainer>
    );
  }

  return (
    <TextContainer
      ref={ref}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      style={{ fontSize, fontWeight }}
    >
      {letters.map((letter, index) => (
        <Letter
          key={index}
          custom={index}
          variants={letterVariants}
          highlight={highlight}
          style={{ 
            whiteSpace: letter === ' ' ? 'pre' : 'normal',
            marginRight: letter === ' ' ? '0.1em' : '0'
          }}
        >
          {letter}
        </Letter>
      ))}
    </TextContainer>
  );
};

export default AnimatedText;
