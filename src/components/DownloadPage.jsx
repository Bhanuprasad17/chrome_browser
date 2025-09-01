import React, { useState } from 'react';

const DownloadPage = () => {
  const [isChecked, setIsChecked] = useState(true);

  const styles = {
    pageContainer: {
      fontFamily: "'Google Sans', 'Roboto', Arial, sans-serif",
      color: '#202124',
      backgroundColor: '#fff',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 0,
      padding: '40px 24px',
      boxSizing: 'border-box',
    },
    mainContent: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      maxWidth: '600px',
      width: '100%',
    },
    mainLogo: {
      width: '120px',
      height: '120px',
      borderRadius: '50%',
      background: 'conic-gradient(from 45deg, #ea4335 0deg 90deg, #fbbc05 90deg 180deg, #34a853 180deg 270deg, #4285f4 270deg 360deg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '40px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    },
    mainLogoInner: {
      width: '72px',
      height: '72px',
      backgroundColor: '#fff',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    mainLogoInnerCircle: {
      width: '44px',
      height: '44px',
      backgroundColor: '#4285f4',
      borderRadius: '50%',
    },
    headline: {
      fontWeight: 400,
      fontSize: '48px',
      lineHeight: '56px',
      marginBottom: '40px',
      color: '#202124',
      letterSpacing: '-0.5px',
      margin: '0 0 40px 0',
    },
    mainDownloadButton: {
      backgroundColor: '#1a73e8',
      color: 'white',
      border: 'none',
      borderRadius: '24px',
      padding: '12px 24px',
      fontSize: '14px',
      fontWeight: 500,
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      marginBottom: '16px',
      transition: 'all 0.2s ease',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12)',
    },
    downloadIcon: {
      fontSize: '14px',
      fontWeight: 'bold',
    },
    updateLink: {
      color: '#1a73e8',
      fontSize: '14px',
      marginBottom: '16px',
      cursor: 'pointer',
      textDecoration: 'none',
    },
    systemInfo: {
      fontSize: '13px',
      color: '#5f6368',
      marginBottom: '32px',
    },
    checkboxSection: {
      fontSize: '13px',
      color: '#3c4043',
      marginBottom: '24px',
      maxWidth: '480px',
      width: '100%',
    },
    checkboxLabel: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '12px',
      cursor: 'pointer',
      lineHeight: 1.5,
      textAlign: 'left',
    },
    checkbox: {
      marginTop: '2px',
      accentColor: '#1a73e8',
      width: '16px',
      height: '16px',
    },
    learnMore: {
      color: '#1a73e8',
      textDecoration: 'none',
    },
    termsText: {
      fontSize: '11px',
      color: '#5f6368',
      maxWidth: '480px',
      lineHeight: 1.4,
      textAlign: 'center',
    },
    link: {
      color: '#1a73e8',
      textDecoration: 'none',
    },
  };

  return (
    <div style={styles.pageContainer}>
      <main style={styles.mainContent}>
        <div style={styles.mainLogo}>
          <div style={styles.mainLogoInner}>
            <div style={styles.mainLogoInnerCircle}></div>
          </div>
        </div>
        
        <h1 style={styles.headline}>
          The browser<br />
          built to be yours
        </h1>
        
        <button 
          style={styles.mainDownloadButton}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#1557b0';
            e.target.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#1a73e8';
            e.target.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.12)';
          }}
        >
          <span style={styles.downloadIcon}>⬇</span>
          Download Chrome
        </button>
        
        <a 
          href="#" 
          style={styles.updateLink}
          onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
          onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
        >
          I want to update Chrome
        </a>
        
        <div style={styles.systemInfo}>
          For Windows 11/10 64-bit
        </div>
        
        <div style={styles.checkboxSection}>
          <label style={styles.checkboxLabel}>
            <input 
              type="checkbox" 
              checked={isChecked} 
              onChange={(e) => setIsChecked(e.target.checked)}
              style={styles.checkbox}
            />
            <span>
              Help make Google Chrome better by automatically sending usage statistics and crash reports to Google. <a 
                href="#" 
                style={styles.learnMore}
                onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
              >Learn more</a>
            </span>
          </label>
        </div>
        
        <div style={styles.termsText}>
          By downloading Chrome, you agree to the <a 
            href="#" 
            style={styles.link}
            onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
            onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
          >Google Terms of Service</a> and{' '}
          <a 
            href="#" 
            style={styles.link}
            onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
            onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
          >Chrome and ChromeOS Additional Terms of Service</a>
        </div>
      </main>
    </div>
  );
};

export default DownloadPage;