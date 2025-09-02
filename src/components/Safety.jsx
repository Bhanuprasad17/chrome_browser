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
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  color: #202124;
  text-align: center;
  margin-bottom: 1rem;
  line-height: 1.2;
`;

const SafetyHighlight = styled(motion.span)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #1a73e8;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0.5rem;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 2rem;
  margin-top: 4rem;
`;

const FeatureCard = styled(motion.div)`
  background: ${props => props.bgColor || 'white'};
  padding: 2rem;
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  min-height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: ${props => props.bgColor === 'white' ? '0 4px 12px rgba(0, 0, 0, 0.1)' : 'none'};
`;

const FeatureTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${props => props.bgColor === 'white' ? '#5f6368' : 'white'};
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const FeatureHeading = styled.h4`
  font-size: 1.3rem;
  font-weight: 600;
  color: ${props => props.bgColor === 'white' ? '#202124' : 'white'};
  margin-bottom: 1rem;
  line-height: 1.3;
`;

const FeatureDescription = styled.p`
  font-size: 0.95rem;
  color: ${props => props.bgColor === 'white' ? '#5f6368' : 'rgba(255, 255, 255, 0.9)'};
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

const PasswordForm = styled.div`
  background: white;
  border: 1px solid #e8eaed;
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
`;

const FormField = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  background: #f8f9fa;
  border-radius: 4px;
`;

const FormInput = styled.div`
  color: #202124;
  font-size: 0.9rem;
  flex-grow: 1;
`;

const FormIcon = styled.div`
  color: #5f6368;
  font-size: 1rem;
  cursor: pointer;
`;

const PasswordPrompt = styled.div`
  background: #e8f5e8;
  border: 1px solid #34a853;
  border-radius: 6px;
  padding: 0.5rem;
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PromptText = styled.span`
  color: #137333;
  font-size: 0.85rem;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #137333;
  cursor: pointer;
  font-size: 1rem;
  padding: 0;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  
  &:hover {
    background: rgba(52, 168, 83, 0.1);
  }
`;

const StatusIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const StatusDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #34a853;
`;

const StatusText = styled.span`
  color: #5f6368;
  font-size: 0.85rem;
`;

const SafetyCheckPopup = styled.div`
  background: white;
  border: 1px solid #e8eaed;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const PopupHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  color: #1a73e8;
  font-weight: 500;
`;

const CheckItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: #5f6368;
`;

const CheckIcon = styled.div`
  color: #34a853;
  font-size: 1rem;
`;

const InfoIcon = styled.div`
  color: #9aa0a6;
  font-size: 1rem;
`;

const GoogleLogo = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: white;
  text-align: center;
  margin-top: auto;
`;

const PlusButton = styled.button`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  background-color: #1a73e8;
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
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

const Safety = ({ id }) => {
  const [ref, isVisible] = useScrollAnimation();

  const originalCardTexts = [
    {
      title: "PASSWORD MANAGER",
      heading: "Use strong passwords on every site",
      description: null,
      extraContent: (
        <PasswordForm>
          <FormField>
            <FormInput>elisa.beckett</FormInput>
          </FormField>
          <FormField>
            <FormInput>••••••••</FormInput>
            <FormIcon>👁️</FormIcon>
            <FormIcon>🔒</FormIcon>
          </FormField>
          <PasswordPrompt>
            <PromptText>Use Saved Password?</PromptText>
            <CloseButton>✕</CloseButton>
          </PasswordPrompt>
        </PasswordForm>
      ),
      status: (
        <StatusIndicator>
          <StatusDot />
          <StatusText>On</StatusText>
          <span>•••</span>
          <span>→</span>
        </StatusIndicator>
      ),
      expanded: false,
    },
    {
      title: "SAFETY CHECK",
      heading: "Check your safety level in real time with just one click",
      description: (
        <>
          <SafetyCheckPopup>
            <PopupHeader>🛡️ Safety check ran a moment ago</PopupHeader>
            <CheckItem>
              <CheckIcon>✓</CheckIcon>
              Updates - Chrome is up to date
            </CheckItem>
            <CheckItem>
              <InfoIcon>ℹ</InfoIcon>
              Password Manager
            </CheckItem>
          </SafetyCheckPopup>
          <FeatureDescription>
            Chrome's Safety Check confirms the overall security and privacy of your browsing experience, 
            including your saved passwords, extensions and settings. If something needs attention, 
            Chrome will help you fix it.
          </FeatureDescription>
          <FeatureLink href="#">Learn more about safety on Chrome →</FeatureLink>
        </>
      ),
      extraContent: null,
      status: null,
      expanded: false,
    },
    {
      title: "ENHANCED SAFE BROWSING",
      heading: "Browse with the confidence that you're staying safer online",
      description: (
        <>
          Enhanced Safe Browsing provides additional protection by sharing real-time data with 
          Google Safe Browsing to help identify and warn you about dangerous sites, downloads, 
          and extensions.
        </>
      ),
      extraContent: null,
      status: null,
      expanded: false,
    },
    {
      title: "PRIVACY GUIDE",
      heading: "Keep your privacy under your control with easy-to-use settings",
      description: (
        <>
          Chrome makes it easy to understand exactly what you're sharing online and who you're 
          sharing it with. Simply use the Privacy Guide, a step-by-step tour of your privacy settings.
        </>
      ),
      extraContent: <GoogleLogo>G</GoogleLogo>,
      status: null,
      expanded: false,
    }
  ];

  const [cardTexts, setCardTexts] = useState(originalCardTexts);

  const handlePlusClick = (index) => {
    setCardTexts(prevTexts => {
      const newTexts = [...prevTexts];
      newTexts[index].expanded = !newTexts[index].expanded;

      if (newTexts[index].expanded) {
        // Show image + text
        newTexts[index].heading = "Text changed after clicking +";
        newTexts[index].description = "This is the updated description text.";
        newTexts[index].extraContent = (
          <>
            <GoogleLogo>✕</GoogleLogo>
            <FeatureDescription>This is the updated description text with image + text.</FeatureDescription>
          </>
        );
      } else {
        // Restore original content
        newTexts[index] = { ...originalCardTexts[index], expanded: false };
      }
      return newTexts;
    });
  };

  return (
    <Section id={id} ref={ref}>
      <Container>
        <SectionTitle
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={scrollVariants.staggerContainer}
        >
          Stay{' '}
          <SafetyHighlight
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={scrollVariants.scaleIn}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            🛡️ safe
          </SafetyHighlight>
          {' '}while you browse
        </SectionTitle>

        <FeaturesGrid
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={scrollVariants.staggerContainer}
        >
          {cardTexts.map((card, index) => (
            <FeatureCard
              key={index}
              bgColor={index === 0 || index === 3 ? "#1a73e8" : "white"}
              variants={scrollVariants.staggerItem}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div>
                <FeatureTitle bgColor={index === 0 || index === 3 ? "#1a73e8" : "white"}>{card.title}</FeatureTitle>
                <FeatureHeading bgColor={index === 0 || index === 3 ? "#1a73e8" : "white"}>{card.heading}</FeatureHeading>
                {card.description && <FeatureDescription bgColor={index === 0 || index === 3 ? "#1a73e8" : "white"}>{card.description}</FeatureDescription>}
                {card.extraContent}
                {card.status}
              </div>
              <PlusButton onClick={() => handlePlusClick(index)}>
                {card.expanded ? '✕' : '+'}
              </PlusButton>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </Container>
    </Section>
  );
};

export default Safety;
