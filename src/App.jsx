import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import TabManagement from './components/TabManagement';
import AIInnovations from './components/AIInnovations';
import Safety from './components/Safety';
import Customization from './components/Customization';
import GoogleBuilt from './components/GoogleBuilt';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const AppContainer = styled.div`
  font-family: 'Google Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  overflow-x: hidden;
  scroll-behavior: smooth;
`;

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Enhanced smooth scrolling to sections with fallback
  const scrollToSection = (sectionId) => {
    console.log('Scrolling to section:', sectionId); // Debug log
    
    const element = document.getElementById(sectionId);
    if (element) {
      // Calculate the target position accounting for the fixed header
      const headerHeight = 80; // Approximate header height
      const elementPosition = element.offsetTop - headerHeight;
      
      // Try smooth scrolling first
      try {
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      } catch (error) {
        // Fallback for browsers that don't support smooth scrolling
        console.log('Smooth scrolling not supported, using fallback');
        window.scrollTo(0, elementPosition);
      }
      
      console.log('Scrolled to:', sectionId, 'at position:', elementPosition);
    } else {
      console.error('Section not found:', sectionId);
      // Try to find the section by looking for similar IDs
      const allElements = document.querySelectorAll('section[id]');
      console.log('Available sections:', Array.from(allElements).map(el => el.id));
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'features', 'tabs', 'safety', 'customization', 'ai', 'google-built', 'faq'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          if (activeSection !== sections[i]) {
            setActiveSection(sections[i]);
            console.log('Active section changed to:', sections[i]); // Debug log
          }
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  // Debug: Log all available sections on mount
  useEffect(() => {
    console.log('App mounted, checking for sections...');
    const sections = ['hero', 'features', 'tabs', 'safety', 'customization', 'ai', 'google-built', 'faq'];
    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        console.log(`Section "${id}" found at position:`, element.offsetTop);
      } else {
        console.warn(`Section "${id}" not found`);
      }
    });
  }, []);

  return (
    <AppContainer>
      <Header 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Mobile menu would go here */}
          </motion.div>
        )}
      </AnimatePresence>
      <Hero id="hero" />
      <Features id="features" />
      <TabManagement id="tabs" />
      <Safety id="safety" />
      <Customization id="customization" />
      <AIInnovations id="ai" />
      <GoogleBuilt id="google-built" />
      <FAQ id="faq" />
      <Footer />
    </AppContainer>
  );
}

export default App;
