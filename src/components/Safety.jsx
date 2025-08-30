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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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

const Safety = () => {
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
          Stay{' '}
          <SafetyHighlight
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            🛡️ safe
          </SafetyHighlight>
          {' '}while you browse
        </SectionTitle>
        
        <FeaturesGrid
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <FeatureCard
            bgColor="#1a73e8"
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div>
              <FeatureTitle>PASSWORD MANAGER</FeatureTitle>
              <FeatureHeading>Use strong passwords on every site</FeatureHeading>
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
              <StatusIndicator>
                <StatusDot />
                <StatusText>On</StatusText>
                <span>•••</span>
                <span>→</span>
              </StatusIndicator>
            </div>
          </FeatureCard>

          <FeatureCard
            bgColor="white"
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div>
              <FeatureTitle>SAFETY CHECK</FeatureTitle>
              <FeatureHeading>Check your safety level in real time with just one click</FeatureHeading>
              <SafetyCheckPopup>
                <PopupHeader>
                  🛡️ Safety check ran a moment ago
                </PopupHeader>
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
              <FeatureLink href="#">
                Learn more about safety on Chrome →
              </FeatureLink>
            </div>
          </FeatureCard>

          <FeatureCard
            bgColor="white"
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div>
              <FeatureTitle>ENHANCED SAFE BROWSING</FeatureTitle>
              <FeatureHeading>Browse with the confidence that you're staying safer online</FeatureHeading>
              <FeatureDescription>
                Enhanced Safe Browsing provides additional protection by sharing real-time data with 
                Google Safe Browsing to help identify and warn you about dangerous sites, downloads, 
                and extensions.
              </FeatureDescription>
              <FeatureLink href="#">
                Learn more →
              </FeatureLink>
            </div>
          </FeatureCard>

          <FeatureCard
            bgColor="#1a73e8"
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div>
              <FeatureTitle>PRIVACY GUIDE</FeatureTitle>
              <FeatureHeading>Keep your privacy under your control with easy-to-use settings</FeatureHeading>
              <FeatureDescription>
                Chrome makes it easy to understand exactly what you're sharing online and who you're 
                sharing it with. Simply use the Privacy Guide, a step-by-step tour of your privacy settings.
              </FeatureDescription>
              <GoogleLogo>G</GoogleLogo>
            </div>
          </FeatureCard>
        </FeaturesGrid>
      </Container>
    </Section>
  );
};

export default Safety; 