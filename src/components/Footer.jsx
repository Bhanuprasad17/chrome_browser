import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FooterContainer = styled.footer`
  background: #f8f9fa;
  padding: 4rem 2rem 2rem;
  border-top: 1px solid #e8eaed;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterTop = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #e8eaed;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FooterTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #202124;
  margin-bottom: 0.5rem;
`;

const FooterLink = styled(motion.a)`
  color: #5f6368;
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    color: #1a73e8;
    transform: translateX(4px);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled(motion.a)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #e8eaed;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #5f6368;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background: #1a73e8;
    color: white;
    transform: translateY(-3px);
  }
`;

const DownloadSection = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const DownloadTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #202124;
  margin-bottom: 1rem;
`;

const DownloadSubtitle = styled.p`
  font-size: 1.1rem;
  color: #5f6368;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const DownloadButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const DownloadButton = styled(motion.button)`
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

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid #e8eaed;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: #5f6368;
  font-size: 0.9rem;
`;

const FooterBottomLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <FooterContainer>
      <FooterContent>
        <DownloadSection
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <DownloadTitle variants={itemVariants}>
            Take your browser with you
          </DownloadTitle>
          <DownloadSubtitle variants={itemVariants}>
            Download Chrome on your mobile device or tablet and sign into your account for the same browser experience, everywhere.
          </DownloadSubtitle>
          <DownloadButtons variants={itemVariants}>
            <DownloadButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>⬇</span>
              Get Chrome
            </DownloadButton>
            <SecondaryButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Chrome
            </SecondaryButton>
          </DownloadButtons>
        </DownloadSection>

        <FooterTop
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <FooterSection variants={itemVariants}>
            <FooterTitle>Follow us</FooterTitle>
            <SocialLinks>
              <SocialIcon href="#" whileHover={{ scale: 1.1 }}>📺</SocialIcon>
              <SocialIcon href="#" whileHover={{ scale: 1.1 }}>🐦</SocialIcon>
              <SocialIcon href="#" whileHover={{ scale: 1.1 }}>📘</SocialIcon>
              <SocialIcon href="#" whileHover={{ scale: 1.1 }}>💼</SocialIcon>
              <SocialIcon href="#" whileHover={{ scale: 1.1 }}>🎵</SocialIcon>
            </SocialLinks>
          </FooterSection>

          <FooterSection variants={itemVariants}>
            <FooterTitle>Chrome Family</FooterTitle>
            <FooterLink href="#">Other Platforms</FooterLink>
            <FooterLink href="#">Chromebooks</FooterLink>
            <FooterLink href="#">Chromecast</FooterLink>
            <FooterLink href="#">Chrome Web Store</FooterLink>
          </FooterSection>

          <FooterSection variants={itemVariants}>
            <FooterTitle>Enterprise</FooterTitle>
            <FooterLink href="#">Download Chrome Browser</FooterLink>
            <FooterLink href="#">Chrome Browser for Enterprise</FooterLink>
            <FooterLink href="#">Chrome Devices</FooterLink>
            <FooterLink href="#">ChromeOS</FooterLink>
          </FooterSection>

          <FooterSection variants={itemVariants}>
            <FooterTitle>Support</FooterTitle>
            <FooterLink href="#">Chrome Help</FooterLink>
            <FooterLink href="#">Update Chrome</FooterLink>
            <FooterLink href="#">Chrome Tips</FooterLink>
            <FooterLink href="#">Google Chrome Blog</FooterLink>
          </FooterSection>
        </FooterTop>

        <FooterBottom
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <Copyright variants={itemVariants}>
            © 2024 Google Chrome. All rights reserved.
          </Copyright>
          <FooterBottomLinks variants={itemVariants}>
            <FooterLink href="#">Privacy and Terms</FooterLink>
            <FooterLink href="#">About Google</FooterLink>
            <FooterLink href="#">Google products</FooterLink>
            <FooterLink href="#">Cookies management controls</FooterLink>
          </FooterBottomLinks>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
