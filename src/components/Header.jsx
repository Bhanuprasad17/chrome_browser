import React, { useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Header.module.scss';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Header = ({ isMenuOpen, setIsMenuOpen, activeSection, scrollToSection }) => {
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const navLinksRef = useRef([]);
  const downloadButtonRef = useRef(null);

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
    const ctx = gsap.context(() => {
      // Create a timeline for sequenced animations
      const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.8 } });

      // Logo animation - slide in from left
      tl.fromTo(logoRef.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0 },
        "header-start"
      );

      // Navigation links - staggered fade in with slight bounce
      navLinksRef.current.forEach((link, index) => {
        if (link) {
          tl.fromTo(link,
            { opacity: 0, y: -25, scale: 0.9 },
            { opacity: 1, y: 0, scale: 1 },
            `header-start+=${0.1 + (index * 0.15)}`
          );
        }
      });

      // Download button - scale up with bounce effect
      tl.fromTo(downloadButtonRef.current,
        { opacity: 0, scale: 0.8, y: 10 },
        { 
          opacity: 1, 
          scale: 1, 
          y: 0,
          ease: "elastic.out(1, 0.8)",
          duration: 0.9
        },
        "header-start+=0.6"
      );

      // Header background animation on scroll
      ScrollTrigger.create({
        trigger: headerRef.current,
        start: "top top",
        end: "+=100",
        onEnter: () => {
          gsap.to(headerRef.current, {
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 2px 20px rgba(0, 0, 0, 0.1)",
            duration: 0.3
          });
        },
        onLeaveBack: () => {
          gsap.to(headerRef.current, {
            backgroundColor: "rgba(255, 255, 255, 0)",
            backdropFilter: "blur(0px)",
            boxShadow: "none",
            duration: 0.3
          });
        }
      });

    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <header className={styles.headerContainer} ref={headerRef}>
      <div className={styles.headerContent}>
        <div 
          className={styles.logo} 
          ref={logoRef}
          onClick={handleLogoClick}
        >
          <span className={styles.logoIcon}>🌐</span>
          Chrome
        </div>
        
        <nav className={styles.navigation}>
          <a
            ref={el => navLinksRef.current[0] = el}
            className={`${styles.navLink} ${activeSection === 'safety' ? styles.navLinkActive : ''}`}
            href="#safety"
            onClick={(e) => handleNavClick(e, 'safety')}
          >
            Safety
          </a>
          <a
            ref={el => navLinksRef.current[1] = el}
            className={`${styles.navLink} ${activeSection === 'features' ? styles.navLinkActive : ''}`}
            href="#features"
            onClick={(e) => handleNavClick(e, 'features')}
          >
            Features
          </a>
          <a
            ref={el => navLinksRef.current[2] = el}
            className={`${styles.navLink} ${activeSection === 'customization' ? styles.navLinkActive : ''}`}
            href="#customization"
            onClick={(e) => handleNavClick(e, 'customization')}
          >
            Customization
          </a>
          <a
            ref={el => navLinksRef.current[3] = el}
            className={`${styles.navLink} ${activeSection === 'ai' ? styles.navLinkActive : ''}`}
            href="#ai"
            onClick={(e) => handleNavClick(e, 'ai')}
          >
            AI
          </a>
          <button
            ref={downloadButtonRef}
            className={styles.downloadButton}
          >
            <span>⬇</span>
            Download Chrome
          </button>
        </nav>
        
        <button 
          className={styles.mobileMenuButton}
          onClick={toggleMenu}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>
    </header>
  );
};

export default Header;
