import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

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

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 3rem;
  margin-bottom: 4rem;
`;

const FeatureCard = styled(motion.div)`
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const FeatureTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #5f6368;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const FeatureHeading = styled.h4`
  font-size: 1.5rem;
  font-weight: 600;
  color: #202124;
  margin-bottom: 1rem;
  line-height: 1.3;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
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

const BrowserWindow = styled.div`
  width: 300px;
  height: 200px;
  border: 1px solid #e8eaed;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  background: #1a73e8;
`;

const BrowserHeader = styled.div`
  height: 30px;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  gap: 0.5rem;
`;

const BrowserTab = styled.div`
  width: 60px;
  height: 20px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px 4px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  color: white;
`;

const BrowserContent = styled.div`
  height: calc(100% - 30px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
`;

const ExtensionIcons = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const ExtensionIcon = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

const TabVisual = styled.div`
  background: white;
  border: 1px solid #e8eaed;
  border-radius: 8px;
  padding: 1rem;
  min-width: 280px;
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
  position: relative;
  
  &:hover {
    background: ${props => props.active ? '#1557b0' : '#e9ecef'};
  }
`;

const TabGroup = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-bottom: 0.5rem;
`;

const TabGroupLabel = styled.div`
  font-size: 0.7rem;
  color: #5f6368;
  margin-bottom: 0.25rem;
  font-weight: 500;
`;

const TabContent = styled.div`
  background: #f8f9fa;
  border-radius: 6px;
  padding: 1rem;
  text-align: center;
  color: #5f6368;
  font-size: 0.9rem;
`;

const TabManagement = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <Section>
      <Container>
        <SectionTitle
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          Extend your experience
        </SectionTitle>
        
        <FeaturesGrid
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <FeatureCard
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div>
              <FeatureTitle>Extend your experience</FeatureTitle>
              <FeatureHeading>From shopping and entertainment to productivity, find extensions to improve your experience</FeatureHeading>
              <FeatureDescription>
                Discover powerful extensions in the Chrome Web Store that enhance your browsing experience, 
                boost productivity, and add new functionality to Chrome.
              </FeatureDescription>
              <FeatureLink href="#">
                Explore extensions →
              </FeatureLink>
            </div>
            <FeatureVisual>
              <BrowserWindow>
                <BrowserHeader>
                  <BrowserTab>Chrome</BrowserTab>
                </BrowserHeader>
                <BrowserContent>G</BrowserContent>
                <ExtensionIcons>
                  <ExtensionIcon color="#4285f4" style={{ top: '10px', right: '10px' }}>🛍️</ExtensionIcon>
                  <ExtensionIcon color="#34a853" style={{ top: '60px', left: '10px' }}>📋</ExtensionIcon>
                  <ExtensionIcon color="#fbbc05" style={{ bottom: '10px', left: '50px' }}>👤</ExtensionIcon>
                  <ExtensionIcon color="#ea4335" style={{ bottom: '60px', right: '50px' }}>✏️</ExtensionIcon>
                  <ExtensionIcon color="#9c27b0" style={{ top: '110px', right: '50px' }}>🏢</ExtensionIcon>
                </ExtensionIcons>
              </BrowserWindow>
            </FeatureVisual>
          </FeatureCard>

          <FeatureCard
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div>
              <FeatureTitle>Stay on top of tabs</FeatureTitle>
              <FeatureHeading>Chrome has tools to help you manage the tabs you're not quite ready to close</FeatureHeading>
              <FeatureDescription>
                Group, label, and colour-code your tabs to stay organised and work faster. 
                Create tab groups for different projects or topics to keep your browsing organized.
              </FeatureDescription>
              <FeatureLink href="#">
                Learn more →
              </FeatureLink>
            </div>
            <FeatureVisual>
              <TabVisual>
                <TabGroupLabel>Work</TabGroupLabel>
                <TabGroup>
                  <Tab active>Gmail</Tab>
                  <Tab>Docs</Tab>
                  <Tab>Sheets</Tab>
                </TabGroup>
                <TabGroupLabel>Research</TabGroupLabel>
                <TabGroup>
                  <Tab>Search</Tab>
                  <Tab>News</Tab>
                  <Tab>Maps</Tab>
                </TabGroup>
                <TabContent>
                  Tab groups help you organize your browsing
                </TabContent>
              </TabVisual>
            </FeatureVisual>
          </FeatureCard>
        </FeaturesGrid>
      </Container>
    </Section>
  );
};

export default TabManagement;
