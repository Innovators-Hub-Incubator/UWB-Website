import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <a href="https://www.linkedin.com/company/innovators-hub-incubator/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://www.instagram.com/uwb_innovatorshub/" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
      <p>Designed & built @ UWB Innovators Hub · 2025</p>
    </footer>
  );
}
