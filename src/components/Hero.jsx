import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../utils/useScrollAnimation';
import { scrollVariants, easing, staggerDelays } from '../utils/scrollAnimations';
import AnimatedText from './AnimatedText';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  background: white;
  position: relative;
  overflow: hidden;
  padding-top: 120px; /* Add padding to account for fixed header */
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  z-index: 2;
  width: 100%;
`;

const MainTitle = styled(motion.h1)`
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 700;
  color: #202124;
  margin-bottom: 1rem;
  line-height: 1.1;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const Subtitle = styled(motion.p)`
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  color: #5f6368;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.5;
`;

const CTAButtons = styled(motion.div)`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 3rem;
`;

const PrimaryButton = styled(motion.button)`
  background: #1a73e8;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 28px;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background: #1557b0;
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(26, 115, 232, 0.3);
  }
`;

const SecondaryButton = styled(motion.button)`
  background: transparent;
  color: #1a73e8;
  border: 2px solid #1a73e8;
  padding: 1rem 2rem;
  border-radius: 28px;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #1a73e8;
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(26, 115, 232, 0.3);
  }
`;

const TestButton = styled(motion.button)`
  background: #34a853;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 16px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
  
  &:hover {
    background: #2d8e47;
    transform: translateY(-2px);
  }
`;

const QRCodeSection = styled(motion.div)`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: white;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  z-index: 10;
`;

const QRCode = styled.div`
  width: 80px;
  height: 80px;
  background: #f8f9fa;
  border: 2px solid #e8eaed;
  border-radius: 8px;
  margin: 0 auto 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  color: #5f6368;
`;

const QRText = styled.p`
  font-size: 0.9rem;
  color: #5f6368;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  justify-content: center;
`;

const ChromeLogo = styled(motion.div)`
  font-size: 3rem;
  margin-bottom: 2rem;
  color: #1a73e8;
`;

const Hero = () => {
  const [ref, isVisible] = useScrollAnimation();

  // Test scroll function
  const testScroll = () => {
    console.log('Testing scroll to features section...');
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      const headerHeight = 80;
      const elementPosition = featuresSection.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      console.log('Test scroll completed to position:', elementPosition);
    } else {
      console.error('Features section not found for test');
    }
  };

  return (
    <HeroSection>
      <QRCodeSection
        initial={{ opacity: 0, x: 50, scale: 0.8 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8, ease: easing.chrome }}
      >
        <QRCode>QR</QRCode>
        <QRText>
          Get Chrome for your phone
          <span>→</span>
        </QRText>
      </QRCodeSection>
      
      <HeroContent
        ref={ref}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={scrollVariants.staggerContainer}
      >
        <ChromeLogo variants={scrollVariants.scaleIn}>
          🌐
        </ChromeLogo>
        
        <MainTitle variants={scrollVariants.staggerItem}>
          The browser built to be{' '}
          <AnimatedText 
            text="fast" 
            highlight={true} 
            delay={0.2}
            staggerDelay={staggerDelays.letters}
          />{' '}
          <AnimatedText 
            text="safe" 
            highlight={true} 
            delay={0.4}
            staggerDelay={staggerDelays.letters}
          />{' '}
          <AnimatedText 
            text="yours" 
            highlight={true} 
            delay={0.6}
            staggerDelay={staggerDelays.letters}
          />
        </MainTitle>
        
        <Subtitle variants={scrollVariants.staggerItem}>
          <AnimatedText 
            text="Experience the web with speed, security, and personalization that puts you in control." 
            delay={0.8}
            staggerDelay={staggerDelays.letters}
            animationType="word"
          />
        </Subtitle>
        
        <CTAButtons variants={scrollVariants.staggerItem}>
          <PrimaryButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Chrome
          </PrimaryButton>
          <SecondaryButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Chrome
          </SecondaryButton>
        </CTAButtons>

        {/* Test button for debugging */}
        <TestButton
          onClick={testScroll}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          🧪 Test Scroll to Features
        </TestButton>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero; 