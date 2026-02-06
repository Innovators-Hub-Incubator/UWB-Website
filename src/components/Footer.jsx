import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Mail, ArrowUpRight } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.column}>
          <h3 className={styles.colTitle}>Navigation</h3>
          <ul className={styles.linkList}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/innovators">Innovators</Link></li>
            <li><Link to="/contacts">Contact</Link></li>
          </ul>
        </div>
        
        <div className={styles.column}>
          <h3 className={styles.colTitle}>Connect</h3>
          <ul className={styles.linkList}>
            <li>
              <a href="https://www.linkedin.com/company/innovators-hub-incubator/" target="_blank" rel="noopener noreferrer">
                LinkedIn <ArrowUpRight size={14} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/uwb_innovatorshub/" target="_blank" rel="noopener noreferrer">
                Instagram <ArrowUpRight size={14} />
              </a>
            </li>
            <li>
              <a href="mailto:innovatorshub@uw.edu">
                Email <ArrowUpRight size={14} />
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3 className={styles.colTitle}>Join Us</h3>
          <p className={styles.desc}>
            Ready to build something extraordinary? Join the Innovators Hub community today.
          </p>
          <a href="https://forms.gle/JdZJwp7SfnRxis8B9" target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
            Apply Now
          </a>
        </div>
      </div>

      <div className={styles.bigTextContainer}>
        <motion.h1 
          className={styles.bigText}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          INNOVATORS HUB
        </motion.h1>
      </div>

      <div className={styles.bottomBar}>
        <p>© 2026 UWB Innovators Hub. All rights reserved.</p>
        <p>Designed & Built by Students.</p>
      </div>
    </footer>
  );
}
