import React, { useEffect, useRef, useCallback, useState } from 'react';

const Header = ({ isMenuOpen, setIsMenuOpen, activeSection, scrollToSection }) => {
  const headerRef = useRef(null);
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
    animation: isScrolled ? 'none' : 'slideInLeft 0.8s ease-out',
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
    animation: isScrolled ? 'none' : 'fadeInUp 0.8s ease-out',
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
    transform: 'translateY(0) scale(1)',
    animation: isScrolled ? 'none' : 'bounceIn 0.9s ease-out 0.6s both'
  };

  const mobileMenuButtonStyles = {
    display: 'none',
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    color: '#333'
  };

  return (
    <>
      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(-25px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: translateY(10px) scale(0.8);
          }
          60% {
            transform: translateY(-5px) scale(1.05);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .nav-link:hover {
          background-color: rgba(26, 115, 232, 0.1);
          transform: translateY(-1px);
          color: #1a73e8;
        }

        .download-button:hover {
          background-color: #1557b0;
          transform: translateY(-2px) scale(1.05);
        }

        @media (max-width: 768px) {
          .mobile-menu-button {
            display: block !important;
          }
          .navigation {
            display: none !important;
          }
        }
      `}</style>
      <header style={headerStyles} ref={headerRef}>
        <div style={headerContentStyles}>
          <div 
            style={logoStyles}
            onClick={handleLogoClick}
          >
            <span style={{ fontSize: '1.2rem' }}>🌐</span>
            Chrome
          </div>
          
          <nav style={navigationStyles} className="navigation">
            <a
              className="nav-link"
              style={activeSection === 'safety' ? activeNavLinkStyles : navLinkStyles}
              href="#safety"
              onClick={(e) => handleNavClick(e, 'safety')}
            >
              Safety
            </a>
            <a
              className="nav-link"
              style={activeSection === 'features' ? activeNavLinkStyles : navLinkStyles}
              href="#features"
              onClick={(e) => handleNavClick(e, 'features')}
            >
              Features
            </a>
            <a
              className="nav-link"
              style={activeSection === 'customization' ? activeNavLinkStyles : navLinkStyles}
              href="#customization"
              onClick={(e) => handleNavClick(e, 'customization')}
            >
              Customization
            </a>
            <a
              className="nav-link"
              style={activeSection === 'ai' ? activeNavLinkStyles : navLinkStyles}
              href="#ai"
              onClick={(e) => handleNavClick(e, 'ai')}
            >
              AI
            </a>
            <button
              className="download-button"
              style={downloadButtonStyles}
            >
              <span>⬇</span>
              Download Chrome
            </button>
          </nav>
          
          <button 
            className="mobile-menu-button"
            style={mobileMenuButtonStyles}
            onClick={toggleMenu}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;