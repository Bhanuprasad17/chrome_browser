import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #e8eaed;
  z-index: 1000;
  padding: 1rem 2rem;
  transition: all 0.3s ease;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a73e8;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  
  &:hover {
    color: #1557b0;
  }
`;

const LogoIcon = styled.span`
  font-size: 2rem;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(motion.a)`
  color: ${props => props.active ? '#1a73e8' : '#5f6368'};
  text-decoration: none;
  font-weight: ${props => props.active ? '600' : '500'};
  padding: 0.5rem 1rem;
  border-radius: 20px;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  
  &:hover {
    color: #1a73e8;
    background: #f8f9fa;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: ${props => props.active ? '20px' : '0'};
    height: 2px;
    background: #1a73e8;
    border-radius: 1px;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 20px;
  }
`;

const DownloadButton = styled(motion.button)`
  background: #1a73e8;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 24px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background: #1557b0;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(26, 115, 232, 0.3);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #5f6368;
  cursor: pointer;
  padding: 0.5rem;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = ({ isMenuOpen, setIsMenuOpen, activeSection, scrollToSection }) => {
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    console.log('Nav link clicked:', sectionId); // Debug log
    scrollToSection(sectionId);
  };

  const handleLogoClick = () => {
    console.log('Logo clicked, scrolling to hero'); // Debug log
    scrollToSection('hero');
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          onClick={handleLogoClick}
        >
          <LogoIcon>🌐</LogoIcon>
          Chrome
        </Logo>
        
        <Navigation>
          <NavLink
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            href="#safety"
            active={activeSection === 'safety'}
            onClick={(e) => handleNavClick(e, 'safety')}
          >
            Safety
          </NavLink>
          <NavLink
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            href="#features"
            active={activeSection === 'features'}
            onClick={(e) => handleNavClick(e, 'features')}
          >
            Features
          </NavLink>
          <NavLink
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            href="#customization"
            active={activeSection === 'customization'}
            onClick={(e) => handleNavClick(e, 'customization')}
          >
            Customization
          </NavLink>
          <NavLink
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            href="#ai"
            active={activeSection === 'ai'}
            onClick={(e) => handleNavClick(e, 'ai')}
          >
            AI
          </NavLink>
          <DownloadButton
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>⬇</span>
            Download Chrome
          </DownloadButton>
        </Navigation>
        
        <MobileMenuButton onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </MobileMenuButton>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header; 