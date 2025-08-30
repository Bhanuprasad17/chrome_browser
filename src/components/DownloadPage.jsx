import React from 'react';
import styles from './DownloadPage.module.scss';
import chromeLogo from '../assets/chrome-logo.png'; // You may need to add this asset or replace with a URL

const DownloadPage = () => {
  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <div className={styles.logoSection}>
          <img src={chromeLogo} alt="Chrome logo" className={styles.logo} />
          <span className={styles.logoText}>chrome</span>
        </div>
        <nav className={styles.nav}>
          <a href="#" className={styles.navLink}>Safety</a>
          <a href="#" className={styles.navLink}>By Google</a>
          <a href="#" className={styles.navLink} target="_blank" rel="noopener noreferrer">
            Extensions <span className={styles.externalArrow}>↗</span>
          </a>
        </nav>
      </header>

      <main className={styles.mainContent}>
        <img src={chromeLogo} alt="Chrome logo" className={styles.mainLogo} />
        <h1 className={styles.headline}>The browser<br />built to be yours</h1>
        <button className={styles.downloadButton}>
          <span className={styles.downloadIcon}>⬇</span> Download Chrome
        </button>
        <a href="#" className={styles.updateLink}>I want to update Chrome</a>
        <p className={styles.systemInfo}>For Windows 11/10 64-bit</p>

        <div className={styles.checkboxSection}>
          <label className={styles.checkboxLabel}>
            <input type="checkbox" defaultChecked />
            Help make Google Chrome better by automatically sending usage statistics and crash reports to Google. <a href="#" className={styles.learnMore}>Learn more</a>
          </label>
        </div>

        <p className={styles.termsText}>
          By downloading Chrome, you agree to the <a href="#" className={styles.link}>Google Terms of Service</a> and <a href="#" className={styles.link}>Chrome and ChromeOS Additional Terms of Service</a>
        </p>
      </main>
    </div>
  );
};

export default DownloadPage;
