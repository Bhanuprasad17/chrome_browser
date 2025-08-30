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
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
  margin-bottom: 4rem;
`;

const FeatureCard = styled(motion.div)`
  background: ${props => props.bgColor || '#fef7e0'};
  padding: 2.5rem;
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

const AIVisual = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const AICircle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 0.9rem;
`;

const GoogleLogo = styled.div`
  font-size: 3rem;
  font-weight: bold;
  background: linear-gradient(45deg, #4285f4, #34a853, #fbbc05, #ea4335);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SearchVisual = styled.div`
  background: white;
  border: 1px solid #e8eaed;
  border-radius: 24px;
  padding: 1rem 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  min-width: 280px;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

const SearchIcon = styled.div`
  color: #9aa0a6;
  font-size: 1.2rem;
`;

const SearchInput = styled.div`
  color: #202124;
  font-size: 1rem;
  flex-grow: 1;
`;

const SearchResult = styled.div`
  color: #5f6368;
  font-size: 0.9rem;
  padding-left: 1.5rem;
`;

const WorkspaceVisual = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const WorkspaceIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
`;

const AIInnovations = () => {
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
          The browser built by Google
        </SectionTitle>
        
        <FeaturesGrid
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <FeatureCard
            bgColor="#fef7e0"
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div>
              <FeatureTitle>Google AI</FeatureTitle>
              <FeatureHeading>Access AI superpowers while you browse</FeatureHeading>
              <FeatureDescription>
                Google is integrating artificial intelligence to make our products more useful. 
                We use AI for features like Search, Google Translate, and more, and we're 
                innovating new technologies responsibly.
              </FeatureDescription>
              <FeatureLink href="#">
                Explore Google AI →
              </FeatureLink>
            </div>
            <FeatureVisual>
              <AIVisual>
                <AICircle color="#4285f4">G</AICircle>
                <AICircle color="#34a853">A</AICircle>
                <AICircle color="#fbbc05">I</AICircle>
                <AICircle color="#ea4335">+</AICircle>
              </AIVisual>
            </FeatureVisual>
          </FeatureCard>

          <FeatureCard
            bgColor="#fef7e0"
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div>
              <FeatureTitle>Google Search</FeatureTitle>
              <FeatureHeading>The search bar you love, built right in</FeatureHeading>
              <FeatureDescription>
                Access a world of knowledge at your fingertips. Check the weather, 
                solve math equations, and get instant search results, all contained 
                inside your browser's address bar.
              </FeatureDescription>
              <FeatureLink href="#">
                Learn more →
              </FeatureLink>
            </div>
            <FeatureVisual>
              <SearchVisual>
                <SearchBar>
                  <SearchIcon>🔍</SearchIcon>
                  <SearchInput>weather in paris</SearchInput>
                </SearchBar>
                <SearchResult>77°F Fri - Paris, France</SearchResult>
              </SearchVisual>
            </FeatureVisual>
          </FeatureCard>

          <FeatureCard
            bgColor="white"
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div>
              <FeatureTitle>Google Workspace</FeatureTitle>
              <FeatureHeading>Get things done, with or without Wi-Fi</FeatureHeading>
              <FeatureDescription>
                Get things done in Gmail, Google Docs, Google Slides, Google Sheets, 
                Google Translate and Google Drive, even without an Internet connection.
              </FeatureDescription>
              <FeatureLink href="#">
                Explore Workspace →
              </FeatureLink>
            </div>
            <FeatureVisual>
              <WorkspaceVisual>
                <WorkspaceIcon style={{ background: '#ea4335' }}>M</WorkspaceIcon>
                <WorkspaceIcon style={{ background: '#4285f4' }}>📄</WorkspaceIcon>
                <WorkspaceIcon style={{ background: '#34a853' }}>📊</WorkspaceIcon>
              </WorkspaceVisual>
            </FeatureVisual>
          </FeatureCard>
        </FeaturesGrid>
      </Container>
    </Section>
  );
};

export default AIInnovations;
