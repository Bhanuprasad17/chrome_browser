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
  width: 280px;
  height: 180px;
  border: 1px solid #e8eaed;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  background: ${props => props.theme || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
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

const ThemeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  margin-top: 1rem;
`;

const ThemeOption = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 6px;
  background: ${props => props.color};
  border: 2px solid ${props => props.selected ? '#1a73e8' : 'transparent'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
  }
`;

const MobileVisual = styled.div`
  width: 120px;
  height: 200px;
  border: 2px solid #e8eaed;
  border-radius: 16px;
  background: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const MobileIcon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 6px;
  background: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  color: #5f6368;
`;

const AutofillVisual = styled.div`
  background: white;
  border: 1px solid #e8eaed;
  border-radius: 8px;
  padding: 1rem;
  min-width: 250px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const FormField = styled.div`
  margin-bottom: 1rem;
`;

const FormLabel = styled.div`
  font-size: 0.8rem;
  color: #5f6368;
  margin-bottom: 0.25rem;
`;

const FormInput = styled.div`
  padding: 0.5rem;
  border: 1px solid #e8eaed;
  border-radius: 4px;
  background: #f8f9fa;
  color: #202124;
  font-size: 0.9rem;
`;

const AutofillButton = styled.button`
  background: #1a73e8;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.8rem;
  cursor: pointer;
  margin-top: 0.5rem;
  
  &:hover {
    background: #1557b0;
  }
`;

const Customization = () => {
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
          Make it yours and take it with you
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
              <FeatureTitle>Customise your Chrome</FeatureTitle>
              <FeatureHeading>Personalise your web browser with themes, dark mode and other options built just for you</FeatureHeading>
              <FeatureLink href="#">
                Explore themes →
              </FeatureLink>
            </div>
            <FeatureVisual>
              <BrowserWindow theme="linear-gradient(135deg, #667eea 0%, #764ba2 100%)">
                <BrowserHeader>
                  <BrowserTab>Chrome</BrowserTab>
                </BrowserHeader>
                <BrowserContent>🌄</BrowserContent>
              </BrowserWindow>
              <ThemeGrid>
                <ThemeOption color="#667eea" selected />
                <ThemeOption color="#34a853" />
                <ThemeOption color="#fbbc05" />
                <ThemeOption color="#ea4335" />
                <ThemeOption color="#9c27b0" />
                <ThemeOption color="#ff9800" />
                <ThemeOption color="#795548" />
                <ThemeOption color="#607d8b" />
                <ThemeOption color="#e91e63" />
              </ThemeGrid>
            </FeatureVisual>
          </FeatureCard>

          <FeatureCard
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div>
              <FeatureTitle>Browse across devices</FeatureTitle>
              <FeatureHeading>Sign in to Chrome on any device to access your bookmarks, saved passwords and more</FeatureHeading>
              <FeatureLink href="#">
                Learn more →
              </FeatureLink>
            </div>
            <FeatureVisual>
              <MobileVisual>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🌐</div>
                <MobileIcon>📧</MobileIcon>
                <MobileIcon>🗺️</MobileIcon>
                <MobileIcon>📱</MobileIcon>
                <MobileIcon>⭐</MobileIcon>
                <MobileIcon>📋</MobileIcon>
                <MobileIcon>⬜</MobileIcon>
                <MobileIcon>⏰</MobileIcon>
              </MobileVisual>
            </FeatureVisual>
          </FeatureCard>

          <FeatureCard
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div>
              <FeatureTitle>Save time with autofill</FeatureTitle>
              <FeatureHeading>Use Chrome to save addresses, passwords and more to quickly autofill your details</FeatureHeading>
              <FeatureLink href="#">
                Learn more →
              </FeatureLink>
            </div>
            <FeatureVisual>
              <AutofillVisual>
                <FormField>
                  <FormLabel>Name</FormLabel>
                  <FormInput>John Doe</FormInput>
                </FormField>
                <FormField>
                  <FormLabel>Email</FormLabel>
                  <FormInput>john.doe@example.com</FormInput>
                </FormField>
                <FormField>
                  <FormLabel>Address</FormLabel>
                  <FormInput>123 Main St, City, State</FormInput>
                </FormField>
                <AutofillButton>Use Saved Info</AutofillButton>
              </AutofillVisual>
            </FeatureVisual>
          </FeatureCard>
        </FeaturesGrid>
      </Container>
    </Section>
  );
};

export default Customization; 