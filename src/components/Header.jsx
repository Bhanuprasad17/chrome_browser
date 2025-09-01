import React, { useEffect, useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../utils/useScrollAnimation';
import { scrollVariants } from '../utils/scrollAnimations';

const Header = ({ isMenuOpen, setIsMenuOpen, activeSection, scrollToSection }) => {
  const [ref, isVisible] = useScrollAnimation();
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, [setIsMenuOpen]);

  const handleNavClick = useCallback((e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
  }, [scrollToSection]);

  const handleLogoClick = useCallback(() => {
    scrollToSection('hero');
  }, [scrollToSection]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerStyles = {
    position: 'fixed',
    top: isScrolled ? '1rem' : '0',
    left: '50%',
    transform: 'translateX(-50%)',
    width: isScrolled ? 'auto' : '100%',
    maxWidth: isScrolled ? 'none' : '1200px',
    zIndex: 1000,
    padding: isScrolled ? '0.5rem 1.5rem' : '1rem 2rem',
    backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0)',
    backdropFilter: isScrolled ? 'blur(10px)' : 'blur(0px)',
    boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.15)' : 'none',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    borderRadius: isScrolled ? '2rem' : '0',
    border: isScrolled ? '1px solid rgba(0, 0, 0, 0.1)' : 'none'
  };

  const headerContentStyles = {
    display: 'flex',
    justifyContent: isScrolled ? 'center' : 'space-between',
    alignItems: 'center',
    width: '100%',
    transition: 'justify-content 0.4s ease'
  };

  const logoStyles = {
    display: isScrolled ? 'none' : 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#333',
    cursor: 'pointer',
    opacity: isScrolled ? 0 : 1,
    transform: 'translateX(0)',
    transition: 'opacity 0.3s ease'
  };

  const navigationStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: isScrolled ? '0.5rem' : '2rem',
    width: '100%',
    justifyContent: isScrolled ? 'center' : 'flex-end',
    transition: 'all 0.4s ease'
  };

  const navLinkStyles = {
    textDecoration: 'none',
    color: '#5f6368',
    fontWeight: '500',
    padding: isScrolled ? '0.5rem 1rem' : '0.5rem 1rem',
    borderRadius: '1.5rem',
    transition: 'all 0.3s ease',
    opacity: 1,
    transform: 'translateY(0) scale(1)',
    fontSize: isScrolled ? '0.9rem' : '1rem',
    whiteSpace: 'nowrap'
  };

  const activeNavLinkStyles = {
    ...navLinkStyles,
    backgroundColor: isScrolled ? '#e8f0fe' : '#1a73e8',
    color: isScrolled ? '#1a73e8' : 'white'
  };

  const downloadButtonStyles = {
    display: isScrolled ? 'none' : 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.75rem 1.5rem',
    backgroundColor: '#1a73e8',
    color: 'white',
    border: 'none',
    borderRadius: '0.5rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    opacity: isScrolled ? 0 : 1,
    transform: 'translateY(0) scale(1)'
  };

  return (
    <>
      <motion.header
        style={headerStyles}
        ref={ref}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={scrollVariants.staggerContainer}
      >
        <div style={headerContentStyles}>
          <motion.div
            style={logoStyles}
            onClick={handleLogoClick}
            variants={scrollVariants.staggerItem}
          >
            <span style={{ fontSize: '1.2rem' }}>🌐</span>
            Chrome
          </motion.div>
          
          <nav style={navigationStyles} className="navigation">
            <motion.a
              className="nav-link"
              style={activeSection === 'safety' ? activeNavLinkStyles : navLinkStyles}
              href="#safety"
              onClick={(e) => handleNavClick(e, 'safety')}
              variants={scrollVariants.staggerItem}
            >
              Safety
            </motion.a>
            <motion.a
              className="nav-link"
              style={activeSection === 'features' ? activeNavLinkStyles : navLinkStyles}
              href="#features"
              onClick={(e) => handleNavClick(e, 'features')}
              variants={scrollVariants.staggerItem}
            >
              Features
            </motion.a>
            <motion.a
              className="nav-link"
              style={activeSection === 'customization' ? activeNavLinkStyles : navLinkStyles}
              href="#customization"
              onClick={(e) => handleNavClick(e, 'customization')}
              variants={scrollVariants.staggerItem}
            >
              Customization
            </motion.a>
            <motion.a
              className="nav-link"
              style={activeSection === 'ai' ? activeNavLinkStyles : navLinkStyles}
              href="#ai"
              onClick={(e) => handleNavClick(e, 'ai')}
              variants={scrollVariants.staggerItem}
            >
              AI
            </motion.a>
            <motion.button
              className="download-button"
              style={downloadButtonStyles}
              variants={scrollVariants.staggerItem}
            >
              <span>⬇</span>
              Download Chrome
            </motion.button>
          </nav>
        </div>
      </motion.header>
    </>
  );
};

export default Header;
