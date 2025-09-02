import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../utils/useScrollAnimation';
import { scrollVariants } from '../utils/scrollAnimations';

const Section = styled.section`
  padding: 6rem 2rem;
  background: white;
`;

const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 2.5rem);
  font-weight: 700;
  color: #202124;
  text-align: center;
  margin-bottom: 3rem;
  line-height: 1.2;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: 1239px;
  grid-template-rows: 260px 208px;
  gap: 3rem 3rem 3rem 3rem;
  margin-bottom: 4rem;
  position: relative;
  z-index: 0;

  @media(min-width: 768px) {
    grid-template-columns: 595px 595px;
    grid-template-rows: 208px;
    gap: 3rem 1.5rem;
  }
`;

const TopCard = styled(motion.div)`
  background-color: #fff4d6;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgb(0 0 0 / 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  grid-column: 1 / -1;
  width: 1239px;
  height: 260px;
`;

const BottomCard = styled(motion.div)`
  background-color: ${props => props.bgColor || 'white'};
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgb(0 0 0 / 0.1);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 595px;
  height: 208px;
`;

const CardText = styled.div`
  font-size: 0.9rem;
  color: #202124;
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const CardHeading = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const CardDescription = styled.p`
  font-size: 0.9rem;
  color: #5f6368;
  margin-bottom: 1rem;
  flex-grow: 1;
`;

const CardLink = styled.a`
  font-size: 0.9rem;
  color: #1a73e8;
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;

  &:hover {
    text-decoration: underline;
  }
`;

const CardImage = styled.img`
  border-radius: 8px;
  margin-top: auto;
`;

const TopCardImage = styled(CardImage)`
  width: 350px;
  height: auto;
`;

const BottomCardImage = styled(CardImage)`
  width: 120px;
  height: auto;
`;

const PlusButton = styled.button`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  background-color: #1a73e8;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 6px rgba(26, 115, 232, 0.6);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1557b0;
  }
`;

const Customization = ({ id }) => {
  const [ref, isVisible] = useScrollAnimation();

  // State to toggle bottom cards content
  const [bottomLeftExpanded, setBottomLeftExpanded] = useState(false);
  const [bottomRightExpanded, setBottomRightExpanded] = useState(false);

  return (
    <Section id={id} ref={ref}>
      <Container>
        <SectionTitle
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={scrollVariants.staggerContainer}
        >
          by Google
        </SectionTitle>

        <FeaturesGrid
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={scrollVariants.staggerContainer}
        >
          <TopCard
            variants={scrollVariants.staggerItem}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div>
              <CardText>Google AI</CardText>
              <CardHeading>Access AI superpowers while you browse.</CardHeading>
              <CardDescription>
                Google is integrating artificial intelligence to make our products more useful. We use AI for features like Search, Google Translate, and more, and we're innovating new technologies responsibly.
              </CardDescription>
              <CardLink href="#">Explore Google AI &rarr;</CardLink>
            </div>
            <TopCardImage src="https://www.gstatic.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google AI" />
          </TopCard>

          <BottomCard
            bgColor="#fff4d6"
            variants={scrollVariants.staggerItem}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div>
              <CardText>Google Search</CardText>
              <CardHeading>The search bar you love, built right in.</CardHeading>
              {!bottomLeftExpanded && (
                <BottomCardImage src="https://www.gstatic.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google Search" />
              )}
              {bottomLeftExpanded && (
                <CardDescription>
                  Search faster and smarter with Google Search integrated directly into your browser.
                </CardDescription>
              )}
            </div>
            <PlusButton onClick={() => setBottomLeftExpanded(!bottomLeftExpanded)}>
              {bottomLeftExpanded ? '✕' : '+'}
            </PlusButton>
          </BottomCard>

          <BottomCard
            bgColor="white"
            variants={scrollVariants.staggerItem}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div>
              <CardText>Google Workspace</CardText>
              <CardHeading>Get things done, with or without Wi-Fi.</CardHeading>
              {!bottomRightExpanded && (
                <BottomCardImage src="https://www.gstatic.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google Workspace" />
              )}
              {bottomRightExpanded && (
                <CardDescription>
                  Access your emails, documents, and files anywhere, anytime with Google Workspace.
                </CardDescription>
              )}
            </div>
            <PlusButton onClick={() => setBottomRightExpanded(!bottomRightExpanded)}>
              {bottomRightExpanded ? '✕' : '+'}
            </PlusButton>
          </BottomCard>
        </FeaturesGrid>
      </Container>
    </Section>
  );
};

export default Customization;
