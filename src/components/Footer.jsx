import React, { useState, useEffect } from 'react';

// Custom hook for scroll animations
const useScrollAnimation = () => {
  const [elementRef, setElementRef] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!elementRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(elementRef);
    return () => observer.disconnect();
  }, [elementRef]);

  return [setElementRef, isVisible];
};

const Footer = () => {
  const [mobileRef, isMobileVisible] = useScrollAnimation();
  const [footerRef, isFooterVisible] = useScrollAnimation();

  return (
    <>
      {/* Mobile Download Card */}
      <div 
        ref={mobileRef}
        style={{
          background: 'linear-gradient(135deg, #4285f4 0%, #1a73e8 100%)',
          width: '80vw',
          margin: '2rem auto',
          borderRadius: '24px',
          padding: '4rem 3rem',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
          minHeight: '300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: isMobileVisible ? 1 : 0,
          transform: `translateY(${isMobileVisible ? 0 : 50}px)`,
          transition: 'all 0.8s ease-out'
        }}
      >
        {/* Background effects */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)
          `,
          pointerEvents: 'none'
        }} />
        
        <div style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1000px',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '4rem',
          flexWrap: 'wrap'
        }}>
          <div style={{
            flex: 1,
            textAlign: 'left',
            minWidth: '300px'
          }}>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
              marginBottom: '1.5rem',
              lineHeight: 1.1,
              fontFamily: "'Google Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif"
            }}>
              Take your browser with you
            </h2>
            
            <p style={{
              fontSize: '1.25rem',
              marginBottom: '2.5rem',
              opacity: 0.95,
              lineHeight: 1.5,
              fontWeight: 400,
              maxWidth: '500px'
            }}>
              Download Chrome on your mobile device or tablet and sign into your account for the same browser experience, everywhere.
            </p>
            
            <button 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                background: 'white',
                color: '#1a73e8',
                padding: '1rem 2.5rem',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: 500,
                fontSize: '1.1rem',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                border: 'none',
                cursor: 'pointer',
                fontFamily: "'Google Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif"
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.25)';
                e.target.style.background = '#f8f9fa';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
                e.target.style.background = 'white';
              }}
              onClick={() => window.open('https://www.google.com/chrome/', '_blank')}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '20px', height: '20px' }}>
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
              </svg>
              Download Chrome
            </button>
          </div>

          <div style={{
            flex: '0 0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <div style={{
              background: 'white',
              padding: '1.25rem',
              borderRadius: '16px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-4px) scale(1.02)';
              e.target.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.25)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0) scale(1)';
              e.target.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.2)';
            }}>
              <img
                style={{
                  width: '140px',
                  height: '140px',
                  display: 'block',
                  borderRadius: '8px'
                }}
                src="https://www.google.com/chrome/static/images/v2/go-mobile-qrs/engagement-hp-pop-up.webp"
                alt="QR Code to download Chrome"
              />
            </div>
            
            <p style={{
              fontSize: '0.95rem',
              opacity: 0.9,
              fontWeight: 500,
              marginTop: '0.5rem'
            }}>
              Get Chrome for your phone
            </p>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <footer 
        ref={footerRef}
        style={{
          backgroundColor: '#f8f9fa',
          width: '100%',
          padding: '3rem 2rem',
          color: '#202124',
          opacity: isFooterVisible ? 1 : 0,
          transform: `translateY(${isFooterVisible ? 0 : 30}px)`,
          transition: 'all 0.6s ease-out'
        }}
      >
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* Follow us section */}
          <div style={{
            marginBottom: '3rem',
            paddingBottom: '2rem'
          }}>
            <h3 style={{
              fontSize: '1.1rem',
              fontWeight: 600,
              color: '#202124',
              marginBottom: '1rem'
            }}>
              Follow us
            </h3>
            <div style={{
              display: 'flex',
              gap: '1rem',
              alignItems: 'center'
            }}>
              {[
                { icon: '📺', label: 'YouTube', bg: '#ff0000' },
                { icon: '𝕏', label: 'X (Twitter)', bg: '#000000' },
                { icon: '📘', label: 'Facebook', bg: '#1877f2' },
                { icon: '💼', label: 'LinkedIn', bg: '#0a66c2' },
                { icon: '🎵', label: 'TikTok', bg: '#000000' }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: '#e8eaed',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#5f6368',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    fontSize: '16px'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = social.bg;
                    e.target.style.color = 'white';
                    e.target.style.transform = 'translateY(-3px) scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#e8eaed';
                    e.target.style.color = '#5f6368';
                    e.target.style.transform = 'translateY(0) scale(1)';
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Main footer sections */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '3rem',
            marginBottom: '3rem',
            paddingBottom: '2rem',
            borderBottom: '1px solid #e8eaed'
          }}>
            <div>
              <h3 style={{
                fontSize: '1.1rem',
                fontWeight: 600,
                color: '#202124',
                marginBottom: '1.5rem'
              }}>
                Chrome Family
              </h3>
              {[
                'Other Platforms',
                'Chromebooks',
                'Chromecast',
                'Chrome Web Store'
              ].map((link, index) => (
                <a
                  key={index}
                  href="#"
                  style={{
                    color: '#5f6368',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    transition: 'all 0.3s ease',
                    display: 'block',
                    marginBottom: '0.75rem'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#1a73e8';
                    e.target.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#5f6368';
                    e.target.style.transform = 'translateX(0)';
                  }}
                >
                  {link} →
                </a>
              ))}
            </div>

            <div>
              <h3 style={{
                fontSize: '1.1rem',
                fontWeight: 600,
                color: '#202124',
                marginBottom: '1.5rem'
              }}>
                Enterprise
              </h3>
              {[
                'Download Chrome Browser',
                'Chrome Browser for Enterprise',
                'Chrome Devices',
                'ChromeOS',
                'Google Cloud',
                'Google Workspace'
              ].map((link, index) => (
                <a
                  key={index}
                  href="#"
                  style={{
                    color: '#5f6368',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    transition: 'all 0.3s ease',
                    display: 'block',
                    marginBottom: '0.75rem'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#1a73e8';
                    e.target.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#5f6368';
                    e.target.style.transform = 'translateX(0)';
                  }}
                >
                  {link} →
                </a>
              ))}
            </div>

            <div>
              <h3 style={{
                fontSize: '1.1rem',
                fontWeight: 600,
                color: '#202124',
                marginBottom: '1.5rem'
              }}>
                Education
              </h3>
              {[
                'Google Chrome Browser',
                'Devices'
              ].map((link, index) => (
                <a
                  key={index}
                  href="#"
                  style={{
                    color: '#5f6368',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    transition: 'all 0.3s ease',
                    display: 'block',
                    marginBottom: '0.75rem'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#1a73e8';
                    e.target.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#5f6368';
                    e.target.style.transform = 'translateX(0)';
                  }}
                >
                  {link} →
                </a>
              ))}
            </div>

            <div>
              <h3 style={{
                fontSize: '1.1rem',
                fontWeight: 600,
                color: '#202124',
                marginBottom: '1.5rem'
              }}>
                Dev and Partners
              </h3>
              {[
                'Chromium',
                'ChromeOS',
                'Chrome Web Store',
                'Chrome Experiments',
                'Chrome Beta',
                'Chrome Dev',
                'Chrome Canary'
              ].map((link, index) => (
                <a
                  key={index}
                  href="#"
                  style={{
                    color: '#5f6368',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    transition: 'all 0.3s ease',
                    display: 'block',
                    marginBottom: '0.75rem'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#1a73e8';
                    e.target.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#5f6368';
                    e.target.style.transform = 'translateX(0)';
                  }}
                >
                  {link} →
                </a>
              ))}
            </div>

            <div>
              <h3 style={{
                fontSize: '1.1rem',
                fontWeight: 600,
                color: '#202124',
                marginBottom: '1.5rem'
              }}>
                Support
              </h3>
              {[
                'Chrome Help',
                'Update Chrome',
                'Chrome Tips',
                'Google Chrome Blog'
              ].map((link, index) => (
                <a
                  key={index}
                  href="#"
                  style={{
                    color: '#5f6368',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    transition: 'all 0.3s ease',
                    display: 'block',
                    marginBottom: '0.75rem'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#1a73e8';
                    e.target.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#5f6368';
                    e.target.style.transform = 'translateX(0)';
                  }}
                >
                  {link} →
                </a>
              ))}
            </div>
          </div>

          {/* Footer bottom */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '2rem',
            flexWrap: 'wrap',
            gap: '2rem'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2rem',
              flexWrap: 'wrap'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <svg viewBox="0 0 24 24" style={{ width: '24px', height: '24px' }}>
                  <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span style={{ color: '#5f6368', fontSize: '1rem', fontWeight: '500' }}>Google</span>
              </div>
              
              {[
                'Privacy and Terms',
                'About Google',
                'Google products'
              ].map((link, index) => (
                <a
                  key={index}
                  href="#"
                  style={{
                    color: '#5f6368',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#1a73e8';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#5f6368';
                  }}
                >
                  {link}
                </a>
              ))}
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2rem'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#5f6368',
                fontSize: '0.9rem'
              }}>
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '16px', height: '16px' }}>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                Help
              </div>
              <select style={{
                background: 'transparent',
                border: 'none',
                color: '#5f6368',
                fontSize: '0.9rem',
                cursor: 'pointer'
              }}>
                <option>English - India</option>
              </select>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;