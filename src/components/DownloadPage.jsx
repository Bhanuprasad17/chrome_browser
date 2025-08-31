import React from 'react';
import styles from './DownloadPage.module.scss';
import chromeLogo from '../assets/chrome-logo.png'; // You may need to add this asset or replace with a URL

const DownloadPage = () => {
  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <div className={styles.logoSection}>
          <img src={chromeLogo} alt="Chrome logo" className={styles.logo} />
          <span className={styles.logoText}>Chrome</span>
        </div>
        <nav className={styles.nav}>
          <a href="#" className={styles.navLink}>Safety</a>
          <a href="#" className={styles.navLink}>Features</a>
          <a href="#" className={styles.navLink}>Customization</a>
          <a href="#" className={styles.navLink}>AI</a>
          <button className={styles.downloadButton}>⬇ Download Chrome</button>
        </nav>
      </header>

      <main className={styles.mainContent}>
        <h1 className={styles.headline}>
          The browser built to be <br /> fast
        </h1>
        <button className={styles.mainDownloadButton}>
          <span className={styles.downloadIcon}>⬇</span>
          Download Chrome
        </button>
      </main>
    </div>
  );
};

export default DownloadPage;