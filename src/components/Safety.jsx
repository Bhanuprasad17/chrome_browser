import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90vh;
  box-shadow: ${props => props.bgColor === 'white' ? '0 4px 12px rgba(0, 0, 0, 0.1)' : 'none'};
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-4px);
  }
  
  @media (max-width: 768px) {
    height: 60vh;
  }
`;

const CardContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const FeatureTitle = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${props => props.bgColor === 'white' ? '#5f6368' : 'rgba(255, 255, 255, 0.8)'};
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const FeatureHeading = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${props => props.bgColor === 'white' ? '#202124' : 'white'};
  margin-bottom: 0.75rem;
  line-height: 1.3;
`;

const FeatureDescription = styled.p`
  font-size: 0.875rem;
  color: ${props => props.bgColor === 'white' ? '#5f6368' : 'rgba(255, 255, 255, 0.9)'};
  line-height: 1.4;
  margin-bottom: 1rem;
`;

const FeatureLink = styled.a`
  color: #1a73e8;
  text-decoration: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  margin-top: auto;
  font-size: 0.875rem;
  transition: all 0.3s ease;
  
  &:hover {
    text-decoration: underline;
    transform: translateX(4px);
  }
`;

const PasswordForm = styled.div`
  background: white;
  border: 1px solid #e8eaed;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem 0;
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
  margin-top: auto;
  padding-top: 1rem;
`;

const StatusDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #34a853;
`;

const StatusText = styled.span`
  color: rgba(255, 255, 255, 0.8);
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

const PlusButton = styled(motion.button)`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  background-color: #1a73e8;
  border: none;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(26, 115, 232, 0.4);
  transition: all 0.3s ease;
  z-index: 10;

  &:hover {
    background-color: #1557b0;
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(26, 115, 232, 0.3);
  }
`;

const CardImage = styled(motion.img)`
  border-radius: 4px;
  object-fit: contain;
  width: 100%;
  height: auto;
  max-height: 200px;
  margin-top: auto;
  align-self: flex-start;
`;

const ExpandedContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
`;

const ExpandedText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  
  ${FeatureDescription} {
    margin-bottom: 0;
    font-size: 0.875rem;
    line-height: 1.5;
  }
`;

const Safety = ({ id }) => {
  const [ref, isVisible] = useScrollAnimation();

  // Animation variants
  const contentVariants = {
    collapsed: {
      opacity: 0,
      height: 0,
      y: -20,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    },
    expanded: {
      opacity: 1,
      height: "auto",
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.3
      }
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        delay: 0.1
      }
    }
  };

  // Helper function to create the password form
  const createPasswordForm = () => (
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
  );

  // Helper function to create the safety check popup
  const createSafetyCheckPopup = () => (
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
  );

  // Helper function to create status indicator
  const createStatusIndicator = () => (
    <StatusIndicator>
      <StatusDot />
      <StatusText>On</StatusText>
      <span style={{color: 'rgba(255, 255, 255, 0.6)'}}>•••</span>
      <span style={{color: 'rgba(255, 255, 255, 0.6)'}}>→</span>
    </StatusIndicator>
  );

  // Initial card data
  const getOriginalCardTexts = () => [
    {
      title: "PASSWORD MANAGER",
      heading: "Use strong passwords on every site",
      description: null,
      extraContent: createPasswordForm(),
      status: createStatusIndicator(),
      expanded: false,
      showImage: true,
    },
    {
      title: "SAFETY CHECK",
      heading: "Check your safety level in real time with just one click",
      description: createSafetyCheckPopup(),
      extraContent: (
        <>
          <FeatureDescription>
            Chrome's Safety Check confirms the overall security and privacy of your browsing experience, 
            including your saved passwords, extensions and settings. If something needs attention, 
            Chrome will help you fix it.
          </FeatureDescription>
          <FeatureLink href="#">Learn more about safety on Chrome →</FeatureLink>
        </>
      ),
      status: null,
      expanded: false,
      showImage: false,
    },
    {
      title: "ENHANCED SAFE BROWSING",
      heading: "Browse with the confidence that you're staying safer online",
      description: (
        <FeatureDescription>
          Enhanced Safe Browsing provides additional protection by sharing real-time data with 
          Google Safe Browsing to help identify and warn you about dangerous sites, downloads, 
          and extensions.
        </FeatureDescription>
      ),
      extraContent: null,
      status: null,
      expanded: false,
      showImage: false,
    },
    {
      title: "PRIVACY GUIDE",
      heading: "Keep your privacy under your control with easy-to-use settings",
      description: (
        <FeatureDescription bgColor="#1a73e8">
          Chrome makes it easy to understand exactly what you're sharing online and who you're 
          sharing it with. Simply use the Privacy Guide, a step-by-step tour of your privacy settings.
        </FeatureDescription>
      ),
      extraContent: (
        <CardImage
          src="https://www.google.com/chrome/static/images/v2/gallery/google-safety-2x.webp"
          alt="Google Safety"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        />
      ),
      status: null,
      expanded: false,
      showImage: false,
    }
  ];

  const [cardTexts, setCardTexts] = useState(getOriginalCardTexts());

  const handlePlusClick = (index) => {
    setCardTexts(prevTexts => {
      const newTexts = [...prevTexts];
      newTexts[index].expanded = !newTexts[index].expanded;

      if (index === 0) {
        if (newTexts[index].expanded) {
          newTexts[index].title = '';
          newTexts[index].heading = '';
          newTexts[index].description = null;
          newTexts[index].extraContent = (
            <ExpandedContent>
              <CardImage
                src="https://www.google.com/chrome/static/images/v2/gallery/save-password-2x.webp"
                alt="Password Manager"
                variants={imageVariants}
                initial="hidden"
                animate="visible"
              />
              <ExpandedText>
                <FeatureDescription bgColor="#1a73e8">
                  Chrome has Google Password Manager built in, which makes it simple to save, manage and protect your passwords online. It also helps you create stronger passwords for every account you use.
                </FeatureDescription>
                <FeatureDescription bgColor="#1a73e8">
                  Your passwords are encrypted and stored securely in your Google Account, accessible across all your devices when you're signed in.
                </FeatureDescription>
                <FeatureDescription bgColor="#1a73e8">
                  Get alerts if your saved passwords are compromised in a data breach, so you can change them right away.
                </FeatureDescription>
              </ExpandedText>
              <FeatureLink href="#" style={{color: 'rgba(255, 255, 255, 0.9)'}}>Learn more about Password Manager →</FeatureLink>
            </ExpandedContent>
          );
          newTexts[index].status = null;
          newTexts[index].showImage = false;
        } else {
          newTexts[index] = { ...getOriginalCardTexts()[index], expanded: false };
        }
      } else {
        if (newTexts[index].expanded) {
          // Show expanded content for other cards
          if (index === 1) {
            newTexts[index].heading = '';
            newTexts[index].description = null;
            newTexts[index].extraContent = (
              <ExpandedContent>
                <CardImage
                  src="https://www.google.com/chrome/static/images/v2/gallery/safety-check-2x.webp"
                  alt="Safety Check"
                  variants={imageVariants}
                  initial="hidden"
                  animate="visible"
                />
                <ExpandedText>
                  <FeatureDescription>
                    Safety Check runs in the background and alerts you if passwords have been compromised, if extensions are potentially harmful, and if you're not using the latest version of Chrome.
                  </FeatureDescription>
                  <FeatureDescription>
                    Get real-time protection against dangerous websites, malicious downloads, and suspicious extensions with enhanced security features.
                  </FeatureDescription>
                  <FeatureDescription>
                    Your privacy settings are regularly reviewed to ensure they match your preferences and provide the protection you expect.
                  </FeatureDescription>
                </ExpandedText>
                <FeatureLink href="#">Learn more about Safety Check →</FeatureLink>
              </ExpandedContent>
            );
          } else if (index === 2) {
            newTexts[index].heading = '';
            newTexts[index].description = null;
            newTexts[index].extraContent = (
              <ExpandedContent>
                <CardImage
                  src="https://www.google.com/chrome/static/images/v2/gallery/malware-alert-2x.webp"
                  alt="Safe Browsing"
                  variants={imageVariants}
                  initial="hidden"
                  animate="visible"
                />
                <ExpandedText>
                  <FeatureDescription>
                    Enhanced Safe Browsing provides proactive protection by checking URLs and downloads against Google's constantly updated lists of unsafe web resources.
                  </FeatureDescription>
                  <FeatureDescription>
                    Get warnings about potentially dangerous sites, downloads, and extensions before they can harm your device or compromise your data.
                  </FeatureDescription>
                  <FeatureDescription>
                    Advanced protection includes real-time URL checking and deep file scanning for comprehensive security coverage.
                  </FeatureDescription>
                </ExpandedText>
                <FeatureLink href="#">Learn more about Safe Browsing →</FeatureLink>
              </ExpandedContent>
            );
          } else if (index === 3) {
            newTexts[index].heading = '';
            newTexts[index].description = null;
            newTexts[index].extraContent = (
              <ExpandedContent>
                <CardImage
                  src="https://www.google.com/chrome/static/images/v2/gallery/privacy-guide-2x.webp"
                  alt="Privacy Guide"
                  variants={imageVariants}
                  initial="hidden"
                  animate="visible"
                />
                <ExpandedText>
                  <FeatureDescription bgColor="#1a73e8">
                    Privacy Guide walks you through key privacy settings like Safe Browsing, cookies, and more, so you can choose the settings that are right for you.
                  </FeatureDescription>
                  <FeatureDescription bgColor="#1a73e8">
                    Control how your data is used across Google services and understand what information is collected and why.
                  </FeatureDescription>
                  <FeatureDescription bgColor="#1a73e8">
                    Make informed decisions about your online privacy with clear explanations and easy-to-use controls.
                  </FeatureDescription>
                </ExpandedText>
                <FeatureLink href="#" style={{color: 'rgba(255, 255, 255, 0.9)'}}>Learn more about Privacy Guide →</FeatureLink>
              </ExpandedContent>
            );
          }
        } else {
          // Restore original content
          newTexts[index] = { ...getOriginalCardTexts()[index], expanded: false };
        }
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

        <FeaturesGrid>
          {cardTexts.map((card, index) => (
            <FeatureCard
              key={index}
              bgColor={index === 0 || index === 3 ? "#1a73e8" : "white"}
              variants={scrollVariants.staggerItem}
              initial="hidden"
              animate={isVisible ? 'visible' : 'hidden'}
              layout
            >
              <CardContent>
                <FeatureTitle bgColor={index === 0 || index === 3 ? "#1a73e8" : "white"}>
                  {card.title}
                </FeatureTitle>

                <AnimatePresence mode="wait">
                  {!card.expanded && card.heading && (
                    <motion.div
                      key={`${index}-heading`}
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <FeatureHeading bgColor={index === 0 || index === 3 ? "#1a73e8" : "white"}>
                        {card.heading}
                      </FeatureHeading>
                    </motion.div>
                  )}
                </AnimatePresence>

                <AnimatePresence mode="wait">
                  {!card.expanded ? (
                    <motion.div
                      key={`${index}-original`}
                      variants={imageVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                    >
                      {card.description}
                      {card.extraContent}
                      {card.status}
                      {card.showImage && (
                        <CardImage
                          src="https://www.google.com/chrome/static/images/v2/gallery/passwords-fill-2-2x.webp"
                          alt="Passwords"
                          variants={imageVariants}
                          initial="hidden"
                          animate="visible"
                        />
                      )}
                    </motion.div>
                  ) : (
                    <motion.div
                      key={`${index}-expanded`}
                      variants={contentVariants}
                      initial="collapsed"
                      animate="expanded"
                      exit="collapsed"
                      layout
                    >
                      {card.extraContent}
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
              
              <PlusButton
                onClick={() => handlePlusClick(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{ rotate: card.expanded ? 45 : 0 }}
                transition={{ duration: 0.3 }}
              >
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