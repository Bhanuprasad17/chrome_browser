import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../utils/useScrollAnimation';
import { scrollVariants, easing, staggerDelays } from '../utils/scrollAnimations';
import AnimatedText from './AnimatedText';

const Section = styled.section`
  padding: 6rem 2rem;
  background: white;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  color: #202124;
  text-align: center;
  margin-bottom: 4rem;
  line-height: 1.2;
`;

const FastHighlight = styled(motion.span)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #e8f5e8;
  color: #137333;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0.5rem;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`;

const FeatureCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  min-height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 1px solid #e8eaed;
`;

const FeatureTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #5f6368;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const FeatureHeading = styled.h4`
  font-size: 1.3rem;
  font-weight: 600;
  color: #202124;
  margin-bottom: 1rem;
  line-height: 1.3;
`;

const FeatureDescription = styled.p`
  font-size: 0.95rem;
  color: #5f6368;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;

const FeatureLink = styled.a`
  color: #1a73e8;
  text-decoration: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: #1557b0;
    transform: translateX(4px);
  }
`;

const FeatureVisual = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PerformanceVisual = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const PerformanceBar = styled.div`
  width: 200px;
  height: 8px;
  background: #e8eaed;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
`;

const PerformanceFill = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #34a853, #1a73e8);
  border-radius: 4px;
  width: 85%;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 4px;
    height: 100%;
    background: white;
    border-radius: 2px;
  }
`;

const PerformanceIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #e8f5e8;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #34a853;
  font-size: 1.2rem;
`;

const TabVisual = styled.div`
  background: white;
  border: 1px solid #e8eaed;
  border-radius: 8px;
  padding: 1rem;
  min-width: 250px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const TabBar = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-bottom: 1rem;
`;

const Tab = styled.div`
  padding: 0.5rem 1rem;
  background: ${props => props.active ? '#1a73e8' : '#f8f9fa'};
  color: ${props => props.active ? 'white' : '#5f6368'};
  border-radius: 6px 6px 0 0;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.active ? '#1557b0' : '#e9ecef'};
  }
`;

const TabContent = styled.div`
  background: #f8f9fa;
  border-radius: 6px;
  padding: 1rem;
  text-align: center;
  color: #5f6368;
  font-size: 0.9rem;
`;

const DeviceVisual = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const DeviceIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  background: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  border: 2px solid #e8eaed;
`;

const UpdateVisual = styled.div`
  background: white;
  border: 1px solid #e8eaed;
  border-radius: 8px;
  padding: 1rem;
  min-width: 250px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const UpdateHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  color: #1a73e8;
  font-weight: 500;
  font-size: 0.9rem;
`;

const UpdateStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 0.85rem;
  color: #5f6368;
`;

const StatusIcon = styled.div`
  color: #34a853;
  font-size: 1rem;
`;

const Features = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <Section>
      <Container
        ref={ref}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={scrollVariants.staggerContainer}
      >
        <SectionTitle variants={scrollVariants.staggerItem}>
          The{' '}
          <FastHighlight
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.3, duration: 0.8, ease: easing.chrome }}
          >
            ✓ <AnimatedText text="fast" delay={0.4} staggerDelay={staggerDelays.letters} />
          </FastHighlight>
          {' '}way to do things online
        </SectionTitle>
        
        <FeaturesGrid variants={scrollVariants.staggerItem}>
          <FeatureCard
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            variants={scrollVariants.cardEntrance}
          >
            <div>
              <FeatureTitle>
                <AnimatedText text="Prioritise performance" delay={0.5} staggerDelay={staggerDelays.letters} />
              </FeatureTitle>
              <FeatureHeading>
                <AnimatedText text="Chrome is built for performance" delay={0.6} staggerDelay={staggerDelays.letters} />
              </FeatureHeading>
              <FeatureDescription>
                <AnimatedText text="Optimise your experience with features like Energy Saver and Memory Saver." delay={0.7} staggerDelay={staggerDelays.letters} />
              </FeatureDescription>
              <FeatureLink href="#">
                Learn more →
              </FeatureLink>
            </div>
            <FeatureVisual>
              <PerformanceVisual>
                <PerformanceIcon>⚡</PerformanceIcon>
                <PerformanceBar>
                  <PerformanceFill />
                </PerformanceBar>
              </PerformanceVisual>
            </FeatureVisual>
          </FeatureCard>

          <FeatureCard
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            variants={scrollVariants.cardEntrance}
          >
            <div>
              <FeatureTitle>
                <AnimatedText text="Stay on top of tabs" delay={0.8} staggerDelay={staggerDelays.letters} />
              </FeatureTitle>
              <FeatureHeading>
                <AnimatedText text="Chrome has tools to help you manage the tabs you're not quite ready to close" delay={0.9} staggerDelay={staggerDelays.letters} />
              </FeatureHeading>
              <FeatureDescription>
                <AnimatedText text="Group, label, and colour-code your tabs to stay organised and work faster." delay={1.0} staggerDelay={staggerDelays.letters} />
              </FeatureDescription>
              <FeatureLink href="#">
                Learn more →
              </FeatureLink>
            </div>
            <FeatureVisual>
              <TabVisual>
                <TabBar>
                  <Tab active>Work</Tab>
                  <Tab>Research</Tab>
                  <Tab>Personal</Tab>
                </TabBar>
                <TabContent>
                  Tab groups help you organize your browsing
                </TabContent>
              </TabVisual>
            </FeatureVisual>
          </FeatureCard>

          <FeatureCard
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            variants={scrollVariants.cardEntrance}
          >
            <div>
              <FeatureTitle>
                <AnimatedText text="Optimised for your device" delay={1.1} staggerDelay={staggerDelays.letters} />
              </FeatureTitle>
              <FeatureHeading>
                <AnimatedText text="Chrome is built to work with your device across platforms" delay={1.2} staggerDelay={staggerDelays.letters} />
              </FeatureHeading>
              <FeatureDescription>
                <AnimatedText text="That means a smooth experience on whatever you're working with." delay={1.3} staggerDelay={staggerDelays.letters} />
              </FeatureDescription>
              <FeatureLink href="#">
                Get Chrome for your phone →
              </FeatureLink>
            </div>
            <FeatureVisual>
              <DeviceVisual>
                <DeviceIcon>💻</DeviceIcon>
                <DeviceIcon>📱</DeviceIcon>
                <DeviceIcon>⌚</DeviceIcon>
                <DeviceIcon>📺</DeviceIcon>
              </DeviceVisual>
            </FeatureVisual>
          </FeatureCard>

          <FeatureCard
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            variants={scrollVariants.cardEntrance}
          >
            <div>
              <FeatureTitle>
                <AnimatedText text="Automatic updates" delay={1.4} staggerDelay={staggerDelays.letters} />
              </FeatureTitle>
              <FeatureHeading>
                <AnimatedText text="There's a new Chrome update every four weeks" delay={1.5} staggerDelay={staggerDelays.letters} />
              </FeatureHeading>
              <FeatureDescription>
                <AnimatedText text="Making it easy to have the newest features and a faster, safer browser." delay={1.6} staggerDelay={staggerDelays.letters} />
              </FeatureDescription>
              <FeatureLink href="#">
                Learn about automatic updates →
              </FeatureLink>
            </div>
            <FeatureVisual>
              <UpdateVisual>
                <UpdateHeader>
                  🔄 New Chrome available
                </UpdateHeader>
                <UpdateStatus>
                  <StatusIcon>✓</StatusIcon>
                  Chrome is up to date
                </UpdateStatus>
              </UpdateVisual>
            </FeatureVisual>
          </FeatureCard>
        </FeaturesGrid>
      </Container>
    </Section>
  );
};

export default Features; 